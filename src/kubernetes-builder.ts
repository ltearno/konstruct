import * as k8s from './kubernetes-api'
import './core'


export type Optional<T> = {
    [P in keyof T]?: T[P] extends boolean ? boolean : T[P] extends string ? string : T[P] extends number ? number : T[P] extends (infer I)[] ? Optional<I>[] : Optional<T[P]>;
}

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export function mutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.MutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1>) : k8s.MutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1 {
  return <k8s.MutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1>({
    apiVersion: "io.k8s.api.admissionregistration.v1beta1",
    kind: "MutatingWebhookConfiguration",
  }).merge(options)
}

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export function mutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.MutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1>) : k8s.MutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1 {
  return <k8s.MutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1>({
    apiVersion: "io.k8s.api.admissionregistration.v1beta1",
    kind: "MutatingWebhookConfigurationList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
export function ruleWithOperationsIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.RuleWithOperationsIoK8sApiAdmissionregistrationV1beta1>) : k8s.RuleWithOperationsIoK8sApiAdmissionregistrationV1beta1 {
  return <k8s.RuleWithOperationsIoK8sApiAdmissionregistrationV1beta1>({
  }).merge(options)
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export function serviceReferenceIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.ServiceReferenceIoK8sApiAdmissionregistrationV1beta1>) : k8s.ServiceReferenceIoK8sApiAdmissionregistrationV1beta1 {
  return <k8s.ServiceReferenceIoK8sApiAdmissionregistrationV1beta1>({
    name: (options && options.name) || null,
    namespace: (options && options.namespace) || null,
  }).merge(options)
}

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
export function validatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.ValidatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1>) : k8s.ValidatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1 {
  return <k8s.ValidatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1>({
    apiVersion: "io.k8s.api.admissionregistration.v1beta1",
    kind: "ValidatingWebhookConfiguration",
  }).merge(options)
}

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export function validatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.ValidatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1>) : k8s.ValidatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1 {
  return <k8s.ValidatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1>({
    apiVersion: "io.k8s.api.admissionregistration.v1beta1",
    kind: "ValidatingWebhookConfigurationList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * Webhook describes an admission webhook and the resources and operations it applies to.
 */
export function webhookIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.WebhookIoK8sApiAdmissionregistrationV1beta1>) : k8s.WebhookIoK8sApiAdmissionregistrationV1beta1 {
  return <k8s.WebhookIoK8sApiAdmissionregistrationV1beta1>({
    clientConfig: (options && options.clientConfig) || webhookClientConfigIoK8sApiAdmissionregistrationV1beta1(),
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 */
export function webhookClientConfigIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.WebhookClientConfigIoK8sApiAdmissionregistrationV1beta1>) : k8s.WebhookClientConfigIoK8sApiAdmissionregistrationV1beta1 {
  return <k8s.WebhookClientConfigIoK8sApiAdmissionregistrationV1beta1>({
    caBundle: (options && options.caBundle) || null,
  }).merge(options)
}

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export function controllerRevision(options?: Optional<k8s.ControllerRevision>) : k8s.ControllerRevision {
  return <k8s.ControllerRevision>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "ControllerRevision",
    revision: (options && options.revision) || 0,
  }).merge(options)
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export function controllerRevisionList(options?: Optional<k8s.ControllerRevisionList>) : k8s.ControllerRevisionList {
  return <k8s.ControllerRevisionList>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "ControllerRevisionList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DaemonSet represents the configuration of a daemon set.
 */
export function daemonSet(options?: Optional<k8s.DaemonSet>) : k8s.DaemonSet {
  return <k8s.DaemonSet>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "DaemonSet",
  }).merge(options)
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export function daemonSetCondition(options?: Optional<k8s.DaemonSetCondition>) : k8s.DaemonSetCondition {
  return <k8s.DaemonSetCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export function daemonSetList(options?: Optional<k8s.DaemonSetList>) : k8s.DaemonSetList {
  return <k8s.DaemonSetList>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "DaemonSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export function daemonSetSpec(options?: Optional<k8s.DaemonSetSpec>) : k8s.DaemonSetSpec {
  return <k8s.DaemonSetSpec>({
    selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export function daemonSetStatus(options?: Optional<k8s.DaemonSetStatus>) : k8s.DaemonSetStatus {
  return <k8s.DaemonSetStatus>({
    currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
    desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
    numberMisscheduled: (options && options.numberMisscheduled) || 0,
    numberReady: (options && options.numberReady) || 0,
  }).merge(options)
}

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export function daemonSetUpdateStrategy(options?: Optional<k8s.DaemonSetUpdateStrategy>) : k8s.DaemonSetUpdateStrategy {
  return <k8s.DaemonSetUpdateStrategy>({
  }).merge(options)
}

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export function deployment(options?: Optional<k8s.Deployment>) : k8s.Deployment {
  return <k8s.Deployment>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "Deployment",
  }).merge(options)
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export function deploymentCondition(options?: Optional<k8s.DeploymentCondition>) : k8s.DeploymentCondition {
  return <k8s.DeploymentCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DeploymentList is a list of Deployments.
 */
export function deploymentList(options?: Optional<k8s.DeploymentList>) : k8s.DeploymentList {
  return <k8s.DeploymentList>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "DeploymentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export function deploymentSpec(options?: Optional<k8s.DeploymentSpec>) : k8s.DeploymentSpec {
  return <k8s.DeploymentSpec>({
    selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export function deploymentStatus(options?: Optional<k8s.DeploymentStatus>) : k8s.DeploymentStatus {
  return <k8s.DeploymentStatus>({
  }).merge(options)
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export function deploymentStrategy(options?: Optional<k8s.DeploymentStrategy>) : k8s.DeploymentStrategy {
  return <k8s.DeploymentStrategy>({
  }).merge(options)
}

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export function replicaSet(options?: Optional<k8s.ReplicaSet>) : k8s.ReplicaSet {
  return <k8s.ReplicaSet>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "ReplicaSet",
  }).merge(options)
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export function replicaSetCondition(options?: Optional<k8s.ReplicaSetCondition>) : k8s.ReplicaSetCondition {
  return <k8s.ReplicaSetCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export function replicaSetList(options?: Optional<k8s.ReplicaSetList>) : k8s.ReplicaSetList {
  return <k8s.ReplicaSetList>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "ReplicaSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export function replicaSetSpec(options?: Optional<k8s.ReplicaSetSpec>) : k8s.ReplicaSetSpec {
  return <k8s.ReplicaSetSpec>({
    selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
  }).merge(options)
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export function replicaSetStatus(options?: Optional<k8s.ReplicaSetStatus>) : k8s.ReplicaSetStatus {
  return <k8s.ReplicaSetStatus>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export function rollingUpdateDaemonSet(options?: Optional<k8s.RollingUpdateDaemonSet>) : k8s.RollingUpdateDaemonSet {
  return <k8s.RollingUpdateDaemonSet>({
  }).merge(options)
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export function rollingUpdateDeployment(options?: Optional<k8s.RollingUpdateDeployment>) : k8s.RollingUpdateDeployment {
  return <k8s.RollingUpdateDeployment>({
  }).merge(options)
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export function rollingUpdateStatefulSetStrategy(options?: Optional<k8s.RollingUpdateStatefulSetStrategy>) : k8s.RollingUpdateStatefulSetStrategy {
  return <k8s.RollingUpdateStatefulSetStrategy>({
  }).merge(options)
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export function statefulSet(options?: Optional<k8s.StatefulSet>) : k8s.StatefulSet {
  return <k8s.StatefulSet>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "StatefulSet",
  }).merge(options)
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export function statefulSetCondition(options?: Optional<k8s.StatefulSetCondition>) : k8s.StatefulSetCondition {
  return <k8s.StatefulSetCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export function statefulSetList(options?: Optional<k8s.StatefulSetList>) : k8s.StatefulSetList {
  return <k8s.StatefulSetList>({
    apiVersion: "io.k8s.api.apps.v1",
    kind: "StatefulSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export function statefulSetSpec(options?: Optional<k8s.StatefulSetSpec>) : k8s.StatefulSetSpec {
  return <k8s.StatefulSetSpec>({
    selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    serviceName: (options && options.serviceName) || null,
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export function statefulSetStatus(options?: Optional<k8s.StatefulSetStatus>) : k8s.StatefulSetStatus {
  return <k8s.StatefulSetStatus>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export function statefulSetUpdateStrategy(options?: Optional<k8s.StatefulSetUpdateStrategy>) : k8s.StatefulSetUpdateStrategy {
  return <k8s.StatefulSetUpdateStrategy>({
  }).merge(options)
}

/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export function controllerRevisionIoK8sApiAppsV1beta1(options?: Optional<k8s.ControllerRevisionIoK8sApiAppsV1beta1>) : k8s.ControllerRevisionIoK8sApiAppsV1beta1 {
  return <k8s.ControllerRevisionIoK8sApiAppsV1beta1>({
    apiVersion: "io.k8s.api.apps.v1beta1",
    kind: "ControllerRevision",
    revision: (options && options.revision) || 0,
  }).merge(options)
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export function controllerRevisionListIoK8sApiAppsV1beta1(options?: Optional<k8s.ControllerRevisionListIoK8sApiAppsV1beta1>) : k8s.ControllerRevisionListIoK8sApiAppsV1beta1 {
  return <k8s.ControllerRevisionListIoK8sApiAppsV1beta1>({
    apiVersion: "io.k8s.api.apps.v1beta1",
    kind: "ControllerRevisionList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export function deploymentIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentIoK8sApiAppsV1beta1>) : k8s.DeploymentIoK8sApiAppsV1beta1 {
  return <k8s.DeploymentIoK8sApiAppsV1beta1>({
    apiVersion: "io.k8s.api.apps.v1beta1",
    kind: "Deployment",
  }).merge(options)
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export function deploymentConditionIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentConditionIoK8sApiAppsV1beta1>) : k8s.DeploymentConditionIoK8sApiAppsV1beta1 {
  return <k8s.DeploymentConditionIoK8sApiAppsV1beta1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DeploymentList is a list of Deployments.
 */
export function deploymentListIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentListIoK8sApiAppsV1beta1>) : k8s.DeploymentListIoK8sApiAppsV1beta1 {
  return <k8s.DeploymentListIoK8sApiAppsV1beta1>({
    apiVersion: "io.k8s.api.apps.v1beta1",
    kind: "DeploymentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export function deploymentRollbackIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentRollbackIoK8sApiAppsV1beta1>) : k8s.DeploymentRollbackIoK8sApiAppsV1beta1 {
  return <k8s.DeploymentRollbackIoK8sApiAppsV1beta1>({
    apiVersion: "io.k8s.api.apps.v1beta1",
    kind: "DeploymentRollback",
    name: (options && options.name) || null,
    rollbackTo: (options && options.rollbackTo) || rollbackConfigIoK8sApiAppsV1beta1(),
  }).merge(options)
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export function deploymentSpecIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentSpecIoK8sApiAppsV1beta1>) : k8s.DeploymentSpecIoK8sApiAppsV1beta1 {
  return <k8s.DeploymentSpecIoK8sApiAppsV1beta1>({
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export function deploymentStatusIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentStatusIoK8sApiAppsV1beta1>) : k8s.DeploymentStatusIoK8sApiAppsV1beta1 {
  return <k8s.DeploymentStatusIoK8sApiAppsV1beta1>({
  }).merge(options)
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export function deploymentStrategyIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentStrategyIoK8sApiAppsV1beta1>) : k8s.DeploymentStrategyIoK8sApiAppsV1beta1 {
  return <k8s.DeploymentStrategyIoK8sApiAppsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED.
 */
export function rollbackConfigIoK8sApiAppsV1beta1(options?: Optional<k8s.RollbackConfigIoK8sApiAppsV1beta1>) : k8s.RollbackConfigIoK8sApiAppsV1beta1 {
  return <k8s.RollbackConfigIoK8sApiAppsV1beta1>({
  }).merge(options)
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export function rollingUpdateDeploymentIoK8sApiAppsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta1>) : k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta1 {
  return <k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta1>({
  }).merge(options)
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export function rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1(options?: Optional<k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1>) : k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1 {
  return <k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1>({
  }).merge(options)
}

/**
 * Scale represents a scaling request for a resource.
 */
export function scaleIoK8sApiAppsV1beta1(options?: Optional<k8s.ScaleIoK8sApiAppsV1beta1>) : k8s.ScaleIoK8sApiAppsV1beta1 {
  return <k8s.ScaleIoK8sApiAppsV1beta1>({
    apiVersion: "io.k8s.api.apps.v1beta1",
    kind: "Scale",
  }).merge(options)
}

/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export function scaleSpecIoK8sApiAppsV1beta1(options?: Optional<k8s.ScaleSpecIoK8sApiAppsV1beta1>) : k8s.ScaleSpecIoK8sApiAppsV1beta1 {
  return <k8s.ScaleSpecIoK8sApiAppsV1beta1>({
  }).merge(options)
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export function scaleStatusIoK8sApiAppsV1beta1(options?: Optional<k8s.ScaleStatusIoK8sApiAppsV1beta1>) : k8s.ScaleStatusIoK8sApiAppsV1beta1 {
  return <k8s.ScaleStatusIoK8sApiAppsV1beta1>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export function statefulSetIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetIoK8sApiAppsV1beta1>) : k8s.StatefulSetIoK8sApiAppsV1beta1 {
  return <k8s.StatefulSetIoK8sApiAppsV1beta1>({
    apiVersion: "io.k8s.api.apps.v1beta1",
    kind: "StatefulSet",
  }).merge(options)
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export function statefulSetConditionIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetConditionIoK8sApiAppsV1beta1>) : k8s.StatefulSetConditionIoK8sApiAppsV1beta1 {
  return <k8s.StatefulSetConditionIoK8sApiAppsV1beta1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export function statefulSetListIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetListIoK8sApiAppsV1beta1>) : k8s.StatefulSetListIoK8sApiAppsV1beta1 {
  return <k8s.StatefulSetListIoK8sApiAppsV1beta1>({
    apiVersion: "io.k8s.api.apps.v1beta1",
    kind: "StatefulSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export function statefulSetSpecIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetSpecIoK8sApiAppsV1beta1>) : k8s.StatefulSetSpecIoK8sApiAppsV1beta1 {
  return <k8s.StatefulSetSpecIoK8sApiAppsV1beta1>({
    serviceName: (options && options.serviceName) || null,
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export function statefulSetStatusIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetStatusIoK8sApiAppsV1beta1>) : k8s.StatefulSetStatusIoK8sApiAppsV1beta1 {
  return <k8s.StatefulSetStatusIoK8sApiAppsV1beta1>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export function statefulSetUpdateStrategyIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta1>) : k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta1 {
  return <k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export function controllerRevisionIoK8sApiAppsV1beta2(options?: Optional<k8s.ControllerRevisionIoK8sApiAppsV1beta2>) : k8s.ControllerRevisionIoK8sApiAppsV1beta2 {
  return <k8s.ControllerRevisionIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "ControllerRevision",
    revision: (options && options.revision) || 0,
  }).merge(options)
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export function controllerRevisionListIoK8sApiAppsV1beta2(options?: Optional<k8s.ControllerRevisionListIoK8sApiAppsV1beta2>) : k8s.ControllerRevisionListIoK8sApiAppsV1beta2 {
  return <k8s.ControllerRevisionListIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "ControllerRevisionList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export function daemonSetIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetIoK8sApiAppsV1beta2>) : k8s.DaemonSetIoK8sApiAppsV1beta2 {
  return <k8s.DaemonSetIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "DaemonSet",
  }).merge(options)
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export function daemonSetConditionIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetConditionIoK8sApiAppsV1beta2>) : k8s.DaemonSetConditionIoK8sApiAppsV1beta2 {
  return <k8s.DaemonSetConditionIoK8sApiAppsV1beta2>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export function daemonSetListIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetListIoK8sApiAppsV1beta2>) : k8s.DaemonSetListIoK8sApiAppsV1beta2 {
  return <k8s.DaemonSetListIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "DaemonSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export function daemonSetSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetSpecIoK8sApiAppsV1beta2>) : k8s.DaemonSetSpecIoK8sApiAppsV1beta2 {
  return <k8s.DaemonSetSpecIoK8sApiAppsV1beta2>({
    selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export function daemonSetStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetStatusIoK8sApiAppsV1beta2>) : k8s.DaemonSetStatusIoK8sApiAppsV1beta2 {
  return <k8s.DaemonSetStatusIoK8sApiAppsV1beta2>({
    currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
    desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
    numberMisscheduled: (options && options.numberMisscheduled) || 0,
    numberReady: (options && options.numberReady) || 0,
  }).merge(options)
}

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export function daemonSetUpdateStrategyIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetUpdateStrategyIoK8sApiAppsV1beta2>) : k8s.DaemonSetUpdateStrategyIoK8sApiAppsV1beta2 {
  return <k8s.DaemonSetUpdateStrategyIoK8sApiAppsV1beta2>({
  }).merge(options)
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export function deploymentIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentIoK8sApiAppsV1beta2>) : k8s.DeploymentIoK8sApiAppsV1beta2 {
  return <k8s.DeploymentIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "Deployment",
  }).merge(options)
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export function deploymentConditionIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentConditionIoK8sApiAppsV1beta2>) : k8s.DeploymentConditionIoK8sApiAppsV1beta2 {
  return <k8s.DeploymentConditionIoK8sApiAppsV1beta2>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DeploymentList is a list of Deployments.
 */
export function deploymentListIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentListIoK8sApiAppsV1beta2>) : k8s.DeploymentListIoK8sApiAppsV1beta2 {
  return <k8s.DeploymentListIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "DeploymentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export function deploymentSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentSpecIoK8sApiAppsV1beta2>) : k8s.DeploymentSpecIoK8sApiAppsV1beta2 {
  return <k8s.DeploymentSpecIoK8sApiAppsV1beta2>({
    selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export function deploymentStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentStatusIoK8sApiAppsV1beta2>) : k8s.DeploymentStatusIoK8sApiAppsV1beta2 {
  return <k8s.DeploymentStatusIoK8sApiAppsV1beta2>({
  }).merge(options)
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export function deploymentStrategyIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentStrategyIoK8sApiAppsV1beta2>) : k8s.DeploymentStrategyIoK8sApiAppsV1beta2 {
  return <k8s.DeploymentStrategyIoK8sApiAppsV1beta2>({
  }).merge(options)
}

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export function replicaSetIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetIoK8sApiAppsV1beta2>) : k8s.ReplicaSetIoK8sApiAppsV1beta2 {
  return <k8s.ReplicaSetIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "ReplicaSet",
  }).merge(options)
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export function replicaSetConditionIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetConditionIoK8sApiAppsV1beta2>) : k8s.ReplicaSetConditionIoK8sApiAppsV1beta2 {
  return <k8s.ReplicaSetConditionIoK8sApiAppsV1beta2>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export function replicaSetListIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetListIoK8sApiAppsV1beta2>) : k8s.ReplicaSetListIoK8sApiAppsV1beta2 {
  return <k8s.ReplicaSetListIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "ReplicaSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export function replicaSetSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetSpecIoK8sApiAppsV1beta2>) : k8s.ReplicaSetSpecIoK8sApiAppsV1beta2 {
  return <k8s.ReplicaSetSpecIoK8sApiAppsV1beta2>({
    selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
  }).merge(options)
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export function replicaSetStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetStatusIoK8sApiAppsV1beta2>) : k8s.ReplicaSetStatusIoK8sApiAppsV1beta2 {
  return <k8s.ReplicaSetStatusIoK8sApiAppsV1beta2>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export function rollingUpdateDaemonSetIoK8sApiAppsV1beta2(options?: Optional<k8s.RollingUpdateDaemonSetIoK8sApiAppsV1beta2>) : k8s.RollingUpdateDaemonSetIoK8sApiAppsV1beta2 {
  return <k8s.RollingUpdateDaemonSetIoK8sApiAppsV1beta2>({
  }).merge(options)
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export function rollingUpdateDeploymentIoK8sApiAppsV1beta2(options?: Optional<k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta2>) : k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta2 {
  return <k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta2>({
  }).merge(options)
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export function rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2(options?: Optional<k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2>) : k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2 {
  return <k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2>({
  }).merge(options)
}

/**
 * Scale represents a scaling request for a resource.
 */
export function scaleIoK8sApiAppsV1beta2(options?: Optional<k8s.ScaleIoK8sApiAppsV1beta2>) : k8s.ScaleIoK8sApiAppsV1beta2 {
  return <k8s.ScaleIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "Scale",
  }).merge(options)
}

/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export function scaleSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.ScaleSpecIoK8sApiAppsV1beta2>) : k8s.ScaleSpecIoK8sApiAppsV1beta2 {
  return <k8s.ScaleSpecIoK8sApiAppsV1beta2>({
  }).merge(options)
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export function scaleStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.ScaleStatusIoK8sApiAppsV1beta2>) : k8s.ScaleStatusIoK8sApiAppsV1beta2 {
  return <k8s.ScaleStatusIoK8sApiAppsV1beta2>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export function statefulSetIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetIoK8sApiAppsV1beta2>) : k8s.StatefulSetIoK8sApiAppsV1beta2 {
  return <k8s.StatefulSetIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "StatefulSet",
  }).merge(options)
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export function statefulSetConditionIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetConditionIoK8sApiAppsV1beta2>) : k8s.StatefulSetConditionIoK8sApiAppsV1beta2 {
  return <k8s.StatefulSetConditionIoK8sApiAppsV1beta2>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export function statefulSetListIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetListIoK8sApiAppsV1beta2>) : k8s.StatefulSetListIoK8sApiAppsV1beta2 {
  return <k8s.StatefulSetListIoK8sApiAppsV1beta2>({
    apiVersion: "io.k8s.api.apps.v1beta2",
    kind: "StatefulSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export function statefulSetSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetSpecIoK8sApiAppsV1beta2>) : k8s.StatefulSetSpecIoK8sApiAppsV1beta2 {
  return <k8s.StatefulSetSpecIoK8sApiAppsV1beta2>({
    selector: (options && options.selector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
    serviceName: (options && options.serviceName) || null,
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export function statefulSetStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetStatusIoK8sApiAppsV1beta2>) : k8s.StatefulSetStatusIoK8sApiAppsV1beta2 {
  return <k8s.StatefulSetStatusIoK8sApiAppsV1beta2>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export function statefulSetUpdateStrategyIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta2>) : k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta2 {
  return <k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta2>({
  }).merge(options)
}

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export function boundObjectReferenceIoK8sApiAuthenticationV1(options?: Optional<k8s.BoundObjectReferenceIoK8sApiAuthenticationV1>) : k8s.BoundObjectReferenceIoK8sApiAuthenticationV1 {
  return <k8s.BoundObjectReferenceIoK8sApiAuthenticationV1>({
    apiVersion: "io.k8s.api.authentication.v1",
    kind: "BoundObjectReference",
  }).merge(options)
}

/**
 * TokenRequest requests a token for a given service account.
 */
export function tokenRequestIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenRequestIoK8sApiAuthenticationV1>) : k8s.TokenRequestIoK8sApiAuthenticationV1 {
  return <k8s.TokenRequestIoK8sApiAuthenticationV1>({
    apiVersion: "io.k8s.api.authentication.v1",
    kind: "TokenRequest",
    spec: (options && options.spec) || tokenRequestSpecIoK8sApiAuthenticationV1(),
  }).merge(options)
}

/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
export function tokenRequestSpecIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenRequestSpecIoK8sApiAuthenticationV1>) : k8s.TokenRequestSpecIoK8sApiAuthenticationV1 {
  return <k8s.TokenRequestSpecIoK8sApiAuthenticationV1>({
    audiences: (options && options.audiences) || [],
  }).merge(options)
}

/**
 * TokenRequestStatus is the result of a token request.
 */
export function tokenRequestStatusIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenRequestStatusIoK8sApiAuthenticationV1>) : k8s.TokenRequestStatusIoK8sApiAuthenticationV1 {
  return <k8s.TokenRequestStatusIoK8sApiAuthenticationV1>({
    expirationTimestamp: (options && options.expirationTimestamp) || timeIoK8sApimachineryPkgApisMetaV1(),
    token: (options && options.token) || null,
  }).merge(options)
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export function tokenReviewIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenReviewIoK8sApiAuthenticationV1>) : k8s.TokenReviewIoK8sApiAuthenticationV1 {
  return <k8s.TokenReviewIoK8sApiAuthenticationV1>({
    apiVersion: "io.k8s.api.authentication.v1",
    kind: "TokenReview",
    spec: (options && options.spec) || tokenReviewSpecIoK8sApiAuthenticationV1(),
  }).merge(options)
}

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export function tokenReviewSpecIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenReviewSpecIoK8sApiAuthenticationV1>) : k8s.TokenReviewSpecIoK8sApiAuthenticationV1 {
  return <k8s.TokenReviewSpecIoK8sApiAuthenticationV1>({
  }).merge(options)
}

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export function tokenReviewStatusIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenReviewStatusIoK8sApiAuthenticationV1>) : k8s.TokenReviewStatusIoK8sApiAuthenticationV1 {
  return <k8s.TokenReviewStatusIoK8sApiAuthenticationV1>({
  }).merge(options)
}

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export function userInfoIoK8sApiAuthenticationV1(options?: Optional<k8s.UserInfoIoK8sApiAuthenticationV1>) : k8s.UserInfoIoK8sApiAuthenticationV1 {
  return <k8s.UserInfoIoK8sApiAuthenticationV1>({
  }).merge(options)
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export function tokenReviewIoK8sApiAuthenticationV1beta1(options?: Optional<k8s.TokenReviewIoK8sApiAuthenticationV1beta1>) : k8s.TokenReviewIoK8sApiAuthenticationV1beta1 {
  return <k8s.TokenReviewIoK8sApiAuthenticationV1beta1>({
    apiVersion: "io.k8s.api.authentication.v1beta1",
    kind: "TokenReview",
    spec: (options && options.spec) || tokenReviewSpecIoK8sApiAuthenticationV1beta1(),
  }).merge(options)
}

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export function tokenReviewSpecIoK8sApiAuthenticationV1beta1(options?: Optional<k8s.TokenReviewSpecIoK8sApiAuthenticationV1beta1>) : k8s.TokenReviewSpecIoK8sApiAuthenticationV1beta1 {
  return <k8s.TokenReviewSpecIoK8sApiAuthenticationV1beta1>({
  }).merge(options)
}

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export function tokenReviewStatusIoK8sApiAuthenticationV1beta1(options?: Optional<k8s.TokenReviewStatusIoK8sApiAuthenticationV1beta1>) : k8s.TokenReviewStatusIoK8sApiAuthenticationV1beta1 {
  return <k8s.TokenReviewStatusIoK8sApiAuthenticationV1beta1>({
  }).merge(options)
}

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export function userInfoIoK8sApiAuthenticationV1beta1(options?: Optional<k8s.UserInfoIoK8sApiAuthenticationV1beta1>) : k8s.UserInfoIoK8sApiAuthenticationV1beta1 {
  return <k8s.UserInfoIoK8sApiAuthenticationV1beta1>({
  }).merge(options)
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export function localSubjectAccessReviewIoK8sApiAuthorizationV1(options?: Optional<k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1>) : k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1 {
  return <k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1>({
    apiVersion: "io.k8s.api.authorization.v1",
    kind: "LocalSubjectAccessReview",
    spec: (options && options.spec) || subjectAccessReviewSpecIoK8sApiAuthorizationV1(),
  }).merge(options)
}

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export function nonResourceAttributesIoK8sApiAuthorizationV1(options?: Optional<k8s.NonResourceAttributesIoK8sApiAuthorizationV1>) : k8s.NonResourceAttributesIoK8sApiAuthorizationV1 {
  return <k8s.NonResourceAttributesIoK8sApiAuthorizationV1>({
  }).merge(options)
}

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export function nonResourceRuleIoK8sApiAuthorizationV1(options?: Optional<k8s.NonResourceRuleIoK8sApiAuthorizationV1>) : k8s.NonResourceRuleIoK8sApiAuthorizationV1 {
  return <k8s.NonResourceRuleIoK8sApiAuthorizationV1>({
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export function resourceAttributesIoK8sApiAuthorizationV1(options?: Optional<k8s.ResourceAttributesIoK8sApiAuthorizationV1>) : k8s.ResourceAttributesIoK8sApiAuthorizationV1 {
  return <k8s.ResourceAttributesIoK8sApiAuthorizationV1>({
  }).merge(options)
}

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export function resourceRuleIoK8sApiAuthorizationV1(options?: Optional<k8s.ResourceRuleIoK8sApiAuthorizationV1>) : k8s.ResourceRuleIoK8sApiAuthorizationV1 {
  return <k8s.ResourceRuleIoK8sApiAuthorizationV1>({
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export function selfSubjectAccessReviewIoK8sApiAuthorizationV1(options?: Optional<k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1>) : k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1 {
  return <k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1>({
    apiVersion: "io.k8s.api.authorization.v1",
    kind: "SelfSubjectAccessReview",
    spec: (options && options.spec) || selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1(),
  }).merge(options)
}

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export function selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1(options?: Optional<k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1>) : k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1 {
  return <k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1>({
  }).merge(options)
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export function selfSubjectRulesReviewIoK8sApiAuthorizationV1(options?: Optional<k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1>) : k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1 {
  return <k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1>({
    apiVersion: "io.k8s.api.authorization.v1",
    kind: "SelfSubjectRulesReview",
    spec: (options && options.spec) || selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1(),
  }).merge(options)
}

export function selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1(options?: Optional<k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1>) : k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1 {
  return <k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1>({
  }).merge(options)
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export function subjectAccessReviewIoK8sApiAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewIoK8sApiAuthorizationV1>) : k8s.SubjectAccessReviewIoK8sApiAuthorizationV1 {
  return <k8s.SubjectAccessReviewIoK8sApiAuthorizationV1>({
    apiVersion: "io.k8s.api.authorization.v1",
    kind: "SubjectAccessReview",
    spec: (options && options.spec) || subjectAccessReviewSpecIoK8sApiAuthorizationV1(),
  }).merge(options)
}

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export function subjectAccessReviewSpecIoK8sApiAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1>) : k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1 {
  return <k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1>({
  }).merge(options)
}

/**
 * SubjectAccessReviewStatus
 */
export function subjectAccessReviewStatusIoK8sApiAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1>) : k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1 {
  return <k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1>({
    allowed: (options && options.allowed) || false,
  }).merge(options)
}

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export function subjectRulesReviewStatusIoK8sApiAuthorizationV1(options?: Optional<k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1>) : k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1 {
  return <k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1>({
    incomplete: (options && options.incomplete) || false,
    nonResourceRules: (options && options.nonResourceRules) || [],
    resourceRules: (options && options.resourceRules) || [],
  }).merge(options)
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export function localSubjectAccessReviewIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1beta1>) : k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1beta1 {
  return <k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1beta1>({
    apiVersion: "io.k8s.api.authorization.v1beta1",
    kind: "LocalSubjectAccessReview",
    spec: (options && options.spec) || subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(),
  }).merge(options)
}

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export function nonResourceAttributesIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.NonResourceAttributesIoK8sApiAuthorizationV1beta1>) : k8s.NonResourceAttributesIoK8sApiAuthorizationV1beta1 {
  return <k8s.NonResourceAttributesIoK8sApiAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export function nonResourceRuleIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.NonResourceRuleIoK8sApiAuthorizationV1beta1>) : k8s.NonResourceRuleIoK8sApiAuthorizationV1beta1 {
  return <k8s.NonResourceRuleIoK8sApiAuthorizationV1beta1>({
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export function resourceAttributesIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.ResourceAttributesIoK8sApiAuthorizationV1beta1>) : k8s.ResourceAttributesIoK8sApiAuthorizationV1beta1 {
  return <k8s.ResourceAttributesIoK8sApiAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export function resourceRuleIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.ResourceRuleIoK8sApiAuthorizationV1beta1>) : k8s.ResourceRuleIoK8sApiAuthorizationV1beta1 {
  return <k8s.ResourceRuleIoK8sApiAuthorizationV1beta1>({
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export function selfSubjectAccessReviewIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1beta1>) : k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1beta1 {
  return <k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1beta1>({
    apiVersion: "io.k8s.api.authorization.v1beta1",
    kind: "SelfSubjectAccessReview",
    spec: (options && options.spec) || selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(),
  }).merge(options)
}

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export function selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1>) : k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1 {
  return <k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export function selfSubjectRulesReviewIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1beta1>) : k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1beta1 {
  return <k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1beta1>({
    apiVersion: "io.k8s.api.authorization.v1beta1",
    kind: "SelfSubjectRulesReview",
    spec: (options && options.spec) || selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1(),
  }).merge(options)
}

export function selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1>) : k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1 {
  return <k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export function subjectAccessReviewIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewIoK8sApiAuthorizationV1beta1>) : k8s.SubjectAccessReviewIoK8sApiAuthorizationV1beta1 {
  return <k8s.SubjectAccessReviewIoK8sApiAuthorizationV1beta1>({
    apiVersion: "io.k8s.api.authorization.v1beta1",
    kind: "SubjectAccessReview",
    spec: (options && options.spec) || subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(),
  }).merge(options)
}

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export function subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1>) : k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1 {
  return <k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * SubjectAccessReviewStatus
 */
export function subjectAccessReviewStatusIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1beta1>) : k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1beta1 {
  return <k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1beta1>({
    allowed: (options && options.allowed) || false,
  }).merge(options)
}

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export function subjectRulesReviewStatusIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1beta1>) : k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1beta1 {
  return <k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1beta1>({
    incomplete: (options && options.incomplete) || false,
    nonResourceRules: (options && options.nonResourceRules) || [],
    resourceRules: (options && options.resourceRules) || [],
  }).merge(options)
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export function crossVersionObjectReferenceIoK8sApiAutoscalingV1(options?: Optional<k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV1>) : k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV1 {
  return <k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV1>({
    apiVersion: "io.k8s.api.autoscaling.v1",
    kind: "CrossVersionObjectReference",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * configuration of a horizontal pod autoscaler.
 */
export function horizontalPodAutoscalerIoK8sApiAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV1>) : k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV1 {
  return <k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV1>({
    apiVersion: "io.k8s.api.autoscaling.v1",
    kind: "HorizontalPodAutoscaler",
  }).merge(options)
}

/**
 * list of horizontal pod autoscaler objects.
 */
export function horizontalPodAutoscalerListIoK8sApiAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV1>) : k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV1 {
  return <k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV1>({
    apiVersion: "io.k8s.api.autoscaling.v1",
    kind: "HorizontalPodAutoscalerList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * specification of a horizontal pod autoscaler.
 */
export function horizontalPodAutoscalerSpecIoK8sApiAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV1>) : k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV1 {
  return <k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV1>({
    maxReplicas: (options && options.maxReplicas) || 0,
    scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReferenceIoK8sApiAutoscalingV1(),
  }).merge(options)
}

/**
 * current status of a horizontal pod autoscaler
 */
export function horizontalPodAutoscalerStatusIoK8sApiAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV1>) : k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV1 {
  return <k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV1>({
    currentReplicas: (options && options.currentReplicas) || 0,
    desiredReplicas: (options && options.desiredReplicas) || 0,
  }).merge(options)
}

/**
 * Scale represents a scaling request for a resource.
 */
export function scaleIoK8sApiAutoscalingV1(options?: Optional<k8s.ScaleIoK8sApiAutoscalingV1>) : k8s.ScaleIoK8sApiAutoscalingV1 {
  return <k8s.ScaleIoK8sApiAutoscalingV1>({
    apiVersion: "io.k8s.api.autoscaling.v1",
    kind: "Scale",
  }).merge(options)
}

/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export function scaleSpecIoK8sApiAutoscalingV1(options?: Optional<k8s.ScaleSpecIoK8sApiAutoscalingV1>) : k8s.ScaleSpecIoK8sApiAutoscalingV1 {
  return <k8s.ScaleSpecIoK8sApiAutoscalingV1>({
  }).merge(options)
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export function scaleStatusIoK8sApiAutoscalingV1(options?: Optional<k8s.ScaleStatusIoK8sApiAutoscalingV1>) : k8s.ScaleStatusIoK8sApiAutoscalingV1 {
  return <k8s.ScaleStatusIoK8sApiAutoscalingV1>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export function crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV2beta1>) : k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV2beta1 {
  return <k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV2beta1>({
    apiVersion: "io.k8s.api.autoscaling.v2beta1",
    kind: "CrossVersionObjectReference",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export function externalMetricSourceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ExternalMetricSourceIoK8sApiAutoscalingV2beta1>) : k8s.ExternalMetricSourceIoK8sApiAutoscalingV2beta1 {
  return <k8s.ExternalMetricSourceIoK8sApiAutoscalingV2beta1>({
    metricName: (options && options.metricName) || null,
  }).merge(options)
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export function externalMetricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ExternalMetricStatusIoK8sApiAutoscalingV2beta1>) : k8s.ExternalMetricStatusIoK8sApiAutoscalingV2beta1 {
  return <k8s.ExternalMetricStatusIoK8sApiAutoscalingV2beta1>({
    currentValue: (options && options.currentValue) || quantityIoK8sApimachineryPkgApiResource(),
    metricName: (options && options.metricName) || null,
  }).merge(options)
}

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export function horizontalPodAutoscalerIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV2beta1>) : k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV2beta1 {
  return <k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV2beta1>({
    apiVersion: "io.k8s.api.autoscaling.v2beta1",
    kind: "HorizontalPodAutoscaler",
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export function horizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1>) : k8s.HorizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1 {
  return <k8s.HorizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export function horizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1>) : k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1 {
  return <k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1>({
    apiVersion: "io.k8s.api.autoscaling.v2beta1",
    kind: "HorizontalPodAutoscalerList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export function horizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1>) : k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1 {
  return <k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1>({
    maxReplicas: (options && options.maxReplicas) || 0,
    scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(),
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export function horizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1>) : k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1 {
  return <k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1>({
    conditions: (options && options.conditions) || [],
    currentReplicas: (options && options.currentReplicas) || 0,
    desiredReplicas: (options && options.desiredReplicas) || 0,
  }).merge(options)
}

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export function metricSpecIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.MetricSpecIoK8sApiAutoscalingV2beta1>) : k8s.MetricSpecIoK8sApiAutoscalingV2beta1 {
  return <k8s.MetricSpecIoK8sApiAutoscalingV2beta1>({
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export function metricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.MetricStatusIoK8sApiAutoscalingV2beta1>) : k8s.MetricStatusIoK8sApiAutoscalingV2beta1 {
  return <k8s.MetricStatusIoK8sApiAutoscalingV2beta1>({
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export function objectMetricSourceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ObjectMetricSourceIoK8sApiAutoscalingV2beta1>) : k8s.ObjectMetricSourceIoK8sApiAutoscalingV2beta1 {
  return <k8s.ObjectMetricSourceIoK8sApiAutoscalingV2beta1>({
    metricName: (options && options.metricName) || null,
    target: (options && options.target) || crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(),
    targetValue: (options && options.targetValue) || quantityIoK8sApimachineryPkgApiResource(),
  }).merge(options)
}

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export function objectMetricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ObjectMetricStatusIoK8sApiAutoscalingV2beta1>) : k8s.ObjectMetricStatusIoK8sApiAutoscalingV2beta1 {
  return <k8s.ObjectMetricStatusIoK8sApiAutoscalingV2beta1>({
    currentValue: (options && options.currentValue) || quantityIoK8sApimachineryPkgApiResource(),
    metricName: (options && options.metricName) || null,
    target: (options && options.target) || crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(),
  }).merge(options)
}

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export function podsMetricSourceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.PodsMetricSourceIoK8sApiAutoscalingV2beta1>) : k8s.PodsMetricSourceIoK8sApiAutoscalingV2beta1 {
  return <k8s.PodsMetricSourceIoK8sApiAutoscalingV2beta1>({
    metricName: (options && options.metricName) || null,
    targetAverageValue: (options && options.targetAverageValue) || quantityIoK8sApimachineryPkgApiResource(),
  }).merge(options)
}

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export function podsMetricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.PodsMetricStatusIoK8sApiAutoscalingV2beta1>) : k8s.PodsMetricStatusIoK8sApiAutoscalingV2beta1 {
  return <k8s.PodsMetricStatusIoK8sApiAutoscalingV2beta1>({
    currentAverageValue: (options && options.currentAverageValue) || quantityIoK8sApimachineryPkgApiResource(),
    metricName: (options && options.metricName) || null,
  }).merge(options)
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export function resourceMetricSourceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ResourceMetricSourceIoK8sApiAutoscalingV2beta1>) : k8s.ResourceMetricSourceIoK8sApiAutoscalingV2beta1 {
  return <k8s.ResourceMetricSourceIoK8sApiAutoscalingV2beta1>({
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export function resourceMetricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ResourceMetricStatusIoK8sApiAutoscalingV2beta1>) : k8s.ResourceMetricStatusIoK8sApiAutoscalingV2beta1 {
  return <k8s.ResourceMetricStatusIoK8sApiAutoscalingV2beta1>({
    currentAverageValue: (options && options.currentAverageValue) || quantityIoK8sApimachineryPkgApiResource(),
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Job represents the configuration of a single job.
 */
export function jobIoK8sApiBatchV1(options?: Optional<k8s.JobIoK8sApiBatchV1>) : k8s.JobIoK8sApiBatchV1 {
  return <k8s.JobIoK8sApiBatchV1>({
    apiVersion: "io.k8s.api.batch.v1",
    kind: "Job",
  }).merge(options)
}

/**
 * JobCondition describes current state of a job.
 */
export function jobConditionIoK8sApiBatchV1(options?: Optional<k8s.JobConditionIoK8sApiBatchV1>) : k8s.JobConditionIoK8sApiBatchV1 {
  return <k8s.JobConditionIoK8sApiBatchV1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * JobList is a collection of jobs.
 */
export function jobListIoK8sApiBatchV1(options?: Optional<k8s.JobListIoK8sApiBatchV1>) : k8s.JobListIoK8sApiBatchV1 {
  return <k8s.JobListIoK8sApiBatchV1>({
    apiVersion: "io.k8s.api.batch.v1",
    kind: "JobList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * JobSpec describes how the job execution will look like.
 */
export function jobSpecIoK8sApiBatchV1(options?: Optional<k8s.JobSpecIoK8sApiBatchV1>) : k8s.JobSpecIoK8sApiBatchV1 {
  return <k8s.JobSpecIoK8sApiBatchV1>({
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * JobStatus represents the current state of a Job.
 */
export function jobStatusIoK8sApiBatchV1(options?: Optional<k8s.JobStatusIoK8sApiBatchV1>) : k8s.JobStatusIoK8sApiBatchV1 {
  return <k8s.JobStatusIoK8sApiBatchV1>({
  }).merge(options)
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export function cronJobIoK8sApiBatchV1beta1(options?: Optional<k8s.CronJobIoK8sApiBatchV1beta1>) : k8s.CronJobIoK8sApiBatchV1beta1 {
  return <k8s.CronJobIoK8sApiBatchV1beta1>({
    apiVersion: "io.k8s.api.batch.v1beta1",
    kind: "CronJob",
  }).merge(options)
}

/**
 * CronJobList is a collection of cron jobs.
 */
export function cronJobListIoK8sApiBatchV1beta1(options?: Optional<k8s.CronJobListIoK8sApiBatchV1beta1>) : k8s.CronJobListIoK8sApiBatchV1beta1 {
  return <k8s.CronJobListIoK8sApiBatchV1beta1>({
    apiVersion: "io.k8s.api.batch.v1beta1",
    kind: "CronJobList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export function cronJobSpecIoK8sApiBatchV1beta1(options?: Optional<k8s.CronJobSpecIoK8sApiBatchV1beta1>) : k8s.CronJobSpecIoK8sApiBatchV1beta1 {
  return <k8s.CronJobSpecIoK8sApiBatchV1beta1>({
    jobTemplate: (options && options.jobTemplate) || jobTemplateSpecIoK8sApiBatchV1beta1(),
    schedule: (options && options.schedule) || null,
  }).merge(options)
}

/**
 * CronJobStatus represents the current state of a cron job.
 */
export function cronJobStatusIoK8sApiBatchV1beta1(options?: Optional<k8s.CronJobStatusIoK8sApiBatchV1beta1>) : k8s.CronJobStatusIoK8sApiBatchV1beta1 {
  return <k8s.CronJobStatusIoK8sApiBatchV1beta1>({
  }).merge(options)
}

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export function jobTemplateSpecIoK8sApiBatchV1beta1(options?: Optional<k8s.JobTemplateSpecIoK8sApiBatchV1beta1>) : k8s.JobTemplateSpecIoK8sApiBatchV1beta1 {
  return <k8s.JobTemplateSpecIoK8sApiBatchV1beta1>({
  }).merge(options)
}

/**
 * Describes a certificate signing request
 */
export function certificateSigningRequestIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestIoK8sApiCertificatesV1beta1>) : k8s.CertificateSigningRequestIoK8sApiCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestIoK8sApiCertificatesV1beta1>({
    apiVersion: "io.k8s.api.certificates.v1beta1",
    kind: "CertificateSigningRequest",
  }).merge(options)
}

export function certificateSigningRequestConditionIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestConditionIoK8sApiCertificatesV1beta1>) : k8s.CertificateSigningRequestConditionIoK8sApiCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestConditionIoK8sApiCertificatesV1beta1>({
    type: (options && options.type) || null,
  }).merge(options)
}

export function certificateSigningRequestListIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestListIoK8sApiCertificatesV1beta1>) : k8s.CertificateSigningRequestListIoK8sApiCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestListIoK8sApiCertificatesV1beta1>({
    apiVersion: "io.k8s.api.certificates.v1beta1",
    kind: "CertificateSigningRequestList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 */
export function certificateSigningRequestSpecIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestSpecIoK8sApiCertificatesV1beta1>) : k8s.CertificateSigningRequestSpecIoK8sApiCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestSpecIoK8sApiCertificatesV1beta1>({
    request: (options && options.request) || null,
  }).merge(options)
}

export function certificateSigningRequestStatusIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestStatusIoK8sApiCertificatesV1beta1>) : k8s.CertificateSigningRequestStatusIoK8sApiCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestStatusIoK8sApiCertificatesV1beta1>({
  }).merge(options)
}

/**
 * Represents a Persistent Disk resource in AWS.
 * 
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export function aWSElasticBlockStoreVolumeSource(options?: Optional<k8s.AWSElasticBlockStoreVolumeSource>) : k8s.AWSElasticBlockStoreVolumeSource {
  return <k8s.AWSElasticBlockStoreVolumeSource>({
    volumeID: (options && options.volumeID) || null,
  }).merge(options)
}

/**
 * Affinity is a group of affinity scheduling rules.
 */
export function affinity(options?: Optional<k8s.Affinity>) : k8s.Affinity {
  return <k8s.Affinity>({
  }).merge(options)
}

/**
 * AttachedVolume describes a volume attached to a node
 */
export function attachedVolume(options?: Optional<k8s.AttachedVolume>) : k8s.AttachedVolume {
  return <k8s.AttachedVolume>({
    devicePath: (options && options.devicePath) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
export function azureDiskVolumeSource(options?: Optional<k8s.AzureDiskVolumeSource>) : k8s.AzureDiskVolumeSource {
  return <k8s.AzureDiskVolumeSource>({
    kind: "AzureDiskVolumeSource",
    diskName: (options && options.diskName) || null,
    diskURI: (options && options.diskURI) || null,
  }).merge(options)
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export function azureFilePersistentVolumeSource(options?: Optional<k8s.AzureFilePersistentVolumeSource>) : k8s.AzureFilePersistentVolumeSource {
  return <k8s.AzureFilePersistentVolumeSource>({
    secretName: (options && options.secretName) || null,
    shareName: (options && options.shareName) || null,
  }).merge(options)
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export function azureFileVolumeSource(options?: Optional<k8s.AzureFileVolumeSource>) : k8s.AzureFileVolumeSource {
  return <k8s.AzureFileVolumeSource>({
    secretName: (options && options.secretName) || null,
    shareName: (options && options.shareName) || null,
  }).merge(options)
}

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 */
export function binding(options?: Optional<k8s.Binding>) : k8s.Binding {
  return <k8s.Binding>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "Binding",
    target: (options && options.target) || objectReference(),
  }).merge(options)
}

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
export function cSIPersistentVolumeSource(options?: Optional<k8s.CSIPersistentVolumeSource>) : k8s.CSIPersistentVolumeSource {
  return <k8s.CSIPersistentVolumeSource>({
    driver: (options && options.driver) || null,
    volumeHandle: (options && options.volumeHandle) || null,
  }).merge(options)
}

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export function capabilities(options?: Optional<k8s.Capabilities>) : k8s.Capabilities {
  return <k8s.Capabilities>({
  }).merge(options)
}

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export function cephFSPersistentVolumeSource(options?: Optional<k8s.CephFSPersistentVolumeSource>) : k8s.CephFSPersistentVolumeSource {
  return <k8s.CephFSPersistentVolumeSource>({
    monitors: (options && options.monitors) || [],
  }).merge(options)
}

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export function cephFSVolumeSource(options?: Optional<k8s.CephFSVolumeSource>) : k8s.CephFSVolumeSource {
  return <k8s.CephFSVolumeSource>({
    monitors: (options && options.monitors) || [],
  }).merge(options)
}

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export function cinderPersistentVolumeSource(options?: Optional<k8s.CinderPersistentVolumeSource>) : k8s.CinderPersistentVolumeSource {
  return <k8s.CinderPersistentVolumeSource>({
    volumeID: (options && options.volumeID) || null,
  }).merge(options)
}

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export function cinderVolumeSource(options?: Optional<k8s.CinderVolumeSource>) : k8s.CinderVolumeSource {
  return <k8s.CinderVolumeSource>({
    volumeID: (options && options.volumeID) || null,
  }).merge(options)
}

/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export function clientIPConfig(options?: Optional<k8s.ClientIPConfig>) : k8s.ClientIPConfig {
  return <k8s.ClientIPConfig>({
  }).merge(options)
}

/**
 * Information about the condition of a component.
 */
export function componentCondition(options?: Optional<k8s.ComponentCondition>) : k8s.ComponentCondition {
  return <k8s.ComponentCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 */
export function componentStatus(options?: Optional<k8s.ComponentStatus>) : k8s.ComponentStatus {
  return <k8s.ComponentStatus>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ComponentStatus",
  }).merge(options)
}

/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 */
export function componentStatusList(options?: Optional<k8s.ComponentStatusList>) : k8s.ComponentStatusList {
  return <k8s.ComponentStatusList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ComponentStatusList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ConfigMap holds configuration data for pods to consume.
 */
export function configMap(options?: Optional<k8s.ConfigMap>) : k8s.ConfigMap {
  return <k8s.ConfigMap>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ConfigMap",
  }).merge(options)
}

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 * 
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export function configMapEnvSource(options?: Optional<k8s.ConfigMapEnvSource>) : k8s.ConfigMapEnvSource {
  return <k8s.ConfigMapEnvSource>({
  }).merge(options)
}

/**
 * Selects a key from a ConfigMap.
 */
export function configMapKeySelector(options?: Optional<k8s.ConfigMapKeySelector>) : k8s.ConfigMapKeySelector {
  return <k8s.ConfigMapKeySelector>({
    key: (options && options.key) || null,
  }).merge(options)
}

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export function configMapList(options?: Optional<k8s.ConfigMapList>) : k8s.ConfigMapList {
  return <k8s.ConfigMapList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ConfigMapList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 */
export function configMapNodeConfigSource(options?: Optional<k8s.ConfigMapNodeConfigSource>) : k8s.ConfigMapNodeConfigSource {
  return <k8s.ConfigMapNodeConfigSource>({
    kubeletConfigKey: (options && options.kubeletConfigKey) || null,
    name: (options && options.name) || null,
    namespace: (options && options.namespace) || null,
  }).merge(options)
}

/**
 * Adapts a ConfigMap into a projected volume.
 * 
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export function configMapProjection(options?: Optional<k8s.ConfigMapProjection>) : k8s.ConfigMapProjection {
  return <k8s.ConfigMapProjection>({
  }).merge(options)
}

/**
 * Adapts a ConfigMap into a volume.
 * 
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export function configMapVolumeSource(options?: Optional<k8s.ConfigMapVolumeSource>) : k8s.ConfigMapVolumeSource {
  return <k8s.ConfigMapVolumeSource>({
  }).merge(options)
}

/**
 * A single application container that you want to run within a pod.
 */
export function container(options?: Optional<k8s.Container>) : k8s.Container {
  return <k8s.Container>({
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Describe a container image
 */
export function containerImage(options?: Optional<k8s.ContainerImage>) : k8s.ContainerImage {
  return <k8s.ContainerImage>({
    names: (options && options.names) || [],
  }).merge(options)
}

/**
 * ContainerPort represents a network port in a single container.
 */
export function containerPort(options?: Optional<k8s.ContainerPort>) : k8s.ContainerPort {
  return <k8s.ContainerPort>({
    containerPort: (options && options.containerPort) || 0,
  }).merge(options)
}

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export function containerState(options?: Optional<k8s.ContainerState>) : k8s.ContainerState {
  return <k8s.ContainerState>({
  }).merge(options)
}

/**
 * ContainerStateRunning is a running state of a container.
 */
export function containerStateRunning(options?: Optional<k8s.ContainerStateRunning>) : k8s.ContainerStateRunning {
  return <k8s.ContainerStateRunning>({
  }).merge(options)
}

/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export function containerStateTerminated(options?: Optional<k8s.ContainerStateTerminated>) : k8s.ContainerStateTerminated {
  return <k8s.ContainerStateTerminated>({
    exitCode: (options && options.exitCode) || 0,
  }).merge(options)
}

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export function containerStateWaiting(options?: Optional<k8s.ContainerStateWaiting>) : k8s.ContainerStateWaiting {
  return <k8s.ContainerStateWaiting>({
  }).merge(options)
}

/**
 * ContainerStatus contains details for the current status of this container.
 */
export function containerStatus(options?: Optional<k8s.ContainerStatus>) : k8s.ContainerStatus {
  return <k8s.ContainerStatus>({
    image: (options && options.image) || null,
    imageID: (options && options.imageID) || null,
    name: (options && options.name) || null,
    ready: (options && options.ready) || false,
    restartCount: (options && options.restartCount) || 0,
  }).merge(options)
}

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export function daemonEndpoint(options?: Optional<k8s.DaemonEndpoint>) : k8s.DaemonEndpoint {
  return <k8s.DaemonEndpoint>({
    Port: (options && options.Port) || 0,
  }).merge(options)
}

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export function downwardAPIProjection(options?: Optional<k8s.DownwardAPIProjection>) : k8s.DownwardAPIProjection {
  return <k8s.DownwardAPIProjection>({
  }).merge(options)
}

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
export function downwardAPIVolumeFile(options?: Optional<k8s.DownwardAPIVolumeFile>) : k8s.DownwardAPIVolumeFile {
  return <k8s.DownwardAPIVolumeFile>({
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
export function downwardAPIVolumeSource(options?: Optional<k8s.DownwardAPIVolumeSource>) : k8s.DownwardAPIVolumeSource {
  return <k8s.DownwardAPIVolumeSource>({
  }).merge(options)
}

/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 */
export function emptyDirVolumeSource(options?: Optional<k8s.EmptyDirVolumeSource>) : k8s.EmptyDirVolumeSource {
  return <k8s.EmptyDirVolumeSource>({
  }).merge(options)
}

/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export function endpointAddress(options?: Optional<k8s.EndpointAddress>) : k8s.EndpointAddress {
  return <k8s.EndpointAddress>({
    ip: (options && options.ip) || null,
  }).merge(options)
}

/**
 * EndpointPort is a tuple that describes a single port.
 */
export function endpointPort(options?: Optional<k8s.EndpointPort>) : k8s.EndpointPort {
  return <k8s.EndpointPort>({
    port: (options && options.port) || 0,
  }).merge(options)
}

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
export function endpointSubset(options?: Optional<k8s.EndpointSubset>) : k8s.EndpointSubset {
  return <k8s.EndpointSubset>({
  }).merge(options)
}

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
export function endpoints(options?: Optional<k8s.Endpoints>) : k8s.Endpoints {
  return <k8s.Endpoints>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "Endpoints",
  }).merge(options)
}

/**
 * EndpointsList is a list of endpoints.
 */
export function endpointsList(options?: Optional<k8s.EndpointsList>) : k8s.EndpointsList {
  return <k8s.EndpointsList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "EndpointsList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export function envFromSource(options?: Optional<k8s.EnvFromSource>) : k8s.EnvFromSource {
  return <k8s.EnvFromSource>({
  }).merge(options)
}

/**
 * EnvVar represents an environment variable present in a Container.
 */
export function envVar(options?: Optional<k8s.EnvVar>) : k8s.EnvVar {
  return <k8s.EnvVar>({
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export function envVarSource(options?: Optional<k8s.EnvVarSource>) : k8s.EnvVarSource {
  return <k8s.EnvVarSource>({
  }).merge(options)
}

/**
 * Event is a report of an event somewhere in the cluster.
 */
export function event(options?: Optional<k8s.Event>) : k8s.Event {
  return <k8s.Event>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "Event",
    involvedObject: (options && options.involvedObject) || objectReference(),
    metadata: (options && options.metadata) || objectMetaIoK8sApimachineryPkgApisMetaV1(),
  }).merge(options)
}

/**
 * EventList is a list of events.
 */
export function eventList(options?: Optional<k8s.EventList>) : k8s.EventList {
  return <k8s.EventList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "EventList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export function eventSeries(options?: Optional<k8s.EventSeries>) : k8s.EventSeries {
  return <k8s.EventSeries>({
  }).merge(options)
}

/**
 * EventSource contains information for an event.
 */
export function eventSource(options?: Optional<k8s.EventSource>) : k8s.EventSource {
  return <k8s.EventSource>({
  }).merge(options)
}

/**
 * ExecAction describes a "run in container" action.
 */
export function execAction(options?: Optional<k8s.ExecAction>) : k8s.ExecAction {
  return <k8s.ExecAction>({
  }).merge(options)
}

/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 */
export function fCVolumeSource(options?: Optional<k8s.FCVolumeSource>) : k8s.FCVolumeSource {
  return <k8s.FCVolumeSource>({
  }).merge(options)
}

/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
export function flexPersistentVolumeSource(options?: Optional<k8s.FlexPersistentVolumeSource>) : k8s.FlexPersistentVolumeSource {
  return <k8s.FlexPersistentVolumeSource>({
    driver: (options && options.driver) || null,
  }).merge(options)
}

/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
export function flexVolumeSource(options?: Optional<k8s.FlexVolumeSource>) : k8s.FlexVolumeSource {
  return <k8s.FlexVolumeSource>({
    driver: (options && options.driver) || null,
  }).merge(options)
}

/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
export function flockerVolumeSource(options?: Optional<k8s.FlockerVolumeSource>) : k8s.FlockerVolumeSource {
  return <k8s.FlockerVolumeSource>({
  }).merge(options)
}

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 * 
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export function gCEPersistentDiskVolumeSource(options?: Optional<k8s.GCEPersistentDiskVolumeSource>) : k8s.GCEPersistentDiskVolumeSource {
  return <k8s.GCEPersistentDiskVolumeSource>({
    pdName: (options && options.pdName) || null,
  }).merge(options)
}

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 * 
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export function gitRepoVolumeSource(options?: Optional<k8s.GitRepoVolumeSource>) : k8s.GitRepoVolumeSource {
  return <k8s.GitRepoVolumeSource>({
    repository: (options && options.repository) || null,
  }).merge(options)
}

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export function glusterfsVolumeSource(options?: Optional<k8s.GlusterfsVolumeSource>) : k8s.GlusterfsVolumeSource {
  return <k8s.GlusterfsVolumeSource>({
    endpoints: (options && options.endpoints) || null,
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export function hTTPGetAction(options?: Optional<k8s.HTTPGetAction>) : k8s.HTTPGetAction {
  return <k8s.HTTPGetAction>({
    port: (options && options.port) || intOrStringIoK8sApimachineryPkgUtilIntstr(),
  }).merge(options)
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export function hTTPHeader(options?: Optional<k8s.HTTPHeader>) : k8s.HTTPHeader {
  return <k8s.HTTPHeader>({
    name: (options && options.name) || null,
    value: (options && options.value) || null,
  }).merge(options)
}

/**
 * Handler defines a specific action that should be taken
 */
export function handler(options?: Optional<k8s.Handler>) : k8s.Handler {
  return <k8s.Handler>({
  }).merge(options)
}

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export function hostAlias(options?: Optional<k8s.HostAlias>) : k8s.HostAlias {
  return <k8s.HostAlias>({
  }).merge(options)
}

/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export function hostPathVolumeSource(options?: Optional<k8s.HostPathVolumeSource>) : k8s.HostPathVolumeSource {
  return <k8s.HostPathVolumeSource>({
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export function iSCSIPersistentVolumeSource(options?: Optional<k8s.ISCSIPersistentVolumeSource>) : k8s.ISCSIPersistentVolumeSource {
  return <k8s.ISCSIPersistentVolumeSource>({
    iqn: (options && options.iqn) || null,
    lun: (options && options.lun) || 0,
    targetPortal: (options && options.targetPortal) || null,
  }).merge(options)
}

/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export function iSCSIVolumeSource(options?: Optional<k8s.ISCSIVolumeSource>) : k8s.ISCSIVolumeSource {
  return <k8s.ISCSIVolumeSource>({
    iqn: (options && options.iqn) || null,
    lun: (options && options.lun) || 0,
    targetPortal: (options && options.targetPortal) || null,
  }).merge(options)
}

/**
 * Maps a string key to a path within a volume.
 */
export function keyToPath(options?: Optional<k8s.KeyToPath>) : k8s.KeyToPath {
  return <k8s.KeyToPath>({
    key: (options && options.key) || null,
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export function lifecycle(options?: Optional<k8s.Lifecycle>) : k8s.Lifecycle {
  return <k8s.Lifecycle>({
  }).merge(options)
}

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
export function limitRange(options?: Optional<k8s.LimitRange>) : k8s.LimitRange {
  return <k8s.LimitRange>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "LimitRange",
  }).merge(options)
}

/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export function limitRangeItem(options?: Optional<k8s.LimitRangeItem>) : k8s.LimitRangeItem {
  return <k8s.LimitRangeItem>({
  }).merge(options)
}

/**
 * LimitRangeList is a list of LimitRange items.
 */
export function limitRangeList(options?: Optional<k8s.LimitRangeList>) : k8s.LimitRangeList {
  return <k8s.LimitRangeList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "LimitRangeList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export function limitRangeSpec(options?: Optional<k8s.LimitRangeSpec>) : k8s.LimitRangeSpec {
  return <k8s.LimitRangeSpec>({
    limits: (options && options.limits) || [],
  }).merge(options)
}

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
export function loadBalancerIngress(options?: Optional<k8s.LoadBalancerIngress>) : k8s.LoadBalancerIngress {
  return <k8s.LoadBalancerIngress>({
  }).merge(options)
}

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export function loadBalancerStatus(options?: Optional<k8s.LoadBalancerStatus>) : k8s.LoadBalancerStatus {
  return <k8s.LoadBalancerStatus>({
  }).merge(options)
}

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export function localObjectReference(options?: Optional<k8s.LocalObjectReference>) : k8s.LocalObjectReference {
  return <k8s.LocalObjectReference>({
  }).merge(options)
}

/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
export function localVolumeSource(options?: Optional<k8s.LocalVolumeSource>) : k8s.LocalVolumeSource {
  return <k8s.LocalVolumeSource>({
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
export function nFSVolumeSource(options?: Optional<k8s.NFSVolumeSource>) : k8s.NFSVolumeSource {
  return <k8s.NFSVolumeSource>({
    path: (options && options.path) || null,
    server: (options && options.server) || null,
  }).merge(options)
}

/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
export function namespace(options?: Optional<k8s.Namespace>) : k8s.Namespace {
  return <k8s.Namespace>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "Namespace",
  }).merge(options)
}

/**
 * NamespaceList is a list of Namespaces.
 */
export function namespaceList(options?: Optional<k8s.NamespaceList>) : k8s.NamespaceList {
  return <k8s.NamespaceList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "NamespaceList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export function namespaceSpec(options?: Optional<k8s.NamespaceSpec>) : k8s.NamespaceSpec {
  return <k8s.NamespaceSpec>({
  }).merge(options)
}

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export function namespaceStatus(options?: Optional<k8s.NamespaceStatus>) : k8s.NamespaceStatus {
  return <k8s.NamespaceStatus>({
  }).merge(options)
}

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
export function node(options?: Optional<k8s.Node>) : k8s.Node {
  return <k8s.Node>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "Node",
  }).merge(options)
}

/**
 * NodeAddress contains information for the node's address.
 */
export function nodeAddress(options?: Optional<k8s.NodeAddress>) : k8s.NodeAddress {
  return <k8s.NodeAddress>({
    address: (options && options.address) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * Node affinity is a group of node affinity scheduling rules.
 */
export function nodeAffinity(options?: Optional<k8s.NodeAffinity>) : k8s.NodeAffinity {
  return <k8s.NodeAffinity>({
  }).merge(options)
}

/**
 * NodeCondition contains condition information for a node.
 */
export function nodeCondition(options?: Optional<k8s.NodeCondition>) : k8s.NodeCondition {
  return <k8s.NodeCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
export function nodeConfigSource(options?: Optional<k8s.NodeConfigSource>) : k8s.NodeConfigSource {
  return <k8s.NodeConfigSource>({
  }).merge(options)
}

/**
 * NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
 */
export function nodeConfigStatus(options?: Optional<k8s.NodeConfigStatus>) : k8s.NodeConfigStatus {
  return <k8s.NodeConfigStatus>({
  }).merge(options)
}

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export function nodeDaemonEndpoints(options?: Optional<k8s.NodeDaemonEndpoints>) : k8s.NodeDaemonEndpoints {
  return <k8s.NodeDaemonEndpoints>({
  }).merge(options)
}

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
export function nodeList(options?: Optional<k8s.NodeList>) : k8s.NodeList {
  return <k8s.NodeList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "NodeList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export function nodeSelector(options?: Optional<k8s.NodeSelector>) : k8s.NodeSelector {
  return <k8s.NodeSelector>({
    nodeSelectorTerms: (options && options.nodeSelectorTerms) || [],
  }).merge(options)
}

/**
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export function nodeSelectorRequirement(options?: Optional<k8s.NodeSelectorRequirement>) : k8s.NodeSelectorRequirement {
  return <k8s.NodeSelectorRequirement>({
    key: (options && options.key) || null,
    operator: (options && options.operator) || null,
  }).merge(options)
}

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export function nodeSelectorTerm(options?: Optional<k8s.NodeSelectorTerm>) : k8s.NodeSelectorTerm {
  return <k8s.NodeSelectorTerm>({
  }).merge(options)
}

/**
 * NodeSpec describes the attributes that a node is created with.
 */
export function nodeSpec(options?: Optional<k8s.NodeSpec>) : k8s.NodeSpec {
  return <k8s.NodeSpec>({
  }).merge(options)
}

/**
 * NodeStatus is information about the current status of a node.
 */
export function nodeStatus(options?: Optional<k8s.NodeStatus>) : k8s.NodeStatus {
  return <k8s.NodeStatus>({
  }).merge(options)
}

/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
export function nodeSystemInfo(options?: Optional<k8s.NodeSystemInfo>) : k8s.NodeSystemInfo {
  return <k8s.NodeSystemInfo>({
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
  }).merge(options)
}

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export function objectFieldSelector(options?: Optional<k8s.ObjectFieldSelector>) : k8s.ObjectFieldSelector {
  return <k8s.ObjectFieldSelector>({
    apiVersion: "io.k8s.api.core.v1",
    fieldPath: (options && options.fieldPath) || null,
  }).merge(options)
}

/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
export function objectReference(options?: Optional<k8s.ObjectReference>) : k8s.ObjectReference {
  return <k8s.ObjectReference>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ObjectReference",
  }).merge(options)
}

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export function persistentVolume(options?: Optional<k8s.PersistentVolume>) : k8s.PersistentVolume {
  return <k8s.PersistentVolume>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "PersistentVolume",
  }).merge(options)
}

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export function persistentVolumeClaim(options?: Optional<k8s.PersistentVolumeClaim>) : k8s.PersistentVolumeClaim {
  return <k8s.PersistentVolumeClaim>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "PersistentVolumeClaim",
  }).merge(options)
}

/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
export function persistentVolumeClaimCondition(options?: Optional<k8s.PersistentVolumeClaimCondition>) : k8s.PersistentVolumeClaimCondition {
  return <k8s.PersistentVolumeClaimCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
export function persistentVolumeClaimList(options?: Optional<k8s.PersistentVolumeClaimList>) : k8s.PersistentVolumeClaimList {
  return <k8s.PersistentVolumeClaimList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "PersistentVolumeClaimList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 */
export function persistentVolumeClaimSpec(options?: Optional<k8s.PersistentVolumeClaimSpec>) : k8s.PersistentVolumeClaimSpec {
  return <k8s.PersistentVolumeClaimSpec>({
  }).merge(options)
}

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
export function persistentVolumeClaimStatus(options?: Optional<k8s.PersistentVolumeClaimStatus>) : k8s.PersistentVolumeClaimStatus {
  return <k8s.PersistentVolumeClaimStatus>({
  }).merge(options)
}

/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 */
export function persistentVolumeClaimVolumeSource(options?: Optional<k8s.PersistentVolumeClaimVolumeSource>) : k8s.PersistentVolumeClaimVolumeSource {
  return <k8s.PersistentVolumeClaimVolumeSource>({
    claimName: (options && options.claimName) || null,
  }).merge(options)
}

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export function persistentVolumeList(options?: Optional<k8s.PersistentVolumeList>) : k8s.PersistentVolumeList {
  return <k8s.PersistentVolumeList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "PersistentVolumeList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export function persistentVolumeSpec(options?: Optional<k8s.PersistentVolumeSpec>) : k8s.PersistentVolumeSpec {
  return <k8s.PersistentVolumeSpec>({
  }).merge(options)
}

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export function persistentVolumeStatus(options?: Optional<k8s.PersistentVolumeStatus>) : k8s.PersistentVolumeStatus {
  return <k8s.PersistentVolumeStatus>({
  }).merge(options)
}

/**
 * Represents a Photon Controller persistent disk resource.
 */
export function photonPersistentDiskVolumeSource(options?: Optional<k8s.PhotonPersistentDiskVolumeSource>) : k8s.PhotonPersistentDiskVolumeSource {
  return <k8s.PhotonPersistentDiskVolumeSource>({
    pdID: (options && options.pdID) || null,
  }).merge(options)
}

/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 */
export function pod(options?: Optional<k8s.Pod>) : k8s.Pod {
  return <k8s.Pod>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "Pod",
  }).merge(options)
}

/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 */
export function podAffinity(options?: Optional<k8s.PodAffinity>) : k8s.PodAffinity {
  return <k8s.PodAffinity>({
  }).merge(options)
}

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
export function podAffinityTerm(options?: Optional<k8s.PodAffinityTerm>) : k8s.PodAffinityTerm {
  return <k8s.PodAffinityTerm>({
    topologyKey: (options && options.topologyKey) || null,
  }).merge(options)
}

/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 */
export function podAntiAffinity(options?: Optional<k8s.PodAntiAffinity>) : k8s.PodAntiAffinity {
  return <k8s.PodAntiAffinity>({
  }).merge(options)
}

/**
 * PodCondition contains details for the current condition of this pod.
 */
export function podCondition(options?: Optional<k8s.PodCondition>) : k8s.PodCondition {
  return <k8s.PodCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
export function podDNSConfig(options?: Optional<k8s.PodDNSConfig>) : k8s.PodDNSConfig {
  return <k8s.PodDNSConfig>({
  }).merge(options)
}

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export function podDNSConfigOption(options?: Optional<k8s.PodDNSConfigOption>) : k8s.PodDNSConfigOption {
  return <k8s.PodDNSConfigOption>({
  }).merge(options)
}

/**
 * PodList is a list of Pods.
 */
export function podList(options?: Optional<k8s.PodList>) : k8s.PodList {
  return <k8s.PodList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "PodList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export function podReadinessGate(options?: Optional<k8s.PodReadinessGate>) : k8s.PodReadinessGate {
  return <k8s.PodReadinessGate>({
    conditionType: (options && options.conditionType) || null,
  }).merge(options)
}

/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 */
export function podSecurityContext(options?: Optional<k8s.PodSecurityContext>) : k8s.PodSecurityContext {
  return <k8s.PodSecurityContext>({
  }).merge(options)
}

/**
 * PodSpec is a description of a pod.
 */
export function podSpec(options?: Optional<k8s.PodSpec>) : k8s.PodSpec {
  return <k8s.PodSpec>({
    containers: (options && options.containers) || [],
  }).merge(options)
}

/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
export function podStatus(options?: Optional<k8s.PodStatus>) : k8s.PodStatus {
  return <k8s.PodStatus>({
  }).merge(options)
}

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export function podTemplate(options?: Optional<k8s.PodTemplate>) : k8s.PodTemplate {
  return <k8s.PodTemplate>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "PodTemplate",
  }).merge(options)
}

/**
 * PodTemplateList is a list of PodTemplates.
 */
export function podTemplateList(options?: Optional<k8s.PodTemplateList>) : k8s.PodTemplateList {
  return <k8s.PodTemplateList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "PodTemplateList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export function podTemplateSpec(options?: Optional<k8s.PodTemplateSpec>) : k8s.PodTemplateSpec {
  return <k8s.PodTemplateSpec>({
  }).merge(options)
}

/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export function portworxVolumeSource(options?: Optional<k8s.PortworxVolumeSource>) : k8s.PortworxVolumeSource {
  return <k8s.PortworxVolumeSource>({
    volumeID: (options && options.volumeID) || null,
  }).merge(options)
}

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export function preferredSchedulingTerm(options?: Optional<k8s.PreferredSchedulingTerm>) : k8s.PreferredSchedulingTerm {
  return <k8s.PreferredSchedulingTerm>({
    preference: (options && options.preference) || nodeSelectorTerm(),
    weight: (options && options.weight) || 0,
  }).merge(options)
}

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export function probe(options?: Optional<k8s.Probe>) : k8s.Probe {
  return <k8s.Probe>({
  }).merge(options)
}

/**
 * Represents a projected volume source
 */
export function projectedVolumeSource(options?: Optional<k8s.ProjectedVolumeSource>) : k8s.ProjectedVolumeSource {
  return <k8s.ProjectedVolumeSource>({
    sources: (options && options.sources) || [],
  }).merge(options)
}

/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
export function quobyteVolumeSource(options?: Optional<k8s.QuobyteVolumeSource>) : k8s.QuobyteVolumeSource {
  return <k8s.QuobyteVolumeSource>({
    registry: (options && options.registry) || null,
    volume: (options && options.volume) || null,
  }).merge(options)
}

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export function rBDPersistentVolumeSource(options?: Optional<k8s.RBDPersistentVolumeSource>) : k8s.RBDPersistentVolumeSource {
  return <k8s.RBDPersistentVolumeSource>({
    image: (options && options.image) || null,
    monitors: (options && options.monitors) || [],
  }).merge(options)
}

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export function rBDVolumeSource(options?: Optional<k8s.RBDVolumeSource>) : k8s.RBDVolumeSource {
  return <k8s.RBDVolumeSource>({
    image: (options && options.image) || null,
    monitors: (options && options.monitors) || [],
  }).merge(options)
}

/**
 * ReplicationController represents the configuration of a replication controller.
 */
export function replicationController(options?: Optional<k8s.ReplicationController>) : k8s.ReplicationController {
  return <k8s.ReplicationController>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ReplicationController",
  }).merge(options)
}

/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export function replicationControllerCondition(options?: Optional<k8s.ReplicationControllerCondition>) : k8s.ReplicationControllerCondition {
  return <k8s.ReplicationControllerCondition>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export function replicationControllerList(options?: Optional<k8s.ReplicationControllerList>) : k8s.ReplicationControllerList {
  return <k8s.ReplicationControllerList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ReplicationControllerList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ReplicationControllerSpec is the specification of a replication controller.
 */
export function replicationControllerSpec(options?: Optional<k8s.ReplicationControllerSpec>) : k8s.ReplicationControllerSpec {
  return <k8s.ReplicationControllerSpec>({
  }).merge(options)
}

/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
export function replicationControllerStatus(options?: Optional<k8s.ReplicationControllerStatus>) : k8s.ReplicationControllerStatus {
  return <k8s.ReplicationControllerStatus>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export function resourceFieldSelector(options?: Optional<k8s.ResourceFieldSelector>) : k8s.ResourceFieldSelector {
  return <k8s.ResourceFieldSelector>({
    resource: (options && options.resource) || null,
  }).merge(options)
}

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export function resourceQuota(options?: Optional<k8s.ResourceQuota>) : k8s.ResourceQuota {
  return <k8s.ResourceQuota>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ResourceQuota",
  }).merge(options)
}

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export function resourceQuotaList(options?: Optional<k8s.ResourceQuotaList>) : k8s.ResourceQuotaList {
  return <k8s.ResourceQuotaList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ResourceQuotaList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export function resourceQuotaSpec(options?: Optional<k8s.ResourceQuotaSpec>) : k8s.ResourceQuotaSpec {
  return <k8s.ResourceQuotaSpec>({
  }).merge(options)
}

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export function resourceQuotaStatus(options?: Optional<k8s.ResourceQuotaStatus>) : k8s.ResourceQuotaStatus {
  return <k8s.ResourceQuotaStatus>({
  }).merge(options)
}

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export function resourceRequirements(options?: Optional<k8s.ResourceRequirements>) : k8s.ResourceRequirements {
  return <k8s.ResourceRequirements>({
  }).merge(options)
}

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export function sELinuxOptions(options?: Optional<k8s.SELinuxOptions>) : k8s.SELinuxOptions {
  return <k8s.SELinuxOptions>({
  }).merge(options)
}

/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 */
export function scaleIOPersistentVolumeSource(options?: Optional<k8s.ScaleIOPersistentVolumeSource>) : k8s.ScaleIOPersistentVolumeSource {
  return <k8s.ScaleIOPersistentVolumeSource>({
    gateway: (options && options.gateway) || null,
    secretRef: (options && options.secretRef) || secretReference(),
    system: (options && options.system) || null,
  }).merge(options)
}

/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
export function scaleIOVolumeSource(options?: Optional<k8s.ScaleIOVolumeSource>) : k8s.ScaleIOVolumeSource {
  return <k8s.ScaleIOVolumeSource>({
    gateway: (options && options.gateway) || null,
    secretRef: (options && options.secretRef) || localObjectReference(),
    system: (options && options.system) || null,
  }).merge(options)
}

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export function scopeSelector(options?: Optional<k8s.ScopeSelector>) : k8s.ScopeSelector {
  return <k8s.ScopeSelector>({
  }).merge(options)
}

/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
export function scopedResourceSelectorRequirement(options?: Optional<k8s.ScopedResourceSelectorRequirement>) : k8s.ScopedResourceSelectorRequirement {
  return <k8s.ScopedResourceSelectorRequirement>({
    operator: (options && options.operator) || null,
    scopeName: (options && options.scopeName) || null,
  }).merge(options)
}

/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 */
export function secret(options?: Optional<k8s.Secret>) : k8s.Secret {
  return <k8s.Secret>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "Secret",
  }).merge(options)
}

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 * 
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export function secretEnvSource(options?: Optional<k8s.SecretEnvSource>) : k8s.SecretEnvSource {
  return <k8s.SecretEnvSource>({
  }).merge(options)
}

/**
 * SecretKeySelector selects a key of a Secret.
 */
export function secretKeySelector(options?: Optional<k8s.SecretKeySelector>) : k8s.SecretKeySelector {
  return <k8s.SecretKeySelector>({
    key: (options && options.key) || null,
  }).merge(options)
}

/**
 * SecretList is a list of Secret.
 */
export function secretList(options?: Optional<k8s.SecretList>) : k8s.SecretList {
  return <k8s.SecretList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "SecretList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * Adapts a secret into a projected volume.
 * 
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export function secretProjection(options?: Optional<k8s.SecretProjection>) : k8s.SecretProjection {
  return <k8s.SecretProjection>({
  }).merge(options)
}

/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export function secretReference(options?: Optional<k8s.SecretReference>) : k8s.SecretReference {
  return <k8s.SecretReference>({
  }).merge(options)
}

/**
 * Adapts a Secret into a volume.
 * 
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export function secretVolumeSource(options?: Optional<k8s.SecretVolumeSource>) : k8s.SecretVolumeSource {
  return <k8s.SecretVolumeSource>({
  }).merge(options)
}

/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 */
export function securityContext(options?: Optional<k8s.SecurityContext>) : k8s.SecurityContext {
  return <k8s.SecurityContext>({
  }).merge(options)
}

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export function service(options?: Optional<k8s.Service>) : k8s.Service {
  return <k8s.Service>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "Service",
  }).merge(options)
}

/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 */
export function serviceAccount(options?: Optional<k8s.ServiceAccount>) : k8s.ServiceAccount {
  return <k8s.ServiceAccount>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ServiceAccount",
  }).merge(options)
}

/**
 * ServiceAccountList is a list of ServiceAccount objects
 */
export function serviceAccountList(options?: Optional<k8s.ServiceAccountList>) : k8s.ServiceAccountList {
  return <k8s.ServiceAccountList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ServiceAccountList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 */
export function serviceAccountTokenProjection(options?: Optional<k8s.ServiceAccountTokenProjection>) : k8s.ServiceAccountTokenProjection {
  return <k8s.ServiceAccountTokenProjection>({
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * ServiceList holds a list of services.
 */
export function serviceList(options?: Optional<k8s.ServiceList>) : k8s.ServiceList {
  return <k8s.ServiceList>({
    apiVersion: "io.k8s.api.core.v1",
    kind: "ServiceList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ServicePort contains information on service's port.
 */
export function servicePort(options?: Optional<k8s.ServicePort>) : k8s.ServicePort {
  return <k8s.ServicePort>({
    port: (options && options.port) || 0,
  }).merge(options)
}

/**
 * ServiceSpec describes the attributes that a user creates on a service.
 */
export function serviceSpec(options?: Optional<k8s.ServiceSpec>) : k8s.ServiceSpec {
  return <k8s.ServiceSpec>({
  }).merge(options)
}

/**
 * ServiceStatus represents the current status of a service.
 */
export function serviceStatus(options?: Optional<k8s.ServiceStatus>) : k8s.ServiceStatus {
  return <k8s.ServiceStatus>({
  }).merge(options)
}

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export function sessionAffinityConfig(options?: Optional<k8s.SessionAffinityConfig>) : k8s.SessionAffinityConfig {
  return <k8s.SessionAffinityConfig>({
  }).merge(options)
}

/**
 * Represents a StorageOS persistent volume resource.
 */
export function storageOSPersistentVolumeSource(options?: Optional<k8s.StorageOSPersistentVolumeSource>) : k8s.StorageOSPersistentVolumeSource {
  return <k8s.StorageOSPersistentVolumeSource>({
  }).merge(options)
}

/**
 * Represents a StorageOS persistent volume resource.
 */
export function storageOSVolumeSource(options?: Optional<k8s.StorageOSVolumeSource>) : k8s.StorageOSVolumeSource {
  return <k8s.StorageOSVolumeSource>({
  }).merge(options)
}

/**
 * Sysctl defines a kernel parameter to be set
 */
export function sysctl(options?: Optional<k8s.Sysctl>) : k8s.Sysctl {
  return <k8s.Sysctl>({
    name: (options && options.name) || null,
    value: (options && options.value) || null,
  }).merge(options)
}

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export function tCPSocketAction(options?: Optional<k8s.TCPSocketAction>) : k8s.TCPSocketAction {
  return <k8s.TCPSocketAction>({
    port: (options && options.port) || intOrStringIoK8sApimachineryPkgUtilIntstr(),
  }).merge(options)
}

/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export function taint(options?: Optional<k8s.Taint>) : k8s.Taint {
  return <k8s.Taint>({
    effect: (options && options.effect) || null,
    key: (options && options.key) || null,
  }).merge(options)
}

/**
 * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 */
export function toleration(options?: Optional<k8s.Toleration>) : k8s.Toleration {
  return <k8s.Toleration>({
  }).merge(options)
}

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export function topologySelectorLabelRequirement(options?: Optional<k8s.TopologySelectorLabelRequirement>) : k8s.TopologySelectorLabelRequirement {
  return <k8s.TopologySelectorLabelRequirement>({
    key: (options && options.key) || null,
    values: (options && options.values) || [],
  }).merge(options)
}

/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
export function topologySelectorTerm(options?: Optional<k8s.TopologySelectorTerm>) : k8s.TopologySelectorTerm {
  return <k8s.TopologySelectorTerm>({
  }).merge(options)
}

/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export function typedLocalObjectReference(options?: Optional<k8s.TypedLocalObjectReference>) : k8s.TypedLocalObjectReference {
  return <k8s.TypedLocalObjectReference>({
    kind: "TypedLocalObjectReference",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export function volume(options?: Optional<k8s.Volume>) : k8s.Volume {
  return <k8s.Volume>({
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export function volumeDevice(options?: Optional<k8s.VolumeDevice>) : k8s.VolumeDevice {
  return <k8s.VolumeDevice>({
    devicePath: (options && options.devicePath) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
export function volumeMount(options?: Optional<k8s.VolumeMount>) : k8s.VolumeMount {
  return <k8s.VolumeMount>({
    mountPath: (options && options.mountPath) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export function volumeNodeAffinity(options?: Optional<k8s.VolumeNodeAffinity>) : k8s.VolumeNodeAffinity {
  return <k8s.VolumeNodeAffinity>({
  }).merge(options)
}

/**
 * Projection that may be projected along with other supported volume types
 */
export function volumeProjection(options?: Optional<k8s.VolumeProjection>) : k8s.VolumeProjection {
  return <k8s.VolumeProjection>({
  }).merge(options)
}

/**
 * Represents a vSphere volume resource.
 */
export function vsphereVirtualDiskVolumeSource(options?: Optional<k8s.VsphereVirtualDiskVolumeSource>) : k8s.VsphereVirtualDiskVolumeSource {
  return <k8s.VsphereVirtualDiskVolumeSource>({
    volumePath: (options && options.volumePath) || null,
  }).merge(options)
}

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export function weightedPodAffinityTerm(options?: Optional<k8s.WeightedPodAffinityTerm>) : k8s.WeightedPodAffinityTerm {
  return <k8s.WeightedPodAffinityTerm>({
    podAffinityTerm: (options && options.podAffinityTerm) || podAffinityTerm(),
    weight: (options && options.weight) || 0,
  }).merge(options)
}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead.
 */
export function allowedFlexVolumeIoK8sApiExtensionsV1beta1(options?: Optional<k8s.AllowedFlexVolumeIoK8sApiExtensionsV1beta1>) : k8s.AllowedFlexVolumeIoK8sApiExtensionsV1beta1 {
  return <k8s.AllowedFlexVolumeIoK8sApiExtensionsV1beta1>({
    driver: (options && options.driver) || null,
  }).merge(options)
}

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead.
 */
export function allowedHostPathIoK8sApiExtensionsV1beta1(options?: Optional<k8s.AllowedHostPathIoK8sApiExtensionsV1beta1>) : k8s.AllowedHostPathIoK8sApiExtensionsV1beta1 {
  return <k8s.AllowedHostPathIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export function daemonSetIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetIoK8sApiExtensionsV1beta1>) : k8s.DaemonSetIoK8sApiExtensionsV1beta1 {
  return <k8s.DaemonSetIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "DaemonSet",
  }).merge(options)
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export function daemonSetConditionIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetConditionIoK8sApiExtensionsV1beta1>) : k8s.DaemonSetConditionIoK8sApiExtensionsV1beta1 {
  return <k8s.DaemonSetConditionIoK8sApiExtensionsV1beta1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export function daemonSetListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetListIoK8sApiExtensionsV1beta1>) : k8s.DaemonSetListIoK8sApiExtensionsV1beta1 {
  return <k8s.DaemonSetListIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "DaemonSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export function daemonSetSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetSpecIoK8sApiExtensionsV1beta1>) : k8s.DaemonSetSpecIoK8sApiExtensionsV1beta1 {
  return <k8s.DaemonSetSpecIoK8sApiExtensionsV1beta1>({
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export function daemonSetStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetStatusIoK8sApiExtensionsV1beta1>) : k8s.DaemonSetStatusIoK8sApiExtensionsV1beta1 {
  return <k8s.DaemonSetStatusIoK8sApiExtensionsV1beta1>({
    currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
    desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
    numberMisscheduled: (options && options.numberMisscheduled) || 0,
    numberReady: (options && options.numberReady) || 0,
  }).merge(options)
}

export function daemonSetUpdateStrategyIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetUpdateStrategyIoK8sApiExtensionsV1beta1>) : k8s.DaemonSetUpdateStrategyIoK8sApiExtensionsV1beta1 {
  return <k8s.DaemonSetUpdateStrategyIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export function deploymentIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentIoK8sApiExtensionsV1beta1>) : k8s.DeploymentIoK8sApiExtensionsV1beta1 {
  return <k8s.DeploymentIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "Deployment",
  }).merge(options)
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export function deploymentConditionIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentConditionIoK8sApiExtensionsV1beta1>) : k8s.DeploymentConditionIoK8sApiExtensionsV1beta1 {
  return <k8s.DeploymentConditionIoK8sApiExtensionsV1beta1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DeploymentList is a list of Deployments.
 */
export function deploymentListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentListIoK8sApiExtensionsV1beta1>) : k8s.DeploymentListIoK8sApiExtensionsV1beta1 {
  return <k8s.DeploymentListIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "DeploymentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export function deploymentRollbackIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentRollbackIoK8sApiExtensionsV1beta1>) : k8s.DeploymentRollbackIoK8sApiExtensionsV1beta1 {
  return <k8s.DeploymentRollbackIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "DeploymentRollback",
    name: (options && options.name) || null,
    rollbackTo: (options && options.rollbackTo) || rollbackConfigIoK8sApiExtensionsV1beta1(),
  }).merge(options)
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export function deploymentSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentSpecIoK8sApiExtensionsV1beta1>) : k8s.DeploymentSpecIoK8sApiExtensionsV1beta1 {
  return <k8s.DeploymentSpecIoK8sApiExtensionsV1beta1>({
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export function deploymentStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentStatusIoK8sApiExtensionsV1beta1>) : k8s.DeploymentStatusIoK8sApiExtensionsV1beta1 {
  return <k8s.DeploymentStatusIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export function deploymentStrategyIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentStrategyIoK8sApiExtensionsV1beta1>) : k8s.DeploymentStrategyIoK8sApiExtensionsV1beta1 {
  return <k8s.DeploymentStrategyIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 */
export function fSGroupStrategyOptionsIoK8sApiExtensionsV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsIoK8sApiExtensionsV1beta1>) : k8s.FSGroupStrategyOptionsIoK8sApiExtensionsV1beta1 {
  return <k8s.FSGroupStrategyOptionsIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 */
export function hTTPIngressPathIoK8sApiExtensionsV1beta1(options?: Optional<k8s.HTTPIngressPathIoK8sApiExtensionsV1beta1>) : k8s.HTTPIngressPathIoK8sApiExtensionsV1beta1 {
  return <k8s.HTTPIngressPathIoK8sApiExtensionsV1beta1>({
    backend: (options && options.backend) || ingressBackendIoK8sApiExtensionsV1beta1(),
  }).merge(options)
}

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export function hTTPIngressRuleValueIoK8sApiExtensionsV1beta1(options?: Optional<k8s.HTTPIngressRuleValueIoK8sApiExtensionsV1beta1>) : k8s.HTTPIngressRuleValueIoK8sApiExtensionsV1beta1 {
  return <k8s.HTTPIngressRuleValueIoK8sApiExtensionsV1beta1>({
    paths: (options && options.paths) || [],
  }).merge(options)
}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 */
export function hostPortRangeIoK8sApiExtensionsV1beta1(options?: Optional<k8s.HostPortRangeIoK8sApiExtensionsV1beta1>) : k8s.HostPortRangeIoK8sApiExtensionsV1beta1 {
  return <k8s.HostPortRangeIoK8sApiExtensionsV1beta1>({
    max: (options && options.max) || 0,
    min: (options && options.min) || 0,
  }).merge(options)
}

/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 */
export function iDRangeIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IDRangeIoK8sApiExtensionsV1beta1>) : k8s.IDRangeIoK8sApiExtensionsV1beta1 {
  return <k8s.IDRangeIoK8sApiExtensionsV1beta1>({
    max: (options && options.max) || 0,
    min: (options && options.min) || 0,
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export function iPBlockIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IPBlockIoK8sApiExtensionsV1beta1>) : k8s.IPBlockIoK8sApiExtensionsV1beta1 {
  return <k8s.IPBlockIoK8sApiExtensionsV1beta1>({
    cidr: (options && options.cidr) || null,
  }).merge(options)
}

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
export function ingressIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressIoK8sApiExtensionsV1beta1>) : k8s.IngressIoK8sApiExtensionsV1beta1 {
  return <k8s.IngressIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "Ingress",
  }).merge(options)
}

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export function ingressBackendIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressBackendIoK8sApiExtensionsV1beta1>) : k8s.IngressBackendIoK8sApiExtensionsV1beta1 {
  return <k8s.IngressBackendIoK8sApiExtensionsV1beta1>({
    serviceName: (options && options.serviceName) || null,
    servicePort: (options && options.servicePort) || intOrStringIoK8sApimachineryPkgUtilIntstr(),
  }).merge(options)
}

/**
 * IngressList is a collection of Ingress.
 */
export function ingressListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressListIoK8sApiExtensionsV1beta1>) : k8s.IngressListIoK8sApiExtensionsV1beta1 {
  return <k8s.IngressListIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "IngressList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
export function ingressRuleIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressRuleIoK8sApiExtensionsV1beta1>) : k8s.IngressRuleIoK8sApiExtensionsV1beta1 {
  return <k8s.IngressRuleIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
export function ingressSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressSpecIoK8sApiExtensionsV1beta1>) : k8s.IngressSpecIoK8sApiExtensionsV1beta1 {
  return <k8s.IngressSpecIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * IngressStatus describe the current state of the Ingress.
 */
export function ingressStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressStatusIoK8sApiExtensionsV1beta1>) : k8s.IngressStatusIoK8sApiExtensionsV1beta1 {
  return <k8s.IngressStatusIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export function ingressTLSIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressTLSIoK8sApiExtensionsV1beta1>) : k8s.IngressTLSIoK8sApiExtensionsV1beta1 {
  return <k8s.IngressTLSIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export function networkPolicyIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyIoK8sApiExtensionsV1beta1>) : k8s.NetworkPolicyIoK8sApiExtensionsV1beta1 {
  return <k8s.NetworkPolicyIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "NetworkPolicy",
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export function networkPolicyEgressRuleIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyEgressRuleIoK8sApiExtensionsV1beta1>) : k8s.NetworkPolicyEgressRuleIoK8sApiExtensionsV1beta1 {
  return <k8s.NetworkPolicyEgressRuleIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 */
export function networkPolicyIngressRuleIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyIngressRuleIoK8sApiExtensionsV1beta1>) : k8s.NetworkPolicyIngressRuleIoK8sApiExtensionsV1beta1 {
  return <k8s.NetworkPolicyIngressRuleIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 */
export function networkPolicyListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyListIoK8sApiExtensionsV1beta1>) : k8s.NetworkPolicyListIoK8sApiExtensionsV1beta1 {
  return <k8s.NetworkPolicyListIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "NetworkPolicyList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 */
export function networkPolicyPeerIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyPeerIoK8sApiExtensionsV1beta1>) : k8s.NetworkPolicyPeerIoK8sApiExtensionsV1beta1 {
  return <k8s.NetworkPolicyPeerIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 */
export function networkPolicyPortIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyPortIoK8sApiExtensionsV1beta1>) : k8s.NetworkPolicyPortIoK8sApiExtensionsV1beta1 {
  return <k8s.NetworkPolicyPortIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
 */
export function networkPolicySpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicySpecIoK8sApiExtensionsV1beta1>) : k8s.NetworkPolicySpecIoK8sApiExtensionsV1beta1 {
  return <k8s.NetworkPolicySpecIoK8sApiExtensionsV1beta1>({
    podSelector: (options && options.podSelector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
  }).merge(options)
}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 */
export function podSecurityPolicyIoK8sApiExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyIoK8sApiExtensionsV1beta1>) : k8s.PodSecurityPolicyIoK8sApiExtensionsV1beta1 {
  return <k8s.PodSecurityPolicyIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "PodSecurityPolicy",
  }).merge(options)
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
export function podSecurityPolicyListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyListIoK8sApiExtensionsV1beta1>) : k8s.PodSecurityPolicyListIoK8sApiExtensionsV1beta1 {
  return <k8s.PodSecurityPolicyListIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "PodSecurityPolicyList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 */
export function podSecurityPolicySpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicySpecIoK8sApiExtensionsV1beta1>) : k8s.PodSecurityPolicySpecIoK8sApiExtensionsV1beta1 {
  return <k8s.PodSecurityPolicySpecIoK8sApiExtensionsV1beta1>({
    fsGroup: (options && options.fsGroup) || fSGroupStrategyOptionsIoK8sApiExtensionsV1beta1(),
    runAsUser: (options && options.runAsUser) || runAsUserStrategyOptionsIoK8sApiExtensionsV1beta1(),
    seLinux: (options && options.seLinux) || sELinuxStrategyOptionsIoK8sApiExtensionsV1beta1(),
    supplementalGroups: (options && options.supplementalGroups) || supplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1(),
  }).merge(options)
}

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export function replicaSetIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetIoK8sApiExtensionsV1beta1>) : k8s.ReplicaSetIoK8sApiExtensionsV1beta1 {
  return <k8s.ReplicaSetIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "ReplicaSet",
  }).merge(options)
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export function replicaSetConditionIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetConditionIoK8sApiExtensionsV1beta1>) : k8s.ReplicaSetConditionIoK8sApiExtensionsV1beta1 {
  return <k8s.ReplicaSetConditionIoK8sApiExtensionsV1beta1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export function replicaSetListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetListIoK8sApiExtensionsV1beta1>) : k8s.ReplicaSetListIoK8sApiExtensionsV1beta1 {
  return <k8s.ReplicaSetListIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "ReplicaSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export function replicaSetSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetSpecIoK8sApiExtensionsV1beta1>) : k8s.ReplicaSetSpecIoK8sApiExtensionsV1beta1 {
  return <k8s.ReplicaSetSpecIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export function replicaSetStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetStatusIoK8sApiExtensionsV1beta1>) : k8s.ReplicaSetStatusIoK8sApiExtensionsV1beta1 {
  return <k8s.ReplicaSetStatusIoK8sApiExtensionsV1beta1>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * DEPRECATED.
 */
export function rollbackConfigIoK8sApiExtensionsV1beta1(options?: Optional<k8s.RollbackConfigIoK8sApiExtensionsV1beta1>) : k8s.RollbackConfigIoK8sApiExtensionsV1beta1 {
  return <k8s.RollbackConfigIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export function rollingUpdateDaemonSetIoK8sApiExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDaemonSetIoK8sApiExtensionsV1beta1>) : k8s.RollingUpdateDaemonSetIoK8sApiExtensionsV1beta1 {
  return <k8s.RollingUpdateDaemonSetIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export function rollingUpdateDeploymentIoK8sApiExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentIoK8sApiExtensionsV1beta1>) : k8s.RollingUpdateDeploymentIoK8sApiExtensionsV1beta1 {
  return <k8s.RollingUpdateDeploymentIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 */
export function runAsUserStrategyOptionsIoK8sApiExtensionsV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsIoK8sApiExtensionsV1beta1>) : k8s.RunAsUserStrategyOptionsIoK8sApiExtensionsV1beta1 {
  return <k8s.RunAsUserStrategyOptionsIoK8sApiExtensionsV1beta1>({
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
export function sELinuxStrategyOptionsIoK8sApiExtensionsV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsIoK8sApiExtensionsV1beta1>) : k8s.SELinuxStrategyOptionsIoK8sApiExtensionsV1beta1 {
  return <k8s.SELinuxStrategyOptionsIoK8sApiExtensionsV1beta1>({
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * represents a scaling request for a resource.
 */
export function scaleIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ScaleIoK8sApiExtensionsV1beta1>) : k8s.ScaleIoK8sApiExtensionsV1beta1 {
  return <k8s.ScaleIoK8sApiExtensionsV1beta1>({
    apiVersion: "io.k8s.api.extensions.v1beta1",
    kind: "Scale",
  }).merge(options)
}

/**
 * describes the attributes of a scale subresource
 */
export function scaleSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ScaleSpecIoK8sApiExtensionsV1beta1>) : k8s.ScaleSpecIoK8sApiExtensionsV1beta1 {
  return <k8s.ScaleSpecIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * represents the current status of a scale subresource.
 */
export function scaleStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ScaleStatusIoK8sApiExtensionsV1beta1>) : k8s.ScaleStatusIoK8sApiExtensionsV1beta1 {
  return <k8s.ScaleStatusIoK8sApiExtensionsV1beta1>({
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 */
export function supplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1>) : k8s.SupplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1 {
  return <k8s.SupplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1>({
  }).merge(options)
}

/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export function iPBlockIoK8sApiNetworkingV1(options?: Optional<k8s.IPBlockIoK8sApiNetworkingV1>) : k8s.IPBlockIoK8sApiNetworkingV1 {
  return <k8s.IPBlockIoK8sApiNetworkingV1>({
    cidr: (options && options.cidr) || null,
  }).merge(options)
}

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export function networkPolicyIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyIoK8sApiNetworkingV1>) : k8s.NetworkPolicyIoK8sApiNetworkingV1 {
  return <k8s.NetworkPolicyIoK8sApiNetworkingV1>({
    apiVersion: "io.k8s.api.networking.v1",
    kind: "NetworkPolicy",
  }).merge(options)
}

/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export function networkPolicyEgressRuleIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyEgressRuleIoK8sApiNetworkingV1>) : k8s.NetworkPolicyEgressRuleIoK8sApiNetworkingV1 {
  return <k8s.NetworkPolicyEgressRuleIoK8sApiNetworkingV1>({
  }).merge(options)
}

/**
 * NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
 */
export function networkPolicyIngressRuleIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyIngressRuleIoK8sApiNetworkingV1>) : k8s.NetworkPolicyIngressRuleIoK8sApiNetworkingV1 {
  return <k8s.NetworkPolicyIngressRuleIoK8sApiNetworkingV1>({
  }).merge(options)
}

/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export function networkPolicyListIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyListIoK8sApiNetworkingV1>) : k8s.NetworkPolicyListIoK8sApiNetworkingV1 {
  return <k8s.NetworkPolicyListIoK8sApiNetworkingV1>({
    apiVersion: "io.k8s.api.networking.v1",
    kind: "NetworkPolicyList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
export function networkPolicyPeerIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyPeerIoK8sApiNetworkingV1>) : k8s.NetworkPolicyPeerIoK8sApiNetworkingV1 {
  return <k8s.NetworkPolicyPeerIoK8sApiNetworkingV1>({
  }).merge(options)
}

/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export function networkPolicyPortIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyPortIoK8sApiNetworkingV1>) : k8s.NetworkPolicyPortIoK8sApiNetworkingV1 {
  return <k8s.NetworkPolicyPortIoK8sApiNetworkingV1>({
  }).merge(options)
}

/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 */
export function networkPolicySpecIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicySpecIoK8sApiNetworkingV1>) : k8s.NetworkPolicySpecIoK8sApiNetworkingV1 {
  return <k8s.NetworkPolicySpecIoK8sApiNetworkingV1>({
    podSelector: (options && options.podSelector) || labelSelectorIoK8sApimachineryPkgApisMetaV1(),
  }).merge(options)
}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export function allowedFlexVolumeIoK8sApiPolicyV1beta1(options?: Optional<k8s.AllowedFlexVolumeIoK8sApiPolicyV1beta1>) : k8s.AllowedFlexVolumeIoK8sApiPolicyV1beta1 {
  return <k8s.AllowedFlexVolumeIoK8sApiPolicyV1beta1>({
    driver: (options && options.driver) || null,
  }).merge(options)
}

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
export function allowedHostPathIoK8sApiPolicyV1beta1(options?: Optional<k8s.AllowedHostPathIoK8sApiPolicyV1beta1>) : k8s.AllowedHostPathIoK8sApiPolicyV1beta1 {
  return <k8s.AllowedHostPathIoK8sApiPolicyV1beta1>({
  }).merge(options)
}

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export function evictionIoK8sApiPolicyV1beta1(options?: Optional<k8s.EvictionIoK8sApiPolicyV1beta1>) : k8s.EvictionIoK8sApiPolicyV1beta1 {
  return <k8s.EvictionIoK8sApiPolicyV1beta1>({
    apiVersion: "io.k8s.api.policy.v1beta1",
    kind: "Eviction",
  }).merge(options)
}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
export function fSGroupStrategyOptionsIoK8sApiPolicyV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsIoK8sApiPolicyV1beta1>) : k8s.FSGroupStrategyOptionsIoK8sApiPolicyV1beta1 {
  return <k8s.FSGroupStrategyOptionsIoK8sApiPolicyV1beta1>({
  }).merge(options)
}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export function hostPortRangeIoK8sApiPolicyV1beta1(options?: Optional<k8s.HostPortRangeIoK8sApiPolicyV1beta1>) : k8s.HostPortRangeIoK8sApiPolicyV1beta1 {
  return <k8s.HostPortRangeIoK8sApiPolicyV1beta1>({
    max: (options && options.max) || 0,
    min: (options && options.min) || 0,
  }).merge(options)
}

/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
export function iDRangeIoK8sApiPolicyV1beta1(options?: Optional<k8s.IDRangeIoK8sApiPolicyV1beta1>) : k8s.IDRangeIoK8sApiPolicyV1beta1 {
  return <k8s.IDRangeIoK8sApiPolicyV1beta1>({
    max: (options && options.max) || 0,
    min: (options && options.min) || 0,
  }).merge(options)
}

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export function podDisruptionBudgetIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetIoK8sApiPolicyV1beta1>) : k8s.PodDisruptionBudgetIoK8sApiPolicyV1beta1 {
  return <k8s.PodDisruptionBudgetIoK8sApiPolicyV1beta1>({
    apiVersion: "io.k8s.api.policy.v1beta1",
    kind: "PodDisruptionBudget",
  }).merge(options)
}

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export function podDisruptionBudgetListIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetListIoK8sApiPolicyV1beta1>) : k8s.PodDisruptionBudgetListIoK8sApiPolicyV1beta1 {
  return <k8s.PodDisruptionBudgetListIoK8sApiPolicyV1beta1>({
    apiVersion: "io.k8s.api.policy.v1beta1",
    kind: "PodDisruptionBudgetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export function podDisruptionBudgetSpecIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetSpecIoK8sApiPolicyV1beta1>) : k8s.PodDisruptionBudgetSpecIoK8sApiPolicyV1beta1 {
  return <k8s.PodDisruptionBudgetSpecIoK8sApiPolicyV1beta1>({
  }).merge(options)
}

/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
export function podDisruptionBudgetStatusIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetStatusIoK8sApiPolicyV1beta1>) : k8s.PodDisruptionBudgetStatusIoK8sApiPolicyV1beta1 {
  return <k8s.PodDisruptionBudgetStatusIoK8sApiPolicyV1beta1>({
    currentHealthy: (options && options.currentHealthy) || 0,
    desiredHealthy: (options && options.desiredHealthy) || 0,
    disruptionsAllowed: (options && options.disruptionsAllowed) || 0,
    expectedPods: (options && options.expectedPods) || 0,
  }).merge(options)
}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
export function podSecurityPolicyIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicyIoK8sApiPolicyV1beta1>) : k8s.PodSecurityPolicyIoK8sApiPolicyV1beta1 {
  return <k8s.PodSecurityPolicyIoK8sApiPolicyV1beta1>({
    apiVersion: "io.k8s.api.policy.v1beta1",
    kind: "PodSecurityPolicy",
  }).merge(options)
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
export function podSecurityPolicyListIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicyListIoK8sApiPolicyV1beta1>) : k8s.PodSecurityPolicyListIoK8sApiPolicyV1beta1 {
  return <k8s.PodSecurityPolicyListIoK8sApiPolicyV1beta1>({
    apiVersion: "io.k8s.api.policy.v1beta1",
    kind: "PodSecurityPolicyList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
export function podSecurityPolicySpecIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicySpecIoK8sApiPolicyV1beta1>) : k8s.PodSecurityPolicySpecIoK8sApiPolicyV1beta1 {
  return <k8s.PodSecurityPolicySpecIoK8sApiPolicyV1beta1>({
    fsGroup: (options && options.fsGroup) || fSGroupStrategyOptionsIoK8sApiPolicyV1beta1(),
    runAsUser: (options && options.runAsUser) || runAsUserStrategyOptionsIoK8sApiPolicyV1beta1(),
    seLinux: (options && options.seLinux) || sELinuxStrategyOptionsIoK8sApiPolicyV1beta1(),
    supplementalGroups: (options && options.supplementalGroups) || supplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1(),
  }).merge(options)
}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export function runAsUserStrategyOptionsIoK8sApiPolicyV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsIoK8sApiPolicyV1beta1>) : k8s.RunAsUserStrategyOptionsIoK8sApiPolicyV1beta1 {
  return <k8s.RunAsUserStrategyOptionsIoK8sApiPolicyV1beta1>({
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export function sELinuxStrategyOptionsIoK8sApiPolicyV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsIoK8sApiPolicyV1beta1>) : k8s.SELinuxStrategyOptionsIoK8sApiPolicyV1beta1 {
  return <k8s.SELinuxStrategyOptionsIoK8sApiPolicyV1beta1>({
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export function supplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1>) : k8s.SupplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1 {
  return <k8s.SupplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1>({
  }).merge(options)
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export function aggregationRuleIoK8sApiRbacV1(options?: Optional<k8s.AggregationRuleIoK8sApiRbacV1>) : k8s.AggregationRuleIoK8sApiRbacV1 {
  return <k8s.AggregationRuleIoK8sApiRbacV1>({
  }).merge(options)
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export function clusterRoleIoK8sApiRbacV1(options?: Optional<k8s.ClusterRoleIoK8sApiRbacV1>) : k8s.ClusterRoleIoK8sApiRbacV1 {
  return <k8s.ClusterRoleIoK8sApiRbacV1>({
    apiVersion: "io.k8s.api.rbac.v1",
    kind: "ClusterRole",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export function clusterRoleBindingIoK8sApiRbacV1(options?: Optional<k8s.ClusterRoleBindingIoK8sApiRbacV1>) : k8s.ClusterRoleBindingIoK8sApiRbacV1 {
  return <k8s.ClusterRoleBindingIoK8sApiRbacV1>({
    apiVersion: "io.k8s.api.rbac.v1",
    kind: "ClusterRoleBinding",
    roleRef: (options && options.roleRef) || roleRefIoK8sApiRbacV1(),
  }).merge(options)
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export function clusterRoleBindingListIoK8sApiRbacV1(options?: Optional<k8s.ClusterRoleBindingListIoK8sApiRbacV1>) : k8s.ClusterRoleBindingListIoK8sApiRbacV1 {
  return <k8s.ClusterRoleBindingListIoK8sApiRbacV1>({
    apiVersion: "io.k8s.api.rbac.v1",
    kind: "ClusterRoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export function clusterRoleListIoK8sApiRbacV1(options?: Optional<k8s.ClusterRoleListIoK8sApiRbacV1>) : k8s.ClusterRoleListIoK8sApiRbacV1 {
  return <k8s.ClusterRoleListIoK8sApiRbacV1>({
    apiVersion: "io.k8s.api.rbac.v1",
    kind: "ClusterRoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export function policyRuleIoK8sApiRbacV1(options?: Optional<k8s.PolicyRuleIoK8sApiRbacV1>) : k8s.PolicyRuleIoK8sApiRbacV1 {
  return <k8s.PolicyRuleIoK8sApiRbacV1>({
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export function roleIoK8sApiRbacV1(options?: Optional<k8s.RoleIoK8sApiRbacV1>) : k8s.RoleIoK8sApiRbacV1 {
  return <k8s.RoleIoK8sApiRbacV1>({
    apiVersion: "io.k8s.api.rbac.v1",
    kind: "Role",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export function roleBindingIoK8sApiRbacV1(options?: Optional<k8s.RoleBindingIoK8sApiRbacV1>) : k8s.RoleBindingIoK8sApiRbacV1 {
  return <k8s.RoleBindingIoK8sApiRbacV1>({
    apiVersion: "io.k8s.api.rbac.v1",
    kind: "RoleBinding",
    roleRef: (options && options.roleRef) || roleRefIoK8sApiRbacV1(),
  }).merge(options)
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export function roleBindingListIoK8sApiRbacV1(options?: Optional<k8s.RoleBindingListIoK8sApiRbacV1>) : k8s.RoleBindingListIoK8sApiRbacV1 {
  return <k8s.RoleBindingListIoK8sApiRbacV1>({
    apiVersion: "io.k8s.api.rbac.v1",
    kind: "RoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleList is a collection of Roles
 */
export function roleListIoK8sApiRbacV1(options?: Optional<k8s.RoleListIoK8sApiRbacV1>) : k8s.RoleListIoK8sApiRbacV1 {
  return <k8s.RoleListIoK8sApiRbacV1>({
    apiVersion: "io.k8s.api.rbac.v1",
    kind: "RoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleRef contains information that points to the role being used
 */
export function roleRefIoK8sApiRbacV1(options?: Optional<k8s.RoleRefIoK8sApiRbacV1>) : k8s.RoleRefIoK8sApiRbacV1 {
  return <k8s.RoleRefIoK8sApiRbacV1>({
    kind: "RoleRef",
    apiGroup: (options && options.apiGroup) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export function subjectIoK8sApiRbacV1(options?: Optional<k8s.SubjectIoK8sApiRbacV1>) : k8s.SubjectIoK8sApiRbacV1 {
  return <k8s.SubjectIoK8sApiRbacV1>({
    kind: "Subject",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export function aggregationRuleIoK8sApiRbacV1beta1(options?: Optional<k8s.AggregationRuleIoK8sApiRbacV1beta1>) : k8s.AggregationRuleIoK8sApiRbacV1beta1 {
  return <k8s.AggregationRuleIoK8sApiRbacV1beta1>({
  }).merge(options)
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export function clusterRoleIoK8sApiRbacV1beta1(options?: Optional<k8s.ClusterRoleIoK8sApiRbacV1beta1>) : k8s.ClusterRoleIoK8sApiRbacV1beta1 {
  return <k8s.ClusterRoleIoK8sApiRbacV1beta1>({
    apiVersion: "io.k8s.api.rbac.v1beta1",
    kind: "ClusterRole",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export function clusterRoleBindingIoK8sApiRbacV1beta1(options?: Optional<k8s.ClusterRoleBindingIoK8sApiRbacV1beta1>) : k8s.ClusterRoleBindingIoK8sApiRbacV1beta1 {
  return <k8s.ClusterRoleBindingIoK8sApiRbacV1beta1>({
    apiVersion: "io.k8s.api.rbac.v1beta1",
    kind: "ClusterRoleBinding",
    roleRef: (options && options.roleRef) || roleRefIoK8sApiRbacV1beta1(),
  }).merge(options)
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export function clusterRoleBindingListIoK8sApiRbacV1beta1(options?: Optional<k8s.ClusterRoleBindingListIoK8sApiRbacV1beta1>) : k8s.ClusterRoleBindingListIoK8sApiRbacV1beta1 {
  return <k8s.ClusterRoleBindingListIoK8sApiRbacV1beta1>({
    apiVersion: "io.k8s.api.rbac.v1beta1",
    kind: "ClusterRoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export function clusterRoleListIoK8sApiRbacV1beta1(options?: Optional<k8s.ClusterRoleListIoK8sApiRbacV1beta1>) : k8s.ClusterRoleListIoK8sApiRbacV1beta1 {
  return <k8s.ClusterRoleListIoK8sApiRbacV1beta1>({
    apiVersion: "io.k8s.api.rbac.v1beta1",
    kind: "ClusterRoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export function policyRuleIoK8sApiRbacV1beta1(options?: Optional<k8s.PolicyRuleIoK8sApiRbacV1beta1>) : k8s.PolicyRuleIoK8sApiRbacV1beta1 {
  return <k8s.PolicyRuleIoK8sApiRbacV1beta1>({
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export function roleIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleIoK8sApiRbacV1beta1>) : k8s.RoleIoK8sApiRbacV1beta1 {
  return <k8s.RoleIoK8sApiRbacV1beta1>({
    apiVersion: "io.k8s.api.rbac.v1beta1",
    kind: "Role",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export function roleBindingIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleBindingIoK8sApiRbacV1beta1>) : k8s.RoleBindingIoK8sApiRbacV1beta1 {
  return <k8s.RoleBindingIoK8sApiRbacV1beta1>({
    apiVersion: "io.k8s.api.rbac.v1beta1",
    kind: "RoleBinding",
    roleRef: (options && options.roleRef) || roleRefIoK8sApiRbacV1beta1(),
  }).merge(options)
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export function roleBindingListIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleBindingListIoK8sApiRbacV1beta1>) : k8s.RoleBindingListIoK8sApiRbacV1beta1 {
  return <k8s.RoleBindingListIoK8sApiRbacV1beta1>({
    apiVersion: "io.k8s.api.rbac.v1beta1",
    kind: "RoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleList is a collection of Roles
 */
export function roleListIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleListIoK8sApiRbacV1beta1>) : k8s.RoleListIoK8sApiRbacV1beta1 {
  return <k8s.RoleListIoK8sApiRbacV1beta1>({
    apiVersion: "io.k8s.api.rbac.v1beta1",
    kind: "RoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleRef contains information that points to the role being used
 */
export function roleRefIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleRefIoK8sApiRbacV1beta1>) : k8s.RoleRefIoK8sApiRbacV1beta1 {
  return <k8s.RoleRefIoK8sApiRbacV1beta1>({
    kind: "RoleRef",
    apiGroup: (options && options.apiGroup) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export function subjectIoK8sApiRbacV1beta1(options?: Optional<k8s.SubjectIoK8sApiRbacV1beta1>) : k8s.SubjectIoK8sApiRbacV1beta1 {
  return <k8s.SubjectIoK8sApiRbacV1beta1>({
    kind: "Subject",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export function priorityClassIoK8sApiSchedulingV1beta1(options?: Optional<k8s.PriorityClassIoK8sApiSchedulingV1beta1>) : k8s.PriorityClassIoK8sApiSchedulingV1beta1 {
  return <k8s.PriorityClassIoK8sApiSchedulingV1beta1>({
    apiVersion: "io.k8s.api.scheduling.v1beta1",
    kind: "PriorityClass",
    value: (options && options.value) || 0,
  }).merge(options)
}

/**
 * PriorityClassList is a collection of priority classes.
 */
export function priorityClassListIoK8sApiSchedulingV1beta1(options?: Optional<k8s.PriorityClassListIoK8sApiSchedulingV1beta1>) : k8s.PriorityClassListIoK8sApiSchedulingV1beta1 {
  return <k8s.PriorityClassListIoK8sApiSchedulingV1beta1>({
    apiVersion: "io.k8s.api.scheduling.v1beta1",
    kind: "PriorityClassList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export function storageClassIoK8sApiStorageV1(options?: Optional<k8s.StorageClassIoK8sApiStorageV1>) : k8s.StorageClassIoK8sApiStorageV1 {
  return <k8s.StorageClassIoK8sApiStorageV1>({
    apiVersion: "io.k8s.api.storage.v1",
    kind: "StorageClass",
    provisioner: (options && options.provisioner) || null,
  }).merge(options)
}

/**
 * StorageClassList is a collection of storage classes.
 */
export function storageClassListIoK8sApiStorageV1(options?: Optional<k8s.StorageClassListIoK8sApiStorageV1>) : k8s.StorageClassListIoK8sApiStorageV1 {
  return <k8s.StorageClassListIoK8sApiStorageV1>({
    apiVersion: "io.k8s.api.storage.v1",
    kind: "StorageClassList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export function storageClassIoK8sApiStorageV1beta1(options?: Optional<k8s.StorageClassIoK8sApiStorageV1beta1>) : k8s.StorageClassIoK8sApiStorageV1beta1 {
  return <k8s.StorageClassIoK8sApiStorageV1beta1>({
    apiVersion: "io.k8s.api.storage.v1beta1",
    kind: "StorageClass",
    provisioner: (options && options.provisioner) || null,
  }).merge(options)
}

/**
 * StorageClassList is a collection of storage classes.
 */
export function storageClassListIoK8sApiStorageV1beta1(options?: Optional<k8s.StorageClassListIoK8sApiStorageV1beta1>) : k8s.StorageClassListIoK8sApiStorageV1beta1 {
  return <k8s.StorageClassListIoK8sApiStorageV1beta1>({
    apiVersion: "io.k8s.api.storage.v1beta1",
    kind: "StorageClassList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export function volumeAttachmentIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentIoK8sApiStorageV1beta1>) : k8s.VolumeAttachmentIoK8sApiStorageV1beta1 {
  return <k8s.VolumeAttachmentIoK8sApiStorageV1beta1>({
    apiVersion: "io.k8s.api.storage.v1beta1",
    kind: "VolumeAttachment",
    spec: (options && options.spec) || volumeAttachmentSpecIoK8sApiStorageV1beta1(),
  }).merge(options)
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export function volumeAttachmentListIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentListIoK8sApiStorageV1beta1>) : k8s.VolumeAttachmentListIoK8sApiStorageV1beta1 {
  return <k8s.VolumeAttachmentListIoK8sApiStorageV1beta1>({
    apiVersion: "io.k8s.api.storage.v1beta1",
    kind: "VolumeAttachmentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export function volumeAttachmentSourceIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentSourceIoK8sApiStorageV1beta1>) : k8s.VolumeAttachmentSourceIoK8sApiStorageV1beta1 {
  return <k8s.VolumeAttachmentSourceIoK8sApiStorageV1beta1>({
  }).merge(options)
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export function volumeAttachmentSpecIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentSpecIoK8sApiStorageV1beta1>) : k8s.VolumeAttachmentSpecIoK8sApiStorageV1beta1 {
  return <k8s.VolumeAttachmentSpecIoK8sApiStorageV1beta1>({
    attacher: (options && options.attacher) || null,
    nodeName: (options && options.nodeName) || null,
    source: (options && options.source) || volumeAttachmentSourceIoK8sApiStorageV1beta1(),
  }).merge(options)
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export function volumeAttachmentStatusIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentStatusIoK8sApiStorageV1beta1>) : k8s.VolumeAttachmentStatusIoK8sApiStorageV1beta1 {
  return <k8s.VolumeAttachmentStatusIoK8sApiStorageV1beta1>({
    attached: (options && options.attached) || false,
  }).merge(options)
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export function volumeErrorIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeErrorIoK8sApiStorageV1beta1>) : k8s.VolumeErrorIoK8sApiStorageV1beta1 {
  return <k8s.VolumeErrorIoK8sApiStorageV1beta1>({
  }).merge(options)
}

/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
export function customResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    JSONPath: (options && options.JSONPath) || null,
    name: (options && options.name) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
export function customResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    apiVersion: "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1",
    kind: "CustomResourceDefinition",
    spec: (options && options.spec) || customResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(),
  }).merge(options)
}

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export function customResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export function customResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    apiVersion: "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1",
    kind: "CustomResourceDefinitionList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export function customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    kind: "CustomResourceDefinitionNames",
    plural: (options && options.plural) || null,
  }).merge(options)
}

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export function customResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    group: (options && options.group) || null,
    names: (options && options.names) || customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(),
    scope: (options && options.scope) || null,
  }).merge(options)
}

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export function customResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    acceptedNames: (options && options.acceptedNames) || customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(),
    conditions: (options && options.conditions) || [],
    storedVersions: (options && options.storedVersions) || [],
  }).merge(options)
}

export function customResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    name: (options && options.name) || null,
    served: (options && options.served) || false,
    storage: (options && options.storage) || false,
  }).merge(options)
}

/**
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 */
export function customResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
    specReplicasPath: (options && options.specReplicasPath) || null,
    statusReplicasPath: (options && options.statusReplicasPath) || null,
  }).merge(options)
}

/**
 * CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
 */
export function customResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export function customResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export function customResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.CustomResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.CustomResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export function externalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.ExternalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.ExternalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.ExternalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export function jSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.JSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.JSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 */
export function jSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.JSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.JSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
export function jSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.JSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.JSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
export function jSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.JSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.JSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

/**
 * JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array.
 */
export function jSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>) : k8s.JSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1 {
  return <k8s.JSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>({
  }).merge(options)
}

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
export function quantityIoK8sApimachineryPkgApiResource(options?: Optional<k8s.QuantityIoK8sApimachineryPkgApiResource>) : k8s.QuantityIoK8sApimachineryPkgApiResource {
  return <k8s.QuantityIoK8sApimachineryPkgApiResource>({
  }).merge(options)
}

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
export function quantity_v2IoK8sApimachineryPkgApiResource(options?: Optional<k8s.Quantity_v2IoK8sApimachineryPkgApiResource>) : k8s.Quantity_v2IoK8sApimachineryPkgApiResource {
  return <k8s.Quantity_v2IoK8sApimachineryPkgApiResource>({
  }).merge(options)
}

/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
export function aPIGroupIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIGroupIoK8sApimachineryPkgApisMetaV1>) : k8s.APIGroupIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.APIGroupIoK8sApimachineryPkgApisMetaV1>({
    apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
    kind: "APIGroup",
    name: (options && options.name) || null,
    versions: (options && options.versions) || [],
  }).merge(options)
}

/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
export function aPIGroupListIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIGroupListIoK8sApimachineryPkgApisMetaV1>) : k8s.APIGroupListIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.APIGroupListIoK8sApimachineryPkgApisMetaV1>({
    apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
    kind: "APIGroupList",
    groups: (options && options.groups) || [],
  }).merge(options)
}

/**
 * APIResource specifies the name of a resource and whether it is namespaced.
 */
export function aPIResourceIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIResourceIoK8sApimachineryPkgApisMetaV1>) : k8s.APIResourceIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.APIResourceIoK8sApimachineryPkgApisMetaV1>({
    kind: "APIResource",
    name: (options && options.name) || null,
    namespaced: (options && options.namespaced) || false,
    singularName: (options && options.singularName) || null,
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 */
export function aPIResourceListIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIResourceListIoK8sApimachineryPkgApisMetaV1>) : k8s.APIResourceListIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.APIResourceListIoK8sApimachineryPkgApisMetaV1>({
    apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
    kind: "APIResourceList",
    groupVersion: (options && options.groupVersion) || null,
    resources: (options && options.resources) || [],
  }).merge(options)
}

/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
export function aPIVersionsIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIVersionsIoK8sApimachineryPkgApisMetaV1>) : k8s.APIVersionsIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.APIVersionsIoK8sApimachineryPkgApisMetaV1>({
    apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
    kind: "APIVersions",
    serverAddressByClientCIDRs: (options && options.serverAddressByClientCIDRs) || [],
    versions: (options && options.versions) || [],
  }).merge(options)
}

/**
 * DeleteOptions may be provided when deleting an API object.
 */
export function deleteOptionsIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.DeleteOptionsIoK8sApimachineryPkgApisMetaV1>) : k8s.DeleteOptionsIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.DeleteOptionsIoK8sApimachineryPkgApisMetaV1>({
    apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
    kind: "DeleteOptions",
  }).merge(options)
}

/**
 * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
 */
export function durationIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.DurationIoK8sApimachineryPkgApisMetaV1>) : k8s.DurationIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.DurationIoK8sApimachineryPkgApisMetaV1>({
    Duration: (options && options.Duration) || 0,
  }).merge(options)
}

/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export function groupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.GroupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1>) : k8s.GroupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.GroupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1>({
    groupVersion: (options && options.groupVersion) || null,
    version: (options && options.version) || null,
  }).merge(options)
}

/**
 * Initializer is information about an initializer that has not yet completed.
 */
export function initializerIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.InitializerIoK8sApimachineryPkgApisMetaV1>) : k8s.InitializerIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.InitializerIoK8sApimachineryPkgApisMetaV1>({
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Initializers tracks the progress of initialization.
 */
export function initializersIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.InitializersIoK8sApimachineryPkgApisMetaV1>) : k8s.InitializersIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.InitializersIoK8sApimachineryPkgApisMetaV1>({
    pending: (options && options.pending) || [],
  }).merge(options)
}

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export function labelSelectorIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.LabelSelectorIoK8sApimachineryPkgApisMetaV1>) : k8s.LabelSelectorIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.LabelSelectorIoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export function labelSelectorRequirementIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.LabelSelectorRequirementIoK8sApimachineryPkgApisMetaV1>) : k8s.LabelSelectorRequirementIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.LabelSelectorRequirementIoK8sApimachineryPkgApisMetaV1>({
    key: (options && options.key) || null,
    operator: (options && options.operator) || null,
  }).merge(options)
}

/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export function listMetaIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.ListMetaIoK8sApimachineryPkgApisMetaV1>) : k8s.ListMetaIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.ListMetaIoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export function listMeta_v2IoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.ListMeta_v2IoK8sApimachineryPkgApisMetaV1>) : k8s.ListMeta_v2IoK8sApimachineryPkgApisMetaV1 {
  return <k8s.ListMeta_v2IoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * MicroTime is version of Time with microsecond level precision.
 */
export function microTimeIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.MicroTimeIoK8sApimachineryPkgApisMetaV1>) : k8s.MicroTimeIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.MicroTimeIoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
export function objectMetaIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.ObjectMetaIoK8sApimachineryPkgApisMetaV1>) : k8s.ObjectMetaIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.ObjectMetaIoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
 */
export function ownerReferenceIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.OwnerReferenceIoK8sApimachineryPkgApisMetaV1>) : k8s.OwnerReferenceIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.OwnerReferenceIoK8sApimachineryPkgApisMetaV1>({
    apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
    kind: "OwnerReference",
    name: (options && options.name) || null,
    uid: (options && options.uid) || null,
  }).merge(options)
}

/**
 * Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
 */
export function patchIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.PatchIoK8sApimachineryPkgApisMetaV1>) : k8s.PatchIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.PatchIoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export function preconditionsIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.PreconditionsIoK8sApimachineryPkgApisMetaV1>) : k8s.PreconditionsIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.PreconditionsIoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
export function serverAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.ServerAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1>) : k8s.ServerAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.ServerAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1>({
    clientCIDR: (options && options.clientCIDR) || null,
    serverAddress: (options && options.serverAddress) || null,
  }).merge(options)
}

/**
 * Status is a return value for calls that don't return other objects.
 */
export function statusIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.StatusIoK8sApimachineryPkgApisMetaV1>) : k8s.StatusIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.StatusIoK8sApimachineryPkgApisMetaV1>({
    apiVersion: "io.k8s.apimachinery.pkg.apis.meta.v1",
    kind: "Status",
  }).merge(options)
}

/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export function statusCauseIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.StatusCauseIoK8sApimachineryPkgApisMetaV1>) : k8s.StatusCauseIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.StatusCauseIoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export function statusDetailsIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.StatusDetailsIoK8sApimachineryPkgApisMetaV1>) : k8s.StatusDetailsIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.StatusDetailsIoK8sApimachineryPkgApisMetaV1>({
    kind: "StatusDetails",
  }).merge(options)
}

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 */
export function timeIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.TimeIoK8sApimachineryPkgApisMetaV1>) : k8s.TimeIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.TimeIoK8sApimachineryPkgApisMetaV1>({
  }).merge(options)
}

/**
 * Event represents a single event to a watched resource.
 */
export function watchEventIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.WatchEventIoK8sApimachineryPkgApisMetaV1>) : k8s.WatchEventIoK8sApimachineryPkgApisMetaV1 {
  return <k8s.WatchEventIoK8sApimachineryPkgApisMetaV1>({
    object: (options && options.object) || rawExtensionIoK8sApimachineryPkgRuntime(),
    type: (options && options.type) || null,
  }).merge(options)
}

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
export function rawExtensionIoK8sApimachineryPkgRuntime(options?: Optional<k8s.RawExtensionIoK8sApimachineryPkgRuntime>) : k8s.RawExtensionIoK8sApimachineryPkgRuntime {
  return <k8s.RawExtensionIoK8sApimachineryPkgRuntime>({
    Raw: (options && options.Raw) || null,
  }).merge(options)
}

/**
 * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
 */
export function intOrStringIoK8sApimachineryPkgUtilIntstr(options?: Optional<k8s.IntOrStringIoK8sApimachineryPkgUtilIntstr>) : k8s.IntOrStringIoK8sApimachineryPkgUtilIntstr {
  return <k8s.IntOrStringIoK8sApimachineryPkgUtilIntstr>({
  }).merge(options)
}

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export function infoIoK8sApimachineryPkgVersion(options?: Optional<k8s.InfoIoK8sApimachineryPkgVersion>) : k8s.InfoIoK8sApimachineryPkgVersion {
  return <k8s.InfoIoK8sApimachineryPkgVersion>({
    buildDate: (options && options.buildDate) || null,
    compiler: (options && options.compiler) || null,
    gitCommit: (options && options.gitCommit) || null,
    gitTreeState: (options && options.gitTreeState) || null,
    gitVersion: (options && options.gitVersion) || null,
    goVersion: (options && options.goVersion) || null,
    major: (options && options.major) || null,
    minor: (options && options.minor) || null,
    platform: (options && options.platform) || null,
  }).merge(options)
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export function aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1>) : k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1 {
  return <k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1>({
    apiVersion: "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1",
    kind: "APIService",
  }).merge(options)
}

export function aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1>) : k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1 {
  return <k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * APIServiceList is a list of APIService objects.
 */
export function aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1>) : k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1 {
  return <k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1>({
    apiVersion: "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1",
    kind: "APIServiceList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export function aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1>) : k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1 {
  return <k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1>({
    groupPriorityMinimum: (options && options.groupPriorityMinimum) || 0,
    service: (options && options.service) || serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1(),
    versionPriority: (options && options.versionPriority) || 0,
  }).merge(options)
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export function aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1>) : k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1 {
  return <k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1>({
  }).merge(options)
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export function serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1>) : k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1 {
  return <k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1>({
  }).merge(options)
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export function aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>) : k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 {
  return <k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>({
    apiVersion: "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1",
    kind: "APIService",
  }).merge(options)
}

export function aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>) : k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 {
  return <k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>({
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * APIServiceList is a list of APIService objects.
 */
export function aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>) : k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 {
  return <k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>({
    apiVersion: "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1",
    kind: "APIServiceList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export function aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>) : k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 {
  return <k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>({
    groupPriorityMinimum: (options && options.groupPriorityMinimum) || 0,
    service: (options && options.service) || serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(),
    versionPriority: (options && options.versionPriority) || 0,
  }).merge(options)
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export function aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>) : k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 {
  return <k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>({
  }).merge(options)
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export function serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>) : k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1 {
  return <k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource instead.
 */
export function aWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.AWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.AWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Affinity instead.
 */
export function affinityIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AffinityIoK8sKubernetesPkgApiV1>) : k8s.AffinityIoK8sKubernetesPkgApiV1 {
  return <k8s.AffinityIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.AttachedVolume instead.
 */
export function attachedVolumeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AttachedVolumeIoK8sKubernetesPkgApiV1>) : k8s.AttachedVolumeIoK8sKubernetesPkgApiV1 {
  return <k8s.AttachedVolumeIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.AzureDiskVolumeSource instead.
 */
export function azureDiskVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AzureDiskVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.AzureDiskVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.AzureDiskVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.AzureFileVolumeSource instead.
 */
export function azureFileVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AzureFileVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.AzureFileVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.AzureFileVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Binding instead.
 */
export function bindingIoK8sKubernetesPkgApiV1(options?: Optional<k8s.BindingIoK8sKubernetesPkgApiV1>) : k8s.BindingIoK8sKubernetesPkgApiV1 {
  return <k8s.BindingIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Capabilities instead.
 */
export function capabilitiesIoK8sKubernetesPkgApiV1(options?: Optional<k8s.CapabilitiesIoK8sKubernetesPkgApiV1>) : k8s.CapabilitiesIoK8sKubernetesPkgApiV1 {
  return <k8s.CapabilitiesIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.CephFSVolumeSource instead.
 */
export function cephFSVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.CephFSVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.CephFSVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.CephFSVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.CinderVolumeSource instead.
 */
export function cinderVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.CinderVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.CinderVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.CinderVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentCondition instead.
 */
export function componentConditionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ComponentConditionIoK8sKubernetesPkgApiV1>) : k8s.ComponentConditionIoK8sKubernetesPkgApiV1 {
  return <k8s.ComponentConditionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentStatus instead.
 */
export function componentStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ComponentStatusIoK8sKubernetesPkgApiV1>) : k8s.ComponentStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.ComponentStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentStatusList instead.
 */
export function componentStatusListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ComponentStatusListIoK8sKubernetesPkgApiV1>) : k8s.ComponentStatusListIoK8sKubernetesPkgApiV1 {
  return <k8s.ComponentStatusListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMap instead.
 */
export function configMapIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapIoK8sKubernetesPkgApiV1>) : k8s.ConfigMapIoK8sKubernetesPkgApiV1 {
  return <k8s.ConfigMapIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapEnvSource instead.
 */
export function configMapEnvSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapEnvSourceIoK8sKubernetesPkgApiV1>) : k8s.ConfigMapEnvSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.ConfigMapEnvSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapKeySelector instead.
 */
export function configMapKeySelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapKeySelectorIoK8sKubernetesPkgApiV1>) : k8s.ConfigMapKeySelectorIoK8sKubernetesPkgApiV1 {
  return <k8s.ConfigMapKeySelectorIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapList instead.
 */
export function configMapListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapListIoK8sKubernetesPkgApiV1>) : k8s.ConfigMapListIoK8sKubernetesPkgApiV1 {
  return <k8s.ConfigMapListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapProjection instead.
 */
export function configMapProjectionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapProjectionIoK8sKubernetesPkgApiV1>) : k8s.ConfigMapProjectionIoK8sKubernetesPkgApiV1 {
  return <k8s.ConfigMapProjectionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapVolumeSource instead.
 */
export function configMapVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.ConfigMapVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.ConfigMapVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Container instead.
 */
export function containerIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerIoK8sKubernetesPkgApiV1>) : k8s.ContainerIoK8sKubernetesPkgApiV1 {
  return <k8s.ContainerIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerImage instead.
 */
export function containerImageIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerImageIoK8sKubernetesPkgApiV1>) : k8s.ContainerImageIoK8sKubernetesPkgApiV1 {
  return <k8s.ContainerImageIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerPort instead.
 */
export function containerPortIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerPortIoK8sKubernetesPkgApiV1>) : k8s.ContainerPortIoK8sKubernetesPkgApiV1 {
  return <k8s.ContainerPortIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerState instead.
 */
export function containerStateIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStateIoK8sKubernetesPkgApiV1>) : k8s.ContainerStateIoK8sKubernetesPkgApiV1 {
  return <k8s.ContainerStateIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateRunning instead.
 */
export function containerStateRunningIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStateRunningIoK8sKubernetesPkgApiV1>) : k8s.ContainerStateRunningIoK8sKubernetesPkgApiV1 {
  return <k8s.ContainerStateRunningIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateTerminated instead.
 */
export function containerStateTerminatedIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStateTerminatedIoK8sKubernetesPkgApiV1>) : k8s.ContainerStateTerminatedIoK8sKubernetesPkgApiV1 {
  return <k8s.ContainerStateTerminatedIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateWaiting instead.
 */
export function containerStateWaitingIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStateWaitingIoK8sKubernetesPkgApiV1>) : k8s.ContainerStateWaitingIoK8sKubernetesPkgApiV1 {
  return <k8s.ContainerStateWaitingIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStatus instead.
 */
export function containerStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStatusIoK8sKubernetesPkgApiV1>) : k8s.ContainerStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.ContainerStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.DaemonEndpoint instead.
 */
export function daemonEndpointIoK8sKubernetesPkgApiV1(options?: Optional<k8s.DaemonEndpointIoK8sKubernetesPkgApiV1>) : k8s.DaemonEndpointIoK8sKubernetesPkgApiV1 {
  return <k8s.DaemonEndpointIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIProjection instead.
 */
export function downwardAPIProjectionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.DownwardAPIProjectionIoK8sKubernetesPkgApiV1>) : k8s.DownwardAPIProjectionIoK8sKubernetesPkgApiV1 {
  return <k8s.DownwardAPIProjectionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIVolumeFile instead.
 */
export function downwardAPIVolumeFileIoK8sKubernetesPkgApiV1(options?: Optional<k8s.DownwardAPIVolumeFileIoK8sKubernetesPkgApiV1>) : k8s.DownwardAPIVolumeFileIoK8sKubernetesPkgApiV1 {
  return <k8s.DownwardAPIVolumeFileIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIVolumeSource instead.
 */
export function downwardAPIVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.DownwardAPIVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.DownwardAPIVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.DownwardAPIVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EmptyDirVolumeSource instead.
 */
export function emptyDirVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EmptyDirVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.EmptyDirVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.EmptyDirVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointAddress instead.
 */
export function endpointAddressIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointAddressIoK8sKubernetesPkgApiV1>) : k8s.EndpointAddressIoK8sKubernetesPkgApiV1 {
  return <k8s.EndpointAddressIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointPort instead.
 */
export function endpointPortIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointPortIoK8sKubernetesPkgApiV1>) : k8s.EndpointPortIoK8sKubernetesPkgApiV1 {
  return <k8s.EndpointPortIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointSubset instead.
 */
export function endpointSubsetIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointSubsetIoK8sKubernetesPkgApiV1>) : k8s.EndpointSubsetIoK8sKubernetesPkgApiV1 {
  return <k8s.EndpointSubsetIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Endpoints instead.
 */
export function endpointsIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointsIoK8sKubernetesPkgApiV1>) : k8s.EndpointsIoK8sKubernetesPkgApiV1 {
  return <k8s.EndpointsIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointsList instead.
 */
export function endpointsListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointsListIoK8sKubernetesPkgApiV1>) : k8s.EndpointsListIoK8sKubernetesPkgApiV1 {
  return <k8s.EndpointsListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvFromSource instead.
 */
export function envFromSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EnvFromSourceIoK8sKubernetesPkgApiV1>) : k8s.EnvFromSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.EnvFromSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvVar instead.
 */
export function envVarIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EnvVarIoK8sKubernetesPkgApiV1>) : k8s.EnvVarIoK8sKubernetesPkgApiV1 {
  return <k8s.EnvVarIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvVarSource instead.
 */
export function envVarSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EnvVarSourceIoK8sKubernetesPkgApiV1>) : k8s.EnvVarSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.EnvVarSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Event instead.
 */
export function eventIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EventIoK8sKubernetesPkgApiV1>) : k8s.EventIoK8sKubernetesPkgApiV1 {
  return <k8s.EventIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EventList instead.
 */
export function eventListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EventListIoK8sKubernetesPkgApiV1>) : k8s.EventListIoK8sKubernetesPkgApiV1 {
  return <k8s.EventListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.EventSource instead.
 */
export function eventSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EventSourceIoK8sKubernetesPkgApiV1>) : k8s.EventSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.EventSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ExecAction instead.
 */
export function execActionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ExecActionIoK8sKubernetesPkgApiV1>) : k8s.ExecActionIoK8sKubernetesPkgApiV1 {
  return <k8s.ExecActionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.FCVolumeSource instead.
 */
export function fCVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.FCVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.FCVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.FCVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.FlexVolumeSource instead.
 */
export function flexVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.FlexVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.FlexVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.FlexVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.FlockerVolumeSource instead.
 */
export function flockerVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.FlockerVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.FlockerVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.FlockerVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.GCEPersistentDiskVolumeSource instead.
 */
export function gCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.GCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.GCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.GCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.GitRepoVolumeSource instead.
 */
export function gitRepoVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.GitRepoVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.GitRepoVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.GitRepoVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.GlusterfsVolumeSource instead.
 */
export function glusterfsVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.GlusterfsVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.GlusterfsVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.GlusterfsVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.HTTPGetAction instead.
 */
export function hTTPGetActionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HTTPGetActionIoK8sKubernetesPkgApiV1>) : k8s.HTTPGetActionIoK8sKubernetesPkgApiV1 {
  return <k8s.HTTPGetActionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.HTTPHeader instead.
 */
export function hTTPHeaderIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HTTPHeaderIoK8sKubernetesPkgApiV1>) : k8s.HTTPHeaderIoK8sKubernetesPkgApiV1 {
  return <k8s.HTTPHeaderIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Handler instead.
 */
export function handlerIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HandlerIoK8sKubernetesPkgApiV1>) : k8s.HandlerIoK8sKubernetesPkgApiV1 {
  return <k8s.HandlerIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.HostAlias instead.
 */
export function hostAliasIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HostAliasIoK8sKubernetesPkgApiV1>) : k8s.HostAliasIoK8sKubernetesPkgApiV1 {
  return <k8s.HostAliasIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.HostPathVolumeSource instead.
 */
export function hostPathVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HostPathVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.HostPathVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.HostPathVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ISCSIVolumeSource instead.
 */
export function iSCSIVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ISCSIVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.ISCSIVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.ISCSIVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.KeyToPath instead.
 */
export function keyToPathIoK8sKubernetesPkgApiV1(options?: Optional<k8s.KeyToPathIoK8sKubernetesPkgApiV1>) : k8s.KeyToPathIoK8sKubernetesPkgApiV1 {
  return <k8s.KeyToPathIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Lifecycle instead.
 */
export function lifecycleIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LifecycleIoK8sKubernetesPkgApiV1>) : k8s.LifecycleIoK8sKubernetesPkgApiV1 {
  return <k8s.LifecycleIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRange instead.
 */
export function limitRangeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LimitRangeIoK8sKubernetesPkgApiV1>) : k8s.LimitRangeIoK8sKubernetesPkgApiV1 {
  return <k8s.LimitRangeIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeItem instead.
 */
export function limitRangeItemIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LimitRangeItemIoK8sKubernetesPkgApiV1>) : k8s.LimitRangeItemIoK8sKubernetesPkgApiV1 {
  return <k8s.LimitRangeItemIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeList instead.
 */
export function limitRangeListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LimitRangeListIoK8sKubernetesPkgApiV1>) : k8s.LimitRangeListIoK8sKubernetesPkgApiV1 {
  return <k8s.LimitRangeListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeSpec instead.
 */
export function limitRangeSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LimitRangeSpecIoK8sKubernetesPkgApiV1>) : k8s.LimitRangeSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.LimitRangeSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.LoadBalancerIngress instead.
 */
export function loadBalancerIngressIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LoadBalancerIngressIoK8sKubernetesPkgApiV1>) : k8s.LoadBalancerIngressIoK8sKubernetesPkgApiV1 {
  return <k8s.LoadBalancerIngressIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.LoadBalancerStatus instead.
 */
export function loadBalancerStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LoadBalancerStatusIoK8sKubernetesPkgApiV1>) : k8s.LoadBalancerStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.LoadBalancerStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.LocalObjectReference instead.
 */
export function localObjectReferenceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LocalObjectReferenceIoK8sKubernetesPkgApiV1>) : k8s.LocalObjectReferenceIoK8sKubernetesPkgApiV1 {
  return <k8s.LocalObjectReferenceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.LocalVolumeSource instead.
 */
export function localVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LocalVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.LocalVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.LocalVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NFSVolumeSource instead.
 */
export function nFSVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NFSVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.NFSVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.NFSVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Namespace instead.
 */
export function namespaceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NamespaceIoK8sKubernetesPkgApiV1>) : k8s.NamespaceIoK8sKubernetesPkgApiV1 {
  return <k8s.NamespaceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceList instead.
 */
export function namespaceListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NamespaceListIoK8sKubernetesPkgApiV1>) : k8s.NamespaceListIoK8sKubernetesPkgApiV1 {
  return <k8s.NamespaceListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceSpec instead.
 */
export function namespaceSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NamespaceSpecIoK8sKubernetesPkgApiV1>) : k8s.NamespaceSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.NamespaceSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceStatus instead.
 */
export function namespaceStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NamespaceStatusIoK8sKubernetesPkgApiV1>) : k8s.NamespaceStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.NamespaceStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Node instead.
 */
export function nodeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeIoK8sKubernetesPkgApiV1>) : k8s.NodeIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeAddress instead.
 */
export function nodeAddressIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeAddressIoK8sKubernetesPkgApiV1>) : k8s.NodeAddressIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeAddressIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeAffinity instead.
 */
export function nodeAffinityIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeAffinityIoK8sKubernetesPkgApiV1>) : k8s.NodeAffinityIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeAffinityIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeCondition instead.
 */
export function nodeConditionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeConditionIoK8sKubernetesPkgApiV1>) : k8s.NodeConditionIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeConditionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeDaemonEndpoints instead.
 */
export function nodeDaemonEndpointsIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeDaemonEndpointsIoK8sKubernetesPkgApiV1>) : k8s.NodeDaemonEndpointsIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeDaemonEndpointsIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeList instead.
 */
export function nodeListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeListIoK8sKubernetesPkgApiV1>) : k8s.NodeListIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelector instead.
 */
export function nodeSelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSelectorIoK8sKubernetesPkgApiV1>) : k8s.NodeSelectorIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeSelectorIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelectorRequirement instead.
 */
export function nodeSelectorRequirementIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSelectorRequirementIoK8sKubernetesPkgApiV1>) : k8s.NodeSelectorRequirementIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeSelectorRequirementIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelectorTerm instead.
 */
export function nodeSelectorTermIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSelectorTermIoK8sKubernetesPkgApiV1>) : k8s.NodeSelectorTermIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeSelectorTermIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSpec instead.
 */
export function nodeSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSpecIoK8sKubernetesPkgApiV1>) : k8s.NodeSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeStatus instead.
 */
export function nodeStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeStatusIoK8sKubernetesPkgApiV1>) : k8s.NodeStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSystemInfo instead.
 */
export function nodeSystemInfoIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSystemInfoIoK8sKubernetesPkgApiV1>) : k8s.NodeSystemInfoIoK8sKubernetesPkgApiV1 {
  return <k8s.NodeSystemInfoIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ObjectFieldSelector instead.
 */
export function objectFieldSelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ObjectFieldSelectorIoK8sKubernetesPkgApiV1>) : k8s.ObjectFieldSelectorIoK8sKubernetesPkgApiV1 {
  return <k8s.ObjectFieldSelectorIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ObjectReference instead.
 */
export function objectReferenceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ObjectReferenceIoK8sKubernetesPkgApiV1>) : k8s.ObjectReferenceIoK8sKubernetesPkgApiV1 {
  return <k8s.ObjectReferenceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolume instead.
 */
export function persistentVolumeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaim instead.
 */
export function persistentVolumeClaimIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeClaimIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeClaimIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimList instead.
 */
export function persistentVolumeClaimListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimListIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeClaimListIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeClaimListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimSpec instead.
 */
export function persistentVolumeClaimSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimSpecIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeClaimSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeClaimSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimStatus instead.
 */
export function persistentVolumeClaimStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimStatusIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeClaimStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeClaimStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource instead.
 */
export function persistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeList instead.
 */
export function persistentVolumeListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeListIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeListIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeSpec instead.
 */
export function persistentVolumeSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeSpecIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeStatus instead.
 */
export function persistentVolumeStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeStatusIoK8sKubernetesPkgApiV1>) : k8s.PersistentVolumeStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.PersistentVolumeStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource instead.
 */
export function photonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PhotonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.PhotonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.PhotonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Pod instead.
 */
export function podIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodIoK8sKubernetesPkgApiV1>) : k8s.PodIoK8sKubernetesPkgApiV1 {
  return <k8s.PodIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAffinity instead.
 */
export function podAffinityIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodAffinityIoK8sKubernetesPkgApiV1>) : k8s.PodAffinityIoK8sKubernetesPkgApiV1 {
  return <k8s.PodAffinityIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAffinityTerm instead.
 */
export function podAffinityTermIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodAffinityTermIoK8sKubernetesPkgApiV1>) : k8s.PodAffinityTermIoK8sKubernetesPkgApiV1 {
  return <k8s.PodAffinityTermIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAntiAffinity instead.
 */
export function podAntiAffinityIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodAntiAffinityIoK8sKubernetesPkgApiV1>) : k8s.PodAntiAffinityIoK8sKubernetesPkgApiV1 {
  return <k8s.PodAntiAffinityIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodCondition instead.
 */
export function podConditionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodConditionIoK8sKubernetesPkgApiV1>) : k8s.PodConditionIoK8sKubernetesPkgApiV1 {
  return <k8s.PodConditionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodList instead.
 */
export function podListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodListIoK8sKubernetesPkgApiV1>) : k8s.PodListIoK8sKubernetesPkgApiV1 {
  return <k8s.PodListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodSecurityContext instead.
 */
export function podSecurityContextIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodSecurityContextIoK8sKubernetesPkgApiV1>) : k8s.PodSecurityContextIoK8sKubernetesPkgApiV1 {
  return <k8s.PodSecurityContextIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodSpec instead.
 */
export function podSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodSpecIoK8sKubernetesPkgApiV1>) : k8s.PodSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.PodSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodStatus instead.
 */
export function podStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodStatusIoK8sKubernetesPkgApiV1>) : k8s.PodStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.PodStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplate instead.
 */
export function podTemplateIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodTemplateIoK8sKubernetesPkgApiV1>) : k8s.PodTemplateIoK8sKubernetesPkgApiV1 {
  return <k8s.PodTemplateIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplateList instead.
 */
export function podTemplateListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodTemplateListIoK8sKubernetesPkgApiV1>) : k8s.PodTemplateListIoK8sKubernetesPkgApiV1 {
  return <k8s.PodTemplateListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplateSpec instead.
 */
export function podTemplateSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodTemplateSpecIoK8sKubernetesPkgApiV1>) : k8s.PodTemplateSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.PodTemplateSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PortworxVolumeSource instead.
 */
export function portworxVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PortworxVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.PortworxVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.PortworxVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.PreferredSchedulingTerm instead.
 */
export function preferredSchedulingTermIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PreferredSchedulingTermIoK8sKubernetesPkgApiV1>) : k8s.PreferredSchedulingTermIoK8sKubernetesPkgApiV1 {
  return <k8s.PreferredSchedulingTermIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Probe instead.
 */
export function probeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ProbeIoK8sKubernetesPkgApiV1>) : k8s.ProbeIoK8sKubernetesPkgApiV1 {
  return <k8s.ProbeIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ProjectedVolumeSource instead.
 */
export function projectedVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ProjectedVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.ProjectedVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.ProjectedVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.QuobyteVolumeSource instead.
 */
export function quobyteVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.QuobyteVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.QuobyteVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.QuobyteVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.RBDVolumeSource instead.
 */
export function rBDVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.RBDVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.RBDVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.RBDVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationController instead.
 */
export function replicationControllerIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerIoK8sKubernetesPkgApiV1>) : k8s.ReplicationControllerIoK8sKubernetesPkgApiV1 {
  return <k8s.ReplicationControllerIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerCondition instead.
 */
export function replicationControllerConditionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerConditionIoK8sKubernetesPkgApiV1>) : k8s.ReplicationControllerConditionIoK8sKubernetesPkgApiV1 {
  return <k8s.ReplicationControllerConditionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerList instead.
 */
export function replicationControllerListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerListIoK8sKubernetesPkgApiV1>) : k8s.ReplicationControllerListIoK8sKubernetesPkgApiV1 {
  return <k8s.ReplicationControllerListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerSpec instead.
 */
export function replicationControllerSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerSpecIoK8sKubernetesPkgApiV1>) : k8s.ReplicationControllerSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.ReplicationControllerSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerStatus instead.
 */
export function replicationControllerStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerStatusIoK8sKubernetesPkgApiV1>) : k8s.ReplicationControllerStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.ReplicationControllerStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceFieldSelector instead.
 */
export function resourceFieldSelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceFieldSelectorIoK8sKubernetesPkgApiV1>) : k8s.ResourceFieldSelectorIoK8sKubernetesPkgApiV1 {
  return <k8s.ResourceFieldSelectorIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuota instead.
 */
export function resourceQuotaIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceQuotaIoK8sKubernetesPkgApiV1>) : k8s.ResourceQuotaIoK8sKubernetesPkgApiV1 {
  return <k8s.ResourceQuotaIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaList instead.
 */
export function resourceQuotaListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceQuotaListIoK8sKubernetesPkgApiV1>) : k8s.ResourceQuotaListIoK8sKubernetesPkgApiV1 {
  return <k8s.ResourceQuotaListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaSpec instead.
 */
export function resourceQuotaSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceQuotaSpecIoK8sKubernetesPkgApiV1>) : k8s.ResourceQuotaSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.ResourceQuotaSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaStatus instead.
 */
export function resourceQuotaStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceQuotaStatusIoK8sKubernetesPkgApiV1>) : k8s.ResourceQuotaStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.ResourceQuotaStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceRequirements instead.
 */
export function resourceRequirementsIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceRequirementsIoK8sKubernetesPkgApiV1>) : k8s.ResourceRequirementsIoK8sKubernetesPkgApiV1 {
  return <k8s.ResourceRequirementsIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.SELinuxOptions instead.
 */
export function sELinuxOptionsIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SELinuxOptionsIoK8sKubernetesPkgApiV1>) : k8s.SELinuxOptionsIoK8sKubernetesPkgApiV1 {
  return <k8s.SELinuxOptionsIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ScaleIOVolumeSource instead.
 */
export function scaleIOVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ScaleIOVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.ScaleIOVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.ScaleIOVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Secret instead.
 */
export function secretIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretIoK8sKubernetesPkgApiV1>) : k8s.SecretIoK8sKubernetesPkgApiV1 {
  return <k8s.SecretIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretEnvSource instead.
 */
export function secretEnvSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretEnvSourceIoK8sKubernetesPkgApiV1>) : k8s.SecretEnvSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.SecretEnvSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretKeySelector instead.
 */
export function secretKeySelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretKeySelectorIoK8sKubernetesPkgApiV1>) : k8s.SecretKeySelectorIoK8sKubernetesPkgApiV1 {
  return <k8s.SecretKeySelectorIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretList instead.
 */
export function secretListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretListIoK8sKubernetesPkgApiV1>) : k8s.SecretListIoK8sKubernetesPkgApiV1 {
  return <k8s.SecretListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretProjection instead.
 */
export function secretProjectionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretProjectionIoK8sKubernetesPkgApiV1>) : k8s.SecretProjectionIoK8sKubernetesPkgApiV1 {
  return <k8s.SecretProjectionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretVolumeSource instead.
 */
export function secretVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.SecretVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.SecretVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.SecurityContext instead.
 */
export function securityContextIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecurityContextIoK8sKubernetesPkgApiV1>) : k8s.SecurityContextIoK8sKubernetesPkgApiV1 {
  return <k8s.SecurityContextIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Service instead.
 */
export function serviceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceIoK8sKubernetesPkgApiV1>) : k8s.ServiceIoK8sKubernetesPkgApiV1 {
  return <k8s.ServiceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceAccount instead.
 */
export function serviceAccountIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceAccountIoK8sKubernetesPkgApiV1>) : k8s.ServiceAccountIoK8sKubernetesPkgApiV1 {
  return <k8s.ServiceAccountIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceAccountList instead.
 */
export function serviceAccountListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceAccountListIoK8sKubernetesPkgApiV1>) : k8s.ServiceAccountListIoK8sKubernetesPkgApiV1 {
  return <k8s.ServiceAccountListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceList instead.
 */
export function serviceListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceListIoK8sKubernetesPkgApiV1>) : k8s.ServiceListIoK8sKubernetesPkgApiV1 {
  return <k8s.ServiceListIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ServicePort instead.
 */
export function servicePortIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServicePortIoK8sKubernetesPkgApiV1>) : k8s.ServicePortIoK8sKubernetesPkgApiV1 {
  return <k8s.ServicePortIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceSpec instead.
 */
export function serviceSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceSpecIoK8sKubernetesPkgApiV1>) : k8s.ServiceSpecIoK8sKubernetesPkgApiV1 {
  return <k8s.ServiceSpecIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceStatus instead.
 */
export function serviceStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceStatusIoK8sKubernetesPkgApiV1>) : k8s.ServiceStatusIoK8sKubernetesPkgApiV1 {
  return <k8s.ServiceStatusIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.StorageOSPersistentVolumeSource instead.
 */
export function storageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.StorageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.StorageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.StorageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.StorageOSVolumeSource instead.
 */
export function storageOSVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.StorageOSVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.StorageOSVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.StorageOSVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.TCPSocketAction instead.
 */
export function tCPSocketActionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.TCPSocketActionIoK8sKubernetesPkgApiV1>) : k8s.TCPSocketActionIoK8sKubernetesPkgApiV1 {
  return <k8s.TCPSocketActionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Taint instead.
 */
export function taintIoK8sKubernetesPkgApiV1(options?: Optional<k8s.TaintIoK8sKubernetesPkgApiV1>) : k8s.TaintIoK8sKubernetesPkgApiV1 {
  return <k8s.TaintIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Toleration instead.
 */
export function tolerationIoK8sKubernetesPkgApiV1(options?: Optional<k8s.TolerationIoK8sKubernetesPkgApiV1>) : k8s.TolerationIoK8sKubernetesPkgApiV1 {
  return <k8s.TolerationIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.Volume instead.
 */
export function volumeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.VolumeIoK8sKubernetesPkgApiV1>) : k8s.VolumeIoK8sKubernetesPkgApiV1 {
  return <k8s.VolumeIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.VolumeMount instead.
 */
export function volumeMountIoK8sKubernetesPkgApiV1(options?: Optional<k8s.VolumeMountIoK8sKubernetesPkgApiV1>) : k8s.VolumeMountIoK8sKubernetesPkgApiV1 {
  return <k8s.VolumeMountIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.VolumeProjection instead.
 */
export function volumeProjectionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.VolumeProjectionIoK8sKubernetesPkgApiV1>) : k8s.VolumeProjectionIoK8sKubernetesPkgApiV1 {
  return <k8s.VolumeProjectionIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource instead.
 */
export function vsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.VsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1>) : k8s.VsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1 {
  return <k8s.VsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.core.v1.WeightedPodAffinityTerm instead.
 */
export function weightedPodAffinityTermIoK8sKubernetesPkgApiV1(options?: Optional<k8s.WeightedPodAffinityTermIoK8sKubernetesPkgApiV1>) : k8s.WeightedPodAffinityTermIoK8sKubernetesPkgApiV1 {
  return <k8s.WeightedPodAffinityTermIoK8sKubernetesPkgApiV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ControllerRevision instead.
 */
export function controllerRevisionIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ControllerRevisionIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.ControllerRevisionIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.ControllerRevisionIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ControllerRevisionList instead.
 */
export function controllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ControllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.ControllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.ControllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.Deployment instead.
 */
export function deploymentIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.DeploymentIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.DeploymentIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentCondition instead.
 */
export function deploymentConditionIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentConditionIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.DeploymentConditionIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.DeploymentConditionIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentList instead.
 */
export function deploymentListIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentListIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.DeploymentListIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.DeploymentListIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentRollback instead.
 */
export function deploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.DeploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.DeploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentSpec instead.
 */
export function deploymentSpecIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentSpecIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.DeploymentSpecIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.DeploymentSpecIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentStatus instead.
 */
export function deploymentStatusIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentStatusIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.DeploymentStatusIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.DeploymentStatusIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentStrategy instead.
 */
export function deploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.DeploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.DeploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollbackConfig instead.
 */
export function rollbackConfigIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.RollbackConfigIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.RollbackConfigIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.RollbackConfigIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollingUpdateDeployment instead.
 */
export function rollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollingUpdateStatefulSetStrategy instead.
 */
export function rollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.RollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.RollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.RollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.Scale instead.
 */
export function scaleIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ScaleIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.ScaleIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.ScaleIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ScaleSpec instead.
 */
export function scaleSpecIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ScaleSpecIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.ScaleSpecIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.ScaleSpecIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ScaleStatus instead.
 */
export function scaleStatusIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ScaleStatusIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.ScaleStatusIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.ScaleStatusIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSet instead.
 */
export function statefulSetIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.StatefulSetIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.StatefulSetIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetList instead.
 */
export function statefulSetListIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetListIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.StatefulSetListIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.StatefulSetListIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetSpec instead.
 */
export function statefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.StatefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.StatefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetStatus instead.
 */
export function statefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.StatefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.StatefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetUpdateStrategy instead.
 */
export function statefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1>) : k8s.StatefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1 {
  return <k8s.StatefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReview instead.
 */
export function tokenReviewIoK8sKubernetesPkgApisAuthenticationV1(options?: Optional<k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1>) : k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1 {
  return <k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReviewSpec instead.
 */
export function tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1(options?: Optional<k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1>) : k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1 {
  return <k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReviewStatus instead.
 */
export function tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1(options?: Optional<k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1>) : k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1 {
  return <k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authentication.v1.UserInfo instead.
 */
export function userInfoIoK8sKubernetesPkgApisAuthenticationV1(options?: Optional<k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1>) : k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1 {
  return <k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReview instead.
 */
export function tokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1(options?: Optional<k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1>) : k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1 {
  return <k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReviewSpec instead.
 */
export function tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1(options?: Optional<k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1>) : k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1 {
  return <k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReviewStatus instead.
 */
export function tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1(options?: Optional<k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1>) : k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1 {
  return <k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.UserInfo instead.
 */
export function userInfoIoK8sKubernetesPkgApisAuthenticationV1beta1(options?: Optional<k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1beta1>) : k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1beta1 {
  return <k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1.LocalSubjectAccessReview instead.
 */
export function localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>) : k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1 {
  return <k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1.NonResourceAttributes instead.
 */
export function nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1>) : k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1 {
  return <k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1.ResourceAttributes instead.
 */
export function resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1>) : k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1 {
  return <k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SelfSubjectAccessReview instead.
 */
export function selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>) : k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1 {
  return <k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec instead.
 */
export function selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1>) : k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1 {
  return <k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReview instead.
 */
export function subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>) : k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1 {
  return <k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReviewSpec instead.
 */
export function subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1>) : k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1 {
  return <k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReviewStatus instead.
 */
export function subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1>) : k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1 {
  return <k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview instead.
 */
export function localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>) : k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1 {
  return <k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.NonResourceAttributes instead.
 */
export function nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1>) : k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1 {
  return <k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.ResourceAttributes instead.
 */
export function resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1>) : k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1 {
  return <k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview instead.
 */
export function selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>) : k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1 {
  return <k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SelfSubjectAccessReviewSpec instead.
 */
export function selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1>) : k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1 {
  return <k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReview instead.
 */
export function subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>) : k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1 {
  return <k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec instead.
 */
export function subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1>) : k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1 {
  return <k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReviewStatus instead.
 */
export function subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1>) : k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1 {
  return <k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.CrossVersionObjectReference instead.
 */
export function crossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.CrossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1>) : k8s.CrossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1 {
  return <k8s.CrossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler instead.
 */
export function horizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1>) : k8s.HorizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1 {
  return <k8s.HorizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList instead.
 */
export function horizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1>) : k8s.HorizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1 {
  return <k8s.HorizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec instead.
 */
export function horizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1>) : k8s.HorizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1 {
  return <k8s.HorizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus instead.
 */
export function horizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1>) : k8s.HorizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1 {
  return <k8s.HorizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.Scale instead.
 */
export function scaleIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.ScaleIoK8sKubernetesPkgApisAutoscalingV1>) : k8s.ScaleIoK8sKubernetesPkgApisAutoscalingV1 {
  return <k8s.ScaleIoK8sKubernetesPkgApisAutoscalingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.ScaleSpec instead.
 */
export function scaleSpecIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.ScaleSpecIoK8sKubernetesPkgApisAutoscalingV1>) : k8s.ScaleSpecIoK8sKubernetesPkgApisAutoscalingV1 {
  return <k8s.ScaleSpecIoK8sKubernetesPkgApisAutoscalingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.ScaleStatus instead.
 */
export function scaleStatusIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.ScaleStatusIoK8sKubernetesPkgApisAutoscalingV1>) : k8s.ScaleStatusIoK8sKubernetesPkgApisAutoscalingV1 {
  return <k8s.ScaleStatusIoK8sKubernetesPkgApisAutoscalingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.batch.v1.Job instead.
 */
export function jobIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobIoK8sKubernetesPkgApisBatchV1>) : k8s.JobIoK8sKubernetesPkgApisBatchV1 {
  return <k8s.JobIoK8sKubernetesPkgApisBatchV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobCondition instead.
 */
export function jobConditionIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobConditionIoK8sKubernetesPkgApisBatchV1>) : k8s.JobConditionIoK8sKubernetesPkgApisBatchV1 {
  return <k8s.JobConditionIoK8sKubernetesPkgApisBatchV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobList instead.
 */
export function jobListIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobListIoK8sKubernetesPkgApisBatchV1>) : k8s.JobListIoK8sKubernetesPkgApisBatchV1 {
  return <k8s.JobListIoK8sKubernetesPkgApisBatchV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobSpec instead.
 */
export function jobSpecIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobSpecIoK8sKubernetesPkgApisBatchV1>) : k8s.JobSpecIoK8sKubernetesPkgApisBatchV1 {
  return <k8s.JobSpecIoK8sKubernetesPkgApisBatchV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobStatus instead.
 */
export function jobStatusIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobStatusIoK8sKubernetesPkgApisBatchV1>) : k8s.JobStatusIoK8sKubernetesPkgApisBatchV1 {
  return <k8s.JobStatusIoK8sKubernetesPkgApisBatchV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequest instead.
 */
export function certificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1>) : k8s.CertificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestCondition instead.
 */
export function certificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1>) : k8s.CertificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestList instead.
 */
export function certificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1>) : k8s.CertificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec instead.
 */
export function certificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1>) : k8s.CertificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestStatus instead.
 */
export function certificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1>) : k8s.CertificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1 {
  return <k8s.CertificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSet instead.
 */
export function daemonSetIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetList instead.
 */
export function daemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DaemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DaemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetSpec instead.
 */
export function daemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DaemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DaemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetStatus instead.
 */
export function daemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DaemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DaemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetUpdateStrategy instead.
 */
export function daemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DaemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DaemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Deployment instead.
 */
export function deploymentIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DeploymentIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DeploymentIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentCondition instead.
 */
export function deploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DeploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DeploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentList instead.
 */
export function deploymentListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentListIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DeploymentListIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DeploymentListIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentRollback instead.
 */
export function deploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DeploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DeploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentSpec instead.
 */
export function deploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DeploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DeploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentStatus instead.
 */
export function deploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DeploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DeploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentStrategy instead.
 */
export function deploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.DeploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.DeploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.FSGroupStrategyOptions instead.
 */
export function fSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.FSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.FSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HTTPIngressPath instead.
 */
export function hTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.HTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.HTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.HTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HTTPIngressRuleValue instead.
 */
export function hTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.HTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.HTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.HTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HostPortRange instead.
 */
export function hostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.HostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.HostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.HostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IDRange instead.
 */
export function iDRangeIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IDRangeIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.IDRangeIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.IDRangeIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Ingress instead.
 */
export function ingressIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.IngressIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.IngressIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressBackend instead.
 */
export function ingressBackendIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressBackendIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.IngressBackendIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.IngressBackendIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressList instead.
 */
export function ingressListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressListIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.IngressListIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.IngressListIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressRule instead.
 */
export function ingressRuleIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.IngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.IngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressSpec instead.
 */
export function ingressSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressSpecIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.IngressSpecIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.IngressSpecIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressStatus instead.
 */
export function ingressStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressStatusIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.IngressStatusIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.IngressStatusIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressTLS instead.
 */
export function ingressTLSIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressTLSIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.IngressTLSIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.IngressTLSIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicy instead.
 */
export function networkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.NetworkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.NetworkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyIngressRule instead.
 */
export function networkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyList instead.
 */
export function networkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.NetworkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.NetworkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyPeer instead.
 */
export function networkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyPort instead.
 */
export function networkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.NetworkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.NetworkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicySpec instead.
 */
export function networkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.NetworkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.NetworkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicy instead.
 */
export function podSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.PodSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.PodSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicyList instead.
 */
export function podSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.PodSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.PodSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec instead.
 */
export function podSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.PodSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.PodSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSet instead.
 */
export function replicaSetIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.ReplicaSetIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.ReplicaSetIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetCondition instead.
 */
export function replicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.ReplicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.ReplicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetList instead.
 */
export function replicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.ReplicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.ReplicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetSpec instead.
 */
export function replicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.ReplicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.ReplicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetStatus instead.
 */
export function replicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.ReplicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.ReplicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollbackConfig instead.
 */
export function rollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.RollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.RollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.RollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollingUpdateDaemonSet instead.
 */
export function rollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.RollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.RollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollingUpdateDeployment instead.
 */
export function rollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RunAsUserStrategyOptions instead.
 */
export function runAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.RunAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.RunAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.SELinuxStrategyOptions instead.
 */
export function sELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.SELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.SELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Scale instead.
 */
export function scaleIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ScaleIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.ScaleIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.ScaleIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ScaleSpec instead.
 */
export function scaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ScaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.ScaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.ScaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ScaleStatus instead.
 */
export function scaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ScaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.ScaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.ScaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.SupplementalGroupsStrategyOptions instead.
 */
export function supplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>) : k8s.SupplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1 {
  return <k8s.SupplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicy instead.
 */
export function networkPolicyIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyIoK8sKubernetesPkgApisNetworkingV1>) : k8s.NetworkPolicyIoK8sKubernetesPkgApisNetworkingV1 {
  return <k8s.NetworkPolicyIoK8sKubernetesPkgApisNetworkingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyIngressRule instead.
 */
export function networkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1>) : k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1 {
  return <k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyList instead.
 */
export function networkPolicyListIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyListIoK8sKubernetesPkgApisNetworkingV1>) : k8s.NetworkPolicyListIoK8sKubernetesPkgApisNetworkingV1 {
  return <k8s.NetworkPolicyListIoK8sKubernetesPkgApisNetworkingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyPeer instead.
 */
export function networkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1>) : k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1 {
  return <k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyPort instead.
 */
export function networkPolicyPortIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyPortIoK8sKubernetesPkgApisNetworkingV1>) : k8s.NetworkPolicyPortIoK8sKubernetesPkgApisNetworkingV1 {
  return <k8s.NetworkPolicyPortIoK8sKubernetesPkgApisNetworkingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicySpec instead.
 */
export function networkPolicySpecIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicySpecIoK8sKubernetesPkgApisNetworkingV1>) : k8s.NetworkPolicySpecIoK8sKubernetesPkgApisNetworkingV1 {
  return <k8s.NetworkPolicySpecIoK8sKubernetesPkgApisNetworkingV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.Eviction instead.
 */
export function evictionIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.EvictionIoK8sKubernetesPkgApisPolicyV1beta1>) : k8s.EvictionIoK8sKubernetesPkgApisPolicyV1beta1 {
  return <k8s.EvictionIoK8sKubernetesPkgApisPolicyV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudget instead.
 */
export function podDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1>) : k8s.PodDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1 {
  return <k8s.PodDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetList instead.
 */
export function podDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1>) : k8s.PodDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1 {
  return <k8s.PodDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec instead.
 */
export function podDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1>) : k8s.PodDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1 {
  return <k8s.PodDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetStatus instead.
 */
export function podDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1>) : k8s.PodDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1 {
  return <k8s.PodDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRole instead.
 */
export function clusterRoleIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.ClusterRoleIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.ClusterRoleIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.ClusterRoleIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleBinding instead.
 */
export function clusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.ClusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.ClusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.ClusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleBindingList instead.
 */
export function clusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.ClusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.ClusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.ClusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleList instead.
 */
export function clusterRoleListIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.ClusterRoleListIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.ClusterRoleListIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.ClusterRoleListIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.PolicyRule instead.
 */
export function policyRuleIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.PolicyRuleIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.PolicyRuleIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.PolicyRuleIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.Role instead.
 */
export function roleIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.RoleIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.RoleIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleBinding instead.
 */
export function roleBindingIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleBindingIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.RoleBindingIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.RoleBindingIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleBindingList instead.
 */
export function roleBindingListIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleBindingListIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.RoleBindingListIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.RoleBindingListIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleList instead.
 */
export function roleListIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleListIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.RoleListIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.RoleListIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleRef instead.
 */
export function roleRefIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleRefIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.RoleRefIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.RoleRefIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.Subject instead.
 */
export function subjectIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.SubjectIoK8sKubernetesPkgApisRbacV1beta1>) : k8s.SubjectIoK8sKubernetesPkgApisRbacV1beta1 {
  return <k8s.SubjectIoK8sKubernetesPkgApisRbacV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.storage.v1.StorageClass instead.
 */
export function storageClassIoK8sKubernetesPkgApisStorageV1(options?: Optional<k8s.StorageClassIoK8sKubernetesPkgApisStorageV1>) : k8s.StorageClassIoK8sKubernetesPkgApisStorageV1 {
  return <k8s.StorageClassIoK8sKubernetesPkgApisStorageV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.storage.v1.StorageClassList instead.
 */
export function storageClassListIoK8sKubernetesPkgApisStorageV1(options?: Optional<k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1>) : k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1 {
  return <k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.storage.v1beta1.StorageClass instead.
 */
export function storageClassIoK8sKubernetesPkgApisStorageV1beta1(options?: Optional<k8s.StorageClassIoK8sKubernetesPkgApisStorageV1beta1>) : k8s.StorageClassIoK8sKubernetesPkgApisStorageV1beta1 {
  return <k8s.StorageClassIoK8sKubernetesPkgApisStorageV1beta1>({
  }).merge(options)
}

/**
 * Deprecated. Please use io.k8s.api.storage.v1beta1.StorageClassList instead.
 */
export function storageClassListIoK8sKubernetesPkgApisStorageV1beta1(options?: Optional<k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1beta1>) : k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1beta1 {
  return <k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1beta1>({
  }).merge(options)
}

/**
 * resource usage metrics of a container.
 */
export function containerMetricsIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.ContainerMetricsIoK8sMetricsPkgApisMetricsV1beta1>) : k8s.ContainerMetricsIoK8sMetricsPkgApisMetricsV1beta1 {
  return <k8s.ContainerMetricsIoK8sMetricsPkgApisMetricsV1beta1>({
    name: (options && options.name) || null,
    usage: (options && options.usage) || null,
  }).merge(options)
}

/**
 * resource usage metrics of a node.
 */
export function nodeMetricsIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.NodeMetricsIoK8sMetricsPkgApisMetricsV1beta1>) : k8s.NodeMetricsIoK8sMetricsPkgApisMetricsV1beta1 {
  return <k8s.NodeMetricsIoK8sMetricsPkgApisMetricsV1beta1>({
    apiVersion: "io.k8s.metrics.pkg.apis.metrics.v1beta1",
    kind: "NodeMetrics",
    timestamp: (options && options.timestamp) || timeIoK8sApimachineryPkgApisMetaV1(),
    usage: (options && options.usage) || null,
    window: (options && options.window) || durationIoK8sApimachineryPkgApisMetaV1(),
  }).merge(options)
}

/**
 * NodeMetricsList is a list of NodeMetrics.
 */
export function nodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.NodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1>) : k8s.NodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1 {
  return <k8s.NodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1>({
    apiVersion: "io.k8s.metrics.pkg.apis.metrics.v1beta1",
    kind: "NodeMetricsList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * resource usage metrics of a pod.
 */
export function podMetricsIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.PodMetricsIoK8sMetricsPkgApisMetricsV1beta1>) : k8s.PodMetricsIoK8sMetricsPkgApisMetricsV1beta1 {
  return <k8s.PodMetricsIoK8sMetricsPkgApisMetricsV1beta1>({
    apiVersion: "io.k8s.metrics.pkg.apis.metrics.v1beta1",
    kind: "PodMetrics",
    containers: (options && options.containers) || [],
    timestamp: (options && options.timestamp) || timeIoK8sApimachineryPkgApisMetaV1(),
    window: (options && options.window) || durationIoK8sApimachineryPkgApisMetaV1(),
  }).merge(options)
}

/**
 * PodMetricsList is a list of PodMetrics.
 */
export function podMetricsListIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.PodMetricsListIoK8sMetricsPkgApisMetricsV1beta1>) : k8s.PodMetricsListIoK8sMetricsPkgApisMetricsV1beta1 {
  return <k8s.PodMetricsListIoK8sMetricsPkgApisMetricsV1beta1>({
    apiVersion: "io.k8s.metrics.pkg.apis.metrics.v1beta1",
    kind: "PodMetricsList",
    items: (options && options.items) || [],
  }).merge(options)
}

