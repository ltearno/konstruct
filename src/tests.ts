import * as k from './konstructor'

const build = k.k8sBuilder
const log = console.log.bind(console)

let makeDefaultService = name => (build.service().merge({
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

k.installPlugin(function timestamp(o) {
    return o.set('metadata.date', `${Date.now()}`)
})
declare global {
    interface Object {
        timestamp<T>(this: T): T
    }
}

const NAME = 'my-first-konstruction'
let docs = []

docs.push(
    makeDefaultService(NAME)
        .timestamp()
)

docs.push(
    build.deployment()
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
        .timestamp()
)

log(k.yamlifyAll(docs))