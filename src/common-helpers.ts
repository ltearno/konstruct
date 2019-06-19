import * as k from './konstruct'
import * as k8s from './kubernetes-api'

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
