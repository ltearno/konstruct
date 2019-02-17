"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var jsYaml = __importStar(require("js-yaml"));
function copyObject(o) {
    if (Array.isArray(o))
        return (o.map(function (item) { return copyObject(item); }));
    if (o && typeof o === 'object') {
        var result_1 = {};
        Object.getOwnPropertyNames(o).forEach(function (name) { return result_1[name] = copyObject(o[name]); });
        return result_1;
    }
    return o;
}
exports.copyObject = copyObject;
function mergeObjects(a, b) {
    if (!b)
        return a.copy();
    if (a && b && Array.isArray(a) && Array.isArray(b)) {
        var result = [];
        for (var i = 0; i < a.length || i < b.length; i++)
            result.push(mergeObjects(i < a.length ? a[i] : null, i < b.length ? b[i] : null));
        return result;
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        var result_2 = copyObject(a);
        Object.getOwnPropertyNames(b).forEach(function (name) { return result_2[name] = mergeObjects(a[name], b[name]); });
        return result_2;
    }
    if (a && typeof a !== typeof b)
        throw "error merging objects !";
    return b;
}
exports.mergeObjects = mergeObjects;
function joinPath(parts) {
    return parts.map(function (p) { return p.replace('.', '\\.'); }).join('.');
}
function setObjectProperty(o, path, value) {
    var init = o;
    var parts = path.split('.');
    // join parts when previous part finished with '\'
    for (var i = 0; i < parts.length - 1; i++) {
        if (parts[i].charAt(parts[i].length - 1) == '\\') {
            parts[i] = parts[i].substr(0, parts[i].length - 1) + '.' + parts[i + 1];
            console.log("PART " + i + " " + parts[i]);
            parts.splice(i + 1, 1);
            i--;
            continue;
        }
    }
    console.log("PARTS " + JSON.stringify(parts));
    var _loop_1 = function (i) {
        if (!o[parts[i]])
            o[parts[i]] = {};
        o = o[parts[i]];
        if (typeof o !== 'object') {
            throw "wrong receiver type in setObjectProperty(\"" + joinPath(parts) + "\") (field at path \"" + joinPath(parts.filter(function (v, index) { return index <= i; })) + "\" already exists with type \"" + typeof o + "\"; it should be object or null)";
        }
    };
    for (var i = 0; i < parts.length - 1; i++) {
        _loop_1(i);
    }
    o[parts[parts.length - 1]] = value;
    return init;
}
exports.setObjectProperty = setObjectProperty;
function installPlugin(func, name) {
    if (name === void 0) { name = undefined; }
    if (!name)
        name = func.name;
    if (!name)
        throw "plugin functions should have a name";
    Object.prototype[name] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.unshift(this);
        return func.call.apply(func, [null].concat(args));
    };
}
exports.installPlugin = installPlugin;
installPlugin(copyObject, 'copy');
installPlugin(setObjectProperty, 'set');
installPlugin(mergeObjects, 'merge');
installPlugin(function (o, path, value) {
    var init = o;
    var parts = path.split('.');
    for (var i = 0; i < parts.length - 1; i++) {
        if (!o[parts[i]])
            o[parts[i]] = {};
        o = o[parts[i]];
    }
    o[parts[parts.length - 1]] = mergeObjects(o[parts[parts.length - 1]], value);
    return init;
}, 'mergeAt');
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
    });
});
function preparseYaml(input) {
    var i = 0;
    while (input[i] == ' ')
        i++;
    if (i)
        return input.split('\n').map(function (l) { return l.substr(i); }).join('\n');
    return input;
}
exports.preparseYaml = preparseYaml;
function yamlParse(input) {
    return jsYaml.safeLoad(preparseYaml(input));
}
exports.yamlParse = yamlParse;
exports.yamlify = function (input) { return jsYaml.safeDump(input, { sortKeys: true, noArrayIndent: true, noRefs: true }); };
exports.yamlifyAll = function (docs) { return docs.map(function (input) { return jsYaml.safeDump(input, { sortKeys: true, noArrayIndent: true, noRefs: true }); }).join("\n---\n\n"); };
exports.yamlParseAll = function (input) { return jsYaml.safeLoadAll(preparseYaml(input)); };
exports.command = function (cmd) { return child_process_1.execSync(cmd).toString('utf8').trim(); };
exports.run = function (cmd) { return console.log(child_process_1.execSync(cmd).toString('utf8').trim()); };
exports.env = function (name) { return process.env[name]; };
