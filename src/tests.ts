import * as k from './konstructor'

const log = console.log.bind(console)

let service: (name) => k.k8s.Service = name => ({
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

let deploy = k.k8sBuilder.deployment({
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
})
log(k.yamlify(deploy))