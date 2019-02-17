"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiTools = __importStar(require("./kubernetes-api-tools"));
var fs = __importStar(require("fs"));
var log = console.log.bind(console);
var swagger = JSON.parse(fs.readFileSync('kubernetes-swagger.json', { encoding: 'utf8' }));
function getBuilderName(name) {
    return ApiTools.camelCase(ApiTools.getTypescriptResourceName(name));
}
log("import * as k8s from './kubernetes-api'");
log("import './core'");
log('');
log("\nexport type Optional<T> = {\n    [P in keyof T]?: Optional<T[P]>;\n}\n");
function getTypescriptBuilder(property) {
    if (property.type) {
        switch (property.type) {
            case 'integer':
                return '0';
            case 'array':
                return '[]';
            case 'boolean':
                return 'false';
        }
        return 'null';
    }
    else if (property['$ref']) {
        var ref = property['$ref'];
        if (!ref.startsWith('#/definitions/'))
            throw "cannot resolve reference to " + ref;
        return ApiTools.camelCase(ApiTools.getTypescriptResourceName(property['$ref'].substr('#/definitions/'.length))) + "()";
    }
    throw "cannot find property type !";
}
exports.getTypescriptBuilder = getTypescriptBuilder;
Object.getOwnPropertyNames(swagger.definitions)
    .sort()
    .forEach(function (name) {
    var def = swagger.definitions[name];
    ApiTools.dumpComment(def.description, '', log);
    log("export function " + getBuilderName(name) + "(options?: Optional<k8s." + ApiTools.getTypescriptResourceName(name) + ">) : k8s." + ApiTools.getTypescriptResourceName(name) + " {");
    log("  return (<k8s." + ApiTools.getTypescriptResourceName(name) + ">{");
    var required = def.required || [];
    if (Object.getOwnPropertyNames(def.properties).includes('apiVersion'))
        log("    apiVersion: \"" + name.substr(0, name.lastIndexOf('.')) + "\",");
    if (Object.getOwnPropertyNames(def.properties).includes('kind'))
        log("    kind: \"" + name.substr(name.lastIndexOf('.') + 1) + "\",");
    for (var _i = 0, _a = Object.getOwnPropertyNames(def.properties).sort(); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        if (propertyName != "apiVersion" && propertyName != "kind" && required.includes(propertyName)) {
            log("    " + propertyName + ": (options && options." + propertyName + ") || " + getTypescriptBuilder(def.properties[propertyName]) + ",");
        }
    }
    log("  }).merge(options)");
    log("}");
    log('');
});
