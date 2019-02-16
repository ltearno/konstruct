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
Object.getOwnPropertyNames(swagger.definitions)
    .sort()
    .forEach(function (name) {
    var def = swagger.definitions[name];
    ApiTools.dumpComment(def.description, '', log);
    log("export interface " + ApiTools.getTypescriptResourceName(name) + " {");
    var required = def.required || [];
    for (var _i = 0, _a = Object.getOwnPropertyNames(def.properties).sort(); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        ApiTools.dumpComment(def.properties[propertyName].description, '  ', log);
        if (propertyName == "apiVersion") {
            log("  " + propertyName + ": \"" + name.substr(0, name.lastIndexOf('.')) + "\"");
        }
        else if (propertyName == "kind") {
            log("  " + propertyName + ": \"" + name.substr(name.lastIndexOf('.') + 1) + "\"");
        }
        else {
            log("  " + propertyName + (!required.includes(propertyName) ? '?' : '') + ": " + ApiTools.getTypescriptType(def.properties[propertyName]));
        }
    }
    log("}");
    log('');
});
