export function getTypescriptResourceName(name: string) {
    while (name.indexOf('.') >= 0) {
        let prefix = name.substr(name.indexOf('.') + 1)
        let suffix = name.substr(0, name.indexOf('.'))
        suffix = suffix.substr(0, 1).toLocaleUpperCase() + suffix.substr(1)
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