"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
function serviceReferenceAdmissionregistrationV1beta1(options) {
    return {
        name: (options && options.name) || null,
        namespace: (options && options.namespace) || null,
    }.merge(options);
}
exports.serviceReferenceAdmissionregistrationV1beta1 = serviceReferenceAdmissionregistrationV1beta1;
/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 */
function webhookClientConfigAdmissionregistrationV1beta1(options) {
    return {}.merge(options);
}
exports.webhookClientConfigAdmissionregistrationV1beta1 = webhookClientConfigAdmissionregistrationV1beta1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
function serviceReferenceApiextensionsV1beta1(options) {
    return {
        name: (options && options.name) || null,
        namespace: (options && options.namespace) || null,
    }.merge(options);
}
exports.serviceReferenceApiextensionsV1beta1 = serviceReferenceApiextensionsV1beta1;
/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook. It has the same field as admissionregistration.v1beta1.WebhookClientConfig.
 */
function webhookClientConfigApiextensionsV1beta1(options) {
    return {}.merge(options);
}
exports.webhookClientConfigApiextensionsV1beta1 = webhookClientConfigApiextensionsV1beta1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
function serviceReferenceApiregistrationV1beta1(options) {
    return {}.merge(options);
}
exports.serviceReferenceApiregistrationV1beta1 = serviceReferenceApiregistrationV1beta1;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
function deploymentAppsV1beta1(options) {
    return {
        apiVersion: "apps.v1beta1",
        kind: "Deployment",
    }.merge(options);
}
exports.deploymentAppsV1beta1 = deploymentAppsV1beta1;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
function deploymentConditionAppsV1beta1(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.deploymentConditionAppsV1beta1 = deploymentConditionAppsV1beta1;
/**
 * DeploymentList is a list of Deployments.
 */
function deploymentListAppsV1beta1(options) {
    return {
        apiVersion: "apps.v1beta1",
        kind: "DeploymentList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.deploymentListAppsV1beta1 = deploymentListAppsV1beta1;
/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
function deploymentRollbackAppsV1beta1(options) {
    return {
        apiVersion: "apps.v1beta1",
        kind: "DeploymentRollback",
        name: (options && options.name) || null,
        rollbackTo: (options && options.rollbackTo) || rollbackConfigAppsV1beta1(),
    }.merge(options);
}
exports.deploymentRollbackAppsV1beta1 = deploymentRollbackAppsV1beta1;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
function deploymentSpecAppsV1beta1(options) {
    return {
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.deploymentSpecAppsV1beta1 = deploymentSpecAppsV1beta1;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
function deploymentStatusAppsV1beta1(options) {
    return {}.merge(options);
}
exports.deploymentStatusAppsV1beta1 = deploymentStatusAppsV1beta1;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
function deploymentStrategyAppsV1beta1(options) {
    return {}.merge(options);
}
exports.deploymentStrategyAppsV1beta1 = deploymentStrategyAppsV1beta1;
/**
 * DEPRECATED.
 */
function rollbackConfigAppsV1beta1(options) {
    return {}.merge(options);
}
exports.rollbackConfigAppsV1beta1 = rollbackConfigAppsV1beta1;
/**
 * Spec to control the desired behavior of rolling update.
 */
function rollingUpdateDeploymentAppsV1beta1(options) {
    return {}.merge(options);
}
exports.rollingUpdateDeploymentAppsV1beta1 = rollingUpdateDeploymentAppsV1beta1;
/**
 * Scale represents a scaling request for a resource.
 */
function scaleAppsV1beta1(options) {
    return {
        apiVersion: "apps.v1beta1",
        kind: "Scale",
    }.merge(options);
}
exports.scaleAppsV1beta1 = scaleAppsV1beta1;
/**
 * ScaleSpec describes the attributes of a scale subresource
 */
function scaleSpecAppsV1beta1(options) {
    return {}.merge(options);
}
exports.scaleSpecAppsV1beta1 = scaleSpecAppsV1beta1;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
function scaleStatusAppsV1beta1(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.scaleStatusAppsV1beta1 = scaleStatusAppsV1beta1;
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead.
 */
function allowedFlexVolumeExtensionsV1beta1(options) {
    return {
        driver: (options && options.driver) || null,
    }.merge(options);
}
exports.allowedFlexVolumeExtensionsV1beta1 = allowedFlexVolumeExtensionsV1beta1;
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead.
 */
function allowedHostPathExtensionsV1beta1(options) {
    return {}.merge(options);
}
exports.allowedHostPathExtensionsV1beta1 = allowedHostPathExtensionsV1beta1;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
function deploymentExtensionsV1beta1(options) {
    return {
        apiVersion: "extensions.v1beta1",
        kind: "Deployment",
    }.merge(options);
}
exports.deploymentExtensionsV1beta1 = deploymentExtensionsV1beta1;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
function deploymentConditionExtensionsV1beta1(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.deploymentConditionExtensionsV1beta1 = deploymentConditionExtensionsV1beta1;
/**
 * DeploymentList is a list of Deployments.
 */
function deploymentListExtensionsV1beta1(options) {
    return {
        apiVersion: "extensions.v1beta1",
        kind: "DeploymentList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.deploymentListExtensionsV1beta1 = deploymentListExtensionsV1beta1;
/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
function deploymentRollbackExtensionsV1beta1(options) {
    return {
        apiVersion: "extensions.v1beta1",
        kind: "DeploymentRollback",
        name: (options && options.name) || null,
        rollbackTo: (options && options.rollbackTo) || rollbackConfigExtensionsV1beta1(),
    }.merge(options);
}
exports.deploymentRollbackExtensionsV1beta1 = deploymentRollbackExtensionsV1beta1;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
function deploymentSpecExtensionsV1beta1(options) {
    return {
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.deploymentSpecExtensionsV1beta1 = deploymentSpecExtensionsV1beta1;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
function deploymentStatusExtensionsV1beta1(options) {
    return {}.merge(options);
}
exports.deploymentStatusExtensionsV1beta1 = deploymentStatusExtensionsV1beta1;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
function deploymentStrategyExtensionsV1beta1(options) {
    return {}.merge(options);
}
exports.deploymentStrategyExtensionsV1beta1 = deploymentStrategyExtensionsV1beta1;
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 */
function fSGroupStrategyOptionsExtensionsV1beta1(options) {
    return {}.merge(options);
}
exports.fSGroupStrategyOptionsExtensionsV1beta1 = fSGroupStrategyOptionsExtensionsV1beta1;
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 */
function hostPortRangeExtensionsV1beta1(options) {
    return {
        max: (options && options.max) || 0,
        min: (options && options.min) || 0,
    }.merge(options);
}
exports.hostPortRangeExtensionsV1beta1 = hostPortRangeExtensionsV1beta1;
/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 */
function iDRangeExtensionsV1beta1(options) {
    return {
        max: (options && options.max) || 0,
        min: (options && options.min) || 0,
    }.merge(options);
}
exports.iDRangeExtensionsV1beta1 = iDRangeExtensionsV1beta1;
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 */
function podSecurityPolicyExtensionsV1beta1(options) {
    return {
        apiVersion: "extensions.v1beta1",
        kind: "PodSecurityPolicy",
    }.merge(options);
}
exports.podSecurityPolicyExtensionsV1beta1 = podSecurityPolicyExtensionsV1beta1;
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
function podSecurityPolicyListExtensionsV1beta1(options) {
    return {
        apiVersion: "extensions.v1beta1",
        kind: "PodSecurityPolicyList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.podSecurityPolicyListExtensionsV1beta1 = podSecurityPolicyListExtensionsV1beta1;
/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 */
function podSecurityPolicySpecExtensionsV1beta1(options) {
    return {
        fsGroup: (options && options.fsGroup) || fSGroupStrategyOptionsExtensionsV1beta1(),
        runAsUser: (options && options.runAsUser) || runAsUserStrategyOptionsExtensionsV1beta1(),
        seLinux: (options && options.seLinux) || sELinuxStrategyOptionsExtensionsV1beta1(),
        supplementalGroups: (options && options.supplementalGroups) || supplementalGroupsStrategyOptionsExtensionsV1beta1(),
    }.merge(options);
}
exports.podSecurityPolicySpecExtensionsV1beta1 = podSecurityPolicySpecExtensionsV1beta1;
/**
 * DEPRECATED.
 */
function rollbackConfigExtensionsV1beta1(options) {
    return {}.merge(options);
}
exports.rollbackConfigExtensionsV1beta1 = rollbackConfigExtensionsV1beta1;
/**
 * Spec to control the desired behavior of rolling update.
 */
function rollingUpdateDeploymentExtensionsV1beta1(options) {
    return {}.merge(options);
}
exports.rollingUpdateDeploymentExtensionsV1beta1 = rollingUpdateDeploymentExtensionsV1beta1;
/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsGroupStrategyOptions from policy API Group instead.
 */
function runAsGroupStrategyOptionsExtensionsV1beta1(options) {
    return {
        rule: (options && options.rule) || null,
    }.merge(options);
}
exports.runAsGroupStrategyOptionsExtensionsV1beta1 = runAsGroupStrategyOptionsExtensionsV1beta1;
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 */
function runAsUserStrategyOptionsExtensionsV1beta1(options) {
    return {
        rule: (options && options.rule) || null,
    }.merge(options);
}
exports.runAsUserStrategyOptionsExtensionsV1beta1 = runAsUserStrategyOptionsExtensionsV1beta1;
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
function sELinuxStrategyOptionsExtensionsV1beta1(options) {
    return {
        rule: (options && options.rule) || null,
    }.merge(options);
}
exports.sELinuxStrategyOptionsExtensionsV1beta1 = sELinuxStrategyOptionsExtensionsV1beta1;
/**
 * represents a scaling request for a resource.
 */
function scaleExtensionsV1beta1(options) {
    return {
        apiVersion: "extensions.v1beta1",
        kind: "Scale",
    }.merge(options);
}
exports.scaleExtensionsV1beta1 = scaleExtensionsV1beta1;
/**
 * describes the attributes of a scale subresource
 */
function scaleSpecExtensionsV1beta1(options) {
    return {}.merge(options);
}
exports.scaleSpecExtensionsV1beta1 = scaleSpecExtensionsV1beta1;
/**
 * represents the current status of a scale subresource.
 */
function scaleStatusExtensionsV1beta1(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.scaleStatusExtensionsV1beta1 = scaleStatusExtensionsV1beta1;
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 */
function supplementalGroupsStrategyOptionsExtensionsV1beta1(options) {
    return {}.merge(options);
}
exports.supplementalGroupsStrategyOptionsExtensionsV1beta1 = supplementalGroupsStrategyOptionsExtensionsV1beta1;
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
function allowedFlexVolumePolicyV1beta1(options) {
    return {
        driver: (options && options.driver) || null,
    }.merge(options);
}
exports.allowedFlexVolumePolicyV1beta1 = allowedFlexVolumePolicyV1beta1;
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
function allowedHostPathPolicyV1beta1(options) {
    return {}.merge(options);
}
exports.allowedHostPathPolicyV1beta1 = allowedHostPathPolicyV1beta1;
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
function fSGroupStrategyOptionsPolicyV1beta1(options) {
    return {}.merge(options);
}
exports.fSGroupStrategyOptionsPolicyV1beta1 = fSGroupStrategyOptionsPolicyV1beta1;
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
function hostPortRangePolicyV1beta1(options) {
    return {
        max: (options && options.max) || 0,
        min: (options && options.min) || 0,
    }.merge(options);
}
exports.hostPortRangePolicyV1beta1 = hostPortRangePolicyV1beta1;
/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
function iDRangePolicyV1beta1(options) {
    return {
        max: (options && options.max) || 0,
        min: (options && options.min) || 0,
    }.merge(options);
}
exports.iDRangePolicyV1beta1 = iDRangePolicyV1beta1;
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
function podSecurityPolicyPolicyV1beta1(options) {
    return {
        apiVersion: "policy.v1beta1",
        kind: "PodSecurityPolicy",
    }.merge(options);
}
exports.podSecurityPolicyPolicyV1beta1 = podSecurityPolicyPolicyV1beta1;
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
function podSecurityPolicyListPolicyV1beta1(options) {
    return {
        apiVersion: "policy.v1beta1",
        kind: "PodSecurityPolicyList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.podSecurityPolicyListPolicyV1beta1 = podSecurityPolicyListPolicyV1beta1;
/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
function podSecurityPolicySpecPolicyV1beta1(options) {
    return {
        fsGroup: (options && options.fsGroup) || fSGroupStrategyOptionsPolicyV1beta1(),
        runAsUser: (options && options.runAsUser) || runAsUserStrategyOptionsPolicyV1beta1(),
        seLinux: (options && options.seLinux) || sELinuxStrategyOptionsPolicyV1beta1(),
        supplementalGroups: (options && options.supplementalGroups) || supplementalGroupsStrategyOptionsPolicyV1beta1(),
    }.merge(options);
}
exports.podSecurityPolicySpecPolicyV1beta1 = podSecurityPolicySpecPolicyV1beta1;
/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 */
function runAsGroupStrategyOptionsPolicyV1beta1(options) {
    return {
        rule: (options && options.rule) || null,
    }.merge(options);
}
exports.runAsGroupStrategyOptionsPolicyV1beta1 = runAsGroupStrategyOptionsPolicyV1beta1;
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
function runAsUserStrategyOptionsPolicyV1beta1(options) {
    return {
        rule: (options && options.rule) || null,
    }.merge(options);
}
exports.runAsUserStrategyOptionsPolicyV1beta1 = runAsUserStrategyOptionsPolicyV1beta1;
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
function sELinuxStrategyOptionsPolicyV1beta1(options) {
    return {
        rule: (options && options.rule) || null,
    }.merge(options);
}
exports.sELinuxStrategyOptionsPolicyV1beta1 = sELinuxStrategyOptionsPolicyV1beta1;
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
function supplementalGroupsStrategyOptionsPolicyV1beta1(options) {
    return {}.merge(options);
}
exports.supplementalGroupsStrategyOptionsPolicyV1beta1 = supplementalGroupsStrategyOptionsPolicyV1beta1;
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
function rawExtensionRuntime(options) {
    return {
        Raw: (options && options.Raw) || null,
    }.merge(options);
}
exports.rawExtensionRuntime = rawExtensionRuntime;
/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
function aPIGroup(options) {
    return {
        apiVersion: "v1",
        kind: "APIGroup",
        name: (options && options.name) || null,
        versions: (options && options.versions) || [],
    }.merge(options);
}
exports.aPIGroup = aPIGroup;
/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
function aPIGroupList(options) {
    return {
        apiVersion: "v1",
        kind: "APIGroupList",
        groups: (options && options.groups) || [],
    }.merge(options);
}
exports.aPIGroupList = aPIGroupList;
/**
 * APIResource specifies the name of a resource and whether it is namespaced.
 */
function aPIResource(options) {
    return {
        kind: "APIResource",
        name: (options && options.name) || null,
        namespaced: (options && options.namespaced) || false,
        singularName: (options && options.singularName) || null,
        verbs: (options && options.verbs) || [],
    }.merge(options);
}
exports.aPIResource = aPIResource;
/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 */
function aPIResourceList(options) {
    return {
        apiVersion: "v1",
        kind: "APIResourceList",
        groupVersion: (options && options.groupVersion) || null,
        resources: (options && options.resources) || [],
    }.merge(options);
}
exports.aPIResourceList = aPIResourceList;
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
function aPIService(options) {
    return {
        apiVersion: "v1",
        kind: "APIService",
    }.merge(options);
}
exports.aPIService = aPIService;
function aPIServiceCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.aPIServiceCondition = aPIServiceCondition;
/**
 * APIServiceList is a list of APIService objects.
 */
function aPIServiceList(options) {
    return {
        apiVersion: "v1",
        kind: "APIServiceList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.aPIServiceList = aPIServiceList;
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
function aPIServiceSpec(options) {
    return {
        groupPriorityMinimum: (options && options.groupPriorityMinimum) || 0,
        service: (options && options.service) || serviceReference(),
        versionPriority: (options && options.versionPriority) || 0,
    }.merge(options);
}
exports.aPIServiceSpec = aPIServiceSpec;
/**
 * APIServiceStatus contains derived information about an API server
 */
function aPIServiceStatus(options) {
    return {}.merge(options);
}
exports.aPIServiceStatus = aPIServiceStatus;
/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
function aPIVersions(options) {
    return {
        apiVersion: "v1",
        kind: "APIVersions",
        serverAddressByClientCIDRs: (options && options.serverAddressByClientCIDRs) || [],
        versions: (options && options.versions) || [],
    }.merge(options);
}
exports.aPIVersions = aPIVersions;
/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
function aWSElasticBlockStoreVolumeSource(options) {
    return {
        volumeID: (options && options.volumeID) || null,
    }.merge(options);
}
exports.aWSElasticBlockStoreVolumeSource = aWSElasticBlockStoreVolumeSource;
/**
 * Affinity is a group of affinity scheduling rules.
 */
function affinity(options) {
    return {}.merge(options);
}
exports.affinity = affinity;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
function aggregationRule(options) {
    return {}.merge(options);
}
exports.aggregationRule = aggregationRule;
/**
 * AttachedVolume describes a volume attached to a node
 */
function attachedVolume(options) {
    return {
        devicePath: (options && options.devicePath) || null,
        name: (options && options.name) || null,
    }.merge(options);
}
exports.attachedVolume = attachedVolume;
/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
function azureDiskVolumeSource(options) {
    return {
        kind: "AzureDiskVolumeSource",
        diskName: (options && options.diskName) || null,
        diskURI: (options && options.diskURI) || null,
    }.merge(options);
}
exports.azureDiskVolumeSource = azureDiskVolumeSource;
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
function azureFilePersistentVolumeSource(options) {
    return {
        secretName: (options && options.secretName) || null,
        shareName: (options && options.shareName) || null,
    }.merge(options);
}
exports.azureFilePersistentVolumeSource = azureFilePersistentVolumeSource;
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
function azureFileVolumeSource(options) {
    return {
        secretName: (options && options.secretName) || null,
        shareName: (options && options.shareName) || null,
    }.merge(options);
}
exports.azureFileVolumeSource = azureFileVolumeSource;
/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 */
function binding(options) {
    return {
        apiVersion: "v1",
        kind: "Binding",
        target: (options && options.target) || objectReference(),
    }.merge(options);
}
exports.binding = binding;
/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
function cSIPersistentVolumeSource(options) {
    return {
        driver: (options && options.driver) || null,
        volumeHandle: (options && options.volumeHandle) || null,
    }.merge(options);
}
exports.cSIPersistentVolumeSource = cSIPersistentVolumeSource;
/**
 * Adds and removes POSIX capabilities from running containers.
 */
function capabilities(options) {
    return {}.merge(options);
}
exports.capabilities = capabilities;
/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
function cephFSPersistentVolumeSource(options) {
    return {
        monitors: (options && options.monitors) || [],
    }.merge(options);
}
exports.cephFSPersistentVolumeSource = cephFSPersistentVolumeSource;
/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
function cephFSVolumeSource(options) {
    return {
        monitors: (options && options.monitors) || [],
    }.merge(options);
}
exports.cephFSVolumeSource = cephFSVolumeSource;
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
function cinderPersistentVolumeSource(options) {
    return {
        volumeID: (options && options.volumeID) || null,
    }.merge(options);
}
exports.cinderPersistentVolumeSource = cinderPersistentVolumeSource;
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
function cinderVolumeSource(options) {
    return {
        volumeID: (options && options.volumeID) || null,
    }.merge(options);
}
exports.cinderVolumeSource = cinderVolumeSource;
/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
function clientIPConfig(options) {
    return {}.merge(options);
}
exports.clientIPConfig = clientIPConfig;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
function clusterRole(options) {
    return {
        apiVersion: "v1",
        kind: "ClusterRole",
        rules: (options && options.rules) || [],
    }.merge(options);
}
exports.clusterRole = clusterRole;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
function clusterRoleBinding(options) {
    return {
        apiVersion: "v1",
        kind: "ClusterRoleBinding",
        roleRef: (options && options.roleRef) || roleRef(),
    }.merge(options);
}
exports.clusterRoleBinding = clusterRoleBinding;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
function clusterRoleBindingList(options) {
    return {
        apiVersion: "v1",
        kind: "ClusterRoleBindingList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.clusterRoleBindingList = clusterRoleBindingList;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
function clusterRoleList(options) {
    return {
        apiVersion: "v1",
        kind: "ClusterRoleList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.clusterRoleList = clusterRoleList;
/**
 * Information about the condition of a component.
 */
function componentCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.componentCondition = componentCondition;
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 */
function componentStatus(options) {
    return {
        apiVersion: "v1",
        kind: "ComponentStatus",
    }.merge(options);
}
exports.componentStatus = componentStatus;
/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 */
function componentStatusList(options) {
    return {
        apiVersion: "v1",
        kind: "ComponentStatusList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.componentStatusList = componentStatusList;
/**
 * ConfigMap holds configuration data for pods to consume.
 */
function configMap(options) {
    return {
        apiVersion: "v1",
        kind: "ConfigMap",
    }.merge(options);
}
exports.configMap = configMap;
/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
function configMapEnvSource(options) {
    return {}.merge(options);
}
exports.configMapEnvSource = configMapEnvSource;
/**
 * Selects a key from a ConfigMap.
 */
function configMapKeySelector(options) {
    return {
        key: (options && options.key) || null,
    }.merge(options);
}
exports.configMapKeySelector = configMapKeySelector;
/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
function configMapList(options) {
    return {
        apiVersion: "v1",
        kind: "ConfigMapList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.configMapList = configMapList;
/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 */
function configMapNodeConfigSource(options) {
    return {
        kubeletConfigKey: (options && options.kubeletConfigKey) || null,
        name: (options && options.name) || null,
        namespace: (options && options.namespace) || null,
    }.merge(options);
}
exports.configMapNodeConfigSource = configMapNodeConfigSource;
/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
function configMapProjection(options) {
    return {}.merge(options);
}
exports.configMapProjection = configMapProjection;
/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
function configMapVolumeSource(options) {
    return {}.merge(options);
}
exports.configMapVolumeSource = configMapVolumeSource;
/**
 * A single application container that you want to run within a pod.
 */
function container(options) {
    return {
        name: (options && options.name) || null,
    }.merge(options);
}
exports.container = container;
/**
 * Describe a container image
 */
function containerImage(options) {
    return {
        names: (options && options.names) || [],
    }.merge(options);
}
exports.containerImage = containerImage;
/**
 * ContainerPort represents a network port in a single container.
 */
function containerPort(options) {
    return {
        containerPort: (options && options.containerPort) || 0,
    }.merge(options);
}
exports.containerPort = containerPort;
/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
function containerState(options) {
    return {}.merge(options);
}
exports.containerState = containerState;
/**
 * ContainerStateRunning is a running state of a container.
 */
function containerStateRunning(options) {
    return {}.merge(options);
}
exports.containerStateRunning = containerStateRunning;
/**
 * ContainerStateTerminated is a terminated state of a container.
 */
function containerStateTerminated(options) {
    return {
        exitCode: (options && options.exitCode) || 0,
    }.merge(options);
}
exports.containerStateTerminated = containerStateTerminated;
/**
 * ContainerStateWaiting is a waiting state of a container.
 */
function containerStateWaiting(options) {
    return {}.merge(options);
}
exports.containerStateWaiting = containerStateWaiting;
/**
 * ContainerStatus contains details for the current status of this container.
 */
function containerStatus(options) {
    return {
        image: (options && options.image) || null,
        imageID: (options && options.imageID) || null,
        name: (options && options.name) || null,
        ready: (options && options.ready) || false,
        restartCount: (options && options.restartCount) || 0,
    }.merge(options);
}
exports.containerStatus = containerStatus;
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
function controllerRevision(options) {
    return {
        apiVersion: "v1",
        kind: "ControllerRevision",
        revision: (options && options.revision) || 0,
    }.merge(options);
}
exports.controllerRevision = controllerRevision;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
function controllerRevisionList(options) {
    return {
        apiVersion: "v1",
        kind: "ControllerRevisionList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.controllerRevisionList = controllerRevisionList;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
function crossVersionObjectReference(options) {
    return {
        apiVersion: "v1",
        kind: "CrossVersionObjectReference",
        name: (options && options.name) || null,
    }.merge(options);
}
exports.crossVersionObjectReference = crossVersionObjectReference;
/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
function daemonEndpoint(options) {
    return {
        Port: (options && options.Port) || 0,
    }.merge(options);
}
exports.daemonEndpoint = daemonEndpoint;
/**
 * DaemonSet represents the configuration of a daemon set.
 */
function daemonSet(options) {
    return {
        apiVersion: "v1",
        kind: "DaemonSet",
    }.merge(options);
}
exports.daemonSet = daemonSet;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
function daemonSetCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.daemonSetCondition = daemonSetCondition;
/**
 * DaemonSetList is a collection of daemon sets.
 */
function daemonSetList(options) {
    return {
        apiVersion: "v1",
        kind: "DaemonSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.daemonSetList = daemonSetList;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
function daemonSetSpec(options) {
    return {
        selector: (options && options.selector) || labelSelector(),
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.daemonSetSpec = daemonSetSpec;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
function daemonSetStatus(options) {
    return {
        currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
        desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
        numberMisscheduled: (options && options.numberMisscheduled) || 0,
        numberReady: (options && options.numberReady) || 0,
    }.merge(options);
}
exports.daemonSetStatus = daemonSetStatus;
/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
function daemonSetUpdateStrategy(options) {
    return {}.merge(options);
}
exports.daemonSetUpdateStrategy = daemonSetUpdateStrategy;
/**
 * DeleteOptions may be provided when deleting an API object.
 */
function deleteOptions(options) {
    return {
        apiVersion: "v1",
        kind: "DeleteOptions",
    }.merge(options);
}
exports.deleteOptions = deleteOptions;
/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
function deployment(options) {
    return {
        apiVersion: "v1",
        kind: "Deployment",
    }.merge(options);
}
exports.deployment = deployment;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
function deploymentCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.deploymentCondition = deploymentCondition;
/**
 * DeploymentList is a list of Deployments.
 */
function deploymentList(options) {
    return {
        apiVersion: "v1",
        kind: "DeploymentList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.deploymentList = deploymentList;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
function deploymentSpec(options) {
    return {
        selector: (options && options.selector) || labelSelector(),
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.deploymentSpec = deploymentSpec;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
function deploymentStatus(options) {
    return {}.merge(options);
}
exports.deploymentStatus = deploymentStatus;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
function deploymentStrategy(options) {
    return {}.merge(options);
}
exports.deploymentStrategy = deploymentStrategy;
/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
function downwardAPIProjection(options) {
    return {}.merge(options);
}
exports.downwardAPIProjection = downwardAPIProjection;
/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
function downwardAPIVolumeFile(options) {
    return {
        path: (options && options.path) || null,
    }.merge(options);
}
exports.downwardAPIVolumeFile = downwardAPIVolumeFile;
/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
function downwardAPIVolumeSource(options) {
    return {}.merge(options);
}
exports.downwardAPIVolumeSource = downwardAPIVolumeSource;
/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 */
function emptyDirVolumeSource(options) {
    return {}.merge(options);
}
exports.emptyDirVolumeSource = emptyDirVolumeSource;
/**
 * EndpointAddress is a tuple that describes single IP address.
 */
function endpointAddress(options) {
    return {
        ip: (options && options.ip) || null,
    }.merge(options);
}
exports.endpointAddress = endpointAddress;
/**
 * EndpointPort is a tuple that describes a single port.
 */
function endpointPort(options) {
    return {
        port: (options && options.port) || 0,
    }.merge(options);
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
    return {}.merge(options);
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
    return {
        apiVersion: "v1",
        kind: "Endpoints",
    }.merge(options);
}
exports.endpoints = endpoints;
/**
 * EndpointsList is a list of endpoints.
 */
function endpointsList(options) {
    return {
        apiVersion: "v1",
        kind: "EndpointsList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.endpointsList = endpointsList;
/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
function envFromSource(options) {
    return {}.merge(options);
}
exports.envFromSource = envFromSource;
/**
 * EnvVar represents an environment variable present in a Container.
 */
function envVar(options) {
    return {
        name: (options && options.name) || null,
    }.merge(options);
}
exports.envVar = envVar;
/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
function envVarSource(options) {
    return {}.merge(options);
}
exports.envVarSource = envVarSource;
/**
 * Event is a report of an event somewhere in the cluster.
 */
function event(options) {
    return {
        apiVersion: "v1",
        kind: "Event",
        involvedObject: (options && options.involvedObject) || objectReference(),
        metadata: (options && options.metadata) || objectMeta(),
    }.merge(options);
}
exports.event = event;
/**
 * EventList is a list of events.
 */
function eventList(options) {
    return {
        apiVersion: "v1",
        kind: "EventList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.eventList = eventList;
/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
function eventSeries(options) {
    return {}.merge(options);
}
exports.eventSeries = eventSeries;
/**
 * EventSource contains information for an event.
 */
function eventSource(options) {
    return {}.merge(options);
}
exports.eventSource = eventSource;
/**
 * ExecAction describes a "run in container" action.
 */
function execAction(options) {
    return {}.merge(options);
}
exports.execAction = execAction;
/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 */
function fCVolumeSource(options) {
    return {}.merge(options);
}
exports.fCVolumeSource = fCVolumeSource;
/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
function flexPersistentVolumeSource(options) {
    return {
        driver: (options && options.driver) || null,
    }.merge(options);
}
exports.flexPersistentVolumeSource = flexPersistentVolumeSource;
/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
function flexVolumeSource(options) {
    return {
        driver: (options && options.driver) || null,
    }.merge(options);
}
exports.flexVolumeSource = flexVolumeSource;
/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
function flockerVolumeSource(options) {
    return {}.merge(options);
}
exports.flockerVolumeSource = flockerVolumeSource;
/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
function gCEPersistentDiskVolumeSource(options) {
    return {
        pdName: (options && options.pdName) || null,
    }.merge(options);
}
exports.gCEPersistentDiskVolumeSource = gCEPersistentDiskVolumeSource;
/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
function gitRepoVolumeSource(options) {
    return {
        repository: (options && options.repository) || null,
    }.merge(options);
}
exports.gitRepoVolumeSource = gitRepoVolumeSource;
/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
function glusterfsPersistentVolumeSource(options) {
    return {
        endpoints: (options && options.endpoints) || null,
        path: (options && options.path) || null,
    }.merge(options);
}
exports.glusterfsPersistentVolumeSource = glusterfsPersistentVolumeSource;
/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
function glusterfsVolumeSource(options) {
    return {
        endpoints: (options && options.endpoints) || null,
        path: (options && options.path) || null,
    }.merge(options);
}
exports.glusterfsVolumeSource = glusterfsVolumeSource;
/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
function groupVersionForDiscovery(options) {
    return {
        groupVersion: (options && options.groupVersion) || null,
        version: (options && options.version) || null,
    }.merge(options);
}
exports.groupVersionForDiscovery = groupVersionForDiscovery;
/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
function hTTPGetAction(options) {
    return {
        port: (options && options.port) || null,
    }.merge(options);
}
exports.hTTPGetAction = hTTPGetAction;
/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
function hTTPHeader(options) {
    return {
        name: (options && options.name) || null,
        value: (options && options.value) || null,
    }.merge(options);
}
exports.hTTPHeader = hTTPHeader;
/**
 * Handler defines a specific action that should be taken
 */
function handler(options) {
    return {}.merge(options);
}
exports.handler = handler;
/**
 * configuration of a horizontal pod autoscaler.
 */
function horizontalPodAutoscaler(options) {
    return {
        apiVersion: "v1",
        kind: "HorizontalPodAutoscaler",
    }.merge(options);
}
exports.horizontalPodAutoscaler = horizontalPodAutoscaler;
/**
 * list of horizontal pod autoscaler objects.
 */
function horizontalPodAutoscalerList(options) {
    return {
        apiVersion: "v1",
        kind: "HorizontalPodAutoscalerList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.horizontalPodAutoscalerList = horizontalPodAutoscalerList;
/**
 * specification of a horizontal pod autoscaler.
 */
function horizontalPodAutoscalerSpec(options) {
    return {
        maxReplicas: (options && options.maxReplicas) || 0,
        scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReference(),
    }.merge(options);
}
exports.horizontalPodAutoscalerSpec = horizontalPodAutoscalerSpec;
/**
 * current status of a horizontal pod autoscaler
 */
function horizontalPodAutoscalerStatus(options) {
    return {
        currentReplicas: (options && options.currentReplicas) || 0,
        desiredReplicas: (options && options.desiredReplicas) || 0,
    }.merge(options);
}
exports.horizontalPodAutoscalerStatus = horizontalPodAutoscalerStatus;
/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
function hostAlias(options) {
    return {}.merge(options);
}
exports.hostAlias = hostAlias;
/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
function hostPathVolumeSource(options) {
    return {
        path: (options && options.path) || null,
    }.merge(options);
}
exports.hostPathVolumeSource = hostPathVolumeSource;
/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
function iPBlock(options) {
    return {
        cidr: (options && options.cidr) || null,
    }.merge(options);
}
exports.iPBlock = iPBlock;
/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
function iSCSIPersistentVolumeSource(options) {
    return {
        iqn: (options && options.iqn) || null,
        lun: (options && options.lun) || 0,
        targetPortal: (options && options.targetPortal) || null,
    }.merge(options);
}
exports.iSCSIPersistentVolumeSource = iSCSIPersistentVolumeSource;
/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
function iSCSIVolumeSource(options) {
    return {
        iqn: (options && options.iqn) || null,
        lun: (options && options.lun) || 0,
        targetPortal: (options && options.targetPortal) || null,
    }.merge(options);
}
exports.iSCSIVolumeSource = iSCSIVolumeSource;
/**
 * Initializer is information about an initializer that has not yet completed.
 */
function initializer(options) {
    return {
        name: (options && options.name) || null,
    }.merge(options);
}
exports.initializer = initializer;
/**
 * Initializers tracks the progress of initialization.
 */
function initializers(options) {
    return {
        pending: (options && options.pending) || [],
    }.merge(options);
}
exports.initializers = initializers;
/**
 * Job represents the configuration of a single job.
 */
function job(options) {
    return {
        apiVersion: "v1",
        kind: "Job",
    }.merge(options);
}
exports.job = job;
/**
 * JobCondition describes current state of a job.
 */
function jobCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.jobCondition = jobCondition;
/**
 * JobList is a collection of jobs.
 */
function jobList(options) {
    return {
        apiVersion: "v1",
        kind: "JobList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.jobList = jobList;
/**
 * JobSpec describes how the job execution will look like.
 */
function jobSpec(options) {
    return {
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.jobSpec = jobSpec;
/**
 * JobStatus represents the current state of a Job.
 */
function jobStatus(options) {
    return {}.merge(options);
}
exports.jobStatus = jobStatus;
/**
 * Maps a string key to a path within a volume.
 */
function keyToPath(options) {
    return {
        key: (options && options.key) || null,
        path: (options && options.path) || null,
    }.merge(options);
}
exports.keyToPath = keyToPath;
/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
function labelSelector(options) {
    return {}.merge(options);
}
exports.labelSelector = labelSelector;
/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
function labelSelectorRequirement(options) {
    return {
        key: (options && options.key) || null,
        operator: (options && options.operator) || null,
    }.merge(options);
}
exports.labelSelectorRequirement = labelSelectorRequirement;
/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
function lifecycle(options) {
    return {}.merge(options);
}
exports.lifecycle = lifecycle;
/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
function limitRange(options) {
    return {
        apiVersion: "v1",
        kind: "LimitRange",
    }.merge(options);
}
exports.limitRange = limitRange;
/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
function limitRangeItem(options) {
    return {}.merge(options);
}
exports.limitRangeItem = limitRangeItem;
/**
 * LimitRangeList is a list of LimitRange items.
 */
function limitRangeList(options) {
    return {
        apiVersion: "v1",
        kind: "LimitRangeList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.limitRangeList = limitRangeList;
/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
function limitRangeSpec(options) {
    return {
        limits: (options && options.limits) || [],
    }.merge(options);
}
exports.limitRangeSpec = limitRangeSpec;
/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
function listMeta(options) {
    return {}.merge(options);
}
exports.listMeta = listMeta;
/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
function loadBalancerIngress(options) {
    return {}.merge(options);
}
exports.loadBalancerIngress = loadBalancerIngress;
/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
function loadBalancerStatus(options) {
    return {}.merge(options);
}
exports.loadBalancerStatus = loadBalancerStatus;
/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
function localObjectReference(options) {
    return {}.merge(options);
}
exports.localObjectReference = localObjectReference;
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
function localSubjectAccessReview(options) {
    return {
        apiVersion: "v1",
        kind: "LocalSubjectAccessReview",
        spec: (options && options.spec) || subjectAccessReviewSpec(),
    }.merge(options);
}
exports.localSubjectAccessReview = localSubjectAccessReview;
/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
function localVolumeSource(options) {
    return {
        path: (options && options.path) || null,
    }.merge(options);
}
exports.localVolumeSource = localVolumeSource;
/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
function nFSVolumeSource(options) {
    return {
        path: (options && options.path) || null,
        server: (options && options.server) || null,
    }.merge(options);
}
exports.nFSVolumeSource = nFSVolumeSource;
/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
function namespace(options) {
    return {
        apiVersion: "v1",
        kind: "Namespace",
    }.merge(options);
}
exports.namespace = namespace;
/**
 * NamespaceList is a list of Namespaces.
 */
function namespaceList(options) {
    return {
        apiVersion: "v1",
        kind: "NamespaceList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.namespaceList = namespaceList;
/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
function namespaceSpec(options) {
    return {}.merge(options);
}
exports.namespaceSpec = namespaceSpec;
/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
function namespaceStatus(options) {
    return {}.merge(options);
}
exports.namespaceStatus = namespaceStatus;
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
function networkPolicy(options) {
    return {
        apiVersion: "v1",
        kind: "NetworkPolicy",
    }.merge(options);
}
exports.networkPolicy = networkPolicy;
/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
function networkPolicyEgressRule(options) {
    return {}.merge(options);
}
exports.networkPolicyEgressRule = networkPolicyEgressRule;
/**
 * NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
 */
function networkPolicyIngressRule(options) {
    return {}.merge(options);
}
exports.networkPolicyIngressRule = networkPolicyIngressRule;
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
function networkPolicyList(options) {
    return {
        apiVersion: "v1",
        kind: "NetworkPolicyList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.networkPolicyList = networkPolicyList;
/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
function networkPolicyPeer(options) {
    return {}.merge(options);
}
exports.networkPolicyPeer = networkPolicyPeer;
/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
function networkPolicyPort(options) {
    return {}.merge(options);
}
exports.networkPolicyPort = networkPolicyPort;
/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 */
function networkPolicySpec(options) {
    return {
        podSelector: (options && options.podSelector) || labelSelector(),
    }.merge(options);
}
exports.networkPolicySpec = networkPolicySpec;
/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
function node(options) {
    return {
        apiVersion: "v1",
        kind: "Node",
    }.merge(options);
}
exports.node = node;
/**
 * NodeAddress contains information for the node's address.
 */
function nodeAddress(options) {
    return {
        address: (options && options.address) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.nodeAddress = nodeAddress;
/**
 * Node affinity is a group of node affinity scheduling rules.
 */
function nodeAffinity(options) {
    return {}.merge(options);
}
exports.nodeAffinity = nodeAffinity;
/**
 * NodeCondition contains condition information for a node.
 */
function nodeCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.nodeCondition = nodeCondition;
/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
function nodeConfigSource(options) {
    return {}.merge(options);
}
exports.nodeConfigSource = nodeConfigSource;
/**
 * NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
 */
function nodeConfigStatus(options) {
    return {}.merge(options);
}
exports.nodeConfigStatus = nodeConfigStatus;
/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
function nodeDaemonEndpoints(options) {
    return {}.merge(options);
}
exports.nodeDaemonEndpoints = nodeDaemonEndpoints;
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
function nodeList(options) {
    return {
        apiVersion: "v1",
        kind: "NodeList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.nodeList = nodeList;
/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
function nodeSelector(options) {
    return {
        nodeSelectorTerms: (options && options.nodeSelectorTerms) || [],
    }.merge(options);
}
exports.nodeSelector = nodeSelector;
/**
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
function nodeSelectorRequirement(options) {
    return {
        key: (options && options.key) || null,
        operator: (options && options.operator) || null,
    }.merge(options);
}
exports.nodeSelectorRequirement = nodeSelectorRequirement;
/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
function nodeSelectorTerm(options) {
    return {}.merge(options);
}
exports.nodeSelectorTerm = nodeSelectorTerm;
/**
 * NodeSpec describes the attributes that a node is created with.
 */
function nodeSpec(options) {
    return {}.merge(options);
}
exports.nodeSpec = nodeSpec;
/**
 * NodeStatus is information about the current status of a node.
 */
function nodeStatus(options) {
    return {}.merge(options);
}
exports.nodeStatus = nodeStatus;
/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
function nodeSystemInfo(options) {
    return {
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
    }.merge(options);
}
exports.nodeSystemInfo = nodeSystemInfo;
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
function nonResourceAttributes(options) {
    return {}.merge(options);
}
exports.nonResourceAttributes = nonResourceAttributes;
/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
function nonResourceRule(options) {
    return {
        verbs: (options && options.verbs) || [],
    }.merge(options);
}
exports.nonResourceRule = nonResourceRule;
/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
function objectFieldSelector(options) {
    return {
        apiVersion: "v1",
        fieldPath: (options && options.fieldPath) || null,
    }.merge(options);
}
exports.objectFieldSelector = objectFieldSelector;
/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
function objectMeta(options) {
    return {}.merge(options);
}
exports.objectMeta = objectMeta;
/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
function objectReference(options) {
    return {
        apiVersion: "v1",
        kind: "ObjectReference",
    }.merge(options);
}
exports.objectReference = objectReference;
/**
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 */
function ownerReference(options) {
    return {
        apiVersion: "v1",
        kind: "OwnerReference",
        name: (options && options.name) || null,
        uid: (options && options.uid) || null,
    }.merge(options);
}
exports.ownerReference = ownerReference;
/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
function persistentVolume(options) {
    return {
        apiVersion: "v1",
        kind: "PersistentVolume",
    }.merge(options);
}
exports.persistentVolume = persistentVolume;
/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
function persistentVolumeClaim(options) {
    return {
        apiVersion: "v1",
        kind: "PersistentVolumeClaim",
    }.merge(options);
}
exports.persistentVolumeClaim = persistentVolumeClaim;
/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
function persistentVolumeClaimCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.persistentVolumeClaimCondition = persistentVolumeClaimCondition;
/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
function persistentVolumeClaimList(options) {
    return {
        apiVersion: "v1",
        kind: "PersistentVolumeClaimList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.persistentVolumeClaimList = persistentVolumeClaimList;
/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 */
function persistentVolumeClaimSpec(options) {
    return {}.merge(options);
}
exports.persistentVolumeClaimSpec = persistentVolumeClaimSpec;
/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
function persistentVolumeClaimStatus(options) {
    return {}.merge(options);
}
exports.persistentVolumeClaimStatus = persistentVolumeClaimStatus;
/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 */
function persistentVolumeClaimVolumeSource(options) {
    return {
        claimName: (options && options.claimName) || null,
    }.merge(options);
}
exports.persistentVolumeClaimVolumeSource = persistentVolumeClaimVolumeSource;
/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
function persistentVolumeList(options) {
    return {
        apiVersion: "v1",
        kind: "PersistentVolumeList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.persistentVolumeList = persistentVolumeList;
/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
function persistentVolumeSpec(options) {
    return {}.merge(options);
}
exports.persistentVolumeSpec = persistentVolumeSpec;
/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
function persistentVolumeStatus(options) {
    return {}.merge(options);
}
exports.persistentVolumeStatus = persistentVolumeStatus;
/**
 * Represents a Photon Controller persistent disk resource.
 */
function photonPersistentDiskVolumeSource(options) {
    return {
        pdID: (options && options.pdID) || null,
    }.merge(options);
}
exports.photonPersistentDiskVolumeSource = photonPersistentDiskVolumeSource;
/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 */
function pod(options) {
    return {
        apiVersion: "v1",
        kind: "Pod",
    }.merge(options);
}
exports.pod = pod;
/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 */
function podAffinity(options) {
    return {}.merge(options);
}
exports.podAffinity = podAffinity;
/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
function podAffinityTerm(options) {
    return {
        topologyKey: (options && options.topologyKey) || null,
    }.merge(options);
}
exports.podAffinityTerm = podAffinityTerm;
/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 */
function podAntiAffinity(options) {
    return {}.merge(options);
}
exports.podAntiAffinity = podAntiAffinity;
/**
 * PodCondition contains details for the current condition of this pod.
 */
function podCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.podCondition = podCondition;
/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
function podDNSConfig(options) {
    return {}.merge(options);
}
exports.podDNSConfig = podDNSConfig;
/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
function podDNSConfigOption(options) {
    return {}.merge(options);
}
exports.podDNSConfigOption = podDNSConfigOption;
/**
 * PodList is a list of Pods.
 */
function podList(options) {
    return {
        apiVersion: "v1",
        kind: "PodList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.podList = podList;
/**
 * PodReadinessGate contains the reference to a pod condition
 */
function podReadinessGate(options) {
    return {
        conditionType: (options && options.conditionType) || null,
    }.merge(options);
}
exports.podReadinessGate = podReadinessGate;
/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 */
function podSecurityContext(options) {
    return {}.merge(options);
}
exports.podSecurityContext = podSecurityContext;
/**
 * PodSpec is a description of a pod.
 */
function podSpec(options) {
    return {
        containers: (options && options.containers) || [],
    }.merge(options);
}
exports.podSpec = podSpec;
/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
function podStatus(options) {
    return {}.merge(options);
}
exports.podStatus = podStatus;
/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
function podTemplate(options) {
    return {
        apiVersion: "v1",
        kind: "PodTemplate",
    }.merge(options);
}
exports.podTemplate = podTemplate;
/**
 * PodTemplateList is a list of PodTemplates.
 */
function podTemplateList(options) {
    return {
        apiVersion: "v1",
        kind: "PodTemplateList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.podTemplateList = podTemplateList;
/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
function podTemplateSpec(options) {
    return {}.merge(options);
}
exports.podTemplateSpec = podTemplateSpec;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
function policyRule(options) {
    return {
        verbs: (options && options.verbs) || [],
    }.merge(options);
}
exports.policyRule = policyRule;
/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
function portworxVolumeSource(options) {
    return {
        volumeID: (options && options.volumeID) || null,
    }.merge(options);
}
exports.portworxVolumeSource = portworxVolumeSource;
/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
function preconditions(options) {
    return {}.merge(options);
}
exports.preconditions = preconditions;
/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
function preferredSchedulingTerm(options) {
    return {
        preference: (options && options.preference) || nodeSelectorTerm(),
        weight: (options && options.weight) || 0,
    }.merge(options);
}
exports.preferredSchedulingTerm = preferredSchedulingTerm;
/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
function probe(options) {
    return {}.merge(options);
}
exports.probe = probe;
/**
 * Represents a projected volume source
 */
function projectedVolumeSource(options) {
    return {
        sources: (options && options.sources) || [],
    }.merge(options);
}
exports.projectedVolumeSource = projectedVolumeSource;
/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
function quobyteVolumeSource(options) {
    return {
        registry: (options && options.registry) || null,
        volume: (options && options.volume) || null,
    }.merge(options);
}
exports.quobyteVolumeSource = quobyteVolumeSource;
/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
function rBDPersistentVolumeSource(options) {
    return {
        image: (options && options.image) || null,
        monitors: (options && options.monitors) || [],
    }.merge(options);
}
exports.rBDPersistentVolumeSource = rBDPersistentVolumeSource;
/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
function rBDVolumeSource(options) {
    return {
        image: (options && options.image) || null,
        monitors: (options && options.monitors) || [],
    }.merge(options);
}
exports.rBDVolumeSource = rBDVolumeSource;
/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
function replicaSet(options) {
    return {
        apiVersion: "v1",
        kind: "ReplicaSet",
    }.merge(options);
}
exports.replicaSet = replicaSet;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
function replicaSetCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.replicaSetCondition = replicaSetCondition;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
function replicaSetList(options) {
    return {
        apiVersion: "v1",
        kind: "ReplicaSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.replicaSetList = replicaSetList;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
function replicaSetSpec(options) {
    return {
        selector: (options && options.selector) || labelSelector(),
    }.merge(options);
}
exports.replicaSetSpec = replicaSetSpec;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
function replicaSetStatus(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.replicaSetStatus = replicaSetStatus;
/**
 * ReplicationController represents the configuration of a replication controller.
 */
function replicationController(options) {
    return {
        apiVersion: "v1",
        kind: "ReplicationController",
    }.merge(options);
}
exports.replicationController = replicationController;
/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
function replicationControllerCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.replicationControllerCondition = replicationControllerCondition;
/**
 * ReplicationControllerList is a collection of replication controllers.
 */
function replicationControllerList(options) {
    return {
        apiVersion: "v1",
        kind: "ReplicationControllerList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.replicationControllerList = replicationControllerList;
/**
 * ReplicationControllerSpec is the specification of a replication controller.
 */
function replicationControllerSpec(options) {
    return {}.merge(options);
}
exports.replicationControllerSpec = replicationControllerSpec;
/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
function replicationControllerStatus(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.replicationControllerStatus = replicationControllerStatus;
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
function resourceAttributes(options) {
    return {}.merge(options);
}
exports.resourceAttributes = resourceAttributes;
/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
function resourceFieldSelector(options) {
    return {
        resource: (options && options.resource) || null,
    }.merge(options);
}
exports.resourceFieldSelector = resourceFieldSelector;
/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
function resourceQuota(options) {
    return {
        apiVersion: "v1",
        kind: "ResourceQuota",
    }.merge(options);
}
exports.resourceQuota = resourceQuota;
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
function resourceQuotaList(options) {
    return {
        apiVersion: "v1",
        kind: "ResourceQuotaList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.resourceQuotaList = resourceQuotaList;
/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
function resourceQuotaSpec(options) {
    return {}.merge(options);
}
exports.resourceQuotaSpec = resourceQuotaSpec;
/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
function resourceQuotaStatus(options) {
    return {}.merge(options);
}
exports.resourceQuotaStatus = resourceQuotaStatus;
/**
 * ResourceRequirements describes the compute resource requirements.
 */
function resourceRequirements(options) {
    return {}.merge(options);
}
exports.resourceRequirements = resourceRequirements;
/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
function resourceRule(options) {
    return {
        verbs: (options && options.verbs) || [],
    }.merge(options);
}
exports.resourceRule = resourceRule;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
function role(options) {
    return {
        apiVersion: "v1",
        kind: "Role",
        rules: (options && options.rules) || [],
    }.merge(options);
}
exports.role = role;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
function roleBinding(options) {
    return {
        apiVersion: "v1",
        kind: "RoleBinding",
        roleRef: (options && options.roleRef) || roleRef(),
    }.merge(options);
}
exports.roleBinding = roleBinding;
/**
 * RoleBindingList is a collection of RoleBindings
 */
function roleBindingList(options) {
    return {
        apiVersion: "v1",
        kind: "RoleBindingList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.roleBindingList = roleBindingList;
/**
 * RoleList is a collection of Roles
 */
function roleList(options) {
    return {
        apiVersion: "v1",
        kind: "RoleList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.roleList = roleList;
/**
 * RoleRef contains information that points to the role being used
 */
function roleRef(options) {
    return {
        kind: "RoleRef",
        apiGroup: (options && options.apiGroup) || null,
        name: (options && options.name) || null,
    }.merge(options);
}
exports.roleRef = roleRef;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
function rollingUpdateDaemonSet(options) {
    return {}.merge(options);
}
exports.rollingUpdateDaemonSet = rollingUpdateDaemonSet;
/**
 * Spec to control the desired behavior of rolling update.
 */
function rollingUpdateDeployment(options) {
    return {}.merge(options);
}
exports.rollingUpdateDeployment = rollingUpdateDeployment;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
function rollingUpdateStatefulSetStrategy(options) {
    return {}.merge(options);
}
exports.rollingUpdateStatefulSetStrategy = rollingUpdateStatefulSetStrategy;
/**
 * SELinuxOptions are the labels to be applied to the container
 */
function sELinuxOptions(options) {
    return {}.merge(options);
}
exports.sELinuxOptions = sELinuxOptions;
/**
 * Scale represents a scaling request for a resource.
 */
function scale(options) {
    return {
        apiVersion: "v1",
        kind: "Scale",
    }.merge(options);
}
exports.scale = scale;
/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 */
function scaleIOPersistentVolumeSource(options) {
    return {
        gateway: (options && options.gateway) || null,
        secretRef: (options && options.secretRef) || secretReference(),
        system: (options && options.system) || null,
    }.merge(options);
}
exports.scaleIOPersistentVolumeSource = scaleIOPersistentVolumeSource;
/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
function scaleIOVolumeSource(options) {
    return {
        gateway: (options && options.gateway) || null,
        secretRef: (options && options.secretRef) || localObjectReference(),
        system: (options && options.system) || null,
    }.merge(options);
}
exports.scaleIOVolumeSource = scaleIOVolumeSource;
/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
function scaleSpec(options) {
    return {}.merge(options);
}
exports.scaleSpec = scaleSpec;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
function scaleStatus(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.scaleStatus = scaleStatus;
/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
function scopeSelector(options) {
    return {}.merge(options);
}
exports.scopeSelector = scopeSelector;
/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
function scopedResourceSelectorRequirement(options) {
    return {
        operator: (options && options.operator) || null,
        scopeName: (options && options.scopeName) || null,
    }.merge(options);
}
exports.scopedResourceSelectorRequirement = scopedResourceSelectorRequirement;
/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 */
function secret(options) {
    return {
        apiVersion: "v1",
        kind: "Secret",
    }.merge(options);
}
exports.secret = secret;
/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
function secretEnvSource(options) {
    return {}.merge(options);
}
exports.secretEnvSource = secretEnvSource;
/**
 * SecretKeySelector selects a key of a Secret.
 */
function secretKeySelector(options) {
    return {
        key: (options && options.key) || null,
    }.merge(options);
}
exports.secretKeySelector = secretKeySelector;
/**
 * SecretList is a list of Secret.
 */
function secretList(options) {
    return {
        apiVersion: "v1",
        kind: "SecretList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.secretList = secretList;
/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
function secretProjection(options) {
    return {}.merge(options);
}
exports.secretProjection = secretProjection;
/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
function secretReference(options) {
    return {}.merge(options);
}
exports.secretReference = secretReference;
/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
function secretVolumeSource(options) {
    return {}.merge(options);
}
exports.secretVolumeSource = secretVolumeSource;
/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 */
function securityContext(options) {
    return {}.merge(options);
}
exports.securityContext = securityContext;
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
function selfSubjectAccessReview(options) {
    return {
        apiVersion: "v1",
        kind: "SelfSubjectAccessReview",
        spec: (options && options.spec) || selfSubjectAccessReviewSpec(),
    }.merge(options);
}
exports.selfSubjectAccessReview = selfSubjectAccessReview;
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
function selfSubjectAccessReviewSpec(options) {
    return {}.merge(options);
}
exports.selfSubjectAccessReviewSpec = selfSubjectAccessReviewSpec;
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
function selfSubjectRulesReview(options) {
    return {
        apiVersion: "v1",
        kind: "SelfSubjectRulesReview",
        spec: (options && options.spec) || selfSubjectRulesReviewSpec(),
    }.merge(options);
}
exports.selfSubjectRulesReview = selfSubjectRulesReview;
function selfSubjectRulesReviewSpec(options) {
    return {}.merge(options);
}
exports.selfSubjectRulesReviewSpec = selfSubjectRulesReviewSpec;
/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
function serverAddressByClientCIDR(options) {
    return {
        clientCIDR: (options && options.clientCIDR) || null,
        serverAddress: (options && options.serverAddress) || null,
    }.merge(options);
}
exports.serverAddressByClientCIDR = serverAddressByClientCIDR;
/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
function service(options) {
    return {
        apiVersion: "v1",
        kind: "Service",
    }.merge(options);
}
exports.service = service;
/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 */
function serviceAccount(options) {
    return {
        apiVersion: "v1",
        kind: "ServiceAccount",
    }.merge(options);
}
exports.serviceAccount = serviceAccount;
/**
 * ServiceAccountList is a list of ServiceAccount objects
 */
function serviceAccountList(options) {
    return {
        apiVersion: "v1",
        kind: "ServiceAccountList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.serviceAccountList = serviceAccountList;
/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 */
function serviceAccountTokenProjection(options) {
    return {
        path: (options && options.path) || null,
    }.merge(options);
}
exports.serviceAccountTokenProjection = serviceAccountTokenProjection;
/**
 * ServiceList holds a list of services.
 */
function serviceList(options) {
    return {
        apiVersion: "v1",
        kind: "ServiceList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.serviceList = serviceList;
/**
 * ServicePort contains information on service's port.
 */
function servicePort(options) {
    return {
        port: (options && options.port) || 0,
    }.merge(options);
}
exports.servicePort = servicePort;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
function serviceReference(options) {
    return {}.merge(options);
}
exports.serviceReference = serviceReference;
/**
 * ServiceSpec describes the attributes that a user creates on a service.
 */
function serviceSpec(options) {
    return {}.merge(options);
}
exports.serviceSpec = serviceSpec;
/**
 * ServiceStatus represents the current status of a service.
 */
function serviceStatus(options) {
    return {}.merge(options);
}
exports.serviceStatus = serviceStatus;
/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
function sessionAffinityConfig(options) {
    return {}.merge(options);
}
exports.sessionAffinityConfig = sessionAffinityConfig;
/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
function statefulSet(options) {
    return {
        apiVersion: "v1",
        kind: "StatefulSet",
    }.merge(options);
}
exports.statefulSet = statefulSet;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
function statefulSetCondition(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.statefulSetCondition = statefulSetCondition;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
function statefulSetList(options) {
    return {
        apiVersion: "v1",
        kind: "StatefulSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.statefulSetList = statefulSetList;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
function statefulSetSpec(options) {
    return {
        selector: (options && options.selector) || labelSelector(),
        serviceName: (options && options.serviceName) || null,
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.statefulSetSpec = statefulSetSpec;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
function statefulSetStatus(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.statefulSetStatus = statefulSetStatus;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
function statefulSetUpdateStrategy(options) {
    return {}.merge(options);
}
exports.statefulSetUpdateStrategy = statefulSetUpdateStrategy;
/**
 * Status is a return value for calls that don't return other objects.
 */
function status(options) {
    return {
        apiVersion: "v1",
        kind: "Status",
    }.merge(options);
}
exports.status = status;
/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
function statusCause(options) {
    return {}.merge(options);
}
exports.statusCause = statusCause;
/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
function statusDetails(options) {
    return {
        kind: "StatusDetails",
    }.merge(options);
}
exports.statusDetails = statusDetails;
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
function storageClass(options) {
    return {
        apiVersion: "v1",
        kind: "StorageClass",
        provisioner: (options && options.provisioner) || null,
    }.merge(options);
}
exports.storageClass = storageClass;
/**
 * StorageClassList is a collection of storage classes.
 */
function storageClassList(options) {
    return {
        apiVersion: "v1",
        kind: "StorageClassList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.storageClassList = storageClassList;
/**
 * Represents a StorageOS persistent volume resource.
 */
function storageOSPersistentVolumeSource(options) {
    return {}.merge(options);
}
exports.storageOSPersistentVolumeSource = storageOSPersistentVolumeSource;
/**
 * Represents a StorageOS persistent volume resource.
 */
function storageOSVolumeSource(options) {
    return {}.merge(options);
}
exports.storageOSVolumeSource = storageOSVolumeSource;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
function subject(options) {
    return {
        kind: "Subject",
        name: (options && options.name) || null,
    }.merge(options);
}
exports.subject = subject;
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
function subjectAccessReview(options) {
    return {
        apiVersion: "v1",
        kind: "SubjectAccessReview",
        spec: (options && options.spec) || subjectAccessReviewSpec(),
    }.merge(options);
}
exports.subjectAccessReview = subjectAccessReview;
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
function subjectAccessReviewSpec(options) {
    return {}.merge(options);
}
exports.subjectAccessReviewSpec = subjectAccessReviewSpec;
/**
 * SubjectAccessReviewStatus
 */
function subjectAccessReviewStatus(options) {
    return {
        allowed: (options && options.allowed) || false,
    }.merge(options);
}
exports.subjectAccessReviewStatus = subjectAccessReviewStatus;
/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
function subjectRulesReviewStatus(options) {
    return {
        incomplete: (options && options.incomplete) || false,
        nonResourceRules: (options && options.nonResourceRules) || [],
        resourceRules: (options && options.resourceRules) || [],
    }.merge(options);
}
exports.subjectRulesReviewStatus = subjectRulesReviewStatus;
/**
 * Sysctl defines a kernel parameter to be set
 */
function sysctl(options) {
    return {
        name: (options && options.name) || null,
        value: (options && options.value) || null,
    }.merge(options);
}
exports.sysctl = sysctl;
/**
 * TCPSocketAction describes an action based on opening a socket
 */
function tCPSocketAction(options) {
    return {
        port: (options && options.port) || null,
    }.merge(options);
}
exports.tCPSocketAction = tCPSocketAction;
/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
function taint(options) {
    return {
        effect: (options && options.effect) || null,
        key: (options && options.key) || null,
    }.merge(options);
}
exports.taint = taint;
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
function tokenReview(options) {
    return {
        apiVersion: "v1",
        kind: "TokenReview",
        spec: (options && options.spec) || tokenReviewSpec(),
    }.merge(options);
}
exports.tokenReview = tokenReview;
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
function tokenReviewSpec(options) {
    return {}.merge(options);
}
exports.tokenReviewSpec = tokenReviewSpec;
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
function tokenReviewStatus(options) {
    return {}.merge(options);
}
exports.tokenReviewStatus = tokenReviewStatus;
/**
 * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 */
function toleration(options) {
    return {}.merge(options);
}
exports.toleration = toleration;
/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
function topologySelectorLabelRequirement(options) {
    return {
        key: (options && options.key) || null,
        values: (options && options.values) || [],
    }.merge(options);
}
exports.topologySelectorLabelRequirement = topologySelectorLabelRequirement;
/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
function topologySelectorTerm(options) {
    return {}.merge(options);
}
exports.topologySelectorTerm = topologySelectorTerm;
/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
function typedLocalObjectReference(options) {
    return {
        kind: "TypedLocalObjectReference",
        name: (options && options.name) || null,
    }.merge(options);
}
exports.typedLocalObjectReference = typedLocalObjectReference;
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
function userInfo(options) {
    return {}.merge(options);
}
exports.userInfo = userInfo;
/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
function volume(options) {
    return {
        name: (options && options.name) || null,
    }.merge(options);
}
exports.volume = volume;
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
function volumeAttachment(options) {
    return {
        apiVersion: "v1",
        kind: "VolumeAttachment",
        spec: (options && options.spec) || volumeAttachmentSpec(),
    }.merge(options);
}
exports.volumeAttachment = volumeAttachment;
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
function volumeAttachmentList(options) {
    return {
        apiVersion: "v1",
        kind: "VolumeAttachmentList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.volumeAttachmentList = volumeAttachmentList;
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
function volumeAttachmentSource(options) {
    return {}.merge(options);
}
exports.volumeAttachmentSource = volumeAttachmentSource;
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
function volumeAttachmentSpec(options) {
    return {
        attacher: (options && options.attacher) || null,
        nodeName: (options && options.nodeName) || null,
        source: (options && options.source) || volumeAttachmentSource(),
    }.merge(options);
}
exports.volumeAttachmentSpec = volumeAttachmentSpec;
/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
function volumeAttachmentStatus(options) {
    return {
        attached: (options && options.attached) || false,
    }.merge(options);
}
exports.volumeAttachmentStatus = volumeAttachmentStatus;
/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
function volumeDevice(options) {
    return {
        devicePath: (options && options.devicePath) || null,
        name: (options && options.name) || null,
    }.merge(options);
}
exports.volumeDevice = volumeDevice;
/**
 * VolumeError captures an error encountered during a volume operation.
 */
function volumeError(options) {
    return {}.merge(options);
}
exports.volumeError = volumeError;
/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
function volumeMount(options) {
    return {
        mountPath: (options && options.mountPath) || null,
        name: (options && options.name) || null,
    }.merge(options);
}
exports.volumeMount = volumeMount;
/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
function volumeNodeAffinity(options) {
    return {}.merge(options);
}
exports.volumeNodeAffinity = volumeNodeAffinity;
/**
 * Projection that may be projected along with other supported volume types
 */
function volumeProjection(options) {
    return {}.merge(options);
}
exports.volumeProjection = volumeProjection;
/**
 * Represents a vSphere volume resource.
 */
function vsphereVirtualDiskVolumeSource(options) {
    return {
        volumePath: (options && options.volumePath) || null,
    }.merge(options);
}
exports.vsphereVirtualDiskVolumeSource = vsphereVirtualDiskVolumeSource;
/**
 * Event represents a single event to a watched resource.
 */
function watchEvent(options) {
    return {
        object: (options && options.object) || rawExtensionRuntime(),
        type: (options && options.type) || null,
    }.merge(options);
}
exports.watchEvent = watchEvent;
/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
function weightedPodAffinityTerm(options) {
    return {
        podAffinityTerm: (options && options.podAffinityTerm) || podAffinityTerm(),
        weight: (options && options.weight) || 0,
    }.merge(options);
}
exports.weightedPodAffinityTerm = weightedPodAffinityTerm;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
function aggregationRuleV1alpha1(options) {
    return {}.merge(options);
}
exports.aggregationRuleV1alpha1 = aggregationRuleV1alpha1;
/**
 * AuditSink represents a cluster level audit sink
 */
function auditSinkV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "AuditSink",
    }.merge(options);
}
exports.auditSinkV1alpha1 = auditSinkV1alpha1;
/**
 * AuditSinkList is a list of AuditSink items.
 */
function auditSinkListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "AuditSinkList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.auditSinkListV1alpha1 = auditSinkListV1alpha1;
/**
 * AuditSinkSpec holds the spec for the audit sink
 */
function auditSinkSpecV1alpha1(options) {
    return {
        policy: (options && options.policy) || policyV1alpha1(),
        webhook: (options && options.webhook) || webhookV1alpha1(),
    }.merge(options);
}
exports.auditSinkSpecV1alpha1 = auditSinkSpecV1alpha1;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
function clusterRoleV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "ClusterRole",
        rules: (options && options.rules) || [],
    }.merge(options);
}
exports.clusterRoleV1alpha1 = clusterRoleV1alpha1;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
function clusterRoleBindingV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "ClusterRoleBinding",
        roleRef: (options && options.roleRef) || roleRefV1alpha1(),
    }.merge(options);
}
exports.clusterRoleBindingV1alpha1 = clusterRoleBindingV1alpha1;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
function clusterRoleBindingListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "ClusterRoleBindingList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.clusterRoleBindingListV1alpha1 = clusterRoleBindingListV1alpha1;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
function clusterRoleListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "ClusterRoleList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.clusterRoleListV1alpha1 = clusterRoleListV1alpha1;
/**
 * Initializer describes the name and the failure policy of an initializer, and what resources it applies to.
 */
function initializerV1alpha1(options) {
    return {
        name: (options && options.name) || null,
    }.merge(options);
}
exports.initializerV1alpha1 = initializerV1alpha1;
/**
 * InitializerConfiguration describes the configuration of initializers.
 */
function initializerConfigurationV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "InitializerConfiguration",
    }.merge(options);
}
exports.initializerConfigurationV1alpha1 = initializerConfigurationV1alpha1;
/**
 * InitializerConfigurationList is a list of InitializerConfiguration.
 */
function initializerConfigurationListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "InitializerConfigurationList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.initializerConfigurationListV1alpha1 = initializerConfigurationListV1alpha1;
/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 */
function podPresetV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "PodPreset",
    }.merge(options);
}
exports.podPresetV1alpha1 = podPresetV1alpha1;
/**
 * PodPresetList is a list of PodPreset objects.
 */
function podPresetListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "PodPresetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.podPresetListV1alpha1 = podPresetListV1alpha1;
/**
 * PodPresetSpec is a description of a pod preset.
 */
function podPresetSpecV1alpha1(options) {
    return {}.merge(options);
}
exports.podPresetSpecV1alpha1 = podPresetSpecV1alpha1;
/**
 * Policy defines the configuration of how audit events are logged
 */
function policyV1alpha1(options) {
    return {
        level: (options && options.level) || null,
    }.merge(options);
}
exports.policyV1alpha1 = policyV1alpha1;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
function policyRuleV1alpha1(options) {
    return {
        verbs: (options && options.verbs) || [],
    }.merge(options);
}
exports.policyRuleV1alpha1 = policyRuleV1alpha1;
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
function priorityClassV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "PriorityClass",
        value: (options && options.value) || 0,
    }.merge(options);
}
exports.priorityClassV1alpha1 = priorityClassV1alpha1;
/**
 * PriorityClassList is a collection of priority classes.
 */
function priorityClassListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "PriorityClassList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.priorityClassListV1alpha1 = priorityClassListV1alpha1;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
function roleV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "Role",
        rules: (options && options.rules) || [],
    }.merge(options);
}
exports.roleV1alpha1 = roleV1alpha1;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
function roleBindingV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "RoleBinding",
        roleRef: (options && options.roleRef) || roleRefV1alpha1(),
    }.merge(options);
}
exports.roleBindingV1alpha1 = roleBindingV1alpha1;
/**
 * RoleBindingList is a collection of RoleBindings
 */
function roleBindingListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "RoleBindingList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.roleBindingListV1alpha1 = roleBindingListV1alpha1;
/**
 * RoleList is a collection of Roles
 */
function roleListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "RoleList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.roleListV1alpha1 = roleListV1alpha1;
/**
 * RoleRef contains information that points to the role being used
 */
function roleRefV1alpha1(options) {
    return {
        kind: "RoleRef",
        apiGroup: (options && options.apiGroup) || null,
        name: (options && options.name) || null,
    }.merge(options);
}
exports.roleRefV1alpha1 = roleRefV1alpha1;
/**
 * Rule is a tuple of APIGroups, APIVersion, and Resources.It is recommended to make sure that all the tuple expansions are valid.
 */
function ruleV1alpha1(options) {
    return {}.merge(options);
}
exports.ruleV1alpha1 = ruleV1alpha1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
function serviceReferenceV1alpha1(options) {
    return {
        name: (options && options.name) || null,
        namespace: (options && options.namespace) || null,
    }.merge(options);
}
exports.serviceReferenceV1alpha1 = serviceReferenceV1alpha1;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
function subjectV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "Subject",
        name: (options && options.name) || null,
    }.merge(options);
}
exports.subjectV1alpha1 = subjectV1alpha1;
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
function volumeAttachmentV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "VolumeAttachment",
        spec: (options && options.spec) || volumeAttachmentSpecV1alpha1(),
    }.merge(options);
}
exports.volumeAttachmentV1alpha1 = volumeAttachmentV1alpha1;
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
function volumeAttachmentListV1alpha1(options) {
    return {
        apiVersion: "v1alpha1",
        kind: "VolumeAttachmentList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.volumeAttachmentListV1alpha1 = volumeAttachmentListV1alpha1;
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
function volumeAttachmentSourceV1alpha1(options) {
    return {}.merge(options);
}
exports.volumeAttachmentSourceV1alpha1 = volumeAttachmentSourceV1alpha1;
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
function volumeAttachmentSpecV1alpha1(options) {
    return {
        attacher: (options && options.attacher) || null,
        nodeName: (options && options.nodeName) || null,
        source: (options && options.source) || volumeAttachmentSourceV1alpha1(),
    }.merge(options);
}
exports.volumeAttachmentSpecV1alpha1 = volumeAttachmentSpecV1alpha1;
/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
function volumeAttachmentStatusV1alpha1(options) {
    return {
        attached: (options && options.attached) || false,
    }.merge(options);
}
exports.volumeAttachmentStatusV1alpha1 = volumeAttachmentStatusV1alpha1;
/**
 * VolumeError captures an error encountered during a volume operation.
 */
function volumeErrorV1alpha1(options) {
    return {}.merge(options);
}
exports.volumeErrorV1alpha1 = volumeErrorV1alpha1;
/**
 * Webhook holds the configuration of the webhook
 */
function webhookV1alpha1(options) {
    return {
        clientConfig: (options && options.clientConfig) || webhookClientConfigV1alpha1(),
    }.merge(options);
}
exports.webhookV1alpha1 = webhookV1alpha1;
/**
 * WebhookClientConfig contains the information to make a connection with the webhook
 */
function webhookClientConfigV1alpha1(options) {
    return {}.merge(options);
}
exports.webhookClientConfigV1alpha1 = webhookClientConfigV1alpha1;
/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
function webhookThrottleConfigV1alpha1(options) {
    return {}.merge(options);
}
exports.webhookThrottleConfigV1alpha1 = webhookThrottleConfigV1alpha1;
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
function aPIServiceV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "APIService",
    }.merge(options);
}
exports.aPIServiceV1beta1 = aPIServiceV1beta1;
function aPIServiceConditionV1beta1(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.aPIServiceConditionV1beta1 = aPIServiceConditionV1beta1;
/**
 * APIServiceList is a list of APIService objects.
 */
function aPIServiceListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "APIServiceList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.aPIServiceListV1beta1 = aPIServiceListV1beta1;
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
function aPIServiceSpecV1beta1(options) {
    return {
        groupPriorityMinimum: (options && options.groupPriorityMinimum) || 0,
        service: (options && options.service) || serviceReferenceApiregistrationV1beta1(),
        versionPriority: (options && options.versionPriority) || 0,
    }.merge(options);
}
exports.aPIServiceSpecV1beta1 = aPIServiceSpecV1beta1;
/**
 * APIServiceStatus contains derived information about an API server
 */
function aPIServiceStatusV1beta1(options) {
    return {}.merge(options);
}
exports.aPIServiceStatusV1beta1 = aPIServiceStatusV1beta1;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
function aggregationRuleV1beta1(options) {
    return {}.merge(options);
}
exports.aggregationRuleV1beta1 = aggregationRuleV1beta1;
/**
 * Describes a certificate signing request
 */
function certificateSigningRequestV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "CertificateSigningRequest",
    }.merge(options);
}
exports.certificateSigningRequestV1beta1 = certificateSigningRequestV1beta1;
function certificateSigningRequestConditionV1beta1(options) {
    return {
        type: (options && options.type) || null,
    }.merge(options);
}
exports.certificateSigningRequestConditionV1beta1 = certificateSigningRequestConditionV1beta1;
function certificateSigningRequestListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "CertificateSigningRequestList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.certificateSigningRequestListV1beta1 = certificateSigningRequestListV1beta1;
/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 */
function certificateSigningRequestSpecV1beta1(options) {
    return {
        request: (options && options.request) || null,
    }.merge(options);
}
exports.certificateSigningRequestSpecV1beta1 = certificateSigningRequestSpecV1beta1;
function certificateSigningRequestStatusV1beta1(options) {
    return {}.merge(options);
}
exports.certificateSigningRequestStatusV1beta1 = certificateSigningRequestStatusV1beta1;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
function clusterRoleV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ClusterRole",
        rules: (options && options.rules) || [],
    }.merge(options);
}
exports.clusterRoleV1beta1 = clusterRoleV1beta1;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
function clusterRoleBindingV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ClusterRoleBinding",
        roleRef: (options && options.roleRef) || roleRefV1beta1(),
    }.merge(options);
}
exports.clusterRoleBindingV1beta1 = clusterRoleBindingV1beta1;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
function clusterRoleBindingListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ClusterRoleBindingList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.clusterRoleBindingListV1beta1 = clusterRoleBindingListV1beta1;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
function clusterRoleListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ClusterRoleList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.clusterRoleListV1beta1 = clusterRoleListV1beta1;
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
function controllerRevisionV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ControllerRevision",
        revision: (options && options.revision) || 0,
    }.merge(options);
}
exports.controllerRevisionV1beta1 = controllerRevisionV1beta1;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
function controllerRevisionListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ControllerRevisionList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.controllerRevisionListV1beta1 = controllerRevisionListV1beta1;
/**
 * CronJob represents the configuration of a single cron job.
 */
function cronJobV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "CronJob",
    }.merge(options);
}
exports.cronJobV1beta1 = cronJobV1beta1;
/**
 * CronJobList is a collection of cron jobs.
 */
function cronJobListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "CronJobList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.cronJobListV1beta1 = cronJobListV1beta1;
/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
function cronJobSpecV1beta1(options) {
    return {
        jobTemplate: (options && options.jobTemplate) || jobTemplateSpecV1beta1(),
        schedule: (options && options.schedule) || null,
    }.merge(options);
}
exports.cronJobSpecV1beta1 = cronJobSpecV1beta1;
/**
 * CronJobStatus represents the current state of a cron job.
 */
function cronJobStatusV1beta1(options) {
    return {}.merge(options);
}
exports.cronJobStatusV1beta1 = cronJobStatusV1beta1;
/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
function customResourceColumnDefinitionV1beta1(options) {
    return {
        JSONPath: (options && options.JSONPath) || null,
        name: (options && options.name) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.customResourceColumnDefinitionV1beta1 = customResourceColumnDefinitionV1beta1;
/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
function customResourceConversionV1beta1(options) {
    return {
        strategy: (options && options.strategy) || null,
    }.merge(options);
}
exports.customResourceConversionV1beta1 = customResourceConversionV1beta1;
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
function customResourceDefinitionV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "CustomResourceDefinition",
        spec: (options && options.spec) || customResourceDefinitionSpecV1beta1(),
    }.merge(options);
}
exports.customResourceDefinitionV1beta1 = customResourceDefinitionV1beta1;
/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
function customResourceDefinitionConditionV1beta1(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.customResourceDefinitionConditionV1beta1 = customResourceDefinitionConditionV1beta1;
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
function customResourceDefinitionListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "CustomResourceDefinitionList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.customResourceDefinitionListV1beta1 = customResourceDefinitionListV1beta1;
/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
function customResourceDefinitionNamesV1beta1(options) {
    return {
        kind: "CustomResourceDefinitionNames",
        plural: (options && options.plural) || null,
    }.merge(options);
}
exports.customResourceDefinitionNamesV1beta1 = customResourceDefinitionNamesV1beta1;
/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
function customResourceDefinitionSpecV1beta1(options) {
    return {
        group: (options && options.group) || null,
        names: (options && options.names) || customResourceDefinitionNamesV1beta1(),
        scope: (options && options.scope) || null,
    }.merge(options);
}
exports.customResourceDefinitionSpecV1beta1 = customResourceDefinitionSpecV1beta1;
/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
function customResourceDefinitionStatusV1beta1(options) {
    return {
        acceptedNames: (options && options.acceptedNames) || customResourceDefinitionNamesV1beta1(),
        conditions: (options && options.conditions) || [],
        storedVersions: (options && options.storedVersions) || [],
    }.merge(options);
}
exports.customResourceDefinitionStatusV1beta1 = customResourceDefinitionStatusV1beta1;
/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 */
function customResourceDefinitionVersionV1beta1(options) {
    return {
        name: (options && options.name) || null,
        served: (options && options.served) || false,
        storage: (options && options.storage) || false,
    }.merge(options);
}
exports.customResourceDefinitionVersionV1beta1 = customResourceDefinitionVersionV1beta1;
/**
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 */
function customResourceSubresourceScaleV1beta1(options) {
    return {
        specReplicasPath: (options && options.specReplicasPath) || null,
        statusReplicasPath: (options && options.statusReplicasPath) || null,
    }.merge(options);
}
exports.customResourceSubresourceScaleV1beta1 = customResourceSubresourceScaleV1beta1;
/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
function customResourceSubresourcesV1beta1(options) {
    return {}.merge(options);
}
exports.customResourceSubresourcesV1beta1 = customResourceSubresourcesV1beta1;
/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
function customResourceValidationV1beta1(options) {
    return {}.merge(options);
}
exports.customResourceValidationV1beta1 = customResourceValidationV1beta1;
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
function daemonSetV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "DaemonSet",
    }.merge(options);
}
exports.daemonSetV1beta1 = daemonSetV1beta1;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
function daemonSetConditionV1beta1(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.daemonSetConditionV1beta1 = daemonSetConditionV1beta1;
/**
 * DaemonSetList is a collection of daemon sets.
 */
function daemonSetListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "DaemonSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.daemonSetListV1beta1 = daemonSetListV1beta1;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
function daemonSetSpecV1beta1(options) {
    return {
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.daemonSetSpecV1beta1 = daemonSetSpecV1beta1;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
function daemonSetStatusV1beta1(options) {
    return {
        currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
        desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
        numberMisscheduled: (options && options.numberMisscheduled) || 0,
        numberReady: (options && options.numberReady) || 0,
    }.merge(options);
}
exports.daemonSetStatusV1beta1 = daemonSetStatusV1beta1;
function daemonSetUpdateStrategyV1beta1(options) {
    return {}.merge(options);
}
exports.daemonSetUpdateStrategyV1beta1 = daemonSetUpdateStrategyV1beta1;
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 */
function eventV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "Event",
        eventTime: (options && options.eventTime) || null,
    }.merge(options);
}
exports.eventV1beta1 = eventV1beta1;
/**
 * EventList is a list of Event objects.
 */
function eventListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "EventList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.eventListV1beta1 = eventListV1beta1;
/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
function eventSeriesV1beta1(options) {
    return {
        count: (options && options.count) || 0,
        lastObservedTime: (options && options.lastObservedTime) || null,
        state: (options && options.state) || null,
    }.merge(options);
}
exports.eventSeriesV1beta1 = eventSeriesV1beta1;
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
function evictionV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "Eviction",
    }.merge(options);
}
exports.evictionV1beta1 = evictionV1beta1;
/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
function externalDocumentationV1beta1(options) {
    return {}.merge(options);
}
exports.externalDocumentationV1beta1 = externalDocumentationV1beta1;
/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 */
function hTTPIngressPathV1beta1(options) {
    return {
        backend: (options && options.backend) || ingressBackendV1beta1(),
    }.merge(options);
}
exports.hTTPIngressPathV1beta1 = hTTPIngressPathV1beta1;
/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
function hTTPIngressRuleValueV1beta1(options) {
    return {
        paths: (options && options.paths) || [],
    }.merge(options);
}
exports.hTTPIngressRuleValueV1beta1 = hTTPIngressRuleValueV1beta1;
/**
 * DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
function iPBlockV1beta1(options) {
    return {
        cidr: (options && options.cidr) || null,
    }.merge(options);
}
exports.iPBlockV1beta1 = iPBlockV1beta1;
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
function ingressV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "Ingress",
    }.merge(options);
}
exports.ingressV1beta1 = ingressV1beta1;
/**
 * IngressBackend describes all endpoints for a given service and port.
 */
function ingressBackendV1beta1(options) {
    return {
        serviceName: (options && options.serviceName) || null,
        servicePort: (options && options.servicePort) || null,
    }.merge(options);
}
exports.ingressBackendV1beta1 = ingressBackendV1beta1;
/**
 * IngressList is a collection of Ingress.
 */
function ingressListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "IngressList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.ingressListV1beta1 = ingressListV1beta1;
/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
function ingressRuleV1beta1(options) {
    return {}.merge(options);
}
exports.ingressRuleV1beta1 = ingressRuleV1beta1;
/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
function ingressSpecV1beta1(options) {
    return {}.merge(options);
}
exports.ingressSpecV1beta1 = ingressSpecV1beta1;
/**
 * IngressStatus describe the current state of the Ingress.
 */
function ingressStatusV1beta1(options) {
    return {}.merge(options);
}
exports.ingressStatusV1beta1 = ingressStatusV1beta1;
/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
function ingressTLSV1beta1(options) {
    return {}.merge(options);
}
exports.ingressTLSV1beta1 = ingressTLSV1beta1;
/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 */
function jSONSchemaPropsV1beta1(options) {
    return {}.merge(options);
}
exports.jSONSchemaPropsV1beta1 = jSONSchemaPropsV1beta1;
/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
function jobTemplateSpecV1beta1(options) {
    return {}.merge(options);
}
exports.jobTemplateSpecV1beta1 = jobTemplateSpecV1beta1;
/**
 * Lease defines a lease concept.
 */
function leaseV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "Lease",
    }.merge(options);
}
exports.leaseV1beta1 = leaseV1beta1;
/**
 * LeaseList is a list of Lease objects.
 */
function leaseListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "LeaseList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.leaseListV1beta1 = leaseListV1beta1;
/**
 * LeaseSpec is a specification of a Lease.
 */
function leaseSpecV1beta1(options) {
    return {}.merge(options);
}
exports.leaseSpecV1beta1 = leaseSpecV1beta1;
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
function localSubjectAccessReviewV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "LocalSubjectAccessReview",
        spec: (options && options.spec) || subjectAccessReviewSpecV1beta1(),
    }.merge(options);
}
exports.localSubjectAccessReviewV1beta1 = localSubjectAccessReviewV1beta1;
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
function mutatingWebhookConfigurationV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "MutatingWebhookConfiguration",
    }.merge(options);
}
exports.mutatingWebhookConfigurationV1beta1 = mutatingWebhookConfigurationV1beta1;
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
function mutatingWebhookConfigurationListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "MutatingWebhookConfigurationList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.mutatingWebhookConfigurationListV1beta1 = mutatingWebhookConfigurationListV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
function networkPolicyV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "NetworkPolicy",
    }.merge(options);
}
exports.networkPolicyV1beta1 = networkPolicyV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
function networkPolicyEgressRuleV1beta1(options) {
    return {}.merge(options);
}
exports.networkPolicyEgressRuleV1beta1 = networkPolicyEgressRuleV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 */
function networkPolicyIngressRuleV1beta1(options) {
    return {}.merge(options);
}
exports.networkPolicyIngressRuleV1beta1 = networkPolicyIngressRuleV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 */
function networkPolicyListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "NetworkPolicyList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.networkPolicyListV1beta1 = networkPolicyListV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 */
function networkPolicyPeerV1beta1(options) {
    return {}.merge(options);
}
exports.networkPolicyPeerV1beta1 = networkPolicyPeerV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 */
function networkPolicyPortV1beta1(options) {
    return {}.merge(options);
}
exports.networkPolicyPortV1beta1 = networkPolicyPortV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
 */
function networkPolicySpecV1beta1(options) {
    return {
        podSelector: (options && options.podSelector) || labelSelector(),
    }.merge(options);
}
exports.networkPolicySpecV1beta1 = networkPolicySpecV1beta1;
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
function nonResourceAttributesV1beta1(options) {
    return {}.merge(options);
}
exports.nonResourceAttributesV1beta1 = nonResourceAttributesV1beta1;
/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
function nonResourceRuleV1beta1(options) {
    return {
        verbs: (options && options.verbs) || [],
    }.merge(options);
}
exports.nonResourceRuleV1beta1 = nonResourceRuleV1beta1;
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
function podDisruptionBudgetV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "PodDisruptionBudget",
    }.merge(options);
}
exports.podDisruptionBudgetV1beta1 = podDisruptionBudgetV1beta1;
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
function podDisruptionBudgetListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "PodDisruptionBudgetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.podDisruptionBudgetListV1beta1 = podDisruptionBudgetListV1beta1;
/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
function podDisruptionBudgetSpecV1beta1(options) {
    return {}.merge(options);
}
exports.podDisruptionBudgetSpecV1beta1 = podDisruptionBudgetSpecV1beta1;
/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
function podDisruptionBudgetStatusV1beta1(options) {
    return {
        currentHealthy: (options && options.currentHealthy) || 0,
        desiredHealthy: (options && options.desiredHealthy) || 0,
        disruptionsAllowed: (options && options.disruptionsAllowed) || 0,
        expectedPods: (options && options.expectedPods) || 0,
    }.merge(options);
}
exports.podDisruptionBudgetStatusV1beta1 = podDisruptionBudgetStatusV1beta1;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
function policyRuleV1beta1(options) {
    return {
        verbs: (options && options.verbs) || [],
    }.merge(options);
}
exports.policyRuleV1beta1 = policyRuleV1beta1;
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
function priorityClassV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "PriorityClass",
        value: (options && options.value) || 0,
    }.merge(options);
}
exports.priorityClassV1beta1 = priorityClassV1beta1;
/**
 * PriorityClassList is a collection of priority classes.
 */
function priorityClassListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "PriorityClassList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.priorityClassListV1beta1 = priorityClassListV1beta1;
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
function replicaSetV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ReplicaSet",
    }.merge(options);
}
exports.replicaSetV1beta1 = replicaSetV1beta1;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
function replicaSetConditionV1beta1(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.replicaSetConditionV1beta1 = replicaSetConditionV1beta1;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
function replicaSetListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ReplicaSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.replicaSetListV1beta1 = replicaSetListV1beta1;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
function replicaSetSpecV1beta1(options) {
    return {}.merge(options);
}
exports.replicaSetSpecV1beta1 = replicaSetSpecV1beta1;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
function replicaSetStatusV1beta1(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.replicaSetStatusV1beta1 = replicaSetStatusV1beta1;
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
function resourceAttributesV1beta1(options) {
    return {}.merge(options);
}
exports.resourceAttributesV1beta1 = resourceAttributesV1beta1;
/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
function resourceRuleV1beta1(options) {
    return {
        verbs: (options && options.verbs) || [],
    }.merge(options);
}
exports.resourceRuleV1beta1 = resourceRuleV1beta1;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
function roleV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "Role",
        rules: (options && options.rules) || [],
    }.merge(options);
}
exports.roleV1beta1 = roleV1beta1;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
function roleBindingV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "RoleBinding",
        roleRef: (options && options.roleRef) || roleRefV1beta1(),
    }.merge(options);
}
exports.roleBindingV1beta1 = roleBindingV1beta1;
/**
 * RoleBindingList is a collection of RoleBindings
 */
function roleBindingListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "RoleBindingList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.roleBindingListV1beta1 = roleBindingListV1beta1;
/**
 * RoleList is a collection of Roles
 */
function roleListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "RoleList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.roleListV1beta1 = roleListV1beta1;
/**
 * RoleRef contains information that points to the role being used
 */
function roleRefV1beta1(options) {
    return {
        kind: "RoleRef",
        apiGroup: (options && options.apiGroup) || null,
        name: (options && options.name) || null,
    }.merge(options);
}
exports.roleRefV1beta1 = roleRefV1beta1;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
function rollingUpdateDaemonSetV1beta1(options) {
    return {}.merge(options);
}
exports.rollingUpdateDaemonSetV1beta1 = rollingUpdateDaemonSetV1beta1;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
function rollingUpdateStatefulSetStrategyV1beta1(options) {
    return {}.merge(options);
}
exports.rollingUpdateStatefulSetStrategyV1beta1 = rollingUpdateStatefulSetStrategyV1beta1;
/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
function ruleWithOperationsV1beta1(options) {
    return {}.merge(options);
}
exports.ruleWithOperationsV1beta1 = ruleWithOperationsV1beta1;
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
function selfSubjectAccessReviewV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "SelfSubjectAccessReview",
        spec: (options && options.spec) || selfSubjectAccessReviewSpecV1beta1(),
    }.merge(options);
}
exports.selfSubjectAccessReviewV1beta1 = selfSubjectAccessReviewV1beta1;
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
function selfSubjectAccessReviewSpecV1beta1(options) {
    return {}.merge(options);
}
exports.selfSubjectAccessReviewSpecV1beta1 = selfSubjectAccessReviewSpecV1beta1;
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
function selfSubjectRulesReviewV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "SelfSubjectRulesReview",
        spec: (options && options.spec) || selfSubjectRulesReviewSpecV1beta1(),
    }.merge(options);
}
exports.selfSubjectRulesReviewV1beta1 = selfSubjectRulesReviewV1beta1;
function selfSubjectRulesReviewSpecV1beta1(options) {
    return {}.merge(options);
}
exports.selfSubjectRulesReviewSpecV1beta1 = selfSubjectRulesReviewSpecV1beta1;
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
function statefulSetV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "StatefulSet",
    }.merge(options);
}
exports.statefulSetV1beta1 = statefulSetV1beta1;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
function statefulSetConditionV1beta1(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.statefulSetConditionV1beta1 = statefulSetConditionV1beta1;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
function statefulSetListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "StatefulSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.statefulSetListV1beta1 = statefulSetListV1beta1;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
function statefulSetSpecV1beta1(options) {
    return {
        serviceName: (options && options.serviceName) || null,
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.statefulSetSpecV1beta1 = statefulSetSpecV1beta1;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
function statefulSetStatusV1beta1(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.statefulSetStatusV1beta1 = statefulSetStatusV1beta1;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
function statefulSetUpdateStrategyV1beta1(options) {
    return {}.merge(options);
}
exports.statefulSetUpdateStrategyV1beta1 = statefulSetUpdateStrategyV1beta1;
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
function storageClassV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "StorageClass",
        provisioner: (options && options.provisioner) || null,
    }.merge(options);
}
exports.storageClassV1beta1 = storageClassV1beta1;
/**
 * StorageClassList is a collection of storage classes.
 */
function storageClassListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "StorageClassList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.storageClassListV1beta1 = storageClassListV1beta1;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
function subjectV1beta1(options) {
    return {
        kind: "Subject",
        name: (options && options.name) || null,
    }.merge(options);
}
exports.subjectV1beta1 = subjectV1beta1;
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
function subjectAccessReviewV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "SubjectAccessReview",
        spec: (options && options.spec) || subjectAccessReviewSpecV1beta1(),
    }.merge(options);
}
exports.subjectAccessReviewV1beta1 = subjectAccessReviewV1beta1;
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
function subjectAccessReviewSpecV1beta1(options) {
    return {}.merge(options);
}
exports.subjectAccessReviewSpecV1beta1 = subjectAccessReviewSpecV1beta1;
/**
 * SubjectAccessReviewStatus
 */
function subjectAccessReviewStatusV1beta1(options) {
    return {
        allowed: (options && options.allowed) || false,
    }.merge(options);
}
exports.subjectAccessReviewStatusV1beta1 = subjectAccessReviewStatusV1beta1;
/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
function subjectRulesReviewStatusV1beta1(options) {
    return {
        incomplete: (options && options.incomplete) || false,
        nonResourceRules: (options && options.nonResourceRules) || [],
        resourceRules: (options && options.resourceRules) || [],
    }.merge(options);
}
exports.subjectRulesReviewStatusV1beta1 = subjectRulesReviewStatusV1beta1;
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
function tokenReviewV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "TokenReview",
        spec: (options && options.spec) || tokenReviewSpecV1beta1(),
    }.merge(options);
}
exports.tokenReviewV1beta1 = tokenReviewV1beta1;
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
function tokenReviewSpecV1beta1(options) {
    return {}.merge(options);
}
exports.tokenReviewSpecV1beta1 = tokenReviewSpecV1beta1;
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
function tokenReviewStatusV1beta1(options) {
    return {}.merge(options);
}
exports.tokenReviewStatusV1beta1 = tokenReviewStatusV1beta1;
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
function userInfoV1beta1(options) {
    return {}.merge(options);
}
exports.userInfoV1beta1 = userInfoV1beta1;
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
function validatingWebhookConfigurationV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ValidatingWebhookConfiguration",
    }.merge(options);
}
exports.validatingWebhookConfigurationV1beta1 = validatingWebhookConfigurationV1beta1;
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
function validatingWebhookConfigurationListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "ValidatingWebhookConfigurationList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.validatingWebhookConfigurationListV1beta1 = validatingWebhookConfigurationListV1beta1;
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
function volumeAttachmentV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "VolumeAttachment",
        spec: (options && options.spec) || volumeAttachmentSpecV1beta1(),
    }.merge(options);
}
exports.volumeAttachmentV1beta1 = volumeAttachmentV1beta1;
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
function volumeAttachmentListV1beta1(options) {
    return {
        apiVersion: "v1beta1",
        kind: "VolumeAttachmentList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.volumeAttachmentListV1beta1 = volumeAttachmentListV1beta1;
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
function volumeAttachmentSourceV1beta1(options) {
    return {}.merge(options);
}
exports.volumeAttachmentSourceV1beta1 = volumeAttachmentSourceV1beta1;
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
function volumeAttachmentSpecV1beta1(options) {
    return {
        attacher: (options && options.attacher) || null,
        nodeName: (options && options.nodeName) || null,
        source: (options && options.source) || volumeAttachmentSourceV1beta1(),
    }.merge(options);
}
exports.volumeAttachmentSpecV1beta1 = volumeAttachmentSpecV1beta1;
/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
function volumeAttachmentStatusV1beta1(options) {
    return {
        attached: (options && options.attached) || false,
    }.merge(options);
}
exports.volumeAttachmentStatusV1beta1 = volumeAttachmentStatusV1beta1;
/**
 * VolumeError captures an error encountered during a volume operation.
 */
function volumeErrorV1beta1(options) {
    return {}.merge(options);
}
exports.volumeErrorV1beta1 = volumeErrorV1beta1;
/**
 * Webhook describes an admission webhook and the resources and operations it applies to.
 */
function webhookV1beta1(options) {
    return {
        clientConfig: (options && options.clientConfig) || webhookClientConfigAdmissionregistrationV1beta1(),
        name: (options && options.name) || null,
    }.merge(options);
}
exports.webhookV1beta1 = webhookV1beta1;
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
function controllerRevisionV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "ControllerRevision",
        revision: (options && options.revision) || 0,
    }.merge(options);
}
exports.controllerRevisionV1beta2 = controllerRevisionV1beta2;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
function controllerRevisionListV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "ControllerRevisionList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.controllerRevisionListV1beta2 = controllerRevisionListV1beta2;
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
function daemonSetV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "DaemonSet",
    }.merge(options);
}
exports.daemonSetV1beta2 = daemonSetV1beta2;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
function daemonSetConditionV1beta2(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.daemonSetConditionV1beta2 = daemonSetConditionV1beta2;
/**
 * DaemonSetList is a collection of daemon sets.
 */
function daemonSetListV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "DaemonSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.daemonSetListV1beta2 = daemonSetListV1beta2;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
function daemonSetSpecV1beta2(options) {
    return {
        selector: (options && options.selector) || labelSelector(),
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.daemonSetSpecV1beta2 = daemonSetSpecV1beta2;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
function daemonSetStatusV1beta2(options) {
    return {
        currentNumberScheduled: (options && options.currentNumberScheduled) || 0,
        desiredNumberScheduled: (options && options.desiredNumberScheduled) || 0,
        numberMisscheduled: (options && options.numberMisscheduled) || 0,
        numberReady: (options && options.numberReady) || 0,
    }.merge(options);
}
exports.daemonSetStatusV1beta2 = daemonSetStatusV1beta2;
/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
function daemonSetUpdateStrategyV1beta2(options) {
    return {}.merge(options);
}
exports.daemonSetUpdateStrategyV1beta2 = daemonSetUpdateStrategyV1beta2;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
function deploymentV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "Deployment",
    }.merge(options);
}
exports.deploymentV1beta2 = deploymentV1beta2;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
function deploymentConditionV1beta2(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.deploymentConditionV1beta2 = deploymentConditionV1beta2;
/**
 * DeploymentList is a list of Deployments.
 */
function deploymentListV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "DeploymentList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.deploymentListV1beta2 = deploymentListV1beta2;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
function deploymentSpecV1beta2(options) {
    return {
        selector: (options && options.selector) || labelSelector(),
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.deploymentSpecV1beta2 = deploymentSpecV1beta2;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
function deploymentStatusV1beta2(options) {
    return {}.merge(options);
}
exports.deploymentStatusV1beta2 = deploymentStatusV1beta2;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
function deploymentStrategyV1beta2(options) {
    return {}.merge(options);
}
exports.deploymentStrategyV1beta2 = deploymentStrategyV1beta2;
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
function replicaSetV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "ReplicaSet",
    }.merge(options);
}
exports.replicaSetV1beta2 = replicaSetV1beta2;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
function replicaSetConditionV1beta2(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.replicaSetConditionV1beta2 = replicaSetConditionV1beta2;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
function replicaSetListV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "ReplicaSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.replicaSetListV1beta2 = replicaSetListV1beta2;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
function replicaSetSpecV1beta2(options) {
    return {
        selector: (options && options.selector) || labelSelector(),
    }.merge(options);
}
exports.replicaSetSpecV1beta2 = replicaSetSpecV1beta2;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
function replicaSetStatusV1beta2(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.replicaSetStatusV1beta2 = replicaSetStatusV1beta2;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
function rollingUpdateDaemonSetV1beta2(options) {
    return {}.merge(options);
}
exports.rollingUpdateDaemonSetV1beta2 = rollingUpdateDaemonSetV1beta2;
/**
 * Spec to control the desired behavior of rolling update.
 */
function rollingUpdateDeploymentV1beta2(options) {
    return {}.merge(options);
}
exports.rollingUpdateDeploymentV1beta2 = rollingUpdateDeploymentV1beta2;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
function rollingUpdateStatefulSetStrategyV1beta2(options) {
    return {}.merge(options);
}
exports.rollingUpdateStatefulSetStrategyV1beta2 = rollingUpdateStatefulSetStrategyV1beta2;
/**
 * Scale represents a scaling request for a resource.
 */
function scaleV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "Scale",
    }.merge(options);
}
exports.scaleV1beta2 = scaleV1beta2;
/**
 * ScaleSpec describes the attributes of a scale subresource
 */
function scaleSpecV1beta2(options) {
    return {}.merge(options);
}
exports.scaleSpecV1beta2 = scaleSpecV1beta2;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
function scaleStatusV1beta2(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.scaleStatusV1beta2 = scaleStatusV1beta2;
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
function statefulSetV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "StatefulSet",
    }.merge(options);
}
exports.statefulSetV1beta2 = statefulSetV1beta2;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
function statefulSetConditionV1beta2(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.statefulSetConditionV1beta2 = statefulSetConditionV1beta2;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
function statefulSetListV1beta2(options) {
    return {
        apiVersion: "v1beta2",
        kind: "StatefulSetList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.statefulSetListV1beta2 = statefulSetListV1beta2;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
function statefulSetSpecV1beta2(options) {
    return {
        selector: (options && options.selector) || labelSelector(),
        serviceName: (options && options.serviceName) || null,
        template: (options && options.template) || podTemplateSpec(),
    }.merge(options);
}
exports.statefulSetSpecV1beta2 = statefulSetSpecV1beta2;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
function statefulSetStatusV1beta2(options) {
    return {
        replicas: (options && options.replicas) || 0,
    }.merge(options);
}
exports.statefulSetStatusV1beta2 = statefulSetStatusV1beta2;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
function statefulSetUpdateStrategyV1beta2(options) {
    return {}.merge(options);
}
exports.statefulSetUpdateStrategyV1beta2 = statefulSetUpdateStrategyV1beta2;
/**
 * CronJob represents the configuration of a single cron job.
 */
function cronJobV2alpha1(options) {
    return {
        apiVersion: "v2alpha1",
        kind: "CronJob",
    }.merge(options);
}
exports.cronJobV2alpha1 = cronJobV2alpha1;
/**
 * CronJobList is a collection of cron jobs.
 */
function cronJobListV2alpha1(options) {
    return {
        apiVersion: "v2alpha1",
        kind: "CronJobList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.cronJobListV2alpha1 = cronJobListV2alpha1;
/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
function cronJobSpecV2alpha1(options) {
    return {
        jobTemplate: (options && options.jobTemplate) || jobTemplateSpecV2alpha1(),
        schedule: (options && options.schedule) || null,
    }.merge(options);
}
exports.cronJobSpecV2alpha1 = cronJobSpecV2alpha1;
/**
 * CronJobStatus represents the current state of a cron job.
 */
function cronJobStatusV2alpha1(options) {
    return {}.merge(options);
}
exports.cronJobStatusV2alpha1 = cronJobStatusV2alpha1;
/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
function jobTemplateSpecV2alpha1(options) {
    return {}.merge(options);
}
exports.jobTemplateSpecV2alpha1 = jobTemplateSpecV2alpha1;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
function crossVersionObjectReferenceV2beta1(options) {
    return {
        apiVersion: "v2beta1",
        kind: "CrossVersionObjectReference",
        name: (options && options.name) || null,
    }.merge(options);
}
exports.crossVersionObjectReferenceV2beta1 = crossVersionObjectReferenceV2beta1;
/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
function externalMetricSourceV2beta1(options) {
    return {
        metricName: (options && options.metricName) || null,
    }.merge(options);
}
exports.externalMetricSourceV2beta1 = externalMetricSourceV2beta1;
/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
function externalMetricStatusV2beta1(options) {
    return {
        currentValue: (options && options.currentValue) || null,
        metricName: (options && options.metricName) || null,
    }.merge(options);
}
exports.externalMetricStatusV2beta1 = externalMetricStatusV2beta1;
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
function horizontalPodAutoscalerV2beta1(options) {
    return {
        apiVersion: "v2beta1",
        kind: "HorizontalPodAutoscaler",
    }.merge(options);
}
exports.horizontalPodAutoscalerV2beta1 = horizontalPodAutoscalerV2beta1;
/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
function horizontalPodAutoscalerConditionV2beta1(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.horizontalPodAutoscalerConditionV2beta1 = horizontalPodAutoscalerConditionV2beta1;
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
function horizontalPodAutoscalerListV2beta1(options) {
    return {
        apiVersion: "v2beta1",
        kind: "HorizontalPodAutoscalerList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.horizontalPodAutoscalerListV2beta1 = horizontalPodAutoscalerListV2beta1;
/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
function horizontalPodAutoscalerSpecV2beta1(options) {
    return {
        maxReplicas: (options && options.maxReplicas) || 0,
        scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReferenceV2beta1(),
    }.merge(options);
}
exports.horizontalPodAutoscalerSpecV2beta1 = horizontalPodAutoscalerSpecV2beta1;
/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
function horizontalPodAutoscalerStatusV2beta1(options) {
    return {
        conditions: (options && options.conditions) || [],
        currentReplicas: (options && options.currentReplicas) || 0,
        desiredReplicas: (options && options.desiredReplicas) || 0,
    }.merge(options);
}
exports.horizontalPodAutoscalerStatusV2beta1 = horizontalPodAutoscalerStatusV2beta1;
/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
function metricSpecV2beta1(options) {
    return {
        type: (options && options.type) || null,
    }.merge(options);
}
exports.metricSpecV2beta1 = metricSpecV2beta1;
/**
 * MetricStatus describes the last-read state of a single metric.
 */
function metricStatusV2beta1(options) {
    return {
        type: (options && options.type) || null,
    }.merge(options);
}
exports.metricStatusV2beta1 = metricStatusV2beta1;
/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
function objectMetricSourceV2beta1(options) {
    return {
        metricName: (options && options.metricName) || null,
        target: (options && options.target) || crossVersionObjectReferenceV2beta1(),
        targetValue: (options && options.targetValue) || null,
    }.merge(options);
}
exports.objectMetricSourceV2beta1 = objectMetricSourceV2beta1;
/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
function objectMetricStatusV2beta1(options) {
    return {
        currentValue: (options && options.currentValue) || null,
        metricName: (options && options.metricName) || null,
        target: (options && options.target) || crossVersionObjectReferenceV2beta1(),
    }.merge(options);
}
exports.objectMetricStatusV2beta1 = objectMetricStatusV2beta1;
/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
function podsMetricSourceV2beta1(options) {
    return {
        metricName: (options && options.metricName) || null,
        targetAverageValue: (options && options.targetAverageValue) || null,
    }.merge(options);
}
exports.podsMetricSourceV2beta1 = podsMetricSourceV2beta1;
/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
function podsMetricStatusV2beta1(options) {
    return {
        currentAverageValue: (options && options.currentAverageValue) || null,
        metricName: (options && options.metricName) || null,
    }.merge(options);
}
exports.podsMetricStatusV2beta1 = podsMetricStatusV2beta1;
/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
function resourceMetricSourceV2beta1(options) {
    return {
        name: (options && options.name) || null,
    }.merge(options);
}
exports.resourceMetricSourceV2beta1 = resourceMetricSourceV2beta1;
/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
function resourceMetricStatusV2beta1(options) {
    return {
        currentAverageValue: (options && options.currentAverageValue) || null,
        name: (options && options.name) || null,
    }.merge(options);
}
exports.resourceMetricStatusV2beta1 = resourceMetricStatusV2beta1;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
function crossVersionObjectReferenceV2beta2(options) {
    return {
        apiVersion: "v2beta2",
        kind: "CrossVersionObjectReference",
        name: (options && options.name) || null,
    }.merge(options);
}
exports.crossVersionObjectReferenceV2beta2 = crossVersionObjectReferenceV2beta2;
/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
function externalMetricSourceV2beta2(options) {
    return {
        metric: (options && options.metric) || metricIdentifierV2beta2(),
        target: (options && options.target) || metricTargetV2beta2(),
    }.merge(options);
}
exports.externalMetricSourceV2beta2 = externalMetricSourceV2beta2;
/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
function externalMetricStatusV2beta2(options) {
    return {
        current: (options && options.current) || metricValueStatusV2beta2(),
        metric: (options && options.metric) || metricIdentifierV2beta2(),
    }.merge(options);
}
exports.externalMetricStatusV2beta2 = externalMetricStatusV2beta2;
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
function horizontalPodAutoscalerV2beta2(options) {
    return {
        apiVersion: "v2beta2",
        kind: "HorizontalPodAutoscaler",
    }.merge(options);
}
exports.horizontalPodAutoscalerV2beta2 = horizontalPodAutoscalerV2beta2;
/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
function horizontalPodAutoscalerConditionV2beta2(options) {
    return {
        status: (options && options.status) || null,
        type: (options && options.type) || null,
    }.merge(options);
}
exports.horizontalPodAutoscalerConditionV2beta2 = horizontalPodAutoscalerConditionV2beta2;
/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
function horizontalPodAutoscalerListV2beta2(options) {
    return {
        apiVersion: "v2beta2",
        kind: "HorizontalPodAutoscalerList",
        items: (options && options.items) || [],
    }.merge(options);
}
exports.horizontalPodAutoscalerListV2beta2 = horizontalPodAutoscalerListV2beta2;
/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
function horizontalPodAutoscalerSpecV2beta2(options) {
    return {
        maxReplicas: (options && options.maxReplicas) || 0,
        scaleTargetRef: (options && options.scaleTargetRef) || crossVersionObjectReferenceV2beta2(),
    }.merge(options);
}
exports.horizontalPodAutoscalerSpecV2beta2 = horizontalPodAutoscalerSpecV2beta2;
/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
function horizontalPodAutoscalerStatusV2beta2(options) {
    return {
        conditions: (options && options.conditions) || [],
        currentReplicas: (options && options.currentReplicas) || 0,
        desiredReplicas: (options && options.desiredReplicas) || 0,
    }.merge(options);
}
exports.horizontalPodAutoscalerStatusV2beta2 = horizontalPodAutoscalerStatusV2beta2;
/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
function metricIdentifierV2beta2(options) {
    return {
        name: (options && options.name) || null,
    }.merge(options);
}
exports.metricIdentifierV2beta2 = metricIdentifierV2beta2;
/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
function metricSpecV2beta2(options) {
    return {
        type: (options && options.type) || null,
    }.merge(options);
}
exports.metricSpecV2beta2 = metricSpecV2beta2;
/**
 * MetricStatus describes the last-read state of a single metric.
 */
function metricStatusV2beta2(options) {
    return {
        type: (options && options.type) || null,
    }.merge(options);
}
exports.metricStatusV2beta2 = metricStatusV2beta2;
/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
function metricTargetV2beta2(options) {
    return {
        type: (options && options.type) || null,
    }.merge(options);
}
exports.metricTargetV2beta2 = metricTargetV2beta2;
/**
 * MetricValueStatus holds the current value for a metric
 */
function metricValueStatusV2beta2(options) {
    return {}.merge(options);
}
exports.metricValueStatusV2beta2 = metricValueStatusV2beta2;
/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
function objectMetricSourceV2beta2(options) {
    return {
        describedObject: (options && options.describedObject) || crossVersionObjectReferenceV2beta2(),
        metric: (options && options.metric) || metricIdentifierV2beta2(),
        target: (options && options.target) || metricTargetV2beta2(),
    }.merge(options);
}
exports.objectMetricSourceV2beta2 = objectMetricSourceV2beta2;
/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
function objectMetricStatusV2beta2(options) {
    return {
        current: (options && options.current) || metricValueStatusV2beta2(),
        describedObject: (options && options.describedObject) || crossVersionObjectReferenceV2beta2(),
        metric: (options && options.metric) || metricIdentifierV2beta2(),
    }.merge(options);
}
exports.objectMetricStatusV2beta2 = objectMetricStatusV2beta2;
/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
function podsMetricSourceV2beta2(options) {
    return {
        metric: (options && options.metric) || metricIdentifierV2beta2(),
        target: (options && options.target) || metricTargetV2beta2(),
    }.merge(options);
}
exports.podsMetricSourceV2beta2 = podsMetricSourceV2beta2;
/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
function podsMetricStatusV2beta2(options) {
    return {
        current: (options && options.current) || metricValueStatusV2beta2(),
        metric: (options && options.metric) || metricIdentifierV2beta2(),
    }.merge(options);
}
exports.podsMetricStatusV2beta2 = podsMetricStatusV2beta2;
/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
function resourceMetricSourceV2beta2(options) {
    return {
        name: (options && options.name) || null,
        target: (options && options.target) || metricTargetV2beta2(),
    }.merge(options);
}
exports.resourceMetricSourceV2beta2 = resourceMetricSourceV2beta2;
/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
function resourceMetricStatusV2beta2(options) {
    return {
        current: (options && options.current) || metricValueStatusV2beta2(),
        name: (options && options.name) || null,
    }.merge(options);
}
exports.resourceMetricStatusV2beta2 = resourceMetricStatusV2beta2;
/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
function infoVersion(options) {
    return {
        buildDate: (options && options.buildDate) || null,
        compiler: (options && options.compiler) || null,
        gitCommit: (options && options.gitCommit) || null,
        gitTreeState: (options && options.gitTreeState) || null,
        gitVersion: (options && options.gitVersion) || null,
        goVersion: (options && options.goVersion) || null,
        major: (options && options.major) || null,
        minor: (options && options.minor) || null,
        platform: (options && options.platform) || null,
    }.merge(options);
}
exports.infoVersion = infoVersion;
