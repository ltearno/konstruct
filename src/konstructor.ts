import { execSync } from 'child_process'
import * as jsYaml from 'js-yaml'
import * as common from './common'

export { common }

export function copyObject(o) {
    if (Array.isArray(o))
        return o.map(item => copyObject(item))

    if (o && typeof o === 'object') {
        let result = {}
        Object.getOwnPropertyNames(o).forEach(name => result[name] = copyObject(o[name]))
        return result
    }

    return o
}

export function mergeObjects(a, b) {
    if (a && b && Array.isArray(a) && Array.isArray(b)) {
        let result: any[] = []
        for (let i = 0; i < a.length || i < b.length; i++)
            result.push(mergeObjects(i < a.length ? a[i] : null, i < b.length ? b[i] : null))
        return result
    }

    if (a && b && typeof a === 'object' && typeof b === 'object') {
        let result = copyObject(a)
        Object.getOwnPropertyNames(b).forEach(name => result[name] = mergeObjects(a[name], b[name]))
        return result
    }

    if (a && typeof a !== typeof b)
        throw `error merging objects !`

    return b
}

export function setObjectProperty(o, path, value) {
    const init = o
    let parts = path.split('.')
    for (let i = 0; i < parts.length - 1; i++) {
        if (!o[parts[i]])
            o[parts[i]] = {}
        o = o[parts[i]]
    }
    o[parts[parts.length - 1]] = value
    return init
}

export function installPlugin(func, name: string = undefined) {
    if (!name)
        name = func.name
    if (!name)
        throw `plugin functions should have a name`
    Object.prototype[name] = function (...args) {
        args.unshift(this)
        return func.call(null, ...args)
    }
}

declare global {
    interface Object {
        copy(): Object
        set(path: string, value: any): Object
        merge(other: any): Object
        mergeAt(path: string, value: any): Object
        addDeploymentDefaultNameAndLabels(name: string): Object
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

installPlugin(function addDeploymentDefaultNameAndLabels(object, name) {
    return object.merge({
        metadata: {
            name: name,
            labels: {
                app: name
            }
        },
        spec: {
            template: {
                metadata: {
                    labels: {
                        name: name,
                        app: name
                    }
                },
            }
        }
    })
})

export function preparseYaml(input) {
    let i = 0
    while (input[i] == ' ')
        i++
    if (i)
        return input.split('\n').map(l => l.substr(i)).join('\n')
    return input
}

export function yamlparse(input) {
    return jsYaml.safeLoad(preparseYaml(input))
}

export const yamlify = input => jsYaml.safeDump(input, { sortKeys: true, noArrayIndent: true, noRefs: true })
export const yamlparseAll = input => jsYaml.safeLoadAll(preparseYaml(input))
export const command = cmd => execSync(cmd).toString('utf8').trim()
export const run = cmd => console.log(execSync(cmd).toString('utf8').trim())
export const env = name => process.env[name]