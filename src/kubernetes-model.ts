/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServiceReferenceAdmissionregistrationV1beta1 {
  /**
   * `name` is the name of the service. Required
   */
  name: string
  /**
   * `namespace` is the namespace of the service. Required
   */
  namespace: string
  /**
   * `path` is an optional URL path which will be sent in any request to this service.
   */
  path?: string
}

/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 */
export interface WebhookClientConfigAdmissionregistrationV1beta1 {
  /**
   * `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
   */
  caBundle?: string
  /**
   * `service` is a reference to the service for this webhook. Either `service` or `url` must be specified.
   * 
   * If the webhook is running within the cluster, then you should use `service`.
   * 
   * Port 443 will be used if it is open, otherwise it is an error.
   */
  service?: ServiceReferenceAdmissionregistrationV1beta1
  /**
   * `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
   * 
   * The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
   * 
   * Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
   * 
   * The scheme must be "https"; the URL must begin with "https://".
   * 
   * A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
   * 
   * Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
   */
  url?: string
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServiceReferenceApiextensionsV1beta1 {
  /**
   * `name` is the name of the service. Required
   */
  name: string
  /**
   * `namespace` is the namespace of the service. Required
   */
  namespace: string
  /**
   * `path` is an optional URL path which will be sent in any request to this service.
   */
  path?: string
}

/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook. It has the same field as admissionregistration.v1beta1.WebhookClientConfig.
 */
export interface WebhookClientConfigApiextensionsV1beta1 {
  /**
   * `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
   */
  caBundle?: string
  /**
   * `service` is a reference to the service for this webhook. Either `service` or `url` must be specified.
   * 
   * If the webhook is running within the cluster, then you should use `service`.
   * 
   * Port 443 will be used if it is open, otherwise it is an error.
   */
  service?: ServiceReferenceApiextensionsV1beta1
  /**
   * `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
   * 
   * The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
   * 
   * Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
   * 
   * The scheme must be "https"; the URL must begin with "https://".
   * 
   * A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
   * 
   * Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
   */
  url?: string
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServiceReferenceApiregistrationV1beta1 {
  /**
   * Name is the name of the service
   */
  name?: string
  /**
   * Namespace is the namespace of the service
   */
  namespace?: string
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export interface DeploymentAppsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the Deployment.
   */
  spec?: DeploymentSpecAppsV1beta1
  /**
   * Most recently observed status of the Deployment.
   */
  status?: DeploymentStatusAppsV1beta1
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export interface DeploymentConditionAppsV1beta1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * The last time this condition was updated.
   */
  lastUpdateTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of deployment condition.
   */
  type: string
}

/**
 * DeploymentList is a list of Deployments.
 */
export interface DeploymentListAppsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of Deployments.
   */
  items: DeploymentAppsV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata.
   */
  metadata?: ListMetaV1
}

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export interface DeploymentRollbackAppsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Required: This must match the Name of a deployment.
   */
  name: string
  /**
   * The config of this deployment rollback.
   */
  rollbackTo: RollbackConfigAppsV1beta1
  /**
   * The annotations to be updated to a deployment
   */
  updatedAnnotations?: Object
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export interface DeploymentSpecAppsV1beta1 {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number
  /**
   * Indicates that the deployment is paused.
   */
  paused?: boolean
  /**
   * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
   */
  progressDeadlineSeconds?: number
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   */
  replicas?: number
  /**
   * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 2.
   */
  revisionHistoryLimit?: number
  /**
   * DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done.
   */
  rollbackTo?: RollbackConfigAppsV1beta1
  /**
   * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment.
   */
  selector?: LabelSelectorV1
  /**
   * The deployment strategy to use to replace existing pods with new ones.
   */
  strategy?: DeploymentStrategyAppsV1beta1
  /**
   * Template describes the pods that will be created.
   */
  template: PodTemplateSpecV1
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export interface DeploymentStatusAppsV1beta1 {
  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
   */
  availableReplicas?: number
  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a deployment's current state.
   */
  conditions?: DeploymentConditionAppsV1beta1[]
  /**
   * The generation observed by the deployment controller.
   */
  observedGeneration?: number
  /**
   * Total number of ready pods targeted by this deployment.
   */
  readyReplicas?: number
  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   */
  replicas?: number
  /**
   * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
   */
  unavailableReplicas?: number
  /**
   * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
   */
  updatedReplicas?: number
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface DeploymentStrategyAppsV1beta1 {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  rollingUpdate?: RollingUpdateDeploymentAppsV1beta1
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   */
  type?: string
}

/**
 * DEPRECATED.
 */
export interface RollbackConfigAppsV1beta1 {
  /**
   * The revision to rollback to. If set to 0, rollback to the last revision.
   */
  revision?: number
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export interface RollingUpdateDeploymentAppsV1beta1 {
  /**
   * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
   */
  maxSurge?: Object
  /**
   * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
   */
  maxUnavailable?: Object
}

/**
 * Scale represents a scaling request for a resource.
 */
export interface ScaleAppsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
   */
  spec?: ScaleSpecAppsV1beta1
  /**
   * current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
   */
  status?: ScaleStatusAppsV1beta1
}

/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export interface ScaleSpecAppsV1beta1 {
  /**
   * desired number of instances for the scaled object.
   */
  replicas?: number
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export interface ScaleStatusAppsV1beta1 {
  /**
   * actual number of observed instances of the scaled object.
   */
  replicas: number
  /**
   * label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
   */
  selector?: Object
  /**
   * label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  targetSelector?: string
}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead.
 */
export interface AllowedFlexVolumeExtensionsV1beta1 {
  /**
   * driver is the name of the Flexvolume driver.
   */
  driver: string
}

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead.
 */
export interface AllowedHostPathExtensionsV1beta1 {
  /**
   * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.
   * 
   * Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
   */
  pathPrefix?: string
  /**
   * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
   */
  readOnly?: boolean
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export interface DeploymentExtensionsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the Deployment.
   */
  spec?: DeploymentSpecExtensionsV1beta1
  /**
   * Most recently observed status of the Deployment.
   */
  status?: DeploymentStatusExtensionsV1beta1
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export interface DeploymentConditionExtensionsV1beta1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * The last time this condition was updated.
   */
  lastUpdateTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of deployment condition.
   */
  type: string
}

/**
 * DeploymentList is a list of Deployments.
 */
export interface DeploymentListExtensionsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of Deployments.
   */
  items: DeploymentExtensionsV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata.
   */
  metadata?: ListMetaV1
}

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export interface DeploymentRollbackExtensionsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Required: This must match the Name of a deployment.
   */
  name: string
  /**
   * The config of this deployment rollback.
   */
  rollbackTo: RollbackConfigExtensionsV1beta1
  /**
   * The annotations to be updated to a deployment
   */
  updatedAnnotations?: Object
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export interface DeploymentSpecExtensionsV1beta1 {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number
  /**
   * Indicates that the deployment is paused and will not be processed by the deployment controller.
   */
  paused?: boolean
  /**
   * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. This is set to the max value of int32 (i.e. 2147483647) by default, which means "no deadline".
   */
  progressDeadlineSeconds?: number
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   */
  replicas?: number
  /**
   * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. This is set to the max value of int32 (i.e. 2147483647) by default, which means "retaining all old RelicaSets".
   */
  revisionHistoryLimit?: number
  /**
   * DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done.
   */
  rollbackTo?: RollbackConfigExtensionsV1beta1
  /**
   * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment.
   */
  selector?: LabelSelectorV1
  /**
   * The deployment strategy to use to replace existing pods with new ones.
   */
  strategy?: DeploymentStrategyExtensionsV1beta1
  /**
   * Template describes the pods that will be created.
   */
  template: PodTemplateSpecV1
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export interface DeploymentStatusExtensionsV1beta1 {
  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
   */
  availableReplicas?: number
  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a deployment's current state.
   */
  conditions?: DeploymentConditionExtensionsV1beta1[]
  /**
   * The generation observed by the deployment controller.
   */
  observedGeneration?: number
  /**
   * Total number of ready pods targeted by this deployment.
   */
  readyReplicas?: number
  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   */
  replicas?: number
  /**
   * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
   */
  unavailableReplicas?: number
  /**
   * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
   */
  updatedReplicas?: number
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface DeploymentStrategyExtensionsV1beta1 {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  rollingUpdate?: RollingUpdateDeploymentExtensionsV1beta1
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   */
  type?: string
}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 */
export interface FSGroupStrategyOptionsExtensionsV1beta1 {
  /**
   * ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: IDRangeExtensionsV1beta1[]
  /**
   * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
   */
  rule?: string
}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 */
export interface HostPortRangeExtensionsV1beta1 {
  /**
   * max is the end of the range, inclusive.
   */
  max: number
  /**
   * min is the start of the range, inclusive.
   */
  min: number
}

/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 */
export interface IDRangeExtensionsV1beta1 {
  /**
   * max is the end of the range, inclusive.
   */
  max: number
  /**
   * min is the start of the range, inclusive.
   */
  min: number
}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 */
export interface PodSecurityPolicyExtensionsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * spec defines the policy enforced.
   */
  spec?: PodSecurityPolicySpecExtensionsV1beta1
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
export interface PodSecurityPolicyListExtensionsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is a list of schema objects.
   */
  items: PodSecurityPolicyExtensionsV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 */
export interface PodSecurityPolicySpecExtensionsV1beta1 {
  /**
   * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
   */
  allowPrivilegeEscalation?: boolean
  /**
   * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
   */
  allowedCapabilities?: string[]
  /**
   * allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field.
   */
  allowedFlexVolumes?: AllowedFlexVolumeExtensionsV1beta1[]
  /**
   * allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used.
   */
  allowedHostPaths?: AllowedHostPathExtensionsV1beta1[]
  /**
   * AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
   */
  allowedProcMountTypes?: string[]
  /**
   * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.
   * 
   * Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
   */
  allowedUnsafeSysctls?: string[]
  /**
   * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
   */
  defaultAddCapabilities?: string[]
  /**
   * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
   */
  defaultAllowPrivilegeEscalation?: boolean
  /**
   * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.
   * 
   * Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
   */
  forbiddenSysctls?: string[]
  /**
   * fsGroup is the strategy that will dictate what fs group is used by the SecurityContext.
   */
  fsGroup: FSGroupStrategyOptionsExtensionsV1beta1
  /**
   * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
   */
  hostIPC?: boolean
  /**
   * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
   */
  hostNetwork?: boolean
  /**
   * hostPID determines if the policy allows the use of HostPID in the pod spec.
   */
  hostPID?: boolean
  /**
   * hostPorts determines which host port ranges are allowed to be exposed.
   */
  hostPorts?: HostPortRangeExtensionsV1beta1[]
  /**
   * privileged determines if a pod can request to be run as privileged.
   */
  privileged?: boolean
  /**
   * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
   */
  readOnlyRootFilesystem?: boolean
  /**
   * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
   */
  requiredDropCapabilities?: string[]
  /**
   * RunAsGroup is the strategy that will dictate the allowable RunAsGroup values that may be set. If this field is omitted, the pod's RunAsGroup can take any value. This field requires the RunAsGroup feature gate to be enabled.
   */
  runAsGroup?: RunAsGroupStrategyOptionsExtensionsV1beta1
  /**
   * runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set.
   */
  runAsUser: RunAsUserStrategyOptionsExtensionsV1beta1
  /**
   * seLinux is the strategy that will dictate the allowable labels that may be set.
   */
  seLinux: SELinuxStrategyOptionsExtensionsV1beta1
  /**
   * supplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext.
   */
  supplementalGroups: SupplementalGroupsStrategyOptionsExtensionsV1beta1
  /**
   * volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
   */
  volumes?: string[]
}

/**
 * DEPRECATED.
 */
export interface RollbackConfigExtensionsV1beta1 {
  /**
   * The revision to rollback to. If set to 0, rollback to the last revision.
   */
  revision?: number
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export interface RollingUpdateDeploymentExtensionsV1beta1 {
  /**
   * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. By default, a value of 1 is used. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
   */
  maxSurge?: Object
  /**
   * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. By default, a fixed value of 1 is used. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
   */
  maxUnavailable?: Object
}

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsGroupStrategyOptions from policy API Group instead.
 */
export interface RunAsGroupStrategyOptionsExtensionsV1beta1 {
  /**
   * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: IDRangeExtensionsV1beta1[]
  /**
   * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
   */
  rule: string
}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 */
export interface RunAsUserStrategyOptionsExtensionsV1beta1 {
  /**
   * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: IDRangeExtensionsV1beta1[]
  /**
   * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
   */
  rule: string
}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
export interface SELinuxStrategyOptionsExtensionsV1beta1 {
  /**
   * rule is the strategy that will dictate the allowable labels that may be set.
   */
  rule: string
  /**
   * seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
   */
  seLinuxOptions?: SELinuxOptionsV1
}

/**
 * represents a scaling request for a resource.
 */
export interface ScaleExtensionsV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
   */
  spec?: ScaleSpecExtensionsV1beta1
  /**
   * current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
   */
  status?: ScaleStatusExtensionsV1beta1
}

/**
 * describes the attributes of a scale subresource
 */
export interface ScaleSpecExtensionsV1beta1 {
  /**
   * desired number of instances for the scaled object.
   */
  replicas?: number
}

/**
 * represents the current status of a scale subresource.
 */
export interface ScaleStatusExtensionsV1beta1 {
  /**
   * actual number of observed instances of the scaled object.
   */
  replicas: number
  /**
   * label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
   */
  selector?: Object
  /**
   * label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  targetSelector?: string
}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 */
export interface SupplementalGroupsStrategyOptionsExtensionsV1beta1 {
  /**
   * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: IDRangeExtensionsV1beta1[]
  /**
   * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
   */
  rule?: string
}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export interface AllowedFlexVolumePolicyV1beta1 {
  /**
   * driver is the name of the Flexvolume driver.
   */
  driver: string
}

/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
export interface AllowedHostPathPolicyV1beta1 {
  /**
   * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.
   * 
   * Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
   */
  pathPrefix?: string
  /**
   * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
   */
  readOnly?: boolean
}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
export interface FSGroupStrategyOptionsPolicyV1beta1 {
  /**
   * ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: IDRangePolicyV1beta1[]
  /**
   * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
   */
  rule?: string
}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export interface HostPortRangePolicyV1beta1 {
  /**
   * max is the end of the range, inclusive.
   */
  max: number
  /**
   * min is the start of the range, inclusive.
   */
  min: number
}

/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
export interface IDRangePolicyV1beta1 {
  /**
   * max is the end of the range, inclusive.
   */
  max: number
  /**
   * min is the start of the range, inclusive.
   */
  min: number
}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
export interface PodSecurityPolicyPolicyV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * spec defines the policy enforced.
   */
  spec?: PodSecurityPolicySpecPolicyV1beta1
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
export interface PodSecurityPolicyListPolicyV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is a list of schema objects.
   */
  items: PodSecurityPolicyPolicyV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
export interface PodSecurityPolicySpecPolicyV1beta1 {
  /**
   * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
   */
  allowPrivilegeEscalation?: boolean
  /**
   * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
   */
  allowedCapabilities?: string[]
  /**
   * allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field.
   */
  allowedFlexVolumes?: AllowedFlexVolumePolicyV1beta1[]
  /**
   * allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used.
   */
  allowedHostPaths?: AllowedHostPathPolicyV1beta1[]
  /**
   * AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
   */
  allowedProcMountTypes?: string[]
  /**
   * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.
   * 
   * Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
   */
  allowedUnsafeSysctls?: string[]
  /**
   * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
   */
  defaultAddCapabilities?: string[]
  /**
   * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
   */
  defaultAllowPrivilegeEscalation?: boolean
  /**
   * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.
   * 
   * Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
   */
  forbiddenSysctls?: string[]
  /**
   * fsGroup is the strategy that will dictate what fs group is used by the SecurityContext.
   */
  fsGroup: FSGroupStrategyOptionsPolicyV1beta1
  /**
   * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
   */
  hostIPC?: boolean
  /**
   * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
   */
  hostNetwork?: boolean
  /**
   * hostPID determines if the policy allows the use of HostPID in the pod spec.
   */
  hostPID?: boolean
  /**
   * hostPorts determines which host port ranges are allowed to be exposed.
   */
  hostPorts?: HostPortRangePolicyV1beta1[]
  /**
   * privileged determines if a pod can request to be run as privileged.
   */
  privileged?: boolean
  /**
   * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
   */
  readOnlyRootFilesystem?: boolean
  /**
   * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
   */
  requiredDropCapabilities?: string[]
  /**
   * RunAsGroup is the strategy that will dictate the allowable RunAsGroup values that may be set. If this field is omitted, the pod's RunAsGroup can take any value. This field requires the RunAsGroup feature gate to be enabled.
   */
  runAsGroup?: RunAsGroupStrategyOptionsPolicyV1beta1
  /**
   * runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set.
   */
  runAsUser: RunAsUserStrategyOptionsPolicyV1beta1
  /**
   * seLinux is the strategy that will dictate the allowable labels that may be set.
   */
  seLinux: SELinuxStrategyOptionsPolicyV1beta1
  /**
   * supplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext.
   */
  supplementalGroups: SupplementalGroupsStrategyOptionsPolicyV1beta1
  /**
   * volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
   */
  volumes?: string[]
}

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export interface RunAsGroupStrategyOptionsPolicyV1beta1 {
  /**
   * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: IDRangePolicyV1beta1[]
  /**
   * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
   */
  rule: string
}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export interface RunAsUserStrategyOptionsPolicyV1beta1 {
  /**
   * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: IDRangePolicyV1beta1[]
  /**
   * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
   */
  rule: string
}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export interface SELinuxStrategyOptionsPolicyV1beta1 {
  /**
   * rule is the strategy that will dictate the allowable labels that may be set.
   */
  rule: string
  /**
   * seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
   */
  seLinuxOptions?: SELinuxOptionsV1
}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export interface SupplementalGroupsStrategyOptionsPolicyV1beta1 {
  /**
   * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: IDRangePolicyV1beta1[]
  /**
   * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
   */
  rule?: string
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
export interface RawExtensionRuntime {
  /**
   * Raw is the underlying serialization of this object.
   */
  Raw: string
}

/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
export interface APIGroupV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * name is the name of the group.
   */
  name: string
  /**
   * preferredVersion is the version preferred by the API server, which probably is the storage version.
   */
  preferredVersion?: GroupVersionForDiscoveryV1
  /**
   * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
   */
  serverAddressByClientCIDRs?: ServerAddressByClientCIDRV1[]
  /**
   * versions are the versions supported in this group.
   */
  versions: GroupVersionForDiscoveryV1[]
}

/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
export interface APIGroupListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * groups is a list of APIGroup.
   */
  groups: APIGroupV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
}

/**
 * APIResource specifies the name of a resource and whether it is namespaced.
 */
export interface APIResourceV1 {
  /**
   * categories is a list of the grouped resources this resource belongs to (e.g. 'all')
   */
  categories?: string[]
  /**
   * group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".
   */
  group?: string
  /**
   * kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
   */
  kind: string
  /**
   * name is the plural name of the resource.
   */
  name: string
  /**
   * namespaced indicates if a resource is namespaced or not.
   */
  namespaced: boolean
  /**
   * shortNames is a list of suggested short names of the resource.
   */
  shortNames?: string[]
  /**
   * singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.
   */
  singularName: string
  /**
   * verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)
   */
  verbs: string[]
  /**
   * version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)".
   */
  version?: string
}

/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 */
export interface APIResourceListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * groupVersion is the group and version this APIResourceList is for.
   */
  groupVersion: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * resources contains the name of the resources and if they are namespaced.
   */
  resources: APIResourceV1[]
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export interface APIServiceV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec contains information for locating and communicating with a server
   */
  spec?: APIServiceSpecV1
  /**
   * Status contains derived information about an API server
   */
  status?: APIServiceStatusV1
}

export interface APIServiceConditionV1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string
  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status is the status of the condition. Can be True, False, Unknown.
   */
  status: string
  /**
   * Type is the type of the condition.
   */
  type: string
}

/**
 * APIServiceList is a list of APIService objects.
 */
export interface APIServiceListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  items: APIServiceV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export interface APIServiceSpecV1 {
  /**
   * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
   */
  caBundle?: string
  /**
   * Group is the API group name this server hosts
   */
  group?: string
  /**
   * GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
   */
  groupPriorityMinimum: number
  /**
   * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
   */
  insecureSkipTLSVerify?: boolean
  /**
   * Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled.
   */
  service: ServiceReferenceV1
  /**
   * Version is the API version this server hosts.  For example, "v1"
   */
  version?: string
  /**
   * VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
   */
  versionPriority: number
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export interface APIServiceStatusV1 {
  /**
   * Current service state of apiService.
   */
  conditions?: APIServiceConditionV1[]
}

/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
export interface APIVersionsV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
   */
  serverAddressByClientCIDRs: ServerAddressByClientCIDRV1[]
  /**
   * versions are the api versions that are available.
   */
  versions: string[]
}

/**
 * Represents a Persistent Disk resource in AWS.
 * 
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export interface AWSElasticBlockStoreVolumeSourceV1 {
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  fsType?: string
  /**
   * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
   */
  partition?: number
  /**
   * Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  readOnly?: boolean
  /**
   * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  volumeID: string
}

/**
 * Affinity is a group of affinity scheduling rules.
 */
export interface AffinityV1 {
  /**
   * Describes node affinity scheduling rules for the pod.
   */
  nodeAffinity?: NodeAffinityV1
  /**
   * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAffinity?: PodAffinityV1
  /**
   * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAntiAffinity?: PodAntiAffinityV1
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export interface AggregationRuleV1 {
  /**
   * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
   */
  clusterRoleSelectors?: LabelSelectorV1[]
}

/**
 * AttachedVolume describes a volume attached to a node
 */
export interface AttachedVolumeV1 {
  /**
   * DevicePath represents the device path where the volume should be available
   */
  devicePath: string
  /**
   * Name of the attached volume
   */
  name: string
}

/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
export interface AzureDiskVolumeSourceV1 {
  /**
   * Host Caching mode: None, Read Only, Read Write.
   */
  cachingMode?: string
  /**
   * The Name of the data disk in the blob storage
   */
  diskName: string
  /**
   * The URI the data disk in the blob storage
   */
  diskURI: string
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string
  /**
   * Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
   */
  kind?: string
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export interface AzureFilePersistentVolumeSourceV1 {
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * the name of secret that contains Azure Storage Account Name and Key
   */
  secretName: string
  /**
   * the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
   */
  secretNamespace?: string
  /**
   * Share Name
   */
  shareName: string
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export interface AzureFileVolumeSourceV1 {
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * the name of secret that contains Azure Storage Account Name and Key
   */
  secretName: string
  /**
   * Share Name
   */
  shareName: string
}

/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 */
export interface BindingV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * The target object that you want to bind to the standard object.
   */
  target: ObjectReferenceV1
}

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
export interface CSIPersistentVolumeSourceV1 {
  /**
   * ControllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
   */
  controllerPublishSecretRef?: SecretReferenceV1
  /**
   * Driver is the name of the driver to use for this volume. Required.
   */
  driver: string
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
   */
  fsType?: string
  /**
   * NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
   */
  nodePublishSecretRef?: SecretReferenceV1
  /**
   * NodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
   */
  nodeStageSecretRef?: SecretReferenceV1
  /**
   * Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
   */
  readOnly?: boolean
  /**
   * Attributes of the volume to publish.
   */
  volumeAttributes?: Object
  /**
   * VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
   */
  volumeHandle: string
}

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export interface CapabilitiesV1 {
  /**
   * Added capabilities
   */
  add?: string[]
  /**
   * Removed capabilities
   */
  drop?: string[]
}

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export interface CephFSPersistentVolumeSourceV1 {
  /**
   * Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  monitors: string[]
  /**
   * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
   */
  path?: string
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  readOnly?: boolean
  /**
   * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  secretFile?: string
  /**
   * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  secretRef?: SecretReferenceV1
  /**
   * Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  user?: string
}

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export interface CephFSVolumeSourceV1 {
  /**
   * Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  monitors: string[]
  /**
   * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
   */
  path?: string
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  readOnly?: boolean
  /**
   * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  secretFile?: string
  /**
   * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  secretRef?: LocalObjectReferenceV1
  /**
   * Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  user?: string
}

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export interface CinderPersistentVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  fsType?: string
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  readOnly?: boolean
  /**
   * Optional: points to a secret object containing parameters used to connect to OpenStack.
   */
  secretRef?: SecretReferenceV1
  /**
   * volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  volumeID: string
}

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export interface CinderVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  fsType?: string
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  readOnly?: boolean
  /**
   * Optional: points to a secret object containing parameters used to connect to OpenStack.
   */
  secretRef?: LocalObjectReferenceV1
  /**
   * volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  volumeID: string
}

/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export interface ClientIPConfigV1 {
  /**
   * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
   */
  timeoutSeconds?: number
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export interface ClusterRoleV1 {
  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
   */
  aggregationRule?: AggregationRuleV1
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Rules holds all the PolicyRules for this ClusterRole
   */
  rules: PolicyRuleV1[]
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export interface ClusterRoleBindingV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
   */
  roleRef: RoleRefV1
  /**
   * Subjects holds references to the objects the role applies to.
   */
  subjects?: SubjectV1[]
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export interface ClusterRoleBindingListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of ClusterRoleBindings
   */
  items: ClusterRoleBindingV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export interface ClusterRoleListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of ClusterRoles
   */
  items: ClusterRoleV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * Information about the condition of a component.
 */
export interface ComponentConditionV1 {
  /**
   * Condition error code for a component. For example, a health check error code.
   */
  error?: string
  /**
   * Message about the condition for a component. For example, information about a health check.
   */
  message?: string
  /**
   * Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".
   */
  status: string
  /**
   * Type of condition for a component. Valid value: "Healthy"
   */
  type: string
}

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 */
export interface ComponentStatusV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of component conditions observed
   */
  conditions?: ComponentConditionV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
}

/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 */
export interface ComponentStatusListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of ComponentStatus objects.
   */
  items: ComponentStatusV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * ConfigMap holds configuration data for pods to consume.
 */
export interface ConfigMapV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.
   */
  binaryData?: Object
  /**
   * Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
   */
  data?: Object
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
}

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 * 
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export interface ConfigMapEnvSourceV1 {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
  /**
   * Specify whether the ConfigMap must be defined
   */
  optional?: boolean
}

/**
 * Selects a key from a ConfigMap.
 */
export interface ConfigMapKeySelectorV1 {
  /**
   * The key to select.
   */
  key: string
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
  /**
   * Specify whether the ConfigMap or it's key must be defined
   */
  optional?: boolean
}

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export interface ConfigMapListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of ConfigMaps.
   */
  items: ConfigMapV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 */
export interface ConfigMapNodeConfigSourceV1 {
  /**
   * KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
   */
  kubeletConfigKey: string
  /**
   * Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
   */
  name: string
  /**
   * Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
   */
  namespace: string
  /**
   * ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
   */
  resourceVersion?: string
  /**
   * UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
   */
  uid?: string
}

/**
 * Adapts a ConfigMap into a projected volume.
 * 
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export interface ConfigMapProjectionV1 {
  /**
   * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
   */
  items?: KeyToPathV1[]
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
  /**
   * Specify whether the ConfigMap or it's keys must be defined
   */
  optional?: boolean
}

/**
 * Adapts a ConfigMap into a volume.
 * 
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export interface ConfigMapVolumeSourceV1 {
  /**
   * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   */
  defaultMode?: number
  /**
   * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
   */
  items?: KeyToPathV1[]
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
  /**
   * Specify whether the ConfigMap or it's keys must be defined
   */
  optional?: boolean
}

/**
 * A single application container that you want to run within a pod.
 */
export interface ContainerV1 {
  /**
   * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
   */
  args?: string[]
  /**
   * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
   */
  command?: string[]
  /**
   * List of environment variables to set in the container. Cannot be updated.
   */
  env?: EnvVarV1[]
  /**
   * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
   */
  envFrom?: EnvFromSourceV1[]
  /**
   * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
   */
  image?: string
  /**
   * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
   */
  imagePullPolicy?: string
  /**
   * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
   */
  lifecycle?: LifecycleV1
  /**
   * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  livenessProbe?: ProbeV1
  /**
   * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
   */
  name: string
  /**
   * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
   */
  ports?: ContainerPortV1[]
  /**
   * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  readinessProbe?: ProbeV1
  /**
   * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
  resources?: ResourceRequirementsV1
  /**
   * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
   */
  securityContext?: SecurityContextV1
  /**
   * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
   */
  stdin?: boolean
  /**
   * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
   */
  stdinOnce?: boolean
  /**
   * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
   */
  terminationMessagePath?: string
  /**
   * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
   */
  terminationMessagePolicy?: string
  /**
   * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
   */
  tty?: boolean
  /**
   * volumeDevices is the list of block devices to be used by the container. This is a beta feature.
   */
  volumeDevices?: VolumeDeviceV1[]
  /**
   * Pod volumes to mount into the container's filesystem. Cannot be updated.
   */
  volumeMounts?: VolumeMountV1[]
  /**
   * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
   */
  workingDir?: string
}

/**
 * Describe a container image
 */
export interface ContainerImageV1 {
  /**
   * Names by which this image is known. e.g. ["k8s.gcr.io/hyperkube:v1.0.7", "dockerhub.io/google_containers/hyperkube:v1.0.7"]
   */
  names: string[]
  /**
   * The size of the image in bytes.
   */
  sizeBytes?: number
}

/**
 * ContainerPort represents a network port in a single container.
 */
export interface ContainerPortV1 {
  /**
   * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
   */
  containerPort: number
  /**
   * What host IP to bind the external port to.
   */
  hostIP?: string
  /**
   * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
   */
  hostPort?: number
  /**
   * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
   */
  name?: string
  /**
   * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
   */
  protocol?: string
}

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export interface ContainerStateV1 {
  /**
   * Details about a running container
   */
  running?: ContainerStateRunningV1
  /**
   * Details about a terminated container
   */
  terminated?: ContainerStateTerminatedV1
  /**
   * Details about a waiting container
   */
  waiting?: ContainerStateWaitingV1
}

/**
 * ContainerStateRunning is a running state of a container.
 */
export interface ContainerStateRunningV1 {
  /**
   * Time at which the container was last (re-)started
   */
  startedAt?: string
}

/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export interface ContainerStateTerminatedV1 {
  /**
   * Container's ID in the format 'docker://<container_id>'
   */
  containerID?: string
  /**
   * Exit status from the last termination of the container
   */
  exitCode: number
  /**
   * Time at which the container last terminated
   */
  finishedAt?: string
  /**
   * Message regarding the last termination of the container
   */
  message?: string
  /**
   * (brief) reason from the last termination of the container
   */
  reason?: string
  /**
   * Signal from the last termination of the container
   */
  signal?: number
  /**
   * Time at which previous execution of the container started
   */
  startedAt?: string
}

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export interface ContainerStateWaitingV1 {
  /**
   * Message regarding why the container is not yet running.
   */
  message?: string
  /**
   * (brief) reason the container is not yet running.
   */
  reason?: string
}

/**
 * ContainerStatus contains details for the current status of this container.
 */
export interface ContainerStatusV1 {
  /**
   * Container's ID in the format 'docker://<container_id>'.
   */
  containerID?: string
  /**
   * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
   */
  image: string
  /**
   * ImageID of the container's image.
   */
  imageID: string
  /**
   * Details about the container's last termination condition.
   */
  lastState?: ContainerStateV1
  /**
   * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
   */
  name: string
  /**
   * Specifies whether the container has passed its readiness probe.
   */
  ready: boolean
  /**
   * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
   */
  restartCount: number
  /**
   * Details about the container's current condition.
   */
  state?: ContainerStateV1
}

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export interface ControllerRevisionV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Data is the serialized representation of the state.
   */
  data?: RawExtensionRuntime
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Revision indicates the revision of the state represented by Data.
   */
  revision: number
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export interface ControllerRevisionListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of ControllerRevisions
   */
  items: ControllerRevisionV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export interface CrossVersionObjectReferenceV1 {
  /**
   * API version of the referent
   */
  apiVersion?: string
  /**
   * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds"
   */
  kind: string
  /**
   * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  name: string
}

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export interface DaemonEndpointV1 {
  /**
   * Port number of the given endpoint.
   */
  Port: number
}

/**
 * DaemonSet represents the configuration of a daemon set.
 */
export interface DaemonSetV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: DaemonSetSpecV1
  /**
   * The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: DaemonSetStatusV1
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export interface DaemonSetConditionV1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of DaemonSet condition.
   */
  type: string
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export interface DaemonSetListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * A list of daemon sets.
   */
  items: DaemonSetV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export interface DaemonSetSpecV1 {
  /**
   * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
   */
  minReadySeconds?: number
  /**
   * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
   */
  revisionHistoryLimit?: number
  /**
   * A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector: LabelSelectorV1
  /**
   * An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
   */
  template: PodTemplateSpecV1
  /**
   * An update strategy to replace existing DaemonSet pods with new pods.
   */
  updateStrategy?: DaemonSetUpdateStrategyV1
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export interface DaemonSetStatusV1 {
  /**
   * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a DaemonSet's current state.
   */
  conditions?: DaemonSetConditionV1[]
  /**
   * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  currentNumberScheduled: number
  /**
   * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  desiredNumberScheduled: number
  /**
   * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
   */
  numberAvailable?: number
  /**
   * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  numberMisscheduled: number
  /**
   * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready.
   */
  numberReady: number
  /**
   * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
   */
  numberUnavailable?: number
  /**
   * The most recent generation observed by the daemon set controller.
   */
  observedGeneration?: number
  /**
   * The total number of nodes that are running updated daemon pod
   */
  updatedNumberScheduled?: number
}

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface DaemonSetUpdateStrategyV1 {
  /**
   * Rolling update config params. Present only if type = "RollingUpdate".
   */
  rollingUpdate?: RollingUpdateDaemonSetV1
  /**
   * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
   */
  type?: string
}

/**
 * DeleteOptions may be provided when deleting an API object.
 */
export interface DeleteOptionsV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
   */
  dryRun?: string[]
  /**
   * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
   */
  gracePeriodSeconds?: number
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
   */
  orphanDependents?: boolean
  /**
   * Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.
   */
  preconditions?: PreconditionsV1
  /**
   * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
   */
  propagationPolicy?: string
}

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export interface DeploymentV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the Deployment.
   */
  spec?: DeploymentSpecV1
  /**
   * Most recently observed status of the Deployment.
   */
  status?: DeploymentStatusV1
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export interface DeploymentConditionV1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * The last time this condition was updated.
   */
  lastUpdateTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of deployment condition.
   */
  type: string
}

/**
 * DeploymentList is a list of Deployments.
 */
export interface DeploymentListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of Deployments.
   */
  items: DeploymentV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata.
   */
  metadata?: ListMetaV1
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export interface DeploymentSpecV1 {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number
  /**
   * Indicates that the deployment is paused.
   */
  paused?: boolean
  /**
   * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
   */
  progressDeadlineSeconds?: number
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   */
  replicas?: number
  /**
   * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
   */
  revisionHistoryLimit?: number
  /**
   * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
   */
  selector: LabelSelectorV1
  /**
   * The deployment strategy to use to replace existing pods with new ones.
   */
  strategy?: DeploymentStrategyV1
  /**
   * Template describes the pods that will be created.
   */
  template: PodTemplateSpecV1
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export interface DeploymentStatusV1 {
  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
   */
  availableReplicas?: number
  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a deployment's current state.
   */
  conditions?: DeploymentConditionV1[]
  /**
   * The generation observed by the deployment controller.
   */
  observedGeneration?: number
  /**
   * Total number of ready pods targeted by this deployment.
   */
  readyReplicas?: number
  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   */
  replicas?: number
  /**
   * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
   */
  unavailableReplicas?: number
  /**
   * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
   */
  updatedReplicas?: number
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface DeploymentStrategyV1 {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  rollingUpdate?: RollingUpdateDeploymentV1
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   */
  type?: string
}

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export interface DownwardAPIProjectionV1 {
  /**
   * Items is a list of DownwardAPIVolume file
   */
  items?: DownwardAPIVolumeFileV1[]
}

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
export interface DownwardAPIVolumeFileV1 {
  /**
   * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
   */
  fieldRef?: ObjectFieldSelectorV1
  /**
   * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   */
  mode?: number
  /**
   * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
   */
  path: string
  /**
   * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
   */
  resourceFieldRef?: ResourceFieldSelectorV1
}

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
export interface DownwardAPIVolumeSourceV1 {
  /**
   * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   */
  defaultMode?: number
  /**
   * Items is a list of downward API volume file
   */
  items?: DownwardAPIVolumeFileV1[]
}

/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 */
export interface EmptyDirVolumeSourceV1 {
  /**
   * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   */
  medium?: string
  /**
   * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
   */
  sizeLimit?: string
}

/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export interface EndpointAddressV1 {
  /**
   * The Hostname of this endpoint
   */
  hostname?: string
  /**
   * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready.
   */
  ip: string
  /**
   * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
   */
  nodeName?: string
  /**
   * Reference to object providing the endpoint.
   */
  targetRef?: ObjectReferenceV1
}

/**
 * EndpointPort is a tuple that describes a single port.
 */
export interface EndpointPortV1 {
  /**
   * The name of this port (corresponds to ServicePort.Name). Must be a DNS_LABEL. Optional only if one port is defined.
   */
  name?: string
  /**
   * The port number of the endpoint.
   */
  port: number
  /**
   * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
   */
  protocol?: string
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
export interface EndpointSubsetV1 {
  /**
   * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
   */
  addresses?: EndpointAddressV1[]
  /**
   * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
   */
  notReadyAddresses?: EndpointAddressV1[]
  /**
   * Port numbers available on the related IP addresses.
   */
  ports?: EndpointPortV1[]
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
export interface EndpointsV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
   */
  subsets?: EndpointSubsetV1[]
}

/**
 * EndpointsList is a list of endpoints.
 */
export interface EndpointsListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of endpoints.
   */
  items: EndpointsV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export interface EnvFromSourceV1 {
  /**
   * The ConfigMap to select from
   */
  configMapRef?: ConfigMapEnvSourceV1
  /**
   * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   */
  prefix?: string
  /**
   * The Secret to select from
   */
  secretRef?: SecretEnvSourceV1
}

/**
 * EnvVar represents an environment variable present in a Container.
 */
export interface EnvVarV1 {
  /**
   * Name of the environment variable. Must be a C_IDENTIFIER.
   */
  name: string
  /**
   * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
   */
  value?: string
  /**
   * Source for the environment variable's value. Cannot be used if value is not empty.
   */
  valueFrom?: EnvVarSourceV1
}

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface EnvVarSourceV1 {
  /**
   * Selects a key of a ConfigMap.
   */
  configMapKeyRef?: ConfigMapKeySelectorV1
  /**
   * Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP.
   */
  fieldRef?: ObjectFieldSelectorV1
  /**
   * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
   */
  resourceFieldRef?: ResourceFieldSelectorV1
  /**
   * Selects a key of a secret in the pod's namespace
   */
  secretKeyRef?: SecretKeySelectorV1
}

/**
 * Event is a report of an event somewhere in the cluster.
 */
export interface EventV1 {
  /**
   * What action was taken/failed regarding to the Regarding object.
   */
  action?: string
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * The number of times this event has occurred.
   */
  count?: number
  /**
   * Time when this Event was first observed.
   */
  eventTime?: string
  /**
   * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
   */
  firstTimestamp?: string
  /**
   * The object that this event is about.
   */
  involvedObject: ObjectReferenceV1
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * The time at which the most recent occurrence of this event was recorded.
   */
  lastTimestamp?: string
  /**
   * A human-readable description of the status of this operation.
   */
  message?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata: ObjectMetaV1
  /**
   * This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
   */
  reason?: string
  /**
   * Optional secondary object for more complex actions.
   */
  related?: ObjectReferenceV1
  /**
   * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
   */
  reportingComponent?: string
  /**
   * ID of the controller instance, e.g. `kubelet-xyzf`.
   */
  reportingInstance?: string
  /**
   * Data about the Event series this event represents or nil if it's a singleton Event.
   */
  series?: EventSeriesV1
  /**
   * The component reporting this event. Should be a short machine understandable string.
   */
  source?: EventSourceV1
  /**
   * Type of this event (Normal, Warning), new types could be added in the future
   */
  type?: string
}

/**
 * EventList is a list of events.
 */
export interface EventListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of events
   */
  items: EventV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export interface EventSeriesV1 {
  /**
   * Number of occurrences in this series up to the last heartbeat time
   */
  count?: number
  /**
   * Time of the last occurrence observed
   */
  lastObservedTime?: string
  /**
   * State of this Series: Ongoing or Finished
   */
  state?: string
}

/**
 * EventSource contains information for an event.
 */
export interface EventSourceV1 {
  /**
   * Component from which the event is generated.
   */
  component?: string
  /**
   * Node name on which the event is generated.
   */
  host?: string
}

/**
 * ExecAction describes a "run in container" action.
 */
export interface ExecActionV1 {
  /**
   * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
   */
  command?: string[]
}

/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 */
export interface FCVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string
  /**
   * Optional: FC target lun number
   */
  lun?: number
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * Optional: FC target worldwide names (WWNs)
   */
  targetWWNs?: string[]
  /**
   * Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
   */
  wwids?: string[]
}

/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
export interface FlexPersistentVolumeSourceV1 {
  /**
   * Driver is the name of the driver to use for this volume.
   */
  driver: string
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
   */
  fsType?: string
  /**
   * Optional: Extra command options if any.
   */
  options?: Object
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
   */
  secretRef?: SecretReferenceV1
}

/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
export interface FlexVolumeSourceV1 {
  /**
   * Driver is the name of the driver to use for this volume.
   */
  driver: string
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
   */
  fsType?: string
  /**
   * Optional: Extra command options if any.
   */
  options?: Object
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
   */
  secretRef?: LocalObjectReferenceV1
}

/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
export interface FlockerVolumeSourceV1 {
  /**
   * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
   */
  datasetName?: string
  /**
   * UUID of the dataset. This is unique identifier of a Flocker dataset
   */
  datasetUUID?: string
}

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 * 
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export interface GCEPersistentDiskVolumeSourceV1 {
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  fsType?: string
  /**
   * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  partition?: number
  /**
   * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  pdName: string
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  readOnly?: boolean
}

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 * 
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export interface GitRepoVolumeSourceV1 {
  /**
   * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
   */
  directory?: string
  /**
   * Repository URL
   */
  repository: string
  /**
   * Commit hash for the specified revision.
   */
  revision?: string
}

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export interface GlusterfsPersistentVolumeSourceV1 {
  /**
   * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
   */
  endpoints: string
  /**
   * EndpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
   */
  endpointsNamespace?: string
  /**
   * Path is the Glusterfs volume path. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
   */
  path: string
  /**
   * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
   */
  readOnly?: boolean
}

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export interface GlusterfsVolumeSourceV1 {
  /**
   * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
   */
  endpoints: string
  /**
   * Path is the Glusterfs volume path. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
   */
  path: string
  /**
   * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
   */
  readOnly?: boolean
}

/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export interface GroupVersionForDiscoveryV1 {
  /**
   * groupVersion specifies the API group and version in the form "group/version"
   */
  groupVersion: string
  /**
   * version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
   */
  version: string
}

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export interface HTTPGetActionV1 {
  /**
   * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
   */
  host?: string
  /**
   * Custom headers to set in the request. HTTP allows repeated headers.
   */
  httpHeaders?: HTTPHeaderV1[]
  /**
   * Path to access on the HTTP server.
   */
  path?: string
  /**
   * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   */
  port: Object
  /**
   * Scheme to use for connecting to the host. Defaults to HTTP.
   */
  scheme?: string
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export interface HTTPHeaderV1 {
  /**
   * The header field name
   */
  name: string
  /**
   * The header field value
   */
  value: string
}

/**
 * Handler defines a specific action that should be taken
 */
export interface HandlerV1 {
  /**
   * One and only one of the following should be specified. Exec specifies the action to take.
   */
  exec?: ExecActionV1
  /**
   * HTTPGet specifies the http request to perform.
   */
  httpGet?: HTTPGetActionV1
  /**
   * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
   */
  tcpSocket?: TCPSocketActionV1
}

/**
 * configuration of a horizontal pod autoscaler.
 */
export interface HorizontalPodAutoscalerV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
   */
  spec?: HorizontalPodAutoscalerSpecV1
  /**
   * current information about the autoscaler.
   */
  status?: HorizontalPodAutoscalerStatusV1
}

/**
 * list of horizontal pod autoscaler objects.
 */
export interface HorizontalPodAutoscalerListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * list of horizontal pod autoscaler objects.
   */
  items: HorizontalPodAutoscalerV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata.
   */
  metadata?: ListMetaV1
}

/**
 * specification of a horizontal pod autoscaler.
 */
export interface HorizontalPodAutoscalerSpecV1 {
  /**
   * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
   */
  maxReplicas: number
  /**
   * lower limit for the number of pods that can be set by the autoscaler, default 1.
   */
  minReplicas?: number
  /**
   * reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource.
   */
  scaleTargetRef: CrossVersionObjectReferenceV1
  /**
   * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
   */
  targetCPUUtilizationPercentage?: number
}

/**
 * current status of a horizontal pod autoscaler
 */
export interface HorizontalPodAutoscalerStatusV1 {
  /**
   * current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
   */
  currentCPUUtilizationPercentage?: number
  /**
   * current number of replicas of pods managed by this autoscaler.
   */
  currentReplicas: number
  /**
   * desired number of replicas of pods managed by this autoscaler.
   */
  desiredReplicas: number
  /**
   * last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
   */
  lastScaleTime?: string
  /**
   * most recent generation observed by this autoscaler.
   */
  observedGeneration?: number
}

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export interface HostAliasV1 {
  /**
   * Hostnames for the above IP address.
   */
  hostnames?: string[]
  /**
   * IP address of the host file entry.
   */
  ip?: string
}

/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export interface HostPathVolumeSourceV1 {
  /**
   * Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  path: string
  /**
   * Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  type?: string
}

/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export interface IPBlockV1 {
  /**
   * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24"
   */
  cidr: string
  /**
   * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range
   */
  except?: string[]
}

/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export interface ISCSIPersistentVolumeSourceV1 {
  /**
   * whether support iSCSI Discovery CHAP authentication
   */
  chapAuthDiscovery?: boolean
  /**
   * whether support iSCSI Session CHAP authentication
   */
  chapAuthSession?: boolean
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
   */
  fsType?: string
  /**
   * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
   */
  initiatorName?: string
  /**
   * Target iSCSI Qualified Name.
   */
  iqn: string
  /**
   * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
   */
  iscsiInterface?: string
  /**
   * iSCSI Target Lun number.
   */
  lun: number
  /**
   * iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   */
  portals?: string[]
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
   */
  readOnly?: boolean
  /**
   * CHAP Secret for iSCSI target and initiator authentication
   */
  secretRef?: SecretReferenceV1
  /**
   * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   */
  targetPortal: string
}

/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export interface ISCSIVolumeSourceV1 {
  /**
   * whether support iSCSI Discovery CHAP authentication
   */
  chapAuthDiscovery?: boolean
  /**
   * whether support iSCSI Session CHAP authentication
   */
  chapAuthSession?: boolean
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
   */
  fsType?: string
  /**
   * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
   */
  initiatorName?: string
  /**
   * Target iSCSI Qualified Name.
   */
  iqn: string
  /**
   * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
   */
  iscsiInterface?: string
  /**
   * iSCSI Target Lun number.
   */
  lun: number
  /**
   * iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   */
  portals?: string[]
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
   */
  readOnly?: boolean
  /**
   * CHAP Secret for iSCSI target and initiator authentication
   */
  secretRef?: LocalObjectReferenceV1
  /**
   * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   */
  targetPortal: string
}

/**
 * Initializer is information about an initializer that has not yet completed.
 */
export interface InitializerV1 {
  /**
   * name of the process that is responsible for initializing this object.
   */
  name: string
}

/**
 * Initializers tracks the progress of initialization.
 */
export interface InitializersV1 {
  /**
   * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
   */
  pending: InitializerV1[]
  /**
   * If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion.
   */
  result?: StatusV1
}

/**
 * Job represents the configuration of a single job.
 */
export interface JobV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: JobSpecV1
  /**
   * Current status of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: JobStatusV1
}

/**
 * JobCondition describes current state of a job.
 */
export interface JobConditionV1 {
  /**
   * Last time the condition was checked.
   */
  lastProbeTime?: string
  /**
   * Last time the condition transit from one status to another.
   */
  lastTransitionTime?: string
  /**
   * Human readable message indicating details about last transition.
   */
  message?: string
  /**
   * (brief) reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of job condition, Complete or Failed.
   */
  type: string
}

/**
 * JobList is a collection of jobs.
 */
export interface JobListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is the list of Jobs.
   */
  items: JobV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * JobSpec describes how the job execution will look like.
 */
export interface JobSpecV1 {
  /**
   * Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer
   */
  activeDeadlineSeconds?: number
  /**
   * Specifies the number of retries before marking this job failed. Defaults to 6
   */
  backoffLimit?: number
  /**
   * Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
   */
  completions?: number
  /**
   * manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector
   */
  manualSelector?: boolean
  /**
   * Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
   */
  parallelism?: number
  /**
   * A label query over pods that should match the pod count. Normally, the system sets this field for you. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector?: LabelSelectorV1
  /**
   * Describes the pod that will be created when executing a job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
   */
  template: PodTemplateSpecV1
  /**
   * ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. This field is alpha-level and is only honored by servers that enable the TTLAfterFinished feature.
   */
  ttlSecondsAfterFinished?: number
}

/**
 * JobStatus represents the current state of a Job.
 */
export interface JobStatusV1 {
  /**
   * The number of actively running pods.
   */
  active?: number
  /**
   * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
   */
  completionTime?: string
  /**
   * The latest available observations of an object's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
   */
  conditions?: JobConditionV1[]
  /**
   * The number of pods which reached phase Failed.
   */
  failed?: number
  /**
   * Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
   */
  startTime?: string
  /**
   * The number of pods which reached phase Succeeded.
   */
  succeeded?: number
}

/**
 * Maps a string key to a path within a volume.
 */
export interface KeyToPathV1 {
  /**
   * The key to project.
   */
  key: string
  /**
   * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   */
  mode?: number
  /**
   * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
   */
  path: string
}

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export interface LabelSelectorV1 {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   */
  matchExpressions?: LabelSelectorRequirementV1[]
  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
   */
  matchLabels?: Object
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface LabelSelectorRequirementV1 {
  /**
   * key is the label key that the selector applies to.
   */
  key: string
  /**
   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   */
  operator: string
  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   */
  values?: string[]
}

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export interface LifecycleV1 {
  /**
   * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
   */
  postStart?: HandlerV1
  /**
   * PreStop is called immediately before a container is terminated. The container is terminated after the handler completes. The reason for termination is passed to the handler. Regardless of the outcome of the handler, the container is eventually terminated. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
   */
  preStop?: HandlerV1
}

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
export interface LimitRangeV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: LimitRangeSpecV1
}

/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export interface LimitRangeItemV1 {
  /**
   * Default resource requirement limit value by resource name if resource limit is omitted.
   */
  default?: Object
  /**
   * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
   */
  defaultRequest?: Object
  /**
   * Max usage constraints on this kind by resource name.
   */
  max?: Object
  /**
   * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
   */
  maxLimitRequestRatio?: Object
  /**
   * Min usage constraints on this kind by resource name.
   */
  min?: Object
  /**
   * Type of resource that this limit applies to.
   */
  type?: string
}

/**
 * LimitRangeList is a list of LimitRange items.
 */
export interface LimitRangeListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
  items: LimitRangeV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export interface LimitRangeSpecV1 {
  /**
   * Limits is the list of LimitRangeItem objects that are enforced.
   */
  limits: LimitRangeItemV1[]
}

/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export interface ListMetaV1 {
  /**
   * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
   */
  continue?: string
  /**
   * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
   */
  resourceVersion?: string
  /**
   * selfLink is a URL representing this object. Populated by the system. Read-only.
   */
  selfLink?: string
}

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
export interface LoadBalancerIngressV1 {
  /**
   * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
   */
  hostname?: string
  /**
   * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
   */
  ip?: string
}

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export interface LoadBalancerStatusV1 {
  /**
   * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
   */
  ingress?: LoadBalancerIngressV1[]
}

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export interface LocalObjectReferenceV1 {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export interface LocalSubjectAccessReviewV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
   */
  spec: SubjectAccessReviewSpecV1
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   */
  status?: SubjectAccessReviewStatusV1
}

/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
export interface LocalVolumeSourceV1 {
  /**
   * Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a fileystem if unspecified.
   */
  fsType?: string
  /**
   * The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
   */
  path: string
}

/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
export interface NFSVolumeSourceV1 {
  /**
   * Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  path: string
  /**
   * ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  readOnly?: boolean
  /**
   * Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  server: string
}

/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 */
export interface NamespaceV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the behavior of the Namespace. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: NamespaceSpecV1
  /**
   * Status describes the current status of a Namespace. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: NamespaceStatusV1
}

/**
 * NamespaceList is a list of Namespaces.
 */
export interface NamespaceListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   */
  items: NamespaceV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export interface NamespaceSpecV1 {
  /**
   * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   */
  finalizers?: string[]
}

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export interface NamespaceStatusV1 {
  /**
   * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   */
  phase?: string
}

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export interface NetworkPolicyV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior for this NetworkPolicy.
   */
  spec?: NetworkPolicySpecV1
}

/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export interface NetworkPolicyEgressRuleV1 {
  /**
   * List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
   */
  ports?: NetworkPolicyPortV1[]
  /**
   * List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
   */
  to?: NetworkPolicyPeerV1[]
}

/**
 * NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
 */
export interface NetworkPolicyIngressRuleV1 {
  /**
   * List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
   */
  from?: NetworkPolicyPeerV1[]
  /**
   * List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
   */
  ports?: NetworkPolicyPortV1[]
}

/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export interface NetworkPolicyListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of schema objects.
   */
  items: NetworkPolicyV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
export interface NetworkPolicyPeerV1 {
  /**
   * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
   */
  ipBlock?: IPBlockV1
  /**
   * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
   * 
   * If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
   */
  namespaceSelector?: LabelSelectorV1
  /**
   * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
   * 
   * If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
   */
  podSelector?: LabelSelectorV1
}

/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export interface NetworkPolicyPortV1 {
  /**
   * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers.
   */
  port?: Object
  /**
   * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
   */
  protocol?: string
}

/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 */
export interface NetworkPolicySpecV1 {
  /**
   * List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
   */
  egress?: NetworkPolicyEgressRuleV1[]
  /**
   * List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
   */
  ingress?: NetworkPolicyIngressRuleV1[]
  /**
   * Selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
   */
  podSelector: LabelSelectorV1
  /**
   * List of rule types that the NetworkPolicy relates to. Valid options are Ingress, Egress, or Ingress,Egress. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
   */
  policyTypes?: string[]
}

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
export interface NodeV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the behavior of a node. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: NodeSpecV1
  /**
   * Most recently observed status of the node. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: NodeStatusV1
}

/**
 * NodeAddress contains information for the node's address.
 */
export interface NodeAddressV1 {
  /**
   * The node address.
   */
  address: string
  /**
   * Node address type, one of Hostname, ExternalIP or InternalIP.
   */
  type: string
}

/**
 * Node affinity is a group of node affinity scheduling rules.
 */
export interface NodeAffinityV1 {
  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
   */
  preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTermV1[]
  /**
   * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
   */
  requiredDuringSchedulingIgnoredDuringExecution?: NodeSelectorV1
}

/**
 * NodeCondition contains condition information for a node.
 */
export interface NodeConditionV1 {
  /**
   * Last time we got an update on a given condition.
   */
  lastHeartbeatTime?: string
  /**
   * Last time the condition transit from one status to another.
   */
  lastTransitionTime?: string
  /**
   * Human readable message indicating details about last transition.
   */
  message?: string
  /**
   * (brief) reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of node condition.
   */
  type: string
}

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 */
export interface NodeConfigSourceV1 {
  /**
   * ConfigMap is a reference to a Node's ConfigMap
   */
  configMap?: ConfigMapNodeConfigSourceV1
}

/**
 * NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
 */
export interface NodeConfigStatusV1 {
  /**
   * Active reports the checkpointed config the node is actively using. Active will represent either the current version of the Assigned config, or the current LastKnownGood config, depending on whether attempting to use the Assigned config results in an error.
   */
  active?: NodeConfigSourceV1
  /**
   * Assigned reports the checkpointed config the node will try to use. When Node.Spec.ConfigSource is updated, the node checkpoints the associated config payload to local disk, along with a record indicating intended config. The node refers to this record to choose its config checkpoint, and reports this record in Assigned. Assigned only updates in the status after the record has been checkpointed to disk. When the Kubelet is restarted, it tries to make the Assigned config the Active config by loading and validating the checkpointed payload identified by Assigned.
   */
  assigned?: NodeConfigSourceV1
  /**
   * Error describes any problems reconciling the Spec.ConfigSource to the Active config. Errors may occur, for example, attempting to checkpoint Spec.ConfigSource to the local Assigned record, attempting to checkpoint the payload associated with Spec.ConfigSource, attempting to load or validate the Assigned config, etc. Errors may occur at different points while syncing config. Earlier errors (e.g. download or checkpointing errors) will not result in a rollback to LastKnownGood, and may resolve across Kubelet retries. Later errors (e.g. loading or validating a checkpointed config) will result in a rollback to LastKnownGood. In the latter case, it is usually possible to resolve the error by fixing the config assigned in Spec.ConfigSource. You can find additional information for debugging by searching the error message in the Kubelet log. Error is a human-readable description of the error state; machines can check whether or not Error is empty, but should not rely on the stability of the Error text across Kubelet versions.
   */
  error?: string
  /**
   * LastKnownGood reports the checkpointed config the node will fall back to when it encounters an error attempting to use the Assigned config. The Assigned config becomes the LastKnownGood config when the node determines that the Assigned config is stable and correct. This is currently implemented as a 10-minute soak period starting when the local record of Assigned config is updated. If the Assigned config is Active at the end of this period, it becomes the LastKnownGood. Note that if Spec.ConfigSource is reset to nil (use local defaults), the LastKnownGood is also immediately reset to nil, because the local default config is always assumed good. You should not make assumptions about the node's method of determining config stability and correctness, as this may change or become configurable in the future.
   */
  lastKnownGood?: NodeConfigSourceV1
}

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export interface NodeDaemonEndpointsV1 {
  /**
   * Endpoint on which Kubelet is listening.
   */
  kubeletEndpoint?: DaemonEndpointV1
}

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
export interface NodeListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of nodes
   */
  items: NodeV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export interface NodeSelectorV1 {
  /**
   * Required. A list of node selector terms. The terms are ORed.
   */
  nodeSelectorTerms: NodeSelectorTermV1[]
}

/**
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface NodeSelectorRequirementV1 {
  /**
   * The label key that the selector applies to.
   */
  key: string
  /**
   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
   */
  operator: string
  /**
   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
   */
  values?: string[]
}

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export interface NodeSelectorTermV1 {
  /**
   * A list of node selector requirements by node's labels.
   */
  matchExpressions?: NodeSelectorRequirementV1[]
  /**
   * A list of node selector requirements by node's fields.
   */
  matchFields?: NodeSelectorRequirementV1[]
}

/**
 * NodeSpec describes the attributes that a node is created with.
 */
export interface NodeSpecV1 {
  /**
   * If specified, the source to get node configuration from The DynamicKubeletConfig feature gate must be enabled for the Kubelet to use this field
   */
  configSource?: NodeConfigSourceV1
  /**
   * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
   */
  externalID?: string
  /**
   * PodCIDR represents the pod IP range assigned to the node.
   */
  podCIDR?: string
  /**
   * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
   */
  providerID?: string
  /**
   * If specified, the node's taints.
   */
  taints?: TaintV1[]
  /**
   * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
   */
  unschedulable?: boolean
}

/**
 * NodeStatus is information about the current status of a node.
 */
export interface NodeStatusV1 {
  /**
   * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses
   */
  addresses?: NodeAddressV1[]
  /**
   * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
   */
  allocatable?: Object
  /**
   * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   */
  capacity?: Object
  /**
   * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
   */
  conditions?: NodeConditionV1[]
  /**
   * Status of the config assigned to the node via the dynamic Kubelet config feature.
   */
  config?: NodeConfigStatusV1
  /**
   * Endpoints of daemons running on the Node.
   */
  daemonEndpoints?: NodeDaemonEndpointsV1
  /**
   * List of container images on this node
   */
  images?: ContainerImageV1[]
  /**
   * Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#info
   */
  nodeInfo?: NodeSystemInfoV1
  /**
   * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
   */
  phase?: string
  /**
   * List of volumes that are attached to the node.
   */
  volumesAttached?: AttachedVolumeV1[]
  /**
   * List of attachable volumes in use (mounted) by the node.
   */
  volumesInUse?: string[]
}

/**
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 */
export interface NodeSystemInfoV1 {
  /**
   * The Architecture reported by the node
   */
  architecture: string
  /**
   * Boot ID reported by the node.
   */
  bootID: string
  /**
   * ContainerRuntime Version reported by the node through runtime remote API (e.g. docker://1.5.0).
   */
  containerRuntimeVersion: string
  /**
   * Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64).
   */
  kernelVersion: string
  /**
   * KubeProxy Version reported by the node.
   */
  kubeProxyVersion: string
  /**
   * Kubelet Version reported by the node.
   */
  kubeletVersion: string
  /**
   * MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
   */
  machineID: string
  /**
   * The Operating System reported by the node
   */
  operatingSystem: string
  /**
   * OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
   */
  osImage: string
  /**
   * SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-US/Red_Hat_Subscription_Management/1/html/RHSM/getting-system-uuid.html
   */
  systemUUID: string
}

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export interface NonResourceAttributesV1 {
  /**
   * Path is the URL path of the request
   */
  path?: string
  /**
   * Verb is the standard HTTP verb
   */
  verb?: string
}

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export interface NonResourceRuleV1 {
  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
   */
  nonResourceURLs?: string[]
  /**
   * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
   */
  verbs: string[]
}

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export interface ObjectFieldSelectorV1 {
  /**
   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
   */
  apiVersion?: string
  /**
   * Path of the field to select in the specified API version.
   */
  fieldPath: string
}

/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
export interface ObjectMetaV1 {
  /**
   * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
   */
  annotations?: Object
  /**
   * The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
   */
  clusterName?: string
  /**
   * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
   * 
   * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  creationTimestamp?: string
  /**
   * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
   */
  deletionGracePeriodSeconds?: number
  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
   * 
   * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  deletionTimestamp?: string
  /**
   * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed.
   */
  finalizers?: string[]
  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
   * 
   * If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
   * 
   * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
   */
  generateName?: string
  /**
   * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
   */
  generation?: number
  /**
   * An initializer is a controller which enforces some system invariant at object creation time. This field is a list of initializers that have not yet acted on this object. If nil or empty, this object has been completely initialized. Otherwise, the object is considered uninitialized and is hidden (in list/watch and get calls) from clients that haven't explicitly asked to observe uninitialized objects.
   * 
   * When an object is created, the system will populate this list with the current set of initializers. Only privileged users may set or modify this list. Once it is empty, it may not be modified further by any user.
   */
  initializers?: InitializersV1
  /**
   * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
   */
  labels?: Object
  /**
   * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  name?: string
  /**
   * Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
   * 
   * Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
   */
  namespace?: string
  /**
   * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
   */
  ownerReferences?: OwnerReferenceV1[]
  /**
   * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
   * 
   * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
   */
  resourceVersion?: string
  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.
   */
  selfLink?: string
  /**
   * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
   * 
   * Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  uid?: string
}

/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
export interface ObjectReferenceV1 {
  /**
   * API version of the referent.
   */
  apiVersion?: string
  /**
   * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
   */
  fieldPath?: string
  /**
   * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   */
  namespace?: string
  /**
   * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
   */
  resourceVersion?: string
  /**
   * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
   */
  uid?: string
}

/**
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 */
export interface OwnerReferenceV1 {
  /**
   * API version of the referent.
   */
  apiVersion: string
  /**
   * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
   */
  blockOwnerDeletion?: boolean
  /**
   * If true, this reference points to the managing controller.
   */
  controller?: boolean
  /**
   * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind: string
  /**
   * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  name: string
  /**
   * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  uid: string
}

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export interface PersistentVolumeV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
   */
  spec?: PersistentVolumeSpecV1
  /**
   * Status represents the current information/status for the persistent volume. Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
   */
  status?: PersistentVolumeStatusV1
}

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export interface PersistentVolumeClaimV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  spec?: PersistentVolumeClaimSpecV1
  /**
   * Status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  status?: PersistentVolumeClaimStatusV1
}

/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
export interface PersistentVolumeClaimConditionV1 {
  /**
   * Last time we probed the condition.
   */
  lastProbeTime?: string
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string
  /**
   * Unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
   */
  reason?: string
  status: string
  type: string
}

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
export interface PersistentVolumeClaimListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * A list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  items: PersistentVolumeClaimV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 */
export interface PersistentVolumeClaimSpecV1 {
  /**
   * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
   */
  accessModes?: string[]
  /**
   * This field requires the VolumeSnapshotDataSource alpha feature gate to be enabled and currently VolumeSnapshot is the only supported data source. If the provisioner can support VolumeSnapshot data source, it will create a new volume and data will be restored to the volume at the same time. If the provisioner does not support VolumeSnapshot data source, volume will not be created and the failure will be reported as an event. In the future, we plan to support more data source types and the behavior of the provisioner may change.
   */
  dataSource?: TypedLocalObjectReferenceV1
  /**
   * Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
   */
  resources?: ResourceRequirementsV1
  /**
   * A label query over volumes to consider for binding.
   */
  selector?: LabelSelectorV1
  /**
   * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
   */
  storageClassName?: string
  /**
   * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. This is a beta feature.
   */
  volumeMode?: string
  /**
   * VolumeName is the binding reference to the PersistentVolume backing this claim.
   */
  volumeName?: string
}

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
export interface PersistentVolumeClaimStatusV1 {
  /**
   * AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
   */
  accessModes?: string[]
  /**
   * Represents the actual resources of the underlying volume.
   */
  capacity?: Object
  /**
   * Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
   */
  conditions?: PersistentVolumeClaimConditionV1[]
  /**
   * Phase represents the current phase of PersistentVolumeClaim.
   */
  phase?: string
}

/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 */
export interface PersistentVolumeClaimVolumeSourceV1 {
  /**
   * ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  claimName: string
  /**
   * Will force the ReadOnly setting in VolumeMounts. Default false.
   */
  readOnly?: boolean
}

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export interface PersistentVolumeListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
   */
  items: PersistentVolumeV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export interface PersistentVolumeSpecV1 {
  /**
   * AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
   */
  accessModes?: string[]
  /**
   * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSourceV1
  /**
   * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   */
  azureDisk?: AzureDiskVolumeSourceV1
  /**
   * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
   */
  azureFile?: AzureFilePersistentVolumeSourceV1
  /**
   * A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
   */
  capacity?: Object
  /**
   * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
   */
  cephfs?: CephFSPersistentVolumeSourceV1
  /**
   * Cinder represents a cinder volume attached and mounted on kubelets host machine More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  cinder?: CinderPersistentVolumeSourceV1
  /**
   * ClaimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
   */
  claimRef?: ObjectReferenceV1
  /**
   * CSI represents storage that handled by an external CSI driver (Beta feature).
   */
  csi?: CSIPersistentVolumeSourceV1
  /**
   * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
   */
  fc?: FCVolumeSourceV1
  /**
   * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
   */
  flexVolume?: FlexPersistentVolumeSourceV1
  /**
   * Flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
   */
  flocker?: FlockerVolumeSourceV1
  /**
   * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: GCEPersistentDiskVolumeSourceV1
  /**
   * Glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md
   */
  glusterfs?: GlusterfsPersistentVolumeSourceV1
  /**
   * HostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: HostPathVolumeSourceV1
  /**
   * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
   */
  iscsi?: ISCSIPersistentVolumeSourceV1
  /**
   * Local represents directly-attached storage with node affinity
   */
  local?: LocalVolumeSourceV1
  /**
   * A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
   */
  mountOptions?: string[]
  /**
   * NFS represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: NFSVolumeSourceV1
  /**
   * NodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
   */
  nodeAffinity?: VolumeNodeAffinityV1
  /**
   * What happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
   */
  persistentVolumeReclaimPolicy?: string
  /**
   * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   */
  photonPersistentDisk?: PhotonPersistentDiskVolumeSourceV1
  /**
   * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
   */
  portworxVolume?: PortworxVolumeSourceV1
  /**
   * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
   */
  quobyte?: QuobyteVolumeSourceV1
  /**
   * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md
   */
  rbd?: RBDPersistentVolumeSourceV1
  /**
   * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   */
  scaleIO?: ScaleIOPersistentVolumeSourceV1
  /**
   * Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
   */
  storageClassName?: string
  /**
   * StorageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod More info: https://releases.k8s.io/HEAD/examples/volumes/storageos/README.md
   */
  storageos?: StorageOSPersistentVolumeSourceV1
  /**
   * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec. This is a beta feature.
   */
  volumeMode?: string
  /**
   * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   */
  vsphereVolume?: VsphereVirtualDiskVolumeSourceV1
}

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export interface PersistentVolumeStatusV1 {
  /**
   * A human-readable message indicating details about why the volume is in this state.
   */
  message?: string
  /**
   * Phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
   */
  phase?: string
  /**
   * Reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
   */
  reason?: string
}

/**
 * Represents a Photon Controller persistent disk resource.
 */
export interface PhotonPersistentDiskVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string
  /**
   * ID that identifies Photon Controller persistent disk
   */
  pdID: string
}

/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 */
export interface PodV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: PodSpecV1
  /**
   * Most recently observed status of the pod. This data may not be up to date. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: PodStatusV1
}

/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 */
export interface PodAffinityV1 {
  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
   */
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTermV1[]
  /**
   * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
   */
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTermV1[]
}

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 */
export interface PodAffinityTermV1 {
  /**
   * A label query over a set of resources, in this case pods.
   */
  labelSelector?: LabelSelectorV1
  /**
   * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
   */
  namespaces?: string[]
  /**
   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
   */
  topologyKey: string
}

/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 */
export interface PodAntiAffinityV1 {
  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
   */
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTermV1[]
  /**
   * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
   */
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTermV1[]
}

/**
 * PodCondition contains details for the current condition of this pod.
 */
export interface PodConditionV1 {
  /**
   * Last time we probed the condition.
   */
  lastProbeTime?: string
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string
  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   */
  status: string
  /**
   * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   */
  type: string
}

/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
export interface PodDNSConfigV1 {
  /**
   * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
   */
  nameservers?: string[]
  /**
   * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
   */
  options?: PodDNSConfigOptionV1[]
  /**
   * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
   */
  searches?: string[]
}

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export interface PodDNSConfigOptionV1 {
  /**
   * Required.
   */
  name?: string
  value?: string
}

/**
 * PodList is a list of Pods.
 */
export interface PodListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of pods. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md
   */
  items: PodV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export interface PodReadinessGateV1 {
  /**
   * ConditionType refers to a condition in the pod's condition list with matching type.
   */
  conditionType: string
}

/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 */
export interface PodSecurityContextV1 {
  /**
   * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
   * 
   * 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----
   * 
   * If unset, the Kubelet will not modify the ownership and permissions of any volume.
   */
  fsGroup?: number
  /**
   * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
   */
  runAsGroup?: number
  /**
   * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   */
  runAsNonRoot?: boolean
  /**
   * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
   */
  runAsUser?: number
  /**
   * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
   */
  seLinuxOptions?: SELinuxOptionsV1
  /**
   * A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container.
   */
  supplementalGroups?: number[]
  /**
   * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.
   */
  sysctls?: SysctlV1[]
}

/**
 * PodSpec is a description of a pod.
 */
export interface PodSpecV1 {
  /**
   * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
   */
  activeDeadlineSeconds?: number
  /**
   * If specified, the pod's scheduling constraints
   */
  affinity?: AffinityV1
  /**
   * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
   */
  automountServiceAccountToken?: boolean
  /**
   * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
   */
  containers: ContainerV1[]
  /**
   * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
   */
  dnsConfig?: PodDNSConfigV1
  /**
   * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
   */
  dnsPolicy?: string
  /**
   * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links.
   */
  enableServiceLinks?: boolean
  /**
   * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.
   */
  hostAliases?: HostAliasV1[]
  /**
   * Use the host's ipc namespace. Optional: Default to false.
   */
  hostIPC?: boolean
  /**
   * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
   */
  hostNetwork?: boolean
  /**
   * Use the host's pid namespace. Optional: Default to false.
   */
  hostPID?: boolean
  /**
   * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
   */
  hostname?: string
  /**
   * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
   */
  imagePullSecrets?: LocalObjectReferenceV1[]
  /**
   * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, or Liveness probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
   */
  initContainers?: ContainerV1[]
  /**
   * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
   */
  nodeName?: string
  /**
   * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
   */
  nodeSelector?: Object
  /**
   * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
   */
  priority?: number
  /**
   * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
   */
  priorityClassName?: string
  /**
   * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://github.com/kubernetes/community/blob/master/keps/sig-network/0007-pod-ready%2B%2B.md
   */
  readinessGates?: PodReadinessGateV1[]
  /**
   * Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
   */
  restartPolicy?: string
  /**
   * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://github.com/kubernetes/community/blob/master/keps/sig-node/0014-runtime-class.md This is an alpha feature and may change in the future.
   */
  runtimeClassName?: string
  /**
   * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
   */
  schedulerName?: string
  /**
   * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
   */
  securityContext?: PodSecurityContextV1
  /**
   * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
   */
  serviceAccount?: string
  /**
   * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
   */
  serviceAccountName?: string
  /**
   * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. This field is beta-level and may be disabled with the PodShareProcessNamespace feature.
   */
  shareProcessNamespace?: boolean
  /**
   * If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.
   */
  subdomain?: string
  /**
   * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
   */
  terminationGracePeriodSeconds?: number
  /**
   * If specified, the pod's tolerations.
   */
  tolerations?: TolerationV1[]
  /**
   * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
   */
  volumes?: VolumeV1[]
}

/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 */
export interface PodStatusV1 {
  /**
   * Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   */
  conditions?: PodConditionV1[]
  /**
   * The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
   */
  containerStatuses?: ContainerStatusV1[]
  /**
   * IP address of the host to which the pod is assigned. Empty if not yet scheduled.
   */
  hostIP?: string
  /**
   * The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
   */
  initContainerStatuses?: ContainerStatusV1[]
  /**
   * A human readable message indicating details about why the pod is in this condition.
   */
  message?: string
  /**
   * nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
   */
  nominatedNodeName?: string
  /**
   * The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod's status. There are five possible phase values:
   * 
   * Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.
   * 
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
   */
  phase?: string
  /**
   * IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
   */
  podIP?: string
  /**
   * The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md
   */
  qosClass?: string
  /**
   * A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted'
   */
  reason?: string
  /**
   * RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.
   */
  startTime?: string
}

/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 */
export interface PodTemplateV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  template?: PodTemplateSpecV1
}

/**
 * PodTemplateList is a list of PodTemplates.
 */
export interface PodTemplateListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of pod templates
   */
  items: PodTemplateV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export interface PodTemplateSpecV1 {
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: PodSpecV1
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export interface PolicyRuleV1 {
  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
   */
  apiGroups?: string[]
  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
   */
  nonResourceURLs?: string[]
  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
   */
  resourceNames?: string[]
  /**
   * Resources is a list of resources this rule applies to.  ResourceAll represents all resources.
   */
  resources?: string[]
  /**
   * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
   */
  verbs: string[]
}

/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export interface PortworxVolumeSourceV1 {
  /**
   * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * VolumeID uniquely identifies a Portworx volume
   */
  volumeID: string
}

/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export interface PreconditionsV1 {
  /**
   * Specifies the target UID.
   */
  uid?: string
}

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export interface PreferredSchedulingTermV1 {
  /**
   * A node selector term, associated with the corresponding weight.
   */
  preference: NodeSelectorTermV1
  /**
   * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
   */
  weight: number
}

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export interface ProbeV1 {
  /**
   * One and only one of the following should be specified. Exec specifies the action to take.
   */
  exec?: ExecActionV1
  /**
   * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
   */
  failureThreshold?: number
  /**
   * HTTPGet specifies the http request to perform.
   */
  httpGet?: HTTPGetActionV1
  /**
   * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  initialDelaySeconds?: number
  /**
   * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
   */
  periodSeconds?: number
  /**
   * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
   */
  successThreshold?: number
  /**
   * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
   */
  tcpSocket?: TCPSocketActionV1
  /**
   * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  timeoutSeconds?: number
}

/**
 * Represents a projected volume source
 */
export interface ProjectedVolumeSourceV1 {
  /**
   * Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   */
  defaultMode?: number
  /**
   * list of volume projections
   */
  sources: VolumeProjectionV1[]
}

/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
export interface QuobyteVolumeSourceV1 {
  /**
   * Group to map volume access to Default is no group
   */
  group?: string
  /**
   * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
   */
  readOnly?: boolean
  /**
   * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
   */
  registry: string
  /**
   * User to map volume access to Defaults to serivceaccount user
   */
  user?: string
  /**
   * Volume is a string that references an already created Quobyte volume by name.
   */
  volume: string
}

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export interface RBDPersistentVolumeSourceV1 {
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
   */
  fsType?: string
  /**
   * The rados image name. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  image: string
  /**
   * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  keyring?: string
  /**
   * A collection of Ceph monitors. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  monitors: string[]
  /**
   * The rados pool name. Default is rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  pool?: string
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  readOnly?: boolean
  /**
   * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  secretRef?: SecretReferenceV1
  /**
   * The rados user name. Default is admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  user?: string
}

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export interface RBDVolumeSourceV1 {
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
   */
  fsType?: string
  /**
   * The rados image name. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  image: string
  /**
   * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  keyring?: string
  /**
   * A collection of Ceph monitors. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  monitors: string[]
  /**
   * The rados pool name. Default is rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  pool?: string
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  readOnly?: boolean
  /**
   * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  secretRef?: LocalObjectReferenceV1
  /**
   * The rados user name. Default is admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  user?: string
}

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export interface ReplicaSetV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: ReplicaSetSpecV1
  /**
   * Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: ReplicaSetStatusV1
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export interface ReplicaSetConditionV1 {
  /**
   * The last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of replica set condition.
   */
  type: string
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export interface ReplicaSetListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
   */
  items: ReplicaSetV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export interface ReplicaSetSpecV1 {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number
  /**
   * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
   */
  replicas?: number
  /**
   * Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector: LabelSelectorV1
  /**
   * Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
   */
  template?: PodTemplateSpecV1
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export interface ReplicaSetStatusV1 {
  /**
   * The number of available replicas (ready for at least minReadySeconds) for this replica set.
   */
  availableReplicas?: number
  /**
   * Represents the latest available observations of a replica set's current state.
   */
  conditions?: ReplicaSetConditionV1[]
  /**
   * The number of pods that have labels matching the labels of the pod template of the replicaset.
   */
  fullyLabeledReplicas?: number
  /**
   * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
   */
  observedGeneration?: number
  /**
   * The number of ready replicas for this replica set.
   */
  readyReplicas?: number
  /**
   * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
   */
  replicas: number
}

/**
 * ReplicationController represents the configuration of a replication controller.
 */
export interface ReplicationControllerV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * If the Labels of a ReplicationController are empty, they are defaulted to be the same as the Pod(s) that the replication controller manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: ReplicationControllerSpecV1
  /**
   * Status is the most recently observed status of the replication controller. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: ReplicationControllerStatusV1
}

/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export interface ReplicationControllerConditionV1 {
  /**
   * The last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of replication controller condition.
   */
  type: string
}

/**
 * ReplicationControllerList is a collection of replication controllers.
 */
export interface ReplicationControllerListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
   */
  items: ReplicationControllerV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * ReplicationControllerSpec is the specification of a replication controller.
 */
export interface ReplicationControllerSpecV1 {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number
  /**
   * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
   */
  replicas?: number
  /**
   * Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector?: Object
  /**
   * Template is the object that describes the pod that will be created if insufficient replicas are detected. This takes precedence over a TemplateRef. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
   */
  template?: PodTemplateSpecV1
}

/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
export interface ReplicationControllerStatusV1 {
  /**
   * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
   */
  availableReplicas?: number
  /**
   * Represents the latest available observations of a replication controller's current state.
   */
  conditions?: ReplicationControllerConditionV1[]
  /**
   * The number of pods that have labels matching the labels of the pod template of the replication controller.
   */
  fullyLabeledReplicas?: number
  /**
   * ObservedGeneration reflects the generation of the most recently observed replication controller.
   */
  observedGeneration?: number
  /**
   * The number of ready replicas for this replication controller.
   */
  readyReplicas?: number
  /**
   * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
   */
  replicas: number
}

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export interface ResourceAttributesV1 {
  /**
   * Group is the API Group of the Resource.  "*" means all.
   */
  group?: string
  /**
   * Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
   */
  name?: string
  /**
   * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
   */
  namespace?: string
  /**
   * Resource is one of the existing resource types.  "*" means all.
   */
  resource?: string
  /**
   * Subresource is one of the existing resource types.  "" means none.
   */
  subresource?: string
  /**
   * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.
   */
  verb?: string
  /**
   * Version is the API Version of the Resource.  "*" means all.
   */
  version?: string
}

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export interface ResourceFieldSelectorV1 {
  /**
   * Container name: required for volumes, optional for env vars
   */
  containerName?: string
  /**
   * Specifies the output format of the exposed resources, defaults to "1"
   */
  divisor?: string
  /**
   * Required: resource to select
   */
  resource: string
}

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export interface ResourceQuotaV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the desired quota. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: ResourceQuotaSpecV1
  /**
   * Status defines the actual enforced quota and its current usage. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: ResourceQuotaStatusV1
}

/**
 * ResourceQuotaList is a list of ResourceQuota items.
 */
export interface ResourceQuotaListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
   */
  items: ResourceQuotaV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export interface ResourceQuotaSpecV1 {
  /**
   * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
   */
  hard?: Object
  /**
   * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
   */
  scopeSelector?: ScopeSelectorV1
  /**
   * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
   */
  scopes?: string[]
}

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export interface ResourceQuotaStatusV1 {
  /**
   * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
   */
  hard?: Object
  /**
   * Used is the current observed total usage of the resource in the namespace.
   */
  used?: Object
}

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export interface ResourceRequirementsV1 {
  /**
   * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
  limits?: Object
  /**
   * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   */
  requests?: Object
}

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export interface ResourceRuleV1 {
  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all.
   */
  apiGroups?: string[]
  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all.
   */
  resourceNames?: string[]
  /**
   * Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
   *  "...foo" represents the subresource 'foo' for all resources in the specified apiGroups.
   */
  resources?: string[]
  /**
   * Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all.
   */
  verbs: string[]
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export interface RoleV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Rules holds all the PolicyRules for this Role
   */
  rules: PolicyRuleV1[]
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export interface RoleBindingV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
   */
  roleRef: RoleRefV1
  /**
   * Subjects holds references to the objects the role applies to.
   */
  subjects?: SubjectV1[]
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export interface RoleBindingListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of RoleBindings
   */
  items: RoleBindingV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * RoleList is a collection of Roles
 */
export interface RoleListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of Roles
   */
  items: RoleV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * RoleRef contains information that points to the role being used
 */
export interface RoleRefV1 {
  /**
   * APIGroup is the group for the resource being referenced
   */
  apiGroup: string
  /**
   * Kind is the type of resource being referenced
   */
  kind: string
  /**
   * Name is the name of resource being referenced
   */
  name: string
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export interface RollingUpdateDaemonSetV1 {
  /**
   * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
   */
  maxUnavailable?: Object
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export interface RollingUpdateDeploymentV1 {
  /**
   * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
   */
  maxSurge?: Object
  /**
   * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
   */
  maxUnavailable?: Object
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export interface RollingUpdateStatefulSetStrategyV1 {
  /**
   * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
   */
  partition?: number
}

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export interface SELinuxOptionsV1 {
  /**
   * Level is SELinux level label that applies to the container.
   */
  level?: string
  /**
   * Role is a SELinux role label that applies to the container.
   */
  role?: string
  /**
   * Type is a SELinux type label that applies to the container.
   */
  type?: string
  /**
   * User is a SELinux user label that applies to the container.
   */
  user?: string
}

/**
 * Scale represents a scaling request for a resource.
 */
export interface ScaleV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
   */
  spec?: ScaleSpecV1
  /**
   * current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
   */
  status?: ScaleStatusV1
}

/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 */
export interface ScaleIOPersistentVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs"
   */
  fsType?: string
  /**
   * The host address of the ScaleIO API Gateway.
   */
  gateway: string
  /**
   * The name of the ScaleIO Protection Domain for the configured storage.
   */
  protectionDomain?: string
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
   */
  secretRef: SecretReferenceV1
  /**
   * Flag to enable/disable SSL communication with Gateway, default false
   */
  sslEnabled?: boolean
  /**
   * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
   */
  storageMode?: string
  /**
   * The ScaleIO Storage Pool associated with the protection domain.
   */
  storagePool?: string
  /**
   * The name of the storage system as configured in ScaleIO.
   */
  system: string
  /**
   * The name of a volume already created in the ScaleIO system that is associated with this volume source.
   */
  volumeName?: string
}

/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
export interface ScaleIOVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
   */
  fsType?: string
  /**
   * The host address of the ScaleIO API Gateway.
   */
  gateway: string
  /**
   * The name of the ScaleIO Protection Domain for the configured storage.
   */
  protectionDomain?: string
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
   */
  secretRef: LocalObjectReferenceV1
  /**
   * Flag to enable/disable SSL communication with Gateway, default false
   */
  sslEnabled?: boolean
  /**
   * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
   */
  storageMode?: string
  /**
   * The ScaleIO Storage Pool associated with the protection domain.
   */
  storagePool?: string
  /**
   * The name of the storage system as configured in ScaleIO.
   */
  system: string
  /**
   * The name of a volume already created in the ScaleIO system that is associated with this volume source.
   */
  volumeName?: string
}

/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export interface ScaleSpecV1 {
  /**
   * desired number of instances for the scaled object.
   */
  replicas?: number
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export interface ScaleStatusV1 {
  /**
   * actual number of observed instances of the scaled object.
   */
  replicas: number
  /**
   * label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
   */
  selector?: string
}

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export interface ScopeSelectorV1 {
  /**
   * A list of scope selector requirements by scope of the resources.
   */
  matchExpressions?: ScopedResourceSelectorRequirementV1[]
}

/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
export interface ScopedResourceSelectorRequirementV1 {
  /**
   * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
   */
  operator: string
  /**
   * The name of the scope that the selector applies to.
   */
  scopeName: string
  /**
   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   */
  values?: string[]
}

/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 */
export interface SecretV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
   */
  data?: Object
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * stringData allows specifying non-binary secret data in string form. It is provided as a write-only convenience method. All keys and values are merged into the data field on write, overwriting any existing values. It is never output when reading from the API.
   */
  stringData?: Object
  /**
   * Used to facilitate programmatic handling of secret data.
   */
  type?: string
}

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 * 
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export interface SecretEnvSourceV1 {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
  /**
   * Specify whether the Secret must be defined
   */
  optional?: boolean
}

/**
 * SecretKeySelector selects a key of a Secret.
 */
export interface SecretKeySelectorV1 {
  /**
   * The key of the secret to select from.  Must be a valid secret key.
   */
  key: string
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
  /**
   * Specify whether the Secret or it's key must be defined
   */
  optional?: boolean
}

/**
 * SecretList is a list of Secret.
 */
export interface SecretListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
   */
  items: SecretV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * Adapts a secret into a projected volume.
 * 
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export interface SecretProjectionV1 {
  /**
   * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
   */
  items?: KeyToPathV1[]
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string
  /**
   * Specify whether the Secret or its key must be defined
   */
  optional?: boolean
}

/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export interface SecretReferenceV1 {
  /**
   * Name is unique within a namespace to reference a secret resource.
   */
  name?: string
  /**
   * Namespace defines the space within which the secret name must be unique.
   */
  namespace?: string
}

/**
 * Adapts a Secret into a volume.
 * 
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export interface SecretVolumeSourceV1 {
  /**
   * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   */
  defaultMode?: number
  /**
   * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
   */
  items?: KeyToPathV1[]
  /**
   * Specify whether the Secret or it's keys must be defined
   */
  optional?: boolean
  /**
   * Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
   */
  secretName?: string
}

/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 */
export interface SecurityContextV1 {
  /**
   * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
   */
  allowPrivilegeEscalation?: boolean
  /**
   * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime.
   */
  capabilities?: CapabilitiesV1
  /**
   * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
   */
  privileged?: boolean
  /**
   * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled.
   */
  procMount?: string
  /**
   * Whether this container has a read-only root filesystem. Default is false.
   */
  readOnlyRootFilesystem?: boolean
  /**
   * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   */
  runAsGroup?: number
  /**
   * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   */
  runAsNonRoot?: boolean
  /**
   * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   */
  runAsUser?: number
  /**
   * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   */
  seLinuxOptions?: SELinuxOptionsV1
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export interface SelfSubjectAccessReviewV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated.  user and groups must be empty
   */
  spec: SelfSubjectAccessReviewSpecV1
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   */
  status?: SubjectAccessReviewStatusV1
}

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SelfSubjectAccessReviewSpecV1 {
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: NonResourceAttributesV1
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: ResourceAttributesV1
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export interface SelfSubjectRulesReviewV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated.
   */
  spec: SelfSubjectRulesReviewSpecV1
  /**
   * Status is filled in by the server and indicates the set of actions a user can perform.
   */
  status?: SubjectRulesReviewStatusV1
}

export interface SelfSubjectRulesReviewSpecV1 {
  /**
   * Namespace to evaluate rules for. Required.
   */
  namespace?: string
}

/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
export interface ServerAddressByClientCIDRV1 {
  /**
   * The CIDR with which clients can match their IP to figure out the server address that they should use.
   */
  clientCIDR: string
  /**
   * Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
   */
  serverAddress: string
}

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export interface ServiceV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: ServiceSpecV1
  /**
   * Most recently observed status of the service. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: ServiceStatusV1
}

/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 */
export interface ServiceAccountV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
   */
  automountServiceAccountToken?: boolean
  /**
   * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
   */
  imagePullSecrets?: LocalObjectReferenceV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount. More info: https://kubernetes.io/docs/concepts/configuration/secret
   */
  secrets?: ObjectReferenceV1[]
}

/**
 * ServiceAccountList is a list of ServiceAccount objects
 */
export interface ServiceAccountListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of ServiceAccounts. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
   */
  items: ServiceAccountV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 */
export interface ServiceAccountTokenProjectionV1 {
  /**
   * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
   */
  audience?: string
  /**
   * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
   */
  expirationSeconds?: number
  /**
   * Path is the path relative to the mount point of the file to project the token into.
   */
  path: string
}

/**
 * ServiceList holds a list of services.
 */
export interface ServiceListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of services
   */
  items: ServiceV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * ServicePort contains information on service's port.
 */
export interface ServicePortV1 {
  /**
   * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. This maps to the 'Name' field in EndpointPort objects. Optional if only one ServicePort is defined on this service.
   */
  name?: string
  /**
   * The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
   */
  nodePort?: number
  /**
   * The port that will be exposed by this service.
   */
  port: number
  /**
   * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
   */
  protocol?: string
  /**
   * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
   */
  targetPort?: Object
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServiceReferenceV1 {
  /**
   * Name is the name of the service
   */
  name?: string
  /**
   * Namespace is the namespace of the service
   */
  namespace?: string
}

/**
 * ServiceSpec describes the attributes that a user creates on a service.
 */
export interface ServiceSpecV1 {
  /**
   * clusterIP is the IP address of the service and is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. This field can not be changed through updates. Valid values are "None", empty string (""), or a valid IP address. "None" can be specified for headless services when proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
   */
  clusterIP?: string
  /**
   * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
   */
  externalIPs?: string[]
  /**
   * externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved. Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires Type to be ExternalName.
   */
  externalName?: string
  /**
   * externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. "Local" preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. "Cluster" obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading.
   */
  externalTrafficPolicy?: string
  /**
   * healthCheckNodePort specifies the healthcheck nodePort for the service. If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort. Will use user-specified nodePort value if specified by the client. Only effects when Type is set to LoadBalancer and ExternalTrafficPolicy is set to Local.
   */
  healthCheckNodePort?: number
  /**
   * Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.
   */
  loadBalancerIP?: string
  /**
   * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/
   */
  loadBalancerSourceRanges?: string[]
  /**
   * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
   */
  ports?: ServicePortV1[]
  /**
   * publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service. The default value is false. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate SRV records for its Pods without respect to their readiness for purpose of peer discovery.
   */
  publishNotReadyAddresses?: boolean
  /**
   * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
   */
  selector?: Object
  /**
   * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
   */
  sessionAffinity?: string
  /**
   * sessionAffinityConfig contains the configurations of session affinity.
   */
  sessionAffinityConfig?: SessionAffinityConfigV1
  /**
   * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ExternalName" maps to the specified externalName. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services---service-types
   */
  type?: string
}

/**
 * ServiceStatus represents the current status of a service.
 */
export interface ServiceStatusV1 {
  /**
   * LoadBalancer contains the current status of the load-balancer, if one is present.
   */
  loadBalancer?: LoadBalancerStatusV1
}

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export interface SessionAffinityConfigV1 {
  /**
   * clientIP contains the configurations of Client IP based session affinity.
   */
  clientIP?: ClientIPConfigV1
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export interface StatefulSetV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec defines the desired identities of pods in this set.
   */
  spec?: StatefulSetSpecV1
  /**
   * Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
   */
  status?: StatefulSetStatusV1
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export interface StatefulSetConditionV1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of statefulset condition.
   */
  type: string
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export interface StatefulSetListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  items: StatefulSetV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export interface StatefulSetSpecV1 {
  /**
   * podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
   */
  podManagementPolicy?: string
  /**
   * replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
   */
  replicas?: number
  /**
   * revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
   */
  revisionHistoryLimit?: number
  /**
   * selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector: LabelSelectorV1
  /**
   * serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
   */
  serviceName: string
  /**
   * template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
   */
  template: PodTemplateSpecV1
  /**
   * updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
   */
  updateStrategy?: StatefulSetUpdateStrategyV1
  /**
   * volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
   */
  volumeClaimTemplates?: PersistentVolumeClaimV1[]
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export interface StatefulSetStatusV1 {
  /**
   * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a statefulset's current state.
   */
  conditions?: StatefulSetConditionV1[]
  /**
   * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
   */
  currentReplicas?: number
  /**
   * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
   */
  currentRevision?: string
  /**
   * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
   */
  observedGeneration?: number
  /**
   * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
   */
  readyReplicas?: number
  /**
   * replicas is the number of Pods created by the StatefulSet controller.
   */
  replicas: number
  /**
   * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
   */
  updateRevision?: string
  /**
   * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
   */
  updatedReplicas?: number
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface StatefulSetUpdateStrategyV1 {
  /**
   * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
   */
  rollingUpdate?: RollingUpdateStatefulSetStrategyV1
  /**
   * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
   */
  type?: string
}

/**
 * Status is a return value for calls that don't return other objects.
 */
export interface StatusV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Suggested HTTP return code for this status, 0 if not set.
   */
  code?: number
  /**
   * Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
   */
  details?: StatusDetailsV1
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * A human-readable description of the status of this operation.
   */
  message?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
  /**
   * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
   */
  reason?: string
  /**
   * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: string
}

/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export interface StatusCauseV1 {
  /**
   * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
   * 
   * Examples:
   *   "name" - the field "name" on the current resource
   *   "items[0].name" - the field "name" on the first array entry in "items"
   */
  field?: string
  /**
   * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
   */
  message?: string
  /**
   * A machine-readable description of the cause of the error. If this value is empty there is no information available.
   */
  reason?: string
}

/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export interface StatusDetailsV1 {
  /**
   * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
   */
  causes?: StatusCauseV1[]
  /**
   * The group attribute of the resource associated with the status StatusReason.
   */
  group?: string
  /**
   * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
   */
  name?: string
  /**
   * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
   */
  retryAfterSeconds?: number
  /**
   * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  uid?: string
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export interface StorageClassV1 {
  /**
   * AllowVolumeExpansion shows whether the storage class allow volume expand
   */
  allowVolumeExpansion?: boolean
  /**
   * Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
   */
  allowedTopologies?: TopologySelectorTermV1[]
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
   */
  mountOptions?: string[]
  /**
   * Parameters holds the parameters for the provisioner that should create volumes of this storage class.
   */
  parameters?: Object
  /**
   * Provisioner indicates the type of the provisioner.
   */
  provisioner: string
  /**
   * Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete.
   */
  reclaimPolicy?: string
  /**
   * VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
   */
  volumeBindingMode?: string
}

/**
 * StorageClassList is a collection of storage classes.
 */
export interface StorageClassListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of StorageClasses
   */
  items: StorageClassV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * Represents a StorageOS persistent volume resource.
 */
export interface StorageOSPersistentVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
   */
  secretRef?: ObjectReferenceV1
  /**
   * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
   */
  volumeName?: string
  /**
   * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
   */
  volumeNamespace?: string
}

/**
 * Represents a StorageOS persistent volume resource.
 */
export interface StorageOSVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean
  /**
   * SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
   */
  secretRef?: LocalObjectReferenceV1
  /**
   * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
   */
  volumeName?: string
  /**
   * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
   */
  volumeNamespace?: string
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export interface SubjectV1 {
  /**
   * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
   */
  apiGroup?: string
  /**
   * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
   */
  kind: string
  /**
   * Name of the object being referenced.
   */
  name: string
  /**
   * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
   */
  namespace?: string
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export interface SubjectAccessReviewV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated
   */
  spec: SubjectAccessReviewSpecV1
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   */
  status?: SubjectAccessReviewStatusV1
}

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SubjectAccessReviewSpecV1 {
  /**
   * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
   */
  extra?: Object
  /**
   * Groups is the groups you're testing for.
   */
  groups?: string[]
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: NonResourceAttributesV1
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: ResourceAttributesV1
  /**
   * UID information about the requesting user.
   */
  uid?: string
  /**
   * User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups
   */
  user?: string
}

/**
 * SubjectAccessReviewStatus
 */
export interface SubjectAccessReviewStatusV1 {
  /**
   * Allowed is required. True if the action would be allowed, false otherwise.
   */
  allowed: boolean
  /**
   * Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
   */
  denied?: boolean
  /**
   * EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
   */
  evaluationError?: string
  /**
   * Reason is optional.  It indicates why a request was allowed or denied.
   */
  reason?: string
}

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export interface SubjectRulesReviewStatusV1 {
  /**
   * EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
   */
  evaluationError?: string
  /**
   * Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
   */
  incomplete: boolean
  /**
   * NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
   */
  nonResourceRules: NonResourceRuleV1[]
  /**
   * ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
   */
  resourceRules: ResourceRuleV1[]
}

/**
 * Sysctl defines a kernel parameter to be set
 */
export interface SysctlV1 {
  /**
   * Name of a property to set
   */
  name: string
  /**
   * Value of a property to set
   */
  value: string
}

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export interface TCPSocketActionV1 {
  /**
   * Optional: Host name to connect to, defaults to the pod IP.
   */
  host?: string
  /**
   * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   */
  port: Object
}

/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export interface TaintV1 {
  /**
   * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
   */
  effect: string
  /**
   * Required. The taint key to be applied to a node.
   */
  key: string
  /**
   * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
   */
  timeAdded?: string
  /**
   * Required. The taint value corresponding to the taint key.
   */
  value?: string
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export interface TokenReviewV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated
   */
  spec: TokenReviewSpecV1
  /**
   * Status is filled in by the server and indicates whether the request can be authenticated.
   */
  status?: TokenReviewStatusV1
}

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export interface TokenReviewSpecV1 {
  /**
   * Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
   */
  audiences?: string[]
  /**
   * Token is the opaque bearer token.
   */
  token?: string
}

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export interface TokenReviewStatusV1 {
  /**
   * Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server.
   */
  audiences?: string[]
  /**
   * Authenticated indicates that the token was associated with a known user.
   */
  authenticated?: boolean
  /**
   * Error indicates that the token couldn't be checked
   */
  error?: string
  /**
   * User is the UserInfo associated with the provided token.
   */
  user?: UserInfoV1
}

/**
 * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 */
export interface TolerationV1 {
  /**
   * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
   */
  effect?: string
  /**
   * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
   */
  key?: string
  /**
   * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
   */
  operator?: string
  /**
   * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
   */
  tolerationSeconds?: number
  /**
   * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
   */
  value?: string
}

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export interface TopologySelectorLabelRequirementV1 {
  /**
   * The label key that the selector applies to.
   */
  key: string
  /**
   * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
   */
  values: string[]
}

/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 */
export interface TopologySelectorTermV1 {
  /**
   * A list of topology selector requirements by labels.
   */
  matchLabelExpressions?: TopologySelectorLabelRequirementV1[]
}

/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export interface TypedLocalObjectReferenceV1 {
  /**
   * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
   */
  apiGroup?: string
  /**
   * Kind is the type of resource being referenced
   */
  kind: string
  /**
   * Name is the name of resource being referenced
   */
  name: string
}

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export interface UserInfoV1 {
  /**
   * Any additional information provided by the authenticator.
   */
  extra?: Object
  /**
   * The names of groups this user is a part of.
   */
  groups?: string[]
  /**
   * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
   */
  uid?: string
  /**
   * The name that uniquely identifies this user among all active users.
   */
  username?: string
}

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export interface VolumeV1 {
  /**
   * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   */
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSourceV1
  /**
   * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   */
  azureDisk?: AzureDiskVolumeSourceV1
  /**
   * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
   */
  azureFile?: AzureFileVolumeSourceV1
  /**
   * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
   */
  cephfs?: CephFSVolumeSourceV1
  /**
   * Cinder represents a cinder volume attached and mounted on kubelets host machine More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  cinder?: CinderVolumeSourceV1
  /**
   * ConfigMap represents a configMap that should populate this volume
   */
  configMap?: ConfigMapVolumeSourceV1
  /**
   * DownwardAPI represents downward API about the pod that should populate this volume
   */
  downwardAPI?: DownwardAPIVolumeSourceV1
  /**
   * EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   */
  emptyDir?: EmptyDirVolumeSourceV1
  /**
   * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
   */
  fc?: FCVolumeSourceV1
  /**
   * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
   */
  flexVolume?: FlexVolumeSourceV1
  /**
   * Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
   */
  flocker?: FlockerVolumeSourceV1
  /**
   * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   */
  gcePersistentDisk?: GCEPersistentDiskVolumeSourceV1
  /**
   * GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
   */
  gitRepo?: GitRepoVolumeSourceV1
  /**
   * Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md
   */
  glusterfs?: GlusterfsVolumeSourceV1
  /**
   * HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   */
  hostPath?: HostPathVolumeSourceV1
  /**
   * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://releases.k8s.io/HEAD/examples/volumes/iscsi/README.md
   */
  iscsi?: ISCSIVolumeSourceV1
  /**
   * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name: string
  /**
   * NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  nfs?: NFSVolumeSourceV1
  /**
   * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSourceV1
  /**
   * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   */
  photonPersistentDisk?: PhotonPersistentDiskVolumeSourceV1
  /**
   * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
   */
  portworxVolume?: PortworxVolumeSourceV1
  /**
   * Items for all in one resources secrets, configmaps, and downward API
   */
  projected?: ProjectedVolumeSourceV1
  /**
   * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
   */
  quobyte?: QuobyteVolumeSourceV1
  /**
   * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md
   */
  rbd?: RBDVolumeSourceV1
  /**
   * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   */
  scaleIO?: ScaleIOVolumeSourceV1
  /**
   * Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
   */
  secret?: SecretVolumeSourceV1
  /**
   * StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
   */
  storageos?: StorageOSVolumeSourceV1
  /**
   * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   */
  vsphereVolume?: VsphereVirtualDiskVolumeSourceV1
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export interface VolumeAttachmentV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
   */
  spec: VolumeAttachmentSpecV1
  /**
   * Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
   */
  status?: VolumeAttachmentStatusV1
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export interface VolumeAttachmentListV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of VolumeAttachments
   */
  items: VolumeAttachmentV1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface VolumeAttachmentSourceV1 {
  /**
   * Name of the persistent volume to attach.
   */
  persistentVolumeName?: string
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export interface VolumeAttachmentSpecV1 {
  /**
   * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
   */
  attacher: string
  /**
   * The node that the volume should be attached to.
   */
  nodeName: string
  /**
   * Source represents the volume that should be attached.
   */
  source: VolumeAttachmentSourceV1
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export interface VolumeAttachmentStatusV1 {
  /**
   * The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachError?: VolumeErrorV1
  /**
   * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attached: boolean
  /**
   * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachmentMetadata?: Object
  /**
   * The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
   */
  detachError?: VolumeErrorV1
}

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export interface VolumeDeviceV1 {
  /**
   * devicePath is the path inside of the container that the device will be mapped to.
   */
  devicePath: string
  /**
   * name must match the name of a persistentVolumeClaim in the pod
   */
  name: string
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface VolumeErrorV1 {
  /**
   * String detailing the error encountered during Attach or Detach operation. This string maybe logged, so it should not contain sensitive information.
   */
  message?: string
  /**
   * Time the error was encountered.
   */
  time?: string
}

/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
export interface VolumeMountV1 {
  /**
   * Path within the container at which the volume should be mounted.  Must not contain ':'.
   */
  mountPath: string
  /**
   * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
   */
  mountPropagation?: string
  /**
   * This must match the Name of a Volume.
   */
  name: string
  /**
   * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
   */
  readOnly?: boolean
  /**
   * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
   */
  subPath?: string
}

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export interface VolumeNodeAffinityV1 {
  /**
   * Required specifies hard node constraints that must be met.
   */
  required?: NodeSelectorV1
}

/**
 * Projection that may be projected along with other supported volume types
 */
export interface VolumeProjectionV1 {
  /**
   * information about the configMap data to project
   */
  configMap?: ConfigMapProjectionV1
  /**
   * information about the downwardAPI data to project
   */
  downwardAPI?: DownwardAPIProjectionV1
  /**
   * information about the secret data to project
   */
  secret?: SecretProjectionV1
  /**
   * information about the serviceAccountToken data to project
   */
  serviceAccountToken?: ServiceAccountTokenProjectionV1
}

/**
 * Represents a vSphere volume resource.
 */
export interface VsphereVirtualDiskVolumeSourceV1 {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string
  /**
   * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
   */
  storagePolicyID?: string
  /**
   * Storage Policy Based Management (SPBM) profile name.
   */
  storagePolicyName?: string
  /**
   * Path that identifies vSphere volume vmdk
   */
  volumePath: string
}

/**
 * Event represents a single event to a watched resource.
 */
export interface WatchEventV1 {
  /**
   * Object is:
   *  * If Type is Added or Modified: the new state of the object.
   *  * If Type is Deleted: the state of the object immediately before deletion.
   *  * If Type is Error: *Status is recommended; other types may make sense
   *    depending on context.
   */
  object: RawExtensionRuntime
  type: string
}

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export interface WeightedPodAffinityTermV1 {
  /**
   * Required. A pod affinity term, associated with the corresponding weight.
   */
  podAffinityTerm: PodAffinityTermV1
  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   */
  weight: number
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export interface AggregationRuleV1alpha1 {
  /**
   * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
   */
  clusterRoleSelectors?: LabelSelectorV1[]
}

/**
 * AuditSink represents a cluster level audit sink
 */
export interface AuditSinkV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec defines the audit configuration spec
   */
  spec?: AuditSinkSpecV1alpha1
}

/**
 * AuditSinkList is a list of AuditSink items.
 */
export interface AuditSinkListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of audit configurations.
   */
  items: AuditSinkV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * AuditSinkSpec holds the spec for the audit sink
 */
export interface AuditSinkSpecV1alpha1 {
  /**
   * Policy defines the policy for selecting which events should be sent to the webhook required
   */
  policy: PolicyV1alpha1
  /**
   * Webhook to send events required
   */
  webhook: WebhookV1alpha1
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export interface ClusterRoleV1alpha1 {
  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
   */
  aggregationRule?: AggregationRuleV1alpha1
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Rules holds all the PolicyRules for this ClusterRole
   */
  rules: PolicyRuleV1alpha1[]
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export interface ClusterRoleBindingV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
   */
  roleRef: RoleRefV1alpha1
  /**
   * Subjects holds references to the objects the role applies to.
   */
  subjects?: SubjectV1alpha1[]
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export interface ClusterRoleBindingListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of ClusterRoleBindings
   */
  items: ClusterRoleBindingV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export interface ClusterRoleListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of ClusterRoles
   */
  items: ClusterRoleV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * Initializer describes the name and the failure policy of an initializer, and what resources it applies to.
 */
export interface InitializerV1alpha1 {
  /**
   * Name is the identifier of the initializer. It will be added to the object that needs to be initialized. Name should be fully qualified, e.g., alwayspullimages.kubernetes.io, where "alwayspullimages" is the name of the webhook, and kubernetes.io is the name of the organization. Required
   */
  name: string
  /**
   * Rules describes what resources/subresources the initializer cares about. The initializer cares about an operation if it matches _any_ Rule. Rule.Resources must not include subresources.
   */
  rules?: RuleV1alpha1[]
}

/**
 * InitializerConfiguration describes the configuration of initializers.
 */
export interface InitializerConfigurationV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Initializers is a list of resources and their default initializers Order-sensitive. When merging multiple InitializerConfigurations, we sort the initializers from different InitializerConfigurations by the name of the InitializerConfigurations; the order of the initializers from the same InitializerConfiguration is preserved.
   */
  initializers?: InitializerV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
   */
  metadata?: ObjectMetaV1
}

/**
 * InitializerConfigurationList is a list of InitializerConfiguration.
 */
export interface InitializerConfigurationListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of InitializerConfiguration.
   */
  items: InitializerConfigurationV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 */
export interface PodPresetV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  spec?: PodPresetSpecV1alpha1
}

/**
 * PodPresetList is a list of PodPreset objects.
 */
export interface PodPresetListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of schema objects.
   */
  items: PodPresetV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * PodPresetSpec is a description of a pod preset.
 */
export interface PodPresetSpecV1alpha1 {
  /**
   * Env defines the collection of EnvVar to inject into containers.
   */
  env?: EnvVarV1[]
  /**
   * EnvFrom defines the collection of EnvFromSource to inject into containers.
   */
  envFrom?: EnvFromSourceV1[]
  /**
   * Selector is a label query over a set of resources, in this case pods. Required.
   */
  selector?: LabelSelectorV1
  /**
   * VolumeMounts defines the collection of VolumeMount to inject into containers.
   */
  volumeMounts?: VolumeMountV1[]
  /**
   * Volumes defines the collection of Volume to inject into the pod.
   */
  volumes?: VolumeV1[]
}

/**
 * Policy defines the configuration of how audit events are logged
 */
export interface PolicyV1alpha1 {
  /**
   * The Level that all requests are recorded at. available options: None, Metadata, Request, RequestResponse required
   */
  level: string
  /**
   * Stages is a list of stages for which events are created.
   */
  stages?: string[]
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export interface PolicyRuleV1alpha1 {
  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
   */
  apiGroups?: string[]
  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path This name is intentionally different than the internal type so that the DefaultConvert works nicely and because the ordering may be different. Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
   */
  nonResourceURLs?: string[]
  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
   */
  resourceNames?: string[]
  /**
   * Resources is a list of resources this rule applies to.  ResourceAll represents all resources.
   */
  resources?: string[]
  /**
   * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
   */
  verbs: string[]
}

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export interface PriorityClassV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
   */
  description?: string
  /**
   * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
   */
  globalDefault?: boolean
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
   */
  value: number
}

/**
 * PriorityClassList is a collection of priority classes.
 */
export interface PriorityClassListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is the list of PriorityClasses
   */
  items: PriorityClassV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export interface RoleV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Rules holds all the PolicyRules for this Role
   */
  rules: PolicyRuleV1alpha1[]
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export interface RoleBindingV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
   */
  roleRef: RoleRefV1alpha1
  /**
   * Subjects holds references to the objects the role applies to.
   */
  subjects?: SubjectV1alpha1[]
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export interface RoleBindingListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of RoleBindings
   */
  items: RoleBindingV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * RoleList is a collection of Roles
 */
export interface RoleListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of Roles
   */
  items: RoleV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * RoleRef contains information that points to the role being used
 */
export interface RoleRefV1alpha1 {
  /**
   * APIGroup is the group for the resource being referenced
   */
  apiGroup: string
  /**
   * Kind is the type of resource being referenced
   */
  kind: string
  /**
   * Name is the name of resource being referenced
   */
  name: string
}

/**
 * Rule is a tuple of APIGroups, APIVersion, and Resources.It is recommended to make sure that all the tuple expansions are valid.
 */
export interface RuleV1alpha1 {
  /**
   * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
   */
  apiGroups?: string[]
  /**
   * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
   */
  apiVersions?: string[]
  /**
   * Resources is a list of resources this rule applies to.
   * 
   * For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '...scale' means all scale subresources. '...*' means all resources and their subresources.
   * 
   * If wildcard is present, the validation rule will ensure resources do not overlap with each other.
   * 
   * Depending on the enclosing object, subresources might not be allowed. Required.
   */
  resources?: string[]
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServiceReferenceV1alpha1 {
  /**
   * `name` is the name of the service. Required
   */
  name: string
  /**
   * `namespace` is the namespace of the service. Required
   */
  namespace: string
  /**
   * `path` is an optional URL path which will be sent in any request to this service.
   */
  path?: string
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export interface SubjectV1alpha1 {
  /**
   * APIVersion holds the API group and version of the referenced subject. Defaults to "v1" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io/v1alpha1" for User and Group subjects.
   */
  apiVersion?: string
  /**
   * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
   */
  kind: string
  /**
   * Name of the object being referenced.
   */
  name: string
  /**
   * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
   */
  namespace?: string
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export interface VolumeAttachmentV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
   */
  spec: VolumeAttachmentSpecV1alpha1
  /**
   * Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
   */
  status?: VolumeAttachmentStatusV1alpha1
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export interface VolumeAttachmentListV1alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of VolumeAttachments
   */
  items: VolumeAttachmentV1alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface VolumeAttachmentSourceV1alpha1 {
  /**
   * Name of the persistent volume to attach.
   */
  persistentVolumeName?: string
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export interface VolumeAttachmentSpecV1alpha1 {
  /**
   * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
   */
  attacher: string
  /**
   * The node that the volume should be attached to.
   */
  nodeName: string
  /**
   * Source represents the volume that should be attached.
   */
  source: VolumeAttachmentSourceV1alpha1
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export interface VolumeAttachmentStatusV1alpha1 {
  /**
   * The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachError?: VolumeErrorV1alpha1
  /**
   * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attached: boolean
  /**
   * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachmentMetadata?: Object
  /**
   * The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
   */
  detachError?: VolumeErrorV1alpha1
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface VolumeErrorV1alpha1 {
  /**
   * String detailing the error encountered during Attach or Detach operation. This string maybe logged, so it should not contain sensitive information.
   */
  message?: string
  /**
   * Time the error was encountered.
   */
  time?: string
}

/**
 * Webhook holds the configuration of the webhook
 */
export interface WebhookV1alpha1 {
  /**
   * ClientConfig holds the connection parameters for the webhook required
   */
  clientConfig: WebhookClientConfigV1alpha1
  /**
   * Throttle holds the options for throttling the webhook
   */
  throttle?: WebhookThrottleConfigV1alpha1
}

/**
 * WebhookClientConfig contains the information to make a connection with the webhook
 */
export interface WebhookClientConfigV1alpha1 {
  /**
   * `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
   */
  caBundle?: string
  /**
   * `service` is a reference to the service for this webhook. Either `service` or `url` must be specified.
   * 
   * If the webhook is running within the cluster, then you should use `service`.
   * 
   * Port 443 will be used if it is open, otherwise it is an error.
   */
  service?: ServiceReferenceV1alpha1
  /**
   * `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
   * 
   * The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
   * 
   * Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
   * 
   * The scheme must be "https"; the URL must begin with "https://".
   * 
   * A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
   * 
   * Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
   */
  url?: string
}

/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
export interface WebhookThrottleConfigV1alpha1 {
  /**
   * ThrottleBurst is the maximum number of events sent at the same moment default 15 QPS
   */
  burst?: number
  /**
   * ThrottleQPS maximum number of batches per second default 10 QPS
   */
  qps?: number
}

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export interface APIServiceV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec contains information for locating and communicating with a server
   */
  spec?: APIServiceSpecV1beta1
  /**
   * Status contains derived information about an API server
   */
  status?: APIServiceStatusV1beta1
}

export interface APIServiceConditionV1beta1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string
  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status is the status of the condition. Can be True, False, Unknown.
   */
  status: string
  /**
   * Type is the type of the condition.
   */
  type: string
}

/**
 * APIServiceList is a list of APIService objects.
 */
export interface APIServiceListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  items: APIServiceV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export interface APIServiceSpecV1beta1 {
  /**
   * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
   */
  caBundle?: string
  /**
   * Group is the API group name this server hosts
   */
  group?: string
  /**
   * GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
   */
  groupPriorityMinimum: number
  /**
   * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
   */
  insecureSkipTLSVerify?: boolean
  /**
   * Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled.
   */
  service: ServiceReferenceApiregistrationV1beta1
  /**
   * Version is the API version this server hosts.  For example, "v1"
   */
  version?: string
  /**
   * VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
   */
  versionPriority: number
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export interface APIServiceStatusV1beta1 {
  /**
   * Current service state of apiService.
   */
  conditions?: APIServiceConditionV1beta1[]
}

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export interface AggregationRuleV1beta1 {
  /**
   * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
   */
  clusterRoleSelectors?: LabelSelectorV1[]
}

/**
 * Describes a certificate signing request
 */
export interface CertificateSigningRequestV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * The certificate request itself and any additional information.
   */
  spec?: CertificateSigningRequestSpecV1beta1
  /**
   * Derived information about the request.
   */
  status?: CertificateSigningRequestStatusV1beta1
}

export interface CertificateSigningRequestConditionV1beta1 {
  /**
   * timestamp for the last update to this condition
   */
  lastUpdateTime?: string
  /**
   * human readable message with details about the request state
   */
  message?: string
  /**
   * brief reason for the request state
   */
  reason?: string
  /**
   * request approval state, currently Approved or Denied.
   */
  type: string
}

export interface CertificateSigningRequestListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  items: CertificateSigningRequestV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 */
export interface CertificateSigningRequestSpecV1beta1 {
  /**
   * Extra information about the requesting user. See user.Info interface for details.
   */
  extra?: Object
  /**
   * Group information about the requesting user. See user.Info interface for details.
   */
  groups?: string[]
  /**
   * Base64-encoded PKCS#10 CSR data
   */
  request: string
  /**
   * UID information about the requesting user. See user.Info interface for details.
   */
  uid?: string
  /**
   * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3
   *      https://tools.ietf.org/html/rfc5280#section-4.2.1.12
   */
  usages?: string[]
  /**
   * Information about the requesting user. See user.Info interface for details.
   */
  username?: string
}

export interface CertificateSigningRequestStatusV1beta1 {
  /**
   * If request was approved, the controller will place the issued certificate here.
   */
  certificate?: string
  /**
   * Conditions applied to the request, such as approval or denial.
   */
  conditions?: CertificateSigningRequestConditionV1beta1[]
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export interface ClusterRoleV1beta1 {
  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
   */
  aggregationRule?: AggregationRuleV1beta1
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Rules holds all the PolicyRules for this ClusterRole
   */
  rules: PolicyRuleV1beta1[]
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export interface ClusterRoleBindingV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
   */
  roleRef: RoleRefV1beta1
  /**
   * Subjects holds references to the objects the role applies to.
   */
  subjects?: SubjectV1beta1[]
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export interface ClusterRoleBindingListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of ClusterRoleBindings
   */
  items: ClusterRoleBindingV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export interface ClusterRoleListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of ClusterRoles
   */
  items: ClusterRoleV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export interface ControllerRevisionV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Data is the serialized representation of the state.
   */
  data?: RawExtensionRuntime
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Revision indicates the revision of the state represented by Data.
   */
  revision: number
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export interface ControllerRevisionListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of ControllerRevisions
   */
  items: ControllerRevisionV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export interface CronJobV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: CronJobSpecV1beta1
  /**
   * Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: CronJobStatusV1beta1
}

/**
 * CronJobList is a collection of cron jobs.
 */
export interface CronJobListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is the list of CronJobs.
   */
  items: CronJobV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export interface CronJobSpecV1beta1 {
  /**
   * Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one
   */
  concurrencyPolicy?: string
  /**
   * The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   */
  failedJobsHistoryLimit?: number
  /**
   * Specifies the job that will be created when executing a CronJob.
   */
  jobTemplate: JobTemplateSpecV1beta1
  /**
   * The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
   */
  schedule: string
  /**
   * Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
   */
  startingDeadlineSeconds?: number
  /**
   * The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 3.
   */
  successfulJobsHistoryLimit?: number
  /**
   * This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
   */
  suspend?: boolean
}

/**
 * CronJobStatus represents the current state of a cron job.
 */
export interface CronJobStatusV1beta1 {
  /**
   * A list of pointers to currently running jobs.
   */
  active?: ObjectReferenceV1[]
  /**
   * Information when was the last time the job was successfully scheduled.
   */
  lastScheduleTime?: string
}

/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
export interface CustomResourceColumnDefinitionV1beta1 {
  /**
   * JSONPath is a simple JSON path, i.e. with array notation.
   */
  JSONPath: string
  /**
   * description is a human readable description of this column.
   */
  description?: string
  /**
   * format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for more.
   */
  format?: string
  /**
   * name is a human readable name for the column.
   */
  name: string
  /**
   * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a higher priority.
   */
  priority?: number
  /**
   * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for more.
   */
  type: string
}

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export interface CustomResourceConversionV1beta1 {
  /**
   * `strategy` specifies the conversion strategy. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the CR. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information is needed for this option.
   */
  strategy: string
  /**
   * `webhookClientConfig` is the instructions for how to call the webhook if strategy is `Webhook`. This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature.
   */
  webhookClientConfig?: WebhookClientConfigApiextensionsV1beta1
}

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
export interface CustomResourceDefinitionV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec describes how the user wants the resources to appear
   */
  spec: CustomResourceDefinitionSpecV1beta1
  /**
   * Status indicates the actual state of the CustomResourceDefinition
   */
  status?: CustomResourceDefinitionStatusV1beta1
}

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export interface CustomResourceDefinitionConditionV1beta1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string
  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status is the status of the condition. Can be True, False, Unknown.
   */
  status: string
  /**
   * Type is the type of the condition.
   */
  type: string
}

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export interface CustomResourceDefinitionListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items individual CustomResourceDefinitions
   */
  items: CustomResourceDefinitionV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export interface CustomResourceDefinitionNamesV1beta1 {
  /**
   * Categories is a list of grouped resources custom resources belong to (e.g. 'all')
   */
  categories?: string[]
  /**
   * Kind is the serialized kind of the resource.  It is normally CamelCase and singular.
   */
  kind: string
  /**
   * ListKind is the serialized kind of the list for this resource.  Defaults to <kind>List.
   */
  listKind?: string
  /**
   * Plural is the plural name of the resource to serve.  It must match the name of the CustomResourceDefinition-registration too: plural.group and it must be all lowercase.
   */
  plural: string
  /**
   * ShortNames are short names for the resource.  It must be all lowercase.
   */
  shortNames?: string[]
  /**
   * Singular is the singular name of the resource.  It must be all lowercase  Defaults to lowercased <kind>
   */
  singular?: string
}

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export interface CustomResourceDefinitionSpecV1beta1 {
  /**
   * AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Optional, the global columns for all versions. Top-level and per-version columns are mutually exclusive.
   */
  additionalPrinterColumns?: CustomResourceColumnDefinitionV1beta1[]
  /**
   * `conversion` defines conversion settings for the CRD.
   */
  conversion?: CustomResourceConversionV1beta1
  /**
   * Group is the group this resource belongs in
   */
  group: string
  /**
   * Names are the names used to describe this custom resource
   */
  names: CustomResourceDefinitionNamesV1beta1
  /**
   * Scope indicates whether this resource is cluster or namespace scoped.  Default is namespaced
   */
  scope: string
  /**
   * Subresources describes the subresources for CustomResource Optional, the global subresources for all versions. Top-level and per-version subresources are mutually exclusive.
   */
  subresources?: CustomResourceSubresourcesV1beta1
  /**
   * Validation describes the validation methods for CustomResources Optional, the global validation schema for all versions. Top-level and per-version schemas are mutually exclusive.
   */
  validation?: CustomResourceValidationV1beta1
  /**
   * Version is the version this resource belongs in Should be always first item in Versions field if provided. Optional, but at least one of Version or Versions must be set. Deprecated: Please use `Versions`.
   */
  version?: string
  /**
   * Versions is the list of all supported versions for this resource. If Version field is provided, this field is optional. Validation: All versions must use the same validation schema for now. i.e., top level Validation field is applied to all of these versions. Order: The version name will be used to compute the order. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
   */
  versions?: CustomResourceDefinitionVersionV1beta1[]
}

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export interface CustomResourceDefinitionStatusV1beta1 {
  /**
   * AcceptedNames are the names that are actually being used to serve discovery They may be different than the names in spec.
   */
  acceptedNames: CustomResourceDefinitionNamesV1beta1
  /**
   * Conditions indicate state for particular aspects of a CustomResourceDefinition
   */
  conditions: CustomResourceDefinitionConditionV1beta1[]
  /**
   * StoredVersions are all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so the migration controller can first finish a migration to another version (i.e. that no old objects are left in the storage), and then remove the rest of the versions from this list. None of the versions in this list can be removed from the spec.Versions field.
   */
  storedVersions: string[]
}

/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 */
export interface CustomResourceDefinitionVersionV1beta1 {
  /**
   * AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. NOTE: CRDs created prior to 1.13 populated the top-level additionalPrinterColumns field by default. To apply an update that changes to per-version additionalPrinterColumns, the top-level additionalPrinterColumns field must be explicitly set to null
   */
  additionalPrinterColumns?: CustomResourceColumnDefinitionV1beta1[]
  /**
   * Name is the version name, e.g. “v1”, “v2beta1”, etc.
   */
  name: string
  /**
   * Schema describes the schema for CustomResource used in validation, pruning, and defaulting. Top-level and per-version schemas are mutually exclusive. Per-version schemas must not all be set to identical values (top-level validation schema should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature.
   */
  schema?: CustomResourceValidationV1beta1
  /**
   * Served is a flag enabling/disabling this version from being served via REST APIs
   */
  served: boolean
  /**
   * Storage flags the version as storage version. There must be exactly one flagged as storage version.
   */
  storage: boolean
  /**
   * Subresources describes the subresources for CustomResource Top-level and per-version subresources are mutually exclusive. Per-version subresources must not all be set to identical values (top-level subresources should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature.
   */
  subresources?: CustomResourceSubresourcesV1beta1
}

/**
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 */
export interface CustomResourceSubresourceScaleV1beta1 {
  /**
   * LabelSelectorPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Selector. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status. Must be set to work with HPA. If there is no value under the given path in the CustomResource, the status label selector value in the /scale subresource will default to the empty string.
   */
  labelSelectorPath?: string
  /**
   * SpecReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Spec.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .spec. If there is no value under the given path in the CustomResource, the /scale subresource will return an error on GET.
   */
  specReplicasPath: string
  /**
   * StatusReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status. If there is no value under the given path in the CustomResource, the status replica value in the /scale subresource will default to 0.
   */
  statusReplicasPath: string
}

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export interface CustomResourceSubresourcesV1beta1 {
  /**
   * Scale denotes the scale subresource for CustomResources
   */
  scale?: CustomResourceSubresourceScaleV1beta1
  /**
   * Status denotes the status subresource for CustomResources
   */
  status?: Object
}

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export interface CustomResourceValidationV1beta1 {
  /**
   * OpenAPIV3Schema is the OpenAPI v3 schema to be validated against.
   */
  openAPIV3Schema?: JSONSchemaPropsV1beta1
}

/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export interface DaemonSetV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: DaemonSetSpecV1beta1
  /**
   * The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: DaemonSetStatusV1beta1
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export interface DaemonSetConditionV1beta1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of DaemonSet condition.
   */
  type: string
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export interface DaemonSetListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * A list of daemon sets.
   */
  items: DaemonSetV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export interface DaemonSetSpecV1beta1 {
  /**
   * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
   */
  minReadySeconds?: number
  /**
   * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
   */
  revisionHistoryLimit?: number
  /**
   * A label query over pods that are managed by the daemon set. Must match in order to be controlled. If empty, defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector?: LabelSelectorV1
  /**
   * An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
   */
  template: PodTemplateSpecV1
  /**
   * DEPRECATED. A sequence number representing a specific generation of the template. Populated by the system. It can be set only during the creation.
   */
  templateGeneration?: number
  /**
   * An update strategy to replace existing DaemonSet pods with new pods.
   */
  updateStrategy?: DaemonSetUpdateStrategyV1beta1
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export interface DaemonSetStatusV1beta1 {
  /**
   * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a DaemonSet's current state.
   */
  conditions?: DaemonSetConditionV1beta1[]
  /**
   * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  currentNumberScheduled: number
  /**
   * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  desiredNumberScheduled: number
  /**
   * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
   */
  numberAvailable?: number
  /**
   * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  numberMisscheduled: number
  /**
   * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready.
   */
  numberReady: number
  /**
   * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
   */
  numberUnavailable?: number
  /**
   * The most recent generation observed by the daemon set controller.
   */
  observedGeneration?: number
  /**
   * The total number of nodes that are running updated daemon pod
   */
  updatedNumberScheduled?: number
}

export interface DaemonSetUpdateStrategyV1beta1 {
  /**
   * Rolling update config params. Present only if type = "RollingUpdate".
   */
  rollingUpdate?: RollingUpdateDaemonSetV1beta1
  /**
   * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is OnDelete.
   */
  type?: string
}

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 */
export interface EventV1beta1 {
  /**
   * What action was taken/failed regarding to the regarding object.
   */
  action?: string
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Deprecated field assuring backward compatibility with core.v1 Event type
   */
  deprecatedCount?: number
  /**
   * Deprecated field assuring backward compatibility with core.v1 Event type
   */
  deprecatedFirstTimestamp?: string
  /**
   * Deprecated field assuring backward compatibility with core.v1 Event type
   */
  deprecatedLastTimestamp?: string
  /**
   * Deprecated field assuring backward compatibility with core.v1 Event type
   */
  deprecatedSource?: EventSourceV1
  /**
   * Required. Time when this Event was first observed.
   */
  eventTime: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Optional. A human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
   */
  note?: string
  /**
   * Why the action was taken.
   */
  reason?: string
  /**
   * The object this Event is about. In most cases it's an Object reporting controller implements. E.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object.
   */
  regarding?: ObjectReferenceV1
  /**
   * Optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object.
   */
  related?: ObjectReferenceV1
  /**
   * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
   */
  reportingController?: string
  /**
   * ID of the controller instance, e.g. `kubelet-xyzf`.
   */
  reportingInstance?: string
  /**
   * Data about the Event series this event represents or nil if it's a singleton Event.
   */
  series?: EventSeriesV1beta1
  /**
   * Type of this event (Normal, Warning), new types could be added in the future.
   */
  type?: string
}

/**
 * EventList is a list of Event objects.
 */
export interface EventListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of schema objects.
   */
  items: EventV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export interface EventSeriesV1beta1 {
  /**
   * Number of occurrences in this series up to the last heartbeat time
   */
  count: number
  /**
   * Time when last Event from the series was seen before last heartbeat.
   */
  lastObservedTime: string
  /**
   * Information whether this series is ongoing or finished.
   */
  state: string
}

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export interface EvictionV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * DeleteOptions may be provided
   */
  deleteOptions?: DeleteOptionsV1
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * ObjectMeta describes the pod that is being evicted.
   */
  metadata?: ObjectMetaV1
}

/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export interface ExternalDocumentationV1beta1 {
  description?: string
  url?: string
}

/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 */
export interface HTTPIngressPathV1beta1 {
  /**
   * Backend defines the referenced service endpoint to which the traffic will be forwarded to.
   */
  backend: IngressBackendV1beta1
  /**
   * Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend.
   */
  path?: string
}

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export interface HTTPIngressRuleValueV1beta1 {
  /**
   * A collection of paths that map requests to backends.
   */
  paths: HTTPIngressPathV1beta1[]
}

/**
 * DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export interface IPBlockV1beta1 {
  /**
   * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24"
   */
  cidr: string
  /**
   * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range
   */
  except?: string[]
}

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
export interface IngressV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: IngressSpecV1beta1
  /**
   * Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: IngressStatusV1beta1
}

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export interface IngressBackendV1beta1 {
  /**
   * Specifies the name of the referenced service.
   */
  serviceName: string
  /**
   * Specifies the port of the referenced service.
   */
  servicePort: Object
}

/**
 * IngressList is a collection of Ingress.
 */
export interface IngressListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of Ingress.
   */
  items: IngressV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
export interface IngressRuleV1beta1 {
  /**
   * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the
   * 	  IP in the Spec of the parent Ingress.
   * 2. The `:` delimiter is not respected because ports are not allowed.
   * 	  Currently the port of an Ingress is implicitly :80 for http and
   * 	  :443 for https.
   * Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
   */
  host?: string
  http?: HTTPIngressRuleValueV1beta1
}

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
export interface IngressSpecV1beta1 {
  /**
   * A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default.
   */
  backend?: IngressBackendV1beta1
  /**
   * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
   */
  rules?: IngressRuleV1beta1[]
  /**
   * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
   */
  tls?: IngressTLSV1beta1[]
}

/**
 * IngressStatus describe the current state of the Ingress.
 */
export interface IngressStatusV1beta1 {
  /**
   * LoadBalancer contains the current status of the load-balancer.
   */
  loadBalancer?: LoadBalancerStatusV1
}

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export interface IngressTLSV1beta1 {
  /**
   * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
   */
  hosts?: string[]
  /**
   * SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
   */
  secretName?: string
}

/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 */
export interface JSONSchemaPropsV1beta1 {
  $ref?: string
  $schema?: string
  /**
   * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
   */
  additionalItems?: Object
  /**
   * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
   */
  additionalProperties?: Object
  allOf?: JSONSchemaPropsV1beta1[]
  anyOf?: JSONSchemaPropsV1beta1[]
  /**
   * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
   */
  default?: Object
  definitions?: Object
  dependencies?: Object
  description?: string
  enum?: Object[]
  /**
   * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
   */
  example?: Object
  exclusiveMaximum?: boolean
  exclusiveMinimum?: boolean
  externalDocs?: ExternalDocumentationV1beta1
  format?: string
  id?: string
  /**
   * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
   */
  items?: Object
  maxItems?: number
  maxLength?: number
  maxProperties?: number
  maximum?: number
  minItems?: number
  minLength?: number
  minProperties?: number
  minimum?: number
  multipleOf?: number
  not?: JSONSchemaPropsV1beta1
  oneOf?: JSONSchemaPropsV1beta1[]
  pattern?: string
  patternProperties?: Object
  properties?: Object
  required?: string[]
  title?: string
  type?: string
  uniqueItems?: boolean
}

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export interface JobTemplateSpecV1beta1 {
  /**
   * Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: JobSpecV1
}

/**
 * Lease defines a lease concept.
 */
export interface LeaseV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: LeaseSpecV1beta1
}

/**
 * LeaseList is a list of Lease objects.
 */
export interface LeaseListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of schema objects.
   */
  items: LeaseV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * LeaseSpec is a specification of a Lease.
 */
export interface LeaseSpecV1beta1 {
  /**
   * acquireTime is a time when the current lease was acquired.
   */
  acquireTime?: string
  /**
   * holderIdentity contains the identity of the holder of a current lease.
   */
  holderIdentity?: string
  /**
   * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
   */
  leaseDurationSeconds?: number
  /**
   * leaseTransitions is the number of transitions of a lease between holders.
   */
  leaseTransitions?: number
  /**
   * renewTime is a time when the current holder of a lease has last updated the lease.
   */
  renewTime?: string
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export interface LocalSubjectAccessReviewV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
   */
  spec: SubjectAccessReviewSpecV1beta1
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   */
  status?: SubjectAccessReviewStatusV1beta1
}

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export interface MutatingWebhookConfigurationV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Webhooks is a list of webhooks and the affected resources and operations.
   */
  webhooks?: WebhookV1beta1[]
}

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export interface MutatingWebhookConfigurationListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of MutatingWebhookConfiguration.
   */
  items: MutatingWebhookConfigurationV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export interface NetworkPolicyV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior for this NetworkPolicy.
   */
  spec?: NetworkPolicySpecV1beta1
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export interface NetworkPolicyEgressRuleV1beta1 {
  /**
   * List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
   */
  ports?: NetworkPolicyPortV1beta1[]
  /**
   * List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
   */
  to?: NetworkPolicyPeerV1beta1[]
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 */
export interface NetworkPolicyIngressRuleV1beta1 {
  /**
   * List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
   */
  from?: NetworkPolicyPeerV1beta1[]
  /**
   * List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
   */
  ports?: NetworkPolicyPortV1beta1[]
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 */
export interface NetworkPolicyListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of schema objects.
   */
  items: NetworkPolicyV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 */
export interface NetworkPolicyPeerV1beta1 {
  /**
   * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
   */
  ipBlock?: IPBlockV1beta1
  /**
   * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
   * 
   * If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
   */
  namespaceSelector?: LabelSelectorV1
  /**
   * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
   * 
   * If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
   */
  podSelector?: LabelSelectorV1
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 */
export interface NetworkPolicyPortV1beta1 {
  /**
   * If specified, the port on the given protocol.  This can either be a numerical or named port on a pod.  If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
   */
  port?: Object
  /**
   * Optional.  The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
   */
  protocol?: string
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
 */
export interface NetworkPolicySpecV1beta1 {
  /**
   * List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
   */
  egress?: NetworkPolicyEgressRuleV1beta1[]
  /**
   * List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default).
   */
  ingress?: NetworkPolicyIngressRuleV1beta1[]
  /**
   * Selects the pods to which this NetworkPolicy object applies.  The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods.  In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
   */
  podSelector: LabelSelectorV1
  /**
   * List of rule types that the NetworkPolicy relates to. Valid options are Ingress, Egress, or Ingress,Egress. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
   */
  policyTypes?: string[]
}

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export interface NonResourceAttributesV1beta1 {
  /**
   * Path is the URL path of the request
   */
  path?: string
  /**
   * Verb is the standard HTTP verb
   */
  verb?: string
}

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export interface NonResourceRuleV1beta1 {
  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
   */
  nonResourceURLs?: string[]
  /**
   * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
   */
  verbs: string[]
}

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export interface PodDisruptionBudgetV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the PodDisruptionBudget.
   */
  spec?: PodDisruptionBudgetSpecV1beta1
  /**
   * Most recently observed status of the PodDisruptionBudget.
   */
  status?: PodDisruptionBudgetStatusV1beta1
}

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export interface PodDisruptionBudgetListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  items: PodDisruptionBudgetV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export interface PodDisruptionBudgetSpecV1beta1 {
  /**
   * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
   */
  maxUnavailable?: Object
  /**
   * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
   */
  minAvailable?: Object
  /**
   * Label query over pods whose evictions are managed by the disruption budget.
   */
  selector?: LabelSelectorV1
}

/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
export interface PodDisruptionBudgetStatusV1beta1 {
  /**
   * current number of healthy pods
   */
  currentHealthy: number
  /**
   * minimum desired number of healthy pods
   */
  desiredHealthy: number
  /**
   * DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
   */
  disruptedPods?: Object
  /**
   * Number of pod disruptions that are currently allowed.
   */
  disruptionsAllowed: number
  /**
   * total number of pods counted by this disruption budget
   */
  expectedPods: number
  /**
   * Most recent generation observed when updating this PDB status. PodDisruptionsAllowed and other status informatio is valid only if observedGeneration equals to PDB's object generation.
   */
  observedGeneration?: number
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export interface PolicyRuleV1beta1 {
  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
   */
  apiGroups?: string[]
  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
   */
  nonResourceURLs?: string[]
  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
   */
  resourceNames?: string[]
  /**
   * Resources is a list of resources this rule applies to.  '*' represents all resources in the specified apiGroups. '...foo' represents the subresource 'foo' for all resources in the specified apiGroups.
   */
  resources?: string[]
  /**
   * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
   */
  verbs: string[]
}

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export interface PriorityClassV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
   */
  description?: string
  /**
   * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
   */
  globalDefault?: boolean
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
   */
  value: number
}

/**
 * PriorityClassList is a collection of priority classes.
 */
export interface PriorityClassListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is the list of PriorityClasses
   */
  items: PriorityClassV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export interface ReplicaSetV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: ReplicaSetSpecV1beta1
  /**
   * Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: ReplicaSetStatusV1beta1
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export interface ReplicaSetConditionV1beta1 {
  /**
   * The last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of replica set condition.
   */
  type: string
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export interface ReplicaSetListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
   */
  items: ReplicaSetV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export interface ReplicaSetSpecV1beta1 {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number
  /**
   * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
   */
  replicas?: number
  /**
   * Selector is a label query over pods that should match the replica count. If the selector is empty, it is defaulted to the labels present on the pod template. Label keys and values that must match in order to be controlled by this replica set. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector?: LabelSelectorV1
  /**
   * Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
   */
  template?: PodTemplateSpecV1
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export interface ReplicaSetStatusV1beta1 {
  /**
   * The number of available replicas (ready for at least minReadySeconds) for this replica set.
   */
  availableReplicas?: number
  /**
   * Represents the latest available observations of a replica set's current state.
   */
  conditions?: ReplicaSetConditionV1beta1[]
  /**
   * The number of pods that have labels matching the labels of the pod template of the replicaset.
   */
  fullyLabeledReplicas?: number
  /**
   * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
   */
  observedGeneration?: number
  /**
   * The number of ready replicas for this replica set.
   */
  readyReplicas?: number
  /**
   * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
   */
  replicas: number
}

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export interface ResourceAttributesV1beta1 {
  /**
   * Group is the API Group of the Resource.  "*" means all.
   */
  group?: string
  /**
   * Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
   */
  name?: string
  /**
   * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
   */
  namespace?: string
  /**
   * Resource is one of the existing resource types.  "*" means all.
   */
  resource?: string
  /**
   * Subresource is one of the existing resource types.  "" means none.
   */
  subresource?: string
  /**
   * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.
   */
  verb?: string
  /**
   * Version is the API Version of the Resource.  "*" means all.
   */
  version?: string
}

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export interface ResourceRuleV1beta1 {
  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all.
   */
  apiGroups?: string[]
  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all.
   */
  resourceNames?: string[]
  /**
   * Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
   *  "...foo" represents the subresource 'foo' for all resources in the specified apiGroups.
   */
  resources?: string[]
  /**
   * Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all.
   */
  verbs: string[]
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export interface RoleV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Rules holds all the PolicyRules for this Role
   */
  rules: PolicyRuleV1beta1[]
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export interface RoleBindingV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
   */
  roleRef: RoleRefV1beta1
  /**
   * Subjects holds references to the objects the role applies to.
   */
  subjects?: SubjectV1beta1[]
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export interface RoleBindingListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of RoleBindings
   */
  items: RoleBindingV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * RoleList is a collection of Roles
 */
export interface RoleListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is a list of Roles
   */
  items: RoleV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata.
   */
  metadata?: ListMetaV1
}

/**
 * RoleRef contains information that points to the role being used
 */
export interface RoleRefV1beta1 {
  /**
   * APIGroup is the group for the resource being referenced
   */
  apiGroup: string
  /**
   * Kind is the type of resource being referenced
   */
  kind: string
  /**
   * Name is the name of resource being referenced
   */
  name: string
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export interface RollingUpdateDaemonSetV1beta1 {
  /**
   * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
   */
  maxUnavailable?: Object
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export interface RollingUpdateStatefulSetStrategyV1beta1 {
  /**
   * Partition indicates the ordinal at which the StatefulSet should be partitioned.
   */
  partition?: number
}

/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
export interface RuleWithOperationsV1beta1 {
  /**
   * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
   */
  apiGroups?: string[]
  /**
   * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
   */
  apiVersions?: string[]
  /**
   * Operations is the operations the admission hook cares about - CREATE, UPDATE, or * for all operations. If '*' is present, the length of the slice must be one. Required.
   */
  operations?: string[]
  /**
   * Resources is a list of resources this rule applies to.
   * 
   * For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '...scale' means all scale subresources. '...*' means all resources and their subresources.
   * 
   * If wildcard is present, the validation rule will ensure resources do not overlap with each other.
   * 
   * Depending on the enclosing object, subresources might not be allowed. Required.
   */
  resources?: string[]
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export interface SelfSubjectAccessReviewV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated.  user and groups must be empty
   */
  spec: SelfSubjectAccessReviewSpecV1beta1
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   */
  status?: SubjectAccessReviewStatusV1beta1
}

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SelfSubjectAccessReviewSpecV1beta1 {
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: NonResourceAttributesV1beta1
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: ResourceAttributesV1beta1
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export interface SelfSubjectRulesReviewV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated.
   */
  spec: SelfSubjectRulesReviewSpecV1beta1
  /**
   * Status is filled in by the server and indicates the set of actions a user can perform.
   */
  status?: SubjectRulesReviewStatusV1beta1
}

export interface SelfSubjectRulesReviewSpecV1beta1 {
  /**
   * Namespace to evaluate rules for. Required.
   */
  namespace?: string
}

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export interface StatefulSetV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec defines the desired identities of pods in this set.
   */
  spec?: StatefulSetSpecV1beta1
  /**
   * Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
   */
  status?: StatefulSetStatusV1beta1
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export interface StatefulSetConditionV1beta1 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of statefulset condition.
   */
  type: string
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export interface StatefulSetListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  items: StatefulSetV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export interface StatefulSetSpecV1beta1 {
  /**
   * podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
   */
  podManagementPolicy?: string
  /**
   * replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
   */
  replicas?: number
  /**
   * revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
   */
  revisionHistoryLimit?: number
  /**
   * selector is a label query over pods that should match the replica count. If empty, defaulted to labels on the pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector?: LabelSelectorV1
  /**
   * serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
   */
  serviceName: string
  /**
   * template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
   */
  template: PodTemplateSpecV1
  /**
   * updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
   */
  updateStrategy?: StatefulSetUpdateStrategyV1beta1
  /**
   * volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
   */
  volumeClaimTemplates?: PersistentVolumeClaimV1[]
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export interface StatefulSetStatusV1beta1 {
  /**
   * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a statefulset's current state.
   */
  conditions?: StatefulSetConditionV1beta1[]
  /**
   * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
   */
  currentReplicas?: number
  /**
   * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
   */
  currentRevision?: string
  /**
   * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
   */
  observedGeneration?: number
  /**
   * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
   */
  readyReplicas?: number
  /**
   * replicas is the number of Pods created by the StatefulSet controller.
   */
  replicas: number
  /**
   * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
   */
  updateRevision?: string
  /**
   * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
   */
  updatedReplicas?: number
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface StatefulSetUpdateStrategyV1beta1 {
  /**
   * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
   */
  rollingUpdate?: RollingUpdateStatefulSetStrategyV1beta1
  /**
   * Type indicates the type of the StatefulSetUpdateStrategy.
   */
  type?: string
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export interface StorageClassV1beta1 {
  /**
   * AllowVolumeExpansion shows whether the storage class allow volume expand
   */
  allowVolumeExpansion?: boolean
  /**
   * Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
   */
  allowedTopologies?: TopologySelectorTermV1[]
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
   */
  mountOptions?: string[]
  /**
   * Parameters holds the parameters for the provisioner that should create volumes of this storage class.
   */
  parameters?: Object
  /**
   * Provisioner indicates the type of the provisioner.
   */
  provisioner: string
  /**
   * Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete.
   */
  reclaimPolicy?: string
  /**
   * VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
   */
  volumeBindingMode?: string
}

/**
 * StorageClassList is a collection of storage classes.
 */
export interface StorageClassListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of StorageClasses
   */
  items: StorageClassV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export interface SubjectV1beta1 {
  /**
   * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
   */
  apiGroup?: string
  /**
   * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
   */
  kind: string
  /**
   * Name of the object being referenced.
   */
  name: string
  /**
   * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
   */
  namespace?: string
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export interface SubjectAccessReviewV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated
   */
  spec: SubjectAccessReviewSpecV1beta1
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   */
  status?: SubjectAccessReviewStatusV1beta1
}

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SubjectAccessReviewSpecV1beta1 {
  /**
   * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
   */
  extra?: Object
  /**
   * Groups is the groups you're testing for.
   */
  group?: string[]
  /**
   * NonResourceAttributes describes information for a non-resource access request
   */
  nonResourceAttributes?: NonResourceAttributesV1beta1
  /**
   * ResourceAuthorizationAttributes describes information for a resource access request
   */
  resourceAttributes?: ResourceAttributesV1beta1
  /**
   * UID information about the requesting user.
   */
  uid?: string
  /**
   * User is the user you're testing for. If you specify "User" but not "Group", then is it interpreted as "What if User were not a member of any groups
   */
  user?: string
}

/**
 * SubjectAccessReviewStatus
 */
export interface SubjectAccessReviewStatusV1beta1 {
  /**
   * Allowed is required. True if the action would be allowed, false otherwise.
   */
  allowed: boolean
  /**
   * Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
   */
  denied?: boolean
  /**
   * EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
   */
  evaluationError?: string
  /**
   * Reason is optional.  It indicates why a request was allowed or denied.
   */
  reason?: string
}

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export interface SubjectRulesReviewStatusV1beta1 {
  /**
   * EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
   */
  evaluationError?: string
  /**
   * Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
   */
  incomplete: boolean
  /**
   * NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
   */
  nonResourceRules: NonResourceRuleV1beta1[]
  /**
   * ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
   */
  resourceRules: ResourceRuleV1beta1[]
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export interface TokenReviewV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec holds information about the request being evaluated
   */
  spec: TokenReviewSpecV1beta1
  /**
   * Status is filled in by the server and indicates whether the request can be authenticated.
   */
  status?: TokenReviewStatusV1beta1
}

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export interface TokenReviewSpecV1beta1 {
  /**
   * Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
   */
  audiences?: string[]
  /**
   * Token is the opaque bearer token.
   */
  token?: string
}

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export interface TokenReviewStatusV1beta1 {
  /**
   * Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server.
   */
  audiences?: string[]
  /**
   * Authenticated indicates that the token was associated with a known user.
   */
  authenticated?: boolean
  /**
   * Error indicates that the token couldn't be checked
   */
  error?: string
  /**
   * User is the UserInfo associated with the provided token.
   */
  user?: UserInfoV1beta1
}

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export interface UserInfoV1beta1 {
  /**
   * Any additional information provided by the authenticator.
   */
  extra?: Object
  /**
   * The names of groups this user is a part of.
   */
  groups?: string[]
  /**
   * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
   */
  uid?: string
  /**
   * The name that uniquely identifies this user among all active users.
   */
  username?: string
}

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
export interface ValidatingWebhookConfigurationV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Webhooks is a list of webhooks and the affected resources and operations.
   */
  webhooks?: WebhookV1beta1[]
}

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export interface ValidatingWebhookConfigurationListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of ValidatingWebhookConfiguration.
   */
  items: ValidatingWebhookConfigurationV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export interface VolumeAttachmentV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
   */
  spec: VolumeAttachmentSpecV1beta1
  /**
   * Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
   */
  status?: VolumeAttachmentStatusV1beta1
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export interface VolumeAttachmentListV1beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of VolumeAttachments
   */
  items: VolumeAttachmentV1beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface VolumeAttachmentSourceV1beta1 {
  /**
   * Name of the persistent volume to attach.
   */
  persistentVolumeName?: string
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export interface VolumeAttachmentSpecV1beta1 {
  /**
   * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
   */
  attacher: string
  /**
   * The node that the volume should be attached to.
   */
  nodeName: string
  /**
   * Source represents the volume that should be attached.
   */
  source: VolumeAttachmentSourceV1beta1
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export interface VolumeAttachmentStatusV1beta1 {
  /**
   * The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachError?: VolumeErrorV1beta1
  /**
   * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attached: boolean
  /**
   * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachmentMetadata?: Object
  /**
   * The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
   */
  detachError?: VolumeErrorV1beta1
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface VolumeErrorV1beta1 {
  /**
   * String detailing the error encountered during Attach or Detach operation. This string maybe logged, so it should not contain sensitive information.
   */
  message?: string
  /**
   * Time the error was encountered.
   */
  time?: string
}

/**
 * Webhook describes an admission webhook and the resources and operations it applies to.
 */
export interface WebhookV1beta1 {
  /**
   * ClientConfig defines how to communicate with the hook. Required
   */
  clientConfig: WebhookClientConfigAdmissionregistrationV1beta1
  /**
   * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore.
   */
  failurePolicy?: string
  /**
   * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
   */
  name: string
  /**
   * NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.
   * 
   * For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
   *   "matchExpressions": [
   *     {
   *       "key": "runlevel",
   *       "operator": "NotIn",
   *       "values": [
   *         "0",
   *         "1"
   *       ]
   *     }
   *   ]
   * }
   * 
   * If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
   *   "matchExpressions": [
   *     {
   *       "key": "environment",
   *       "operator": "In",
   *       "values": [
   *         "prod",
   *         "staging"
   *       ]
   *     }
   *   ]
   * }
   * 
   * See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.
   * 
   * Default to the empty LabelSelector, which matches everything.
   */
  namespaceSelector?: LabelSelectorV1
  /**
   * Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
   */
  rules?: RuleWithOperationsV1beta1[]
  /**
   * SideEffects states whether this webhookk has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission change and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown.
   */
  sideEffects?: string
}

/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export interface ControllerRevisionV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Data is the serialized representation of the state.
   */
  data?: RawExtensionRuntime
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Revision indicates the revision of the state represented by Data.
   */
  revision: number
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export interface ControllerRevisionListV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of ControllerRevisions
   */
  items: ControllerRevisionV1beta2[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export interface DaemonSetV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: DaemonSetSpecV1beta2
  /**
   * The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: DaemonSetStatusV1beta2
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export interface DaemonSetConditionV1beta2 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of DaemonSet condition.
   */
  type: string
}

/**
 * DaemonSetList is a collection of daemon sets.
 */
export interface DaemonSetListV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * A list of daemon sets.
   */
  items: DaemonSetV1beta2[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export interface DaemonSetSpecV1beta2 {
  /**
   * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
   */
  minReadySeconds?: number
  /**
   * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
   */
  revisionHistoryLimit?: number
  /**
   * A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector: LabelSelectorV1
  /**
   * An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
   */
  template: PodTemplateSpecV1
  /**
   * An update strategy to replace existing DaemonSet pods with new pods.
   */
  updateStrategy?: DaemonSetUpdateStrategyV1beta2
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export interface DaemonSetStatusV1beta2 {
  /**
   * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a DaemonSet's current state.
   */
  conditions?: DaemonSetConditionV1beta2[]
  /**
   * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  currentNumberScheduled: number
  /**
   * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  desiredNumberScheduled: number
  /**
   * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
   */
  numberAvailable?: number
  /**
   * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
   */
  numberMisscheduled: number
  /**
   * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready.
   */
  numberReady: number
  /**
   * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
   */
  numberUnavailable?: number
  /**
   * The most recent generation observed by the daemon set controller.
   */
  observedGeneration?: number
  /**
   * The total number of nodes that are running updated daemon pod
   */
  updatedNumberScheduled?: number
}

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface DaemonSetUpdateStrategyV1beta2 {
  /**
   * Rolling update config params. Present only if type = "RollingUpdate".
   */
  rollingUpdate?: RollingUpdateDaemonSetV1beta2
  /**
   * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
   */
  type?: string
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export interface DeploymentV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the Deployment.
   */
  spec?: DeploymentSpecV1beta2
  /**
   * Most recently observed status of the Deployment.
   */
  status?: DeploymentStatusV1beta2
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export interface DeploymentConditionV1beta2 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * The last time this condition was updated.
   */
  lastUpdateTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of deployment condition.
   */
  type: string
}

/**
 * DeploymentList is a list of Deployments.
 */
export interface DeploymentListV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Items is the list of Deployments.
   */
  items: DeploymentV1beta2[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata.
   */
  metadata?: ListMetaV1
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export interface DeploymentSpecV1beta2 {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number
  /**
   * Indicates that the deployment is paused.
   */
  paused?: boolean
  /**
   * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
   */
  progressDeadlineSeconds?: number
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   */
  replicas?: number
  /**
   * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
   */
  revisionHistoryLimit?: number
  /**
   * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
   */
  selector: LabelSelectorV1
  /**
   * The deployment strategy to use to replace existing pods with new ones.
   */
  strategy?: DeploymentStrategyV1beta2
  /**
   * Template describes the pods that will be created.
   */
  template: PodTemplateSpecV1
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export interface DeploymentStatusV1beta2 {
  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
   */
  availableReplicas?: number
  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a deployment's current state.
   */
  conditions?: DeploymentConditionV1beta2[]
  /**
   * The generation observed by the deployment controller.
   */
  observedGeneration?: number
  /**
   * Total number of ready pods targeted by this deployment.
   */
  readyReplicas?: number
  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   */
  replicas?: number
  /**
   * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
   */
  unavailableReplicas?: number
  /**
   * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
   */
  updatedReplicas?: number
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface DeploymentStrategyV1beta2 {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  rollingUpdate?: RollingUpdateDeploymentV1beta2
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   */
  type?: string
}

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export interface ReplicaSetV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: ReplicaSetSpecV1beta2
  /**
   * Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: ReplicaSetStatusV1beta2
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export interface ReplicaSetConditionV1beta2 {
  /**
   * The last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of replica set condition.
   */
  type: string
}

/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export interface ReplicaSetListV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
   */
  items: ReplicaSetV1beta2[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  metadata?: ListMetaV1
}

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export interface ReplicaSetSpecV1beta2 {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number
  /**
   * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
   */
  replicas?: number
  /**
   * Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector: LabelSelectorV1
  /**
   * Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
   */
  template?: PodTemplateSpecV1
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export interface ReplicaSetStatusV1beta2 {
  /**
   * The number of available replicas (ready for at least minReadySeconds) for this replica set.
   */
  availableReplicas?: number
  /**
   * Represents the latest available observations of a replica set's current state.
   */
  conditions?: ReplicaSetConditionV1beta2[]
  /**
   * The number of pods that have labels matching the labels of the pod template of the replicaset.
   */
  fullyLabeledReplicas?: number
  /**
   * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
   */
  observedGeneration?: number
  /**
   * The number of ready replicas for this replica set.
   */
  readyReplicas?: number
  /**
   * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
   */
  replicas: number
}

/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export interface RollingUpdateDaemonSetV1beta2 {
  /**
   * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
   */
  maxUnavailable?: Object
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export interface RollingUpdateDeploymentV1beta2 {
  /**
   * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
   */
  maxSurge?: Object
  /**
   * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
   */
  maxUnavailable?: Object
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export interface RollingUpdateStatefulSetStrategyV1beta2 {
  /**
   * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
   */
  partition?: number
}

/**
 * Scale represents a scaling request for a resource.
 */
export interface ScaleV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
   */
  metadata?: ObjectMetaV1
  /**
   * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
   */
  spec?: ScaleSpecV1beta2
  /**
   * current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only.
   */
  status?: ScaleStatusV1beta2
}

/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export interface ScaleSpecV1beta2 {
  /**
   * desired number of instances for the scaled object.
   */
  replicas?: number
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export interface ScaleStatusV1beta2 {
  /**
   * actual number of observed instances of the scaled object.
   */
  replicas: number
  /**
   * label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
   */
  selector?: Object
  /**
   * label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  targetSelector?: string
}

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export interface StatefulSetV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ObjectMetaV1
  /**
   * Spec defines the desired identities of pods in this set.
   */
  spec?: StatefulSetSpecV1beta2
  /**
   * Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
   */
  status?: StatefulSetStatusV1beta2
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export interface StatefulSetConditionV1beta2 {
  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string
  /**
   * The reason for the condition's last transition.
   */
  reason?: string
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string
  /**
   * Type of statefulset condition.
   */
  type: string
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export interface StatefulSetListV1beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  items: StatefulSetV1beta2[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: ListMetaV1
}

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export interface StatefulSetSpecV1beta2 {
  /**
   * podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
   */
  podManagementPolicy?: string
  /**
   * replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
   */
  replicas?: number
  /**
   * revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
   */
  revisionHistoryLimit?: number
  /**
   * selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   */
  selector: LabelSelectorV1
  /**
   * serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
   */
  serviceName: string
  /**
   * template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
   */
  template: PodTemplateSpecV1
  /**
   * updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
   */
  updateStrategy?: StatefulSetUpdateStrategyV1beta2
  /**
   * volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
   */
  volumeClaimTemplates?: PersistentVolumeClaimV1[]
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export interface StatefulSetStatusV1beta2 {
  /**
   * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   */
  collisionCount?: number
  /**
   * Represents the latest available observations of a statefulset's current state.
   */
  conditions?: StatefulSetConditionV1beta2[]
  /**
   * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
   */
  currentReplicas?: number
  /**
   * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
   */
  currentRevision?: string
  /**
   * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
   */
  observedGeneration?: number
  /**
   * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
   */
  readyReplicas?: number
  /**
   * replicas is the number of Pods created by the StatefulSet controller.
   */
  replicas: number
  /**
   * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
   */
  updateRevision?: string
  /**
   * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
   */
  updatedReplicas?: number
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface StatefulSetUpdateStrategyV1beta2 {
  /**
   * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
   */
  rollingUpdate?: RollingUpdateStatefulSetStrategyV1beta2
  /**
   * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
   */
  type?: string
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export interface CronJobV2alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: CronJobSpecV2alpha1
  /**
   * Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: CronJobStatusV2alpha1
}

/**
 * CronJobList is a collection of cron jobs.
 */
export interface CronJobListV2alpha1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is the list of CronJobs.
   */
  items: CronJobV2alpha1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ListMetaV1
}

/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export interface CronJobSpecV2alpha1 {
  /**
   * Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one
   */
  concurrencyPolicy?: string
  /**
   * The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified.
   */
  failedJobsHistoryLimit?: number
  /**
   * Specifies the job that will be created when executing a CronJob.
   */
  jobTemplate: JobTemplateSpecV2alpha1
  /**
   * The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
   */
  schedule: string
  /**
   * Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
   */
  startingDeadlineSeconds?: number
  /**
   * The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified.
   */
  successfulJobsHistoryLimit?: number
  /**
   * This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
   */
  suspend?: boolean
}

/**
 * CronJobStatus represents the current state of a cron job.
 */
export interface CronJobStatusV2alpha1 {
  /**
   * A list of pointers to currently running jobs.
   */
  active?: ObjectReferenceV1[]
  /**
   * Information when was the last time the job was successfully scheduled.
   */
  lastScheduleTime?: string
}

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export interface JobTemplateSpecV2alpha1 {
  /**
   * Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: JobSpecV1
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export interface CrossVersionObjectReferenceV2beta1 {
  /**
   * API version of the referent
   */
  apiVersion?: string
  /**
   * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds"
   */
  kind: string
  /**
   * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  name: string
}

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export interface ExternalMetricSourceV2beta1 {
  /**
   * metricName is the name of the metric in question.
   */
  metricName: string
  /**
   * metricSelector is used to identify a specific time series within a given metric.
   */
  metricSelector?: LabelSelectorV1
  /**
   * targetAverageValue is the target per-pod value of global metric (as a quantity). Mutually exclusive with TargetValue.
   */
  targetAverageValue?: string
  /**
   * targetValue is the target value of the metric (as a quantity). Mutually exclusive with TargetAverageValue.
   */
  targetValue?: string
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface ExternalMetricStatusV2beta1 {
  /**
   * currentAverageValue is the current value of metric averaged over autoscaled pods.
   */
  currentAverageValue?: string
  /**
   * currentValue is the current value of the metric (as a quantity)
   */
  currentValue: string
  /**
   * metricName is the name of a metric used for autoscaling in metric system.
   */
  metricName: string
  /**
   * metricSelector is used to identify a specific time series within a given metric.
   */
  metricSelector?: LabelSelectorV1
}

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export interface HorizontalPodAutoscalerV2beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
   */
  spec?: HorizontalPodAutoscalerSpecV2beta1
  /**
   * status is the current information about the autoscaler.
   */
  status?: HorizontalPodAutoscalerStatusV2beta1
}

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export interface HorizontalPodAutoscalerConditionV2beta1 {
  /**
   * lastTransitionTime is the last time the condition transitioned from one status to another
   */
  lastTransitionTime?: string
  /**
   * message is a human-readable explanation containing details about the transition
   */
  message?: string
  /**
   * reason is the reason for the condition's last transition.
   */
  reason?: string
  /**
   * status is the status of the condition (True, False, Unknown)
   */
  status: string
  /**
   * type describes the current condition
   */
  type: string
}

/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export interface HorizontalPodAutoscalerListV2beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is the list of horizontal pod autoscaler objects.
   */
  items: HorizontalPodAutoscalerV2beta1[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * metadata is the standard list metadata.
   */
  metadata?: ListMetaV1
}

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export interface HorizontalPodAutoscalerSpecV2beta1 {
  /**
   * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
   */
  maxReplicas: number
  /**
   * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond.
   */
  metrics?: MetricSpecV2beta1[]
  /**
   * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
   */
  minReplicas?: number
  /**
   * scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
   */
  scaleTargetRef: CrossVersionObjectReferenceV2beta1
}

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export interface HorizontalPodAutoscalerStatusV2beta1 {
  /**
   * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
   */
  conditions: HorizontalPodAutoscalerConditionV2beta1[]
  /**
   * currentMetrics is the last read state of the metrics used by this autoscaler.
   */
  currentMetrics?: MetricStatusV2beta1[]
  /**
   * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
   */
  currentReplicas: number
  /**
   * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
   */
  desiredReplicas: number
  /**
   * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
   */
  lastScaleTime?: string
  /**
   * observedGeneration is the most recent generation observed by this autoscaler.
   */
  observedGeneration?: number
}

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export interface MetricSpecV2beta1 {
  /**
   * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
   */
  external?: ExternalMetricSourceV2beta1
  /**
   * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
   */
  object?: ObjectMetricSourceV2beta1
  /**
   * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
   */
  pods?: PodsMetricSourceV2beta1
  /**
   * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
   */
  resource?: ResourceMetricSourceV2beta1
  /**
   * type is the type of metric source.  It should be one of "Object", "Pods" or "Resource", each mapping to a matching field in the object.
   */
  type: string
}

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export interface MetricStatusV2beta1 {
  /**
   * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
   */
  external?: ExternalMetricStatusV2beta1
  /**
   * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
   */
  object?: ObjectMetricStatusV2beta1
  /**
   * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
   */
  pods?: PodsMetricStatusV2beta1
  /**
   * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
   */
  resource?: ResourceMetricStatusV2beta1
  /**
   * type is the type of metric source.  It will be one of "Object", "Pods" or "Resource", each corresponds to a matching field in the object.
   */
  type: string
}

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface ObjectMetricSourceV2beta1 {
  /**
   * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
   */
  averageValue?: string
  /**
   * metricName is the name of the metric in question.
   */
  metricName: string
  /**
   * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics.
   */
  selector?: LabelSelectorV1
  /**
   * target is the described Kubernetes object.
   */
  target: CrossVersionObjectReferenceV2beta1
  /**
   * targetValue is the target value of the metric (as a quantity).
   */
  targetValue: string
}

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface ObjectMetricStatusV2beta1 {
  /**
   * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
   */
  averageValue?: string
  /**
   * currentValue is the current value of the metric (as a quantity).
   */
  currentValue: string
  /**
   * metricName is the name of the metric in question.
   */
  metricName: string
  /**
   * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the ObjectMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
   */
  selector?: LabelSelectorV1
  /**
   * target is the described Kubernetes object.
   */
  target: CrossVersionObjectReferenceV2beta1
}

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export interface PodsMetricSourceV2beta1 {
  /**
   * metricName is the name of the metric in question
   */
  metricName: string
  /**
   * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics.
   */
  selector?: LabelSelectorV1
  /**
   * targetAverageValue is the target value of the average of the metric across all relevant pods (as a quantity)
   */
  targetAverageValue: string
}

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export interface PodsMetricStatusV2beta1 {
  /**
   * currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity)
   */
  currentAverageValue: string
  /**
   * metricName is the name of the metric in question
   */
  metricName: string
  /**
   * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the PodsMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
   */
  selector?: LabelSelectorV1
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export interface ResourceMetricSourceV2beta1 {
  /**
   * name is the name of the resource in question.
   */
  name: string
  /**
   * targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
   */
  targetAverageUtilization?: number
  /**
   * targetAverageValue is the target value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type.
   */
  targetAverageValue?: string
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export interface ResourceMetricStatusV2beta1 {
  /**
   * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification.
   */
  currentAverageUtilization?: number
  /**
   * currentAverageValue is the current value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. It will always be set, regardless of the corresponding metric specification.
   */
  currentAverageValue: string
  /**
   * name is the name of the resource in question.
   */
  name: string
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export interface CrossVersionObjectReferenceV2beta2 {
  /**
   * API version of the referent
   */
  apiVersion?: string
  /**
   * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds"
   */
  kind: string
  /**
   * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  name: string
}

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export interface ExternalMetricSourceV2beta2 {
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierV2beta2
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTargetV2beta2
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface ExternalMetricStatusV2beta2 {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatusV2beta2
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierV2beta2
}

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export interface HorizontalPodAutoscalerV2beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: ObjectMetaV1
  /**
   * spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
   */
  spec?: HorizontalPodAutoscalerSpecV2beta2
  /**
   * status is the current information about the autoscaler.
   */
  status?: HorizontalPodAutoscalerStatusV2beta2
}

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export interface HorizontalPodAutoscalerConditionV2beta2 {
  /**
   * lastTransitionTime is the last time the condition transitioned from one status to another
   */
  lastTransitionTime?: string
  /**
   * message is a human-readable explanation containing details about the transition
   */
  message?: string
  /**
   * reason is the reason for the condition's last transition.
   */
  reason?: string
  /**
   * status is the status of the condition (True, False, Unknown)
   */
  status: string
  /**
   * type describes the current condition
   */
  type: string
}

/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export interface HorizontalPodAutoscalerListV2beta2 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * items is the list of horizontal pod autoscaler objects.
   */
  items: HorizontalPodAutoscalerV2beta2[]
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string
  /**
   * metadata is the standard list metadata.
   */
  metadata?: ListMetaV1
}

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export interface HorizontalPodAutoscalerSpecV2beta2 {
  /**
   * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
   */
  maxReplicas: number
  /**
   * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
   */
  metrics?: MetricSpecV2beta2[]
  /**
   * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
   */
  minReplicas?: number
  /**
   * scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
   */
  scaleTargetRef: CrossVersionObjectReferenceV2beta2
}

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export interface HorizontalPodAutoscalerStatusV2beta2 {
  /**
   * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
   */
  conditions: HorizontalPodAutoscalerConditionV2beta2[]
  /**
   * currentMetrics is the last read state of the metrics used by this autoscaler.
   */
  currentMetrics?: MetricStatusV2beta2[]
  /**
   * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
   */
  currentReplicas: number
  /**
   * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
   */
  desiredReplicas: number
  /**
   * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
   */
  lastScaleTime?: string
  /**
   * observedGeneration is the most recent generation observed by this autoscaler.
   */
  observedGeneration?: number
}

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export interface MetricIdentifierV2beta2 {
  /**
   * name is the name of the given metric
   */
  name: string
  /**
   * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
   */
  selector?: LabelSelectorV1
}

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export interface MetricSpecV2beta2 {
  /**
   * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
   */
  external?: ExternalMetricSourceV2beta2
  /**
   * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
   */
  object?: ObjectMetricSourceV2beta2
  /**
   * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
   */
  pods?: PodsMetricSourceV2beta2
  /**
   * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
   */
  resource?: ResourceMetricSourceV2beta2
  /**
   * type is the type of metric source.  It should be one of "Object", "Pods" or "Resource", each mapping to a matching field in the object.
   */
  type: string
}

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export interface MetricStatusV2beta2 {
  /**
   * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
   */
  external?: ExternalMetricStatusV2beta2
  /**
   * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
   */
  object?: ObjectMetricStatusV2beta2
  /**
   * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
   */
  pods?: PodsMetricStatusV2beta2
  /**
   * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
   */
  resource?: ResourceMetricStatusV2beta2
  /**
   * type is the type of metric source.  It will be one of "Object", "Pods" or "Resource", each corresponds to a matching field in the object.
   */
  type: string
}

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export interface MetricTargetV2beta2 {
  /**
   * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
   */
  averageUtilization?: number
  /**
   * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
   */
  averageValue?: string
  /**
   * type represents whether the metric type is Utilization, Value, or AverageValue
   */
  type: string
  /**
   * value is the target value of the metric (as a quantity).
   */
  value?: string
}

/**
 * MetricValueStatus holds the current value for a metric
 */
export interface MetricValueStatusV2beta2 {
  /**
   * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
   */
  averageUtilization?: number
  /**
   * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
   */
  averageValue?: string
  /**
   * value is the current value of the metric (as a quantity).
   */
  value?: string
}

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface ObjectMetricSourceV2beta2 {
  describedObject: CrossVersionObjectReferenceV2beta2
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierV2beta2
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTargetV2beta2
}

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface ObjectMetricStatusV2beta2 {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatusV2beta2
  describedObject: CrossVersionObjectReferenceV2beta2
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierV2beta2
}

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export interface PodsMetricSourceV2beta2 {
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierV2beta2
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTargetV2beta2
}

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export interface PodsMetricStatusV2beta2 {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatusV2beta2
  /**
   * metric identifies the target metric by name and selector
   */
  metric: MetricIdentifierV2beta2
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export interface ResourceMetricSourceV2beta2 {
  /**
   * name is the name of the resource in question.
   */
  name: string
  /**
   * target specifies the target value for the given metric
   */
  target: MetricTargetV2beta2
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export interface ResourceMetricStatusV2beta2 {
  /**
   * current contains the current value for the given metric
   */
  current: MetricValueStatusV2beta2
  /**
   * Name is the name of the resource in question.
   */
  name: string
}

/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export interface InfoVersion {
  buildDate: string
  compiler: string
  gitCommit: string
  gitTreeState: string
  gitVersion: string
  goVersion: string
  major: string
  minor: string
  platform: string
}

