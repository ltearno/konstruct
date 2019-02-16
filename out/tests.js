"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var k = __importStar(require("./konstructor"));
var log = console.log.bind(console);
var service = function (name) { return ({
    apiVersion: "v1",
    kind: "Service",
    metadata: {
        name: name
    },
    spec: {
        type: "ClusterIP",
        ports: [{
                name: "http",
                port: 80,
                targetPort: 8080,
                protocol: "TCP"
            }]
    }
}); };
var s = service("toto");
var wm = s.merge({ toto: 4 });
log(k.yamlify(s));
log(k.yamlify(wm));
var deploy = k.k8sBuilder.deployment({
    spec: {
        template: {
            spec: {
                containers: [{
                        image: 'toto',
                        name: 't'
                    }]
            }
        }
    }
});
log(k.yamlify(deploy));
