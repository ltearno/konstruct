import * as k from './konstructor'

const log = console.log.bind(console)

let service = name => (k.k8sBuilder.service().merge({
    metadata: { name },
    spec: {
        type: "ClusterIP",
        ports: [{
            name: "http",
            port: 80,
            targetPort: 8080,
            protocol: "TCP"
        }]
    }
}))

let docs = []

docs.push(
    service("toto")
        .mergeAt('metadata', { toto: 4 })
)

docs.push(
    k.k8sBuilder.deployment()
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
        })
)

log(k.yamlifyAll(docs))