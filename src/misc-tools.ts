import * as k from './konstruct'
import * as fs from 'fs'

export function interpolate(templateString, context: Object) {
    let vars = Object.keys(context)
    let values = vars.map(k => context[k])
    vars.unshift('k')
    values.unshift(k)
    const func = new Function(...vars, "return `" + templateString + "`;")
    return func(...values)
}

export function interpolateFile(path: string, context: Object) {
    return k.interpolate(fs.readFileSync(path, { encoding: 'utf8' }), context)
}
