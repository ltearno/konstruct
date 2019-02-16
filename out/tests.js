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
var makeDefaultService = function (name) { return (k.k8sBuilder.service().merge({
    metadata: { name: name },
    spec: {
        type: "ClusterIP",
        ports: [{
                name: "http",
                port: 80,
                targetPort: 8080,
                protocol: "TCP"
            }]
    }
})); };
var docs = [];
docs.push(makeDefaultService("toto")
    .mergeAt('metadata', { toto: 4 }));
docs.push(k.k8sBuilder.deployment()
    .addDeploymentDefaultNameAndLabels('toto')
    .merge({
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
}));
log(k.yamlifyAll(docs));
