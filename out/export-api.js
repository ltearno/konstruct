"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var log = console.log.bind(console);
var swagger = JSON.parse(fs.readFileSync('kubernetes-swagger.json', { encoding: 'utf8' }));
function getTypescriptResourceName(name) {
    //if (name.startsWith('v1.'))
    //    return name.substr(3)
    while (name.indexOf('.') >= 0) {
        var prefix = name.substr(name.indexOf('.') + 1);
        var suffix = name.substr(0, name.indexOf('.'));
        suffix = suffix.substr(0, 1).toLocaleUpperCase() + suffix.substr(1);
        name = prefix + suffix;
    }
    return name;
}
function getTypescriptType(property) {
    if (property.type) {
        switch (property.type) {
            case 'integer':
                return 'number';
            case 'array':
                return getTypescriptType(property.items) + '[]';
            case 'object':
                return 'Object';
        }
        return property.type;
    }
    else if (property['$ref']) {
        var ref = property['$ref'];
        if (!ref.startsWith('#/definitions/'))
            throw "cannot resolve reference to " + ref;
        return getTypescriptResourceName(property['$ref'].substr('#/definitions/'.length));
    }
    throw "cannot find property type !";
}
Object.getOwnPropertyNames(swagger.definitions)
    .sort()
    .forEach(function (name) {
    var def = swagger.definitions[name];
    if (def.description) {
        log("/**");
        def.description.split('\n').forEach(function (line) {
            while (line.includes('*/'))
                line = line.replace('*/', '...');
            log(" * " + line);
        });
        log(" */");
    }
    log("export interface " + getTypescriptResourceName(name) + " {");
    var required = def.required || [];
    for (var _i = 0, _a = Object.getOwnPropertyNames(def.properties).sort(); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        if (def.properties[propertyName].description) {
            log("  /**");
            def.properties[propertyName].description.split('\n').forEach(function (line) {
                while (line.includes('*/'))
                    line = line.replace('*/', '...');
                log("   * " + line);
            });
            log("   */");
        }
        log("  " + propertyName + (!required.includes(propertyName) ? '?' : '') + ": " + getTypescriptType(def.properties[propertyName]));
    }
    log("}");
    log('');
});
