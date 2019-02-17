export function getTypescriptResourceName(name: string) {
    let i = 0
    while (name.indexOf('.') >= 0) {
        let prefix = name.substr(name.indexOf('.') + 1)
        let suffix = name.substr(0, name.indexOf('.'))
        suffix = suffix.substr(0, 1).toLocaleUpperCase() + suffix.substr(1)

        i++
        if (i == 1 && suffix == 'V1') {
            name = prefix
            continue
        }

        name = prefix + suffix
    }
    return name
}

export function getTypescriptType(property) {
    if (property.type) {
        switch (property.type) {
            case 'integer':
                return 'number'
            case 'array':
                return getTypescriptType(property.items) + '[]'
            case 'object':
                if (property.format == 'int-or-string')
                    return 'number | string'
                return 'object'
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

export function dumpComment(description, indent: string, log) {
    if (description) {
        log(`${indent}/**`)
        description.split('\n').forEach(line => {
            while (line.includes('*/'))
                line = line.replace('*/', '...')
            log(`${indent} * ${line}`)
        })
        log(`${indent} */`)
    }
}

export function camelCase(s: string) {
    return s.substr(0, 1).toLocaleLowerCase() + s.substr(1)
}