"use strict";
/**
 * Common definitions
 *
 * There much designed to change, improve and stabilize !
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDeployment = {
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
        selector: {},
        template: {
            spec: {
                terminationGracePeriodSeconds: 5,
                containers: []
            }
        }
    }
};
exports.port = function (name, port, targetPort, protocol) { return ({
    name: name,
    port: port,
    targetPort: targetPort,
    protocol: protocol
}); };
exports.tcpContainerPorts = function () {
    var ports = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ports[_i] = arguments[_i];
    }
    return ports.map(function (port) { return ({
        containerPort: port,
        protocol: 'TCP'
    }); });
};
exports.loadBalancer = function (name, ports) { return ({
    apiVersion: "v1",
    kind: "Service",
    metadata: {
        name: name
    },
    spec: {
        type: "LoadBalancer",
        ports: ports,
        selector: {
            app: name
        }
    }
}); };
exports.toEnv = function (spec) {
    return Object.getOwnPropertyNames(spec).map(function (name) { return ({
        name: name,
        value: spec[name]
    }); });
};
exports.deployment = function (name) { return exports.defaultDeployment.addDeploymentDefaultNameAndLabels(name); };
exports.serviceAccount = function (name) { return ({
    apiVersion: "v1",
    kind: "ServiceAccount",
    metadata: {
        name: "kubernetes-demo-sa"
    }
}); };
exports.roleBinding = function (roleBindingName, serviceAccountName, roleName) { return ({
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
}); };
