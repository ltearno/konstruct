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
var path = __importStar(require("path"));
var log = console.log.bind(console);
var base = "/home/arnaud/repos/idp/aaa/aaa-platform/k8s-2/output-target/aaa-platform/templates/";
var out = {};
var files = fs.readdirSync(base);
for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
    var file = files_1[_i];
    out[file] = k.yamlparseAll(fs.readFileSync(path.join(base, file)));
}
//log(JSON.stringify(out, null, 2))
var cm = k.k8sBuilder.configMap({
    data: {
        'ngnix.conf': k.interpolateFile('nginx.conf', {
            authenticate: {
                masterRealm: 'IDP'
            }
        })
    }
});
log(k.yamlify(cm));
