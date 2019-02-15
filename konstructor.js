const { execSync } = require('child_process')
const jsYaml = require('js-yaml')

function copyObject(o) {
    if (Array.isArray(o))
        return o.map(item => copyObject(item))

    if (o && typeof o === 'object') {
        let result = {}
        Object.getOwnPropertyNames(o).forEach(name => result[name] = copyObject(o[name]))
        return result
    }

    return o
}

function mergeObjects(a, b) {
    if (Array.isArray(a) && Array.isArray(b))
        return o.map(item => copyObject(item))

    if (a && typeof a === 'object' && b && typeof b === 'object') {
        let result = copyObject(a)
        Object.getOwnPropertyNames(b).forEach(name => result[name] = mergeObjects(a[name], b[name]))
        return result
    }

    return b
}

function setObjectProperty(o, path, value) {
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

function installPlugin(func, name) {
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
                    name: name,
                    labels: {
                        app: name
                    }
                },
            }
        }
    })
})

function preparseYaml(input) {
    let i = 0
    while (input[i] == ' ')
        i++
    if (i)
        return input.split('\n').map(l => l.substr(i)).join('\n')
    return input
}

function yamlparse(input) {
    return jsYaml.safeLoad(preparseYaml(input))
}

module.exports = {
    copyObject,
    mergeObjects,
    setObjectProperty,
    installPlugin,
    yamlify: input => jsYaml.safeDump(input, { sortKeys: true }),
    yamlparse,
    yamlparseAll: input => jsYaml.safeLoadAll(preparseYaml(input)),
    command: cmd => execSync(cmd),
    env: name => process.env[name]
}