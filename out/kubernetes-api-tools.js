"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTypescriptResourceName(name) {
    var i = 0;
    name = name.replace('-', '');
    if (name.startsWith('io.k8s.api.apps.v1.'))
        name = name.substr('io.k8s.api.apps.v1'.length);
    if (name.startsWith('io.k8s.api.core.v1.'))
        name = name.substr('io.k8s.api.core.v1'.length);
    while (name.indexOf('.') >= 0) {
        var prefix = name.substr(name.indexOf('.') + 1);
        var suffix = name.substr(0, name.indexOf('.'));
        suffix = suffix.substr(0, 1).toLocaleUpperCase() + suffix.substr(1);
        i++;
        if (i == 1 && suffix == 'V1') {
            name = prefix;
            continue;
        }
        else if (i == 1 && suffix == 'Io.k8s.api.core.v1') {
            name = prefix;
            continue;
        }
        else if (i == 1 && suffix == 'Io.k8s.api.apps.v1') {
            name = prefix;
            continue;
        }
        name = prefix + suffix;
    }
    return name;
}
exports.getTypescriptResourceName = getTypescriptResourceName;
function getTypescriptType(property) {
    if (property.type) {
        switch (property.type) {
            case 'integer':
                return 'number';
            case 'array':
                return getTypescriptType(property.items) + '[]';
            case 'object':
                if (property.format == 'int-or-string')
                    return 'number | string';
                return 'object';
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
exports.getTypescriptType = getTypescriptType;
function dumpComment(description, indent, log) {
    if (description) {
        log(indent + "/**");
        description.split('\n').forEach(function (line) {
            while (line.includes('*/'))
                line = line.replace('*/', '...');
            log(indent + " * " + line);
        });
        log(indent + " */");
    }
}
exports.dumpComment = dumpComment;
function camelCase(s) {
    return s.substr(0, 1).toLocaleLowerCase() + s.substr(1);
}
exports.camelCase = camelCase;
