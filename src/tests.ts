import * as k from './core'
import * as k8s from './kubernetes-model'

const log = console.log.bind(console)

let service: (name) => /*k8s.ServiceV1*/any = name => ({
    apiVersion: "v1",
    kind: "Service",
    metadata: {
        name
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
})

let s = service("toto")
let wm = s.merge({ toto: 4 })

log(k.yamlify(s))
log(k.yamlify(wm))