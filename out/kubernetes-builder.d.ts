import * as k8s from './kubernetes-api';
import './core';
export declare type Optional<T> = {
    [P in keyof T]?: T[P] extends boolean ? boolean : T[P] extends string ? string : T[P] extends number ? number : T[P] extends (infer I)[] ? Optional<I>[] : Optional<T[P]>;
};
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export declare function serviceReferenceAdmissionregistrationV1beta1(options?: Optional<k8s.ServiceReferenceAdmissionregistrationV1beta1>): k8s.ServiceReferenceAdmissionregistrationV1beta1;
/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 */
export declare function webhookClientConfigAdmissionregistrationV1beta1(options?: Optional<k8s.WebhookClientConfigAdmissionregistrationV1beta1>): k8s.WebhookClientConfigAdmissionregistrationV1beta1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export declare function serviceReferenceApiextensionsV1beta1(options?: Optional<k8s.ServiceReferenceApiextensionsV1beta1>): k8s.ServiceReferenceApiextensionsV1beta1;
/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook. It has the same field as admissionregistration.v1beta1.WebhookClientConfig.
 */
export declare function webhookClientConfigApiextensionsV1beta1(options?: Optional<k8s.WebhookClientConfigApiextensionsV1beta1>): k8s.WebhookClientConfigApiextensionsV1beta1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export declare function serviceReferenceApiregistrationV1beta1(options?: Optional<k8s.ServiceReferenceApiregistrationV1beta1>): k8s.ServiceReferenceApiregistrationV1beta1;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export declare function deploymentAppsV1beta1(options?: Optional<k8s.DeploymentAppsV1beta1>): k8s.DeploymentAppsV1beta1;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export declare function deploymentConditionAppsV1beta1(options?: Optional<k8s.DeploymentConditionAppsV1beta1>): k8s.DeploymentConditionAppsV1beta1;
/**
 * DeploymentList is a list of Deployments.
 */
export declare function deploymentListAppsV1beta1(options?: Optional<k8s.DeploymentListAppsV1beta1>): k8s.DeploymentListAppsV1beta1;
/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export declare function deploymentRollbackAppsV1beta1(options?: Optional<k8s.DeploymentRollbackAppsV1beta1>): k8s.DeploymentRollbackAppsV1beta1;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export declare function deploymentSpecAppsV1beta1(options?: Optional<k8s.DeploymentSpecAppsV1beta1>): k8s.DeploymentSpecAppsV1beta1;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export declare function deploymentStatusAppsV1beta1(options?: Optional<k8s.DeploymentStatusAppsV1beta1>): k8s.DeploymentStatusAppsV1beta1;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export declare function deploymentStrategyAppsV1beta1(options?: Optional<k8s.DeploymentStrategyAppsV1beta1>): k8s.DeploymentStrategyAppsV1beta1;
/**
 * DEPRECATED.
 */
export declare function rollbackConfigAppsV1beta1(options?: Optional<k8s.RollbackConfigAppsV1beta1>): k8s.RollbackConfigAppsV1beta1;
/**
 * Spec to control the desired behavior of rolling update.
 */
export declare function rollingUpdateDeploymentAppsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentAppsV1beta1>): k8s.RollingUpdateDeploymentAppsV1beta1;
/**
 * Scale represents a scaling request for a resource.
 */
export declare function scaleAppsV1beta1(options?: Optional<k8s.ScaleAppsV1beta1>): k8s.ScaleAppsV1beta1;
/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export declare function scaleSpecAppsV1beta1(options?: Optional<k8s.ScaleSpecAppsV1beta1>): k8s.ScaleSpecAppsV1beta1;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export declare function scaleStatusAppsV1beta1(options?: Optional<k8s.ScaleStatusAppsV1beta1>): k8s.ScaleStatusAppsV1beta1;
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead.
 */
export declare function allowedFlexVolumeExtensionsV1beta1(options?: Optional<k8s.AllowedFlexVolumeExtensionsV1beta1>): k8s.AllowedFlexVolumeExtensionsV1beta1;
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead.
 */
export declare function allowedHostPathExtensionsV1beta1(options?: Optional<k8s.AllowedHostPathExtensionsV1beta1>): k8s.AllowedHostPathExtensionsV1beta1;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export declare function deploymentExtensionsV1beta1(options?: Optional<k8s.DeploymentExtensionsV1beta1>): k8s.DeploymentExtensionsV1beta1;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export declare function deploymentConditionExtensionsV1beta1(options?: Optional<k8s.DeploymentConditionExtensionsV1beta1>): k8s.DeploymentConditionExtensionsV1beta1;
/**
 * DeploymentList is a list of Deployments.
 */
export declare function deploymentListExtensionsV1beta1(options?: Optional<k8s.DeploymentListExtensionsV1beta1>): k8s.DeploymentListExtensionsV1beta1;
/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export declare function deploymentRollbackExtensionsV1beta1(options?: Optional<k8s.DeploymentRollbackExtensionsV1beta1>): k8s.DeploymentRollbackExtensionsV1beta1;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export declare function deploymentSpecExtensionsV1beta1(options?: Optional<k8s.DeploymentSpecExtensionsV1beta1>): k8s.DeploymentSpecExtensionsV1beta1;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export declare function deploymentStatusExtensionsV1beta1(options?: Optional<k8s.DeploymentStatusExtensionsV1beta1>): k8s.DeploymentStatusExtensionsV1beta1;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export declare function deploymentStrategyExtensionsV1beta1(options?: Optional<k8s.DeploymentStrategyExtensionsV1beta1>): k8s.DeploymentStrategyExtensionsV1beta1;
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 */
export declare function fSGroupStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsExtensionsV1beta1>): k8s.FSGroupStrategyOptionsExtensionsV1beta1;
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 */
export declare function hostPortRangeExtensionsV1beta1(options?: Optional<k8s.HostPortRangeExtensionsV1beta1>): k8s.HostPortRangeExtensionsV1beta1;
/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 */
export declare function iDRangeExtensionsV1beta1(options?: Optional<k8s.IDRangeExtensionsV1beta1>): k8s.IDRangeExtensionsV1beta1;
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 */
export declare function podSecurityPolicyExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyExtensionsV1beta1>): k8s.PodSecurityPolicyExtensionsV1beta1;
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
export declare function podSecurityPolicyListExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyListExtensionsV1beta1>): k8s.PodSecurityPolicyListExtensionsV1beta1;
/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 */
export declare function podSecurityPolicySpecExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicySpecExtensionsV1beta1>): k8s.PodSecurityPolicySpecExtensionsV1beta1;
/**
 * DEPRECATED.
 */
export declare function rollbackConfigExtensionsV1beta1(options?: Optional<k8s.RollbackConfigExtensionsV1beta1>): k8s.RollbackConfigExtensionsV1beta1;
/**
 * Spec to control the desired behavior of rolling update.
 */
export declare function rollingUpdateDeploymentExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentExtensionsV1beta1>): k8s.RollingUpdateDeploymentExtensionsV1beta1;
/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsGroupStrategyOptions from policy API Group instead.
 */
export declare function runAsGroupStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.RunAsGroupStrategyOptionsExtensionsV1beta1>): k8s.RunAsGroupStrategyOptionsExtensionsV1beta1;
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 */
export declare function runAsUserStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsExtensionsV1beta1>): k8s.RunAsUserStrategyOptionsExtensionsV1beta1;
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
export declare function sELinuxStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsExtensionsV1beta1>): k8s.SELinuxStrategyOptionsExtensionsV1beta1;
/**
 * represents a scaling request for a resource.
 */
export declare function scaleExtensionsV1beta1(options?: Optional<k8s.ScaleExtensionsV1beta1>): k8s.ScaleExtensionsV1beta1;
/**
 * describes the attributes of a scale subresource
 */
export declare function scaleSpecExtensionsV1beta1(options?: Optional<k8s.ScaleSpecExtensionsV1beta1>): k8s.ScaleSpecExtensionsV1beta1;
/**
 * represents the current status of a scale subresource.
 */
export declare function scaleStatusExtensionsV1beta1(options?: Optional<k8s.ScaleStatusExtensionsV1beta1>): k8s.ScaleStatusExtensionsV1beta1;
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 */
export declare function supplementalGroupsStrategyOptionsExtensionsV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsExtensionsV1beta1>): k8s.SupplementalGroupsStrategyOptionsExtensionsV1beta1;
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export declare function allowedFlexVolumePolicyV1beta1(options?: Optional<k8s.AllowedFlexVolumePolicyV1beta1>): k8s.AllowedFlexVolumePolicyV1beta1;
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
export declare function allowedHostPathPolicyV1beta1(options?: Optional<k8s.AllowedHostPathPolicyV1beta1>): k8s.AllowedHostPathPolicyV1beta1;
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
export declare function fSGroupStrategyOptionsPolicyV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsPolicyV1beta1>): k8s.FSGroupStrategyOptionsPolicyV1beta1;
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export declare function hostPortRangePolicyV1beta1(options?: Optional<k8s.HostPortRangePolicyV1beta1>): k8s.HostPortRangePolicyV1beta1;
/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
export declare function iDRangePolicyV1beta1(options?: Optional<k8s.IDRangePolicyV1beta1>): k8s.IDRangePolicyV1beta1;
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
export declare function podSecurityPolicyPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicyPolicyV1beta1>): k8s.PodSecurityPolicyPolicyV1beta1;
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
export declare function podSecurityPolicyListPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicyListPolicyV1beta1>): k8s.PodSecurityPolicyListPolicyV1beta1;
/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
export declare function podSecurityPolicySpecPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicySpecPolicyV1beta1>): k8s.PodSecurityPolicySpecPolicyV1beta1;
/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export declare function runAsGroupStrategyOptionsPolicyV1beta1(options?: Optional<k8s.RunAsGroupStrategyOptionsPolicyV1beta1>): k8s.RunAsGroupStrategyOptionsPolicyV1beta1;
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export declare function runAsUserStrategyOptionsPolicyV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsPolicyV1beta1>): k8s.RunAsUserStrategyOptionsPolicyV1beta1;
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export declare function sELinuxStrategyOptionsPolicyV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsPolicyV1beta1>): k8s.SELinuxStrategyOptionsPolicyV1beta1;
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export declare function supplementalGroupsStrategyOptionsPolicyV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsPolicyV1beta1>): k8s.SupplementalGroupsStrategyOptionsPolicyV1beta1;
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
export declare function rawExtensionRuntime(options?: Optional<k8s.RawExtensionRuntime>): k8s.RawExtensionRuntime;
/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
export declare function aPIGroup(options?: Optional<k8s.APIGroup>): k8s.APIGroup;
/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
export declare function aPIGroupList(options?: Optional<k8s.APIGroupList>): k8s.APIGroupList;
/**
 * APIResource specifies the name of a resource and whether it is namespaced.
 */
export declare function aPIResource(options?: Optional<k8s.APIResource>): k8s.APIResource;
/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 */
export declare function aPIResourceList(options?: Optional<k8s.APIResourceList>): k8s.APIResourceList;
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export declare function aPIService(options?: Optional<k8s.APIService>): k8s.APIService;
export declare function aPIServiceCondition(options?: Optional<k8s.APIServiceCondition>): k8s.APIServiceCondition;
/**
 * APIServiceList is a list of APIService objects.
 */
export declare function aPIServiceList(options?: Optional<k8s.APIServiceList>): k8s.APIServiceList;
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export declare function aPIServiceSpec(options?: Optional<k8s.APIServiceSpec>): k8s.APIServiceSpec;
/**
 * APIServiceStatus contains derived information about an API server
 */
export declare function aPIServiceStatus(options?: Optional<k8s.APIServiceStatus>): k8s.APIServiceStatus;
/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
export declare function aPIVersions(options?: Optional<k8s.APIVersions>): k8s.APIVersions;
/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export declare function aWSElasticBlockStoreVolumeSource(options?: Optional<k8s.AWSElasticBlockStoreVolumeSource>): k8s.AWSElasticBlockStoreVolumeSource;
/**
 * Affinity is a group of affinity scheduling rules.
 */
export declare function affinity(options?: Optional<k8s.Affinity>): k8s.Affinity;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export declare function aggregationRule(options?: Optional<k8s.AggregationRule>): k8s.AggregationRule;
/**
 * AttachedVolume describes a volume attached to a node
 */
export declare function attachedVolume(options?: Optional<k8s.AttachedVolume>): k8s.AttachedVolume;
/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
export declare function azureDiskVolumeSource(options?: Optional<k8s.AzureDiskVolumeSource>): k8s.AzureDiskVolumeSource;
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export declare function azureFilePersistentVolumeSource(options?: Optional<k8s.AzureFilePersistentVolumeSource>): k8s.AzureFilePersistentVolumeSource;
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export declare function azureFileVolumeSource(options?: Optional<k8s.AzureFileVolumeSource>): k8s.AzureFileVolumeSource;
/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 */
export declare function binding(options?: Optional<k8s.Binding>): k8s.Binding;
/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
export declare function cSIPersistentVolumeSource(options?: Optional<k8s.CSIPersistentVolumeSource>): k8s.CSIPersistentVolumeSource;
/**
 * Adds and removes POSIX capabilities from running containers.
 */
export declare function capabilities(options?: Optional<k8s.Capabilities>): k8s.Capabilities;
/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export declare function cephFSPersistentVolumeSource(options?: Optional<k8s.CephFSPersistentVolumeSource>): k8s.CephFSPersistentVolumeSource;
/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export declare function cephFSVolumeSource(options?: Optional<k8s.CephFSVolumeSource>): k8s.CephFSVolumeSource;
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export declare function cinderPersistentVolumeSource(options?: Optional<k8s.CinderPersistentVolumeSource>): k8s.CinderPersistentVolumeSource;
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export declare function cinderVolumeSource(options?: Optional<k8s.CinderVolumeSource>): k8s.CinderVolumeSource;
/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export declare function clientIPConfig(options?: Optional<k8s.ClientIPConfig>): k8s.ClientIPConfig;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export declare function clusterRole(options?: Optional<k8s.ClusterRole>): k8s.ClusterRole;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export declare function clusterRoleBinding(options?: Optional<k8s.ClusterRoleBinding>): k8s.ClusterRoleBinding;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export declare function clusterRoleBindingList(options?: Optional<k8s.ClusterRoleBindingList>): k8s.ClusterRoleBindingList;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export declare function clusterRoleList(options?: Optional<k8s.ClusterRoleList>): k8s.ClusterRoleList;
/**
 * Information about the condition of a component.
 */
export declare function componentCondition(options?: Optional<k8s.ComponentCondition>): k8s.ComponentCondition;
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 */
export declare function componentStatus(options?: Optional<k8s.ComponentStatus>): k8s.ComponentStatus;
/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 */
export declare function componentStatusList(options?: Optional<k8s.ComponentStatusList>): k8s.ComponentStatusList;
/**
 * ConfigMap holds configuration data for pods to consume.
 */
export declare function configMap(options?: Optional<k8s.ConfigMap>): k8s.ConfigMap;
/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export declare function configMapEnvSource(options?: Optional<k8s.ConfigMapEnvSource>): k8s.ConfigMapEnvSource;
/**
 * Selects a key from a ConfigMap.
 */
export declare function configMapKeySelector(options?: Optional<k8s.ConfigMapKeySelector>): k8s.ConfigMapKeySelector;
/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export declare function configMapList(options?: Optional<k8s.ConfigMapList>): k8s.ConfigMapList;
/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 */
export declare function configMapNodeConfigSource(options?: Optional<k8s.ConfigMapNodeConfigSource>): k8s.ConfigMapNodeConfigSource;
/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export declare function configMapProjection(options?: Optional<k8s.ConfigMapProjection>): k8s.ConfigMapProjection;
/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export declare function configMapVolumeSource(options?: Optional<k8s.ConfigMapVolumeSource>): k8s.ConfigMapVolumeSource;
/**
 * A single application container that you want to run within a pod.
 */
export declare function container(options?: Optional<k8s.Container>): k8s.Container;
/**
 * Describe a container image
 */
export declare function containerImage(options?: Optional<k8s.ContainerImage>): k8s.ContainerImage;
/**
 * ContainerPort represents a network port in a single container.
 */
export declare function containerPort(options?: Optional<k8s.ContainerPort>): k8s.ContainerPort;
/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export declare function containerState(options?: Optional<k8s.ContainerState>): k8s.ContainerState;
/**
 * ContainerStateRunning is a running state of a container.
 */
export declare function containerStateRunning(options?: Optional<k8s.ContainerStateRunning>): k8s.ContainerStateRunning;
/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export declare function containerStateTerminated(options?: Optional<k8s.ContainerStateTerminated>): k8s.ContainerStateTerminated;
/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export declare function containerStateWaiting(options?: Optional<k8s.ContainerStateWaiting>): k8s.ContainerStateWaiting;
/**
 * ContainerStatus contains details for the current status of this container.
 */
export declare function containerStatus(options?: Optional<k8s.ContainerStatus>): k8s.ContainerStatus;
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export declare function controllerRevision(options?: Optional<k8s.ControllerRevision>): k8s.ControllerRevision;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export declare function controllerRevisionList(options?: Optional<k8s.ControllerRevisionList>): k8s.ControllerRevisionList;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export declare function crossVersionObjectReference(options?: Optional<k8s.CrossVersionObjectReference>): k8s.CrossVersionObjectReference;
/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export declare function daemonEndpoint(options?: Optional<k8s.DaemonEndpoint>): k8s.DaemonEndpoint;
/**
 * DaemonSet represents the configuration of a daemon set.
 */
export declare function daemonSet(options?: Optional<k8s.DaemonSet>): k8s.DaemonSet;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export declare function daemonSetCondition(options?: Optional<k8s.DaemonSetCondition>): k8s.DaemonSetCondition;
/**
 * DaemonSetList is a collection of daemon sets.
 */
export declare function daemonSetList(options?: Optional<k8s.DaemonSetList>): k8s.DaemonSetList;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export declare function daemonSetSpec(options?: Optional<k8s.DaemonSetSpec>): k8s.DaemonSetSpec;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export declare function daemonSetStatus(options?: Optional<k8s.DaemonSetStatus>): k8s.DaemonSetStatus;
/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export declare function daemonSetUpdateStrategy(options?: Optional<k8s.DaemonSetUpdateStrategy>): k8s.DaemonSetUpdateStrategy;
/**
 * DeleteOptions may be provided when deleting an API object.
 */
export declare function deleteOptions(options?: Optional<k8s.DeleteOptions>): k8s.DeleteOptions;
/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export declare function deployment(options?: Optional<k8s.Deployment>): k8s.Deployment;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export declare function deploymentCondition(options?: Optional<k8s.DeploymentCondition>): k8s.DeploymentCondition;
/**
 * DeploymentList is a list of Deployments.
 */
export declare function deploymentList(options?: Optional<k8s.DeploymentList>): k8s.DeploymentList;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export declare function deploymentSpec(options?: Optional<k8s.DeploymentSpec>): k8s.DeploymentSpec;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export declare function deploymentStatus(options?: Optional<k8s.DeploymentStatus>): k8s.DeploymentStatus;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export declare function deploymentStrategy(options?: Optional<k8s.DeploymentStrategy>): k8s.DeploymentStrategy;
/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export declare function downwardAPIProjection(options?: Optional<k8s.DownwardAPIProjection>): k8s.DownwardAPIProjection;
/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
export declare function downwardAPIVolumeFile(options?: Optional<k8s.DownwardAPIVolumeFile>): k8s.DownwardAPIVolumeFile;
/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
export declare function downwardAPIVolumeSource(options?: Optional<k8s.DownwardAPIVolumeSource>): k8s.DownwardAPIVolumeSource;
/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 */
export declare function emptyDirVolumeSource(options?: Optional<k8s.EmptyDirVolumeSource>): k8s.EmptyDirVolumeSource;
/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export declare function endpointAddress(options?: Optional<k8s.EndpointAddress>): k8s.EndpointAddress;
/**
 * EndpointPort is a tuple that describes a single port.
 */
export declare function endpointPort(options?: Optional<k8s.EndpointPort>): k8s.EndpointPort;
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
export declare function endpointSubset(options?: Optional<k8s.EndpointSubset>): k8s.EndpointSubset;
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
export declare function endpoints(options?: Optional<k8s.Endpoints>): k8s.Endpoints;
/**
 * EndpointsList is a list of endpoints.
 */
export declare function endpointsList(options?: Optional<k8s.EndpointsList>): k8s.EndpointsList;
/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export declare function envFromSource(options?: Optional<k8s.EnvFromSource>): k8s.EnvFromSource;
/**
 * EnvVar represents an environment variable present in a Container.
 */
export declare function envVar(options?: Optional<k8s.EnvVar>): k8s.EnvVar;
/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export declare function envVarSource(options?: Optional<k8s.EnvVarSource>): k8s.EnvVarSource;
/**
 * Event is a report of an event somewhere in the cluster.
 */
export declare function event(options?: Optional<k8s.Event>): k8s.Event;
/**
 * EventList is a list of events.
 */
export declare function eventList(options?: Optional<k8s.EventList>): k8s.EventList;
/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export declare function eventSeries(options?: Optional<k8s.EventSeries>): k8s.EventSeries;
/**
 * EventSource contains information for an event.
 */
export declare function eventSource(options?: Optional<k8s.EventSource>): k8s.EventSource;
/**
 * ExecAction describes a "run in container" action.
 */
export declare function execAction(options?: Optional<k8s.ExecAction>): k8s.ExecAction;
/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 */
export declare function fCVolumeSource(options?: Optional<k8s.FCVolumeSource>): k8s.FCVolumeSource;
/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
export declare function flexPersistentVolumeSource(options?: Optional<k8s.FlexPersistentVolumeSource>): k8s.FlexPersistentVolumeSource;
/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
export declare function flexVolumeSource(options?: Optional<k8s.FlexVolumeSource>): k8s.FlexVolumeSource;
/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
export declare function flockerVolumeSource(options?: Optional<k8s.FlockerVolumeSource>): k8s.FlockerVolumeSource;
/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export declare function gCEPersistentDiskVolumeSource(options?: Optional<k8s.GCEPersistentDiskVolumeSource>): k8s.GCEPersistentDiskVolumeSource;
/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export declare function gitRepoVolumeSource(options?: Optional<k8s.GitRepoVolumeSource>): k8s.GitRepoVolumeSource;
/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export declare function glusterfsPersistentVolumeSource(options?: Optional<k8s.GlusterfsPersistentVolumeSource>): k8s.GlusterfsPersistentVolumeSource;
/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export declare function glusterfsVolumeSource(options?: Optional<k8s.GlusterfsVolumeSource>): k8s.GlusterfsVolumeSource;
/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export declare function groupVersionForDiscovery(options?: Optional<k8s.GroupVersionForDiscovery>): k8s.GroupVersionForDiscovery;
/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export declare function hTTPGetAction(options?: Optional<k8s.HTTPGetAction>): k8s.HTTPGetAction;
/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export declare function hTTPHeader(options?: Optional<k8s.HTTPHeader>): k8s.HTTPHeader;
/**
 * Handler defines a specific action that should be taken
 */
export declare function handler(options?: Optional<k8s.Handler>): k8s.Handler;
/**
 * configuration of a horizontal pod autoscaler.
 */
export declare function horizontalPodAutoscaler(options?: Optional<k8s.HorizontalPodAutoscaler>): k8s.HorizontalPodAutoscaler;
/**
 * list of horizontal pod autoscaler objects.
 */
export declare function horizontalPodAutoscalerList(options?: Optional<k8s.HorizontalPodAutoscalerList>): k8s.HorizontalPodAutoscalerList;
/**
 * specification of a horizontal pod autoscaler.
 */
export declare function horizontalPodAutoscalerSpec(options?: Optional<k8s.HorizontalPodAutoscalerSpec>): k8s.HorizontalPodAutoscalerSpec;
/**
 * current status of a horizontal pod autoscaler
 */
export declare function horizontalPodAutoscalerStatus(options?: Optional<k8s.HorizontalPodAutoscalerStatus>): k8s.HorizontalPodAutoscalerStatus;
/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export declare function hostAlias(options?: Optional<k8s.HostAlias>): k8s.HostAlias;
/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export declare function hostPathVolumeSource(options?: Optional<k8s.HostPathVolumeSource>): k8s.HostPathVolumeSource;
/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export declare function iPBlock(options?: Optional<k8s.IPBlock>): k8s.IPBlock;
/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export declare function iSCSIPersistentVolumeSource(options?: Optional<k8s.ISCSIPersistentVolumeSource>): k8s.ISCSIPersistentVolumeSource;
/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export declare function iSCSIVolumeSource(options?: Optional<k8s.ISCSIVolumeSource>): k8s.ISCSIVolumeSource;
/**
 * Initializer is information about an initializer that has not yet completed.
 */
export declare function initializer(options?: Optional<k8s.Initializer>): k8s.Initializer;
/**
 * Initializers tracks the progress of initialization.
 */
export declare function initializers(options?: Optional<k8s.Initializers>): k8s.Initializers;
/**
 * Job represents the configuration of a single job.
 */
export declare function job(options?: Optional<k8s.Job>): k8s.Job;
/**
 * JobCondition describes current state of a job.
 */
export declare function jobCondition(options?: Optional<k8s.JobCondition>): k8s.JobCondition;
/**
 * JobList is a collection of jobs.
 */
export declare function jobList(options?: Optional<k8s.JobList>): k8s.JobList;
/**
 * JobSpec describes how the job execution will look like.
 */
export declare function jobSpec(options?: Optional<k8s.JobSpec>): k8s.JobSpec;
/**
 * JobStatus represents the current state of a Job.
 */
export declare function jobStatus(options?: Optional<k8s.JobStatus>): k8s.JobStatus;
/**
 * Maps a string key to a path within a volume.
 */
export declare function keyToPath(options?: Optional<k8s.KeyToPath>): k8s.KeyToPath;
/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export declare function labelSelector(options?: Optional<k8s.LabelSelector>): k8s.LabelSelector;
/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export declare function labelSelectorRequirement(options?: Optional<k8s.LabelSelectorRequirement>): k8s.LabelSelectorRequirement;
/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export declare function lifecycle(options?: Optional<k8s.Lifecycle>): k8s.Lifecycle;
/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
export declare function limitRange(options?: Optional<k8s.LimitRange>): k8s.LimitRange;
/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export declare function limitRangeItem(options?: Optional<k8s.LimitRangeItem>): k8s.LimitRangeItem;
/**
 * LimitRangeList is a list of LimitRange items.
 */
export declare function limitRangeList(options?: Optional<k8s.LimitRangeList>): k8s.LimitRangeList;
/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export declare function limitRangeSpec(options?: Optional<k8s.LimitRangeSpec>): k8s.LimitRangeSpec;
/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export declare function listMeta(options?: Optional<k8s.ListMeta>): k8s.ListMeta;
/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
export declare function loadBalancerIngress(options?: Optional<k8s.LoadBalancerIngress>): k8s.LoadBalancerIngress;
/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export declare function loadBalancerStatus(options?: Optional<k8s.LoadBalancerStatus>): k8s.LoadBalancerStatus;
/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export declare function localObjectReference(options?: Optional<k8s.LocalObjectReference>): k8s.LocalObjectReference;
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export declare function localSubjectAccessReview(options?: Optional<k8s.LocalSubjectAccessReview>): k8s.LocalSubjectAccessReview;
/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
export declare function localVolumeSource(options?: Optional<k8s.LocalVolumeSource>): k8s.LocalVolumeSource;
/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
export declare function nFSVolumeSource(options?: Optional<k8s.NFSVolumeSource>): k8s.NFSVolumeSource;
/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
export declare function namespace(options?: Optional<k8s.Namespace>): k8s.Namespace;
/**
 * NamespaceList is a list of Namespaces.
 */
export declare function namespaceList(options?: Optional<k8s.NamespaceList>): k8s.NamespaceList;
/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export declare function namespaceSpec(options?: Optional<k8s.NamespaceSpec>): k8s.NamespaceSpec;
/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export declare function namespaceStatus(options?: Optional<k8s.NamespaceStatus>): k8s.NamespaceStatus;
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export declare function networkPolicy(options?: Optional<k8s.NetworkPolicy>): k8s.NetworkPolicy;
/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export declare function networkPolicyEgressRule(options?: Optional<k8s.NetworkPolicyEgressRule>): k8s.NetworkPolicyEgressRule;
/**
 * NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
 */
export declare function networkPolicyIngressRule(options?: Optional<k8s.NetworkPolicyIngressRule>): k8s.NetworkPolicyIngressRule;
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export declare function networkPolicyList(options?: Optional<k8s.NetworkPolicyList>): k8s.NetworkPolicyList;
/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
export declare function networkPolicyPeer(options?: Optional<k8s.NetworkPolicyPeer>): k8s.NetworkPolicyPeer;
/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export declare function networkPolicyPort(options?: Optional<k8s.NetworkPolicyPort>): k8s.NetworkPolicyPort;
/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 */
export declare function networkPolicySpec(options?: Optional<k8s.NetworkPolicySpec>): k8s.NetworkPolicySpec;
/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
export declare function node(options?: Optional<k8s.Node>): k8s.Node;
/**
 * NodeAddress contains information for the node's address.
 */
export declare function nodeAddress(options?: Optional<k8s.NodeAddress>): k8s.NodeAddress;
/**
 * Node affinity is a group of node affinity scheduling rules.
 */
export declare function nodeAffinity(options?: Optional<k8s.NodeAffinity>): k8s.NodeAffinity;
/**
 * NodeCondition contains condition information for a node.
 */
export declare function nodeCondition(options?: Optional<k8s.NodeCondition>): k8s.NodeCondition;
/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
export declare function nodeConfigSource(options?: Optional<k8s.NodeConfigSource>): k8s.NodeConfigSource;
/**
 * NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
 */
export declare function nodeConfigStatus(options?: Optional<k8s.NodeConfigStatus>): k8s.NodeConfigStatus;
/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export declare function nodeDaemonEndpoints(options?: Optional<k8s.NodeDaemonEndpoints>): k8s.NodeDaemonEndpoints;
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
export declare function nodeList(options?: Optional<k8s.NodeList>): k8s.NodeList;
/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export declare function nodeSelector(options?: Optional<k8s.NodeSelector>): k8s.NodeSelector;
/**
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export declare function nodeSelectorRequirement(options?: Optional<k8s.NodeSelectorRequirement>): k8s.NodeSelectorRequirement;
/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export declare function nodeSelectorTerm(options?: Optional<k8s.NodeSelectorTerm>): k8s.NodeSelectorTerm;
/**
 * NodeSpec describes the attributes that a node is created with.
 */
export declare function nodeSpec(options?: Optional<k8s.NodeSpec>): k8s.NodeSpec;
/**
 * NodeStatus is information about the current status of a node.
 */
export declare function nodeStatus(options?: Optional<k8s.NodeStatus>): k8s.NodeStatus;
/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
export declare function nodeSystemInfo(options?: Optional<k8s.NodeSystemInfo>): k8s.NodeSystemInfo;
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export declare function nonResourceAttributes(options?: Optional<k8s.NonResourceAttributes>): k8s.NonResourceAttributes;
/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export declare function nonResourceRule(options?: Optional<k8s.NonResourceRule>): k8s.NonResourceRule;
/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export declare function objectFieldSelector(options?: Optional<k8s.ObjectFieldSelector>): k8s.ObjectFieldSelector;
/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
export declare function objectMeta(options?: Optional<k8s.ObjectMeta>): k8s.ObjectMeta;
/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
export declare function objectReference(options?: Optional<k8s.ObjectReference>): k8s.ObjectReference;
/**
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 */
export declare function ownerReference(options?: Optional<k8s.OwnerReference>): k8s.OwnerReference;
/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export declare function persistentVolume(options?: Optional<k8s.PersistentVolume>): k8s.PersistentVolume;
/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export declare function persistentVolumeClaim(options?: Optional<k8s.PersistentVolumeClaim>): k8s.PersistentVolumeClaim;
/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
export declare function persistentVolumeClaimCondition(options?: Optional<k8s.PersistentVolumeClaimCondition>): k8s.PersistentVolumeClaimCondition;
/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
export declare function persistentVolumeClaimList(options?: Optional<k8s.PersistentVolumeClaimList>): k8s.PersistentVolumeClaimList;
/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 */
export declare function persistentVolumeClaimSpec(options?: Optional<k8s.PersistentVolumeClaimSpec>): k8s.PersistentVolumeClaimSpec;
/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
export declare function persistentVolumeClaimStatus(options?: Optional<k8s.PersistentVolumeClaimStatus>): k8s.PersistentVolumeClaimStatus;
/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 */
export declare function persistentVolumeClaimVolumeSource(options?: Optional<k8s.PersistentVolumeClaimVolumeSource>): k8s.PersistentVolumeClaimVolumeSource;
/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export declare function persistentVolumeList(options?: Optional<k8s.PersistentVolumeList>): k8s.PersistentVolumeList;
/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export declare function persistentVolumeSpec(options?: Optional<k8s.PersistentVolumeSpec>): k8s.PersistentVolumeSpec;
/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export declare function persistentVolumeStatus(options?: Optional<k8s.PersistentVolumeStatus>): k8s.PersistentVolumeStatus;
/**
 * Represents a Photon Controller persistent disk resource.
 */
export declare function photonPersistentDiskVolumeSource(options?: Optional<k8s.PhotonPersistentDiskVolumeSource>): k8s.PhotonPersistentDiskVolumeSource;
/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 */
export declare function pod(options?: Optional<k8s.Pod>): k8s.Pod;
/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 */
export declare function podAffinity(options?: Optional<k8s.PodAffinity>): k8s.PodAffinity;
/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
export declare function podAffinityTerm(options?: Optional<k8s.PodAffinityTerm>): k8s.PodAffinityTerm;
/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 */
export declare function podAntiAffinity(options?: Optional<k8s.PodAntiAffinity>): k8s.PodAntiAffinity;
/**
 * PodCondition contains details for the current condition of this pod.
 */
export declare function podCondition(options?: Optional<k8s.PodCondition>): k8s.PodCondition;
/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
export declare function podDNSConfig(options?: Optional<k8s.PodDNSConfig>): k8s.PodDNSConfig;
/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export declare function podDNSConfigOption(options?: Optional<k8s.PodDNSConfigOption>): k8s.PodDNSConfigOption;
/**
 * PodList is a list of Pods.
 */
export declare function podList(options?: Optional<k8s.PodList>): k8s.PodList;
/**
 * PodReadinessGate contains the reference to a pod condition
 */
export declare function podReadinessGate(options?: Optional<k8s.PodReadinessGate>): k8s.PodReadinessGate;
/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 */
export declare function podSecurityContext(options?: Optional<k8s.PodSecurityContext>): k8s.PodSecurityContext;
/**
 * PodSpec is a description of a pod.
 */
export declare function podSpec(options?: Optional<k8s.PodSpec>): k8s.PodSpec;
/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
export declare function podStatus(options?: Optional<k8s.PodStatus>): k8s.PodStatus;
/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export declare function podTemplate(options?: Optional<k8s.PodTemplate>): k8s.PodTemplate;
/**
 * PodTemplateList is a list of PodTemplates.
 */
export declare function podTemplateList(options?: Optional<k8s.PodTemplateList>): k8s.PodTemplateList;
/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export declare function podTemplateSpec(options?: Optional<k8s.PodTemplateSpec>): k8s.PodTemplateSpec;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export declare function policyRule(options?: Optional<k8s.PolicyRule>): k8s.PolicyRule;
/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export declare function portworxVolumeSource(options?: Optional<k8s.PortworxVolumeSource>): k8s.PortworxVolumeSource;
/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export declare function preconditions(options?: Optional<k8s.Preconditions>): k8s.Preconditions;
/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export declare function preferredSchedulingTerm(options?: Optional<k8s.PreferredSchedulingTerm>): k8s.PreferredSchedulingTerm;
/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export declare function probe(options?: Optional<k8s.Probe>): k8s.Probe;
/**
 * Represents a projected volume source
 */
export declare function projectedVolumeSource(options?: Optional<k8s.ProjectedVolumeSource>): k8s.ProjectedVolumeSource;
/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
export declare function quobyteVolumeSource(options?: Optional<k8s.QuobyteVolumeSource>): k8s.QuobyteVolumeSource;
/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export declare function rBDPersistentVolumeSource(options?: Optional<k8s.RBDPersistentVolumeSource>): k8s.RBDPersistentVolumeSource;
/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export declare function rBDVolumeSource(options?: Optional<k8s.RBDVolumeSource>): k8s.RBDVolumeSource;
/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export declare function replicaSet(options?: Optional<k8s.ReplicaSet>): k8s.ReplicaSet;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export declare function replicaSetCondition(options?: Optional<k8s.ReplicaSetCondition>): k8s.ReplicaSetCondition;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export declare function replicaSetList(options?: Optional<k8s.ReplicaSetList>): k8s.ReplicaSetList;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export declare function replicaSetSpec(options?: Optional<k8s.ReplicaSetSpec>): k8s.ReplicaSetSpec;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export declare function replicaSetStatus(options?: Optional<k8s.ReplicaSetStatus>): k8s.ReplicaSetStatus;
/**
 * ReplicationController represents the configuration of a replication controller.
 */
export declare function replicationController(options?: Optional<k8s.ReplicationController>): k8s.ReplicationController;
/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export declare function replicationControllerCondition(options?: Optional<k8s.ReplicationControllerCondition>): k8s.ReplicationControllerCondition;
/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export declare function replicationControllerList(options?: Optional<k8s.ReplicationControllerList>): k8s.ReplicationControllerList;
/**
 * ReplicationControllerSpec is the specification of a replication controller.
 */
export declare function replicationControllerSpec(options?: Optional<k8s.ReplicationControllerSpec>): k8s.ReplicationControllerSpec;
/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
export declare function replicationControllerStatus(options?: Optional<k8s.ReplicationControllerStatus>): k8s.ReplicationControllerStatus;
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export declare function resourceAttributes(options?: Optional<k8s.ResourceAttributes>): k8s.ResourceAttributes;
/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export declare function resourceFieldSelector(options?: Optional<k8s.ResourceFieldSelector>): k8s.ResourceFieldSelector;
/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export declare function resourceQuota(options?: Optional<k8s.ResourceQuota>): k8s.ResourceQuota;
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export declare function resourceQuotaList(options?: Optional<k8s.ResourceQuotaList>): k8s.ResourceQuotaList;
/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export declare function resourceQuotaSpec(options?: Optional<k8s.ResourceQuotaSpec>): k8s.ResourceQuotaSpec;
/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export declare function resourceQuotaStatus(options?: Optional<k8s.ResourceQuotaStatus>): k8s.ResourceQuotaStatus;
/**
 * ResourceRequirements describes the compute resource requirements.
 */
export declare function resourceRequirements(options?: Optional<k8s.ResourceRequirements>): k8s.ResourceRequirements;
/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export declare function resourceRule(options?: Optional<k8s.ResourceRule>): k8s.ResourceRule;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export declare function role(options?: Optional<k8s.Role>): k8s.Role;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export declare function roleBinding(options?: Optional<k8s.RoleBinding>): k8s.RoleBinding;
/**
 * RoleBindingList is a collection of RoleBindings
 */
export declare function roleBindingList(options?: Optional<k8s.RoleBindingList>): k8s.RoleBindingList;
/**
 * RoleList is a collection of Roles
 */
export declare function roleList(options?: Optional<k8s.RoleList>): k8s.RoleList;
/**
 * RoleRef contains information that points to the role being used
 */
export declare function roleRef(options?: Optional<k8s.RoleRef>): k8s.RoleRef;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export declare function rollingUpdateDaemonSet(options?: Optional<k8s.RollingUpdateDaemonSet>): k8s.RollingUpdateDaemonSet;
/**
 * Spec to control the desired behavior of rolling update.
 */
export declare function rollingUpdateDeployment(options?: Optional<k8s.RollingUpdateDeployment>): k8s.RollingUpdateDeployment;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export declare function rollingUpdateStatefulSetStrategy(options?: Optional<k8s.RollingUpdateStatefulSetStrategy>): k8s.RollingUpdateStatefulSetStrategy;
/**
 * SELinuxOptions are the labels to be applied to the container
 */
export declare function sELinuxOptions(options?: Optional<k8s.SELinuxOptions>): k8s.SELinuxOptions;
/**
 * Scale represents a scaling request for a resource.
 */
export declare function scale(options?: Optional<k8s.Scale>): k8s.Scale;
/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 */
export declare function scaleIOPersistentVolumeSource(options?: Optional<k8s.ScaleIOPersistentVolumeSource>): k8s.ScaleIOPersistentVolumeSource;
/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
export declare function scaleIOVolumeSource(options?: Optional<k8s.ScaleIOVolumeSource>): k8s.ScaleIOVolumeSource;
/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export declare function scaleSpec(options?: Optional<k8s.ScaleSpec>): k8s.ScaleSpec;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export declare function scaleStatus(options?: Optional<k8s.ScaleStatus>): k8s.ScaleStatus;
/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export declare function scopeSelector(options?: Optional<k8s.ScopeSelector>): k8s.ScopeSelector;
/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
export declare function scopedResourceSelectorRequirement(options?: Optional<k8s.ScopedResourceSelectorRequirement>): k8s.ScopedResourceSelectorRequirement;
/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 */
export declare function secret(options?: Optional<k8s.Secret>): k8s.Secret;
/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export declare function secretEnvSource(options?: Optional<k8s.SecretEnvSource>): k8s.SecretEnvSource;
/**
 * SecretKeySelector selects a key of a Secret.
 */
export declare function secretKeySelector(options?: Optional<k8s.SecretKeySelector>): k8s.SecretKeySelector;
/**
 * SecretList is a list of Secret.
 */
export declare function secretList(options?: Optional<k8s.SecretList>): k8s.SecretList;
/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export declare function secretProjection(options?: Optional<k8s.SecretProjection>): k8s.SecretProjection;
/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export declare function secretReference(options?: Optional<k8s.SecretReference>): k8s.SecretReference;
/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export declare function secretVolumeSource(options?: Optional<k8s.SecretVolumeSource>): k8s.SecretVolumeSource;
/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 */
export declare function securityContext(options?: Optional<k8s.SecurityContext>): k8s.SecurityContext;
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export declare function selfSubjectAccessReview(options?: Optional<k8s.SelfSubjectAccessReview>): k8s.SelfSubjectAccessReview;
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export declare function selfSubjectAccessReviewSpec(options?: Optional<k8s.SelfSubjectAccessReviewSpec>): k8s.SelfSubjectAccessReviewSpec;
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export declare function selfSubjectRulesReview(options?: Optional<k8s.SelfSubjectRulesReview>): k8s.SelfSubjectRulesReview;
export declare function selfSubjectRulesReviewSpec(options?: Optional<k8s.SelfSubjectRulesReviewSpec>): k8s.SelfSubjectRulesReviewSpec;
/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
export declare function serverAddressByClientCIDR(options?: Optional<k8s.ServerAddressByClientCIDR>): k8s.ServerAddressByClientCIDR;
/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export declare function service(options?: Optional<k8s.Service>): k8s.Service;
/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 */
export declare function serviceAccount(options?: Optional<k8s.ServiceAccount>): k8s.ServiceAccount;
/**
 * ServiceAccountList is a list of ServiceAccount objects
 */
export declare function serviceAccountList(options?: Optional<k8s.ServiceAccountList>): k8s.ServiceAccountList;
/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 */
export declare function serviceAccountTokenProjection(options?: Optional<k8s.ServiceAccountTokenProjection>): k8s.ServiceAccountTokenProjection;
/**
 * ServiceList holds a list of services.
 */
export declare function serviceList(options?: Optional<k8s.ServiceList>): k8s.ServiceList;
/**
 * ServicePort contains information on service's port.
 */
export declare function servicePort(options?: Optional<k8s.ServicePort>): k8s.ServicePort;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export declare function serviceReference(options?: Optional<k8s.ServiceReference>): k8s.ServiceReference;
/**
 * ServiceSpec describes the attributes that a user creates on a service.
 */
export declare function serviceSpec(options?: Optional<k8s.ServiceSpec>): k8s.ServiceSpec;
/**
 * ServiceStatus represents the current status of a service.
 */
export declare function serviceStatus(options?: Optional<k8s.ServiceStatus>): k8s.ServiceStatus;
/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export declare function sessionAffinityConfig(options?: Optional<k8s.SessionAffinityConfig>): k8s.SessionAffinityConfig;
/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export declare function statefulSet(options?: Optional<k8s.StatefulSet>): k8s.StatefulSet;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export declare function statefulSetCondition(options?: Optional<k8s.StatefulSetCondition>): k8s.StatefulSetCondition;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
export declare function statefulSetList(options?: Optional<k8s.StatefulSetList>): k8s.StatefulSetList;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export declare function statefulSetSpec(options?: Optional<k8s.StatefulSetSpec>): k8s.StatefulSetSpec;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export declare function statefulSetStatus(options?: Optional<k8s.StatefulSetStatus>): k8s.StatefulSetStatus;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export declare function statefulSetUpdateStrategy(options?: Optional<k8s.StatefulSetUpdateStrategy>): k8s.StatefulSetUpdateStrategy;
/**
 * Status is a return value for calls that don't return other objects.
 */
export declare function status(options?: Optional<k8s.Status>): k8s.Status;
/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export declare function statusCause(options?: Optional<k8s.StatusCause>): k8s.StatusCause;
/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export declare function statusDetails(options?: Optional<k8s.StatusDetails>): k8s.StatusDetails;
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export declare function storageClass(options?: Optional<k8s.StorageClass>): k8s.StorageClass;
/**
 * StorageClassList is a collection of storage classes.
 */
export declare function storageClassList(options?: Optional<k8s.StorageClassList>): k8s.StorageClassList;
/**
 * Represents a StorageOS persistent volume resource.
 */
export declare function storageOSPersistentVolumeSource(options?: Optional<k8s.StorageOSPersistentVolumeSource>): k8s.StorageOSPersistentVolumeSource;
/**
 * Represents a StorageOS persistent volume resource.
 */
export declare function storageOSVolumeSource(options?: Optional<k8s.StorageOSVolumeSource>): k8s.StorageOSVolumeSource;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export declare function subject(options?: Optional<k8s.Subject>): k8s.Subject;
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export declare function subjectAccessReview(options?: Optional<k8s.SubjectAccessReview>): k8s.SubjectAccessReview;
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export declare function subjectAccessReviewSpec(options?: Optional<k8s.SubjectAccessReviewSpec>): k8s.SubjectAccessReviewSpec;
/**
 * SubjectAccessReviewStatus
 */
export declare function subjectAccessReviewStatus(options?: Optional<k8s.SubjectAccessReviewStatus>): k8s.SubjectAccessReviewStatus;
/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export declare function subjectRulesReviewStatus(options?: Optional<k8s.SubjectRulesReviewStatus>): k8s.SubjectRulesReviewStatus;
/**
 * Sysctl defines a kernel parameter to be set
 */
export declare function sysctl(options?: Optional<k8s.Sysctl>): k8s.Sysctl;
/**
 * TCPSocketAction describes an action based on opening a socket
 */
export declare function tCPSocketAction(options?: Optional<k8s.TCPSocketAction>): k8s.TCPSocketAction;
/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export declare function taint(options?: Optional<k8s.Taint>): k8s.Taint;
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export declare function tokenReview(options?: Optional<k8s.TokenReview>): k8s.TokenReview;
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export declare function tokenReviewSpec(options?: Optional<k8s.TokenReviewSpec>): k8s.TokenReviewSpec;
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export declare function tokenReviewStatus(options?: Optional<k8s.TokenReviewStatus>): k8s.TokenReviewStatus;
/**
 * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 */
export declare function toleration(options?: Optional<k8s.Toleration>): k8s.Toleration;
/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export declare function topologySelectorLabelRequirement(options?: Optional<k8s.TopologySelectorLabelRequirement>): k8s.TopologySelectorLabelRequirement;
/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
export declare function topologySelectorTerm(options?: Optional<k8s.TopologySelectorTerm>): k8s.TopologySelectorTerm;
/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export declare function typedLocalObjectReference(options?: Optional<k8s.TypedLocalObjectReference>): k8s.TypedLocalObjectReference;
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export declare function userInfo(options?: Optional<k8s.UserInfo>): k8s.UserInfo;
/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export declare function volume(options?: Optional<k8s.Volume>): k8s.Volume;
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export declare function volumeAttachment(options?: Optional<k8s.VolumeAttachment>): k8s.VolumeAttachment;
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export declare function volumeAttachmentList(options?: Optional<k8s.VolumeAttachmentList>): k8s.VolumeAttachmentList;
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export declare function volumeAttachmentSource(options?: Optional<k8s.VolumeAttachmentSource>): k8s.VolumeAttachmentSource;
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export declare function volumeAttachmentSpec(options?: Optional<k8s.VolumeAttachmentSpec>): k8s.VolumeAttachmentSpec;
/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export declare function volumeAttachmentStatus(options?: Optional<k8s.VolumeAttachmentStatus>): k8s.VolumeAttachmentStatus;
/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export declare function volumeDevice(options?: Optional<k8s.VolumeDevice>): k8s.VolumeDevice;
/**
 * VolumeError captures an error encountered during a volume operation.
 */
export declare function volumeError(options?: Optional<k8s.VolumeError>): k8s.VolumeError;
/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
export declare function volumeMount(options?: Optional<k8s.VolumeMount>): k8s.VolumeMount;
/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export declare function volumeNodeAffinity(options?: Optional<k8s.VolumeNodeAffinity>): k8s.VolumeNodeAffinity;
/**
 * Projection that may be projected along with other supported volume types
 */
export declare function volumeProjection(options?: Optional<k8s.VolumeProjection>): k8s.VolumeProjection;
/**
 * Represents a vSphere volume resource.
 */
export declare function vsphereVirtualDiskVolumeSource(options?: Optional<k8s.VsphereVirtualDiskVolumeSource>): k8s.VsphereVirtualDiskVolumeSource;
/**
 * Event represents a single event to a watched resource.
 */
export declare function watchEvent(options?: Optional<k8s.WatchEvent>): k8s.WatchEvent;
/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export declare function weightedPodAffinityTerm(options?: Optional<k8s.WeightedPodAffinityTerm>): k8s.WeightedPodAffinityTerm;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export declare function aggregationRuleV1alpha1(options?: Optional<k8s.AggregationRuleV1alpha1>): k8s.AggregationRuleV1alpha1;
/**
 * AuditSink represents a cluster level audit sink
 */
export declare function auditSinkV1alpha1(options?: Optional<k8s.AuditSinkV1alpha1>): k8s.AuditSinkV1alpha1;
/**
 * AuditSinkList is a list of AuditSink items.
 */
export declare function auditSinkListV1alpha1(options?: Optional<k8s.AuditSinkListV1alpha1>): k8s.AuditSinkListV1alpha1;
/**
 * AuditSinkSpec holds the spec for the audit sink
 */
export declare function auditSinkSpecV1alpha1(options?: Optional<k8s.AuditSinkSpecV1alpha1>): k8s.AuditSinkSpecV1alpha1;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export declare function clusterRoleV1alpha1(options?: Optional<k8s.ClusterRoleV1alpha1>): k8s.ClusterRoleV1alpha1;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export declare function clusterRoleBindingV1alpha1(options?: Optional<k8s.ClusterRoleBindingV1alpha1>): k8s.ClusterRoleBindingV1alpha1;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export declare function clusterRoleBindingListV1alpha1(options?: Optional<k8s.ClusterRoleBindingListV1alpha1>): k8s.ClusterRoleBindingListV1alpha1;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export declare function clusterRoleListV1alpha1(options?: Optional<k8s.ClusterRoleListV1alpha1>): k8s.ClusterRoleListV1alpha1;
/**
 * Initializer describes the name and the failure policy of an initializer, and what resources it applies to.
 */
export declare function initializerV1alpha1(options?: Optional<k8s.InitializerV1alpha1>): k8s.InitializerV1alpha1;
/**
 * InitializerConfiguration describes the configuration of initializers.
 */
export declare function initializerConfigurationV1alpha1(options?: Optional<k8s.InitializerConfigurationV1alpha1>): k8s.InitializerConfigurationV1alpha1;
/**
 * InitializerConfigurationList is a list of InitializerConfiguration.
 */
export declare function initializerConfigurationListV1alpha1(options?: Optional<k8s.InitializerConfigurationListV1alpha1>): k8s.InitializerConfigurationListV1alpha1;
/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 */
export declare function podPresetV1alpha1(options?: Optional<k8s.PodPresetV1alpha1>): k8s.PodPresetV1alpha1;
/**
 * PodPresetList is a list of PodPreset objects.
 */
export declare function podPresetListV1alpha1(options?: Optional<k8s.PodPresetListV1alpha1>): k8s.PodPresetListV1alpha1;
/**
 * PodPresetSpec is a description of a pod preset.
 */
export declare function podPresetSpecV1alpha1(options?: Optional<k8s.PodPresetSpecV1alpha1>): k8s.PodPresetSpecV1alpha1;
/**
 * Policy defines the configuration of how audit events are logged
 */
export declare function policyV1alpha1(options?: Optional<k8s.PolicyV1alpha1>): k8s.PolicyV1alpha1;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export declare function policyRuleV1alpha1(options?: Optional<k8s.PolicyRuleV1alpha1>): k8s.PolicyRuleV1alpha1;
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export declare function priorityClassV1alpha1(options?: Optional<k8s.PriorityClassV1alpha1>): k8s.PriorityClassV1alpha1;
/**
 * PriorityClassList is a collection of priority classes.
 */
export declare function priorityClassListV1alpha1(options?: Optional<k8s.PriorityClassListV1alpha1>): k8s.PriorityClassListV1alpha1;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export declare function roleV1alpha1(options?: Optional<k8s.RoleV1alpha1>): k8s.RoleV1alpha1;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export declare function roleBindingV1alpha1(options?: Optional<k8s.RoleBindingV1alpha1>): k8s.RoleBindingV1alpha1;
/**
 * RoleBindingList is a collection of RoleBindings
 */
export declare function roleBindingListV1alpha1(options?: Optional<k8s.RoleBindingListV1alpha1>): k8s.RoleBindingListV1alpha1;
/**
 * RoleList is a collection of Roles
 */
export declare function roleListV1alpha1(options?: Optional<k8s.RoleListV1alpha1>): k8s.RoleListV1alpha1;
/**
 * RoleRef contains information that points to the role being used
 */
export declare function roleRefV1alpha1(options?: Optional<k8s.RoleRefV1alpha1>): k8s.RoleRefV1alpha1;
/**
 * Rule is a tuple of APIGroups, APIVersion, and Resources.It is recommended to make sure that all the tuple expansions are valid.
 */
export declare function ruleV1alpha1(options?: Optional<k8s.RuleV1alpha1>): k8s.RuleV1alpha1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export declare function serviceReferenceV1alpha1(options?: Optional<k8s.ServiceReferenceV1alpha1>): k8s.ServiceReferenceV1alpha1;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export declare function subjectV1alpha1(options?: Optional<k8s.SubjectV1alpha1>): k8s.SubjectV1alpha1;
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export declare function volumeAttachmentV1alpha1(options?: Optional<k8s.VolumeAttachmentV1alpha1>): k8s.VolumeAttachmentV1alpha1;
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export declare function volumeAttachmentListV1alpha1(options?: Optional<k8s.VolumeAttachmentListV1alpha1>): k8s.VolumeAttachmentListV1alpha1;
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export declare function volumeAttachmentSourceV1alpha1(options?: Optional<k8s.VolumeAttachmentSourceV1alpha1>): k8s.VolumeAttachmentSourceV1alpha1;
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export declare function volumeAttachmentSpecV1alpha1(options?: Optional<k8s.VolumeAttachmentSpecV1alpha1>): k8s.VolumeAttachmentSpecV1alpha1;
/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export declare function volumeAttachmentStatusV1alpha1(options?: Optional<k8s.VolumeAttachmentStatusV1alpha1>): k8s.VolumeAttachmentStatusV1alpha1;
/**
 * VolumeError captures an error encountered during a volume operation.
 */
export declare function volumeErrorV1alpha1(options?: Optional<k8s.VolumeErrorV1alpha1>): k8s.VolumeErrorV1alpha1;
/**
 * Webhook holds the configuration of the webhook
 */
export declare function webhookV1alpha1(options?: Optional<k8s.WebhookV1alpha1>): k8s.WebhookV1alpha1;
/**
 * WebhookClientConfig contains the information to make a connection with the webhook
 */
export declare function webhookClientConfigV1alpha1(options?: Optional<k8s.WebhookClientConfigV1alpha1>): k8s.WebhookClientConfigV1alpha1;
/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
export declare function webhookThrottleConfigV1alpha1(options?: Optional<k8s.WebhookThrottleConfigV1alpha1>): k8s.WebhookThrottleConfigV1alpha1;
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export declare function aPIServiceV1beta1(options?: Optional<k8s.APIServiceV1beta1>): k8s.APIServiceV1beta1;
export declare function aPIServiceConditionV1beta1(options?: Optional<k8s.APIServiceConditionV1beta1>): k8s.APIServiceConditionV1beta1;
/**
 * APIServiceList is a list of APIService objects.
 */
export declare function aPIServiceListV1beta1(options?: Optional<k8s.APIServiceListV1beta1>): k8s.APIServiceListV1beta1;
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export declare function aPIServiceSpecV1beta1(options?: Optional<k8s.APIServiceSpecV1beta1>): k8s.APIServiceSpecV1beta1;
/**
 * APIServiceStatus contains derived information about an API server
 */
export declare function aPIServiceStatusV1beta1(options?: Optional<k8s.APIServiceStatusV1beta1>): k8s.APIServiceStatusV1beta1;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export declare function aggregationRuleV1beta1(options?: Optional<k8s.AggregationRuleV1beta1>): k8s.AggregationRuleV1beta1;
/**
 * Describes a certificate signing request
 */
export declare function certificateSigningRequestV1beta1(options?: Optional<k8s.CertificateSigningRequestV1beta1>): k8s.CertificateSigningRequestV1beta1;
export declare function certificateSigningRequestConditionV1beta1(options?: Optional<k8s.CertificateSigningRequestConditionV1beta1>): k8s.CertificateSigningRequestConditionV1beta1;
export declare function certificateSigningRequestListV1beta1(options?: Optional<k8s.CertificateSigningRequestListV1beta1>): k8s.CertificateSigningRequestListV1beta1;
/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 */
export declare function certificateSigningRequestSpecV1beta1(options?: Optional<k8s.CertificateSigningRequestSpecV1beta1>): k8s.CertificateSigningRequestSpecV1beta1;
export declare function certificateSigningRequestStatusV1beta1(options?: Optional<k8s.CertificateSigningRequestStatusV1beta1>): k8s.CertificateSigningRequestStatusV1beta1;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export declare function clusterRoleV1beta1(options?: Optional<k8s.ClusterRoleV1beta1>): k8s.ClusterRoleV1beta1;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export declare function clusterRoleBindingV1beta1(options?: Optional<k8s.ClusterRoleBindingV1beta1>): k8s.ClusterRoleBindingV1beta1;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export declare function clusterRoleBindingListV1beta1(options?: Optional<k8s.ClusterRoleBindingListV1beta1>): k8s.ClusterRoleBindingListV1beta1;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export declare function clusterRoleListV1beta1(options?: Optional<k8s.ClusterRoleListV1beta1>): k8s.ClusterRoleListV1beta1;
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export declare function controllerRevisionV1beta1(options?: Optional<k8s.ControllerRevisionV1beta1>): k8s.ControllerRevisionV1beta1;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export declare function controllerRevisionListV1beta1(options?: Optional<k8s.ControllerRevisionListV1beta1>): k8s.ControllerRevisionListV1beta1;
/**
 * CronJob represents the configuration of a single cron job.
 */
export declare function cronJobV1beta1(options?: Optional<k8s.CronJobV1beta1>): k8s.CronJobV1beta1;
/**
 * CronJobList is a collection of cron jobs.
 */
export declare function cronJobListV1beta1(options?: Optional<k8s.CronJobListV1beta1>): k8s.CronJobListV1beta1;
/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export declare function cronJobSpecV1beta1(options?: Optional<k8s.CronJobSpecV1beta1>): k8s.CronJobSpecV1beta1;
/**
 * CronJobStatus represents the current state of a cron job.
 */
export declare function cronJobStatusV1beta1(options?: Optional<k8s.CronJobStatusV1beta1>): k8s.CronJobStatusV1beta1;
/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
export declare function customResourceColumnDefinitionV1beta1(options?: Optional<k8s.CustomResourceColumnDefinitionV1beta1>): k8s.CustomResourceColumnDefinitionV1beta1;
/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export declare function customResourceConversionV1beta1(options?: Optional<k8s.CustomResourceConversionV1beta1>): k8s.CustomResourceConversionV1beta1;
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
export declare function customResourceDefinitionV1beta1(options?: Optional<k8s.CustomResourceDefinitionV1beta1>): k8s.CustomResourceDefinitionV1beta1;
/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export declare function customResourceDefinitionConditionV1beta1(options?: Optional<k8s.CustomResourceDefinitionConditionV1beta1>): k8s.CustomResourceDefinitionConditionV1beta1;
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export declare function customResourceDefinitionListV1beta1(options?: Optional<k8s.CustomResourceDefinitionListV1beta1>): k8s.CustomResourceDefinitionListV1beta1;
/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export declare function customResourceDefinitionNamesV1beta1(options?: Optional<k8s.CustomResourceDefinitionNamesV1beta1>): k8s.CustomResourceDefinitionNamesV1beta1;
/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export declare function customResourceDefinitionSpecV1beta1(options?: Optional<k8s.CustomResourceDefinitionSpecV1beta1>): k8s.CustomResourceDefinitionSpecV1beta1;
/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export declare function customResourceDefinitionStatusV1beta1(options?: Optional<k8s.CustomResourceDefinitionStatusV1beta1>): k8s.CustomResourceDefinitionStatusV1beta1;
/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 */
export declare function customResourceDefinitionVersionV1beta1(options?: Optional<k8s.CustomResourceDefinitionVersionV1beta1>): k8s.CustomResourceDefinitionVersionV1beta1;
/**
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 */
export declare function customResourceSubresourceScaleV1beta1(options?: Optional<k8s.CustomResourceSubresourceScaleV1beta1>): k8s.CustomResourceSubresourceScaleV1beta1;
/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export declare function customResourceSubresourcesV1beta1(options?: Optional<k8s.CustomResourceSubresourcesV1beta1>): k8s.CustomResourceSubresourcesV1beta1;
/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export declare function customResourceValidationV1beta1(options?: Optional<k8s.CustomResourceValidationV1beta1>): k8s.CustomResourceValidationV1beta1;
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export declare function daemonSetV1beta1(options?: Optional<k8s.DaemonSetV1beta1>): k8s.DaemonSetV1beta1;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export declare function daemonSetConditionV1beta1(options?: Optional<k8s.DaemonSetConditionV1beta1>): k8s.DaemonSetConditionV1beta1;
/**
 * DaemonSetList is a collection of daemon sets.
 */
export declare function daemonSetListV1beta1(options?: Optional<k8s.DaemonSetListV1beta1>): k8s.DaemonSetListV1beta1;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export declare function daemonSetSpecV1beta1(options?: Optional<k8s.DaemonSetSpecV1beta1>): k8s.DaemonSetSpecV1beta1;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export declare function daemonSetStatusV1beta1(options?: Optional<k8s.DaemonSetStatusV1beta1>): k8s.DaemonSetStatusV1beta1;
export declare function daemonSetUpdateStrategyV1beta1(options?: Optional<k8s.DaemonSetUpdateStrategyV1beta1>): k8s.DaemonSetUpdateStrategyV1beta1;
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 */
export declare function eventV1beta1(options?: Optional<k8s.EventV1beta1>): k8s.EventV1beta1;
/**
 * EventList is a list of Event objects.
 */
export declare function eventListV1beta1(options?: Optional<k8s.EventListV1beta1>): k8s.EventListV1beta1;
/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export declare function eventSeriesV1beta1(options?: Optional<k8s.EventSeriesV1beta1>): k8s.EventSeriesV1beta1;
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export declare function evictionV1beta1(options?: Optional<k8s.EvictionV1beta1>): k8s.EvictionV1beta1;
/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export declare function externalDocumentationV1beta1(options?: Optional<k8s.ExternalDocumentationV1beta1>): k8s.ExternalDocumentationV1beta1;
/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 */
export declare function hTTPIngressPathV1beta1(options?: Optional<k8s.HTTPIngressPathV1beta1>): k8s.HTTPIngressPathV1beta1;
/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export declare function hTTPIngressRuleValueV1beta1(options?: Optional<k8s.HTTPIngressRuleValueV1beta1>): k8s.HTTPIngressRuleValueV1beta1;
/**
 * DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export declare function iPBlockV1beta1(options?: Optional<k8s.IPBlockV1beta1>): k8s.IPBlockV1beta1;
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
export declare function ingressV1beta1(options?: Optional<k8s.IngressV1beta1>): k8s.IngressV1beta1;
/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export declare function ingressBackendV1beta1(options?: Optional<k8s.IngressBackendV1beta1>): k8s.IngressBackendV1beta1;
/**
 * IngressList is a collection of Ingress.
 */
export declare function ingressListV1beta1(options?: Optional<k8s.IngressListV1beta1>): k8s.IngressListV1beta1;
/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
export declare function ingressRuleV1beta1(options?: Optional<k8s.IngressRuleV1beta1>): k8s.IngressRuleV1beta1;
/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
export declare function ingressSpecV1beta1(options?: Optional<k8s.IngressSpecV1beta1>): k8s.IngressSpecV1beta1;
/**
 * IngressStatus describe the current state of the Ingress.
 */
export declare function ingressStatusV1beta1(options?: Optional<k8s.IngressStatusV1beta1>): k8s.IngressStatusV1beta1;
/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export declare function ingressTLSV1beta1(options?: Optional<k8s.IngressTLSV1beta1>): k8s.IngressTLSV1beta1;
/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 */
export declare function jSONSchemaPropsV1beta1(options?: Optional<k8s.JSONSchemaPropsV1beta1>): k8s.JSONSchemaPropsV1beta1;
/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export declare function jobTemplateSpecV1beta1(options?: Optional<k8s.JobTemplateSpecV1beta1>): k8s.JobTemplateSpecV1beta1;
/**
 * Lease defines a lease concept.
 */
export declare function leaseV1beta1(options?: Optional<k8s.LeaseV1beta1>): k8s.LeaseV1beta1;
/**
 * LeaseList is a list of Lease objects.
 */
export declare function leaseListV1beta1(options?: Optional<k8s.LeaseListV1beta1>): k8s.LeaseListV1beta1;
/**
 * LeaseSpec is a specification of a Lease.
 */
export declare function leaseSpecV1beta1(options?: Optional<k8s.LeaseSpecV1beta1>): k8s.LeaseSpecV1beta1;
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export declare function localSubjectAccessReviewV1beta1(options?: Optional<k8s.LocalSubjectAccessReviewV1beta1>): k8s.LocalSubjectAccessReviewV1beta1;
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export declare function mutatingWebhookConfigurationV1beta1(options?: Optional<k8s.MutatingWebhookConfigurationV1beta1>): k8s.MutatingWebhookConfigurationV1beta1;
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export declare function mutatingWebhookConfigurationListV1beta1(options?: Optional<k8s.MutatingWebhookConfigurationListV1beta1>): k8s.MutatingWebhookConfigurationListV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export declare function networkPolicyV1beta1(options?: Optional<k8s.NetworkPolicyV1beta1>): k8s.NetworkPolicyV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export declare function networkPolicyEgressRuleV1beta1(options?: Optional<k8s.NetworkPolicyEgressRuleV1beta1>): k8s.NetworkPolicyEgressRuleV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 */
export declare function networkPolicyIngressRuleV1beta1(options?: Optional<k8s.NetworkPolicyIngressRuleV1beta1>): k8s.NetworkPolicyIngressRuleV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 */
export declare function networkPolicyListV1beta1(options?: Optional<k8s.NetworkPolicyListV1beta1>): k8s.NetworkPolicyListV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 */
export declare function networkPolicyPeerV1beta1(options?: Optional<k8s.NetworkPolicyPeerV1beta1>): k8s.NetworkPolicyPeerV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 */
export declare function networkPolicyPortV1beta1(options?: Optional<k8s.NetworkPolicyPortV1beta1>): k8s.NetworkPolicyPortV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
 */
export declare function networkPolicySpecV1beta1(options?: Optional<k8s.NetworkPolicySpecV1beta1>): k8s.NetworkPolicySpecV1beta1;
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export declare function nonResourceAttributesV1beta1(options?: Optional<k8s.NonResourceAttributesV1beta1>): k8s.NonResourceAttributesV1beta1;
/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export declare function nonResourceRuleV1beta1(options?: Optional<k8s.NonResourceRuleV1beta1>): k8s.NonResourceRuleV1beta1;
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export declare function podDisruptionBudgetV1beta1(options?: Optional<k8s.PodDisruptionBudgetV1beta1>): k8s.PodDisruptionBudgetV1beta1;
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export declare function podDisruptionBudgetListV1beta1(options?: Optional<k8s.PodDisruptionBudgetListV1beta1>): k8s.PodDisruptionBudgetListV1beta1;
/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export declare function podDisruptionBudgetSpecV1beta1(options?: Optional<k8s.PodDisruptionBudgetSpecV1beta1>): k8s.PodDisruptionBudgetSpecV1beta1;
/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
export declare function podDisruptionBudgetStatusV1beta1(options?: Optional<k8s.PodDisruptionBudgetStatusV1beta1>): k8s.PodDisruptionBudgetStatusV1beta1;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export declare function policyRuleV1beta1(options?: Optional<k8s.PolicyRuleV1beta1>): k8s.PolicyRuleV1beta1;
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export declare function priorityClassV1beta1(options?: Optional<k8s.PriorityClassV1beta1>): k8s.PriorityClassV1beta1;
/**
 * PriorityClassList is a collection of priority classes.
 */
export declare function priorityClassListV1beta1(options?: Optional<k8s.PriorityClassListV1beta1>): k8s.PriorityClassListV1beta1;
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export declare function replicaSetV1beta1(options?: Optional<k8s.ReplicaSetV1beta1>): k8s.ReplicaSetV1beta1;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export declare function replicaSetConditionV1beta1(options?: Optional<k8s.ReplicaSetConditionV1beta1>): k8s.ReplicaSetConditionV1beta1;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export declare function replicaSetListV1beta1(options?: Optional<k8s.ReplicaSetListV1beta1>): k8s.ReplicaSetListV1beta1;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export declare function replicaSetSpecV1beta1(options?: Optional<k8s.ReplicaSetSpecV1beta1>): k8s.ReplicaSetSpecV1beta1;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export declare function replicaSetStatusV1beta1(options?: Optional<k8s.ReplicaSetStatusV1beta1>): k8s.ReplicaSetStatusV1beta1;
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export declare function resourceAttributesV1beta1(options?: Optional<k8s.ResourceAttributesV1beta1>): k8s.ResourceAttributesV1beta1;
/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export declare function resourceRuleV1beta1(options?: Optional<k8s.ResourceRuleV1beta1>): k8s.ResourceRuleV1beta1;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export declare function roleV1beta1(options?: Optional<k8s.RoleV1beta1>): k8s.RoleV1beta1;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export declare function roleBindingV1beta1(options?: Optional<k8s.RoleBindingV1beta1>): k8s.RoleBindingV1beta1;
/**
 * RoleBindingList is a collection of RoleBindings
 */
export declare function roleBindingListV1beta1(options?: Optional<k8s.RoleBindingListV1beta1>): k8s.RoleBindingListV1beta1;
/**
 * RoleList is a collection of Roles
 */
export declare function roleListV1beta1(options?: Optional<k8s.RoleListV1beta1>): k8s.RoleListV1beta1;
/**
 * RoleRef contains information that points to the role being used
 */
export declare function roleRefV1beta1(options?: Optional<k8s.RoleRefV1beta1>): k8s.RoleRefV1beta1;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export declare function rollingUpdateDaemonSetV1beta1(options?: Optional<k8s.RollingUpdateDaemonSetV1beta1>): k8s.RollingUpdateDaemonSetV1beta1;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export declare function rollingUpdateStatefulSetStrategyV1beta1(options?: Optional<k8s.RollingUpdateStatefulSetStrategyV1beta1>): k8s.RollingUpdateStatefulSetStrategyV1beta1;
/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
export declare function ruleWithOperationsV1beta1(options?: Optional<k8s.RuleWithOperationsV1beta1>): k8s.RuleWithOperationsV1beta1;
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export declare function selfSubjectAccessReviewV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewV1beta1>): k8s.SelfSubjectAccessReviewV1beta1;
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export declare function selfSubjectAccessReviewSpecV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewSpecV1beta1>): k8s.SelfSubjectAccessReviewSpecV1beta1;
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export declare function selfSubjectRulesReviewV1beta1(options?: Optional<k8s.SelfSubjectRulesReviewV1beta1>): k8s.SelfSubjectRulesReviewV1beta1;
export declare function selfSubjectRulesReviewSpecV1beta1(options?: Optional<k8s.SelfSubjectRulesReviewSpecV1beta1>): k8s.SelfSubjectRulesReviewSpecV1beta1;
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export declare function statefulSetV1beta1(options?: Optional<k8s.StatefulSetV1beta1>): k8s.StatefulSetV1beta1;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export declare function statefulSetConditionV1beta1(options?: Optional<k8s.StatefulSetConditionV1beta1>): k8s.StatefulSetConditionV1beta1;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
export declare function statefulSetListV1beta1(options?: Optional<k8s.StatefulSetListV1beta1>): k8s.StatefulSetListV1beta1;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export declare function statefulSetSpecV1beta1(options?: Optional<k8s.StatefulSetSpecV1beta1>): k8s.StatefulSetSpecV1beta1;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export declare function statefulSetStatusV1beta1(options?: Optional<k8s.StatefulSetStatusV1beta1>): k8s.StatefulSetStatusV1beta1;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export declare function statefulSetUpdateStrategyV1beta1(options?: Optional<k8s.StatefulSetUpdateStrategyV1beta1>): k8s.StatefulSetUpdateStrategyV1beta1;
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export declare function storageClassV1beta1(options?: Optional<k8s.StorageClassV1beta1>): k8s.StorageClassV1beta1;
/**
 * StorageClassList is a collection of storage classes.
 */
export declare function storageClassListV1beta1(options?: Optional<k8s.StorageClassListV1beta1>): k8s.StorageClassListV1beta1;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export declare function subjectV1beta1(options?: Optional<k8s.SubjectV1beta1>): k8s.SubjectV1beta1;
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export declare function subjectAccessReviewV1beta1(options?: Optional<k8s.SubjectAccessReviewV1beta1>): k8s.SubjectAccessReviewV1beta1;
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export declare function subjectAccessReviewSpecV1beta1(options?: Optional<k8s.SubjectAccessReviewSpecV1beta1>): k8s.SubjectAccessReviewSpecV1beta1;
/**
 * SubjectAccessReviewStatus
 */
export declare function subjectAccessReviewStatusV1beta1(options?: Optional<k8s.SubjectAccessReviewStatusV1beta1>): k8s.SubjectAccessReviewStatusV1beta1;
/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export declare function subjectRulesReviewStatusV1beta1(options?: Optional<k8s.SubjectRulesReviewStatusV1beta1>): k8s.SubjectRulesReviewStatusV1beta1;
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export declare function tokenReviewV1beta1(options?: Optional<k8s.TokenReviewV1beta1>): k8s.TokenReviewV1beta1;
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export declare function tokenReviewSpecV1beta1(options?: Optional<k8s.TokenReviewSpecV1beta1>): k8s.TokenReviewSpecV1beta1;
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export declare function tokenReviewStatusV1beta1(options?: Optional<k8s.TokenReviewStatusV1beta1>): k8s.TokenReviewStatusV1beta1;
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export declare function userInfoV1beta1(options?: Optional<k8s.UserInfoV1beta1>): k8s.UserInfoV1beta1;
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
export declare function validatingWebhookConfigurationV1beta1(options?: Optional<k8s.ValidatingWebhookConfigurationV1beta1>): k8s.ValidatingWebhookConfigurationV1beta1;
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export declare function validatingWebhookConfigurationListV1beta1(options?: Optional<k8s.ValidatingWebhookConfigurationListV1beta1>): k8s.ValidatingWebhookConfigurationListV1beta1;
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export declare function volumeAttachmentV1beta1(options?: Optional<k8s.VolumeAttachmentV1beta1>): k8s.VolumeAttachmentV1beta1;
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export declare function volumeAttachmentListV1beta1(options?: Optional<k8s.VolumeAttachmentListV1beta1>): k8s.VolumeAttachmentListV1beta1;
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export declare function volumeAttachmentSourceV1beta1(options?: Optional<k8s.VolumeAttachmentSourceV1beta1>): k8s.VolumeAttachmentSourceV1beta1;
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export declare function volumeAttachmentSpecV1beta1(options?: Optional<k8s.VolumeAttachmentSpecV1beta1>): k8s.VolumeAttachmentSpecV1beta1;
/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export declare function volumeAttachmentStatusV1beta1(options?: Optional<k8s.VolumeAttachmentStatusV1beta1>): k8s.VolumeAttachmentStatusV1beta1;
/**
 * VolumeError captures an error encountered during a volume operation.
 */
export declare function volumeErrorV1beta1(options?: Optional<k8s.VolumeErrorV1beta1>): k8s.VolumeErrorV1beta1;
/**
 * Webhook describes an admission webhook and the resources and operations it applies to.
 */
export declare function webhookV1beta1(options?: Optional<k8s.WebhookV1beta1>): k8s.WebhookV1beta1;
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export declare function controllerRevisionV1beta2(options?: Optional<k8s.ControllerRevisionV1beta2>): k8s.ControllerRevisionV1beta2;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export declare function controllerRevisionListV1beta2(options?: Optional<k8s.ControllerRevisionListV1beta2>): k8s.ControllerRevisionListV1beta2;
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export declare function daemonSetV1beta2(options?: Optional<k8s.DaemonSetV1beta2>): k8s.DaemonSetV1beta2;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export declare function daemonSetConditionV1beta2(options?: Optional<k8s.DaemonSetConditionV1beta2>): k8s.DaemonSetConditionV1beta2;
/**
 * DaemonSetList is a collection of daemon sets.
 */
export declare function daemonSetListV1beta2(options?: Optional<k8s.DaemonSetListV1beta2>): k8s.DaemonSetListV1beta2;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export declare function daemonSetSpecV1beta2(options?: Optional<k8s.DaemonSetSpecV1beta2>): k8s.DaemonSetSpecV1beta2;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export declare function daemonSetStatusV1beta2(options?: Optional<k8s.DaemonSetStatusV1beta2>): k8s.DaemonSetStatusV1beta2;
/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export declare function daemonSetUpdateStrategyV1beta2(options?: Optional<k8s.DaemonSetUpdateStrategyV1beta2>): k8s.DaemonSetUpdateStrategyV1beta2;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export declare function deploymentV1beta2(options?: Optional<k8s.DeploymentV1beta2>): k8s.DeploymentV1beta2;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export declare function deploymentConditionV1beta2(options?: Optional<k8s.DeploymentConditionV1beta2>): k8s.DeploymentConditionV1beta2;
/**
 * DeploymentList is a list of Deployments.
 */
export declare function deploymentListV1beta2(options?: Optional<k8s.DeploymentListV1beta2>): k8s.DeploymentListV1beta2;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export declare function deploymentSpecV1beta2(options?: Optional<k8s.DeploymentSpecV1beta2>): k8s.DeploymentSpecV1beta2;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export declare function deploymentStatusV1beta2(options?: Optional<k8s.DeploymentStatusV1beta2>): k8s.DeploymentStatusV1beta2;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export declare function deploymentStrategyV1beta2(options?: Optional<k8s.DeploymentStrategyV1beta2>): k8s.DeploymentStrategyV1beta2;
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export declare function replicaSetV1beta2(options?: Optional<k8s.ReplicaSetV1beta2>): k8s.ReplicaSetV1beta2;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export declare function replicaSetConditionV1beta2(options?: Optional<k8s.ReplicaSetConditionV1beta2>): k8s.ReplicaSetConditionV1beta2;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export declare function replicaSetListV1beta2(options?: Optional<k8s.ReplicaSetListV1beta2>): k8s.ReplicaSetListV1beta2;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export declare function replicaSetSpecV1beta2(options?: Optional<k8s.ReplicaSetSpecV1beta2>): k8s.ReplicaSetSpecV1beta2;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export declare function replicaSetStatusV1beta2(options?: Optional<k8s.ReplicaSetStatusV1beta2>): k8s.ReplicaSetStatusV1beta2;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export declare function rollingUpdateDaemonSetV1beta2(options?: Optional<k8s.RollingUpdateDaemonSetV1beta2>): k8s.RollingUpdateDaemonSetV1beta2;
/**
 * Spec to control the desired behavior of rolling update.
 */
export declare function rollingUpdateDeploymentV1beta2(options?: Optional<k8s.RollingUpdateDeploymentV1beta2>): k8s.RollingUpdateDeploymentV1beta2;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export declare function rollingUpdateStatefulSetStrategyV1beta2(options?: Optional<k8s.RollingUpdateStatefulSetStrategyV1beta2>): k8s.RollingUpdateStatefulSetStrategyV1beta2;
/**
 * Scale represents a scaling request for a resource.
 */
export declare function scaleV1beta2(options?: Optional<k8s.ScaleV1beta2>): k8s.ScaleV1beta2;
/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export declare function scaleSpecV1beta2(options?: Optional<k8s.ScaleSpecV1beta2>): k8s.ScaleSpecV1beta2;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export declare function scaleStatusV1beta2(options?: Optional<k8s.ScaleStatusV1beta2>): k8s.ScaleStatusV1beta2;
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export declare function statefulSetV1beta2(options?: Optional<k8s.StatefulSetV1beta2>): k8s.StatefulSetV1beta2;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export declare function statefulSetConditionV1beta2(options?: Optional<k8s.StatefulSetConditionV1beta2>): k8s.StatefulSetConditionV1beta2;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
export declare function statefulSetListV1beta2(options?: Optional<k8s.StatefulSetListV1beta2>): k8s.StatefulSetListV1beta2;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export declare function statefulSetSpecV1beta2(options?: Optional<k8s.StatefulSetSpecV1beta2>): k8s.StatefulSetSpecV1beta2;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export declare function statefulSetStatusV1beta2(options?: Optional<k8s.StatefulSetStatusV1beta2>): k8s.StatefulSetStatusV1beta2;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export declare function statefulSetUpdateStrategyV1beta2(options?: Optional<k8s.StatefulSetUpdateStrategyV1beta2>): k8s.StatefulSetUpdateStrategyV1beta2;
/**
 * CronJob represents the configuration of a single cron job.
 */
export declare function cronJobV2alpha1(options?: Optional<k8s.CronJobV2alpha1>): k8s.CronJobV2alpha1;
/**
 * CronJobList is a collection of cron jobs.
 */
export declare function cronJobListV2alpha1(options?: Optional<k8s.CronJobListV2alpha1>): k8s.CronJobListV2alpha1;
/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export declare function cronJobSpecV2alpha1(options?: Optional<k8s.CronJobSpecV2alpha1>): k8s.CronJobSpecV2alpha1;
/**
 * CronJobStatus represents the current state of a cron job.
 */
export declare function cronJobStatusV2alpha1(options?: Optional<k8s.CronJobStatusV2alpha1>): k8s.CronJobStatusV2alpha1;
/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export declare function jobTemplateSpecV2alpha1(options?: Optional<k8s.JobTemplateSpecV2alpha1>): k8s.JobTemplateSpecV2alpha1;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export declare function crossVersionObjectReferenceV2beta1(options?: Optional<k8s.CrossVersionObjectReferenceV2beta1>): k8s.CrossVersionObjectReferenceV2beta1;
/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export declare function externalMetricSourceV2beta1(options?: Optional<k8s.ExternalMetricSourceV2beta1>): k8s.ExternalMetricSourceV2beta1;
/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export declare function externalMetricStatusV2beta1(options?: Optional<k8s.ExternalMetricStatusV2beta1>): k8s.ExternalMetricStatusV2beta1;
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export declare function horizontalPodAutoscalerV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerV2beta1>): k8s.HorizontalPodAutoscalerV2beta1;
/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export declare function horizontalPodAutoscalerConditionV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerConditionV2beta1>): k8s.HorizontalPodAutoscalerConditionV2beta1;
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export declare function horizontalPodAutoscalerListV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerListV2beta1>): k8s.HorizontalPodAutoscalerListV2beta1;
/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export declare function horizontalPodAutoscalerSpecV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerSpecV2beta1>): k8s.HorizontalPodAutoscalerSpecV2beta1;
/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export declare function horizontalPodAutoscalerStatusV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerStatusV2beta1>): k8s.HorizontalPodAutoscalerStatusV2beta1;
/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export declare function metricSpecV2beta1(options?: Optional<k8s.MetricSpecV2beta1>): k8s.MetricSpecV2beta1;
/**
 * MetricStatus describes the last-read state of a single metric.
 */
export declare function metricStatusV2beta1(options?: Optional<k8s.MetricStatusV2beta1>): k8s.MetricStatusV2beta1;
/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export declare function objectMetricSourceV2beta1(options?: Optional<k8s.ObjectMetricSourceV2beta1>): k8s.ObjectMetricSourceV2beta1;
/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export declare function objectMetricStatusV2beta1(options?: Optional<k8s.ObjectMetricStatusV2beta1>): k8s.ObjectMetricStatusV2beta1;
/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export declare function podsMetricSourceV2beta1(options?: Optional<k8s.PodsMetricSourceV2beta1>): k8s.PodsMetricSourceV2beta1;
/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export declare function podsMetricStatusV2beta1(options?: Optional<k8s.PodsMetricStatusV2beta1>): k8s.PodsMetricStatusV2beta1;
/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export declare function resourceMetricSourceV2beta1(options?: Optional<k8s.ResourceMetricSourceV2beta1>): k8s.ResourceMetricSourceV2beta1;
/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export declare function resourceMetricStatusV2beta1(options?: Optional<k8s.ResourceMetricStatusV2beta1>): k8s.ResourceMetricStatusV2beta1;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export declare function crossVersionObjectReferenceV2beta2(options?: Optional<k8s.CrossVersionObjectReferenceV2beta2>): k8s.CrossVersionObjectReferenceV2beta2;
/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export declare function externalMetricSourceV2beta2(options?: Optional<k8s.ExternalMetricSourceV2beta2>): k8s.ExternalMetricSourceV2beta2;
/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export declare function externalMetricStatusV2beta2(options?: Optional<k8s.ExternalMetricStatusV2beta2>): k8s.ExternalMetricStatusV2beta2;
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export declare function horizontalPodAutoscalerV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerV2beta2>): k8s.HorizontalPodAutoscalerV2beta2;
/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export declare function horizontalPodAutoscalerConditionV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerConditionV2beta2>): k8s.HorizontalPodAutoscalerConditionV2beta2;
/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export declare function horizontalPodAutoscalerListV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerListV2beta2>): k8s.HorizontalPodAutoscalerListV2beta2;
/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export declare function horizontalPodAutoscalerSpecV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerSpecV2beta2>): k8s.HorizontalPodAutoscalerSpecV2beta2;
/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export declare function horizontalPodAutoscalerStatusV2beta2(options?: Optional<k8s.HorizontalPodAutoscalerStatusV2beta2>): k8s.HorizontalPodAutoscalerStatusV2beta2;
/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export declare function metricIdentifierV2beta2(options?: Optional<k8s.MetricIdentifierV2beta2>): k8s.MetricIdentifierV2beta2;
/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export declare function metricSpecV2beta2(options?: Optional<k8s.MetricSpecV2beta2>): k8s.MetricSpecV2beta2;
/**
 * MetricStatus describes the last-read state of a single metric.
 */
export declare function metricStatusV2beta2(options?: Optional<k8s.MetricStatusV2beta2>): k8s.MetricStatusV2beta2;
/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export declare function metricTargetV2beta2(options?: Optional<k8s.MetricTargetV2beta2>): k8s.MetricTargetV2beta2;
/**
 * MetricValueStatus holds the current value for a metric
 */
export declare function metricValueStatusV2beta2(options?: Optional<k8s.MetricValueStatusV2beta2>): k8s.MetricValueStatusV2beta2;
/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export declare function objectMetricSourceV2beta2(options?: Optional<k8s.ObjectMetricSourceV2beta2>): k8s.ObjectMetricSourceV2beta2;
/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export declare function objectMetricStatusV2beta2(options?: Optional<k8s.ObjectMetricStatusV2beta2>): k8s.ObjectMetricStatusV2beta2;
/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export declare function podsMetricSourceV2beta2(options?: Optional<k8s.PodsMetricSourceV2beta2>): k8s.PodsMetricSourceV2beta2;
/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export declare function podsMetricStatusV2beta2(options?: Optional<k8s.PodsMetricStatusV2beta2>): k8s.PodsMetricStatusV2beta2;
/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export declare function resourceMetricSourceV2beta2(options?: Optional<k8s.ResourceMetricSourceV2beta2>): k8s.ResourceMetricSourceV2beta2;
/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export declare function resourceMetricStatusV2beta2(options?: Optional<k8s.ResourceMetricStatusV2beta2>): k8s.ResourceMetricStatusV2beta2;
/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export declare function infoVersion(options?: Optional<k8s.InfoVersion>): k8s.InfoVersion;
