import * as k from './konstruct'
import * as k8s from './kubernetes-api'

/**
 * Copy of common-helpers.ts don't know why does a runtime error on module loading if imported instead...
 */
declare global {
    interface Object {
        addDeploymentDefaultNameAndLabels<T>(this: T, name: string): T
    }
}

export function nameMetadata(name: string): k8s.ObjectMetaIoK8sApimachineryPkgApisMetaV1 {
    return {
        name,
        labels: {
            app: name
        }
    }
}

k.installPlugin(function addDeploymentDefaultNameAndLabels(object, name) {
    return object.merge({
        metadata: nameMetadata(name),
        spec: {
            template: {
                metadata: {
                    labels: {
                        name: name,
                        app: name
                    }
                },
            }
        }
    })
})




const build = k.build
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

build.deployment({
}).merge({})

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

let deploy = build.deployment({
    metadata: {
        name: 'toto',
        labels: {
            app: 'toto'
        }
    },
    spec: build.deploymentSpec({
        template: build.podTemplateSpec({
            spec: build.podSpec({
                containers: [
                    build.container({
                        image: 'i-am-a-test'
                    })
                ]
            })
        })
    })
})

let service = build.service({
    spec: build.deploymentSpec({
        selector: build.labelSelectorIoK8sApimachineryPkgApisMetaV1({
            matchLabels: {
                name: deploy.metadata.name
            }
        })
    })
})

docs.push(service)
docs.push(deploy)

log(k.yamlifyAll(docs))