import { execSync } from 'child_process'
import * as jsYaml from 'js-yaml'

export function copyObject<T>(o): T {
    if (Array.isArray(o))
        return <T><unknown>(o.map(item => copyObject(item)))

    if (o && typeof o === 'object') {
        let result = {}
        Object.getOwnPropertyNames(o).forEach(name => result[name] = copyObject(o[name]))
        return <T><unknown>result
    }

    return o
}

export function mergeObjects<T, U>(a: T, b: U): T | U {
    if (!b)
        return a && a.copy()

    if (a && b && Array.isArray(a) && Array.isArray(b)) {
        let result: any[] = []
        for (let i = 0; i < a.length || i < b.length; i++)
            result.push(mergeObjects(i < a.length ? a[i] : null, i < b.length ? b[i] : null))
        return <T | U><unknown>result
    }

    if (a && b && typeof a === 'object' && typeof b === 'object') {
        let result = copyObject(a)
        Object.getOwnPropertyNames(b).forEach(name => result[name] = mergeObjects(a[name], b[name]))
        return <T | U><unknown>result
    }

    if (a && typeof a !== typeof b)
        throw `error merging objects !`

    return b
}

function joinPath(parts: string[]) {
    return parts.map(p => p.replace('.', '\\.')).join('.')
}

export function setObjectProperty<T>(o: T, path: string, value): T {
    const init = o
    let parts = path.split('.')
    // join parts when previous part finished with '\'
    for (let i = 0; i < parts.length - 1; i++) {
        if (parts[i].charAt(parts[i].length - 1) == '\\') {
            parts[i] = parts[i].substr(0, parts[i].length - 1) + '.' + parts[i + 1]
            console.log(`PART ${i} ${parts[i]}`)
            parts.splice(i + 1, 1)
            i--
            continue
        }
    }

    console.log(`PARTS ${JSON.stringify(parts)}`)

    for (let i = 0; i < parts.length - 1; i++) {
        if (!o[parts[i]])
            o[parts[i]] = {}

        o = o[parts[i]]

        if (typeof o !== 'object') {
            throw `wrong receiver type in setObjectProperty("${joinPath(parts)}") (field at path "${joinPath(parts.filter((v, index) => index <= i))}" already exists with type "${typeof o}"; it should be object or null)`
        }
    }

    o[parts[parts.length - 1]] = value

    return init
}

type Optional<T> = {
    [P in keyof T]?: T[P] extends boolean ? boolean : T[P] extends string ? string : T[P] extends number ? number : T[P] extends (infer I)[] ? Optional<I>[] : Optional<T[P]>
}

declare global {
    interface Object {
        copy<T>(this: T): T
        set<T>(this: T, path: string, value: any): T
        merge<T, U extends Optional<T>>(this: T, other: U): T
        mergeAt<T>(this: T, path: string, value: any): T
    }
}

export function installPlugin(func, name: string = undefined): void {
    if (!name)
        name = func.name
    if (!name)
        throw `plugin functions should have a name`
    Object.prototype[name] = function (...args) {
        args.unshift(this)
        return func.call(null, ...args)
    }
}

installPlugin(copyObject, 'copy')
installPlugin(setObjectProperty, 'set')
installPlugin(mergeObjects, 'merge')
installPlugin(function (o, path, value) {
    const init = o
    let parts = path.split('.')
    for (let i = 0; i < parts.length - 1; i++) {
        if (!o[parts[i]])
            o[parts[i]] = {}
        o = o[parts[i]]
    }
    o[parts[parts.length - 1]] = mergeObjects(o[parts[parts.length - 1]], value)
    return init
}, 'mergeAt')

export function preparseYaml(input) {
    let i = 0
    while (input[i] == ' ')
        i++
    if (i)
        return input.split('\n').map(l => l.substr(i)).join('\n')
    return input
}

export function yamlParse(input) {
    return jsYaml.safeLoad(preparseYaml(input))
}

export const yamlify = input => jsYaml.safeDump(input, { sortKeys: true, noArrayIndent: true, noRefs: true })
export const yamlifyAll = (docs: any[]) => docs.map(input => jsYaml.safeDump(input, { sortKeys: true, noArrayIndent: true, noRefs: true })).join(`\n---\n\n`)
export const yamlParseAll = input => jsYaml.safeLoadAll(preparseYaml(input))
export const command = cmd => execSync(cmd).toString('utf8').trim()
export const run = cmd => console.log(execSync(cmd).toString('utf8').trim())
export const env = name => process.env[name]