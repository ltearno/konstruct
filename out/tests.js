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
var build = k.build;
var log = console.log.bind(console);
var makeDefaultService = function (name) { return (build.service().merge({
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
k.installPlugin(function timestamp(o) {
    return o.set('metadata.date', "" + Date.now());
});
var NAME = 'my-first-konstruction';
var docs = [];
docs.push(makeDefaultService(NAME)
    .timestamp());
docs.push(build.deployment()
    .addDeploymentDefaultNameAndLabels(NAME)
    .merge({
    spec: {
        template: {
            spec: {
                containers: [{
                        image: 'nginx',
                        name: NAME
                    }]
            }
        }
    }
})
    .timestamp());
log(k.yamlifyAll(docs));
