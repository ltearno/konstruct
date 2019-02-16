import * as ApiTools from './kubernetes-api-tools'
import * as fs from 'fs'

const log = console.log.bind(console)

const swagger = JSON.parse(fs.readFileSync('kubernetes-swagger.json', { encoding: 'utf8' }))

Object.getOwnPropertyNames(swagger.definitions)
    .sort()
    .forEach(name => {
        let def = swagger.definitions[name]
        ApiTools.dumpComment(def.description, '', log)
        log(`export interface ${ApiTools.getTypescriptResourceName(name)} {`)
        let required = def.required || []
        for (let propertyName of Object.getOwnPropertyNames(def.properties).sort()) {
            ApiTools.dumpComment(def.properties[propertyName].description, '  ', log)
            if (propertyName == "apiVersion") {
                log(`  ${propertyName}: "${name.substr(0, name.lastIndexOf('.'))}"`)
            }
            else if (propertyName == "kind") {
                log(`  ${propertyName}: "${name.substr(name.lastIndexOf('.') + 1)}"`)
            }
            else {
                log(`  ${propertyName}${!required.includes(propertyName) ? '?' : ''}: ${ApiTools.getTypescriptType(def.properties[propertyName])}`)
            }
        }
        log(`}`)
        log('')
    })
