import * as k from './konstructor'
import * as fs from 'fs'

const log = console.log.bind(console)

const swagger = JSON.parse(fs.readFileSync('kubernetes-swagger.json', { encoding: 'utf8' }))

function getTypescriptResourceName(name: string) {
    //if (name.startsWith('v1.'))
    //    return name.substr(3)

    while (name.indexOf('.') >= 0) {
        let prefix = name.substr(name.indexOf('.') + 1)
        let suffix = name.substr(0, name.indexOf('.'))
        suffix = suffix.substr(0, 1).toLocaleUpperCase() + suffix.substr(1)
        name = prefix + suffix
    }
    return name
}

function getTypescriptType(property) {
    if (property.type) {
        switch (property.type) {
            case 'integer':
                return 'number'
            case 'array':
                return getTypescriptType(property.items) + '[]'
            case 'object':
                return 'Object'
        }

        return property.type
    }
    else if (property['$ref']) {
        let ref = property['$ref']
        if (!ref.startsWith('#/definitions/'))
            throw `cannot resolve reference to ${ref}`
        return getTypescriptResourceName(property['$ref'].substr('#/definitions/'.length))
    }

    throw `cannot find property type !`
}

Object.getOwnPropertyNames(swagger.definitions)
    .sort()
    .forEach(name => {
        let def = swagger.definitions[name]
        if (def.description) {
            log(`/**`)
            def.description.split('\n').forEach(line => {
                while (line.includes('*/'))
                    line = line.replace('*/', '...')
                log(` * ${line}`)
            })
            log(` */`)
        }
        log(`export interface ${getTypescriptResourceName(name)} {`)
        let required = def.required || []
        for (let propertyName of Object.getOwnPropertyNames(def.properties).sort()) {
            if (def.properties[propertyName].description) {
                log(`  /**`)
                def.properties[propertyName].description.split('\n').forEach(line => {
                    while (line.includes('*/'))
                        line = line.replace('*/', '...')
                    log(`   * ${line}`)
                })
                log(`   */`)
            }
            log(`  ${propertyName}${!required.includes(propertyName) ? '?' : ''}: ${getTypescriptType(def.properties[propertyName])}`)
        }
        log(`}`)
        log('')
    })
