/**
 * Common definitions
 * 
 * There much designed to change, improve and stabilize !
 */

import './konstructor'

export const defaultDeployment = {
    apiVersion: "extensions/v1beta1",
    kind: "Deployment",
    spec: {
        replicas: 3,
        strategy: {
            type: "RollingUpdate",
            rollingUpdate: {
                maxSurge: 3,
                maxUnavailable: 0
            }
        },
        template: {
            spec: {
                terminationGracePeriodSeconds: 5
            }
        }
    }
}

export const port = (name, port, targetPort, protocol) => ({
    name,
    port,
    targetPort,
    protocol
})

export const tcpContainerPorts = (...ports) => ports.map(port => ({
    containerPort: port,
    protocol: 'TCP'
}))

export const loadBalancer = (name, ports) => ({
    apiVersion: "v1",
    kind: "Service",
    metadata: {
        name
    },
    spec: {
        type: "LoadBalancer",
        ports,
        selector: {
            app: name
        }
    }
})

export const toEnv = spec => {
    return Object.getOwnPropertyNames(spec).map(name => ({
        name,
        value: spec[name]
    }))
}

export const deployment = (name) => defaultDeployment.addDeploymentDefaultNameAndLabels(name)

export const serviceAccount = name => ({
    apiVersion: "v1",
    kind: "ServiceAccount",
    metadata: {
        name: "kubernetes-demo-sa"
    }
})

export const roleBinding = (roleBindingName, serviceAccountName, roleName) => ({
    kind: "RoleBinding",
    apiVersion: "rbac.authorization.k8s.io/v1",
    metadata: {
        name: roleBindingName
    },
    subjects: [{
        kind: "ServiceAccount",
        name: serviceAccountName
    }],
    roleRef: {
        kind: "Role",
        name: roleName,
        apiGroup: "rbac.authorization.k8s.io"
    }
})