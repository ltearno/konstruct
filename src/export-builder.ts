import * as ApiTools from './kubernetes-api-tools'
import * as fs from 'fs'

const log = console.log.bind(console)

const swagger = JSON.parse(fs.readFileSync('kubernetes-swagger.json', { encoding: 'utf8' }))

function getBuilderName(name: string) {
    return ApiTools.camelCase(ApiTools.getTypescriptResourceName(name))
}

log(`import * as k8s from './kubernetes-model'`)
log(`import * as core from './core'`)
log('')
log(`
export type Optional<T> = {
    [P in keyof T]?: Optional<T[P]>;
}
`)

export function getTypescriptBuilder(property) {
    if (property.type) {
        switch (property.type) {
            case 'integer':
                return '0'
            case 'array':
                return '[]'
            case 'boolean':
                return 'false'
        }

        return 'null'
    }
    else if (property['$ref']) {
        let ref = property['$ref']
        if (!ref.startsWith('#/definitions/'))
            throw `cannot resolve reference to ${ref}`
        return `${ApiTools.camelCase(ApiTools.getTypescriptResourceName(property['$ref'].substr('#/definitions/'.length)))}()`
    }

    throw `cannot find property type !`
}

Object.getOwnPropertyNames(swagger.definitions)
    .sort()
    .forEach(name => {
        let def = swagger.definitions[name]
        ApiTools.dumpComment(def.description, '', log)
        log(`export function ${getBuilderName(name)}(options?: Optional<k8s.${ApiTools.getTypescriptResourceName(name)}>) : k8s.${ApiTools.getTypescriptResourceName(name)} {`)
        log(`  return (<k8s.${ApiTools.getTypescriptResourceName(name)}>{`)
        let required = def.required || []
        if (Object.getOwnPropertyNames(def.properties).includes('apiVersion'))
            log(`    apiVersion: "${name.substr(0, name.lastIndexOf('.'))}",`)
        if (Object.getOwnPropertyNames(def.properties).includes('kind'))
            log(`    kind: "${name.substr(name.lastIndexOf('.') + 1)}",`)
        for (let propertyName of Object.getOwnPropertyNames(def.properties).sort()) {
            if (propertyName != "apiVersion" && propertyName != "kind" && required.includes(propertyName)) {
                log(`    ${propertyName}: (options && options.${propertyName}) || ${getTypescriptBuilder(def.properties[propertyName])},`)
            }
        }
        log(`  }).merge(options)`)
        log(`}`)
        log('')
    })
