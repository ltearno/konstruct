import * as k8s from './kubernetes-api'
import './core'


export type Optional<T> = {
    [P in keyof T]?: Optional<T[P]>;
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export function serviceReferenceAdmissionregistrationV1beta1(options?: Optional<k8s.ServiceReferenceAdmissionregistrationV1beta1>) : k8s.ServiceReferenceAdmissionregistrationV1beta1 {
  return (<k8s.ServiceReferenceAdmissionregistrationV1beta1>{
    name: (options && options.name) || null,
    namespace: (options && options.namespace) || null,
  }).merge(options)
}

/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 */
export function webhookClientConfigAdmissionregistrationV1beta1(options?: Optional<k8s.WebhookClientConfigAdmissionregistrationV1beta1>) : k8s.WebhookClientConfigAdmissionregistrationV1beta1 {
  return (<k8s.WebhookClientConfigAdmissionregistrationV1beta1>{
  }).merge(options)
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export function serviceReferenceApiextensionsV1beta1(options?: Optional<k8s.ServiceReferenceApiextensionsV1beta1>) : k8s.ServiceReferenceApiextensionsV1beta1 {
  return (<k8s.ServiceReferenceApiextensionsV1beta1>{
    name: (options && options.name) || null,
    namespace: (options && options.namespace) || null,
  }).merge(options)
}

/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook. It has the same field as admissionregistration.v1beta1.WebhookClientConfig.
 */
export function webhookClientConfigApiextensionsV1beta1(options?: Optional<k8s.WebhookClientConfigApiextensionsV1beta1>) : k8s.WebhookClientConfigApiextensionsV1beta1 {
  return (<k8s.WebhookClientConfigApiextensionsV1beta1>{
  }).merge(options)
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export function serviceReferenceApiregistrationV1beta1(options?: Optional<k8s.ServiceReferenceApiregistrationV1beta1>) : k8s.ServiceReferenceApiregistrationV1beta1 {
  return (<k8s.ServiceReferenceApiregistrationV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export function deploymentAppsV1beta1(options?: Optional<k8s.DeploymentAppsV1beta1>) : k8s.DeploymentAppsV1beta1 {
  return (<k8s.DeploymentAppsV1beta1>{
    apiVersion: "apps.v1beta1",
    kind: "Deployment",
  }).merge(options)
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export function deploymentConditionAppsV1beta1(options?: Optional<k8s.DeploymentConditionAppsV1beta1>) : k8s.DeploymentConditionAppsV1beta1 {
  return (<k8s.DeploymentConditionAppsV1beta1>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DeploymentList is a list of Deployments.
 */
export function deploymentListAppsV1beta1(options?: Optional<k8s.DeploymentListAppsV1beta1>) : k8s.DeploymentListAppsV1beta1 {
  return (<k8s.DeploymentListAppsV1beta1>{
    apiVersion: "apps.v1beta1",
    kind: "DeploymentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export function deploymentRollbackAppsV1beta1(options?: Optional<k8s.DeploymentRollbackAppsV1beta1>) : k8s.DeploymentRollbackAppsV1beta1 {
  return (<k8s.DeploymentRollbackAppsV1beta1>{
    apiVersion: "apps.v1beta1",
    kind: "DeploymentRollback",
    name: (options && options.name) || null,
    rollbackTo: (options && options.rollbackTo) || rollbackConfigAppsV1beta1(),
  }).merge(options)
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export function deploymentSpecAppsV1beta1(options?: Optional<k8s.DeploymentSpecAppsV1beta1>) : k8s.DeploymentSpecAppsV1beta1 {
  return (<k8s.DeploymentSpecAppsV1beta1>{
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export function deploymentStatusAppsV1beta1(options?: Optional<k8s.DeploymentStatusAppsV1beta1>) : k8s.DeploymentStatusAppsV1beta1 {
  return (<k8s.DeploymentStatusAppsV1beta1>{
  }).merge(options)
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export function deploymentStrategyAppsV1beta1(options?: Optional<k8s.DeploymentStrategyAppsV1beta1>) : k8s.DeploymentStrategyAppsV1beta1 {
  return (<k8s.DeploymentStrategyAppsV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED.
 */
export function rollbackConfigAppsV1beta1(options?: Optional<k8s.RollbackConfigAppsV1beta1>) : k8s.RollbackConfigAppsV1beta1 {
  return (<k8s.RollbackConfigAppsV1beta1>{
  }).merge(options)
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export function rollingUpdateDeploymentAppsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentAppsV1beta1>) : k8s.RollingUpdateDeploymentAppsV1beta1 {
  return (<k8s.RollingUpdateDeploymentAppsV1beta1>{
  }).merge(options)
}

/**
 * Scale represents a scaling request for a resource.
 */
export function scaleAppsV1beta1(options?: Optional<k8s.ScaleAppsV1beta1>) : k8s.ScaleAppsV1beta1 {
  return (<k8s.ScaleAppsV1beta1>{
    apiVersion: "apps.v1beta1",
    kind: "Scale",
  }).merge(options)
}

/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export function scaleSpecAppsV1beta1(options?: Optional<k8s.ScaleSpecAppsV1beta1>) : k8s.ScaleSpecAppsV1beta1 {
  return (<k8s.ScaleSpecAppsV1beta1>{
  }).merge(options)
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export function scaleStatusAppsV1beta1(options?: Optional<k8s.ScaleStatusAppsV1beta1>) : k8s.ScaleStatusAppsV1beta1 {
  return (<k8s.ScaleStatusAppsV1beta1>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead.
 */
export function allowedFlexVolumeExtensionsV1beta1(options?: Optional<k8s.AllowedFlexVolumeExtensionsV1beta1>) : k8s.AllowedFlexVolumeExtensionsV1beta1 {
  return (<k8s.AllowedFlexVolumeExtensionsV1beta1>{
    driver: (options && options.driver) || null,
  }).merge(options)
}

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead.
 */
export function allowedHostPathExtensionsV1beta1(options?: Optional<k8s.AllowedHostPathExtensionsV1beta1>) : k8s.AllowedHostPathExtensionsV1beta1 {
  return (<k8s.AllowedHostPathExtensionsV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export function deploymentExtensionsV1beta1(options?: Optional<k8s.DeploymentExtensionsV1beta1>) : k8s.DeploymentExtensionsV1beta1 {
  return (<k8s.DeploymentExtensionsV1beta1>{
    apiVersion: "extensions.v1beta1",
    kind: "Deployment",
  }).merge(options)
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export function deploymentConditionExtensionsV1beta1(options?: Optional<k8s.DeploymentConditionExtensionsV1beta1>) : k8s.DeploymentConditionExtensionsV1beta1 {
  return (<k8s.DeploymentConditionExtensionsV1beta1>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DeploymentList is a list of Deployments.
 */
export function deploymentListExtensionsV1beta1(options?: Optional<k8s.DeploymentListExtensionsV1beta1>) : k8s.DeploymentListExtensionsV1beta1 {
  return (<k8s.DeploymentListExtensionsV1beta1>{
    apiVersion: "extensions.v1beta1",
    kind: "DeploymentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export function deploymentRollbackExtensionsV1beta1(options?: Optional<k8s.DeploymentRollbackExtensionsV1beta1>) : k8s.DeploymentRollbackExtensionsV1beta1 {
  return (<k8s.DeploymentRollbackExtensionsV1beta1>{
    apiVersion: "extensions.v1beta1",
    kind: "DeploymentRollback",
    name: (options && options.name) || null,
    rollbackTo: (options && options.rollbackTo) || rollbackConfigExtensionsV1beta1(),
  }).merge(options)
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export function deploymentSpecExtensionsV1beta1(options?: Optional<k8s.DeploymentSpecExtensionsV1beta1>) : k8s.DeploymentSpecExtensionsV1beta1 {
  return (<k8s.DeploymentSpecExtensionsV1beta1>{
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export function deploymentStatusExtensionsV1beta1(options?: Optional<k8s.DeploymentStatusExtensionsV1beta1>) : k8s.DeploymentStatusExtensionsV1beta1 {
  return (<k8s.DeploymentStatusExtensionsV1beta1>{
  }).merge(options)
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export function deploymentStrategyExtensionsV1beta1(options?: Optional<k8s.DeploymentStrategyExtensionsV1beta1>) : k8s.DeploymentStrategyExtensionsV1beta1 {
  return (<k8s.DeploymentStrategyExtensionsV1beta1>{
  }).merge(options)
}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 */
export function fSGroupStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsExtensionsV1beta1>) : k8s.FSGroupStrategyOptionsExtensionsV1beta1 {
  return (<k8s.FSGroupStrategyOptionsExtensionsV1beta1>{
  }).merge(options)
}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 */
export function hostPortRangeExtensionsV1beta1(options?: Optional<k8s.HostPortRangeExtensionsV1beta1>) : k8s.HostPortRangeExtensionsV1beta1 {
  return (<k8s.HostPortRangeExtensionsV1beta1>{
    max: (options && options.max) || 0,
    min: (options && options.min) || 0,
  }).merge(options)
}

/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 */
export function iDRangeExtensionsV1beta1(options?: Optional<k8s.IDRangeExtensionsV1beta1>) : k8s.IDRangeExtensionsV1beta1 {
  return (<k8s.IDRangeExtensionsV1beta1>{
    max: (options && options.max) || 0,
    min: (options && options.min) || 0,
  }).merge(options)
}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 */
export function podSecurityPolicyExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyExtensionsV1beta1>) : k8s.PodSecurityPolicyExtensionsV1beta1 {
  return (<k8s.PodSecurityPolicyExtensionsV1beta1>{
    apiVersion: "extensions.v1beta1",
    kind: "PodSecurityPolicy",
  }).merge(options)
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
export function podSecurityPolicyListExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyListExtensionsV1beta1>) : k8s.PodSecurityPolicyListExtensionsV1beta1 {
  return (<k8s.PodSecurityPolicyListExtensionsV1beta1>{
    apiVersion: "extensions.v1beta1",
    kind: "PodSecurityPolicyList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 */
export function podSecurityPolicySpecExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicySpecExtensionsV1beta1>) : k8s.PodSecurityPolicySpecExtensionsV1beta1 {
  return (<k8s.PodSecurityPolicySpecExtensionsV1beta1>{
    fsGroup: (options && options.fsGroup) || fSGroupStrategyOptionsExtensionsV1beta1(),
    runAsUser: (options && options.runAsUser) || runAsUserStrategyOptionsExtensionsV1beta1(),
    seLinux: (options && options.seLinux) || sELinuxStrategyOptionsExtensionsV1beta1(),
    supplementalGroups: (options && options.supplementalGroups) || supplementalGroupsStrategyOptionsExtensionsV1beta1(),
  }).merge(options)
}

/**
 * DEPRECATED.
 */
export function rollbackConfigExtensionsV1beta1(options?: Optional<k8s.RollbackConfigExtensionsV1beta1>) : k8s.RollbackConfigExtensionsV1beta1 {
  return (<k8s.RollbackConfigExtensionsV1beta1>{
  }).merge(options)
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export function rollingUpdateDeploymentExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentExtensionsV1beta1>) : k8s.RollingUpdateDeploymentExtensionsV1beta1 {
  return (<k8s.RollingUpdateDeploymentExtensionsV1beta1>{
  }).merge(options)
}

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsGroupStrategyOptions from policy API Group instead.
 */
export function runAsGroupStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.RunAsGroupStrategyOptionsExtensionsV1beta1>) : k8s.RunAsGroupStrategyOptionsExtensionsV1beta1 {
  return (<k8s.RunAsGroupStrategyOptionsExtensionsV1beta1>{
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 */
export function runAsUserStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsExtensionsV1beta1>) : k8s.RunAsUserStrategyOptionsExtensionsV1beta1 {
  return (<k8s.RunAsUserStrategyOptionsExtensionsV1beta1>{
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
export function sELinuxStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsExtensionsV1beta1>) : k8s.SELinuxStrategyOptionsExtensionsV1beta1 {
  return (<k8s.SELinuxStrategyOptionsExtensionsV1beta1>{
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * represents a scaling request for a resource.
 */
export function scaleExtensionsV1beta1(options?: Optional<k8s.ScaleExtensionsV1beta1>) : k8s.ScaleExtensionsV1beta1 {
  return (<k8s.ScaleExtensionsV1beta1>{
    apiVersion: "extensions.v1beta1",
    kind: "Scale",
  }).merge(options)
}

/**
 * describes the attributes of a scale subresource
 */
export function scaleSpecExtensionsV1beta1(options?: Optional<k8s.ScaleSpecExtensionsV1beta1>) : k8s.ScaleSpecExtensionsV1beta1 {
  return (<k8s.ScaleSpecExtensionsV1beta1>{
  }).merge(options)
}

/**
 * represents the current status of a scale subresource.
 */
export function scaleStatusExtensionsV1beta1(options?: Optional<k8s.ScaleStatusExtensionsV1beta1>) : k8s.ScaleStatusExtensionsV1beta1 {
  return (<k8s.ScaleStatusExtensionsV1beta1>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 */
export function supplementalGroupsStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsExtensionsV1beta1>) : k8s.SupplementalGroupsStrategyOptionsExtensionsV1beta1 {
  return (<k8s.SupplementalGroupsStrategyOptionsExtensionsV1beta1>{
  }).merge(options)
}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export function allowedFlexVolumePolicyV1beta1(options?: Optional<k8s.AllowedFlexVolumePolicyV1beta1>) : k8s.AllowedFlexVolumePolicyV1beta1 {
  return (<k8s.AllowedFlexVolumePolicyV1beta1>{
    driver: (options && options.driver) || null,
  }).merge(options)
}

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
export function allowedHostPathPolicyV1beta1(options?: Optional<k8s.AllowedHostPathPolicyV1beta1>) : k8s.AllowedHostPathPolicyV1beta1 {
  return (<k8s.AllowedHostPathPolicyV1beta1>{
  }).merge(options)
}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
export function fSGroupStrategyOptionsPolicyV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsPolicyV1beta1>) : k8s.FSGroupStrategyOptionsPolicyV1beta1 {
  return (<k8s.FSGroupStrategyOptionsPolicyV1beta1>{
  }).merge(options)
}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export function hostPortRangePolicyV1beta1(options?: Optional<k8s.HostPortRangePolicyV1beta1>) : k8s.HostPortRangePolicyV1beta1 {
  return (<k8s.HostPortRangePolicyV1beta1>{
    max: (options && options.max) || 0,
    min: (options && options.min) || 0,
  }).merge(options)
}

/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
export function iDRangePolicyV1beta1(options?: Optional<k8s.IDRangePolicyV1beta1>) : k8s.IDRangePolicyV1beta1 {
  return (<k8s.IDRangePolicyV1beta1>{
    max: (options && options.max) || 0,
    min: (options && options.min) || 0,
  }).merge(options)
}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
export function podSecurityPolicyPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicyPolicyV1beta1>) : k8s.PodSecurityPolicyPolicyV1beta1 {
  return (<k8s.PodSecurityPolicyPolicyV1beta1>{
    apiVersion: "policy.v1beta1",
    kind: "PodSecurityPolicy",
  }).merge(options)
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
export function podSecurityPolicyListPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicyListPolicyV1beta1>) : k8s.PodSecurityPolicyListPolicyV1beta1 {
  return (<k8s.PodSecurityPolicyListPolicyV1beta1>{
    apiVersion: "policy.v1beta1",
    kind: "PodSecurityPolicyList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
export function podSecurityPolicySpecPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicySpecPolicyV1beta1>) : k8s.PodSecurityPolicySpecPolicyV1beta1 {
  return (<k8s.PodSecurityPolicySpecPolicyV1beta1>{
    fsGroup: (options && options.fsGroup) || fSGroupStrategyOptionsPolicyV1beta1(),
    runAsUser: (options && options.runAsUser) || runAsUserStrategyOptionsPolicyV1beta1(),
    seLinux: (options && options.seLinux) || sELinuxStrategyOptionsPolicyV1beta1(),
    supplementalGroups: (options && options.supplementalGroups) || supplementalGroupsStrategyOptionsPolicyV1beta1(),
  }).merge(options)
}

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export function runAsGroupStrategyOptionsPolicyV1beta1(options?: Optional<k8s.RunAsGroupStrategyOptionsPolicyV1beta1>) : k8s.RunAsGroupStrategyOptionsPolicyV1beta1 {
  return (<k8s.RunAsGroupStrategyOptionsPolicyV1beta1>{
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export function runAsUserStrategyOptionsPolicyV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsPolicyV1beta1>) : k8s.RunAsUserStrategyOptionsPolicyV1beta1 {
  return (<k8s.RunAsUserStrategyOptionsPolicyV1beta1>{
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export function sELinuxStrategyOptionsPolicyV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsPolicyV1beta1>) : k8s.SELinuxStrategyOptionsPolicyV1beta1 {
  return (<k8s.SELinuxStrategyOptionsPolicyV1beta1>{
    rule: (options && options.rule) || null,
  }).merge(options)
}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export function supplementalGroupsStrategyOptionsPolicyV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsPolicyV1beta1>) : k8s.SupplementalGroupsStrategyOptionsPolicyV1beta1 {
  return (<k8s.SupplementalGroupsStrategyOptionsPolicyV1beta1>{
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
export function rawExtensionRuntime(options?: Optional<k8s.RawExtensionRuntime>) : k8s.RawExtensionRuntime {
  return (<k8s.RawExtensionRuntime>{
    Raw: (options && options.Raw) || null,
  }).merge(options)
}

/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
export function aPIGroup(options?: Optional<k8s.APIGroup>) : k8s.APIGroup {
  return (<k8s.APIGroup>{
    apiVersion: "v1",
    kind: "APIGroup",
    name: (options && options.name) || null,
    versions: (options && options.versions) || [],
  }).merge(options)
}

/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
export function aPIGroupList(options?: Optional<k8s.APIGroupList>) : k8s.APIGroupList {
  return (<k8s.APIGroupList>{
    apiVersion: "v1",
    kind: "APIGroupList",
    groups: (options && options.groups) || [],
  }).merge(options)
}

/**
 * APIResource specifies the name of a resource and whether it is namespaced.
 */
export function aPIResource(options?: Optional<k8s.APIResource>) : k8s.APIResource {
  return (<k8s.APIResource>{
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
export function aPIResourceList(options?: Optional<k8s.APIResourceList>) : k8s.APIResourceList {
  return (<k8s.APIResourceList>{
    apiVersion: "v1",
    kind: "APIResourceList",
    groupVersion: (options && options.groupVersion) || null,
    resources: (options && options.resources) || [],
  }).merge(options)
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export function aPIService(options?: Optional<k8s.APIService>) : k8s.APIService {
  return (<k8s.APIService>{
    apiVersion: "v1",
    kind: "APIService",
  }).merge(options)
}

export function aPIServiceCondition(options?: Optional<k8s.APIServiceCondition>) : k8s.APIServiceCondition {
  return (<k8s.APIServiceCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * APIServiceList is a list of APIService objects.
 */
export function aPIServiceList(options?: Optional<k8s.APIServiceList>) : k8s.APIServiceList {
  return (<k8s.APIServiceList>{
    apiVersion: "v1",
    kind: "APIServiceList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export function aPIServiceSpec(options?: Optional<k8s.APIServiceSpec>) : k8s.APIServiceSpec {
  return (<k8s.APIServiceSpec>{
    groupPriorityMinimum: (options && options.groupPriorityMinimum) || 0,
    service: (options && options.service) || serviceReference(),
    versionPriority: (options && options.versionPriority) || 0,
  }).merge(options)
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export function aPIServiceStatus(options?: Optional<k8s.APIServiceStatus>) : k8s.APIServiceStatus {
  return (<k8s.APIServiceStatus>{
  }).merge(options)
}

/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
export function aPIVersions(options?: Optional<k8s.APIVersions>) : k8s.APIVersions {
  return (<k8s.APIVersions>{
    apiVersion: "v1",
    kind: "APIVersions",
    serverAddressByClientCIDRs: (options && options.serverAddressByClientCIDRs) || [],
    versions: (options && options.versions) || [],
  }).merge(options)
}

/**
 * Represents a Persistent Disk resource in AWS.
 * 
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export function aWSElasticBlockStoreVolumeSource(options?: Optional<k8s.AWSElasticBlockStoreVolumeSource>) : k8s.AWSElasticBlockStoreVolumeSource {
  return (<k8s.AWSElasticBlockStoreVolumeSource>{
    volumeID: (options && options.volumeID) || null,
  }).merge(options)
}

/**
 * Affinity is a group of affinity scheduling rules.
 */
export function affinity(options?: Optional<k8s.Affinity>) : k8s.Affinity {
  return (<k8s.Affinity>{
  }).merge(options)
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export function aggregationRule(options?: Optional<k8s.AggregationRule>) : k8s.AggregationRule {
  return (<k8s.AggregationRule>{
  }).merge(options)
}

/**
 * AttachedVolume describes a volume attached to a node
 */
export function attachedVolume(options?: Optional<k8s.AttachedVolume>) : k8s.AttachedVolume {
  return (<k8s.AttachedVolume>{
    devicePath: (options && options.devicePath) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
export function azureDiskVolumeSource(options?: Optional<k8s.AzureDiskVolumeSource>) : k8s.AzureDiskVolumeSource {
  return (<k8s.AzureDiskVolumeSource>{
    kind: "AzureDiskVolumeSource",
    diskName: (options && options.diskName) || null,
    diskURI: (options && options.diskURI) || null,
  }).merge(options)
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export function azureFilePersistentVolumeSource(options?: Optional<k8s.AzureFilePersistentVolumeSource>) : k8s.AzureFilePersistentVolumeSource {
  return (<k8s.AzureFilePersistentVolumeSource>{
    secretName: (options && options.secretName) || null,
    shareName: (options && options.shareName) || null,
  }).merge(options)
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export function azureFileVolumeSource(options?: Optional<k8s.AzureFileVolumeSource>) : k8s.AzureFileVolumeSource {
  return (<k8s.AzureFileVolumeSource>{
    secretName: (options && options.secretName) || null,
    shareName: (options && options.shareName) || null,
  }).merge(options)
}

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 */
export function binding(options?: Optional<k8s.Binding>) : k8s.Binding {
  return (<k8s.Binding>{
    apiVersion: "v1",
    kind: "Binding",
    target: (options && options.target) || objectReference(),
  }).merge(options)
}

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
export function cSIPersistentVolumeSource(options?: Optional<k8s.CSIPersistentVolumeSource>) : k8s.CSIPersistentVolumeSource {
  return (<k8s.CSIPersistentVolumeSource>{
    driver: (options && options.driver) || null,
    volumeHandle: (options && options.volumeHandle) || null,
  }).merge(options)
}

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export function capabilities(options?: Optional<k8s.Capabilities>) : k8s.Capabilities {
  return (<k8s.Capabilities>{
  }).merge(options)
}

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export function cephFSPersistentVolumeSource(options?: Optional<k8s.CephFSPersistentVolumeSource>) : k8s.CephFSPersistentVolumeSource {
  return (<k8s.CephFSPersistentVolumeSource>{
    monitors: (options && options.monitors) || [],
  }).merge(options)
}

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export function cephFSVolumeSource(options?: Optional<k8s.CephFSVolumeSource>) : k8s.CephFSVolumeSource {
  return (<k8s.CephFSVolumeSource>{
    monitors: (options && options.monitors) || [],
  }).merge(options)
}

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export function cinderPersistentVolumeSource(options?: Optional<k8s.CinderPersistentVolumeSource>) : k8s.CinderPersistentVolumeSource {
  return (<k8s.CinderPersistentVolumeSource>{
    volumeID: (options && options.volumeID) || null,
  }).merge(options)
}

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export function cinderVolumeSource(options?: Optional<k8s.CinderVolumeSource>) : k8s.CinderVolumeSource {
  return (<k8s.CinderVolumeSource>{
    volumeID: (options && options.volumeID) || null,
  }).merge(options)
}

/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export function clientIPConfig(options?: Optional<k8s.ClientIPConfig>) : k8s.ClientIPConfig {
  return (<k8s.ClientIPConfig>{
  }).merge(options)
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export function clusterRole(options?: Optional<k8s.ClusterRole>) : k8s.ClusterRole {
  return (<k8s.ClusterRole>{
    apiVersion: "v1",
    kind: "ClusterRole",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export function clusterRoleBinding(options?: Optional<k8s.ClusterRoleBinding>) : k8s.ClusterRoleBinding {
  return (<k8s.ClusterRoleBinding>{
    apiVersion: "v1",
    kind: "ClusterRoleBinding",
    roleRef: (options && options.roleRef) || roleRef(),
  }).merge(options)
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export function clusterRoleBindingList(options?: Optional<k8s.ClusterRoleBindingList>) : k8s.ClusterRoleBindingList {
  return (<k8s.ClusterRoleBindingList>{
    apiVersion: "v1",
    kind: "ClusterRoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export function clusterRoleList(options?: Optional<k8s.ClusterRoleList>) : k8s.ClusterRoleList {
  return (<k8s.ClusterRoleList>{
    apiVersion: "v1",
    kind: "ClusterRoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * Information about the condition of a component.
 */
export function componentCondition(options?: Optional<k8s.ComponentCondition>) : k8s.ComponentCondition {
  return (<k8s.ComponentCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 */
export function componentStatus(options?: Optional<k8s.ComponentStatus>) : k8s.ComponentStatus {
  return (<k8s.ComponentStatus>{
    apiVersion: "v1",
    kind: "ComponentStatus",
  }).merge(options)
}

/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 */
export function componentStatusList(options?: Optional<k8s.ComponentStatusList>) : k8s.ComponentStatusList {
  return (<k8s.ComponentStatusList>{
    apiVersion: "v1",
    kind: "ComponentStatusList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ConfigMap holds configuration data for pods to consume.
 */
export function configMap(options?: Optional<k8s.ConfigMap>) : k8s.ConfigMap {
  return (<k8s.ConfigMap>{
    apiVersion: "v1",
    kind: "ConfigMap",
  }).merge(options)
}

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 * 
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export function configMapEnvSource(options?: Optional<k8s.ConfigMapEnvSource>) : k8s.ConfigMapEnvSource {
  return (<k8s.ConfigMapEnvSource>{
  }).merge(options)
}

/**
 * Selects a key from a ConfigMap.
 */
export function configMapKeySelector(options?: Optional<k8s.ConfigMapKeySelector>) : k8s.ConfigMapKeySelector {
  return (<k8s.ConfigMapKeySelector>{
    key: (options && options.key) || null,
  }).merge(options)
}

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export function configMapList(options?: Optional<k8s.ConfigMapList>) : k8s.ConfigMapList {
  return (<k8s.ConfigMapList>{
    apiVersion: "v1",
    kind: "ConfigMapList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 */
export function configMapNodeConfigSource(options?: Optional<k8s.ConfigMapNodeConfigSource>) : k8s.ConfigMapNodeConfigSource {
  return (<k8s.ConfigMapNodeConfigSource>{
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
  return (<k8s.ConfigMapProjection>{
  }).merge(options)
}

/**
 * Adapts a ConfigMap into a volume.
 * 
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export function configMapVolumeSource(options?: Optional<k8s.ConfigMapVolumeSource>) : k8s.ConfigMapVolumeSource {
  return (<k8s.ConfigMapVolumeSource>{
  }).merge(options)
}

/**
 * A single application container that you want to run within a pod.
 */
export function container(options?: Optional<k8s.Container>) : k8s.Container {
  return (<k8s.Container>{
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Describe a container image
 */
export function containerImage(options?: Optional<k8s.ContainerImage>) : k8s.ContainerImage {
  return (<k8s.ContainerImage>{
    names: (options && options.names) || [],
  }).merge(options)
}

/**
 * ContainerPort represents a network port in a single container.
 */
export function containerPort(options?: Optional<k8s.ContainerPort>) : k8s.ContainerPort {
  return (<k8s.ContainerPort>{
    containerPort: (options && options.containerPort) || 0,
  }).merge(options)
}

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export function containerState(options?: Optional<k8s.ContainerState>) : k8s.ContainerState {
  return (<k8s.ContainerState>{
  }).merge(options)
}

/**
 * ContainerStateRunning is a running state of a container.
 */
export function containerStateRunning(options?: Optional<k8s.ContainerStateRunning>) : k8s.ContainerStateRunning {
  return (<k8s.ContainerStateRunning>{
  }).merge(options)
}

/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export function containerStateTerminated(options?: Optional<k8s.ContainerStateTerminated>) : k8s.ContainerStateTerminated {
  return (<k8s.ContainerStateTerminated>{
    exitCode: (options && options.exitCode) || 0,
  }).merge(options)
}

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export function containerStateWaiting(options?: Optional<k8s.ContainerStateWaiting>) : k8s.ContainerStateWaiting {
  return (<k8s.ContainerStateWaiting>{
  }).merge(options)
}

/**
 * ContainerStatus contains details for the current status of this container.
 */
export function containerStatus(options?: Optional<k8s.ContainerStatus>) : k8s.ContainerStatus {
  return (<k8s.ContainerStatus>{
    image: (options && options.image) || null,
    imageID: (options && options.imageID) || null,
    name: (options && options.name) || null,
    ready: (options && options.ready) || false,
    restartCount: (options && options.restartCount) || 0,
  }).merge(options)
}

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export function controllerRevision(options?: Optional<k8s.ControllerRevision>) : k8s.ControllerRevision {
  return (<k8s.ControllerRevision>{
    apiVersion: "v1",
    kind: "ControllerRevision",
    revision: (options && options.revision) || 0,
  }).merge(options)
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export function controllerRevisionList(options?: Optional<k8s.ControllerRevisionList>) : k8s.ControllerRevisionList {
  return (<k8s.ControllerRevisionList>{
    apiVersion: "v1",
    kind: "ControllerRevisionList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export function crossVersionObjectReference(options?: Optional<k8s.CrossVersionObjectReference>) : k8s.CrossVersionObjectReference {
  return (<k8s.CrossVersionObjectReference>{
    apiVersion: "v1",
    kind: "CrossVersionObjectReference",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export function daemonEndpoint(options?: Optional<k8s.DaemonEndpoint>) : k8s.DaemonEndpoint {
  return (<k8s.DaemonEndpoint>{
    Port: (options && options.Port) || 0,
  }).merge(options)
}

/**
 * DaemonSet represents the configuration of a daemon set.
 */
export function daemonSet(options?: Optional<k8s.DaemonSet>) : k8s.DaemonSet {
  return (<k8s.DaemonSet>{
    apiVersion: "v1",
    kind: "DaemonSet",
  }).merge(options)
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export function daemonSetCondition(options?: Optional<k8s.DaemonSetCondition>) : k8s.DaemonSetCondition {
  return (<k8s.DaemonSetCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export function daemonSetList(options?: Optional<k8s.DaemonSetList>) : k8s.DaemonSetList {
  return (<k8s.DaemonSetList>{
    apiVersion: "v1",
    kind: "DaemonSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export function daemonSetSpec(options?: Optional<k8s.DaemonSetSpec>) : k8s.DaemonSetSpec {
  return (<k8s.DaemonSetSpec>{
    selector: (options && options.selector) || labelSelector(),
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export function daemonSetStatus(options?: Optional<k8s.DaemonSetStatus>) : k8s.DaemonSetStatus {
  return (<k8s.DaemonSetStatus>{
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
  return (<k8s.DaemonSetUpdateStrategy>{
  }).merge(options)
}

/**
 * DeleteOptions may be provided when deleting an API object.
 */
export function deleteOptions(options?: Optional<k8s.DeleteOptions>) : k8s.DeleteOptions {
  return (<k8s.DeleteOptions>{
    apiVersion: "v1",
    kind: "DeleteOptions",
  }).merge(options)
}

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export function deployment(options?: Optional<k8s.Deployment>) : k8s.Deployment {
  return (<k8s.Deployment>{
    apiVersion: "v1",
    kind: "Deployment",
  }).merge(options)
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export function deploymentCondition(options?: Optional<k8s.DeploymentCondition>) : k8s.DeploymentCondition {
  return (<k8s.DeploymentCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DeploymentList is a list of Deployments.
 */
export function deploymentList(options?: Optional<k8s.DeploymentList>) : k8s.DeploymentList {
  return (<k8s.DeploymentList>{
    apiVersion: "v1",
    kind: "DeploymentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export function deploymentSpec(options?: Optional<k8s.DeploymentSpec>) : k8s.DeploymentSpec {
  return (<k8s.DeploymentSpec>{
    selector: (options && options.selector) || labelSelector(),
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export function deploymentStatus(options?: Optional<k8s.DeploymentStatus>) : k8s.DeploymentStatus {
  return (<k8s.DeploymentStatus>{
  }).merge(options)
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export function deploymentStrategy(options?: Optional<k8s.DeploymentStrategy>) : k8s.DeploymentStrategy {
  return (<k8s.DeploymentStrategy>{
  }).merge(options)
}

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export function downwardAPIProjection(options?: Optional<k8s.DownwardAPIProjection>) : k8s.DownwardAPIProjection {
  return (<k8s.DownwardAPIProjection>{
  }).merge(options)
}

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
export function downwardAPIVolumeFile(options?: Optional<k8s.DownwardAPIVolumeFile>) : k8s.DownwardAPIVolumeFile {
  return (<k8s.DownwardAPIVolumeFile>{
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
export function downwardAPIVolumeSource(options?: Optional<k8s.DownwardAPIVolumeSource>) : k8s.DownwardAPIVolumeSource {
  return (<k8s.DownwardAPIVolumeSource>{
  }).merge(options)
}

/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 */
export function emptyDirVolumeSource(options?: Optional<k8s.EmptyDirVolumeSource>) : k8s.EmptyDirVolumeSource {
  return (<k8s.EmptyDirVolumeSource>{
  }).merge(options)
}

/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export function endpointAddress(options?: Optional<k8s.EndpointAddress>) : k8s.EndpointAddress {
  return (<k8s.EndpointAddress>{
    ip: (options && options.ip) || null,
  }).merge(options)
}

/**
 * EndpointPort is a tuple that describes a single port.
 */
export function endpointPort(options?: Optional<k8s.EndpointPort>) : k8s.EndpointPort {
  return (<k8s.EndpointPort>{
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
  return (<k8s.EndpointSubset>{
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
  return (<k8s.Endpoints>{
    apiVersion: "v1",
    kind: "Endpoints",
  }).merge(options)
}

/**
 * EndpointsList is a list of endpoints.
 */
export function endpointsList(options?: Optional<k8s.EndpointsList>) : k8s.EndpointsList {
  return (<k8s.EndpointsList>{
    apiVersion: "v1",
    kind: "EndpointsList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export function envFromSource(options?: Optional<k8s.EnvFromSource>) : k8s.EnvFromSource {
  return (<k8s.EnvFromSource>{
  }).merge(options)
}

/**
 * EnvVar represents an environment variable present in a Container.
 */
export function envVar(options?: Optional<k8s.EnvVar>) : k8s.EnvVar {
  return (<k8s.EnvVar>{
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export function envVarSource(options?: Optional<k8s.EnvVarSource>) : k8s.EnvVarSource {
  return (<k8s.EnvVarSource>{
  }).merge(options)
}

/**
 * Event is a report of an event somewhere in the cluster.
 */
export function event(options?: Optional<k8s.Event>) : k8s.Event {
  return (<k8s.Event>{
    apiVersion: "v1",
    kind: "Event",
    involvedObject: (options && options.involvedObject) || objectReference(),
    metadata: (options && options.metadata) || objectMeta(),
  }).merge(options)
}

/**
 * EventList is a list of events.
 */
export function eventList(options?: Optional<k8s.EventList>) : k8s.EventList {
  return (<k8s.EventList>{
    apiVersion: "v1",
    kind: "EventList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export function eventSeries(options?: Optional<k8s.EventSeries>) : k8s.EventSeries {
  return (<k8s.EventSeries>{
  }).merge(options)
}

/**
 * EventSource contains information for an event.
 */
export function eventSource(options?: Optional<k8s.EventSource>) : k8s.EventSource {
  return (<k8s.EventSource>{
  }).merge(options)
}

/**
 * ExecAction describes a "run in container" action.
 */
export function execAction(options?: Optional<k8s.ExecAction>) : k8s.ExecAction {
  return (<k8s.ExecAction>{
  }).merge(options)
}

/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 */
export function fCVolumeSource(options?: Optional<k8s.FCVolumeSource>) : k8s.FCVolumeSource {
  return (<k8s.FCVolumeSource>{
  }).merge(options)
}

/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
export function flexPersistentVolumeSource(options?: Optional<k8s.FlexPersistentVolumeSource>) : k8s.FlexPersistentVolumeSource {
  return (<k8s.FlexPersistentVolumeSource>{
    driver: (options && options.driver) || null,
  }).merge(options)
}

/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
export function flexVolumeSource(options?: Optional<k8s.FlexVolumeSource>) : k8s.FlexVolumeSource {
  return (<k8s.FlexVolumeSource>{
    driver: (options && options.driver) || null,
  }).merge(options)
}

/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
export function flockerVolumeSource(options?: Optional<k8s.FlockerVolumeSource>) : k8s.FlockerVolumeSource {
  return (<k8s.FlockerVolumeSource>{
  }).merge(options)
}

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 * 
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export function gCEPersistentDiskVolumeSource(options?: Optional<k8s.GCEPersistentDiskVolumeSource>) : k8s.GCEPersistentDiskVolumeSource {
  return (<k8s.GCEPersistentDiskVolumeSource>{
    pdName: (options && options.pdName) || null,
  }).merge(options)
}

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 * 
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export function gitRepoVolumeSource(options?: Optional<k8s.GitRepoVolumeSource>) : k8s.GitRepoVolumeSource {
  return (<k8s.GitRepoVolumeSource>{
    repository: (options && options.repository) || null,
  }).merge(options)
}

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export function glusterfsPersistentVolumeSource(options?: Optional<k8s.GlusterfsPersistentVolumeSource>) : k8s.GlusterfsPersistentVolumeSource {
  return (<k8s.GlusterfsPersistentVolumeSource>{
    endpoints: (options && options.endpoints) || null,
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export function glusterfsVolumeSource(options?: Optional<k8s.GlusterfsVolumeSource>) : k8s.GlusterfsVolumeSource {
  return (<k8s.GlusterfsVolumeSource>{
    endpoints: (options && options.endpoints) || null,
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export function groupVersionForDiscovery(options?: Optional<k8s.GroupVersionForDiscovery>) : k8s.GroupVersionForDiscovery {
  return (<k8s.GroupVersionForDiscovery>{
    groupVersion: (options && options.groupVersion) || null,
    version: (options && options.version) || null,
  }).merge(options)
}

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export function hTTPGetAction(options?: Optional<k8s.HTTPGetAction>) : k8s.HTTPGetAction {
  return (<k8s.HTTPGetAction>{
    port: (options && options.port) || null,
  }).merge(options)
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export function hTTPHeader(options?: Optional<k8s.HTTPHeader>) : k8s.HTTPHeader {
  return (<k8s.HTTPHeader>{
    name: (options && options.name) || null,
    value: (options && options.value) || null,
  }).merge(options)
}

/**
 * Handler defines a specific action that should be taken
 */
export function handler(options?: Optional<k8s.Handler>) : k8s.Handler {
  return (<k8s.Handler>{
  }).merge(options)
}

/**
 * configuration of a horizontal pod autoscaler.
 */
export function horizontalPodAutoscaler(options?: Optional<k8s.HorizontalPodAutoscaler>) : k8s.HorizontalPodAutoscaler {
  return (<k8s.HorizontalPodAutoscaler>{
    apiVersion: "v1",
    kind: "HorizontalPodAutoscaler",
  }).merge(options)
}

/**
 * list of horizontal pod autoscaler objects.
 */
export function horizontalPodAutoscalerList(options?: Optional<k8s.HorizontalPodAutoscalerList>) : k8s.HorizontalPodAutoscalerList {
  return (<k8s.HorizontalPodAutoscalerList>{
    apiVersion: "v1",
    kind: "HorizontalPodAutoscalerList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * specification of a horizontal pod autoscaler.
 */
export function horizontalPodAutoscalerSpec(options?: Optional<k8s.HorizontalPodAutoscalerSpec>) : k8s.HorizontalPodAutoscalerSpec {
  return (<k8s.HorizontalPodAutoscalerSpec>{
    maxReplicas: (options && options.maxReplicas) || 0,
    scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReference(),
  }).merge(options)
}

/**
 * current status of a horizontal pod autoscaler
 */
export function horizontalPodAutoscalerStatus(options?: Optional<k8s.HorizontalPodAutoscalerStatus>) : k8s.HorizontalPodAutoscalerStatus {
  return (<k8s.HorizontalPodAutoscalerStatus>{
    currentReplicas: (options && options.currentReplicas) || 0,
    desiredReplicas: (options && options.desiredReplicas) || 0,
  }).merge(options)
}

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export function hostAlias(options?: Optional<k8s.HostAlias>) : k8s.HostAlias {
  return (<k8s.HostAlias>{
  }).merge(options)
}

/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export function hostPathVolumeSource(options?: Optional<k8s.HostPathVolumeSource>) : k8s.HostPathVolumeSource {
  return (<k8s.HostPathVolumeSource>{
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export function iPBlock(options?: Optional<k8s.IPBlock>) : k8s.IPBlock {
  return (<k8s.IPBlock>{
    cidr: (options && options.cidr) || null,
  }).merge(options)
}

/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export function iSCSIPersistentVolumeSource(options?: Optional<k8s.ISCSIPersistentVolumeSource>) : k8s.ISCSIPersistentVolumeSource {
  return (<k8s.ISCSIPersistentVolumeSource>{
    iqn: (options && options.iqn) || null,
    lun: (options && options.lun) || 0,
    targetPortal: (options && options.targetPortal) || null,
  }).merge(options)
}

/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export function iSCSIVolumeSource(options?: Optional<k8s.ISCSIVolumeSource>) : k8s.ISCSIVolumeSource {
  return (<k8s.ISCSIVolumeSource>{
    iqn: (options && options.iqn) || null,
    lun: (options && options.lun) || 0,
    targetPortal: (options && options.targetPortal) || null,
  }).merge(options)
}

/**
 * Initializer is information about an initializer that has not yet completed.
 */
export function initializer(options?: Optional<k8s.Initializer>) : k8s.Initializer {
  return (<k8s.Initializer>{
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Initializers tracks the progress of initialization.
 */
export function initializers(options?: Optional<k8s.Initializers>) : k8s.Initializers {
  return (<k8s.Initializers>{
    pending: (options && options.pending) || [],
  }).merge(options)
}

/**
 * Job represents the configuration of a single job.
 */
export function job(options?: Optional<k8s.Job>) : k8s.Job {
  return (<k8s.Job>{
    apiVersion: "v1",
    kind: "Job",
  }).merge(options)
}

/**
 * JobCondition describes current state of a job.
 */
export function jobCondition(options?: Optional<k8s.JobCondition>) : k8s.JobCondition {
  return (<k8s.JobCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * JobList is a collection of jobs.
 */
export function jobList(options?: Optional<k8s.JobList>) : k8s.JobList {
  return (<k8s.JobList>{
    apiVersion: "v1",
    kind: "JobList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * JobSpec describes how the job execution will look like.
 */
export function jobSpec(options?: Optional<k8s.JobSpec>) : k8s.JobSpec {
  return (<k8s.JobSpec>{
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * JobStatus represents the current state of a Job.
 */
export function jobStatus(options?: Optional<k8s.JobStatus>) : k8s.JobStatus {
  return (<k8s.JobStatus>{
  }).merge(options)
}

/**
 * Maps a string key to a path within a volume.
 */
export function keyToPath(options?: Optional<k8s.KeyToPath>) : k8s.KeyToPath {
  return (<k8s.KeyToPath>{
    key: (options && options.key) || null,
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export function labelSelector(options?: Optional<k8s.LabelSelector>) : k8s.LabelSelector {
  return (<k8s.LabelSelector>{
  }).merge(options)
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export function labelSelectorRequirement(options?: Optional<k8s.LabelSelectorRequirement>) : k8s.LabelSelectorRequirement {
  return (<k8s.LabelSelectorRequirement>{
    key: (options && options.key) || null,
    operator: (options && options.operator) || null,
  }).merge(options)
}

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export function lifecycle(options?: Optional<k8s.Lifecycle>) : k8s.Lifecycle {
  return (<k8s.Lifecycle>{
  }).merge(options)
}

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
export function limitRange(options?: Optional<k8s.LimitRange>) : k8s.LimitRange {
  return (<k8s.LimitRange>{
    apiVersion: "v1",
    kind: "LimitRange",
  }).merge(options)
}

/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export function limitRangeItem(options?: Optional<k8s.LimitRangeItem>) : k8s.LimitRangeItem {
  return (<k8s.LimitRangeItem>{
  }).merge(options)
}

/**
 * LimitRangeList is a list of LimitRange items.
 */
export function limitRangeList(options?: Optional<k8s.LimitRangeList>) : k8s.LimitRangeList {
  return (<k8s.LimitRangeList>{
    apiVersion: "v1",
    kind: "LimitRangeList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export function limitRangeSpec(options?: Optional<k8s.LimitRangeSpec>) : k8s.LimitRangeSpec {
  return (<k8s.LimitRangeSpec>{
    limits: (options && options.limits) || [],
  }).merge(options)
}

/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export function listMeta(options?: Optional<k8s.ListMeta>) : k8s.ListMeta {
  return (<k8s.ListMeta>{
  }).merge(options)
}

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
export function loadBalancerIngress(options?: Optional<k8s.LoadBalancerIngress>) : k8s.LoadBalancerIngress {
  return (<k8s.LoadBalancerIngress>{
  }).merge(options)
}

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export function loadBalancerStatus(options?: Optional<k8s.LoadBalancerStatus>) : k8s.LoadBalancerStatus {
  return (<k8s.LoadBalancerStatus>{
  }).merge(options)
}

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export function localObjectReference(options?: Optional<k8s.LocalObjectReference>) : k8s.LocalObjectReference {
  return (<k8s.LocalObjectReference>{
  }).merge(options)
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export function localSubjectAccessReview(options?: Optional<k8s.LocalSubjectAccessReview>) : k8s.LocalSubjectAccessReview {
  return (<k8s.LocalSubjectAccessReview>{
    apiVersion: "v1",
    kind: "LocalSubjectAccessReview",
    spec: (options && options.spec) || subjectAccessReviewSpec(),
  }).merge(options)
}

/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
export function localVolumeSource(options?: Optional<k8s.LocalVolumeSource>) : k8s.LocalVolumeSource {
  return (<k8s.LocalVolumeSource>{
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
export function nFSVolumeSource(options?: Optional<k8s.NFSVolumeSource>) : k8s.NFSVolumeSource {
  return (<k8s.NFSVolumeSource>{
    path: (options && options.path) || null,
    server: (options && options.server) || null,
  }).merge(options)
}

/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
export function namespace(options?: Optional<k8s.Namespace>) : k8s.Namespace {
  return (<k8s.Namespace>{
    apiVersion: "v1",
    kind: "Namespace",
  }).merge(options)
}

/**
 * NamespaceList is a list of Namespaces.
 */
export function namespaceList(options?: Optional<k8s.NamespaceList>) : k8s.NamespaceList {
  return (<k8s.NamespaceList>{
    apiVersion: "v1",
    kind: "NamespaceList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export function namespaceSpec(options?: Optional<k8s.NamespaceSpec>) : k8s.NamespaceSpec {
  return (<k8s.NamespaceSpec>{
  }).merge(options)
}

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export function namespaceStatus(options?: Optional<k8s.NamespaceStatus>) : k8s.NamespaceStatus {
  return (<k8s.NamespaceStatus>{
  }).merge(options)
}

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export function networkPolicy(options?: Optional<k8s.NetworkPolicy>) : k8s.NetworkPolicy {
  return (<k8s.NetworkPolicy>{
    apiVersion: "v1",
    kind: "NetworkPolicy",
  }).merge(options)
}

/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export function networkPolicyEgressRule(options?: Optional<k8s.NetworkPolicyEgressRule>) : k8s.NetworkPolicyEgressRule {
  return (<k8s.NetworkPolicyEgressRule>{
  }).merge(options)
}

/**
 * NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
 */
export function networkPolicyIngressRule(options?: Optional<k8s.NetworkPolicyIngressRule>) : k8s.NetworkPolicyIngressRule {
  return (<k8s.NetworkPolicyIngressRule>{
  }).merge(options)
}

/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export function networkPolicyList(options?: Optional<k8s.NetworkPolicyList>) : k8s.NetworkPolicyList {
  return (<k8s.NetworkPolicyList>{
    apiVersion: "v1",
    kind: "NetworkPolicyList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
export function networkPolicyPeer(options?: Optional<k8s.NetworkPolicyPeer>) : k8s.NetworkPolicyPeer {
  return (<k8s.NetworkPolicyPeer>{
  }).merge(options)
}

/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export function networkPolicyPort(options?: Optional<k8s.NetworkPolicyPort>) : k8s.NetworkPolicyPort {
  return (<k8s.NetworkPolicyPort>{
  }).merge(options)
}

/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 */
export function networkPolicySpec(options?: Optional<k8s.NetworkPolicySpec>) : k8s.NetworkPolicySpec {
  return (<k8s.NetworkPolicySpec>{
    podSelector: (options && options.podSelector) || labelSelector(),
  }).merge(options)
}

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
export function node(options?: Optional<k8s.Node>) : k8s.Node {
  return (<k8s.Node>{
    apiVersion: "v1",
    kind: "Node",
  }).merge(options)
}

/**
 * NodeAddress contains information for the node's address.
 */
export function nodeAddress(options?: Optional<k8s.NodeAddress>) : k8s.NodeAddress {
  return (<k8s.NodeAddress>{
    address: (options && options.address) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * Node affinity is a group of node affinity scheduling rules.
 */
export function nodeAffinity(options?: Optional<k8s.NodeAffinity>) : k8s.NodeAffinity {
  return (<k8s.NodeAffinity>{
  }).merge(options)
}

/**
 * NodeCondition contains condition information for a node.
 */
export function nodeCondition(options?: Optional<k8s.NodeCondition>) : k8s.NodeCondition {
  return (<k8s.NodeCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
export function nodeConfigSource(options?: Optional<k8s.NodeConfigSource>) : k8s.NodeConfigSource {
  return (<k8s.NodeConfigSource>{
  }).merge(options)
}

/**
 * NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
 */
export function nodeConfigStatus(options?: Optional<k8s.NodeConfigStatus>) : k8s.NodeConfigStatus {
  return (<k8s.NodeConfigStatus>{
  }).merge(options)
}

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export function nodeDaemonEndpoints(options?: Optional<k8s.NodeDaemonEndpoints>) : k8s.NodeDaemonEndpoints {
  return (<k8s.NodeDaemonEndpoints>{
  }).merge(options)
}

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
export function nodeList(options?: Optional<k8s.NodeList>) : k8s.NodeList {
  return (<k8s.NodeList>{
    apiVersion: "v1",
    kind: "NodeList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export function nodeSelector(options?: Optional<k8s.NodeSelector>) : k8s.NodeSelector {
  return (<k8s.NodeSelector>{
    nodeSelectorTerms: (options && options.nodeSelectorTerms) || [],
  }).merge(options)
}

/**
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export function nodeSelectorRequirement(options?: Optional<k8s.NodeSelectorRequirement>) : k8s.NodeSelectorRequirement {
  return (<k8s.NodeSelectorRequirement>{
    key: (options && options.key) || null,
    operator: (options && options.operator) || null,
  }).merge(options)
}

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export function nodeSelectorTerm(options?: Optional<k8s.NodeSelectorTerm>) : k8s.NodeSelectorTerm {
  return (<k8s.NodeSelectorTerm>{
  }).merge(options)
}

/**
 * NodeSpec describes the attributes that a node is created with.
 */
export function nodeSpec(options?: Optional<k8s.NodeSpec>) : k8s.NodeSpec {
  return (<k8s.NodeSpec>{
  }).merge(options)
}

/**
 * NodeStatus is information about the current status of a node.
 */
export function nodeStatus(options?: Optional<k8s.NodeStatus>) : k8s.NodeStatus {
  return (<k8s.NodeStatus>{
  }).merge(options)
}

/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
export function nodeSystemInfo(options?: Optional<k8s.NodeSystemInfo>) : k8s.NodeSystemInfo {
  return (<k8s.NodeSystemInfo>{
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
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export function nonResourceAttributes(options?: Optional<k8s.NonResourceAttributes>) : k8s.NonResourceAttributes {
  return (<k8s.NonResourceAttributes>{
  }).merge(options)
}

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export function nonResourceRule(options?: Optional<k8s.NonResourceRule>) : k8s.NonResourceRule {
  return (<k8s.NonResourceRule>{
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export function objectFieldSelector(options?: Optional<k8s.ObjectFieldSelector>) : k8s.ObjectFieldSelector {
  return (<k8s.ObjectFieldSelector>{
    apiVersion: "v1",
    fieldPath: (options && options.fieldPath) || null,
  }).merge(options)
}

/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
export function objectMeta(options?: Optional<k8s.ObjectMeta>) : k8s.ObjectMeta {
  return (<k8s.ObjectMeta>{
  }).merge(options)
}

/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
export function objectReference(options?: Optional<k8s.ObjectReference>) : k8s.ObjectReference {
  return (<k8s.ObjectReference>{
    apiVersion: "v1",
    kind: "ObjectReference",
  }).merge(options)
}

/**
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 */
export function ownerReference(options?: Optional<k8s.OwnerReference>) : k8s.OwnerReference {
  return (<k8s.OwnerReference>{
    apiVersion: "v1",
    kind: "OwnerReference",
    name: (options && options.name) || null,
    uid: (options && options.uid) || null,
  }).merge(options)
}

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export function persistentVolume(options?: Optional<k8s.PersistentVolume>) : k8s.PersistentVolume {
  return (<k8s.PersistentVolume>{
    apiVersion: "v1",
    kind: "PersistentVolume",
  }).merge(options)
}

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export function persistentVolumeClaim(options?: Optional<k8s.PersistentVolumeClaim>) : k8s.PersistentVolumeClaim {
  return (<k8s.PersistentVolumeClaim>{
    apiVersion: "v1",
    kind: "PersistentVolumeClaim",
  }).merge(options)
}

/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
export function persistentVolumeClaimCondition(options?: Optional<k8s.PersistentVolumeClaimCondition>) : k8s.PersistentVolumeClaimCondition {
  return (<k8s.PersistentVolumeClaimCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
export function persistentVolumeClaimList(options?: Optional<k8s.PersistentVolumeClaimList>) : k8s.PersistentVolumeClaimList {
  return (<k8s.PersistentVolumeClaimList>{
    apiVersion: "v1",
    kind: "PersistentVolumeClaimList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 */
export function persistentVolumeClaimSpec(options?: Optional<k8s.PersistentVolumeClaimSpec>) : k8s.PersistentVolumeClaimSpec {
  return (<k8s.PersistentVolumeClaimSpec>{
  }).merge(options)
}

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
export function persistentVolumeClaimStatus(options?: Optional<k8s.PersistentVolumeClaimStatus>) : k8s.PersistentVolumeClaimStatus {
  return (<k8s.PersistentVolumeClaimStatus>{
  }).merge(options)
}

/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 */
export function persistentVolumeClaimVolumeSource(options?: Optional<k8s.PersistentVolumeClaimVolumeSource>) : k8s.PersistentVolumeClaimVolumeSource {
  return (<k8s.PersistentVolumeClaimVolumeSource>{
    claimName: (options && options.claimName) || null,
  }).merge(options)
}

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export function persistentVolumeList(options?: Optional<k8s.PersistentVolumeList>) : k8s.PersistentVolumeList {
  return (<k8s.PersistentVolumeList>{
    apiVersion: "v1",
    kind: "PersistentVolumeList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export function persistentVolumeSpec(options?: Optional<k8s.PersistentVolumeSpec>) : k8s.PersistentVolumeSpec {
  return (<k8s.PersistentVolumeSpec>{
  }).merge(options)
}

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export function persistentVolumeStatus(options?: Optional<k8s.PersistentVolumeStatus>) : k8s.PersistentVolumeStatus {
  return (<k8s.PersistentVolumeStatus>{
  }).merge(options)
}

/**
 * Represents a Photon Controller persistent disk resource.
 */
export function photonPersistentDiskVolumeSource(options?: Optional<k8s.PhotonPersistentDiskVolumeSource>) : k8s.PhotonPersistentDiskVolumeSource {
  return (<k8s.PhotonPersistentDiskVolumeSource>{
    pdID: (options && options.pdID) || null,
  }).merge(options)
}

/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 */
export function pod(options?: Optional<k8s.Pod>) : k8s.Pod {
  return (<k8s.Pod>{
    apiVersion: "v1",
    kind: "Pod",
  }).merge(options)
}

/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 */
export function podAffinity(options?: Optional<k8s.PodAffinity>) : k8s.PodAffinity {
  return (<k8s.PodAffinity>{
  }).merge(options)
}

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
export function podAffinityTerm(options?: Optional<k8s.PodAffinityTerm>) : k8s.PodAffinityTerm {
  return (<k8s.PodAffinityTerm>{
    topologyKey: (options && options.topologyKey) || null,
  }).merge(options)
}

/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 */
export function podAntiAffinity(options?: Optional<k8s.PodAntiAffinity>) : k8s.PodAntiAffinity {
  return (<k8s.PodAntiAffinity>{
  }).merge(options)
}

/**
 * PodCondition contains details for the current condition of this pod.
 */
export function podCondition(options?: Optional<k8s.PodCondition>) : k8s.PodCondition {
  return (<k8s.PodCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
export function podDNSConfig(options?: Optional<k8s.PodDNSConfig>) : k8s.PodDNSConfig {
  return (<k8s.PodDNSConfig>{
  }).merge(options)
}

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export function podDNSConfigOption(options?: Optional<k8s.PodDNSConfigOption>) : k8s.PodDNSConfigOption {
  return (<k8s.PodDNSConfigOption>{
  }).merge(options)
}

/**
 * PodList is a list of Pods.
 */
export function podList(options?: Optional<k8s.PodList>) : k8s.PodList {
  return (<k8s.PodList>{
    apiVersion: "v1",
    kind: "PodList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export function podReadinessGate(options?: Optional<k8s.PodReadinessGate>) : k8s.PodReadinessGate {
  return (<k8s.PodReadinessGate>{
    conditionType: (options && options.conditionType) || null,
  }).merge(options)
}

/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 */
export function podSecurityContext(options?: Optional<k8s.PodSecurityContext>) : k8s.PodSecurityContext {
  return (<k8s.PodSecurityContext>{
  }).merge(options)
}

/**
 * PodSpec is a description of a pod.
 */
export function podSpec(options?: Optional<k8s.PodSpec>) : k8s.PodSpec {
  return (<k8s.PodSpec>{
    containers: (options && options.containers) || [],
  }).merge(options)
}

/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
export function podStatus(options?: Optional<k8s.PodStatus>) : k8s.PodStatus {
  return (<k8s.PodStatus>{
  }).merge(options)
}

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export function podTemplate(options?: Optional<k8s.PodTemplate>) : k8s.PodTemplate {
  return (<k8s.PodTemplate>{
    apiVersion: "v1",
    kind: "PodTemplate",
  }).merge(options)
}

/**
 * PodTemplateList is a list of PodTemplates.
 */
export function podTemplateList(options?: Optional<k8s.PodTemplateList>) : k8s.PodTemplateList {
  return (<k8s.PodTemplateList>{
    apiVersion: "v1",
    kind: "PodTemplateList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export function podTemplateSpec(options?: Optional<k8s.PodTemplateSpec>) : k8s.PodTemplateSpec {
  return (<k8s.PodTemplateSpec>{
  }).merge(options)
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export function policyRule(options?: Optional<k8s.PolicyRule>) : k8s.PolicyRule {
  return (<k8s.PolicyRule>{
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export function portworxVolumeSource(options?: Optional<k8s.PortworxVolumeSource>) : k8s.PortworxVolumeSource {
  return (<k8s.PortworxVolumeSource>{
    volumeID: (options && options.volumeID) || null,
  }).merge(options)
}

/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export function preconditions(options?: Optional<k8s.Preconditions>) : k8s.Preconditions {
  return (<k8s.Preconditions>{
  }).merge(options)
}

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export function preferredSchedulingTerm(options?: Optional<k8s.PreferredSchedulingTerm>) : k8s.PreferredSchedulingTerm {
  return (<k8s.PreferredSchedulingTerm>{
    preference: (options && options.preference) || nodeSelectorTerm(),
    weight: (options && options.weight) || 0,
  }).merge(options)
}

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export function probe(options?: Optional<k8s.Probe>) : k8s.Probe {
  return (<k8s.Probe>{
  }).merge(options)
}

/**
 * Represents a projected volume source
 */
export function projectedVolumeSource(options?: Optional<k8s.ProjectedVolumeSource>) : k8s.ProjectedVolumeSource {
  return (<k8s.ProjectedVolumeSource>{
    sources: (options && options.sources) || [],
  }).merge(options)
}

/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
export function quobyteVolumeSource(options?: Optional<k8s.QuobyteVolumeSource>) : k8s.QuobyteVolumeSource {
  return (<k8s.QuobyteVolumeSource>{
    registry: (options && options.registry) || null,
    volume: (options && options.volume) || null,
  }).merge(options)
}

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export function rBDPersistentVolumeSource(options?: Optional<k8s.RBDPersistentVolumeSource>) : k8s.RBDPersistentVolumeSource {
  return (<k8s.RBDPersistentVolumeSource>{
    image: (options && options.image) || null,
    monitors: (options && options.monitors) || [],
  }).merge(options)
}

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export function rBDVolumeSource(options?: Optional<k8s.RBDVolumeSource>) : k8s.RBDVolumeSource {
  return (<k8s.RBDVolumeSource>{
    image: (options && options.image) || null,
    monitors: (options && options.monitors) || [],
  }).merge(options)
}

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export function replicaSet(options?: Optional<k8s.ReplicaSet>) : k8s.ReplicaSet {
  return (<k8s.ReplicaSet>{
    apiVersion: "v1",
    kind: "ReplicaSet",
  }).merge(options)
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export function replicaSetCondition(options?: Optional<k8s.ReplicaSetCondition>) : k8s.ReplicaSetCondition {
  return (<k8s.ReplicaSetCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export function replicaSetList(options?: Optional<k8s.ReplicaSetList>) : k8s.ReplicaSetList {
  return (<k8s.ReplicaSetList>{
    apiVersion: "v1",
    kind: "ReplicaSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export function replicaSetSpec(options?: Optional<k8s.ReplicaSetSpec>) : k8s.ReplicaSetSpec {
  return (<k8s.ReplicaSetSpec>{
    selector: (options && options.selector) || labelSelector(),
  }).merge(options)
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export function replicaSetStatus(options?: Optional<k8s.ReplicaSetStatus>) : k8s.ReplicaSetStatus {
  return (<k8s.ReplicaSetStatus>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * ReplicationController represents the configuration of a replication controller.
 */
export function replicationController(options?: Optional<k8s.ReplicationController>) : k8s.ReplicationController {
  return (<k8s.ReplicationController>{
    apiVersion: "v1",
    kind: "ReplicationController",
  }).merge(options)
}

/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export function replicationControllerCondition(options?: Optional<k8s.ReplicationControllerCondition>) : k8s.ReplicationControllerCondition {
  return (<k8s.ReplicationControllerCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export function replicationControllerList(options?: Optional<k8s.ReplicationControllerList>) : k8s.ReplicationControllerList {
  return (<k8s.ReplicationControllerList>{
    apiVersion: "v1",
    kind: "ReplicationControllerList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ReplicationControllerSpec is the specification of a replication controller.
 */
export function replicationControllerSpec(options?: Optional<k8s.ReplicationControllerSpec>) : k8s.ReplicationControllerSpec {
  return (<k8s.ReplicationControllerSpec>{
  }).merge(options)
}

/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
export function replicationControllerStatus(options?: Optional<k8s.ReplicationControllerStatus>) : k8s.ReplicationControllerStatus {
  return (<k8s.ReplicationControllerStatus>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export function resourceAttributes(options?: Optional<k8s.ResourceAttributes>) : k8s.ResourceAttributes {
  return (<k8s.ResourceAttributes>{
  }).merge(options)
}

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export function resourceFieldSelector(options?: Optional<k8s.ResourceFieldSelector>) : k8s.ResourceFieldSelector {
  return (<k8s.ResourceFieldSelector>{
    resource: (options && options.resource) || null,
  }).merge(options)
}

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export function resourceQuota(options?: Optional<k8s.ResourceQuota>) : k8s.ResourceQuota {
  return (<k8s.ResourceQuota>{
    apiVersion: "v1",
    kind: "ResourceQuota",
  }).merge(options)
}

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export function resourceQuotaList(options?: Optional<k8s.ResourceQuotaList>) : k8s.ResourceQuotaList {
  return (<k8s.ResourceQuotaList>{
    apiVersion: "v1",
    kind: "ResourceQuotaList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export function resourceQuotaSpec(options?: Optional<k8s.ResourceQuotaSpec>) : k8s.ResourceQuotaSpec {
  return (<k8s.ResourceQuotaSpec>{
  }).merge(options)
}

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export function resourceQuotaStatus(options?: Optional<k8s.ResourceQuotaStatus>) : k8s.ResourceQuotaStatus {
  return (<k8s.ResourceQuotaStatus>{
  }).merge(options)
}

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export function resourceRequirements(options?: Optional<k8s.ResourceRequirements>) : k8s.ResourceRequirements {
  return (<k8s.ResourceRequirements>{
  }).merge(options)
}

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export function resourceRule(options?: Optional<k8s.ResourceRule>) : k8s.ResourceRule {
  return (<k8s.ResourceRule>{
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export function role(options?: Optional<k8s.Role>) : k8s.Role {
  return (<k8s.Role>{
    apiVersion: "v1",
    kind: "Role",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export function roleBinding(options?: Optional<k8s.RoleBinding>) : k8s.RoleBinding {
  return (<k8s.RoleBinding>{
    apiVersion: "v1",
    kind: "RoleBinding",
    roleRef: (options && options.roleRef) || roleRef(),
  }).merge(options)
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export function roleBindingList(options?: Optional<k8s.RoleBindingList>) : k8s.RoleBindingList {
  return (<k8s.RoleBindingList>{
    apiVersion: "v1",
    kind: "RoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleList is a collection of Roles
 */
export function roleList(options?: Optional<k8s.RoleList>) : k8s.RoleList {
  return (<k8s.RoleList>{
    apiVersion: "v1",
    kind: "RoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleRef contains information that points to the role being used
 */
export function roleRef(options?: Optional<k8s.RoleRef>) : k8s.RoleRef {
  return (<k8s.RoleRef>{
    kind: "RoleRef",
    apiGroup: (options && options.apiGroup) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export function rollingUpdateDaemonSet(options?: Optional<k8s.RollingUpdateDaemonSet>) : k8s.RollingUpdateDaemonSet {
  return (<k8s.RollingUpdateDaemonSet>{
  }).merge(options)
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export function rollingUpdateDeployment(options?: Optional<k8s.RollingUpdateDeployment>) : k8s.RollingUpdateDeployment {
  return (<k8s.RollingUpdateDeployment>{
  }).merge(options)
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export function rollingUpdateStatefulSetStrategy(options?: Optional<k8s.RollingUpdateStatefulSetStrategy>) : k8s.RollingUpdateStatefulSetStrategy {
  return (<k8s.RollingUpdateStatefulSetStrategy>{
  }).merge(options)
}

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export function sELinuxOptions(options?: Optional<k8s.SELinuxOptions>) : k8s.SELinuxOptions {
  return (<k8s.SELinuxOptions>{
  }).merge(options)
}

/**
 * Scale represents a scaling request for a resource.
 */
export function scale(options?: Optional<k8s.Scale>) : k8s.Scale {
  return (<k8s.Scale>{
    apiVersion: "v1",
    kind: "Scale",
  }).merge(options)
}

/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 */
export function scaleIOPersistentVolumeSource(options?: Optional<k8s.ScaleIOPersistentVolumeSource>) : k8s.ScaleIOPersistentVolumeSource {
  return (<k8s.ScaleIOPersistentVolumeSource>{
    gateway: (options && options.gateway) || null,
    secretRef: (options && options.secretRef) || secretReference(),
    system: (options && options.system) || null,
  }).merge(options)
}

/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
export function scaleIOVolumeSource(options?: Optional<k8s.ScaleIOVolumeSource>) : k8s.ScaleIOVolumeSource {
  return (<k8s.ScaleIOVolumeSource>{
    gateway: (options && options.gateway) || null,
    secretRef: (options && options.secretRef) || localObjectReference(),
    system: (options && options.system) || null,
  }).merge(options)
}

/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export function scaleSpec(options?: Optional<k8s.ScaleSpec>) : k8s.ScaleSpec {
  return (<k8s.ScaleSpec>{
  }).merge(options)
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export function scaleStatus(options?: Optional<k8s.ScaleStatus>) : k8s.ScaleStatus {
  return (<k8s.ScaleStatus>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export function scopeSelector(options?: Optional<k8s.ScopeSelector>) : k8s.ScopeSelector {
  return (<k8s.ScopeSelector>{
  }).merge(options)
}

/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
export function scopedResourceSelectorRequirement(options?: Optional<k8s.ScopedResourceSelectorRequirement>) : k8s.ScopedResourceSelectorRequirement {
  return (<k8s.ScopedResourceSelectorRequirement>{
    operator: (options && options.operator) || null,
    scopeName: (options && options.scopeName) || null,
  }).merge(options)
}

/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 */
export function secret(options?: Optional<k8s.Secret>) : k8s.Secret {
  return (<k8s.Secret>{
    apiVersion: "v1",
    kind: "Secret",
  }).merge(options)
}

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 * 
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export function secretEnvSource(options?: Optional<k8s.SecretEnvSource>) : k8s.SecretEnvSource {
  return (<k8s.SecretEnvSource>{
  }).merge(options)
}

/**
 * SecretKeySelector selects a key of a Secret.
 */
export function secretKeySelector(options?: Optional<k8s.SecretKeySelector>) : k8s.SecretKeySelector {
  return (<k8s.SecretKeySelector>{
    key: (options && options.key) || null,
  }).merge(options)
}

/**
 * SecretList is a list of Secret.
 */
export function secretList(options?: Optional<k8s.SecretList>) : k8s.SecretList {
  return (<k8s.SecretList>{
    apiVersion: "v1",
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
  return (<k8s.SecretProjection>{
  }).merge(options)
}

/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export function secretReference(options?: Optional<k8s.SecretReference>) : k8s.SecretReference {
  return (<k8s.SecretReference>{
  }).merge(options)
}

/**
 * Adapts a Secret into a volume.
 * 
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export function secretVolumeSource(options?: Optional<k8s.SecretVolumeSource>) : k8s.SecretVolumeSource {
  return (<k8s.SecretVolumeSource>{
  }).merge(options)
}

/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 */
export function securityContext(options?: Optional<k8s.SecurityContext>) : k8s.SecurityContext {
  return (<k8s.SecurityContext>{
  }).merge(options)
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export function selfSubjectAccessReview(options?: Optional<k8s.SelfSubjectAccessReview>) : k8s.SelfSubjectAccessReview {
  return (<k8s.SelfSubjectAccessReview>{
    apiVersion: "v1",
    kind: "SelfSubjectAccessReview",
    spec: (options && options.spec) || selfSubjectAccessReviewSpec(),
  }).merge(options)
}

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export function selfSubjectAccessReviewSpec(options?: Optional<k8s.SelfSubjectAccessReviewSpec>) : k8s.SelfSubjectAccessReviewSpec {
  return (<k8s.SelfSubjectAccessReviewSpec>{
  }).merge(options)
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export function selfSubjectRulesReview(options?: Optional<k8s.SelfSubjectRulesReview>) : k8s.SelfSubjectRulesReview {
  return (<k8s.SelfSubjectRulesReview>{
    apiVersion: "v1",
    kind: "SelfSubjectRulesReview",
    spec: (options && options.spec) || selfSubjectRulesReviewSpec(),
  }).merge(options)
}

export function selfSubjectRulesReviewSpec(options?: Optional<k8s.SelfSubjectRulesReviewSpec>) : k8s.SelfSubjectRulesReviewSpec {
  return (<k8s.SelfSubjectRulesReviewSpec>{
  }).merge(options)
}

/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
export function serverAddressByClientCIDR(options?: Optional<k8s.ServerAddressByClientCIDR>) : k8s.ServerAddressByClientCIDR {
  return (<k8s.ServerAddressByClientCIDR>{
    clientCIDR: (options && options.clientCIDR) || null,
    serverAddress: (options && options.serverAddress) || null,
  }).merge(options)
}

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export function service(options?: Optional<k8s.Service>) : k8s.Service {
  return (<k8s.Service>{
    apiVersion: "v1",
    kind: "Service",
  }).merge(options)
}

/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 */
export function serviceAccount(options?: Optional<k8s.ServiceAccount>) : k8s.ServiceAccount {
  return (<k8s.ServiceAccount>{
    apiVersion: "v1",
    kind: "ServiceAccount",
  }).merge(options)
}

/**
 * ServiceAccountList is a list of ServiceAccount objects
 */
export function serviceAccountList(options?: Optional<k8s.ServiceAccountList>) : k8s.ServiceAccountList {
  return (<k8s.ServiceAccountList>{
    apiVersion: "v1",
    kind: "ServiceAccountList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 */
export function serviceAccountTokenProjection(options?: Optional<k8s.ServiceAccountTokenProjection>) : k8s.ServiceAccountTokenProjection {
  return (<k8s.ServiceAccountTokenProjection>{
    path: (options && options.path) || null,
  }).merge(options)
}

/**
 * ServiceList holds a list of services.
 */
export function serviceList(options?: Optional<k8s.ServiceList>) : k8s.ServiceList {
  return (<k8s.ServiceList>{
    apiVersion: "v1",
    kind: "ServiceList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ServicePort contains information on service's port.
 */
export function servicePort(options?: Optional<k8s.ServicePort>) : k8s.ServicePort {
  return (<k8s.ServicePort>{
    port: (options && options.port) || 0,
  }).merge(options)
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export function serviceReference(options?: Optional<k8s.ServiceReference>) : k8s.ServiceReference {
  return (<k8s.ServiceReference>{
  }).merge(options)
}

/**
 * ServiceSpec describes the attributes that a user creates on a service.
 */
export function serviceSpec(options?: Optional<k8s.ServiceSpec>) : k8s.ServiceSpec {
  return (<k8s.ServiceSpec>{
  }).merge(options)
}

/**
 * ServiceStatus represents the current status of a service.
 */
export function serviceStatus(options?: Optional<k8s.ServiceStatus>) : k8s.ServiceStatus {
  return (<k8s.ServiceStatus>{
  }).merge(options)
}

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export function sessionAffinityConfig(options?: Optional<k8s.SessionAffinityConfig>) : k8s.SessionAffinityConfig {
  return (<k8s.SessionAffinityConfig>{
  }).merge(options)
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export function statefulSet(options?: Optional<k8s.StatefulSet>) : k8s.StatefulSet {
  return (<k8s.StatefulSet>{
    apiVersion: "v1",
    kind: "StatefulSet",
  }).merge(options)
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export function statefulSetCondition(options?: Optional<k8s.StatefulSetCondition>) : k8s.StatefulSetCondition {
  return (<k8s.StatefulSetCondition>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export function statefulSetList(options?: Optional<k8s.StatefulSetList>) : k8s.StatefulSetList {
  return (<k8s.StatefulSetList>{
    apiVersion: "v1",
    kind: "StatefulSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export function statefulSetSpec(options?: Optional<k8s.StatefulSetSpec>) : k8s.StatefulSetSpec {
  return (<k8s.StatefulSetSpec>{
    selector: (options && options.selector) || labelSelector(),
    serviceName: (options && options.serviceName) || null,
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export function statefulSetStatus(options?: Optional<k8s.StatefulSetStatus>) : k8s.StatefulSetStatus {
  return (<k8s.StatefulSetStatus>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export function statefulSetUpdateStrategy(options?: Optional<k8s.StatefulSetUpdateStrategy>) : k8s.StatefulSetUpdateStrategy {
  return (<k8s.StatefulSetUpdateStrategy>{
  }).merge(options)
}

/**
 * Status is a return value for calls that don't return other objects.
 */
export function status(options?: Optional<k8s.Status>) : k8s.Status {
  return (<k8s.Status>{
    apiVersion: "v1",
    kind: "Status",
  }).merge(options)
}

/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export function statusCause(options?: Optional<k8s.StatusCause>) : k8s.StatusCause {
  return (<k8s.StatusCause>{
  }).merge(options)
}

/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export function statusDetails(options?: Optional<k8s.StatusDetails>) : k8s.StatusDetails {
  return (<k8s.StatusDetails>{
    kind: "StatusDetails",
  }).merge(options)
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export function storageClass(options?: Optional<k8s.StorageClass>) : k8s.StorageClass {
  return (<k8s.StorageClass>{
    apiVersion: "v1",
    kind: "StorageClass",
    provisioner: (options && options.provisioner) || null,
  }).merge(options)
}

/**
 * StorageClassList is a collection of storage classes.
 */
export function storageClassList(options?: Optional<k8s.StorageClassList>) : k8s.StorageClassList {
  return (<k8s.StorageClassList>{
    apiVersion: "v1",
    kind: "StorageClassList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * Represents a StorageOS persistent volume resource.
 */
export function storageOSPersistentVolumeSource(options?: Optional<k8s.StorageOSPersistentVolumeSource>) : k8s.StorageOSPersistentVolumeSource {
  return (<k8s.StorageOSPersistentVolumeSource>{
  }).merge(options)
}

/**
 * Represents a StorageOS persistent volume resource.
 */
export function storageOSVolumeSource(options?: Optional<k8s.StorageOSVolumeSource>) : k8s.StorageOSVolumeSource {
  return (<k8s.StorageOSVolumeSource>{
  }).merge(options)
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export function subject(options?: Optional<k8s.Subject>) : k8s.Subject {
  return (<k8s.Subject>{
    kind: "Subject",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export function subjectAccessReview(options?: Optional<k8s.SubjectAccessReview>) : k8s.SubjectAccessReview {
  return (<k8s.SubjectAccessReview>{
    apiVersion: "v1",
    kind: "SubjectAccessReview",
    spec: (options && options.spec) || subjectAccessReviewSpec(),
  }).merge(options)
}

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export function subjectAccessReviewSpec(options?: Optional<k8s.SubjectAccessReviewSpec>) : k8s.SubjectAccessReviewSpec {
  return (<k8s.SubjectAccessReviewSpec>{
  }).merge(options)
}

/**
 * SubjectAccessReviewStatus
 */
export function subjectAccessReviewStatus(options?: Optional<k8s.SubjectAccessReviewStatus>) : k8s.SubjectAccessReviewStatus {
  return (<k8s.SubjectAccessReviewStatus>{
    allowed: (options && options.allowed) || false,
  }).merge(options)
}

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export function subjectRulesReviewStatus(options?: Optional<k8s.SubjectRulesReviewStatus>) : k8s.SubjectRulesReviewStatus {
  return (<k8s.SubjectRulesReviewStatus>{
    incomplete: (options && options.incomplete) || false,
    nonResourceRules: (options && options.nonResourceRules) || [],
    resourceRules: (options && options.resourceRules) || [],
  }).merge(options)
}

/**
 * Sysctl defines a kernel parameter to be set
 */
export function sysctl(options?: Optional<k8s.Sysctl>) : k8s.Sysctl {
  return (<k8s.Sysctl>{
    name: (options && options.name) || null,
    value: (options && options.value) || null,
  }).merge(options)
}

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export function tCPSocketAction(options?: Optional<k8s.TCPSocketAction>) : k8s.TCPSocketAction {
  return (<k8s.TCPSocketAction>{
    port: (options && options.port) || null,
  }).merge(options)
}

/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export function taint(options?: Optional<k8s.Taint>) : k8s.Taint {
  return (<k8s.Taint>{
    effect: (options && options.effect) || null,
    key: (options && options.key) || null,
  }).merge(options)
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export function tokenReview(options?: Optional<k8s.TokenReview>) : k8s.TokenReview {
  return (<k8s.TokenReview>{
    apiVersion: "v1",
    kind: "TokenReview",
    spec: (options && options.spec) || tokenReviewSpec(),
  }).merge(options)
}

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export function tokenReviewSpec(options?: Optional<k8s.TokenReviewSpec>) : k8s.TokenReviewSpec {
  return (<k8s.TokenReviewSpec>{
  }).merge(options)
}

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export function tokenReviewStatus(options?: Optional<k8s.TokenReviewStatus>) : k8s.TokenReviewStatus {
  return (<k8s.TokenReviewStatus>{
  }).merge(options)
}

/**
 * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 */
export function toleration(options?: Optional<k8s.Toleration>) : k8s.Toleration {
  return (<k8s.Toleration>{
  }).merge(options)
}

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export function topologySelectorLabelRequirement(options?: Optional<k8s.TopologySelectorLabelRequirement>) : k8s.TopologySelectorLabelRequirement {
  return (<k8s.TopologySelectorLabelRequirement>{
    key: (options && options.key) || null,
    values: (options && options.values) || [],
  }).merge(options)
}

/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
export function topologySelectorTerm(options?: Optional<k8s.TopologySelectorTerm>) : k8s.TopologySelectorTerm {
  return (<k8s.TopologySelectorTerm>{
  }).merge(options)
}

/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export function typedLocalObjectReference(options?: Optional<k8s.TypedLocalObjectReference>) : k8s.TypedLocalObjectReference {
  return (<k8s.TypedLocalObjectReference>{
    kind: "TypedLocalObjectReference",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export function userInfo(options?: Optional<k8s.UserInfo>) : k8s.UserInfo {
  return (<k8s.UserInfo>{
  }).merge(options)
}

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export function volume(options?: Optional<k8s.Volume>) : k8s.Volume {
  return (<k8s.Volume>{
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export function volumeAttachment(options?: Optional<k8s.VolumeAttachment>) : k8s.VolumeAttachment {
  return (<k8s.VolumeAttachment>{
    apiVersion: "v1",
    kind: "VolumeAttachment",
    spec: (options && options.spec) || volumeAttachmentSpec(),
  }).merge(options)
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export function volumeAttachmentList(options?: Optional<k8s.VolumeAttachmentList>) : k8s.VolumeAttachmentList {
  return (<k8s.VolumeAttachmentList>{
    apiVersion: "v1",
    kind: "VolumeAttachmentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export function volumeAttachmentSource(options?: Optional<k8s.VolumeAttachmentSource>) : k8s.VolumeAttachmentSource {
  return (<k8s.VolumeAttachmentSource>{
  }).merge(options)
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export function volumeAttachmentSpec(options?: Optional<k8s.VolumeAttachmentSpec>) : k8s.VolumeAttachmentSpec {
  return (<k8s.VolumeAttachmentSpec>{
    attacher: (options && options.attacher) || null,
    nodeName: (options && options.nodeName) || null,
    source: (options && options.source) || volumeAttachmentSource(),
  }).merge(options)
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export function volumeAttachmentStatus(options?: Optional<k8s.VolumeAttachmentStatus>) : k8s.VolumeAttachmentStatus {
  return (<k8s.VolumeAttachmentStatus>{
    attached: (options && options.attached) || false,
  }).merge(options)
}

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export function volumeDevice(options?: Optional<k8s.VolumeDevice>) : k8s.VolumeDevice {
  return (<k8s.VolumeDevice>{
    devicePath: (options && options.devicePath) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export function volumeError(options?: Optional<k8s.VolumeError>) : k8s.VolumeError {
  return (<k8s.VolumeError>{
  }).merge(options)
}

/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
export function volumeMount(options?: Optional<k8s.VolumeMount>) : k8s.VolumeMount {
  return (<k8s.VolumeMount>{
    mountPath: (options && options.mountPath) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export function volumeNodeAffinity(options?: Optional<k8s.VolumeNodeAffinity>) : k8s.VolumeNodeAffinity {
  return (<k8s.VolumeNodeAffinity>{
  }).merge(options)
}

/**
 * Projection that may be projected along with other supported volume types
 */
export function volumeProjection(options?: Optional<k8s.VolumeProjection>) : k8s.VolumeProjection {
  return (<k8s.VolumeProjection>{
  }).merge(options)
}

/**
 * Represents a vSphere volume resource.
 */
export function vsphereVirtualDiskVolumeSource(options?: Optional<k8s.VsphereVirtualDiskVolumeSource>) : k8s.VsphereVirtualDiskVolumeSource {
  return (<k8s.VsphereVirtualDiskVolumeSource>{
    volumePath: (options && options.volumePath) || null,
  }).merge(options)
}

/**
 * Event represents a single event to a watched resource.
 */
export function watchEvent(options?: Optional<k8s.WatchEvent>) : k8s.WatchEvent {
  return (<k8s.WatchEvent>{
    object: (options && options.object) || rawExtensionRuntime(),
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export function weightedPodAffinityTerm(options?: Optional<k8s.WeightedPodAffinityTerm>) : k8s.WeightedPodAffinityTerm {
  return (<k8s.WeightedPodAffinityTerm>{
    podAffinityTerm: (options && options.podAffinityTerm) || podAffinityTerm(),
    weight: (options && options.weight) || 0,
  }).merge(options)
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export function aggregationRuleV1alpha1(options?: Optional<k8s.AggregationRuleV1alpha1>) : k8s.AggregationRuleV1alpha1 {
  return (<k8s.AggregationRuleV1alpha1>{
  }).merge(options)
}

/**
 * AuditSink represents a cluster level audit sink
 */
export function auditSinkV1alpha1(options?: Optional<k8s.AuditSinkV1alpha1>) : k8s.AuditSinkV1alpha1 {
  return (<k8s.AuditSinkV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "AuditSink",
  }).merge(options)
}

/**
 * AuditSinkList is a list of AuditSink items.
 */
export function auditSinkListV1alpha1(options?: Optional<k8s.AuditSinkListV1alpha1>) : k8s.AuditSinkListV1alpha1 {
  return (<k8s.AuditSinkListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "AuditSinkList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * AuditSinkSpec holds the spec for the audit sink
 */
export function auditSinkSpecV1alpha1(options?: Optional<k8s.AuditSinkSpecV1alpha1>) : k8s.AuditSinkSpecV1alpha1 {
  return (<k8s.AuditSinkSpecV1alpha1>{
    policy: (options && options.policy) || policyV1alpha1(),
    webhook: (options && options.webhook) || webhookV1alpha1(),
  }).merge(options)
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export function clusterRoleV1alpha1(options?: Optional<k8s.ClusterRoleV1alpha1>) : k8s.ClusterRoleV1alpha1 {
  return (<k8s.ClusterRoleV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "ClusterRole",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export function clusterRoleBindingV1alpha1(options?: Optional<k8s.ClusterRoleBindingV1alpha1>) : k8s.ClusterRoleBindingV1alpha1 {
  return (<k8s.ClusterRoleBindingV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "ClusterRoleBinding",
    roleRef: (options && options.roleRef) || roleRefV1alpha1(),
  }).merge(options)
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export function clusterRoleBindingListV1alpha1(options?: Optional<k8s.ClusterRoleBindingListV1alpha1>) : k8s.ClusterRoleBindingListV1alpha1 {
  return (<k8s.ClusterRoleBindingListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "ClusterRoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export function clusterRoleListV1alpha1(options?: Optional<k8s.ClusterRoleListV1alpha1>) : k8s.ClusterRoleListV1alpha1 {
  return (<k8s.ClusterRoleListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "ClusterRoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * Initializer describes the name and the failure policy of an initializer, and what resources it applies to.
 */
export function initializerV1alpha1(options?: Optional<k8s.InitializerV1alpha1>) : k8s.InitializerV1alpha1 {
  return (<k8s.InitializerV1alpha1>{
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * InitializerConfiguration describes the configuration of initializers.
 */
export function initializerConfigurationV1alpha1(options?: Optional<k8s.InitializerConfigurationV1alpha1>) : k8s.InitializerConfigurationV1alpha1 {
  return (<k8s.InitializerConfigurationV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "InitializerConfiguration",
  }).merge(options)
}

/**
 * InitializerConfigurationList is a list of InitializerConfiguration.
 */
export function initializerConfigurationListV1alpha1(options?: Optional<k8s.InitializerConfigurationListV1alpha1>) : k8s.InitializerConfigurationListV1alpha1 {
  return (<k8s.InitializerConfigurationListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "InitializerConfigurationList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 */
export function podPresetV1alpha1(options?: Optional<k8s.PodPresetV1alpha1>) : k8s.PodPresetV1alpha1 {
  return (<k8s.PodPresetV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "PodPreset",
  }).merge(options)
}

/**
 * PodPresetList is a list of PodPreset objects.
 */
export function podPresetListV1alpha1(options?: Optional<k8s.PodPresetListV1alpha1>) : k8s.PodPresetListV1alpha1 {
  return (<k8s.PodPresetListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "PodPresetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodPresetSpec is a description of a pod preset.
 */
export function podPresetSpecV1alpha1(options?: Optional<k8s.PodPresetSpecV1alpha1>) : k8s.PodPresetSpecV1alpha1 {
  return (<k8s.PodPresetSpecV1alpha1>{
  }).merge(options)
}

/**
 * Policy defines the configuration of how audit events are logged
 */
export function policyV1alpha1(options?: Optional<k8s.PolicyV1alpha1>) : k8s.PolicyV1alpha1 {
  return (<k8s.PolicyV1alpha1>{
    level: (options && options.level) || null,
  }).merge(options)
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export function policyRuleV1alpha1(options?: Optional<k8s.PolicyRuleV1alpha1>) : k8s.PolicyRuleV1alpha1 {
  return (<k8s.PolicyRuleV1alpha1>{
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export function priorityClassV1alpha1(options?: Optional<k8s.PriorityClassV1alpha1>) : k8s.PriorityClassV1alpha1 {
  return (<k8s.PriorityClassV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "PriorityClass",
    value: (options && options.value) || 0,
  }).merge(options)
}

/**
 * PriorityClassList is a collection of priority classes.
 */
export function priorityClassListV1alpha1(options?: Optional<k8s.PriorityClassListV1alpha1>) : k8s.PriorityClassListV1alpha1 {
  return (<k8s.PriorityClassListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "PriorityClassList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export function roleV1alpha1(options?: Optional<k8s.RoleV1alpha1>) : k8s.RoleV1alpha1 {
  return (<k8s.RoleV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "Role",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export function roleBindingV1alpha1(options?: Optional<k8s.RoleBindingV1alpha1>) : k8s.RoleBindingV1alpha1 {
  return (<k8s.RoleBindingV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "RoleBinding",
    roleRef: (options && options.roleRef) || roleRefV1alpha1(),
  }).merge(options)
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export function roleBindingListV1alpha1(options?: Optional<k8s.RoleBindingListV1alpha1>) : k8s.RoleBindingListV1alpha1 {
  return (<k8s.RoleBindingListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "RoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleList is a collection of Roles
 */
export function roleListV1alpha1(options?: Optional<k8s.RoleListV1alpha1>) : k8s.RoleListV1alpha1 {
  return (<k8s.RoleListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "RoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleRef contains information that points to the role being used
 */
export function roleRefV1alpha1(options?: Optional<k8s.RoleRefV1alpha1>) : k8s.RoleRefV1alpha1 {
  return (<k8s.RoleRefV1alpha1>{
    kind: "RoleRef",
    apiGroup: (options && options.apiGroup) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Rule is a tuple of APIGroups, APIVersion, and Resources.It is recommended to make sure that all the tuple expansions are valid.
 */
export function ruleV1alpha1(options?: Optional<k8s.RuleV1alpha1>) : k8s.RuleV1alpha1 {
  return (<k8s.RuleV1alpha1>{
  }).merge(options)
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export function serviceReferenceV1alpha1(options?: Optional<k8s.ServiceReferenceV1alpha1>) : k8s.ServiceReferenceV1alpha1 {
  return (<k8s.ServiceReferenceV1alpha1>{
    name: (options && options.name) || null,
    namespace: (options && options.namespace) || null,
  }).merge(options)
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export function subjectV1alpha1(options?: Optional<k8s.SubjectV1alpha1>) : k8s.SubjectV1alpha1 {
  return (<k8s.SubjectV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "Subject",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export function volumeAttachmentV1alpha1(options?: Optional<k8s.VolumeAttachmentV1alpha1>) : k8s.VolumeAttachmentV1alpha1 {
  return (<k8s.VolumeAttachmentV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "VolumeAttachment",
    spec: (options && options.spec) || volumeAttachmentSpecV1alpha1(),
  }).merge(options)
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export function volumeAttachmentListV1alpha1(options?: Optional<k8s.VolumeAttachmentListV1alpha1>) : k8s.VolumeAttachmentListV1alpha1 {
  return (<k8s.VolumeAttachmentListV1alpha1>{
    apiVersion: "v1alpha1",
    kind: "VolumeAttachmentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export function volumeAttachmentSourceV1alpha1(options?: Optional<k8s.VolumeAttachmentSourceV1alpha1>) : k8s.VolumeAttachmentSourceV1alpha1 {
  return (<k8s.VolumeAttachmentSourceV1alpha1>{
  }).merge(options)
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export function volumeAttachmentSpecV1alpha1(options?: Optional<k8s.VolumeAttachmentSpecV1alpha1>) : k8s.VolumeAttachmentSpecV1alpha1 {
  return (<k8s.VolumeAttachmentSpecV1alpha1>{
    attacher: (options && options.attacher) || null,
    nodeName: (options && options.nodeName) || null,
    source: (options && options.source) || volumeAttachmentSourceV1alpha1(),
  }).merge(options)
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export function volumeAttachmentStatusV1alpha1(options?: Optional<k8s.VolumeAttachmentStatusV1alpha1>) : k8s.VolumeAttachmentStatusV1alpha1 {
  return (<k8s.VolumeAttachmentStatusV1alpha1>{
    attached: (options && options.attached) || false,
  }).merge(options)
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export function volumeErrorV1alpha1(options?: Optional<k8s.VolumeErrorV1alpha1>) : k8s.VolumeErrorV1alpha1 {
  return (<k8s.VolumeErrorV1alpha1>{
  }).merge(options)
}

/**
 * Webhook holds the configuration of the webhook
 */
export function webhookV1alpha1(options?: Optional<k8s.WebhookV1alpha1>) : k8s.WebhookV1alpha1 {
  return (<k8s.WebhookV1alpha1>{
    clientConfig: (options && options.clientConfig) || webhookClientConfigV1alpha1(),
  }).merge(options)
}

/**
 * WebhookClientConfig contains the information to make a connection with the webhook
 */
export function webhookClientConfigV1alpha1(options?: Optional<k8s.WebhookClientConfigV1alpha1>) : k8s.WebhookClientConfigV1alpha1 {
  return (<k8s.WebhookClientConfigV1alpha1>{
  }).merge(options)
}

/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
export function webhookThrottleConfigV1alpha1(options?: Optional<k8s.WebhookThrottleConfigV1alpha1>) : k8s.WebhookThrottleConfigV1alpha1 {
  return (<k8s.WebhookThrottleConfigV1alpha1>{
  }).merge(options)
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export function aPIServiceV1beta1(options?: Optional<k8s.APIServiceV1beta1>) : k8s.APIServiceV1beta1 {
  return (<k8s.APIServiceV1beta1>{
    apiVersion: "v1beta1",
    kind: "APIService",
  }).merge(options)
}

export function aPIServiceConditionV1beta1(options?: Optional<k8s.APIServiceConditionV1beta1>) : k8s.APIServiceConditionV1beta1 {
  return (<k8s.APIServiceConditionV1beta1>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * APIServiceList is a list of APIService objects.
 */
export function aPIServiceListV1beta1(options?: Optional<k8s.APIServiceListV1beta1>) : k8s.APIServiceListV1beta1 {
  return (<k8s.APIServiceListV1beta1>{
    apiVersion: "v1beta1",
    kind: "APIServiceList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export function aPIServiceSpecV1beta1(options?: Optional<k8s.APIServiceSpecV1beta1>) : k8s.APIServiceSpecV1beta1 {
  return (<k8s.APIServiceSpecV1beta1>{
    groupPriorityMinimum: (options && options.groupPriorityMinimum) || 0,
    service: (options && options.service) || serviceReferenceApiregistrationV1beta1(),
    versionPriority: (options && options.versionPriority) || 0,
  }).merge(options)
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export function aPIServiceStatusV1beta1(options?: Optional<k8s.APIServiceStatusV1beta1>) : k8s.APIServiceStatusV1beta1 {
  return (<k8s.APIServiceStatusV1beta1>{
  }).merge(options)
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export function aggregationRuleV1beta1(options?: Optional<k8s.AggregationRuleV1beta1>) : k8s.AggregationRuleV1beta1 {
  return (<k8s.AggregationRuleV1beta1>{
  }).merge(options)
}

/**
 * Describes a certificate signing request
 */
export function certificateSigningRequestV1beta1(options?: Optional<k8s.CertificateSigningRequestV1beta1>) : k8s.CertificateSigningRequestV1beta1 {
  return (<k8s.CertificateSigningRequestV1beta1>{
    apiVersion: "v1beta1",
    kind: "CertificateSigningRequest",
  }).merge(options)
}

export function certificateSigningRequestConditionV1beta1(options?: Optional<k8s.CertificateSigningRequestConditionV1beta1>) : k8s.CertificateSigningRequestConditionV1beta1 {
  return (<k8s.CertificateSigningRequestConditionV1beta1>{
    type: (options && options.type) || null,
  }).merge(options)
}

export function certificateSigningRequestListV1beta1(options?: Optional<k8s.CertificateSigningRequestListV1beta1>) : k8s.CertificateSigningRequestListV1beta1 {
  return (<k8s.CertificateSigningRequestListV1beta1>{
    apiVersion: "v1beta1",
    kind: "CertificateSigningRequestList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 */
export function certificateSigningRequestSpecV1beta1(options?: Optional<k8s.CertificateSigningRequestSpecV1beta1>) : k8s.CertificateSigningRequestSpecV1beta1 {
  return (<k8s.CertificateSigningRequestSpecV1beta1>{
    request: (options && options.request) || null,
  }).merge(options)
}

export function certificateSigningRequestStatusV1beta1(options?: Optional<k8s.CertificateSigningRequestStatusV1beta1>) : k8s.CertificateSigningRequestStatusV1beta1 {
  return (<k8s.CertificateSigningRequestStatusV1beta1>{
  }).merge(options)
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export function clusterRoleV1beta1(options?: Optional<k8s.ClusterRoleV1beta1>) : k8s.ClusterRoleV1beta1 {
  return (<k8s.ClusterRoleV1beta1>{
    apiVersion: "v1beta1",
    kind: "ClusterRole",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export function clusterRoleBindingV1beta1(options?: Optional<k8s.ClusterRoleBindingV1beta1>) : k8s.ClusterRoleBindingV1beta1 {
  return (<k8s.ClusterRoleBindingV1beta1>{
    apiVersion: "v1beta1",
    kind: "ClusterRoleBinding",
    roleRef: (options && options.roleRef) || roleRefV1beta1(),
  }).merge(options)
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export function clusterRoleBindingListV1beta1(options?: Optional<k8s.ClusterRoleBindingListV1beta1>) : k8s.ClusterRoleBindingListV1beta1 {
  return (<k8s.ClusterRoleBindingListV1beta1>{
    apiVersion: "v1beta1",
    kind: "ClusterRoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export function clusterRoleListV1beta1(options?: Optional<k8s.ClusterRoleListV1beta1>) : k8s.ClusterRoleListV1beta1 {
  return (<k8s.ClusterRoleListV1beta1>{
    apiVersion: "v1beta1",
    kind: "ClusterRoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export function controllerRevisionV1beta1(options?: Optional<k8s.ControllerRevisionV1beta1>) : k8s.ControllerRevisionV1beta1 {
  return (<k8s.ControllerRevisionV1beta1>{
    apiVersion: "v1beta1",
    kind: "ControllerRevision",
    revision: (options && options.revision) || 0,
  }).merge(options)
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export function controllerRevisionListV1beta1(options?: Optional<k8s.ControllerRevisionListV1beta1>) : k8s.ControllerRevisionListV1beta1 {
  return (<k8s.ControllerRevisionListV1beta1>{
    apiVersion: "v1beta1",
    kind: "ControllerRevisionList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export function cronJobV1beta1(options?: Optional<k8s.CronJobV1beta1>) : k8s.CronJobV1beta1 {
  return (<k8s.CronJobV1beta1>{
    apiVersion: "v1beta1",
    kind: "CronJob",
  }).merge(options)
}

/**
 * CronJobList is a collection of cron jobs.
 */
export function cronJobListV1beta1(options?: Optional<k8s.CronJobListV1beta1>) : k8s.CronJobListV1beta1 {
  return (<k8s.CronJobListV1beta1>{
    apiVersion: "v1beta1",
    kind: "CronJobList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export function cronJobSpecV1beta1(options?: Optional<k8s.CronJobSpecV1beta1>) : k8s.CronJobSpecV1beta1 {
  return (<k8s.CronJobSpecV1beta1>{
    jobTemplate: (options && options.jobTemplate) || jobTemplateSpecV1beta1(),
    schedule: (options && options.schedule) || null,
  }).merge(options)
}

/**
 * CronJobStatus represents the current state of a cron job.
 */
export function cronJobStatusV1beta1(options?: Optional<k8s.CronJobStatusV1beta1>) : k8s.CronJobStatusV1beta1 {
  return (<k8s.CronJobStatusV1beta1>{
  }).merge(options)
}

/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
export function customResourceColumnDefinitionV1beta1(options?: Optional<k8s.CustomResourceColumnDefinitionV1beta1>) : k8s.CustomResourceColumnDefinitionV1beta1 {
  return (<k8s.CustomResourceColumnDefinitionV1beta1>{
    JSONPath: (options && options.JSONPath) || null,
    name: (options && options.name) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export function customResourceConversionV1beta1(options?: Optional<k8s.CustomResourceConversionV1beta1>) : k8s.CustomResourceConversionV1beta1 {
  return (<k8s.CustomResourceConversionV1beta1>{
    strategy: (options && options.strategy) || null,
  }).merge(options)
}

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
export function customResourceDefinitionV1beta1(options?: Optional<k8s.CustomResourceDefinitionV1beta1>) : k8s.CustomResourceDefinitionV1beta1 {
  return (<k8s.CustomResourceDefinitionV1beta1>{
    apiVersion: "v1beta1",
    kind: "CustomResourceDefinition",
    spec: (options && options.spec) || customResourceDefinitionSpecV1beta1(),
  }).merge(options)
}

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export function customResourceDefinitionConditionV1beta1(options?: Optional<k8s.CustomResourceDefinitionConditionV1beta1>) : k8s.CustomResourceDefinitionConditionV1beta1 {
  return (<k8s.CustomResourceDefinitionConditionV1beta1>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export function customResourceDefinitionListV1beta1(options?: Optional<k8s.CustomResourceDefinitionListV1beta1>) : k8s.CustomResourceDefinitionListV1beta1 {
  return (<k8s.CustomResourceDefinitionListV1beta1>{
    apiVersion: "v1beta1",
    kind: "CustomResourceDefinitionList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export function customResourceDefinitionNamesV1beta1(options?: Optional<k8s.CustomResourceDefinitionNamesV1beta1>) : k8s.CustomResourceDefinitionNamesV1beta1 {
  return (<k8s.CustomResourceDefinitionNamesV1beta1>{
    kind: "CustomResourceDefinitionNames",
    plural: (options && options.plural) || null,
  }).merge(options)
}

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export function customResourceDefinitionSpecV1beta1(options?: Optional<k8s.CustomResourceDefinitionSpecV1beta1>) : k8s.CustomResourceDefinitionSpecV1beta1 {
  return (<k8s.CustomResourceDefinitionSpecV1beta1>{
    group: (options && options.group) || null,
    names: (options && options.names) || customResourceDefinitionNamesV1beta1(),
    scope: (options && options.scope) || null,
  }).merge(options)
}

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export function customResourceDefinitionStatusV1beta1(options?: Optional<k8s.CustomResourceDefinitionStatusV1beta1>) : k8s.CustomResourceDefinitionStatusV1beta1 {
  return (<k8s.CustomResourceDefinitionStatusV1beta1>{
    acceptedNames: (options && options.acceptedNames) || customResourceDefinitionNamesV1beta1(),
    conditions: (options && options.conditions) || [],
    storedVersions: (options && options.storedVersions) || [],
  }).merge(options)
}

/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 */
export function customResourceDefinitionVersionV1beta1(options?: Optional<k8s.CustomResourceDefinitionVersionV1beta1>) : k8s.CustomResourceDefinitionVersionV1beta1 {
  return (<k8s.CustomResourceDefinitionVersionV1beta1>{
    name: (options && options.name) || null,
    served: (options && options.served) || false,
    storage: (options && options.storage) || false,
  }).merge(options)
}

/**
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 */
export function customResourceSubresourceScaleV1beta1(options?: Optional<k8s.CustomResourceSubresourceScaleV1beta1>) : k8s.CustomResourceSubresourceScaleV1beta1 {
  return (<k8s.CustomResourceSubresourceScaleV1beta1>{
    specReplicasPath: (options && options.specReplicasPath) || null,
    statusReplicasPath: (options && options.statusReplicasPath) || null,
  }).merge(options)
}

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export function customResourceSubresourcesV1beta1(options?: Optional<k8s.CustomResourceSubresourcesV1beta1>) : k8s.CustomResourceSubresourcesV1beta1 {
  return (<k8s.CustomResourceSubresourcesV1beta1>{
  }).merge(options)
}

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export function customResourceValidationV1beta1(options?: Optional<k8s.CustomResourceValidationV1beta1>) : k8s.CustomResourceValidationV1beta1 {
  return (<k8s.CustomResourceValidationV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export function daemonSetV1beta1(options?: Optional<k8s.DaemonSetV1beta1>) : k8s.DaemonSetV1beta1 {
  return (<k8s.DaemonSetV1beta1>{
    apiVersion: "v1beta1",
    kind: "DaemonSet",
  }).merge(options)
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export function daemonSetConditionV1beta1(options?: Optional<k8s.DaemonSetConditionV1beta1>) : k8s.DaemonSetConditionV1beta1 {
  return (<k8s.DaemonSetConditionV1beta1>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export function daemonSetListV1beta1(options?: Optional<k8s.DaemonSetListV1beta1>) : k8s.DaemonSetListV1beta1 {
  return (<k8s.DaemonSetListV1beta1>{
    apiVersion: "v1beta1",
    kind: "DaemonSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export function daemonSetSpecV1beta1(options?: Optional<k8s.DaemonSetSpecV1beta1>) : k8s.DaemonSetSpecV1beta1 {
  return (<k8s.DaemonSetSpecV1beta1>{
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export function daemonSetStatusV1beta1(options?: Optional<k8s.DaemonSetStatusV1beta1>) : k8s.DaemonSetStatusV1beta1 {
  return (<k8s.DaemonSetStatusV1beta1>{
    currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
    desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
    numberMisscheduled: (options && options.numberMisscheduled) || 0,
    numberReady: (options && options.numberReady) || 0,
  }).merge(options)
}

export function daemonSetUpdateStrategyV1beta1(options?: Optional<k8s.DaemonSetUpdateStrategyV1beta1>) : k8s.DaemonSetUpdateStrategyV1beta1 {
  return (<k8s.DaemonSetUpdateStrategyV1beta1>{
  }).merge(options)
}

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 */
export function eventV1beta1(options?: Optional<k8s.EventV1beta1>) : k8s.EventV1beta1 {
  return (<k8s.EventV1beta1>{
    apiVersion: "v1beta1",
    kind: "Event",
    eventTime: (options && options.eventTime) || null,
  }).merge(options)
}

/**
 * EventList is a list of Event objects.
 */
export function eventListV1beta1(options?: Optional<k8s.EventListV1beta1>) : k8s.EventListV1beta1 {
  return (<k8s.EventListV1beta1>{
    apiVersion: "v1beta1",
    kind: "EventList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export function eventSeriesV1beta1(options?: Optional<k8s.EventSeriesV1beta1>) : k8s.EventSeriesV1beta1 {
  return (<k8s.EventSeriesV1beta1>{
    count: (options && options.count) || 0,
    lastObservedTime: (options && options.lastObservedTime) || null,
    state: (options && options.state) || null,
  }).merge(options)
}

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export function evictionV1beta1(options?: Optional<k8s.EvictionV1beta1>) : k8s.EvictionV1beta1 {
  return (<k8s.EvictionV1beta1>{
    apiVersion: "v1beta1",
    kind: "Eviction",
  }).merge(options)
}

/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export function externalDocumentationV1beta1(options?: Optional<k8s.ExternalDocumentationV1beta1>) : k8s.ExternalDocumentationV1beta1 {
  return (<k8s.ExternalDocumentationV1beta1>{
  }).merge(options)
}

/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 */
export function hTTPIngressPathV1beta1(options?: Optional<k8s.HTTPIngressPathV1beta1>) : k8s.HTTPIngressPathV1beta1 {
  return (<k8s.HTTPIngressPathV1beta1>{
    backend: (options && options.backend) || ingressBackendV1beta1(),
  }).merge(options)
}

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export function hTTPIngressRuleValueV1beta1(options?: Optional<k8s.HTTPIngressRuleValueV1beta1>) : k8s.HTTPIngressRuleValueV1beta1 {
  return (<k8s.HTTPIngressRuleValueV1beta1>{
    paths: (options && options.paths) || [],
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export function iPBlockV1beta1(options?: Optional<k8s.IPBlockV1beta1>) : k8s.IPBlockV1beta1 {
  return (<k8s.IPBlockV1beta1>{
    cidr: (options && options.cidr) || null,
  }).merge(options)
}

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
export function ingressV1beta1(options?: Optional<k8s.IngressV1beta1>) : k8s.IngressV1beta1 {
  return (<k8s.IngressV1beta1>{
    apiVersion: "v1beta1",
    kind: "Ingress",
  }).merge(options)
}

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export function ingressBackendV1beta1(options?: Optional<k8s.IngressBackendV1beta1>) : k8s.IngressBackendV1beta1 {
  return (<k8s.IngressBackendV1beta1>{
    serviceName: (options && options.serviceName) || null,
    servicePort: (options && options.servicePort) || null,
  }).merge(options)
}

/**
 * IngressList is a collection of Ingress.
 */
export function ingressListV1beta1(options?: Optional<k8s.IngressListV1beta1>) : k8s.IngressListV1beta1 {
  return (<k8s.IngressListV1beta1>{
    apiVersion: "v1beta1",
    kind: "IngressList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
export function ingressRuleV1beta1(options?: Optional<k8s.IngressRuleV1beta1>) : k8s.IngressRuleV1beta1 {
  return (<k8s.IngressRuleV1beta1>{
  }).merge(options)
}

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
export function ingressSpecV1beta1(options?: Optional<k8s.IngressSpecV1beta1>) : k8s.IngressSpecV1beta1 {
  return (<k8s.IngressSpecV1beta1>{
  }).merge(options)
}

/**
 * IngressStatus describe the current state of the Ingress.
 */
export function ingressStatusV1beta1(options?: Optional<k8s.IngressStatusV1beta1>) : k8s.IngressStatusV1beta1 {
  return (<k8s.IngressStatusV1beta1>{
  }).merge(options)
}

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export function ingressTLSV1beta1(options?: Optional<k8s.IngressTLSV1beta1>) : k8s.IngressTLSV1beta1 {
  return (<k8s.IngressTLSV1beta1>{
  }).merge(options)
}

/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 */
export function jSONSchemaPropsV1beta1(options?: Optional<k8s.JSONSchemaPropsV1beta1>) : k8s.JSONSchemaPropsV1beta1 {
  return (<k8s.JSONSchemaPropsV1beta1>{
  }).merge(options)
}

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export function jobTemplateSpecV1beta1(options?: Optional<k8s.JobTemplateSpecV1beta1>) : k8s.JobTemplateSpecV1beta1 {
  return (<k8s.JobTemplateSpecV1beta1>{
  }).merge(options)
}

/**
 * Lease defines a lease concept.
 */
export function leaseV1beta1(options?: Optional<k8s.LeaseV1beta1>) : k8s.LeaseV1beta1 {
  return (<k8s.LeaseV1beta1>{
    apiVersion: "v1beta1",
    kind: "Lease",
  }).merge(options)
}

/**
 * LeaseList is a list of Lease objects.
 */
export function leaseListV1beta1(options?: Optional<k8s.LeaseListV1beta1>) : k8s.LeaseListV1beta1 {
  return (<k8s.LeaseListV1beta1>{
    apiVersion: "v1beta1",
    kind: "LeaseList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * LeaseSpec is a specification of a Lease.
 */
export function leaseSpecV1beta1(options?: Optional<k8s.LeaseSpecV1beta1>) : k8s.LeaseSpecV1beta1 {
  return (<k8s.LeaseSpecV1beta1>{
  }).merge(options)
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export function localSubjectAccessReviewV1beta1(options?: Optional<k8s.LocalSubjectAccessReviewV1beta1>) : k8s.LocalSubjectAccessReviewV1beta1 {
  return (<k8s.LocalSubjectAccessReviewV1beta1>{
    apiVersion: "v1beta1",
    kind: "LocalSubjectAccessReview",
    spec: (options && options.spec) || subjectAccessReviewSpecV1beta1(),
  }).merge(options)
}

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export function mutatingWebhookConfigurationV1beta1(options?: Optional<k8s.MutatingWebhookConfigurationV1beta1>) : k8s.MutatingWebhookConfigurationV1beta1 {
  return (<k8s.MutatingWebhookConfigurationV1beta1>{
    apiVersion: "v1beta1",
    kind: "MutatingWebhookConfiguration",
  }).merge(options)
}

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export function mutatingWebhookConfigurationListV1beta1(options?: Optional<k8s.MutatingWebhookConfigurationListV1beta1>) : k8s.MutatingWebhookConfigurationListV1beta1 {
  return (<k8s.MutatingWebhookConfigurationListV1beta1>{
    apiVersion: "v1beta1",
    kind: "MutatingWebhookConfigurationList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export function networkPolicyV1beta1(options?: Optional<k8s.NetworkPolicyV1beta1>) : k8s.NetworkPolicyV1beta1 {
  return (<k8s.NetworkPolicyV1beta1>{
    apiVersion: "v1beta1",
    kind: "NetworkPolicy",
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export function networkPolicyEgressRuleV1beta1(options?: Optional<k8s.NetworkPolicyEgressRuleV1beta1>) : k8s.NetworkPolicyEgressRuleV1beta1 {
  return (<k8s.NetworkPolicyEgressRuleV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 */
export function networkPolicyIngressRuleV1beta1(options?: Optional<k8s.NetworkPolicyIngressRuleV1beta1>) : k8s.NetworkPolicyIngressRuleV1beta1 {
  return (<k8s.NetworkPolicyIngressRuleV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 */
export function networkPolicyListV1beta1(options?: Optional<k8s.NetworkPolicyListV1beta1>) : k8s.NetworkPolicyListV1beta1 {
  return (<k8s.NetworkPolicyListV1beta1>{
    apiVersion: "v1beta1",
    kind: "NetworkPolicyList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 */
export function networkPolicyPeerV1beta1(options?: Optional<k8s.NetworkPolicyPeerV1beta1>) : k8s.NetworkPolicyPeerV1beta1 {
  return (<k8s.NetworkPolicyPeerV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 */
export function networkPolicyPortV1beta1(options?: Optional<k8s.NetworkPolicyPortV1beta1>) : k8s.NetworkPolicyPortV1beta1 {
  return (<k8s.NetworkPolicyPortV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
 */
export function networkPolicySpecV1beta1(options?: Optional<k8s.NetworkPolicySpecV1beta1>) : k8s.NetworkPolicySpecV1beta1 {
  return (<k8s.NetworkPolicySpecV1beta1>{
    podSelector: (options && options.podSelector) || labelSelector(),
  }).merge(options)
}

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export function nonResourceAttributesV1beta1(options?: Optional<k8s.NonResourceAttributesV1beta1>) : k8s.NonResourceAttributesV1beta1 {
  return (<k8s.NonResourceAttributesV1beta1>{
  }).merge(options)
}

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export function nonResourceRuleV1beta1(options?: Optional<k8s.NonResourceRuleV1beta1>) : k8s.NonResourceRuleV1beta1 {
  return (<k8s.NonResourceRuleV1beta1>{
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export function podDisruptionBudgetV1beta1(options?: Optional<k8s.PodDisruptionBudgetV1beta1>) : k8s.PodDisruptionBudgetV1beta1 {
  return (<k8s.PodDisruptionBudgetV1beta1>{
    apiVersion: "v1beta1",
    kind: "PodDisruptionBudget",
  }).merge(options)
}

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export function podDisruptionBudgetListV1beta1(options?: Optional<k8s.PodDisruptionBudgetListV1beta1>) : k8s.PodDisruptionBudgetListV1beta1 {
  return (<k8s.PodDisruptionBudgetListV1beta1>{
    apiVersion: "v1beta1",
    kind: "PodDisruptionBudgetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export function podDisruptionBudgetSpecV1beta1(options?: Optional<k8s.PodDisruptionBudgetSpecV1beta1>) : k8s.PodDisruptionBudgetSpecV1beta1 {
  return (<k8s.PodDisruptionBudgetSpecV1beta1>{
  }).merge(options)
}

/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
export function podDisruptionBudgetStatusV1beta1(options?: Optional<k8s.PodDisruptionBudgetStatusV1beta1>) : k8s.PodDisruptionBudgetStatusV1beta1 {
  return (<k8s.PodDisruptionBudgetStatusV1beta1>{
    currentHealthy: (options && options.currentHealthy) || 0,
    desiredHealthy: (options && options.desiredHealthy) || 0,
    disruptionsAllowed: (options && options.disruptionsAllowed) || 0,
    expectedPods: (options && options.expectedPods) || 0,
  }).merge(options)
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export function policyRuleV1beta1(options?: Optional<k8s.PolicyRuleV1beta1>) : k8s.PolicyRuleV1beta1 {
  return (<k8s.PolicyRuleV1beta1>{
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export function priorityClassV1beta1(options?: Optional<k8s.PriorityClassV1beta1>) : k8s.PriorityClassV1beta1 {
  return (<k8s.PriorityClassV1beta1>{
    apiVersion: "v1beta1",
    kind: "PriorityClass",
    value: (options && options.value) || 0,
  }).merge(options)
}

/**
 * PriorityClassList is a collection of priority classes.
 */
export function priorityClassListV1beta1(options?: Optional<k8s.PriorityClassListV1beta1>) : k8s.PriorityClassListV1beta1 {
  return (<k8s.PriorityClassListV1beta1>{
    apiVersion: "v1beta1",
    kind: "PriorityClassList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export function replicaSetV1beta1(options?: Optional<k8s.ReplicaSetV1beta1>) : k8s.ReplicaSetV1beta1 {
  return (<k8s.ReplicaSetV1beta1>{
    apiVersion: "v1beta1",
    kind: "ReplicaSet",
  }).merge(options)
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export function replicaSetConditionV1beta1(options?: Optional<k8s.ReplicaSetConditionV1beta1>) : k8s.ReplicaSetConditionV1beta1 {
  return (<k8s.ReplicaSetConditionV1beta1>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export function replicaSetListV1beta1(options?: Optional<k8s.ReplicaSetListV1beta1>) : k8s.ReplicaSetListV1beta1 {
  return (<k8s.ReplicaSetListV1beta1>{
    apiVersion: "v1beta1",
    kind: "ReplicaSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export function replicaSetSpecV1beta1(options?: Optional<k8s.ReplicaSetSpecV1beta1>) : k8s.ReplicaSetSpecV1beta1 {
  return (<k8s.ReplicaSetSpecV1beta1>{
  }).merge(options)
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export function replicaSetStatusV1beta1(options?: Optional<k8s.ReplicaSetStatusV1beta1>) : k8s.ReplicaSetStatusV1beta1 {
  return (<k8s.ReplicaSetStatusV1beta1>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export function resourceAttributesV1beta1(options?: Optional<k8s.ResourceAttributesV1beta1>) : k8s.ResourceAttributesV1beta1 {
  return (<k8s.ResourceAttributesV1beta1>{
  }).merge(options)
}

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export function resourceRuleV1beta1(options?: Optional<k8s.ResourceRuleV1beta1>) : k8s.ResourceRuleV1beta1 {
  return (<k8s.ResourceRuleV1beta1>{
    verbs: (options && options.verbs) || [],
  }).merge(options)
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export function roleV1beta1(options?: Optional<k8s.RoleV1beta1>) : k8s.RoleV1beta1 {
  return (<k8s.RoleV1beta1>{
    apiVersion: "v1beta1",
    kind: "Role",
    rules: (options && options.rules) || [],
  }).merge(options)
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export function roleBindingV1beta1(options?: Optional<k8s.RoleBindingV1beta1>) : k8s.RoleBindingV1beta1 {
  return (<k8s.RoleBindingV1beta1>{
    apiVersion: "v1beta1",
    kind: "RoleBinding",
    roleRef: (options && options.roleRef) || roleRefV1beta1(),
  }).merge(options)
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export function roleBindingListV1beta1(options?: Optional<k8s.RoleBindingListV1beta1>) : k8s.RoleBindingListV1beta1 {
  return (<k8s.RoleBindingListV1beta1>{
    apiVersion: "v1beta1",
    kind: "RoleBindingList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleList is a collection of Roles
 */
export function roleListV1beta1(options?: Optional<k8s.RoleListV1beta1>) : k8s.RoleListV1beta1 {
  return (<k8s.RoleListV1beta1>{
    apiVersion: "v1beta1",
    kind: "RoleList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * RoleRef contains information that points to the role being used
 */
export function roleRefV1beta1(options?: Optional<k8s.RoleRefV1beta1>) : k8s.RoleRefV1beta1 {
  return (<k8s.RoleRefV1beta1>{
    kind: "RoleRef",
    apiGroup: (options && options.apiGroup) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export function rollingUpdateDaemonSetV1beta1(options?: Optional<k8s.RollingUpdateDaemonSetV1beta1>) : k8s.RollingUpdateDaemonSetV1beta1 {
  return (<k8s.RollingUpdateDaemonSetV1beta1>{
  }).merge(options)
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export function rollingUpdateStatefulSetStrategyV1beta1(options?: Optional<k8s.RollingUpdateStatefulSetStrategyV1beta1>) : k8s.RollingUpdateStatefulSetStrategyV1beta1 {
  return (<k8s.RollingUpdateStatefulSetStrategyV1beta1>{
  }).merge(options)
}

/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
export function ruleWithOperationsV1beta1(options?: Optional<k8s.RuleWithOperationsV1beta1>) : k8s.RuleWithOperationsV1beta1 {
  return (<k8s.RuleWithOperationsV1beta1>{
  }).merge(options)
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export function selfSubjectAccessReviewV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewV1beta1>) : k8s.SelfSubjectAccessReviewV1beta1 {
  return (<k8s.SelfSubjectAccessReviewV1beta1>{
    apiVersion: "v1beta1",
    kind: "SelfSubjectAccessReview",
    spec: (options && options.spec) || selfSubjectAccessReviewSpecV1beta1(),
  }).merge(options)
}

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export function selfSubjectAccessReviewSpecV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewSpecV1beta1>) : k8s.SelfSubjectAccessReviewSpecV1beta1 {
  return (<k8s.SelfSubjectAccessReviewSpecV1beta1>{
  }).merge(options)
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export function selfSubjectRulesReviewV1beta1(options?: Optional<k8s.SelfSubjectRulesReviewV1beta1>) : k8s.SelfSubjectRulesReviewV1beta1 {
  return (<k8s.SelfSubjectRulesReviewV1beta1>{
    apiVersion: "v1beta1",
    kind: "SelfSubjectRulesReview",
    spec: (options && options.spec) || selfSubjectRulesReviewSpecV1beta1(),
  }).merge(options)
}

export function selfSubjectRulesReviewSpecV1beta1(options?: Optional<k8s.SelfSubjectRulesReviewSpecV1beta1>) : k8s.SelfSubjectRulesReviewSpecV1beta1 {
  return (<k8s.SelfSubjectRulesReviewSpecV1beta1>{
  }).merge(options)
}

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export function statefulSetV1beta1(options?: Optional<k8s.StatefulSetV1beta1>) : k8s.StatefulSetV1beta1 {
  return (<k8s.StatefulSetV1beta1>{
    apiVersion: "v1beta1",
    kind: "StatefulSet",
  }).merge(options)
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export function statefulSetConditionV1beta1(options?: Optional<k8s.StatefulSetConditionV1beta1>) : k8s.StatefulSetConditionV1beta1 {
  return (<k8s.StatefulSetConditionV1beta1>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export function statefulSetListV1beta1(options?: Optional<k8s.StatefulSetListV1beta1>) : k8s.StatefulSetListV1beta1 {
  return (<k8s.StatefulSetListV1beta1>{
    apiVersion: "v1beta1",
    kind: "StatefulSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export function statefulSetSpecV1beta1(options?: Optional<k8s.StatefulSetSpecV1beta1>) : k8s.StatefulSetSpecV1beta1 {
  return (<k8s.StatefulSetSpecV1beta1>{
    serviceName: (options && options.serviceName) || null,
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export function statefulSetStatusV1beta1(options?: Optional<k8s.StatefulSetStatusV1beta1>) : k8s.StatefulSetStatusV1beta1 {
  return (<k8s.StatefulSetStatusV1beta1>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export function statefulSetUpdateStrategyV1beta1(options?: Optional<k8s.StatefulSetUpdateStrategyV1beta1>) : k8s.StatefulSetUpdateStrategyV1beta1 {
  return (<k8s.StatefulSetUpdateStrategyV1beta1>{
  }).merge(options)
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export function storageClassV1beta1(options?: Optional<k8s.StorageClassV1beta1>) : k8s.StorageClassV1beta1 {
  return (<k8s.StorageClassV1beta1>{
    apiVersion: "v1beta1",
    kind: "StorageClass",
    provisioner: (options && options.provisioner) || null,
  }).merge(options)
}

/**
 * StorageClassList is a collection of storage classes.
 */
export function storageClassListV1beta1(options?: Optional<k8s.StorageClassListV1beta1>) : k8s.StorageClassListV1beta1 {
  return (<k8s.StorageClassListV1beta1>{
    apiVersion: "v1beta1",
    kind: "StorageClassList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export function subjectV1beta1(options?: Optional<k8s.SubjectV1beta1>) : k8s.SubjectV1beta1 {
  return (<k8s.SubjectV1beta1>{
    kind: "Subject",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export function subjectAccessReviewV1beta1(options?: Optional<k8s.SubjectAccessReviewV1beta1>) : k8s.SubjectAccessReviewV1beta1 {
  return (<k8s.SubjectAccessReviewV1beta1>{
    apiVersion: "v1beta1",
    kind: "SubjectAccessReview",
    spec: (options && options.spec) || subjectAccessReviewSpecV1beta1(),
  }).merge(options)
}

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export function subjectAccessReviewSpecV1beta1(options?: Optional<k8s.SubjectAccessReviewSpecV1beta1>) : k8s.SubjectAccessReviewSpecV1beta1 {
  return (<k8s.SubjectAccessReviewSpecV1beta1>{
  }).merge(options)
}

/**
 * SubjectAccessReviewStatus
 */
export function subjectAccessReviewStatusV1beta1(options?: Optional<k8s.SubjectAccessReviewStatusV1beta1>) : k8s.SubjectAccessReviewStatusV1beta1 {
  return (<k8s.SubjectAccessReviewStatusV1beta1>{
    allowed: (options && options.allowed) || false,
  }).merge(options)
}

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export function subjectRulesReviewStatusV1beta1(options?: Optional<k8s.SubjectRulesReviewStatusV1beta1>) : k8s.SubjectRulesReviewStatusV1beta1 {
  return (<k8s.SubjectRulesReviewStatusV1beta1>{
    incomplete: (options && options.incomplete) || false,
    nonResourceRules: (options && options.nonResourceRules) || [],
    resourceRules: (options && options.resourceRules) || [],
  }).merge(options)
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export function tokenReviewV1beta1(options?: Optional<k8s.TokenReviewV1beta1>) : k8s.TokenReviewV1beta1 {
  return (<k8s.TokenReviewV1beta1>{
    apiVersion: "v1beta1",
    kind: "TokenReview",
    spec: (options && options.spec) || tokenReviewSpecV1beta1(),
  }).merge(options)
}

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export function tokenReviewSpecV1beta1(options?: Optional<k8s.TokenReviewSpecV1beta1>) : k8s.TokenReviewSpecV1beta1 {
  return (<k8s.TokenReviewSpecV1beta1>{
  }).merge(options)
}

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export function tokenReviewStatusV1beta1(options?: Optional<k8s.TokenReviewStatusV1beta1>) : k8s.TokenReviewStatusV1beta1 {
  return (<k8s.TokenReviewStatusV1beta1>{
  }).merge(options)
}

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export function userInfoV1beta1(options?: Optional<k8s.UserInfoV1beta1>) : k8s.UserInfoV1beta1 {
  return (<k8s.UserInfoV1beta1>{
  }).merge(options)
}

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
export function validatingWebhookConfigurationV1beta1(options?: Optional<k8s.ValidatingWebhookConfigurationV1beta1>) : k8s.ValidatingWebhookConfigurationV1beta1 {
  return (<k8s.ValidatingWebhookConfigurationV1beta1>{
    apiVersion: "v1beta1",
    kind: "ValidatingWebhookConfiguration",
  }).merge(options)
}

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export function validatingWebhookConfigurationListV1beta1(options?: Optional<k8s.ValidatingWebhookConfigurationListV1beta1>) : k8s.ValidatingWebhookConfigurationListV1beta1 {
  return (<k8s.ValidatingWebhookConfigurationListV1beta1>{
    apiVersion: "v1beta1",
    kind: "ValidatingWebhookConfigurationList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export function volumeAttachmentV1beta1(options?: Optional<k8s.VolumeAttachmentV1beta1>) : k8s.VolumeAttachmentV1beta1 {
  return (<k8s.VolumeAttachmentV1beta1>{
    apiVersion: "v1beta1",
    kind: "VolumeAttachment",
    spec: (options && options.spec) || volumeAttachmentSpecV1beta1(),
  }).merge(options)
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export function volumeAttachmentListV1beta1(options?: Optional<k8s.VolumeAttachmentListV1beta1>) : k8s.VolumeAttachmentListV1beta1 {
  return (<k8s.VolumeAttachmentListV1beta1>{
    apiVersion: "v1beta1",
    kind: "VolumeAttachmentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export function volumeAttachmentSourceV1beta1(options?: Optional<k8s.VolumeAttachmentSourceV1beta1>) : k8s.VolumeAttachmentSourceV1beta1 {
  return (<k8s.VolumeAttachmentSourceV1beta1>{
  }).merge(options)
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export function volumeAttachmentSpecV1beta1(options?: Optional<k8s.VolumeAttachmentSpecV1beta1>) : k8s.VolumeAttachmentSpecV1beta1 {
  return (<k8s.VolumeAttachmentSpecV1beta1>{
    attacher: (options && options.attacher) || null,
    nodeName: (options && options.nodeName) || null,
    source: (options && options.source) || volumeAttachmentSourceV1beta1(),
  }).merge(options)
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export function volumeAttachmentStatusV1beta1(options?: Optional<k8s.VolumeAttachmentStatusV1beta1>) : k8s.VolumeAttachmentStatusV1beta1 {
  return (<k8s.VolumeAttachmentStatusV1beta1>{
    attached: (options && options.attached) || false,
  }).merge(options)
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export function volumeErrorV1beta1(options?: Optional<k8s.VolumeErrorV1beta1>) : k8s.VolumeErrorV1beta1 {
  return (<k8s.VolumeErrorV1beta1>{
  }).merge(options)
}

/**
 * Webhook describes an admission webhook and the resources and operations it applies to.
 */
export function webhookV1beta1(options?: Optional<k8s.WebhookV1beta1>) : k8s.WebhookV1beta1 {
  return (<k8s.WebhookV1beta1>{
    clientConfig: (options && options.clientConfig) || webhookClientConfigAdmissionregistrationV1beta1(),
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export function controllerRevisionV1beta2(options?: Optional<k8s.ControllerRevisionV1beta2>) : k8s.ControllerRevisionV1beta2 {
  return (<k8s.ControllerRevisionV1beta2>{
    apiVersion: "v1beta2",
    kind: "ControllerRevision",
    revision: (options && options.revision) || 0,
  }).merge(options)
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export function controllerRevisionListV1beta2(options?: Optional<k8s.ControllerRevisionListV1beta2>) : k8s.ControllerRevisionListV1beta2 {
  return (<k8s.ControllerRevisionListV1beta2>{
    apiVersion: "v1beta2",
    kind: "ControllerRevisionList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export function daemonSetV1beta2(options?: Optional<k8s.DaemonSetV1beta2>) : k8s.DaemonSetV1beta2 {
  return (<k8s.DaemonSetV1beta2>{
    apiVersion: "v1beta2",
    kind: "DaemonSet",
  }).merge(options)
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export function daemonSetConditionV1beta2(options?: Optional<k8s.DaemonSetConditionV1beta2>) : k8s.DaemonSetConditionV1beta2 {
  return (<k8s.DaemonSetConditionV1beta2>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export function daemonSetListV1beta2(options?: Optional<k8s.DaemonSetListV1beta2>) : k8s.DaemonSetListV1beta2 {
  return (<k8s.DaemonSetListV1beta2>{
    apiVersion: "v1beta2",
    kind: "DaemonSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export function daemonSetSpecV1beta2(options?: Optional<k8s.DaemonSetSpecV1beta2>) : k8s.DaemonSetSpecV1beta2 {
  return (<k8s.DaemonSetSpecV1beta2>{
    selector: (options && options.selector) || labelSelector(),
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export function daemonSetStatusV1beta2(options?: Optional<k8s.DaemonSetStatusV1beta2>) : k8s.DaemonSetStatusV1beta2 {
  return (<k8s.DaemonSetStatusV1beta2>{
    currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
    desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
    numberMisscheduled: (options && options.numberMisscheduled) || 0,
    numberReady: (options && options.numberReady) || 0,
  }).merge(options)
}

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export function daemonSetUpdateStrategyV1beta2(options?: Optional<k8s.DaemonSetUpdateStrategyV1beta2>) : k8s.DaemonSetUpdateStrategyV1beta2 {
  return (<k8s.DaemonSetUpdateStrategyV1beta2>{
  }).merge(options)
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export function deploymentV1beta2(options?: Optional<k8s.DeploymentV1beta2>) : k8s.DeploymentV1beta2 {
  return (<k8s.DeploymentV1beta2>{
    apiVersion: "v1beta2",
    kind: "Deployment",
  }).merge(options)
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export function deploymentConditionV1beta2(options?: Optional<k8s.DeploymentConditionV1beta2>) : k8s.DeploymentConditionV1beta2 {
  return (<k8s.DeploymentConditionV1beta2>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * DeploymentList is a list of Deployments.
 */
export function deploymentListV1beta2(options?: Optional<k8s.DeploymentListV1beta2>) : k8s.DeploymentListV1beta2 {
  return (<k8s.DeploymentListV1beta2>{
    apiVersion: "v1beta2",
    kind: "DeploymentList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export function deploymentSpecV1beta2(options?: Optional<k8s.DeploymentSpecV1beta2>) : k8s.DeploymentSpecV1beta2 {
  return (<k8s.DeploymentSpecV1beta2>{
    selector: (options && options.selector) || labelSelector(),
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export function deploymentStatusV1beta2(options?: Optional<k8s.DeploymentStatusV1beta2>) : k8s.DeploymentStatusV1beta2 {
  return (<k8s.DeploymentStatusV1beta2>{
  }).merge(options)
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export function deploymentStrategyV1beta2(options?: Optional<k8s.DeploymentStrategyV1beta2>) : k8s.DeploymentStrategyV1beta2 {
  return (<k8s.DeploymentStrategyV1beta2>{
  }).merge(options)
}

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export function replicaSetV1beta2(options?: Optional<k8s.ReplicaSetV1beta2>) : k8s.ReplicaSetV1beta2 {
  return (<k8s.ReplicaSetV1beta2>{
    apiVersion: "v1beta2",
    kind: "ReplicaSet",
  }).merge(options)
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export function replicaSetConditionV1beta2(options?: Optional<k8s.ReplicaSetConditionV1beta2>) : k8s.ReplicaSetConditionV1beta2 {
  return (<k8s.ReplicaSetConditionV1beta2>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export function replicaSetListV1beta2(options?: Optional<k8s.ReplicaSetListV1beta2>) : k8s.ReplicaSetListV1beta2 {
  return (<k8s.ReplicaSetListV1beta2>{
    apiVersion: "v1beta2",
    kind: "ReplicaSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export function replicaSetSpecV1beta2(options?: Optional<k8s.ReplicaSetSpecV1beta2>) : k8s.ReplicaSetSpecV1beta2 {
  return (<k8s.ReplicaSetSpecV1beta2>{
    selector: (options && options.selector) || labelSelector(),
  }).merge(options)
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export function replicaSetStatusV1beta2(options?: Optional<k8s.ReplicaSetStatusV1beta2>) : k8s.ReplicaSetStatusV1beta2 {
  return (<k8s.ReplicaSetStatusV1beta2>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export function rollingUpdateDaemonSetV1beta2(options?: Optional<k8s.RollingUpdateDaemonSetV1beta2>) : k8s.RollingUpdateDaemonSetV1beta2 {
  return (<k8s.RollingUpdateDaemonSetV1beta2>{
  }).merge(options)
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export function rollingUpdateDeploymentV1beta2(options?: Optional<k8s.RollingUpdateDeploymentV1beta2>) : k8s.RollingUpdateDeploymentV1beta2 {
  return (<k8s.RollingUpdateDeploymentV1beta2>{
  }).merge(options)
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export function rollingUpdateStatefulSetStrategyV1beta2(options?: Optional<k8s.RollingUpdateStatefulSetStrategyV1beta2>) : k8s.RollingUpdateStatefulSetStrategyV1beta2 {
  return (<k8s.RollingUpdateStatefulSetStrategyV1beta2>{
  }).merge(options)
}

/**
 * Scale represents a scaling request for a resource.
 */
export function scaleV1beta2(options?: Optional<k8s.ScaleV1beta2>) : k8s.ScaleV1beta2 {
  return (<k8s.ScaleV1beta2>{
    apiVersion: "v1beta2",
    kind: "Scale",
  }).merge(options)
}

/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export function scaleSpecV1beta2(options?: Optional<k8s.ScaleSpecV1beta2>) : k8s.ScaleSpecV1beta2 {
  return (<k8s.ScaleSpecV1beta2>{
  }).merge(options)
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export function scaleStatusV1beta2(options?: Optional<k8s.ScaleStatusV1beta2>) : k8s.ScaleStatusV1beta2 {
  return (<k8s.ScaleStatusV1beta2>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export function statefulSetV1beta2(options?: Optional<k8s.StatefulSetV1beta2>) : k8s.StatefulSetV1beta2 {
  return (<k8s.StatefulSetV1beta2>{
    apiVersion: "v1beta2",
    kind: "StatefulSet",
  }).merge(options)
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export function statefulSetConditionV1beta2(options?: Optional<k8s.StatefulSetConditionV1beta2>) : k8s.StatefulSetConditionV1beta2 {
  return (<k8s.StatefulSetConditionV1beta2>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export function statefulSetListV1beta2(options?: Optional<k8s.StatefulSetListV1beta2>) : k8s.StatefulSetListV1beta2 {
  return (<k8s.StatefulSetListV1beta2>{
    apiVersion: "v1beta2",
    kind: "StatefulSetList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export function statefulSetSpecV1beta2(options?: Optional<k8s.StatefulSetSpecV1beta2>) : k8s.StatefulSetSpecV1beta2 {
  return (<k8s.StatefulSetSpecV1beta2>{
    selector: (options && options.selector) || labelSelector(),
    serviceName: (options && options.serviceName) || null,
    template: (options && options.template) || podTemplateSpec(),
  }).merge(options)
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export function statefulSetStatusV1beta2(options?: Optional<k8s.StatefulSetStatusV1beta2>) : k8s.StatefulSetStatusV1beta2 {
  return (<k8s.StatefulSetStatusV1beta2>{
    replicas: (options && options.replicas) || 0,
  }).merge(options)
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export function statefulSetUpdateStrategyV1beta2(options?: Optional<k8s.StatefulSetUpdateStrategyV1beta2>) : k8s.StatefulSetUpdateStrategyV1beta2 {
  return (<k8s.StatefulSetUpdateStrategyV1beta2>{
  }).merge(options)
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export function cronJobV2alpha1(options?: Optional<k8s.CronJobV2alpha1>) : k8s.CronJobV2alpha1 {
  return (<k8s.CronJobV2alpha1>{
    apiVersion: "v2alpha1",
    kind: "CronJob",
  }).merge(options)
}

/**
 * CronJobList is a collection of cron jobs.
 */
export function cronJobListV2alpha1(options?: Optional<k8s.CronJobListV2alpha1>) : k8s.CronJobListV2alpha1 {
  return (<k8s.CronJobListV2alpha1>{
    apiVersion: "v2alpha1",
    kind: "CronJobList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export function cronJobSpecV2alpha1(options?: Optional<k8s.CronJobSpecV2alpha1>) : k8s.CronJobSpecV2alpha1 {
  return (<k8s.CronJobSpecV2alpha1>{
    jobTemplate: (options && options.jobTemplate) || jobTemplateSpecV2alpha1(),
    schedule: (options && options.schedule) || null,
  }).merge(options)
}

/**
 * CronJobStatus represents the current state of a cron job.
 */
export function cronJobStatusV2alpha1(options?: Optional<k8s.CronJobStatusV2alpha1>) : k8s.CronJobStatusV2alpha1 {
  return (<k8s.CronJobStatusV2alpha1>{
  }).merge(options)
}

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export function jobTemplateSpecV2alpha1(options?: Optional<k8s.JobTemplateSpecV2alpha1>) : k8s.JobTemplateSpecV2alpha1 {
  return (<k8s.JobTemplateSpecV2alpha1>{
  }).merge(options)
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export function crossVersionObjectReferenceV2beta1(options?: Optional<k8s.CrossVersionObjectReferenceV2beta1>) : k8s.CrossVersionObjectReferenceV2beta1 {
  return (<k8s.CrossVersionObjectReferenceV2beta1>{
    apiVersion: "v2beta1",
    kind: "CrossVersionObjectReference",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export function externalMetricSourceV2beta1(options?: Optional<k8s.ExternalMetricSourceV2beta1>) : k8s.ExternalMetricSourceV2beta1 {
  return (<k8s.ExternalMetricSourceV2beta1>{
    metricName: (options && options.metricName) || null,
  }).merge(options)
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export function externalMetricStatusV2beta1(options?: Optional<k8s.ExternalMetricStatusV2beta1>) : k8s.ExternalMetricStatusV2beta1 {
  return (<k8s.ExternalMetricStatusV2beta1>{
    currentValue: (options && options.currentValue) || null,
    metricName: (options && options.metricName) || null,
  }).merge(options)
}

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export function horizontalPodAutoscalerV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerV2beta1>) : k8s.HorizontalPodAutoscalerV2beta1 {
  return (<k8s.HorizontalPodAutoscalerV2beta1>{
    apiVersion: "v2beta1",
    kind: "HorizontalPodAutoscaler",
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export function horizontalPodAutoscalerConditionV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerConditionV2beta1>) : k8s.HorizontalPodAutoscalerConditionV2beta1 {
  return (<k8s.HorizontalPodAutoscalerConditionV2beta1>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export function horizontalPodAutoscalerListV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerListV2beta1>) : k8s.HorizontalPodAutoscalerListV2beta1 {
  return (<k8s.HorizontalPodAutoscalerListV2beta1>{
    apiVersion: "v2beta1",
    kind: "HorizontalPodAutoscalerList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export function horizontalPodAutoscalerSpecV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerSpecV2beta1>) : k8s.HorizontalPodAutoscalerSpecV2beta1 {
  return (<k8s.HorizontalPodAutoscalerSpecV2beta1>{
    maxReplicas: (options && options.maxReplicas) || 0,
    scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReferenceV2beta1(),
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export function horizontalPodAutoscalerStatusV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerStatusV2beta1>) : k8s.HorizontalPodAutoscalerStatusV2beta1 {
  return (<k8s.HorizontalPodAutoscalerStatusV2beta1>{
    conditions: (options && options.conditions) || [],
    currentReplicas: (options && options.currentReplicas) || 0,
    desiredReplicas: (options && options.desiredReplicas) || 0,
  }).merge(options)
}

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export function metricSpecV2beta1(options?: Optional<k8s.MetricSpecV2beta1>) : k8s.MetricSpecV2beta1 {
  return (<k8s.MetricSpecV2beta1>{
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export function metricStatusV2beta1(options?: Optional<k8s.MetricStatusV2beta1>) : k8s.MetricStatusV2beta1 {
  return (<k8s.MetricStatusV2beta1>{
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export function objectMetricSourceV2beta1(options?: Optional<k8s.ObjectMetricSourceV2beta1>) : k8s.ObjectMetricSourceV2beta1 {
  return (<k8s.ObjectMetricSourceV2beta1>{
    metricName: (options && options.metricName) || null,
    target: (options && options.target) || crossVersionObjectReferenceV2beta1(),
    targetValue: (options && options.targetValue) || null,
  }).merge(options)
}

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export function objectMetricStatusV2beta1(options?: Optional<k8s.ObjectMetricStatusV2beta1>) : k8s.ObjectMetricStatusV2beta1 {
  return (<k8s.ObjectMetricStatusV2beta1>{
    currentValue: (options && options.currentValue) || null,
    metricName: (options && options.metricName) || null,
    target: (options && options.target) || crossVersionObjectReferenceV2beta1(),
  }).merge(options)
}

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export function podsMetricSourceV2beta1(options?: Optional<k8s.PodsMetricSourceV2beta1>) : k8s.PodsMetricSourceV2beta1 {
  return (<k8s.PodsMetricSourceV2beta1>{
    metricName: (options && options.metricName) || null,
    targetAverageValue: (options && options.targetAverageValue) || null,
  }).merge(options)
}

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export function podsMetricStatusV2beta1(options?: Optional<k8s.PodsMetricStatusV2beta1>) : k8s.PodsMetricStatusV2beta1 {
  return (<k8s.PodsMetricStatusV2beta1>{
    currentAverageValue: (options && options.currentAverageValue) || null,
    metricName: (options && options.metricName) || null,
  }).merge(options)
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export function resourceMetricSourceV2beta1(options?: Optional<k8s.ResourceMetricSourceV2beta1>) : k8s.ResourceMetricSourceV2beta1 {
  return (<k8s.ResourceMetricSourceV2beta1>{
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export function resourceMetricStatusV2beta1(options?: Optional<k8s.ResourceMetricStatusV2beta1>) : k8s.ResourceMetricStatusV2beta1 {
  return (<k8s.ResourceMetricStatusV2beta1>{
    currentAverageValue: (options && options.currentAverageValue) || null,
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export function crossVersionObjectReferenceV2beta2(options?: Optional<k8s.CrossVersionObjectReferenceV2beta2>) : k8s.CrossVersionObjectReferenceV2beta2 {
  return (<k8s.CrossVersionObjectReferenceV2beta2>{
    apiVersion: "v2beta2",
    kind: "CrossVersionObjectReference",
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export function externalMetricSourceV2beta2(options?: Optional<k8s.ExternalMetricSourceV2beta2>) : k8s.ExternalMetricSourceV2beta2 {
  return (<k8s.ExternalMetricSourceV2beta2>{
    metric: (options && options.metric) || metricIdentifierV2beta2(),
    target: (options && options.target) || metricTargetV2beta2(),
  }).merge(options)
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export function externalMetricStatusV2beta2(options?: Optional<k8s.ExternalMetricStatusV2beta2>) : k8s.ExternalMetricStatusV2beta2 {
  return (<k8s.ExternalMetricStatusV2beta2>{
    current: (options && options.current) || metricValueStatusV2beta2(),
    metric: (options && options.metric) || metricIdentifierV2beta2(),
  }).merge(options)
}

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export function horizontalPodAutoscalerV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerV2beta2>) : k8s.HorizontalPodAutoscalerV2beta2 {
  return (<k8s.HorizontalPodAutoscalerV2beta2>{
    apiVersion: "v2beta2",
    kind: "HorizontalPodAutoscaler",
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export function horizontalPodAutoscalerConditionV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerConditionV2beta2>) : k8s.HorizontalPodAutoscalerConditionV2beta2 {
  return (<k8s.HorizontalPodAutoscalerConditionV2beta2>{
    status: (options && options.status) || null,
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export function horizontalPodAutoscalerListV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerListV2beta2>) : k8s.HorizontalPodAutoscalerListV2beta2 {
  return (<k8s.HorizontalPodAutoscalerListV2beta2>{
    apiVersion: "v2beta2",
    kind: "HorizontalPodAutoscalerList",
    items: (options && options.items) || [],
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export function horizontalPodAutoscalerSpecV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerSpecV2beta2>) : k8s.HorizontalPodAutoscalerSpecV2beta2 {
  return (<k8s.HorizontalPodAutoscalerSpecV2beta2>{
    maxReplicas: (options && options.maxReplicas) || 0,
    scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReferenceV2beta2(),
  }).merge(options)
}

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export function horizontalPodAutoscalerStatusV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerStatusV2beta2>) : k8s.HorizontalPodAutoscalerStatusV2beta2 {
  return (<k8s.HorizontalPodAutoscalerStatusV2beta2>{
    conditions: (options && options.conditions) || [],
    currentReplicas: (options && options.currentReplicas) || 0,
    desiredReplicas: (options && options.desiredReplicas) || 0,
  }).merge(options)
}

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export function metricIdentifierV2beta2(options?: Optional<k8s.MetricIdentifierV2beta2>) : k8s.MetricIdentifierV2beta2 {
  return (<k8s.MetricIdentifierV2beta2>{
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export function metricSpecV2beta2(options?: Optional<k8s.MetricSpecV2beta2>) : k8s.MetricSpecV2beta2 {
  return (<k8s.MetricSpecV2beta2>{
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export function metricStatusV2beta2(options?: Optional<k8s.MetricStatusV2beta2>) : k8s.MetricStatusV2beta2 {
  return (<k8s.MetricStatusV2beta2>{
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export function metricTargetV2beta2(options?: Optional<k8s.MetricTargetV2beta2>) : k8s.MetricTargetV2beta2 {
  return (<k8s.MetricTargetV2beta2>{
    type: (options && options.type) || null,
  }).merge(options)
}

/**
 * MetricValueStatus holds the current value for a metric
 */
export function metricValueStatusV2beta2(options?: Optional<k8s.MetricValueStatusV2beta2>) : k8s.MetricValueStatusV2beta2 {
  return (<k8s.MetricValueStatusV2beta2>{
  }).merge(options)
}

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export function objectMetricSourceV2beta2(options?: Optional<k8s.ObjectMetricSourceV2beta2>) : k8s.ObjectMetricSourceV2beta2 {
  return (<k8s.ObjectMetricSourceV2beta2>{
    describedObject: (options && options.describedObject) || crossVersionObjectReferenceV2beta2(),
    metric: (options && options.metric) || metricIdentifierV2beta2(),
    target: (options && options.target) || metricTargetV2beta2(),
  }).merge(options)
}

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export function objectMetricStatusV2beta2(options?: Optional<k8s.ObjectMetricStatusV2beta2>) : k8s.ObjectMetricStatusV2beta2 {
  return (<k8s.ObjectMetricStatusV2beta2>{
    current: (options && options.current) || metricValueStatusV2beta2(),
    describedObject: (options && options.describedObject) || crossVersionObjectReferenceV2beta2(),
    metric: (options && options.metric) || metricIdentifierV2beta2(),
  }).merge(options)
}

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export function podsMetricSourceV2beta2(options?: Optional<k8s.PodsMetricSourceV2beta2>) : k8s.PodsMetricSourceV2beta2 {
  return (<k8s.PodsMetricSourceV2beta2>{
    metric: (options && options.metric) || metricIdentifierV2beta2(),
    target: (options && options.target) || metricTargetV2beta2(),
  }).merge(options)
}

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export function podsMetricStatusV2beta2(options?: Optional<k8s.PodsMetricStatusV2beta2>) : k8s.PodsMetricStatusV2beta2 {
  return (<k8s.PodsMetricStatusV2beta2>{
    current: (options && options.current) || metricValueStatusV2beta2(),
    metric: (options && options.metric) || metricIdentifierV2beta2(),
  }).merge(options)
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export function resourceMetricSourceV2beta2(options?: Optional<k8s.ResourceMetricSourceV2beta2>) : k8s.ResourceMetricSourceV2beta2 {
  return (<k8s.ResourceMetricSourceV2beta2>{
    name: (options && options.name) || null,
    target: (options && options.target) || metricTargetV2beta2(),
  }).merge(options)
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export function resourceMetricStatusV2beta2(options?: Optional<k8s.ResourceMetricStatusV2beta2>) : k8s.ResourceMetricStatusV2beta2 {
  return (<k8s.ResourceMetricStatusV2beta2>{
    current: (options && options.current) || metricValueStatusV2beta2(),
    name: (options && options.name) || null,
  }).merge(options)
}

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export function infoVersion(options?: Optional<k8s.InfoVersion>) : k8s.InfoVersion {
  return (<k8s.InfoVersion>{
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

