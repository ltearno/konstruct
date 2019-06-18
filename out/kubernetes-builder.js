"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./core");
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
function mutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.admissionregistration.v1beta1",
        kind: "MutatingWebhookConfiguration",
    }).merge(options);
}
exports.mutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1 = mutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1;
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
function mutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.admissionregistration.v1beta1",
        kind: "MutatingWebhookConfigurationList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.mutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1 = mutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1;
/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
function ruleWithOperationsIoK8sApiAdmissionregistrationV1beta1(options) {
    return ({}).merge(options);
}
exports.ruleWithOperationsIoK8sApiAdmissionregistrationV1beta1 = ruleWithOperationsIoK8sApiAdmissionregistrationV1beta1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
function serviceReferenceIoK8sApiAdmissionregistrationV1beta1(options) {
    return ({
        name: (options && options.name) || null,
        namespace: (options && options.namespace) || null,
    }).merge(options);
}
exports.serviceReferenceIoK8sApiAdmissionregistrationV1beta1 = serviceReferenceIoK8sApiAdmissionregistrationV1beta1;
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
function validatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.admissionregistration.v1beta1",
        kind: "ValidatingWebhookConfiguration",
    }).merge(options);
}
exports.validatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1 = validatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1;
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
function validatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.admissionregistration.v1beta1",
        kind: "ValidatingWebhookConfigurationList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.validatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1 = validatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1;
/**
 * Webhook describes an admission webhook and the resources and operations it applies to.
 */
function webhookIoK8sApiAdmissionregistrationV1beta1(options) {
    return ({
        clientConfig: (options && options.clientConfig) || webhookClientConfigIoK8sApiAdmissionregistrationV1beta1(),
        name: (options && options.name) || null,
    }).merge(options);
}
exports.webhookIoK8sApiAdmissionregistrationV1beta1 = webhookIoK8sApiAdmissionregistrationV1beta1;
/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 */
function webhookClientConfigIoK8sApiAdmissionregistrationV1beta1(options) {
    return ({
        caBundle: (options && options.caBundle) || null,
    }).merge(options);
}
exports.webhookClientConfigIoK8sApiAdmissionregistrationV1beta1 = webhookClientConfigIoK8sApiAdmissionregistrationV1beta1;
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
function controllerRevision(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "ControllerRevision",
        revision: (options && options.revision) || 0,
    }).merge(options);
}
exports.controllerRevision = controllerRevision;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
function controllerRevisionList(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "ControllerRevisionList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.controllerRevisionList = controllerRevisionList;
/**
 * DaemonSet represents the configuration of a daemon set.
 */
function daemonSet(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "DaemonSet",
    }).merge(options);
}
exports.daemonSet = daemonSet;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
function daemonSetCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.daemonSetCondition = daemonSetCondition;
/**
 * DaemonSetList is a collection of daemon sets.
 */
function daemonSetList(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "DaemonSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.daemonSetList = daemonSetList;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
function daemonSetSpec(options) {
    return ({
        selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.daemonSetSpec = daemonSetSpec;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
function daemonSetStatus(options) {
    return ({
        currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
        desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
        numberMisscheduled: (options && options.numberMisscheduled) || 0,
        numberReady: (options && options.numberReady) || 0,
    }).merge(options);
}
exports.daemonSetStatus = daemonSetStatus;
/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
function daemonSetUpdateStrategy(options) {
    return ({}).merge(options);
}
exports.daemonSetUpdateStrategy = daemonSetUpdateStrategy;
/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
function deployment(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "Deployment",
    }).merge(options);
}
exports.deployment = deployment;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
function deploymentCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.deploymentCondition = deploymentCondition;
/**
 * DeploymentList is a list of Deployments.
 */
function deploymentList(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "DeploymentList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.deploymentList = deploymentList;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
function deploymentSpec(options) {
    return ({
        selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.deploymentSpec = deploymentSpec;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
function deploymentStatus(options) {
    return ({}).merge(options);
}
exports.deploymentStatus = deploymentStatus;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
function deploymentStrategy(options) {
    return ({}).merge(options);
}
exports.deploymentStrategy = deploymentStrategy;
/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
function replicaSet(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "ReplicaSet",
    }).merge(options);
}
exports.replicaSet = replicaSet;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
function replicaSetCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.replicaSetCondition = replicaSetCondition;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
function replicaSetList(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "ReplicaSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.replicaSetList = replicaSetList;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
function replicaSetSpec(options) {
    return ({
        selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    }).merge(options);
}
exports.replicaSetSpec = replicaSetSpec;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
function replicaSetStatus(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.replicaSetStatus = replicaSetStatus;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
function rollingUpdateDaemonSet(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDaemonSet = rollingUpdateDaemonSet;
/**
 * Spec to control the desired behavior of rolling update.
 */
function rollingUpdateDeployment(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDeployment = rollingUpdateDeployment;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
function rollingUpdateStatefulSetStrategy(options) {
    return ({}).merge(options);
}
exports.rollingUpdateStatefulSetStrategy = rollingUpdateStatefulSetStrategy;
/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
function statefulSet(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "StatefulSet",
    }).merge(options);
}
exports.statefulSet = statefulSet;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
function statefulSetCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.statefulSetCondition = statefulSetCondition;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
function statefulSetList(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1",
        kind: "StatefulSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.statefulSetList = statefulSetList;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
function statefulSetSpec(options) {
    return ({
        selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
        serviceName: (options && options.serviceName) || null,
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.statefulSetSpec = statefulSetSpec;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
function statefulSetStatus(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.statefulSetStatus = statefulSetStatus;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
function statefulSetUpdateStrategy(options) {
    return ({}).merge(options);
}
exports.statefulSetUpdateStrategy = statefulSetUpdateStrategy;
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
function controllerRevisionIoK8sApiAppsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta1",
        kind: "ControllerRevision",
        revision: (options && options.revision) || 0,
    }).merge(options);
}
exports.controllerRevisionIoK8sApiAppsV1beta1 = controllerRevisionIoK8sApiAppsV1beta1;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
function controllerRevisionListIoK8sApiAppsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta1",
        kind: "ControllerRevisionList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.controllerRevisionListIoK8sApiAppsV1beta1 = controllerRevisionListIoK8sApiAppsV1beta1;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
function deploymentIoK8sApiAppsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta1",
        kind: "Deployment",
    }).merge(options);
}
exports.deploymentIoK8sApiAppsV1beta1 = deploymentIoK8sApiAppsV1beta1;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
function deploymentConditionIoK8sApiAppsV1beta1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.deploymentConditionIoK8sApiAppsV1beta1 = deploymentConditionIoK8sApiAppsV1beta1;
/**
 * DeploymentList is a list of Deployments.
 */
function deploymentListIoK8sApiAppsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta1",
        kind: "DeploymentList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.deploymentListIoK8sApiAppsV1beta1 = deploymentListIoK8sApiAppsV1beta1;
/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
function deploymentRollbackIoK8sApiAppsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta1",
        kind: "DeploymentRollback",
        name: (options && options.name) || null,
        rollbackTo: (options && options.rollbackTo) || rollbackConfigIoK8sApiAppsV1beta1(),
    }).merge(options);
}
exports.deploymentRollbackIoK8sApiAppsV1beta1 = deploymentRollbackIoK8sApiAppsV1beta1;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
function deploymentSpecIoK8sApiAppsV1beta1(options) {
    return ({
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.deploymentSpecIoK8sApiAppsV1beta1 = deploymentSpecIoK8sApiAppsV1beta1;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
function deploymentStatusIoK8sApiAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentStatusIoK8sApiAppsV1beta1 = deploymentStatusIoK8sApiAppsV1beta1;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
function deploymentStrategyIoK8sApiAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentStrategyIoK8sApiAppsV1beta1 = deploymentStrategyIoK8sApiAppsV1beta1;
/**
 * DEPRECATED.
 */
function rollbackConfigIoK8sApiAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollbackConfigIoK8sApiAppsV1beta1 = rollbackConfigIoK8sApiAppsV1beta1;
/**
 * Spec to control the desired behavior of rolling update.
 */
function rollingUpdateDeploymentIoK8sApiAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDeploymentIoK8sApiAppsV1beta1 = rollingUpdateDeploymentIoK8sApiAppsV1beta1;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
function rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1 = rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1;
/**
 * Scale represents a scaling request for a resource.
 */
function scaleIoK8sApiAppsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta1",
        kind: "Scale",
    }).merge(options);
}
exports.scaleIoK8sApiAppsV1beta1 = scaleIoK8sApiAppsV1beta1;
/**
 * ScaleSpec describes the attributes of a scale subresource
 */
function scaleSpecIoK8sApiAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.scaleSpecIoK8sApiAppsV1beta1 = scaleSpecIoK8sApiAppsV1beta1;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
function scaleStatusIoK8sApiAppsV1beta1(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.scaleStatusIoK8sApiAppsV1beta1 = scaleStatusIoK8sApiAppsV1beta1;
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
function statefulSetIoK8sApiAppsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta1",
        kind: "StatefulSet",
    }).merge(options);
}
exports.statefulSetIoK8sApiAppsV1beta1 = statefulSetIoK8sApiAppsV1beta1;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
function statefulSetConditionIoK8sApiAppsV1beta1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.statefulSetConditionIoK8sApiAppsV1beta1 = statefulSetConditionIoK8sApiAppsV1beta1;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
function statefulSetListIoK8sApiAppsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta1",
        kind: "StatefulSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.statefulSetListIoK8sApiAppsV1beta1 = statefulSetListIoK8sApiAppsV1beta1;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
function statefulSetSpecIoK8sApiAppsV1beta1(options) {
    return ({
        serviceName: (options && options.serviceName) || null,
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.statefulSetSpecIoK8sApiAppsV1beta1 = statefulSetSpecIoK8sApiAppsV1beta1;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
function statefulSetStatusIoK8sApiAppsV1beta1(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.statefulSetStatusIoK8sApiAppsV1beta1 = statefulSetStatusIoK8sApiAppsV1beta1;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
function statefulSetUpdateStrategyIoK8sApiAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.statefulSetUpdateStrategyIoK8sApiAppsV1beta1 = statefulSetUpdateStrategyIoK8sApiAppsV1beta1;
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
function controllerRevisionIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "ControllerRevision",
        revision: (options && options.revision) || 0,
    }).merge(options);
}
exports.controllerRevisionIoK8sApiAppsV1beta2 = controllerRevisionIoK8sApiAppsV1beta2;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
function controllerRevisionListIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "ControllerRevisionList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.controllerRevisionListIoK8sApiAppsV1beta2 = controllerRevisionListIoK8sApiAppsV1beta2;
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
function daemonSetIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "DaemonSet",
    }).merge(options);
}
exports.daemonSetIoK8sApiAppsV1beta2 = daemonSetIoK8sApiAppsV1beta2;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
function daemonSetConditionIoK8sApiAppsV1beta2(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.daemonSetConditionIoK8sApiAppsV1beta2 = daemonSetConditionIoK8sApiAppsV1beta2;
/**
 * DaemonSetList is a collection of daemon sets.
 */
function daemonSetListIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "DaemonSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.daemonSetListIoK8sApiAppsV1beta2 = daemonSetListIoK8sApiAppsV1beta2;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
function daemonSetSpecIoK8sApiAppsV1beta2(options) {
    return ({
        selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.daemonSetSpecIoK8sApiAppsV1beta2 = daemonSetSpecIoK8sApiAppsV1beta2;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
function daemonSetStatusIoK8sApiAppsV1beta2(options) {
    return ({
        currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
        desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
        numberMisscheduled: (options && options.numberMisscheduled) || 0,
        numberReady: (options && options.numberReady) || 0,
    }).merge(options);
}
exports.daemonSetStatusIoK8sApiAppsV1beta2 = daemonSetStatusIoK8sApiAppsV1beta2;
/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
function daemonSetUpdateStrategyIoK8sApiAppsV1beta2(options) {
    return ({}).merge(options);
}
exports.daemonSetUpdateStrategyIoK8sApiAppsV1beta2 = daemonSetUpdateStrategyIoK8sApiAppsV1beta2;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
function deploymentIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "Deployment",
    }).merge(options);
}
exports.deploymentIoK8sApiAppsV1beta2 = deploymentIoK8sApiAppsV1beta2;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
function deploymentConditionIoK8sApiAppsV1beta2(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.deploymentConditionIoK8sApiAppsV1beta2 = deploymentConditionIoK8sApiAppsV1beta2;
/**
 * DeploymentList is a list of Deployments.
 */
function deploymentListIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "DeploymentList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.deploymentListIoK8sApiAppsV1beta2 = deploymentListIoK8sApiAppsV1beta2;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
function deploymentSpecIoK8sApiAppsV1beta2(options) {
    return ({
        selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.deploymentSpecIoK8sApiAppsV1beta2 = deploymentSpecIoK8sApiAppsV1beta2;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
function deploymentStatusIoK8sApiAppsV1beta2(options) {
    return ({}).merge(options);
}
exports.deploymentStatusIoK8sApiAppsV1beta2 = deploymentStatusIoK8sApiAppsV1beta2;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
function deploymentStrategyIoK8sApiAppsV1beta2(options) {
    return ({}).merge(options);
}
exports.deploymentStrategyIoK8sApiAppsV1beta2 = deploymentStrategyIoK8sApiAppsV1beta2;
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
function replicaSetIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "ReplicaSet",
    }).merge(options);
}
exports.replicaSetIoK8sApiAppsV1beta2 = replicaSetIoK8sApiAppsV1beta2;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
function replicaSetConditionIoK8sApiAppsV1beta2(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.replicaSetConditionIoK8sApiAppsV1beta2 = replicaSetConditionIoK8sApiAppsV1beta2;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
function replicaSetListIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "ReplicaSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.replicaSetListIoK8sApiAppsV1beta2 = replicaSetListIoK8sApiAppsV1beta2;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
function replicaSetSpecIoK8sApiAppsV1beta2(options) {
    return ({
        selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    }).merge(options);
}
exports.replicaSetSpecIoK8sApiAppsV1beta2 = replicaSetSpecIoK8sApiAppsV1beta2;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
function replicaSetStatusIoK8sApiAppsV1beta2(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.replicaSetStatusIoK8sApiAppsV1beta2 = replicaSetStatusIoK8sApiAppsV1beta2;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
function rollingUpdateDaemonSetIoK8sApiAppsV1beta2(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDaemonSetIoK8sApiAppsV1beta2 = rollingUpdateDaemonSetIoK8sApiAppsV1beta2;
/**
 * Spec to control the desired behavior of rolling update.
 */
function rollingUpdateDeploymentIoK8sApiAppsV1beta2(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDeploymentIoK8sApiAppsV1beta2 = rollingUpdateDeploymentIoK8sApiAppsV1beta2;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
function rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2(options) {
    return ({}).merge(options);
}
exports.rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2 = rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2;
/**
 * Scale represents a scaling request for a resource.
 */
function scaleIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "Scale",
    }).merge(options);
}
exports.scaleIoK8sApiAppsV1beta2 = scaleIoK8sApiAppsV1beta2;
/**
 * ScaleSpec describes the attributes of a scale subresource
 */
function scaleSpecIoK8sApiAppsV1beta2(options) {
    return ({}).merge(options);
}
exports.scaleSpecIoK8sApiAppsV1beta2 = scaleSpecIoK8sApiAppsV1beta2;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
function scaleStatusIoK8sApiAppsV1beta2(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.scaleStatusIoK8sApiAppsV1beta2 = scaleStatusIoK8sApiAppsV1beta2;
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
function statefulSetIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "StatefulSet",
    }).merge(options);
}
exports.statefulSetIoK8sApiAppsV1beta2 = statefulSetIoK8sApiAppsV1beta2;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
function statefulSetConditionIoK8sApiAppsV1beta2(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.statefulSetConditionIoK8sApiAppsV1beta2 = statefulSetConditionIoK8sApiAppsV1beta2;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
function statefulSetListIoK8sApiAppsV1beta2(options) {
    return ({
        apiVersion: "io.k8s.api.apps.v1beta2",
        kind: "StatefulSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.statefulSetListIoK8sApiAppsV1beta2 = statefulSetListIoK8sApiAppsV1beta2;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
function statefulSetSpecIoK8sApiAppsV1beta2(options) {
    return ({
        selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
        serviceName: (options && options.serviceName) || null,
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.statefulSetSpecIoK8sApiAppsV1beta2 = statefulSetSpecIoK8sApiAppsV1beta2;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
function statefulSetStatusIoK8sApiAppsV1beta2(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.statefulSetStatusIoK8sApiAppsV1beta2 = statefulSetStatusIoK8sApiAppsV1beta2;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
function statefulSetUpdateStrategyIoK8sApiAppsV1beta2(options) {
    return ({}).merge(options);
}
exports.statefulSetUpdateStrategyIoK8sApiAppsV1beta2 = statefulSetUpdateStrategyIoK8sApiAppsV1beta2;
/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
function boundObjectReferenceIoK8sApiAuthenticationV1(options) {
    return ({
        apiVersion: "io.k8s.api.authentication.v1",
        kind: "BoundObjectReference",
    }).merge(options);
}
exports.boundObjectReferenceIoK8sApiAuthenticationV1 = boundObjectReferenceIoK8sApiAuthenticationV1;
/**
 * TokenRequest requests a token for a given service account.
 */
function tokenRequestIoK8sApiAuthenticationV1(options) {
    return ({
        apiVersion: "io.k8s.api.authentication.v1",
        kind: "TokenRequest",
        spec: (options && options.spec) || tokenRequestSpecIoK8sApiAuthenticationV1(),
    }).merge(options);
}
exports.tokenRequestIoK8sApiAuthenticationV1 = tokenRequestIoK8sApiAuthenticationV1;
/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
function tokenRequestSpecIoK8sApiAuthenticationV1(options) {
    return ({
        audiences: (options && options.audiences) || [],
    }).merge(options);
}
exports.tokenRequestSpecIoK8sApiAuthenticationV1 = tokenRequestSpecIoK8sApiAuthenticationV1;
/**
 * TokenRequestStatus is the result of a token request.
 */
function tokenRequestStatusIoK8sApiAuthenticationV1(options) {
    return ({
        expirationTimestamp: (options && options.expirationTimestamp) || timeIoK8sApimachineryPkgApisMetaV1(),
        token: (options && options.token) || null,
    }).merge(options);
}
exports.tokenRequestStatusIoK8sApiAuthenticationV1 = tokenRequestStatusIoK8sApiAuthenticationV1;
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
function tokenReviewIoK8sApiAuthenticationV1(options) {
    return ({
        apiVersion: "io.k8s.api.authentication.v1",
        kind: "TokenReview",
        spec: (options && options.spec) || tokenReviewSpecIoK8sApiAuthenticationV1(),
    }).merge(options);
}
exports.tokenReviewIoK8sApiAuthenticationV1 = tokenReviewIoK8sApiAuthenticationV1;
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
function tokenReviewSpecIoK8sApiAuthenticationV1(options) {
    return ({}).merge(options);
}
exports.tokenReviewSpecIoK8sApiAuthenticationV1 = tokenReviewSpecIoK8sApiAuthenticationV1;
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
function tokenReviewStatusIoK8sApiAuthenticationV1(options) {
    return ({}).merge(options);
}
exports.tokenReviewStatusIoK8sApiAuthenticationV1 = tokenReviewStatusIoK8sApiAuthenticationV1;
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
function userInfoIoK8sApiAuthenticationV1(options) {
    return ({}).merge(options);
}
exports.userInfoIoK8sApiAuthenticationV1 = userInfoIoK8sApiAuthenticationV1;
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
function tokenReviewIoK8sApiAuthenticationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.authentication.v1beta1",
        kind: "TokenReview",
        spec: (options && options.spec) || tokenReviewSpecIoK8sApiAuthenticationV1beta1(),
    }).merge(options);
}
exports.tokenReviewIoK8sApiAuthenticationV1beta1 = tokenReviewIoK8sApiAuthenticationV1beta1;
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
function tokenReviewSpecIoK8sApiAuthenticationV1beta1(options) {
    return ({}).merge(options);
}
exports.tokenReviewSpecIoK8sApiAuthenticationV1beta1 = tokenReviewSpecIoK8sApiAuthenticationV1beta1;
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
function tokenReviewStatusIoK8sApiAuthenticationV1beta1(options) {
    return ({}).merge(options);
}
exports.tokenReviewStatusIoK8sApiAuthenticationV1beta1 = tokenReviewStatusIoK8sApiAuthenticationV1beta1;
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
function userInfoIoK8sApiAuthenticationV1beta1(options) {
    return ({}).merge(options);
}
exports.userInfoIoK8sApiAuthenticationV1beta1 = userInfoIoK8sApiAuthenticationV1beta1;
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
function localSubjectAccessReviewIoK8sApiAuthorizationV1(options) {
    return ({
        apiVersion: "io.k8s.api.authorization.v1",
        kind: "LocalSubjectAccessReview",
        spec: (options && options.spec) || subjectAccessReviewSpecIoK8sApiAuthorizationV1(),
    }).merge(options);
}
exports.localSubjectAccessReviewIoK8sApiAuthorizationV1 = localSubjectAccessReviewIoK8sApiAuthorizationV1;
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
function nonResourceAttributesIoK8sApiAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.nonResourceAttributesIoK8sApiAuthorizationV1 = nonResourceAttributesIoK8sApiAuthorizationV1;
/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
function nonResourceRuleIoK8sApiAuthorizationV1(options) {
    return ({
        verbs: (options && options.verbs) || [],
    }).merge(options);
}
exports.nonResourceRuleIoK8sApiAuthorizationV1 = nonResourceRuleIoK8sApiAuthorizationV1;
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
function resourceAttributesIoK8sApiAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.resourceAttributesIoK8sApiAuthorizationV1 = resourceAttributesIoK8sApiAuthorizationV1;
/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
function resourceRuleIoK8sApiAuthorizationV1(options) {
    return ({
        verbs: (options && options.verbs) || [],
    }).merge(options);
}
exports.resourceRuleIoK8sApiAuthorizationV1 = resourceRuleIoK8sApiAuthorizationV1;
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
function selfSubjectAccessReviewIoK8sApiAuthorizationV1(options) {
    return ({
        apiVersion: "io.k8s.api.authorization.v1",
        kind: "SelfSubjectAccessReview",
        spec: (options && options.spec) || selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1(),
    }).merge(options);
}
exports.selfSubjectAccessReviewIoK8sApiAuthorizationV1 = selfSubjectAccessReviewIoK8sApiAuthorizationV1;
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
function selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1 = selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1;
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
function selfSubjectRulesReviewIoK8sApiAuthorizationV1(options) {
    return ({
        apiVersion: "io.k8s.api.authorization.v1",
        kind: "SelfSubjectRulesReview",
        spec: (options && options.spec) || selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1(),
    }).merge(options);
}
exports.selfSubjectRulesReviewIoK8sApiAuthorizationV1 = selfSubjectRulesReviewIoK8sApiAuthorizationV1;
function selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1 = selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1;
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
function subjectAccessReviewIoK8sApiAuthorizationV1(options) {
    return ({
        apiVersion: "io.k8s.api.authorization.v1",
        kind: "SubjectAccessReview",
        spec: (options && options.spec) || subjectAccessReviewSpecIoK8sApiAuthorizationV1(),
    }).merge(options);
}
exports.subjectAccessReviewIoK8sApiAuthorizationV1 = subjectAccessReviewIoK8sApiAuthorizationV1;
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
function subjectAccessReviewSpecIoK8sApiAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.subjectAccessReviewSpecIoK8sApiAuthorizationV1 = subjectAccessReviewSpecIoK8sApiAuthorizationV1;
/**
 * SubjectAccessReviewStatus
 */
function subjectAccessReviewStatusIoK8sApiAuthorizationV1(options) {
    return ({
        allowed: (options && options.allowed) || false,
    }).merge(options);
}
exports.subjectAccessReviewStatusIoK8sApiAuthorizationV1 = subjectAccessReviewStatusIoK8sApiAuthorizationV1;
/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
function subjectRulesReviewStatusIoK8sApiAuthorizationV1(options) {
    return ({
        incomplete: (options && options.incomplete) || false,
        nonResourceRules: (options && options.nonResourceRules) || [],
        resourceRules: (options && options.resourceRules) || [],
    }).merge(options);
}
exports.subjectRulesReviewStatusIoK8sApiAuthorizationV1 = subjectRulesReviewStatusIoK8sApiAuthorizationV1;
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
function localSubjectAccessReviewIoK8sApiAuthorizationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.authorization.v1beta1",
        kind: "LocalSubjectAccessReview",
        spec: (options && options.spec) || subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(),
    }).merge(options);
}
exports.localSubjectAccessReviewIoK8sApiAuthorizationV1beta1 = localSubjectAccessReviewIoK8sApiAuthorizationV1beta1;
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
function nonResourceAttributesIoK8sApiAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.nonResourceAttributesIoK8sApiAuthorizationV1beta1 = nonResourceAttributesIoK8sApiAuthorizationV1beta1;
/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
function nonResourceRuleIoK8sApiAuthorizationV1beta1(options) {
    return ({
        verbs: (options && options.verbs) || [],
    }).merge(options);
}
exports.nonResourceRuleIoK8sApiAuthorizationV1beta1 = nonResourceRuleIoK8sApiAuthorizationV1beta1;
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
function resourceAttributesIoK8sApiAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.resourceAttributesIoK8sApiAuthorizationV1beta1 = resourceAttributesIoK8sApiAuthorizationV1beta1;
/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
function resourceRuleIoK8sApiAuthorizationV1beta1(options) {
    return ({
        verbs: (options && options.verbs) || [],
    }).merge(options);
}
exports.resourceRuleIoK8sApiAuthorizationV1beta1 = resourceRuleIoK8sApiAuthorizationV1beta1;
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
function selfSubjectAccessReviewIoK8sApiAuthorizationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.authorization.v1beta1",
        kind: "SelfSubjectAccessReview",
        spec: (options && options.spec) || selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(),
    }).merge(options);
}
exports.selfSubjectAccessReviewIoK8sApiAuthorizationV1beta1 = selfSubjectAccessReviewIoK8sApiAuthorizationV1beta1;
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
function selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1 = selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1;
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
function selfSubjectRulesReviewIoK8sApiAuthorizationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.authorization.v1beta1",
        kind: "SelfSubjectRulesReview",
        spec: (options && options.spec) || selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1(),
    }).merge(options);
}
exports.selfSubjectRulesReviewIoK8sApiAuthorizationV1beta1 = selfSubjectRulesReviewIoK8sApiAuthorizationV1beta1;
function selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1 = selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1;
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
function subjectAccessReviewIoK8sApiAuthorizationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.authorization.v1beta1",
        kind: "SubjectAccessReview",
        spec: (options && options.spec) || subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(),
    }).merge(options);
}
exports.subjectAccessReviewIoK8sApiAuthorizationV1beta1 = subjectAccessReviewIoK8sApiAuthorizationV1beta1;
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
function subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1 = subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1;
/**
 * SubjectAccessReviewStatus
 */
function subjectAccessReviewStatusIoK8sApiAuthorizationV1beta1(options) {
    return ({
        allowed: (options && options.allowed) || false,
    }).merge(options);
}
exports.subjectAccessReviewStatusIoK8sApiAuthorizationV1beta1 = subjectAccessReviewStatusIoK8sApiAuthorizationV1beta1;
/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
function subjectRulesReviewStatusIoK8sApiAuthorizationV1beta1(options) {
    return ({
        incomplete: (options && options.incomplete) || false,
        nonResourceRules: (options && options.nonResourceRules) || [],
        resourceRules: (options && options.resourceRules) || [],
    }).merge(options);
}
exports.subjectRulesReviewStatusIoK8sApiAuthorizationV1beta1 = subjectRulesReviewStatusIoK8sApiAuthorizationV1beta1;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
function crossVersionObjectReferenceIoK8sApiAutoscalingV1(options) {
    return ({
        apiVersion: "io.k8s.api.autoscaling.v1",
        kind: "CrossVersionObjectReference",
        name: (options && options.name) || null,
    }).merge(options);
}
exports.crossVersionObjectReferenceIoK8sApiAutoscalingV1 = crossVersionObjectReferenceIoK8sApiAutoscalingV1;
/**
 * configuration of a horizontal pod autoscaler.
 */
function horizontalPodAutoscalerIoK8sApiAutoscalingV1(options) {
    return ({
        apiVersion: "io.k8s.api.autoscaling.v1",
        kind: "HorizontalPodAutoscaler",
    }).merge(options);
}
exports.horizontalPodAutoscalerIoK8sApiAutoscalingV1 = horizontalPodAutoscalerIoK8sApiAutoscalingV1;
/**
 * list of horizontal pod autoscaler objects.
 */
function horizontalPodAutoscalerListIoK8sApiAutoscalingV1(options) {
    return ({
        apiVersion: "io.k8s.api.autoscaling.v1",
        kind: "HorizontalPodAutoscalerList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.horizontalPodAutoscalerListIoK8sApiAutoscalingV1 = horizontalPodAutoscalerListIoK8sApiAutoscalingV1;
/**
 * specification of a horizontal pod autoscaler.
 */
function horizontalPodAutoscalerSpecIoK8sApiAutoscalingV1(options) {
    return ({
        maxReplicas: (options && options.maxReplicas) || 0,
        scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReferenceIoK8sApiAutoscalingV1(),
    }).merge(options);
}
exports.horizontalPodAutoscalerSpecIoK8sApiAutoscalingV1 = horizontalPodAutoscalerSpecIoK8sApiAutoscalingV1;
/**
 * current status of a horizontal pod autoscaler
 */
function horizontalPodAutoscalerStatusIoK8sApiAutoscalingV1(options) {
    return ({
        currentReplicas: (options && options.currentReplicas) || 0,
        desiredReplicas: (options && options.desiredReplicas) || 0,
    }).merge(options);
}
exports.horizontalPodAutoscalerStatusIoK8sApiAutoscalingV1 = horizontalPodAutoscalerStatusIoK8sApiAutoscalingV1;
/**
 * Scale represents a scaling request for a resource.
 */
function scaleIoK8sApiAutoscalingV1(options) {
    return ({
        apiVersion: "io.k8s.api.autoscaling.v1",
        kind: "Scale",
    }).merge(options);
}
exports.scaleIoK8sApiAutoscalingV1 = scaleIoK8sApiAutoscalingV1;
/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
function scaleSpecIoK8sApiAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.scaleSpecIoK8sApiAutoscalingV1 = scaleSpecIoK8sApiAutoscalingV1;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
function scaleStatusIoK8sApiAutoscalingV1(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.scaleStatusIoK8sApiAutoscalingV1 = scaleStatusIoK8sApiAutoscalingV1;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
function crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(options) {
    return ({
        apiVersion: "io.k8s.api.autoscaling.v2beta1",
        kind: "CrossVersionObjectReference",
        name: (options && options.name) || null,
    }).merge(options);
}
exports.crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1 = crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1;
/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
function externalMetricSourceIoK8sApiAutoscalingV2beta1(options) {
    return ({
        metricName: (options && options.metricName) || null,
    }).merge(options);
}
exports.externalMetricSourceIoK8sApiAutoscalingV2beta1 = externalMetricSourceIoK8sApiAutoscalingV2beta1;
/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
function externalMetricStatusIoK8sApiAutoscalingV2beta1(options) {
    return ({
        currentValue: (options && options.currentValue) || quantityIoK8sApimachineryPkgApiResource(),
        metricName: (options && options.metricName) || null,
    }).merge(options);
}
exports.externalMetricStatusIoK8sApiAutoscalingV2beta1 = externalMetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
function horizontalPodAutoscalerIoK8sApiAutoscalingV2beta1(options) {
    return ({
        apiVersion: "io.k8s.api.autoscaling.v2beta1",
        kind: "HorizontalPodAutoscaler",
    }).merge(options);
}
exports.horizontalPodAutoscalerIoK8sApiAutoscalingV2beta1 = horizontalPodAutoscalerIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
function horizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.horizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1 = horizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
function horizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1(options) {
    return ({
        apiVersion: "io.k8s.api.autoscaling.v2beta1",
        kind: "HorizontalPodAutoscalerList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.horizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1 = horizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
function horizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1(options) {
    return ({
        maxReplicas: (options && options.maxReplicas) || 0,
        scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(),
    }).merge(options);
}
exports.horizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1 = horizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
function horizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1(options) {
    return ({
        conditions: (options && options.conditions) || [],
        currentReplicas: (options && options.currentReplicas) || 0,
        desiredReplicas: (options && options.desiredReplicas) || 0,
    }).merge(options);
}
exports.horizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1 = horizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1;
/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
function metricSpecIoK8sApiAutoscalingV2beta1(options) {
    return ({
        type: (options && options.type) || null,
    }).merge(options);
}
exports.metricSpecIoK8sApiAutoscalingV2beta1 = metricSpecIoK8sApiAutoscalingV2beta1;
/**
 * MetricStatus describes the last-read state of a single metric.
 */
function metricStatusIoK8sApiAutoscalingV2beta1(options) {
    return ({
        type: (options && options.type) || null,
    }).merge(options);
}
exports.metricStatusIoK8sApiAutoscalingV2beta1 = metricStatusIoK8sApiAutoscalingV2beta1;
/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
function objectMetricSourceIoK8sApiAutoscalingV2beta1(options) {
    return ({
        metricName: (options && options.metricName) || null,
        target: (options && options.target) || crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(),
        targetValue: (options && options.targetValue) || quantityIoK8sApimachineryPkgApiResource(),
    }).merge(options);
}
exports.objectMetricSourceIoK8sApiAutoscalingV2beta1 = objectMetricSourceIoK8sApiAutoscalingV2beta1;
/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
function objectMetricStatusIoK8sApiAutoscalingV2beta1(options) {
    return ({
        currentValue: (options && options.currentValue) || quantityIoK8sApimachineryPkgApiResource(),
        metricName: (options && options.metricName) || null,
        target: (options && options.target) || crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(),
    }).merge(options);
}
exports.objectMetricStatusIoK8sApiAutoscalingV2beta1 = objectMetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
function podsMetricSourceIoK8sApiAutoscalingV2beta1(options) {
    return ({
        metricName: (options && options.metricName) || null,
        targetAverageValue: (options && options.targetAverageValue) || quantityIoK8sApimachineryPkgApiResource(),
    }).merge(options);
}
exports.podsMetricSourceIoK8sApiAutoscalingV2beta1 = podsMetricSourceIoK8sApiAutoscalingV2beta1;
/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
function podsMetricStatusIoK8sApiAutoscalingV2beta1(options) {
    return ({
        currentAverageValue: (options && options.currentAverageValue) || quantityIoK8sApimachineryPkgApiResource(),
        metricName: (options && options.metricName) || null,
    }).merge(options);
}
exports.podsMetricStatusIoK8sApiAutoscalingV2beta1 = podsMetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
function resourceMetricSourceIoK8sApiAutoscalingV2beta1(options) {
    return ({
        name: (options && options.name) || null,
    }).merge(options);
}
exports.resourceMetricSourceIoK8sApiAutoscalingV2beta1 = resourceMetricSourceIoK8sApiAutoscalingV2beta1;
/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
function resourceMetricStatusIoK8sApiAutoscalingV2beta1(options) {
    return ({
        currentAverageValue: (options && options.currentAverageValue) || quantityIoK8sApimachineryPkgApiResource(),
        name: (options && options.name) || null,
    }).merge(options);
}
exports.resourceMetricStatusIoK8sApiAutoscalingV2beta1 = resourceMetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * Job represents the configuration of a single job.
 */
function jobIoK8sApiBatchV1(options) {
    return ({
        apiVersion: "io.k8s.api.batch.v1",
        kind: "Job",
    }).merge(options);
}
exports.jobIoK8sApiBatchV1 = jobIoK8sApiBatchV1;
/**
 * JobCondition describes current state of a job.
 */
function jobConditionIoK8sApiBatchV1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.jobConditionIoK8sApiBatchV1 = jobConditionIoK8sApiBatchV1;
/**
 * JobList is a collection of jobs.
 */
function jobListIoK8sApiBatchV1(options) {
    return ({
        apiVersion: "io.k8s.api.batch.v1",
        kind: "JobList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.jobListIoK8sApiBatchV1 = jobListIoK8sApiBatchV1;
/**
 * JobSpec describes how the job execution will look like.
 */
function jobSpecIoK8sApiBatchV1(options) {
    return ({
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.jobSpecIoK8sApiBatchV1 = jobSpecIoK8sApiBatchV1;
/**
 * JobStatus represents the current state of a Job.
 */
function jobStatusIoK8sApiBatchV1(options) {
    return ({}).merge(options);
}
exports.jobStatusIoK8sApiBatchV1 = jobStatusIoK8sApiBatchV1;
/**
 * CronJob represents the configuration of a single cron job.
 */
function cronJobIoK8sApiBatchV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.batch.v1beta1",
        kind: "CronJob",
    }).merge(options);
}
exports.cronJobIoK8sApiBatchV1beta1 = cronJobIoK8sApiBatchV1beta1;
/**
 * CronJobList is a collection of cron jobs.
 */
function cronJobListIoK8sApiBatchV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.batch.v1beta1",
        kind: "CronJobList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.cronJobListIoK8sApiBatchV1beta1 = cronJobListIoK8sApiBatchV1beta1;
/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
function cronJobSpecIoK8sApiBatchV1beta1(options) {
    return ({
        jobTemplate: (options && options.jobTemplate) || jobTemplateSpecIoK8sApiBatchV1beta1(),
        schedule: (options && options.schedule) || null,
    }).merge(options);
}
exports.cronJobSpecIoK8sApiBatchV1beta1 = cronJobSpecIoK8sApiBatchV1beta1;
/**
 * CronJobStatus represents the current state of a cron job.
 */
function cronJobStatusIoK8sApiBatchV1beta1(options) {
    return ({}).merge(options);
}
exports.cronJobStatusIoK8sApiBatchV1beta1 = cronJobStatusIoK8sApiBatchV1beta1;
/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
function jobTemplateSpecIoK8sApiBatchV1beta1(options) {
    return ({}).merge(options);
}
exports.jobTemplateSpecIoK8sApiBatchV1beta1 = jobTemplateSpecIoK8sApiBatchV1beta1;
/**
 * Describes a certificate signing request
 */
function certificateSigningRequestIoK8sApiCertificatesV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.certificates.v1beta1",
        kind: "CertificateSigningRequest",
    }).merge(options);
}
exports.certificateSigningRequestIoK8sApiCertificatesV1beta1 = certificateSigningRequestIoK8sApiCertificatesV1beta1;
function certificateSigningRequestConditionIoK8sApiCertificatesV1beta1(options) {
    return ({
        type: (options && options.type) || null,
    }).merge(options);
}
exports.certificateSigningRequestConditionIoK8sApiCertificatesV1beta1 = certificateSigningRequestConditionIoK8sApiCertificatesV1beta1;
function certificateSigningRequestListIoK8sApiCertificatesV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.certificates.v1beta1",
        kind: "CertificateSigningRequestList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.certificateSigningRequestListIoK8sApiCertificatesV1beta1 = certificateSigningRequestListIoK8sApiCertificatesV1beta1;
/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 */
function certificateSigningRequestSpecIoK8sApiCertificatesV1beta1(options) {
    return ({
        request: (options && options.request) || null,
    }).merge(options);
}
exports.certificateSigningRequestSpecIoK8sApiCertificatesV1beta1 = certificateSigningRequestSpecIoK8sApiCertificatesV1beta1;
function certificateSigningRequestStatusIoK8sApiCertificatesV1beta1(options) {
    return ({}).merge(options);
}
exports.certificateSigningRequestStatusIoK8sApiCertificatesV1beta1 = certificateSigningRequestStatusIoK8sApiCertificatesV1beta1;
/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
function aWSElasticBlockStoreVolumeSource(options) {
    return ({
        volumeID: (options && options.volumeID) || null,
    }).merge(options);
}
exports.aWSElasticBlockStoreVolumeSource = aWSElasticBlockStoreVolumeSource;
/**
 * Affinity is a group of affinity scheduling rules.
 */
function affinity(options) {
    return ({}).merge(options);
}
exports.affinity = affinity;
/**
 * AttachedVolume describes a volume attached to a node
 */
function attachedVolume(options) {
    return ({
        devicePath: (options && options.devicePath) || null,
        name: (options && options.name) || null,
    }).merge(options);
}
exports.attachedVolume = attachedVolume;
/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
function azureDiskVolumeSource(options) {
    return ({
        kind: "AzureDiskVolumeSource",
        diskName: (options && options.diskName) || null,
        diskURI: (options && options.diskURI) || null,
    }).merge(options);
}
exports.azureDiskVolumeSource = azureDiskVolumeSource;
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
function azureFilePersistentVolumeSource(options) {
    return ({
        secretName: (options && options.secretName) || null,
        shareName: (options && options.shareName) || null,
    }).merge(options);
}
exports.azureFilePersistentVolumeSource = azureFilePersistentVolumeSource;
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
function azureFileVolumeSource(options) {
    return ({
        secretName: (options && options.secretName) || null,
        shareName: (options && options.shareName) || null,
    }).merge(options);
}
exports.azureFileVolumeSource = azureFileVolumeSource;
/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 */
function binding(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "Binding",
        target: (options && options.target) || objectReference(),
    }).merge(options);
}
exports.binding = binding;
/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
function cSIPersistentVolumeSource(options) {
    return ({
        driver: (options && options.driver) || null,
        volumeHandle: (options && options.volumeHandle) || null,
    }).merge(options);
}
exports.cSIPersistentVolumeSource = cSIPersistentVolumeSource;
/**
 * Adds and removes POSIX capabilities from running containers.
 */
function capabilities(options) {
    return ({}).merge(options);
}
exports.capabilities = capabilities;
/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
function cephFSPersistentVolumeSource(options) {
    return ({
        monitors: (options && options.monitors) || [],
    }).merge(options);
}
exports.cephFSPersistentVolumeSource = cephFSPersistentVolumeSource;
/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
function cephFSVolumeSource(options) {
    return ({
        monitors: (options && options.monitors) || [],
    }).merge(options);
}
exports.cephFSVolumeSource = cephFSVolumeSource;
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
function cinderPersistentVolumeSource(options) {
    return ({
        volumeID: (options && options.volumeID) || null,
    }).merge(options);
}
exports.cinderPersistentVolumeSource = cinderPersistentVolumeSource;
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
function cinderVolumeSource(options) {
    return ({
        volumeID: (options && options.volumeID) || null,
    }).merge(options);
}
exports.cinderVolumeSource = cinderVolumeSource;
/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
function clientIPConfig(options) {
    return ({}).merge(options);
}
exports.clientIPConfig = clientIPConfig;
/**
 * Information about the condition of a component.
 */
function componentCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.componentCondition = componentCondition;
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 */
function componentStatus(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ComponentStatus",
    }).merge(options);
}
exports.componentStatus = componentStatus;
/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 */
function componentStatusList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ComponentStatusList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.componentStatusList = componentStatusList;
/**
 * ConfigMap holds configuration data for pods to consume.
 */
function configMap(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ConfigMap",
    }).merge(options);
}
exports.configMap = configMap;
/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
function configMapEnvSource(options) {
    return ({}).merge(options);
}
exports.configMapEnvSource = configMapEnvSource;
/**
 * Selects a key from a ConfigMap.
 */
function configMapKeySelector(options) {
    return ({
        key: (options && options.key) || null,
    }).merge(options);
}
exports.configMapKeySelector = configMapKeySelector;
/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
function configMapList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ConfigMapList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.configMapList = configMapList;
/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 */
function configMapNodeConfigSource(options) {
    return ({
        kubeletConfigKey: (options && options.kubeletConfigKey) || null,
        name: (options && options.name) || null,
        namespace: (options && options.namespace) || null,
    }).merge(options);
}
exports.configMapNodeConfigSource = configMapNodeConfigSource;
/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
function configMapProjection(options) {
    return ({}).merge(options);
}
exports.configMapProjection = configMapProjection;
/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
function configMapVolumeSource(options) {
    return ({}).merge(options);
}
exports.configMapVolumeSource = configMapVolumeSource;
/**
 * A single application container that you want to run within a pod.
 */
function container(options) {
    return ({
        name: (options && options.name) || null,
    }).merge(options);
}
exports.container = container;
/**
 * Describe a container image
 */
function containerImage(options) {
    return ({
        names: (options && options.names) || [],
    }).merge(options);
}
exports.containerImage = containerImage;
/**
 * ContainerPort represents a network port in a single container.
 */
function containerPort(options) {
    return ({
        containerPort: (options && options.containerPort) || 0,
    }).merge(options);
}
exports.containerPort = containerPort;
/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
function containerState(options) {
    return ({}).merge(options);
}
exports.containerState = containerState;
/**
 * ContainerStateRunning is a running state of a container.
 */
function containerStateRunning(options) {
    return ({}).merge(options);
}
exports.containerStateRunning = containerStateRunning;
/**
 * ContainerStateTerminated is a terminated state of a container.
 */
function containerStateTerminated(options) {
    return ({
        exitCode: (options && options.exitCode) || 0,
    }).merge(options);
}
exports.containerStateTerminated = containerStateTerminated;
/**
 * ContainerStateWaiting is a waiting state of a container.
 */
function containerStateWaiting(options) {
    return ({}).merge(options);
}
exports.containerStateWaiting = containerStateWaiting;
/**
 * ContainerStatus contains details for the current status of this container.
 */
function containerStatus(options) {
    return ({
        image: (options && options.image) || null,
        imageID: (options && options.imageID) || null,
        name: (options && options.name) || null,
        ready: (options && options.ready) || false,
        restartCount: (options && options.restartCount) || 0,
    }).merge(options);
}
exports.containerStatus = containerStatus;
/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
function daemonEndpoint(options) {
    return ({
        Port: (options && options.Port) || 0,
    }).merge(options);
}
exports.daemonEndpoint = daemonEndpoint;
/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
function downwardAPIProjection(options) {
    return ({}).merge(options);
}
exports.downwardAPIProjection = downwardAPIProjection;
/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
function downwardAPIVolumeFile(options) {
    return ({
        path: (options && options.path) || null,
    }).merge(options);
}
exports.downwardAPIVolumeFile = downwardAPIVolumeFile;
/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
function downwardAPIVolumeSource(options) {
    return ({}).merge(options);
}
exports.downwardAPIVolumeSource = downwardAPIVolumeSource;
/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 */
function emptyDirVolumeSource(options) {
    return ({}).merge(options);
}
exports.emptyDirVolumeSource = emptyDirVolumeSource;
/**
 * EndpointAddress is a tuple that describes single IP address.
 */
function endpointAddress(options) {
    return ({
        ip: (options && options.ip) || null,
    }).merge(options);
}
exports.endpointAddress = endpointAddress;
/**
 * EndpointPort is a tuple that describes a single port.
 */
function endpointPort(options) {
    return ({
        port: (options && options.port) || 0,
    }).merge(options);
}
exports.endpointPort = endpointPort;
/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
 *   {
 *     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *     Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *   }
 * The resulting set of endpoints can be viewed as:
 *     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
 *     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 */
function endpointSubset(options) {
    return ({}).merge(options);
}
exports.endpointSubset = endpointSubset;
/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
 *   Name: "mysvc",
 *   Subsets: [
 *     {
 *       Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 *       Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 *     },
 *     {
 *       Addresses: [{"ip": "10.10.3.3"}],
 *       Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
 *     },
 *  ]
 */
function endpoints(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "Endpoints",
    }).merge(options);
}
exports.endpoints = endpoints;
/**
 * EndpointsList is a list of endpoints.
 */
function endpointsList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "EndpointsList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.endpointsList = endpointsList;
/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
function envFromSource(options) {
    return ({}).merge(options);
}
exports.envFromSource = envFromSource;
/**
 * EnvVar represents an environment variable present in a Container.
 */
function envVar(options) {
    return ({
        name: (options && options.name) || null,
    }).merge(options);
}
exports.envVar = envVar;
/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
function envVarSource(options) {
    return ({}).merge(options);
}
exports.envVarSource = envVarSource;
/**
 * Event is a report of an event somewhere in the cluster.
 */
function event(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "Event",
        involvedObject: (options && options.involvedObject) || objectReference(),
        metadata: (options && options.metadata) || objectMetaIoK8sApimachineryPkgApisMetaV1(),
    }).merge(options);
}
exports.event = event;
/**
 * EventList is a list of events.
 */
function eventList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "EventList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.eventList = eventList;
/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
function eventSeries(options) {
    return ({}).merge(options);
}
exports.eventSeries = eventSeries;
/**
 * EventSource contains information for an event.
 */
function eventSource(options) {
    return ({}).merge(options);
}
exports.eventSource = eventSource;
/**
 * ExecAction describes a "run in container" action.
 */
function execAction(options) {
    return ({}).merge(options);
}
exports.execAction = execAction;
/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 */
function fCVolumeSource(options) {
    return ({}).merge(options);
}
exports.fCVolumeSource = fCVolumeSource;
/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
function flexPersistentVolumeSource(options) {
    return ({
        driver: (options && options.driver) || null,
    }).merge(options);
}
exports.flexPersistentVolumeSource = flexPersistentVolumeSource;
/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
function flexVolumeSource(options) {
    return ({
        driver: (options && options.driver) || null,
    }).merge(options);
}
exports.flexVolumeSource = flexVolumeSource;
/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
function flockerVolumeSource(options) {
    return ({}).merge(options);
}
exports.flockerVolumeSource = flockerVolumeSource;
/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
function gCEPersistentDiskVolumeSource(options) {
    return ({
        pdName: (options && options.pdName) || null,
    }).merge(options);
}
exports.gCEPersistentDiskVolumeSource = gCEPersistentDiskVolumeSource;
/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
function gitRepoVolumeSource(options) {
    return ({
        repository: (options && options.repository) || null,
    }).merge(options);
}
exports.gitRepoVolumeSource = gitRepoVolumeSource;
/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
function glusterfsVolumeSource(options) {
    return ({
        endpoints: (options && options.endpoints) || null,
        path: (options && options.path) || null,
    }).merge(options);
}
exports.glusterfsVolumeSource = glusterfsVolumeSource;
/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
function hTTPGetAction(options) {
    return ({
        port: (options && options.port) || intOrStringIoK8sApimachineryPkgUtilIntstr(),
    }).merge(options);
}
exports.hTTPGetAction = hTTPGetAction;
/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
function hTTPHeader(options) {
    return ({
        name: (options && options.name) || null,
        value: (options && options.value) || null,
    }).merge(options);
}
exports.hTTPHeader = hTTPHeader;
/**
 * Handler defines a specific action that should be taken
 */
function handler(options) {
    return ({}).merge(options);
}
exports.handler = handler;
/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
function hostAlias(options) {
    return ({}).merge(options);
}
exports.hostAlias = hostAlias;
/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
function hostPathVolumeSource(options) {
    return ({
        path: (options && options.path) || null,
    }).merge(options);
}
exports.hostPathVolumeSource = hostPathVolumeSource;
/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
function iSCSIPersistentVolumeSource(options) {
    return ({
        iqn: (options && options.iqn) || null,
        lun: (options && options.lun) || 0,
        targetPortal: (options && options.targetPortal) || null,
    }).merge(options);
}
exports.iSCSIPersistentVolumeSource = iSCSIPersistentVolumeSource;
/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
function iSCSIVolumeSource(options) {
    return ({
        iqn: (options && options.iqn) || null,
        lun: (options && options.lun) || 0,
        targetPortal: (options && options.targetPortal) || null,
    }).merge(options);
}
exports.iSCSIVolumeSource = iSCSIVolumeSource;
/**
 * Maps a string key to a path within a volume.
 */
function keyToPath(options) {
    return ({
        key: (options && options.key) || null,
        path: (options && options.path) || null,
    }).merge(options);
}
exports.keyToPath = keyToPath;
/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
function lifecycle(options) {
    return ({}).merge(options);
}
exports.lifecycle = lifecycle;
/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
function limitRange(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "LimitRange",
    }).merge(options);
}
exports.limitRange = limitRange;
/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
function limitRangeItem(options) {
    return ({}).merge(options);
}
exports.limitRangeItem = limitRangeItem;
/**
 * LimitRangeList is a list of LimitRange items.
 */
function limitRangeList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "LimitRangeList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.limitRangeList = limitRangeList;
/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
function limitRangeSpec(options) {
    return ({
        limits: (options && options.limits) || [],
    }).merge(options);
}
exports.limitRangeSpec = limitRangeSpec;
/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
function loadBalancerIngress(options) {
    return ({}).merge(options);
}
exports.loadBalancerIngress = loadBalancerIngress;
/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
function loadBalancerStatus(options) {
    return ({}).merge(options);
}
exports.loadBalancerStatus = loadBalancerStatus;
/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
function localObjectReference(options) {
    return ({}).merge(options);
}
exports.localObjectReference = localObjectReference;
/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
function localVolumeSource(options) {
    return ({
        path: (options && options.path) || null,
    }).merge(options);
}
exports.localVolumeSource = localVolumeSource;
/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
function nFSVolumeSource(options) {
    return ({
        path: (options && options.path) || null,
        server: (options && options.server) || null,
    }).merge(options);
}
exports.nFSVolumeSource = nFSVolumeSource;
/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
function namespace(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "Namespace",
    }).merge(options);
}
exports.namespace = namespace;
/**
 * NamespaceList is a list of Namespaces.
 */
function namespaceList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "NamespaceList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.namespaceList = namespaceList;
/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
function namespaceSpec(options) {
    return ({}).merge(options);
}
exports.namespaceSpec = namespaceSpec;
/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
function namespaceStatus(options) {
    return ({}).merge(options);
}
exports.namespaceStatus = namespaceStatus;
/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
function node(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "Node",
    }).merge(options);
}
exports.node = node;
/**
 * NodeAddress contains information for the node's address.
 */
function nodeAddress(options) {
    return ({
        address: (options && options.address) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.nodeAddress = nodeAddress;
/**
 * Node affinity is a group of node affinity scheduling rules.
 */
function nodeAffinity(options) {
    return ({}).merge(options);
}
exports.nodeAffinity = nodeAffinity;
/**
 * NodeCondition contains condition information for a node.
 */
function nodeCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.nodeCondition = nodeCondition;
/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
function nodeConfigSource(options) {
    return ({}).merge(options);
}
exports.nodeConfigSource = nodeConfigSource;
/**
 * NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
 */
function nodeConfigStatus(options) {
    return ({}).merge(options);
}
exports.nodeConfigStatus = nodeConfigStatus;
/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
function nodeDaemonEndpoints(options) {
    return ({}).merge(options);
}
exports.nodeDaemonEndpoints = nodeDaemonEndpoints;
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
function nodeList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "NodeList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.nodeList = nodeList;
/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
function nodeSelector(options) {
    return ({
        nodeSelectorTerms: (options && options.nodeSelectorTerms) || [],
    }).merge(options);
}
exports.nodeSelector = nodeSelector;
/**
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
function nodeSelectorRequirement(options) {
    return ({
        key: (options && options.key) || null,
        operator: (options && options.operator) || null,
    }).merge(options);
}
exports.nodeSelectorRequirement = nodeSelectorRequirement;
/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
function nodeSelectorTerm(options) {
    return ({}).merge(options);
}
exports.nodeSelectorTerm = nodeSelectorTerm;
/**
 * NodeSpec describes the attributes that a node is created with.
 */
function nodeSpec(options) {
    return ({}).merge(options);
}
exports.nodeSpec = nodeSpec;
/**
 * NodeStatus is information about the current status of a node.
 */
function nodeStatus(options) {
    return ({}).merge(options);
}
exports.nodeStatus = nodeStatus;
/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
function nodeSystemInfo(options) {
    return ({
        architecture: (options && options.architecture) || null,
        bootID: (options && options.bootID) || null,
        containerRuntimeVersion: (options && options.containerRuntimeVersion) || null,
        kernelVersion: (options && options.kernelVersion) || null,
        kubeProxyVersion: (options && options.kubeProxyVersion) || null,
        kubeletVersion: (options && options.kubeletVersion) || null,
        machineID: (options && options.machineID) || null,
        operatingSystem: (options && options.operatingSystem) || null,
        osImage: (options && options.osImage) || null,
        systemUUID: (options && options.systemUUID) || null,
    }).merge(options);
}
exports.nodeSystemInfo = nodeSystemInfo;
/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
function objectFieldSelector(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        fieldPath: (options && options.fieldPath) || null,
    }).merge(options);
}
exports.objectFieldSelector = objectFieldSelector;
/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
function objectReference(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ObjectReference",
    }).merge(options);
}
exports.objectReference = objectReference;
/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
function persistentVolume(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "PersistentVolume",
    }).merge(options);
}
exports.persistentVolume = persistentVolume;
/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
function persistentVolumeClaim(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "PersistentVolumeClaim",
    }).merge(options);
}
exports.persistentVolumeClaim = persistentVolumeClaim;
/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
function persistentVolumeClaimCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.persistentVolumeClaimCondition = persistentVolumeClaimCondition;
/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
function persistentVolumeClaimList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "PersistentVolumeClaimList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.persistentVolumeClaimList = persistentVolumeClaimList;
/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 */
function persistentVolumeClaimSpec(options) {
    return ({}).merge(options);
}
exports.persistentVolumeClaimSpec = persistentVolumeClaimSpec;
/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
function persistentVolumeClaimStatus(options) {
    return ({}).merge(options);
}
exports.persistentVolumeClaimStatus = persistentVolumeClaimStatus;
/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 */
function persistentVolumeClaimVolumeSource(options) {
    return ({
        claimName: (options && options.claimName) || null,
    }).merge(options);
}
exports.persistentVolumeClaimVolumeSource = persistentVolumeClaimVolumeSource;
/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
function persistentVolumeList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "PersistentVolumeList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.persistentVolumeList = persistentVolumeList;
/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
function persistentVolumeSpec(options) {
    return ({}).merge(options);
}
exports.persistentVolumeSpec = persistentVolumeSpec;
/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
function persistentVolumeStatus(options) {
    return ({}).merge(options);
}
exports.persistentVolumeStatus = persistentVolumeStatus;
/**
 * Represents a Photon Controller persistent disk resource.
 */
function photonPersistentDiskVolumeSource(options) {
    return ({
        pdID: (options && options.pdID) || null,
    }).merge(options);
}
exports.photonPersistentDiskVolumeSource = photonPersistentDiskVolumeSource;
/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 */
function pod(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "Pod",
    }).merge(options);
}
exports.pod = pod;
/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 */
function podAffinity(options) {
    return ({}).merge(options);
}
exports.podAffinity = podAffinity;
/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
function podAffinityTerm(options) {
    return ({
        topologyKey: (options && options.topologyKey) || null,
    }).merge(options);
}
exports.podAffinityTerm = podAffinityTerm;
/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 */
function podAntiAffinity(options) {
    return ({}).merge(options);
}
exports.podAntiAffinity = podAntiAffinity;
/**
 * PodCondition contains details for the current condition of this pod.
 */
function podCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.podCondition = podCondition;
/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
function podDNSConfig(options) {
    return ({}).merge(options);
}
exports.podDNSConfig = podDNSConfig;
/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
function podDNSConfigOption(options) {
    return ({}).merge(options);
}
exports.podDNSConfigOption = podDNSConfigOption;
/**
 * PodList is a list of Pods.
 */
function podList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "PodList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.podList = podList;
/**
 * PodReadinessGate contains the reference to a pod condition
 */
function podReadinessGate(options) {
    return ({
        conditionType: (options && options.conditionType) || null,
    }).merge(options);
}
exports.podReadinessGate = podReadinessGate;
/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 */
function podSecurityContext(options) {
    return ({}).merge(options);
}
exports.podSecurityContext = podSecurityContext;
/**
 * PodSpec is a description of a pod.
 */
function podSpec(options) {
    return ({
        containers: (options && options.containers) || [],
    }).merge(options);
}
exports.podSpec = podSpec;
/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
function podStatus(options) {
    return ({}).merge(options);
}
exports.podStatus = podStatus;
/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
function podTemplate(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "PodTemplate",
    }).merge(options);
}
exports.podTemplate = podTemplate;
/**
 * PodTemplateList is a list of PodTemplates.
 */
function podTemplateList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "PodTemplateList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.podTemplateList = podTemplateList;
/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
function podTemplateSpec(options) {
    return ({}).merge(options);
}
exports.podTemplateSpec = podTemplateSpec;
/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
function portworxVolumeSource(options) {
    return ({
        volumeID: (options && options.volumeID) || null,
    }).merge(options);
}
exports.portworxVolumeSource = portworxVolumeSource;
/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
function preferredSchedulingTerm(options) {
    return ({
        preference: (options && options.preference) || nodeSelectorTerm(),
        weight: (options && options.weight) || 0,
    }).merge(options);
}
exports.preferredSchedulingTerm = preferredSchedulingTerm;
/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
function probe(options) {
    return ({}).merge(options);
}
exports.probe = probe;
/**
 * Represents a projected volume source
 */
function projectedVolumeSource(options) {
    return ({
        sources: (options && options.sources) || [],
    }).merge(options);
}
exports.projectedVolumeSource = projectedVolumeSource;
/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
function quobyteVolumeSource(options) {
    return ({
        registry: (options && options.registry) || null,
        volume: (options && options.volume) || null,
    }).merge(options);
}
exports.quobyteVolumeSource = quobyteVolumeSource;
/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
function rBDPersistentVolumeSource(options) {
    return ({
        image: (options && options.image) || null,
        monitors: (options && options.monitors) || [],
    }).merge(options);
}
exports.rBDPersistentVolumeSource = rBDPersistentVolumeSource;
/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
function rBDVolumeSource(options) {
    return ({
        image: (options && options.image) || null,
        monitors: (options && options.monitors) || [],
    }).merge(options);
}
exports.rBDVolumeSource = rBDVolumeSource;
/**
 * ReplicationController represents the configuration of a replication controller.
 */
function replicationController(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ReplicationController",
    }).merge(options);
}
exports.replicationController = replicationController;
/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
function replicationControllerCondition(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.replicationControllerCondition = replicationControllerCondition;
/**
 * ReplicationControllerList is a collection of replication controllers.
 */
function replicationControllerList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ReplicationControllerList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.replicationControllerList = replicationControllerList;
/**
 * ReplicationControllerSpec is the specification of a replication controller.
 */
function replicationControllerSpec(options) {
    return ({}).merge(options);
}
exports.replicationControllerSpec = replicationControllerSpec;
/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
function replicationControllerStatus(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.replicationControllerStatus = replicationControllerStatus;
/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
function resourceFieldSelector(options) {
    return ({
        resource: (options && options.resource) || null,
    }).merge(options);
}
exports.resourceFieldSelector = resourceFieldSelector;
/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
function resourceQuota(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ResourceQuota",
    }).merge(options);
}
exports.resourceQuota = resourceQuota;
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
function resourceQuotaList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ResourceQuotaList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.resourceQuotaList = resourceQuotaList;
/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
function resourceQuotaSpec(options) {
    return ({}).merge(options);
}
exports.resourceQuotaSpec = resourceQuotaSpec;
/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
function resourceQuotaStatus(options) {
    return ({}).merge(options);
}
exports.resourceQuotaStatus = resourceQuotaStatus;
/**
 * ResourceRequirements describes the compute resource requirements.
 */
function resourceRequirements(options) {
    return ({}).merge(options);
}
exports.resourceRequirements = resourceRequirements;
/**
 * SELinuxOptions are the labels to be applied to the container
 */
function sELinuxOptions(options) {
    return ({}).merge(options);
}
exports.sELinuxOptions = sELinuxOptions;
/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 */
function scaleIOPersistentVolumeSource(options) {
    return ({
        gateway: (options && options.gateway) || null,
        secretRef: (options && options.secretRef) || secretReference(),
        system: (options && options.system) || null,
    }).merge(options);
}
exports.scaleIOPersistentVolumeSource = scaleIOPersistentVolumeSource;
/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
function scaleIOVolumeSource(options) {
    return ({
        gateway: (options && options.gateway) || null,
        secretRef: (options && options.secretRef) || localObjectReference(),
        system: (options && options.system) || null,
    }).merge(options);
}
exports.scaleIOVolumeSource = scaleIOVolumeSource;
/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
function scopeSelector(options) {
    return ({}).merge(options);
}
exports.scopeSelector = scopeSelector;
/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
function scopedResourceSelectorRequirement(options) {
    return ({
        operator: (options && options.operator) || null,
        scopeName: (options && options.scopeName) || null,
    }).merge(options);
}
exports.scopedResourceSelectorRequirement = scopedResourceSelectorRequirement;
/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 */
function secret(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "Secret",
    }).merge(options);
}
exports.secret = secret;
/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
function secretEnvSource(options) {
    return ({}).merge(options);
}
exports.secretEnvSource = secretEnvSource;
/**
 * SecretKeySelector selects a key of a Secret.
 */
function secretKeySelector(options) {
    return ({
        key: (options && options.key) || null,
    }).merge(options);
}
exports.secretKeySelector = secretKeySelector;
/**
 * SecretList is a list of Secret.
 */
function secretList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "SecretList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.secretList = secretList;
/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
function secretProjection(options) {
    return ({}).merge(options);
}
exports.secretProjection = secretProjection;
/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
function secretReference(options) {
    return ({}).merge(options);
}
exports.secretReference = secretReference;
/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
function secretVolumeSource(options) {
    return ({}).merge(options);
}
exports.secretVolumeSource = secretVolumeSource;
/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 */
function securityContext(options) {
    return ({}).merge(options);
}
exports.securityContext = securityContext;
/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
function service(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "Service",
    }).merge(options);
}
exports.service = service;
/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 */
function serviceAccount(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ServiceAccount",
    }).merge(options);
}
exports.serviceAccount = serviceAccount;
/**
 * ServiceAccountList is a list of ServiceAccount objects
 */
function serviceAccountList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ServiceAccountList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.serviceAccountList = serviceAccountList;
/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 */
function serviceAccountTokenProjection(options) {
    return ({
        path: (options && options.path) || null,
    }).merge(options);
}
exports.serviceAccountTokenProjection = serviceAccountTokenProjection;
/**
 * ServiceList holds a list of services.
 */
function serviceList(options) {
    return ({
        apiVersion: "io.k8s.api.core.v1",
        kind: "ServiceList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.serviceList = serviceList;
/**
 * ServicePort contains information on service's port.
 */
function servicePort(options) {
    return ({
        port: (options && options.port) || 0,
    }).merge(options);
}
exports.servicePort = servicePort;
/**
 * ServiceSpec describes the attributes that a user creates on a service.
 */
function serviceSpec(options) {
    return ({}).merge(options);
}
exports.serviceSpec = serviceSpec;
/**
 * ServiceStatus represents the current status of a service.
 */
function serviceStatus(options) {
    return ({}).merge(options);
}
exports.serviceStatus = serviceStatus;
/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
function sessionAffinityConfig(options) {
    return ({}).merge(options);
}
exports.sessionAffinityConfig = sessionAffinityConfig;
/**
 * Represents a StorageOS persistent volume resource.
 */
function storageOSPersistentVolumeSource(options) {
    return ({}).merge(options);
}
exports.storageOSPersistentVolumeSource = storageOSPersistentVolumeSource;
/**
 * Represents a StorageOS persistent volume resource.
 */
function storageOSVolumeSource(options) {
    return ({}).merge(options);
}
exports.storageOSVolumeSource = storageOSVolumeSource;
/**
 * Sysctl defines a kernel parameter to be set
 */
function sysctl(options) {
    return ({
        name: (options && options.name) || null,
        value: (options && options.value) || null,
    }).merge(options);
}
exports.sysctl = sysctl;
/**
 * TCPSocketAction describes an action based on opening a socket
 */
function tCPSocketAction(options) {
    return ({
        port: (options && options.port) || intOrStringIoK8sApimachineryPkgUtilIntstr(),
    }).merge(options);
}
exports.tCPSocketAction = tCPSocketAction;
/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
function taint(options) {
    return ({
        effect: (options && options.effect) || null,
        key: (options && options.key) || null,
    }).merge(options);
}
exports.taint = taint;
/**
 * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 */
function toleration(options) {
    return ({}).merge(options);
}
exports.toleration = toleration;
/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
function topologySelectorLabelRequirement(options) {
    return ({
        key: (options && options.key) || null,
        values: (options && options.values) || [],
    }).merge(options);
}
exports.topologySelectorLabelRequirement = topologySelectorLabelRequirement;
/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
function topologySelectorTerm(options) {
    return ({}).merge(options);
}
exports.topologySelectorTerm = topologySelectorTerm;
/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
function typedLocalObjectReference(options) {
    return ({
        kind: "TypedLocalObjectReference",
        name: (options && options.name) || null,
    }).merge(options);
}
exports.typedLocalObjectReference = typedLocalObjectReference;
/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
function volume(options) {
    return ({
        name: (options && options.name) || null,
    }).merge(options);
}
exports.volume = volume;
/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
function volumeDevice(options) {
    return ({
        devicePath: (options && options.devicePath) || null,
        name: (options && options.name) || null,
    }).merge(options);
}
exports.volumeDevice = volumeDevice;
/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
function volumeMount(options) {
    return ({
        mountPath: (options && options.mountPath) || null,
        name: (options && options.name) || null,
    }).merge(options);
}
exports.volumeMount = volumeMount;
/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
function volumeNodeAffinity(options) {
    return ({}).merge(options);
}
exports.volumeNodeAffinity = volumeNodeAffinity;
/**
 * Projection that may be projected along with other supported volume types
 */
function volumeProjection(options) {
    return ({}).merge(options);
}
exports.volumeProjection = volumeProjection;
/**
 * Represents a vSphere volume resource.
 */
function vsphereVirtualDiskVolumeSource(options) {
    return ({
        volumePath: (options && options.volumePath) || null,
    }).merge(options);
}
exports.vsphereVirtualDiskVolumeSource = vsphereVirtualDiskVolumeSource;
/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
function weightedPodAffinityTerm(options) {
    return ({
        podAffinityTerm: (options && options.podAffinityTerm) || podAffinityTerm(),
        weight: (options && options.weight) || 0,
    }).merge(options);
}
exports.weightedPodAffinityTerm = weightedPodAffinityTerm;
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead.
 */
function allowedFlexVolumeIoK8sApiExtensionsV1beta1(options) {
    return ({
        driver: (options && options.driver) || null,
    }).merge(options);
}
exports.allowedFlexVolumeIoK8sApiExtensionsV1beta1 = allowedFlexVolumeIoK8sApiExtensionsV1beta1;
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead.
 */
function allowedHostPathIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.allowedHostPathIoK8sApiExtensionsV1beta1 = allowedHostPathIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
function daemonSetIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "DaemonSet",
    }).merge(options);
}
exports.daemonSetIoK8sApiExtensionsV1beta1 = daemonSetIoK8sApiExtensionsV1beta1;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
function daemonSetConditionIoK8sApiExtensionsV1beta1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.daemonSetConditionIoK8sApiExtensionsV1beta1 = daemonSetConditionIoK8sApiExtensionsV1beta1;
/**
 * DaemonSetList is a collection of daemon sets.
 */
function daemonSetListIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "DaemonSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.daemonSetListIoK8sApiExtensionsV1beta1 = daemonSetListIoK8sApiExtensionsV1beta1;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
function daemonSetSpecIoK8sApiExtensionsV1beta1(options) {
    return ({
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.daemonSetSpecIoK8sApiExtensionsV1beta1 = daemonSetSpecIoK8sApiExtensionsV1beta1;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
function daemonSetStatusIoK8sApiExtensionsV1beta1(options) {
    return ({
        currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
        desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
        numberMisscheduled: (options && options.numberMisscheduled) || 0,
        numberReady: (options && options.numberReady) || 0,
    }).merge(options);
}
exports.daemonSetStatusIoK8sApiExtensionsV1beta1 = daemonSetStatusIoK8sApiExtensionsV1beta1;
function daemonSetUpdateStrategyIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.daemonSetUpdateStrategyIoK8sApiExtensionsV1beta1 = daemonSetUpdateStrategyIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
function deploymentIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "Deployment",
    }).merge(options);
}
exports.deploymentIoK8sApiExtensionsV1beta1 = deploymentIoK8sApiExtensionsV1beta1;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
function deploymentConditionIoK8sApiExtensionsV1beta1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.deploymentConditionIoK8sApiExtensionsV1beta1 = deploymentConditionIoK8sApiExtensionsV1beta1;
/**
 * DeploymentList is a list of Deployments.
 */
function deploymentListIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "DeploymentList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.deploymentListIoK8sApiExtensionsV1beta1 = deploymentListIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
function deploymentRollbackIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "DeploymentRollback",
        name: (options && options.name) || null,
        rollbackTo: (options && options.rollbackTo) || rollbackConfigIoK8sApiExtensionsV1beta1(),
    }).merge(options);
}
exports.deploymentRollbackIoK8sApiExtensionsV1beta1 = deploymentRollbackIoK8sApiExtensionsV1beta1;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
function deploymentSpecIoK8sApiExtensionsV1beta1(options) {
    return ({
        template: (options && options.template) || podTemplateSpec(),
    }).merge(options);
}
exports.deploymentSpecIoK8sApiExtensionsV1beta1 = deploymentSpecIoK8sApiExtensionsV1beta1;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
function deploymentStatusIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentStatusIoK8sApiExtensionsV1beta1 = deploymentStatusIoK8sApiExtensionsV1beta1;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
function deploymentStrategyIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentStrategyIoK8sApiExtensionsV1beta1 = deploymentStrategyIoK8sApiExtensionsV1beta1;
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 */
function fSGroupStrategyOptionsIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.fSGroupStrategyOptionsIoK8sApiExtensionsV1beta1 = fSGroupStrategyOptionsIoK8sApiExtensionsV1beta1;
/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 */
function hTTPIngressPathIoK8sApiExtensionsV1beta1(options) {
    return ({
        backend: (options && options.backend) || ingressBackendIoK8sApiExtensionsV1beta1(),
    }).merge(options);
}
exports.hTTPIngressPathIoK8sApiExtensionsV1beta1 = hTTPIngressPathIoK8sApiExtensionsV1beta1;
/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
function hTTPIngressRuleValueIoK8sApiExtensionsV1beta1(options) {
    return ({
        paths: (options && options.paths) || [],
    }).merge(options);
}
exports.hTTPIngressRuleValueIoK8sApiExtensionsV1beta1 = hTTPIngressRuleValueIoK8sApiExtensionsV1beta1;
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 */
function hostPortRangeIoK8sApiExtensionsV1beta1(options) {
    return ({
        max: (options && options.max) || 0,
        min: (options && options.min) || 0,
    }).merge(options);
}
exports.hostPortRangeIoK8sApiExtensionsV1beta1 = hostPortRangeIoK8sApiExtensionsV1beta1;
/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 */
function iDRangeIoK8sApiExtensionsV1beta1(options) {
    return ({
        max: (options && options.max) || 0,
        min: (options && options.min) || 0,
    }).merge(options);
}
exports.iDRangeIoK8sApiExtensionsV1beta1 = iDRangeIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
function iPBlockIoK8sApiExtensionsV1beta1(options) {
    return ({
        cidr: (options && options.cidr) || null,
    }).merge(options);
}
exports.iPBlockIoK8sApiExtensionsV1beta1 = iPBlockIoK8sApiExtensionsV1beta1;
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
function ingressIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "Ingress",
    }).merge(options);
}
exports.ingressIoK8sApiExtensionsV1beta1 = ingressIoK8sApiExtensionsV1beta1;
/**
 * IngressBackend describes all endpoints for a given service and port.
 */
function ingressBackendIoK8sApiExtensionsV1beta1(options) {
    return ({
        serviceName: (options && options.serviceName) || null,
        servicePort: (options && options.servicePort) || intOrStringIoK8sApimachineryPkgUtilIntstr(),
    }).merge(options);
}
exports.ingressBackendIoK8sApiExtensionsV1beta1 = ingressBackendIoK8sApiExtensionsV1beta1;
/**
 * IngressList is a collection of Ingress.
 */
function ingressListIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "IngressList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.ingressListIoK8sApiExtensionsV1beta1 = ingressListIoK8sApiExtensionsV1beta1;
/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
function ingressRuleIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressRuleIoK8sApiExtensionsV1beta1 = ingressRuleIoK8sApiExtensionsV1beta1;
/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
function ingressSpecIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressSpecIoK8sApiExtensionsV1beta1 = ingressSpecIoK8sApiExtensionsV1beta1;
/**
 * IngressStatus describe the current state of the Ingress.
 */
function ingressStatusIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressStatusIoK8sApiExtensionsV1beta1 = ingressStatusIoK8sApiExtensionsV1beta1;
/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
function ingressTLSIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressTLSIoK8sApiExtensionsV1beta1 = ingressTLSIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
function networkPolicyIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "NetworkPolicy",
    }).merge(options);
}
exports.networkPolicyIoK8sApiExtensionsV1beta1 = networkPolicyIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
function networkPolicyEgressRuleIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyEgressRuleIoK8sApiExtensionsV1beta1 = networkPolicyEgressRuleIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 */
function networkPolicyIngressRuleIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyIngressRuleIoK8sApiExtensionsV1beta1 = networkPolicyIngressRuleIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 */
function networkPolicyListIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "NetworkPolicyList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.networkPolicyListIoK8sApiExtensionsV1beta1 = networkPolicyListIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 */
function networkPolicyPeerIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyPeerIoK8sApiExtensionsV1beta1 = networkPolicyPeerIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 */
function networkPolicyPortIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyPortIoK8sApiExtensionsV1beta1 = networkPolicyPortIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
 */
function networkPolicySpecIoK8sApiExtensionsV1beta1(options) {
    return ({
        podSelector: (options && options.podSelector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    }).merge(options);
}
exports.networkPolicySpecIoK8sApiExtensionsV1beta1 = networkPolicySpecIoK8sApiExtensionsV1beta1;
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 */
function podSecurityPolicyIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "PodSecurityPolicy",
    }).merge(options);
}
exports.podSecurityPolicyIoK8sApiExtensionsV1beta1 = podSecurityPolicyIoK8sApiExtensionsV1beta1;
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
function podSecurityPolicyListIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "PodSecurityPolicyList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.podSecurityPolicyListIoK8sApiExtensionsV1beta1 = podSecurityPolicyListIoK8sApiExtensionsV1beta1;
/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 */
function podSecurityPolicySpecIoK8sApiExtensionsV1beta1(options) {
    return ({
        fsGroup: (options && options.fsGroup) || fSGroupStrategyOptionsIoK8sApiExtensionsV1beta1(),
        runAsUser: (options && options.runAsUser) || runAsUserStrategyOptionsIoK8sApiExtensionsV1beta1(),
        seLinux: (options && options.seLinux) || sELinuxStrategyOptionsIoK8sApiExtensionsV1beta1(),
        supplementalGroups: (options && options.supplementalGroups) || supplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1(),
    }).merge(options);
}
exports.podSecurityPolicySpecIoK8sApiExtensionsV1beta1 = podSecurityPolicySpecIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
function replicaSetIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "ReplicaSet",
    }).merge(options);
}
exports.replicaSetIoK8sApiExtensionsV1beta1 = replicaSetIoK8sApiExtensionsV1beta1;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
function replicaSetConditionIoK8sApiExtensionsV1beta1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.replicaSetConditionIoK8sApiExtensionsV1beta1 = replicaSetConditionIoK8sApiExtensionsV1beta1;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
function replicaSetListIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "ReplicaSetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.replicaSetListIoK8sApiExtensionsV1beta1 = replicaSetListIoK8sApiExtensionsV1beta1;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
function replicaSetSpecIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.replicaSetSpecIoK8sApiExtensionsV1beta1 = replicaSetSpecIoK8sApiExtensionsV1beta1;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
function replicaSetStatusIoK8sApiExtensionsV1beta1(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.replicaSetStatusIoK8sApiExtensionsV1beta1 = replicaSetStatusIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED.
 */
function rollbackConfigIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollbackConfigIoK8sApiExtensionsV1beta1 = rollbackConfigIoK8sApiExtensionsV1beta1;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
function rollingUpdateDaemonSetIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDaemonSetIoK8sApiExtensionsV1beta1 = rollingUpdateDaemonSetIoK8sApiExtensionsV1beta1;
/**
 * Spec to control the desired behavior of rolling update.
 */
function rollingUpdateDeploymentIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDeploymentIoK8sApiExtensionsV1beta1 = rollingUpdateDeploymentIoK8sApiExtensionsV1beta1;
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 */
function runAsUserStrategyOptionsIoK8sApiExtensionsV1beta1(options) {
    return ({
        rule: (options && options.rule) || null,
    }).merge(options);
}
exports.runAsUserStrategyOptionsIoK8sApiExtensionsV1beta1 = runAsUserStrategyOptionsIoK8sApiExtensionsV1beta1;
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
function sELinuxStrategyOptionsIoK8sApiExtensionsV1beta1(options) {
    return ({
        rule: (options && options.rule) || null,
    }).merge(options);
}
exports.sELinuxStrategyOptionsIoK8sApiExtensionsV1beta1 = sELinuxStrategyOptionsIoK8sApiExtensionsV1beta1;
/**
 * represents a scaling request for a resource.
 */
function scaleIoK8sApiExtensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.extensions.v1beta1",
        kind: "Scale",
    }).merge(options);
}
exports.scaleIoK8sApiExtensionsV1beta1 = scaleIoK8sApiExtensionsV1beta1;
/**
 * describes the attributes of a scale subresource
 */
function scaleSpecIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.scaleSpecIoK8sApiExtensionsV1beta1 = scaleSpecIoK8sApiExtensionsV1beta1;
/**
 * represents the current status of a scale subresource.
 */
function scaleStatusIoK8sApiExtensionsV1beta1(options) {
    return ({
        replicas: (options && options.replicas) || 0,
    }).merge(options);
}
exports.scaleStatusIoK8sApiExtensionsV1beta1 = scaleStatusIoK8sApiExtensionsV1beta1;
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 */
function supplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.supplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1 = supplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1;
/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
function iPBlockIoK8sApiNetworkingV1(options) {
    return ({
        cidr: (options && options.cidr) || null,
    }).merge(options);
}
exports.iPBlockIoK8sApiNetworkingV1 = iPBlockIoK8sApiNetworkingV1;
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
function networkPolicyIoK8sApiNetworkingV1(options) {
    return ({
        apiVersion: "io.k8s.api.networking.v1",
        kind: "NetworkPolicy",
    }).merge(options);
}
exports.networkPolicyIoK8sApiNetworkingV1 = networkPolicyIoK8sApiNetworkingV1;
/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
function networkPolicyEgressRuleIoK8sApiNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyEgressRuleIoK8sApiNetworkingV1 = networkPolicyEgressRuleIoK8sApiNetworkingV1;
/**
 * NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
 */
function networkPolicyIngressRuleIoK8sApiNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyIngressRuleIoK8sApiNetworkingV1 = networkPolicyIngressRuleIoK8sApiNetworkingV1;
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
function networkPolicyListIoK8sApiNetworkingV1(options) {
    return ({
        apiVersion: "io.k8s.api.networking.v1",
        kind: "NetworkPolicyList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.networkPolicyListIoK8sApiNetworkingV1 = networkPolicyListIoK8sApiNetworkingV1;
/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
function networkPolicyPeerIoK8sApiNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyPeerIoK8sApiNetworkingV1 = networkPolicyPeerIoK8sApiNetworkingV1;
/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
function networkPolicyPortIoK8sApiNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyPortIoK8sApiNetworkingV1 = networkPolicyPortIoK8sApiNetworkingV1;
/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 */
function networkPolicySpecIoK8sApiNetworkingV1(options) {
    return ({
        podSelector: (options && options.podSelector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    }).merge(options);
}
exports.networkPolicySpecIoK8sApiNetworkingV1 = networkPolicySpecIoK8sApiNetworkingV1;
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
function allowedFlexVolumeIoK8sApiPolicyV1beta1(options) {
    return ({
        driver: (options && options.driver) || null,
    }).merge(options);
}
exports.allowedFlexVolumeIoK8sApiPolicyV1beta1 = allowedFlexVolumeIoK8sApiPolicyV1beta1;
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
function allowedHostPathIoK8sApiPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.allowedHostPathIoK8sApiPolicyV1beta1 = allowedHostPathIoK8sApiPolicyV1beta1;
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
function evictionIoK8sApiPolicyV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.policy.v1beta1",
        kind: "Eviction",
    }).merge(options);
}
exports.evictionIoK8sApiPolicyV1beta1 = evictionIoK8sApiPolicyV1beta1;
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
function fSGroupStrategyOptionsIoK8sApiPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.fSGroupStrategyOptionsIoK8sApiPolicyV1beta1 = fSGroupStrategyOptionsIoK8sApiPolicyV1beta1;
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
function hostPortRangeIoK8sApiPolicyV1beta1(options) {
    return ({
        max: (options && options.max) || 0,
        min: (options && options.min) || 0,
    }).merge(options);
}
exports.hostPortRangeIoK8sApiPolicyV1beta1 = hostPortRangeIoK8sApiPolicyV1beta1;
/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
function iDRangeIoK8sApiPolicyV1beta1(options) {
    return ({
        max: (options && options.max) || 0,
        min: (options && options.min) || 0,
    }).merge(options);
}
exports.iDRangeIoK8sApiPolicyV1beta1 = iDRangeIoK8sApiPolicyV1beta1;
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
function podDisruptionBudgetIoK8sApiPolicyV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.policy.v1beta1",
        kind: "PodDisruptionBudget",
    }).merge(options);
}
exports.podDisruptionBudgetIoK8sApiPolicyV1beta1 = podDisruptionBudgetIoK8sApiPolicyV1beta1;
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
function podDisruptionBudgetListIoK8sApiPolicyV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.policy.v1beta1",
        kind: "PodDisruptionBudgetList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.podDisruptionBudgetListIoK8sApiPolicyV1beta1 = podDisruptionBudgetListIoK8sApiPolicyV1beta1;
/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
function podDisruptionBudgetSpecIoK8sApiPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.podDisruptionBudgetSpecIoK8sApiPolicyV1beta1 = podDisruptionBudgetSpecIoK8sApiPolicyV1beta1;
/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
function podDisruptionBudgetStatusIoK8sApiPolicyV1beta1(options) {
    return ({
        currentHealthy: (options && options.currentHealthy) || 0,
        desiredHealthy: (options && options.desiredHealthy) || 0,
        disruptionsAllowed: (options && options.disruptionsAllowed) || 0,
        expectedPods: (options && options.expectedPods) || 0,
    }).merge(options);
}
exports.podDisruptionBudgetStatusIoK8sApiPolicyV1beta1 = podDisruptionBudgetStatusIoK8sApiPolicyV1beta1;
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
function podSecurityPolicyIoK8sApiPolicyV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.policy.v1beta1",
        kind: "PodSecurityPolicy",
    }).merge(options);
}
exports.podSecurityPolicyIoK8sApiPolicyV1beta1 = podSecurityPolicyIoK8sApiPolicyV1beta1;
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
function podSecurityPolicyListIoK8sApiPolicyV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.policy.v1beta1",
        kind: "PodSecurityPolicyList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.podSecurityPolicyListIoK8sApiPolicyV1beta1 = podSecurityPolicyListIoK8sApiPolicyV1beta1;
/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
function podSecurityPolicySpecIoK8sApiPolicyV1beta1(options) {
    return ({
        fsGroup: (options && options.fsGroup) || fSGroupStrategyOptionsIoK8sApiPolicyV1beta1(),
        runAsUser: (options && options.runAsUser) || runAsUserStrategyOptionsIoK8sApiPolicyV1beta1(),
        seLinux: (options && options.seLinux) || sELinuxStrategyOptionsIoK8sApiPolicyV1beta1(),
        supplementalGroups: (options && options.supplementalGroups) || supplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1(),
    }).merge(options);
}
exports.podSecurityPolicySpecIoK8sApiPolicyV1beta1 = podSecurityPolicySpecIoK8sApiPolicyV1beta1;
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
function runAsUserStrategyOptionsIoK8sApiPolicyV1beta1(options) {
    return ({
        rule: (options && options.rule) || null,
    }).merge(options);
}
exports.runAsUserStrategyOptionsIoK8sApiPolicyV1beta1 = runAsUserStrategyOptionsIoK8sApiPolicyV1beta1;
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
function sELinuxStrategyOptionsIoK8sApiPolicyV1beta1(options) {
    return ({
        rule: (options && options.rule) || null,
    }).merge(options);
}
exports.sELinuxStrategyOptionsIoK8sApiPolicyV1beta1 = sELinuxStrategyOptionsIoK8sApiPolicyV1beta1;
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
function supplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.supplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1 = supplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
function aggregationRuleIoK8sApiRbacV1(options) {
    return ({}).merge(options);
}
exports.aggregationRuleIoK8sApiRbacV1 = aggregationRuleIoK8sApiRbacV1;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
function clusterRoleIoK8sApiRbacV1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1",
        kind: "ClusterRole",
        rules: (options && options.rules) || [],
    }).merge(options);
}
exports.clusterRoleIoK8sApiRbacV1 = clusterRoleIoK8sApiRbacV1;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
function clusterRoleBindingIoK8sApiRbacV1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1",
        kind: "ClusterRoleBinding",
        roleRef: (options && options.roleRef) || roleRefIoK8sApiRbacV1(),
    }).merge(options);
}
exports.clusterRoleBindingIoK8sApiRbacV1 = clusterRoleBindingIoK8sApiRbacV1;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
function clusterRoleBindingListIoK8sApiRbacV1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1",
        kind: "ClusterRoleBindingList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.clusterRoleBindingListIoK8sApiRbacV1 = clusterRoleBindingListIoK8sApiRbacV1;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
function clusterRoleListIoK8sApiRbacV1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1",
        kind: "ClusterRoleList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.clusterRoleListIoK8sApiRbacV1 = clusterRoleListIoK8sApiRbacV1;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
function policyRuleIoK8sApiRbacV1(options) {
    return ({
        verbs: (options && options.verbs) || [],
    }).merge(options);
}
exports.policyRuleIoK8sApiRbacV1 = policyRuleIoK8sApiRbacV1;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
function roleIoK8sApiRbacV1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1",
        kind: "Role",
        rules: (options && options.rules) || [],
    }).merge(options);
}
exports.roleIoK8sApiRbacV1 = roleIoK8sApiRbacV1;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
function roleBindingIoK8sApiRbacV1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1",
        kind: "RoleBinding",
        roleRef: (options && options.roleRef) || roleRefIoK8sApiRbacV1(),
    }).merge(options);
}
exports.roleBindingIoK8sApiRbacV1 = roleBindingIoK8sApiRbacV1;
/**
 * RoleBindingList is a collection of RoleBindings
 */
function roleBindingListIoK8sApiRbacV1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1",
        kind: "RoleBindingList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.roleBindingListIoK8sApiRbacV1 = roleBindingListIoK8sApiRbacV1;
/**
 * RoleList is a collection of Roles
 */
function roleListIoK8sApiRbacV1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1",
        kind: "RoleList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.roleListIoK8sApiRbacV1 = roleListIoK8sApiRbacV1;
/**
 * RoleRef contains information that points to the role being used
 */
function roleRefIoK8sApiRbacV1(options) {
    return ({
        kind: "RoleRef",
        apiGroup: (options && options.apiGroup) || null,
        name: (options && options.name) || null,
    }).merge(options);
}
exports.roleRefIoK8sApiRbacV1 = roleRefIoK8sApiRbacV1;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
function subjectIoK8sApiRbacV1(options) {
    return ({
        kind: "Subject",
        name: (options && options.name) || null,
    }).merge(options);
}
exports.subjectIoK8sApiRbacV1 = subjectIoK8sApiRbacV1;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
function aggregationRuleIoK8sApiRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.aggregationRuleIoK8sApiRbacV1beta1 = aggregationRuleIoK8sApiRbacV1beta1;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
function clusterRoleIoK8sApiRbacV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1beta1",
        kind: "ClusterRole",
        rules: (options && options.rules) || [],
    }).merge(options);
}
exports.clusterRoleIoK8sApiRbacV1beta1 = clusterRoleIoK8sApiRbacV1beta1;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
function clusterRoleBindingIoK8sApiRbacV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1beta1",
        kind: "ClusterRoleBinding",
        roleRef: (options && options.roleRef) || roleRefIoK8sApiRbacV1beta1(),
    }).merge(options);
}
exports.clusterRoleBindingIoK8sApiRbacV1beta1 = clusterRoleBindingIoK8sApiRbacV1beta1;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
function clusterRoleBindingListIoK8sApiRbacV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1beta1",
        kind: "ClusterRoleBindingList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.clusterRoleBindingListIoK8sApiRbacV1beta1 = clusterRoleBindingListIoK8sApiRbacV1beta1;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
function clusterRoleListIoK8sApiRbacV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1beta1",
        kind: "ClusterRoleList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.clusterRoleListIoK8sApiRbacV1beta1 = clusterRoleListIoK8sApiRbacV1beta1;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
function policyRuleIoK8sApiRbacV1beta1(options) {
    return ({
        verbs: (options && options.verbs) || [],
    }).merge(options);
}
exports.policyRuleIoK8sApiRbacV1beta1 = policyRuleIoK8sApiRbacV1beta1;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
function roleIoK8sApiRbacV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1beta1",
        kind: "Role",
        rules: (options && options.rules) || [],
    }).merge(options);
}
exports.roleIoK8sApiRbacV1beta1 = roleIoK8sApiRbacV1beta1;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
function roleBindingIoK8sApiRbacV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1beta1",
        kind: "RoleBinding",
        roleRef: (options && options.roleRef) || roleRefIoK8sApiRbacV1beta1(),
    }).merge(options);
}
exports.roleBindingIoK8sApiRbacV1beta1 = roleBindingIoK8sApiRbacV1beta1;
/**
 * RoleBindingList is a collection of RoleBindings
 */
function roleBindingListIoK8sApiRbacV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1beta1",
        kind: "RoleBindingList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.roleBindingListIoK8sApiRbacV1beta1 = roleBindingListIoK8sApiRbacV1beta1;
/**
 * RoleList is a collection of Roles
 */
function roleListIoK8sApiRbacV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.rbac.v1beta1",
        kind: "RoleList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.roleListIoK8sApiRbacV1beta1 = roleListIoK8sApiRbacV1beta1;
/**
 * RoleRef contains information that points to the role being used
 */
function roleRefIoK8sApiRbacV1beta1(options) {
    return ({
        kind: "RoleRef",
        apiGroup: (options && options.apiGroup) || null,
        name: (options && options.name) || null,
    }).merge(options);
}
exports.roleRefIoK8sApiRbacV1beta1 = roleRefIoK8sApiRbacV1beta1;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
function subjectIoK8sApiRbacV1beta1(options) {
    return ({
        kind: "Subject",
        name: (options && options.name) || null,
    }).merge(options);
}
exports.subjectIoK8sApiRbacV1beta1 = subjectIoK8sApiRbacV1beta1;
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
function priorityClassIoK8sApiSchedulingV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.scheduling.v1beta1",
        kind: "PriorityClass",
        value: (options && options.value) || 0,
    }).merge(options);
}
exports.priorityClassIoK8sApiSchedulingV1beta1 = priorityClassIoK8sApiSchedulingV1beta1;
/**
 * PriorityClassList is a collection of priority classes.
 */
function priorityClassListIoK8sApiSchedulingV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.scheduling.v1beta1",
        kind: "PriorityClassList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.priorityClassListIoK8sApiSchedulingV1beta1 = priorityClassListIoK8sApiSchedulingV1beta1;
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
function storageClassIoK8sApiStorageV1(options) {
    return ({
        apiVersion: "io.k8s.api.storage.v1",
        kind: "StorageClass",
        provisioner: (options && options.provisioner) || null,
    }).merge(options);
}
exports.storageClassIoK8sApiStorageV1 = storageClassIoK8sApiStorageV1;
/**
 * StorageClassList is a collection of storage classes.
 */
function storageClassListIoK8sApiStorageV1(options) {
    return ({
        apiVersion: "io.k8s.api.storage.v1",
        kind: "StorageClassList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.storageClassListIoK8sApiStorageV1 = storageClassListIoK8sApiStorageV1;
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
function storageClassIoK8sApiStorageV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.storage.v1beta1",
        kind: "StorageClass",
        provisioner: (options && options.provisioner) || null,
    }).merge(options);
}
exports.storageClassIoK8sApiStorageV1beta1 = storageClassIoK8sApiStorageV1beta1;
/**
 * StorageClassList is a collection of storage classes.
 */
function storageClassListIoK8sApiStorageV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.storage.v1beta1",
        kind: "StorageClassList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.storageClassListIoK8sApiStorageV1beta1 = storageClassListIoK8sApiStorageV1beta1;
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
function volumeAttachmentIoK8sApiStorageV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.storage.v1beta1",
        kind: "VolumeAttachment",
        spec: (options && options.spec) || volumeAttachmentSpecIoK8sApiStorageV1beta1(),
    }).merge(options);
}
exports.volumeAttachmentIoK8sApiStorageV1beta1 = volumeAttachmentIoK8sApiStorageV1beta1;
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
function volumeAttachmentListIoK8sApiStorageV1beta1(options) {
    return ({
        apiVersion: "io.k8s.api.storage.v1beta1",
        kind: "VolumeAttachmentList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.volumeAttachmentListIoK8sApiStorageV1beta1 = volumeAttachmentListIoK8sApiStorageV1beta1;
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
function volumeAttachmentSourceIoK8sApiStorageV1beta1(options) {
    return ({}).merge(options);
}
exports.volumeAttachmentSourceIoK8sApiStorageV1beta1 = volumeAttachmentSourceIoK8sApiStorageV1beta1;
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
function volumeAttachmentSpecIoK8sApiStorageV1beta1(options) {
    return ({
        attacher: (options && options.attacher) || null,
        nodeName: (options && options.nodeName) || null,
        source: (options && options.source) || volumeAttachmentSourceIoK8sApiStorageV1beta1(),
    }).merge(options);
}
exports.volumeAttachmentSpecIoK8sApiStorageV1beta1 = volumeAttachmentSpecIoK8sApiStorageV1beta1;
/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
function volumeAttachmentStatusIoK8sApiStorageV1beta1(options) {
    return ({
        attached: (options && options.attached) || false,
    }).merge(options);
}
exports.volumeAttachmentStatusIoK8sApiStorageV1beta1 = volumeAttachmentStatusIoK8sApiStorageV1beta1;
/**
 * VolumeError captures an error encountered during a volume operation.
 */
function volumeErrorIoK8sApiStorageV1beta1(options) {
    return ({}).merge(options);
}
exports.volumeErrorIoK8sApiStorageV1beta1 = volumeErrorIoK8sApiStorageV1beta1;
/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
function customResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        JSONPath: (options && options.JSONPath) || null,
        name: (options && options.name) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.customResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
function customResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1",
        kind: "CustomResourceDefinition",
        spec: (options && options.spec) || customResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(),
    }).merge(options);
}
exports.customResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
function customResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.customResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
function customResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1",
        kind: "CustomResourceDefinitionList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.customResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
function customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        kind: "CustomResourceDefinitionNames",
        plural: (options && options.plural) || null,
    }).merge(options);
}
exports.customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
function customResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        group: (options && options.group) || null,
        names: (options && options.names) || customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(),
        scope: (options && options.scope) || null,
    }).merge(options);
}
exports.customResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
function customResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        acceptedNames: (options && options.acceptedNames) || customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(),
        conditions: (options && options.conditions) || [],
        storedVersions: (options && options.storedVersions) || [],
    }).merge(options);
}
exports.customResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
function customResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        name: (options && options.name) || null,
        served: (options && options.served) || false,
        storage: (options && options.storage) || false,
    }).merge(options);
}
exports.customResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 */
function customResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({
        specReplicasPath: (options && options.specReplicasPath) || null,
        statusReplicasPath: (options && options.statusReplicasPath) || null,
    }).merge(options);
}
exports.customResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
 */
function customResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.customResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
function customResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.customResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
function customResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.customResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = customResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
function externalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.externalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = externalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
function jSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.jSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = jSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 */
function jSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.jSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = jSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
function jSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.jSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = jSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
function jSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.jSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = jSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array.
 */
function jSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.jSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 = jSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and Int64() accessors.
 *
 * The serialization format is:
 *
 * <quantity>        ::= <signedNumber><suffix>
 *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
 * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
 *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
 * <decimalSI>       ::= m | "" | k | M | G | T | P | E
 *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
 * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
 *
 * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
 *
 * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
 *
 * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
 *   a. No precision is lost
 *   b. No fractional digits will be emitted
 *   c. The exponent (or suffix) is as large as possible.
 * The sign will be omitted unless the number is negative.
 *
 * Examples:
 *   1.5 will be serialized as "1500m"
 *   1.5Gi will be serialized as "1536Mi"
 *
 * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
 *
 * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
 *
 * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
 */
function quantityIoK8sApimachineryPkgApiResource(options) {
    return ({}).merge(options);
}
exports.quantityIoK8sApimachineryPkgApiResource = quantityIoK8sApimachineryPkgApiResource;
/**
 * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and Int64() accessors.
 *
 * The serialization format is:
 *
 * <quantity>        ::= <signedNumber><suffix>
 *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
 * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
 *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
 * <decimalSI>       ::= m | "" | k | M | G | T | P | E
 *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
 * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
 *
 * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
 *
 * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
 *
 * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
 *   a. No precision is lost
 *   b. No fractional digits will be emitted
 *   c. The exponent (or suffix) is as large as possible.
 * The sign will be omitted unless the number is negative.
 *
 * Examples:
 *   1.5 will be serialized as "1500m"
 *   1.5Gi will be serialized as "1536Mi"
 *
 * NOTE: We reserve the right to amend this canonical format, perhaps to
 *   allow 1.5 to be canonical.
 *   or after March 2015.
 *
 * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
 *
 * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
 *
 * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
 */
function quantity_v2IoK8sApimachineryPkgApiResource(options) {
    return ({}).merge(options);
}
exports.quantity_v2IoK8sApimachineryPkgApiResource = quantity_v2IoK8sApimachineryPkgApiResource;
/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
function aPIGroupIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
        kind: "APIGroup",
        name: (options && options.name) || null,
        versions: (options && options.versions) || [],
    }).merge(options);
}
exports.aPIGroupIoK8sApimachineryPkgApisMetaV1 = aPIGroupIoK8sApimachineryPkgApisMetaV1;
/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
function aPIGroupListIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
        kind: "APIGroupList",
        groups: (options && options.groups) || [],
    }).merge(options);
}
exports.aPIGroupListIoK8sApimachineryPkgApisMetaV1 = aPIGroupListIoK8sApimachineryPkgApisMetaV1;
/**
 * APIResource specifies the name of a resource and whether it is namespaced.
 */
function aPIResourceIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        kind: "APIResource",
        name: (options && options.name) || null,
        namespaced: (options && options.namespaced) || false,
        singularName: (options && options.singularName) || null,
        verbs: (options && options.verbs) || [],
    }).merge(options);
}
exports.aPIResourceIoK8sApimachineryPkgApisMetaV1 = aPIResourceIoK8sApimachineryPkgApisMetaV1;
/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 */
function aPIResourceListIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
        kind: "APIResourceList",
        groupVersion: (options && options.groupVersion) || null,
        resources: (options && options.resources) || [],
    }).merge(options);
}
exports.aPIResourceListIoK8sApimachineryPkgApisMetaV1 = aPIResourceListIoK8sApimachineryPkgApisMetaV1;
/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
function aPIVersionsIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
        kind: "APIVersions",
        serverAddressByClientCIDRs: (options && options.serverAddressByClientCIDRs) || [],
        versions: (options && options.versions) || [],
    }).merge(options);
}
exports.aPIVersionsIoK8sApimachineryPkgApisMetaV1 = aPIVersionsIoK8sApimachineryPkgApisMetaV1;
/**
 * DeleteOptions may be provided when deleting an API object.
 */
function deleteOptionsIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
        kind: "DeleteOptions",
    }).merge(options);
}
exports.deleteOptionsIoK8sApimachineryPkgApisMetaV1 = deleteOptionsIoK8sApimachineryPkgApisMetaV1;
/**
 * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
 */
function durationIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        Duration: (options && options.Duration) || 0,
    }).merge(options);
}
exports.durationIoK8sApimachineryPkgApisMetaV1 = durationIoK8sApimachineryPkgApisMetaV1;
/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
function groupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        groupVersion: (options && options.groupVersion) || null,
        version: (options && options.version) || null,
    }).merge(options);
}
exports.groupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1 = groupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1;
/**
 * Initializer is information about an initializer that has not yet completed.
 */
function initializerIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        name: (options && options.name) || null,
    }).merge(options);
}
exports.initializerIoK8sApimachineryPkgApisMetaV1 = initializerIoK8sApimachineryPkgApisMetaV1;
/**
 * Initializers tracks the progress of initialization.
 */
function initializersIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        pending: (options && options.pending) || [],
    }).merge(options);
}
exports.initializersIoK8sApimachineryPkgApisMetaV1 = initializersIoK8sApimachineryPkgApisMetaV1;
/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
function labelSelectorIoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.labelSelectorIoK8sApimachineryPkgApisMetaV1 = labelSelectorIoK8sApimachineryPkgApisMetaV1;
/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
function labelSelectorRequirementIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        key: (options && options.key) || null,
        operator: (options && options.operator) || null,
    }).merge(options);
}
exports.labelSelectorRequirementIoK8sApimachineryPkgApisMetaV1 = labelSelectorRequirementIoK8sApimachineryPkgApisMetaV1;
/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
function listMetaIoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.listMetaIoK8sApimachineryPkgApisMetaV1 = listMetaIoK8sApimachineryPkgApisMetaV1;
/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
function listMeta_v2IoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.listMeta_v2IoK8sApimachineryPkgApisMetaV1 = listMeta_v2IoK8sApimachineryPkgApisMetaV1;
/**
 * MicroTime is version of Time with microsecond level precision.
 */
function microTimeIoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.microTimeIoK8sApimachineryPkgApisMetaV1 = microTimeIoK8sApimachineryPkgApisMetaV1;
/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
function objectMetaIoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.objectMetaIoK8sApimachineryPkgApisMetaV1 = objectMetaIoK8sApimachineryPkgApisMetaV1;
/**
 * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
 */
function ownerReferenceIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
        kind: "OwnerReference",
        name: (options && options.name) || null,
        uid: (options && options.uid) || null,
    }).merge(options);
}
exports.ownerReferenceIoK8sApimachineryPkgApisMetaV1 = ownerReferenceIoK8sApimachineryPkgApisMetaV1;
/**
 * Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
 */
function patchIoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.patchIoK8sApimachineryPkgApisMetaV1 = patchIoK8sApimachineryPkgApisMetaV1;
/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
function preconditionsIoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.preconditionsIoK8sApimachineryPkgApisMetaV1 = preconditionsIoK8sApimachineryPkgApisMetaV1;
/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
function serverAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        clientCIDR: (options && options.clientCIDR) || null,
        serverAddress: (options && options.serverAddress) || null,
    }).merge(options);
}
exports.serverAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1 = serverAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1;
/**
 * Status is a return value for calls that don't return other objects.
 */
function statusIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
        kind: "Status",
    }).merge(options);
}
exports.statusIoK8sApimachineryPkgApisMetaV1 = statusIoK8sApimachineryPkgApisMetaV1;
/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
function statusCauseIoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.statusCauseIoK8sApimachineryPkgApisMetaV1 = statusCauseIoK8sApimachineryPkgApisMetaV1;
/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
function statusDetailsIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        kind: "StatusDetails",
    }).merge(options);
}
exports.statusDetailsIoK8sApimachineryPkgApisMetaV1 = statusDetailsIoK8sApimachineryPkgApisMetaV1;
/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 */
function timeIoK8sApimachineryPkgApisMetaV1(options) {
    return ({}).merge(options);
}
exports.timeIoK8sApimachineryPkgApisMetaV1 = timeIoK8sApimachineryPkgApisMetaV1;
/**
 * Event represents a single event to a watched resource.
 */
function watchEventIoK8sApimachineryPkgApisMetaV1(options) {
    return ({
        object: (options && options.object) || rawExtensionIoK8sApimachineryPkgRuntime(),
        type: (options && options.type) || null,
    }).merge(options);
}
exports.watchEventIoK8sApimachineryPkgApisMetaV1 = watchEventIoK8sApimachineryPkgApisMetaV1;
/**
 * RawExtension is used to hold extensions in external versions.
 *
 * To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.
 *
 * // Internal package: type MyAPIObject struct {
 * 	runtime.TypeMeta `json:",inline"`
 * 	MyPlugin runtime.Object `json:"myPlugin"`
 * } type PluginA struct {
 * 	AOption string `json:"aOption"`
 * }
 *
 * // External package: type MyAPIObject struct {
 * 	runtime.TypeMeta `json:",inline"`
 * 	MyPlugin runtime.RawExtension `json:"myPlugin"`
 * } type PluginA struct {
 * 	AOption string `json:"aOption"`
 * }
 *
 * // On the wire, the JSON will look something like this: {
 * 	"kind":"MyAPIObject",
 * 	"apiVersion":"v1",
 * 	"myPlugin": {
 * 		"kind":"PluginA",
 * 		"aOption":"foo",
 * 	},
 * }
 *
 * So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
 */
function rawExtensionIoK8sApimachineryPkgRuntime(options) {
    return ({
        Raw: (options && options.Raw) || null,
    }).merge(options);
}
exports.rawExtensionIoK8sApimachineryPkgRuntime = rawExtensionIoK8sApimachineryPkgRuntime;
/**
 * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
 */
function intOrStringIoK8sApimachineryPkgUtilIntstr(options) {
    return ({}).merge(options);
}
exports.intOrStringIoK8sApimachineryPkgUtilIntstr = intOrStringIoK8sApimachineryPkgUtilIntstr;
/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
function infoIoK8sApimachineryPkgVersion(options) {
    return ({
        buildDate: (options && options.buildDate) || null,
        compiler: (options && options.compiler) || null,
        gitCommit: (options && options.gitCommit) || null,
        gitTreeState: (options && options.gitTreeState) || null,
        gitVersion: (options && options.gitVersion) || null,
        goVersion: (options && options.goVersion) || null,
        major: (options && options.major) || null,
        minor: (options && options.minor) || null,
        platform: (options && options.platform) || null,
    }).merge(options);
}
exports.infoIoK8sApimachineryPkgVersion = infoIoK8sApimachineryPkgVersion;
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
function aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1(options) {
    return ({
        apiVersion: "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1",
        kind: "APIService",
    }).merge(options);
}
exports.aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1 = aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1;
function aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1 = aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * APIServiceList is a list of APIService objects.
 */
function aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1(options) {
    return ({
        apiVersion: "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1",
        kind: "APIServiceList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1 = aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
function aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1(options) {
    return ({
        groupPriorityMinimum: (options && options.groupPriorityMinimum) || 0,
        service: (options && options.service) || serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1(),
        versionPriority: (options && options.versionPriority) || 0,
    }).merge(options);
}
exports.aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1 = aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * APIServiceStatus contains derived information about an API server
 */
function aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1(options) {
    return ({}).merge(options);
}
exports.aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1 = aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
function serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1(options) {
    return ({}).merge(options);
}
exports.serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1 = serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
function aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1",
        kind: "APIService",
    }).merge(options);
}
exports.aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 = aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
function aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options) {
    return ({
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }).merge(options);
}
exports.aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 = aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * APIServiceList is a list of APIService objects.
 */
function aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options) {
    return ({
        apiVersion: "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1",
        kind: "APIServiceList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 = aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
function aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options) {
    return ({
        groupPriorityMinimum: (options && options.groupPriorityMinimum) || 0,
        service: (options && options.service) || serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(),
        versionPriority: (options && options.versionPriority) || 0,
    }).merge(options);
}
exports.aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 = aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * APIServiceStatus contains derived information about an API server
 */
function aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options) {
    return ({}).merge(options);
}
exports.aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 = aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
function serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options) {
    return ({}).merge(options);
}
exports.serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 = serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource instead.
 */
function aWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.aWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1 = aWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Affinity instead.
 */
function affinityIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.affinityIoK8sKubernetesPkgApiV1 = affinityIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.AttachedVolume instead.
 */
function attachedVolumeIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.attachedVolumeIoK8sKubernetesPkgApiV1 = attachedVolumeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.AzureDiskVolumeSource instead.
 */
function azureDiskVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.azureDiskVolumeSourceIoK8sKubernetesPkgApiV1 = azureDiskVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.AzureFileVolumeSource instead.
 */
function azureFileVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.azureFileVolumeSourceIoK8sKubernetesPkgApiV1 = azureFileVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Binding instead.
 */
function bindingIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.bindingIoK8sKubernetesPkgApiV1 = bindingIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Capabilities instead.
 */
function capabilitiesIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.capabilitiesIoK8sKubernetesPkgApiV1 = capabilitiesIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.CephFSVolumeSource instead.
 */
function cephFSVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.cephFSVolumeSourceIoK8sKubernetesPkgApiV1 = cephFSVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.CinderVolumeSource instead.
 */
function cinderVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.cinderVolumeSourceIoK8sKubernetesPkgApiV1 = cinderVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentCondition instead.
 */
function componentConditionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.componentConditionIoK8sKubernetesPkgApiV1 = componentConditionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentStatus instead.
 */
function componentStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.componentStatusIoK8sKubernetesPkgApiV1 = componentStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentStatusList instead.
 */
function componentStatusListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.componentStatusListIoK8sKubernetesPkgApiV1 = componentStatusListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMap instead.
 */
function configMapIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.configMapIoK8sKubernetesPkgApiV1 = configMapIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapEnvSource instead.
 */
function configMapEnvSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.configMapEnvSourceIoK8sKubernetesPkgApiV1 = configMapEnvSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapKeySelector instead.
 */
function configMapKeySelectorIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.configMapKeySelectorIoK8sKubernetesPkgApiV1 = configMapKeySelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapList instead.
 */
function configMapListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.configMapListIoK8sKubernetesPkgApiV1 = configMapListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapProjection instead.
 */
function configMapProjectionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.configMapProjectionIoK8sKubernetesPkgApiV1 = configMapProjectionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapVolumeSource instead.
 */
function configMapVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.configMapVolumeSourceIoK8sKubernetesPkgApiV1 = configMapVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Container instead.
 */
function containerIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.containerIoK8sKubernetesPkgApiV1 = containerIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerImage instead.
 */
function containerImageIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.containerImageIoK8sKubernetesPkgApiV1 = containerImageIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerPort instead.
 */
function containerPortIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.containerPortIoK8sKubernetesPkgApiV1 = containerPortIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerState instead.
 */
function containerStateIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.containerStateIoK8sKubernetesPkgApiV1 = containerStateIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateRunning instead.
 */
function containerStateRunningIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.containerStateRunningIoK8sKubernetesPkgApiV1 = containerStateRunningIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateTerminated instead.
 */
function containerStateTerminatedIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.containerStateTerminatedIoK8sKubernetesPkgApiV1 = containerStateTerminatedIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateWaiting instead.
 */
function containerStateWaitingIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.containerStateWaitingIoK8sKubernetesPkgApiV1 = containerStateWaitingIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStatus instead.
 */
function containerStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.containerStatusIoK8sKubernetesPkgApiV1 = containerStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.DaemonEndpoint instead.
 */
function daemonEndpointIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.daemonEndpointIoK8sKubernetesPkgApiV1 = daemonEndpointIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIProjection instead.
 */
function downwardAPIProjectionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.downwardAPIProjectionIoK8sKubernetesPkgApiV1 = downwardAPIProjectionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIVolumeFile instead.
 */
function downwardAPIVolumeFileIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.downwardAPIVolumeFileIoK8sKubernetesPkgApiV1 = downwardAPIVolumeFileIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIVolumeSource instead.
 */
function downwardAPIVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.downwardAPIVolumeSourceIoK8sKubernetesPkgApiV1 = downwardAPIVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EmptyDirVolumeSource instead.
 */
function emptyDirVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.emptyDirVolumeSourceIoK8sKubernetesPkgApiV1 = emptyDirVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointAddress instead.
 */
function endpointAddressIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.endpointAddressIoK8sKubernetesPkgApiV1 = endpointAddressIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointPort instead.
 */
function endpointPortIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.endpointPortIoK8sKubernetesPkgApiV1 = endpointPortIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointSubset instead.
 */
function endpointSubsetIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.endpointSubsetIoK8sKubernetesPkgApiV1 = endpointSubsetIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Endpoints instead.
 */
function endpointsIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.endpointsIoK8sKubernetesPkgApiV1 = endpointsIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointsList instead.
 */
function endpointsListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.endpointsListIoK8sKubernetesPkgApiV1 = endpointsListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvFromSource instead.
 */
function envFromSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.envFromSourceIoK8sKubernetesPkgApiV1 = envFromSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvVar instead.
 */
function envVarIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.envVarIoK8sKubernetesPkgApiV1 = envVarIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvVarSource instead.
 */
function envVarSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.envVarSourceIoK8sKubernetesPkgApiV1 = envVarSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Event instead.
 */
function eventIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.eventIoK8sKubernetesPkgApiV1 = eventIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EventList instead.
 */
function eventListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.eventListIoK8sKubernetesPkgApiV1 = eventListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EventSource instead.
 */
function eventSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.eventSourceIoK8sKubernetesPkgApiV1 = eventSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ExecAction instead.
 */
function execActionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.execActionIoK8sKubernetesPkgApiV1 = execActionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.FCVolumeSource instead.
 */
function fCVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.fCVolumeSourceIoK8sKubernetesPkgApiV1 = fCVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.FlexVolumeSource instead.
 */
function flexVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.flexVolumeSourceIoK8sKubernetesPkgApiV1 = flexVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.FlockerVolumeSource instead.
 */
function flockerVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.flockerVolumeSourceIoK8sKubernetesPkgApiV1 = flockerVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.GCEPersistentDiskVolumeSource instead.
 */
function gCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.gCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1 = gCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.GitRepoVolumeSource instead.
 */
function gitRepoVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.gitRepoVolumeSourceIoK8sKubernetesPkgApiV1 = gitRepoVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.GlusterfsVolumeSource instead.
 */
function glusterfsVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.glusterfsVolumeSourceIoK8sKubernetesPkgApiV1 = glusterfsVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.HTTPGetAction instead.
 */
function hTTPGetActionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.hTTPGetActionIoK8sKubernetesPkgApiV1 = hTTPGetActionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.HTTPHeader instead.
 */
function hTTPHeaderIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.hTTPHeaderIoK8sKubernetesPkgApiV1 = hTTPHeaderIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Handler instead.
 */
function handlerIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.handlerIoK8sKubernetesPkgApiV1 = handlerIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.HostAlias instead.
 */
function hostAliasIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.hostAliasIoK8sKubernetesPkgApiV1 = hostAliasIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.HostPathVolumeSource instead.
 */
function hostPathVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.hostPathVolumeSourceIoK8sKubernetesPkgApiV1 = hostPathVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ISCSIVolumeSource instead.
 */
function iSCSIVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.iSCSIVolumeSourceIoK8sKubernetesPkgApiV1 = iSCSIVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.KeyToPath instead.
 */
function keyToPathIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.keyToPathIoK8sKubernetesPkgApiV1 = keyToPathIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Lifecycle instead.
 */
function lifecycleIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.lifecycleIoK8sKubernetesPkgApiV1 = lifecycleIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRange instead.
 */
function limitRangeIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.limitRangeIoK8sKubernetesPkgApiV1 = limitRangeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeItem instead.
 */
function limitRangeItemIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.limitRangeItemIoK8sKubernetesPkgApiV1 = limitRangeItemIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeList instead.
 */
function limitRangeListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.limitRangeListIoK8sKubernetesPkgApiV1 = limitRangeListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeSpec instead.
 */
function limitRangeSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.limitRangeSpecIoK8sKubernetesPkgApiV1 = limitRangeSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LoadBalancerIngress instead.
 */
function loadBalancerIngressIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.loadBalancerIngressIoK8sKubernetesPkgApiV1 = loadBalancerIngressIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LoadBalancerStatus instead.
 */
function loadBalancerStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.loadBalancerStatusIoK8sKubernetesPkgApiV1 = loadBalancerStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LocalObjectReference instead.
 */
function localObjectReferenceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.localObjectReferenceIoK8sKubernetesPkgApiV1 = localObjectReferenceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LocalVolumeSource instead.
 */
function localVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.localVolumeSourceIoK8sKubernetesPkgApiV1 = localVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NFSVolumeSource instead.
 */
function nFSVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nFSVolumeSourceIoK8sKubernetesPkgApiV1 = nFSVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Namespace instead.
 */
function namespaceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.namespaceIoK8sKubernetesPkgApiV1 = namespaceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceList instead.
 */
function namespaceListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.namespaceListIoK8sKubernetesPkgApiV1 = namespaceListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceSpec instead.
 */
function namespaceSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.namespaceSpecIoK8sKubernetesPkgApiV1 = namespaceSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceStatus instead.
 */
function namespaceStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.namespaceStatusIoK8sKubernetesPkgApiV1 = namespaceStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Node instead.
 */
function nodeIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeIoK8sKubernetesPkgApiV1 = nodeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeAddress instead.
 */
function nodeAddressIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeAddressIoK8sKubernetesPkgApiV1 = nodeAddressIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeAffinity instead.
 */
function nodeAffinityIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeAffinityIoK8sKubernetesPkgApiV1 = nodeAffinityIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeCondition instead.
 */
function nodeConditionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeConditionIoK8sKubernetesPkgApiV1 = nodeConditionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeDaemonEndpoints instead.
 */
function nodeDaemonEndpointsIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeDaemonEndpointsIoK8sKubernetesPkgApiV1 = nodeDaemonEndpointsIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeList instead.
 */
function nodeListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeListIoK8sKubernetesPkgApiV1 = nodeListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelector instead.
 */
function nodeSelectorIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeSelectorIoK8sKubernetesPkgApiV1 = nodeSelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelectorRequirement instead.
 */
function nodeSelectorRequirementIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeSelectorRequirementIoK8sKubernetesPkgApiV1 = nodeSelectorRequirementIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelectorTerm instead.
 */
function nodeSelectorTermIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeSelectorTermIoK8sKubernetesPkgApiV1 = nodeSelectorTermIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSpec instead.
 */
function nodeSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeSpecIoK8sKubernetesPkgApiV1 = nodeSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeStatus instead.
 */
function nodeStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeStatusIoK8sKubernetesPkgApiV1 = nodeStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSystemInfo instead.
 */
function nodeSystemInfoIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.nodeSystemInfoIoK8sKubernetesPkgApiV1 = nodeSystemInfoIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ObjectFieldSelector instead.
 */
function objectFieldSelectorIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.objectFieldSelectorIoK8sKubernetesPkgApiV1 = objectFieldSelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ObjectReference instead.
 */
function objectReferenceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.objectReferenceIoK8sKubernetesPkgApiV1 = objectReferenceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolume instead.
 */
function persistentVolumeIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeIoK8sKubernetesPkgApiV1 = persistentVolumeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaim instead.
 */
function persistentVolumeClaimIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeClaimIoK8sKubernetesPkgApiV1 = persistentVolumeClaimIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimList instead.
 */
function persistentVolumeClaimListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeClaimListIoK8sKubernetesPkgApiV1 = persistentVolumeClaimListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimSpec instead.
 */
function persistentVolumeClaimSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeClaimSpecIoK8sKubernetesPkgApiV1 = persistentVolumeClaimSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimStatus instead.
 */
function persistentVolumeClaimStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeClaimStatusIoK8sKubernetesPkgApiV1 = persistentVolumeClaimStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource instead.
 */
function persistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1 = persistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeList instead.
 */
function persistentVolumeListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeListIoK8sKubernetesPkgApiV1 = persistentVolumeListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeSpec instead.
 */
function persistentVolumeSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeSpecIoK8sKubernetesPkgApiV1 = persistentVolumeSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeStatus instead.
 */
function persistentVolumeStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.persistentVolumeStatusIoK8sKubernetesPkgApiV1 = persistentVolumeStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource instead.
 */
function photonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.photonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1 = photonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Pod instead.
 */
function podIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podIoK8sKubernetesPkgApiV1 = podIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAffinity instead.
 */
function podAffinityIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podAffinityIoK8sKubernetesPkgApiV1 = podAffinityIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAffinityTerm instead.
 */
function podAffinityTermIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podAffinityTermIoK8sKubernetesPkgApiV1 = podAffinityTermIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAntiAffinity instead.
 */
function podAntiAffinityIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podAntiAffinityIoK8sKubernetesPkgApiV1 = podAntiAffinityIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodCondition instead.
 */
function podConditionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podConditionIoK8sKubernetesPkgApiV1 = podConditionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodList instead.
 */
function podListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podListIoK8sKubernetesPkgApiV1 = podListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodSecurityContext instead.
 */
function podSecurityContextIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podSecurityContextIoK8sKubernetesPkgApiV1 = podSecurityContextIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodSpec instead.
 */
function podSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podSpecIoK8sKubernetesPkgApiV1 = podSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodStatus instead.
 */
function podStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podStatusIoK8sKubernetesPkgApiV1 = podStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplate instead.
 */
function podTemplateIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podTemplateIoK8sKubernetesPkgApiV1 = podTemplateIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplateList instead.
 */
function podTemplateListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podTemplateListIoK8sKubernetesPkgApiV1 = podTemplateListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplateSpec instead.
 */
function podTemplateSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.podTemplateSpecIoK8sKubernetesPkgApiV1 = podTemplateSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PortworxVolumeSource instead.
 */
function portworxVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.portworxVolumeSourceIoK8sKubernetesPkgApiV1 = portworxVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PreferredSchedulingTerm instead.
 */
function preferredSchedulingTermIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.preferredSchedulingTermIoK8sKubernetesPkgApiV1 = preferredSchedulingTermIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Probe instead.
 */
function probeIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.probeIoK8sKubernetesPkgApiV1 = probeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ProjectedVolumeSource instead.
 */
function projectedVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.projectedVolumeSourceIoK8sKubernetesPkgApiV1 = projectedVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.QuobyteVolumeSource instead.
 */
function quobyteVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.quobyteVolumeSourceIoK8sKubernetesPkgApiV1 = quobyteVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.RBDVolumeSource instead.
 */
function rBDVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.rBDVolumeSourceIoK8sKubernetesPkgApiV1 = rBDVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationController instead.
 */
function replicationControllerIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.replicationControllerIoK8sKubernetesPkgApiV1 = replicationControllerIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerCondition instead.
 */
function replicationControllerConditionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.replicationControllerConditionIoK8sKubernetesPkgApiV1 = replicationControllerConditionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerList instead.
 */
function replicationControllerListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.replicationControllerListIoK8sKubernetesPkgApiV1 = replicationControllerListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerSpec instead.
 */
function replicationControllerSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.replicationControllerSpecIoK8sKubernetesPkgApiV1 = replicationControllerSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerStatus instead.
 */
function replicationControllerStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.replicationControllerStatusIoK8sKubernetesPkgApiV1 = replicationControllerStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceFieldSelector instead.
 */
function resourceFieldSelectorIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.resourceFieldSelectorIoK8sKubernetesPkgApiV1 = resourceFieldSelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuota instead.
 */
function resourceQuotaIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.resourceQuotaIoK8sKubernetesPkgApiV1 = resourceQuotaIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaList instead.
 */
function resourceQuotaListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.resourceQuotaListIoK8sKubernetesPkgApiV1 = resourceQuotaListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaSpec instead.
 */
function resourceQuotaSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.resourceQuotaSpecIoK8sKubernetesPkgApiV1 = resourceQuotaSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaStatus instead.
 */
function resourceQuotaStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.resourceQuotaStatusIoK8sKubernetesPkgApiV1 = resourceQuotaStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceRequirements instead.
 */
function resourceRequirementsIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.resourceRequirementsIoK8sKubernetesPkgApiV1 = resourceRequirementsIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SELinuxOptions instead.
 */
function sELinuxOptionsIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.sELinuxOptionsIoK8sKubernetesPkgApiV1 = sELinuxOptionsIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ScaleIOVolumeSource instead.
 */
function scaleIOVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.scaleIOVolumeSourceIoK8sKubernetesPkgApiV1 = scaleIOVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Secret instead.
 */
function secretIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.secretIoK8sKubernetesPkgApiV1 = secretIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretEnvSource instead.
 */
function secretEnvSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.secretEnvSourceIoK8sKubernetesPkgApiV1 = secretEnvSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretKeySelector instead.
 */
function secretKeySelectorIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.secretKeySelectorIoK8sKubernetesPkgApiV1 = secretKeySelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretList instead.
 */
function secretListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.secretListIoK8sKubernetesPkgApiV1 = secretListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretProjection instead.
 */
function secretProjectionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.secretProjectionIoK8sKubernetesPkgApiV1 = secretProjectionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretVolumeSource instead.
 */
function secretVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.secretVolumeSourceIoK8sKubernetesPkgApiV1 = secretVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecurityContext instead.
 */
function securityContextIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.securityContextIoK8sKubernetesPkgApiV1 = securityContextIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Service instead.
 */
function serviceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.serviceIoK8sKubernetesPkgApiV1 = serviceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceAccount instead.
 */
function serviceAccountIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.serviceAccountIoK8sKubernetesPkgApiV1 = serviceAccountIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceAccountList instead.
 */
function serviceAccountListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.serviceAccountListIoK8sKubernetesPkgApiV1 = serviceAccountListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceList instead.
 */
function serviceListIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.serviceListIoK8sKubernetesPkgApiV1 = serviceListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServicePort instead.
 */
function servicePortIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.servicePortIoK8sKubernetesPkgApiV1 = servicePortIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceSpec instead.
 */
function serviceSpecIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.serviceSpecIoK8sKubernetesPkgApiV1 = serviceSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceStatus instead.
 */
function serviceStatusIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.serviceStatusIoK8sKubernetesPkgApiV1 = serviceStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.StorageOSPersistentVolumeSource instead.
 */
function storageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.storageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1 = storageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.StorageOSVolumeSource instead.
 */
function storageOSVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.storageOSVolumeSourceIoK8sKubernetesPkgApiV1 = storageOSVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.TCPSocketAction instead.
 */
function tCPSocketActionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.tCPSocketActionIoK8sKubernetesPkgApiV1 = tCPSocketActionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Taint instead.
 */
function taintIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.taintIoK8sKubernetesPkgApiV1 = taintIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Toleration instead.
 */
function tolerationIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.tolerationIoK8sKubernetesPkgApiV1 = tolerationIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Volume instead.
 */
function volumeIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.volumeIoK8sKubernetesPkgApiV1 = volumeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.VolumeMount instead.
 */
function volumeMountIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.volumeMountIoK8sKubernetesPkgApiV1 = volumeMountIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.VolumeProjection instead.
 */
function volumeProjectionIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.volumeProjectionIoK8sKubernetesPkgApiV1 = volumeProjectionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource instead.
 */
function vsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.vsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1 = vsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.WeightedPodAffinityTerm instead.
 */
function weightedPodAffinityTermIoK8sKubernetesPkgApiV1(options) {
    return ({}).merge(options);
}
exports.weightedPodAffinityTermIoK8sKubernetesPkgApiV1 = weightedPodAffinityTermIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ControllerRevision instead.
 */
function controllerRevisionIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.controllerRevisionIoK8sKubernetesPkgApisAppsV1beta1 = controllerRevisionIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ControllerRevisionList instead.
 */
function controllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.controllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1 = controllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.Deployment instead.
 */
function deploymentIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentIoK8sKubernetesPkgApisAppsV1beta1 = deploymentIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentCondition instead.
 */
function deploymentConditionIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentConditionIoK8sKubernetesPkgApisAppsV1beta1 = deploymentConditionIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentList instead.
 */
function deploymentListIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentListIoK8sKubernetesPkgApisAppsV1beta1 = deploymentListIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentRollback instead.
 */
function deploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1 = deploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentSpec instead.
 */
function deploymentSpecIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentSpecIoK8sKubernetesPkgApisAppsV1beta1 = deploymentSpecIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentStatus instead.
 */
function deploymentStatusIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentStatusIoK8sKubernetesPkgApisAppsV1beta1 = deploymentStatusIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentStrategy instead.
 */
function deploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1 = deploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollbackConfig instead.
 */
function rollbackConfigIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollbackConfigIoK8sKubernetesPkgApisAppsV1beta1 = rollbackConfigIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollingUpdateDeployment instead.
 */
function rollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1 = rollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollingUpdateStatefulSetStrategy instead.
 */
function rollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1 = rollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.Scale instead.
 */
function scaleIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.scaleIoK8sKubernetesPkgApisAppsV1beta1 = scaleIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ScaleSpec instead.
 */
function scaleSpecIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.scaleSpecIoK8sKubernetesPkgApisAppsV1beta1 = scaleSpecIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ScaleStatus instead.
 */
function scaleStatusIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.scaleStatusIoK8sKubernetesPkgApisAppsV1beta1 = scaleStatusIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSet instead.
 */
function statefulSetIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.statefulSetIoK8sKubernetesPkgApisAppsV1beta1 = statefulSetIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetList instead.
 */
function statefulSetListIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.statefulSetListIoK8sKubernetesPkgApisAppsV1beta1 = statefulSetListIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetSpec instead.
 */
function statefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.statefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1 = statefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetStatus instead.
 */
function statefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.statefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1 = statefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetUpdateStrategy instead.
 */
function statefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1(options) {
    return ({}).merge(options);
}
exports.statefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1 = statefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReview instead.
 */
function tokenReviewIoK8sKubernetesPkgApisAuthenticationV1(options) {
    return ({}).merge(options);
}
exports.tokenReviewIoK8sKubernetesPkgApisAuthenticationV1 = tokenReviewIoK8sKubernetesPkgApisAuthenticationV1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReviewSpec instead.
 */
function tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1(options) {
    return ({}).merge(options);
}
exports.tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1 = tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReviewStatus instead.
 */
function tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1(options) {
    return ({}).merge(options);
}
exports.tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1 = tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1.UserInfo instead.
 */
function userInfoIoK8sKubernetesPkgApisAuthenticationV1(options) {
    return ({}).merge(options);
}
exports.userInfoIoK8sKubernetesPkgApisAuthenticationV1 = userInfoIoK8sKubernetesPkgApisAuthenticationV1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReview instead.
 */
function tokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1(options) {
    return ({}).merge(options);
}
exports.tokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1 = tokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReviewSpec instead.
 */
function tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1(options) {
    return ({}).merge(options);
}
exports.tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1 = tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReviewStatus instead.
 */
function tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1(options) {
    return ({}).merge(options);
}
exports.tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1 = tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.UserInfo instead.
 */
function userInfoIoK8sKubernetesPkgApisAuthenticationV1beta1(options) {
    return ({}).merge(options);
}
exports.userInfoIoK8sKubernetesPkgApisAuthenticationV1beta1 = userInfoIoK8sKubernetesPkgApisAuthenticationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.LocalSubjectAccessReview instead.
 */
function localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1 = localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.NonResourceAttributes instead.
 */
function nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1 = nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.ResourceAttributes instead.
 */
function resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1 = resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SelfSubjectAccessReview instead.
 */
function selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1 = selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec instead.
 */
function selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1 = selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReview instead.
 */
function subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1 = subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReviewSpec instead.
 */
function subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1 = subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReviewStatus instead.
 */
function subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1(options) {
    return ({}).merge(options);
}
exports.subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1 = subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview instead.
 */
function localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1 = localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.NonResourceAttributes instead.
 */
function nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1 = nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.ResourceAttributes instead.
 */
function resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1 = resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview instead.
 */
function selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1 = selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SelfSubjectAccessReviewSpec instead.
 */
function selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1 = selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReview instead.
 */
function subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1 = subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec instead.
 */
function subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1 = subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReviewStatus instead.
 */
function subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1(options) {
    return ({}).merge(options);
}
exports.subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1 = subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.CrossVersionObjectReference instead.
 */
function crossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.crossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1 = crossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler instead.
 */
function horizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.horizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1 = horizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList instead.
 */
function horizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.horizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1 = horizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec instead.
 */
function horizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.horizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1 = horizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus instead.
 */
function horizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.horizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1 = horizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.Scale instead.
 */
function scaleIoK8sKubernetesPkgApisAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.scaleIoK8sKubernetesPkgApisAutoscalingV1 = scaleIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.ScaleSpec instead.
 */
function scaleSpecIoK8sKubernetesPkgApisAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.scaleSpecIoK8sKubernetesPkgApisAutoscalingV1 = scaleSpecIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.ScaleStatus instead.
 */
function scaleStatusIoK8sKubernetesPkgApisAutoscalingV1(options) {
    return ({}).merge(options);
}
exports.scaleStatusIoK8sKubernetesPkgApisAutoscalingV1 = scaleStatusIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.Job instead.
 */
function jobIoK8sKubernetesPkgApisBatchV1(options) {
    return ({}).merge(options);
}
exports.jobIoK8sKubernetesPkgApisBatchV1 = jobIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobCondition instead.
 */
function jobConditionIoK8sKubernetesPkgApisBatchV1(options) {
    return ({}).merge(options);
}
exports.jobConditionIoK8sKubernetesPkgApisBatchV1 = jobConditionIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobList instead.
 */
function jobListIoK8sKubernetesPkgApisBatchV1(options) {
    return ({}).merge(options);
}
exports.jobListIoK8sKubernetesPkgApisBatchV1 = jobListIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobSpec instead.
 */
function jobSpecIoK8sKubernetesPkgApisBatchV1(options) {
    return ({}).merge(options);
}
exports.jobSpecIoK8sKubernetesPkgApisBatchV1 = jobSpecIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobStatus instead.
 */
function jobStatusIoK8sKubernetesPkgApisBatchV1(options) {
    return ({}).merge(options);
}
exports.jobStatusIoK8sKubernetesPkgApisBatchV1 = jobStatusIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequest instead.
 */
function certificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1(options) {
    return ({}).merge(options);
}
exports.certificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1 = certificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestCondition instead.
 */
function certificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1(options) {
    return ({}).merge(options);
}
exports.certificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1 = certificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestList instead.
 */
function certificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1(options) {
    return ({}).merge(options);
}
exports.certificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1 = certificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec instead.
 */
function certificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1(options) {
    return ({}).merge(options);
}
exports.certificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1 = certificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestStatus instead.
 */
function certificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1(options) {
    return ({}).merge(options);
}
exports.certificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1 = certificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSet instead.
 */
function daemonSetIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.daemonSetIoK8sKubernetesPkgApisExtensionsV1beta1 = daemonSetIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetList instead.
 */
function daemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.daemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1 = daemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetSpec instead.
 */
function daemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.daemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1 = daemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetStatus instead.
 */
function daemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.daemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1 = daemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetUpdateStrategy instead.
 */
function daemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.daemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1 = daemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Deployment instead.
 */
function deploymentIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentIoK8sKubernetesPkgApisExtensionsV1beta1 = deploymentIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentCondition instead.
 */
function deploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1 = deploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentList instead.
 */
function deploymentListIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentListIoK8sKubernetesPkgApisExtensionsV1beta1 = deploymentListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentRollback instead.
 */
function deploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1 = deploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentSpec instead.
 */
function deploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1 = deploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentStatus instead.
 */
function deploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1 = deploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentStrategy instead.
 */
function deploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.deploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1 = deploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.FSGroupStrategyOptions instead.
 */
function fSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.fSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1 = fSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HTTPIngressPath instead.
 */
function hTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.hTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1 = hTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HTTPIngressRuleValue instead.
 */
function hTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.hTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1 = hTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HostPortRange instead.
 */
function hostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.hostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1 = hostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IDRange instead.
 */
function iDRangeIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.iDRangeIoK8sKubernetesPkgApisExtensionsV1beta1 = iDRangeIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Ingress instead.
 */
function ingressIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressIoK8sKubernetesPkgApisExtensionsV1beta1 = ingressIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressBackend instead.
 */
function ingressBackendIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressBackendIoK8sKubernetesPkgApisExtensionsV1beta1 = ingressBackendIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressList instead.
 */
function ingressListIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressListIoK8sKubernetesPkgApisExtensionsV1beta1 = ingressListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressRule instead.
 */
function ingressRuleIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressRuleIoK8sKubernetesPkgApisExtensionsV1beta1 = ingressRuleIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressSpec instead.
 */
function ingressSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressSpecIoK8sKubernetesPkgApisExtensionsV1beta1 = ingressSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressStatus instead.
 */
function ingressStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressStatusIoK8sKubernetesPkgApisExtensionsV1beta1 = ingressStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressTLS instead.
 */
function ingressTLSIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.ingressTLSIoK8sKubernetesPkgApisExtensionsV1beta1 = ingressTLSIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicy instead.
 */
function networkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1 = networkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyIngressRule instead.
 */
function networkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1 = networkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyList instead.
 */
function networkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1 = networkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyPeer instead.
 */
function networkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1 = networkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyPort instead.
 */
function networkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1 = networkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicySpec instead.
 */
function networkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.networkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1 = networkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicy instead.
 */
function podSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.podSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1 = podSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicyList instead.
 */
function podSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.podSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1 = podSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec instead.
 */
function podSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.podSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1 = podSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSet instead.
 */
function replicaSetIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.replicaSetIoK8sKubernetesPkgApisExtensionsV1beta1 = replicaSetIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetCondition instead.
 */
function replicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.replicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1 = replicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetList instead.
 */
function replicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.replicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1 = replicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetSpec instead.
 */
function replicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.replicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1 = replicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetStatus instead.
 */
function replicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.replicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1 = replicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollbackConfig instead.
 */
function rollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1 = rollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollingUpdateDaemonSet instead.
 */
function rollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1 = rollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollingUpdateDeployment instead.
 */
function rollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.rollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1 = rollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RunAsUserStrategyOptions instead.
 */
function runAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.runAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1 = runAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.SELinuxStrategyOptions instead.
 */
function sELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.sELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1 = sELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Scale instead.
 */
function scaleIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.scaleIoK8sKubernetesPkgApisExtensionsV1beta1 = scaleIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ScaleSpec instead.
 */
function scaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.scaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1 = scaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ScaleStatus instead.
 */
function scaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.scaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1 = scaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.SupplementalGroupsStrategyOptions instead.
 */
function supplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options) {
    return ({}).merge(options);
}
exports.supplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1 = supplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicy instead.
 */
function networkPolicyIoK8sKubernetesPkgApisNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyIoK8sKubernetesPkgApisNetworkingV1 = networkPolicyIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyIngressRule instead.
 */
function networkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1 = networkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyList instead.
 */
function networkPolicyListIoK8sKubernetesPkgApisNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyListIoK8sKubernetesPkgApisNetworkingV1 = networkPolicyListIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyPeer instead.
 */
function networkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1 = networkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyPort instead.
 */
function networkPolicyPortIoK8sKubernetesPkgApisNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicyPortIoK8sKubernetesPkgApisNetworkingV1 = networkPolicyPortIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicySpec instead.
 */
function networkPolicySpecIoK8sKubernetesPkgApisNetworkingV1(options) {
    return ({}).merge(options);
}
exports.networkPolicySpecIoK8sKubernetesPkgApisNetworkingV1 = networkPolicySpecIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.Eviction instead.
 */
function evictionIoK8sKubernetesPkgApisPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.evictionIoK8sKubernetesPkgApisPolicyV1beta1 = evictionIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudget instead.
 */
function podDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.podDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1 = podDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetList instead.
 */
function podDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.podDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1 = podDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec instead.
 */
function podDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.podDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1 = podDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetStatus instead.
 */
function podDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1(options) {
    return ({}).merge(options);
}
exports.podDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1 = podDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRole instead.
 */
function clusterRoleIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.clusterRoleIoK8sKubernetesPkgApisRbacV1beta1 = clusterRoleIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleBinding instead.
 */
function clusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.clusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1 = clusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleBindingList instead.
 */
function clusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.clusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1 = clusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleList instead.
 */
function clusterRoleListIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.clusterRoleListIoK8sKubernetesPkgApisRbacV1beta1 = clusterRoleListIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.PolicyRule instead.
 */
function policyRuleIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.policyRuleIoK8sKubernetesPkgApisRbacV1beta1 = policyRuleIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.Role instead.
 */
function roleIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.roleIoK8sKubernetesPkgApisRbacV1beta1 = roleIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleBinding instead.
 */
function roleBindingIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.roleBindingIoK8sKubernetesPkgApisRbacV1beta1 = roleBindingIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleBindingList instead.
 */
function roleBindingListIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.roleBindingListIoK8sKubernetesPkgApisRbacV1beta1 = roleBindingListIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleList instead.
 */
function roleListIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.roleListIoK8sKubernetesPkgApisRbacV1beta1 = roleListIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleRef instead.
 */
function roleRefIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.roleRefIoK8sKubernetesPkgApisRbacV1beta1 = roleRefIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.Subject instead.
 */
function subjectIoK8sKubernetesPkgApisRbacV1beta1(options) {
    return ({}).merge(options);
}
exports.subjectIoK8sKubernetesPkgApisRbacV1beta1 = subjectIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.storage.v1.StorageClass instead.
 */
function storageClassIoK8sKubernetesPkgApisStorageV1(options) {
    return ({}).merge(options);
}
exports.storageClassIoK8sKubernetesPkgApisStorageV1 = storageClassIoK8sKubernetesPkgApisStorageV1;
/**
 * Deprecated. Please use io.k8s.api.storage.v1.StorageClassList instead.
 */
function storageClassListIoK8sKubernetesPkgApisStorageV1(options) {
    return ({}).merge(options);
}
exports.storageClassListIoK8sKubernetesPkgApisStorageV1 = storageClassListIoK8sKubernetesPkgApisStorageV1;
/**
 * Deprecated. Please use io.k8s.api.storage.v1beta1.StorageClass instead.
 */
function storageClassIoK8sKubernetesPkgApisStorageV1beta1(options) {
    return ({}).merge(options);
}
exports.storageClassIoK8sKubernetesPkgApisStorageV1beta1 = storageClassIoK8sKubernetesPkgApisStorageV1beta1;
/**
 * Deprecated. Please use io.k8s.api.storage.v1beta1.StorageClassList instead.
 */
function storageClassListIoK8sKubernetesPkgApisStorageV1beta1(options) {
    return ({}).merge(options);
}
exports.storageClassListIoK8sKubernetesPkgApisStorageV1beta1 = storageClassListIoK8sKubernetesPkgApisStorageV1beta1;
/**
 * resource usage metrics of a container.
 */
function containerMetricsIoK8sMetricsPkgApisMetricsV1beta1(options) {
    return ({
        name: (options && options.name) || null,
        usage: (options && options.usage) || null,
    }).merge(options);
}
exports.containerMetricsIoK8sMetricsPkgApisMetricsV1beta1 = containerMetricsIoK8sMetricsPkgApisMetricsV1beta1;
/**
 * resource usage metrics of a node.
 */
function nodeMetricsIoK8sMetricsPkgApisMetricsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.metrics.pkg.apis.metrics.v1beta1",
        kind: "NodeMetrics",
        timestamp: (options && options.timestamp) || timeIoK8sApimachineryPkgApisMetaV1(),
        usage: (options && options.usage) || null,
        window: (options && options.window) || durationIoK8sApimachineryPkgApisMetaV1(),
    }).merge(options);
}
exports.nodeMetricsIoK8sMetricsPkgApisMetricsV1beta1 = nodeMetricsIoK8sMetricsPkgApisMetricsV1beta1;
/**
 * NodeMetricsList is a list of NodeMetrics.
 */
function nodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.metrics.pkg.apis.metrics.v1beta1",
        kind: "NodeMetricsList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.nodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1 = nodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1;
/**
 * resource usage metrics of a pod.
 */
function podMetricsIoK8sMetricsPkgApisMetricsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.metrics.pkg.apis.metrics.v1beta1",
        kind: "PodMetrics",
        containers: (options && options.containers) || [],
        timestamp: (options && options.timestamp) || timeIoK8sApimachineryPkgApisMetaV1(),
        window: (options && options.window) || durationIoK8sApimachineryPkgApisMetaV1(),
    }).merge(options);
}
exports.podMetricsIoK8sMetricsPkgApisMetricsV1beta1 = podMetricsIoK8sMetricsPkgApisMetricsV1beta1;
/**
 * PodMetricsList is a list of PodMetrics.
 */
function podMetricsListIoK8sMetricsPkgApisMetricsV1beta1(options) {
    return ({
        apiVersion: "io.k8s.metrics.pkg.apis.metrics.v1beta1",
        kind: "PodMetricsList",
        items: (options && options.items) || [],
    }).merge(options);
}
exports.podMetricsListIoK8sMetricsPkgApisMetricsV1beta1 = podMetricsListIoK8sMetricsPkgApisMetricsV1beta1;
