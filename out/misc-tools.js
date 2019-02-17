"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var k = __importStar(require("./konstruct"));
var fs = __importStar(require("fs"));
function interpolate(templateString, context) {
    var vars = Object.keys(context);
    var values = vars.map(function (k) { return context[k]; });
    vars.unshift('k');
    values.unshift(k);
    var func = new (Function.bind.apply(Function, [void 0].concat(vars, ["return `" + templateString + "`;"])))();
    return func.apply(void 0, values);
}
exports.interpolate = interpolate;
function interpolateFile(path, context) {
    return k.interpolate(fs.readFileSync(path, { encoding: 'utf8' }), context);
}
exports.interpolateFile = interpolateFile;
