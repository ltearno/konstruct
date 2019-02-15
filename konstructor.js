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
    if (a && b && Array.isArray(a) && Array.isArray(b)) {
        let result = []
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
    yamlify: input => jsYaml.safeDump(input, { sortKeys: true, noArrayIndent: true, noRefs: true }),
    yamlparse,
    yamlparseAll: input => jsYaml.safeLoadAll(preparseYaml(input)),
    command: cmd => execSync(cmd).toString('utf8').trim(),
    run: cmd => console.log(execSync(cmd).toString('utf8').trim()),
    env: name => process.env[name]
}