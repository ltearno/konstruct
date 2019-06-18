import * as k8s from './kubernetes-api';
import './core';
export declare type Optional<T> = {
    [P in keyof T]?: T[P] extends boolean ? boolean : T[P] extends string ? string : T[P] extends number ? number : T[P] extends (infer I)[] ? Optional<I>[] : Optional<T[P]>;
};
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 */
export declare function mutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.MutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1>): k8s.MutatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1;
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export declare function mutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.MutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1>): k8s.MutatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1;
/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
export declare function ruleWithOperationsIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.RuleWithOperationsIoK8sApiAdmissionregistrationV1beta1>): k8s.RuleWithOperationsIoK8sApiAdmissionregistrationV1beta1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export declare function serviceReferenceIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.ServiceReferenceIoK8sApiAdmissionregistrationV1beta1>): k8s.ServiceReferenceIoK8sApiAdmissionregistrationV1beta1;
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 */
export declare function validatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.ValidatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1>): k8s.ValidatingWebhookConfigurationIoK8sApiAdmissionregistrationV1beta1;
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 */
export declare function validatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.ValidatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1>): k8s.ValidatingWebhookConfigurationListIoK8sApiAdmissionregistrationV1beta1;
/**
 * Webhook describes an admission webhook and the resources and operations it applies to.
 */
export declare function webhookIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.WebhookIoK8sApiAdmissionregistrationV1beta1>): k8s.WebhookIoK8sApiAdmissionregistrationV1beta1;
/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 */
export declare function webhookClientConfigIoK8sApiAdmissionregistrationV1beta1(options?: Optional<k8s.WebhookClientConfigIoK8sApiAdmissionregistrationV1beta1>): k8s.WebhookClientConfigIoK8sApiAdmissionregistrationV1beta1;
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export declare function controllerRevision(options?: Optional<k8s.ControllerRevision>): k8s.ControllerRevision;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export declare function controllerRevisionList(options?: Optional<k8s.ControllerRevisionList>): k8s.ControllerRevisionList;
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
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export declare function controllerRevisionIoK8sApiAppsV1beta1(options?: Optional<k8s.ControllerRevisionIoK8sApiAppsV1beta1>): k8s.ControllerRevisionIoK8sApiAppsV1beta1;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export declare function controllerRevisionListIoK8sApiAppsV1beta1(options?: Optional<k8s.ControllerRevisionListIoK8sApiAppsV1beta1>): k8s.ControllerRevisionListIoK8sApiAppsV1beta1;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export declare function deploymentIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentIoK8sApiAppsV1beta1>): k8s.DeploymentIoK8sApiAppsV1beta1;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export declare function deploymentConditionIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentConditionIoK8sApiAppsV1beta1>): k8s.DeploymentConditionIoK8sApiAppsV1beta1;
/**
 * DeploymentList is a list of Deployments.
 */
export declare function deploymentListIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentListIoK8sApiAppsV1beta1>): k8s.DeploymentListIoK8sApiAppsV1beta1;
/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export declare function deploymentRollbackIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentRollbackIoK8sApiAppsV1beta1>): k8s.DeploymentRollbackIoK8sApiAppsV1beta1;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export declare function deploymentSpecIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentSpecIoK8sApiAppsV1beta1>): k8s.DeploymentSpecIoK8sApiAppsV1beta1;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export declare function deploymentStatusIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentStatusIoK8sApiAppsV1beta1>): k8s.DeploymentStatusIoK8sApiAppsV1beta1;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export declare function deploymentStrategyIoK8sApiAppsV1beta1(options?: Optional<k8s.DeploymentStrategyIoK8sApiAppsV1beta1>): k8s.DeploymentStrategyIoK8sApiAppsV1beta1;
/**
 * DEPRECATED.
 */
export declare function rollbackConfigIoK8sApiAppsV1beta1(options?: Optional<k8s.RollbackConfigIoK8sApiAppsV1beta1>): k8s.RollbackConfigIoK8sApiAppsV1beta1;
/**
 * Spec to control the desired behavior of rolling update.
 */
export declare function rollingUpdateDeploymentIoK8sApiAppsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta1>): k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta1;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export declare function rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1(options?: Optional<k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1>): k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta1;
/**
 * Scale represents a scaling request for a resource.
 */
export declare function scaleIoK8sApiAppsV1beta1(options?: Optional<k8s.ScaleIoK8sApiAppsV1beta1>): k8s.ScaleIoK8sApiAppsV1beta1;
/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export declare function scaleSpecIoK8sApiAppsV1beta1(options?: Optional<k8s.ScaleSpecIoK8sApiAppsV1beta1>): k8s.ScaleSpecIoK8sApiAppsV1beta1;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export declare function scaleStatusIoK8sApiAppsV1beta1(options?: Optional<k8s.ScaleStatusIoK8sApiAppsV1beta1>): k8s.ScaleStatusIoK8sApiAppsV1beta1;
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export declare function statefulSetIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetIoK8sApiAppsV1beta1>): k8s.StatefulSetIoK8sApiAppsV1beta1;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export declare function statefulSetConditionIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetConditionIoK8sApiAppsV1beta1>): k8s.StatefulSetConditionIoK8sApiAppsV1beta1;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
export declare function statefulSetListIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetListIoK8sApiAppsV1beta1>): k8s.StatefulSetListIoK8sApiAppsV1beta1;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export declare function statefulSetSpecIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetSpecIoK8sApiAppsV1beta1>): k8s.StatefulSetSpecIoK8sApiAppsV1beta1;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export declare function statefulSetStatusIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetStatusIoK8sApiAppsV1beta1>): k8s.StatefulSetStatusIoK8sApiAppsV1beta1;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export declare function statefulSetUpdateStrategyIoK8sApiAppsV1beta1(options?: Optional<k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta1>): k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta1;
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export declare function controllerRevisionIoK8sApiAppsV1beta2(options?: Optional<k8s.ControllerRevisionIoK8sApiAppsV1beta2>): k8s.ControllerRevisionIoK8sApiAppsV1beta2;
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export declare function controllerRevisionListIoK8sApiAppsV1beta2(options?: Optional<k8s.ControllerRevisionListIoK8sApiAppsV1beta2>): k8s.ControllerRevisionListIoK8sApiAppsV1beta2;
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export declare function daemonSetIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetIoK8sApiAppsV1beta2>): k8s.DaemonSetIoK8sApiAppsV1beta2;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export declare function daemonSetConditionIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetConditionIoK8sApiAppsV1beta2>): k8s.DaemonSetConditionIoK8sApiAppsV1beta2;
/**
 * DaemonSetList is a collection of daemon sets.
 */
export declare function daemonSetListIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetListIoK8sApiAppsV1beta2>): k8s.DaemonSetListIoK8sApiAppsV1beta2;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export declare function daemonSetSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetSpecIoK8sApiAppsV1beta2>): k8s.DaemonSetSpecIoK8sApiAppsV1beta2;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export declare function daemonSetStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetStatusIoK8sApiAppsV1beta2>): k8s.DaemonSetStatusIoK8sApiAppsV1beta2;
/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export declare function daemonSetUpdateStrategyIoK8sApiAppsV1beta2(options?: Optional<k8s.DaemonSetUpdateStrategyIoK8sApiAppsV1beta2>): k8s.DaemonSetUpdateStrategyIoK8sApiAppsV1beta2;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export declare function deploymentIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentIoK8sApiAppsV1beta2>): k8s.DeploymentIoK8sApiAppsV1beta2;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export declare function deploymentConditionIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentConditionIoK8sApiAppsV1beta2>): k8s.DeploymentConditionIoK8sApiAppsV1beta2;
/**
 * DeploymentList is a list of Deployments.
 */
export declare function deploymentListIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentListIoK8sApiAppsV1beta2>): k8s.DeploymentListIoK8sApiAppsV1beta2;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export declare function deploymentSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentSpecIoK8sApiAppsV1beta2>): k8s.DeploymentSpecIoK8sApiAppsV1beta2;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export declare function deploymentStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentStatusIoK8sApiAppsV1beta2>): k8s.DeploymentStatusIoK8sApiAppsV1beta2;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export declare function deploymentStrategyIoK8sApiAppsV1beta2(options?: Optional<k8s.DeploymentStrategyIoK8sApiAppsV1beta2>): k8s.DeploymentStrategyIoK8sApiAppsV1beta2;
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export declare function replicaSetIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetIoK8sApiAppsV1beta2>): k8s.ReplicaSetIoK8sApiAppsV1beta2;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export declare function replicaSetConditionIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetConditionIoK8sApiAppsV1beta2>): k8s.ReplicaSetConditionIoK8sApiAppsV1beta2;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export declare function replicaSetListIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetListIoK8sApiAppsV1beta2>): k8s.ReplicaSetListIoK8sApiAppsV1beta2;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export declare function replicaSetSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetSpecIoK8sApiAppsV1beta2>): k8s.ReplicaSetSpecIoK8sApiAppsV1beta2;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export declare function replicaSetStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.ReplicaSetStatusIoK8sApiAppsV1beta2>): k8s.ReplicaSetStatusIoK8sApiAppsV1beta2;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export declare function rollingUpdateDaemonSetIoK8sApiAppsV1beta2(options?: Optional<k8s.RollingUpdateDaemonSetIoK8sApiAppsV1beta2>): k8s.RollingUpdateDaemonSetIoK8sApiAppsV1beta2;
/**
 * Spec to control the desired behavior of rolling update.
 */
export declare function rollingUpdateDeploymentIoK8sApiAppsV1beta2(options?: Optional<k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta2>): k8s.RollingUpdateDeploymentIoK8sApiAppsV1beta2;
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export declare function rollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2(options?: Optional<k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2>): k8s.RollingUpdateStatefulSetStrategyIoK8sApiAppsV1beta2;
/**
 * Scale represents a scaling request for a resource.
 */
export declare function scaleIoK8sApiAppsV1beta2(options?: Optional<k8s.ScaleIoK8sApiAppsV1beta2>): k8s.ScaleIoK8sApiAppsV1beta2;
/**
 * ScaleSpec describes the attributes of a scale subresource
 */
export declare function scaleSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.ScaleSpecIoK8sApiAppsV1beta2>): k8s.ScaleSpecIoK8sApiAppsV1beta2;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export declare function scaleStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.ScaleStatusIoK8sApiAppsV1beta2>): k8s.ScaleStatusIoK8sApiAppsV1beta2;
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export declare function statefulSetIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetIoK8sApiAppsV1beta2>): k8s.StatefulSetIoK8sApiAppsV1beta2;
/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export declare function statefulSetConditionIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetConditionIoK8sApiAppsV1beta2>): k8s.StatefulSetConditionIoK8sApiAppsV1beta2;
/**
 * StatefulSetList is a collection of StatefulSets.
 */
export declare function statefulSetListIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetListIoK8sApiAppsV1beta2>): k8s.StatefulSetListIoK8sApiAppsV1beta2;
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 */
export declare function statefulSetSpecIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetSpecIoK8sApiAppsV1beta2>): k8s.StatefulSetSpecIoK8sApiAppsV1beta2;
/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export declare function statefulSetStatusIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetStatusIoK8sApiAppsV1beta2>): k8s.StatefulSetStatusIoK8sApiAppsV1beta2;
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export declare function statefulSetUpdateStrategyIoK8sApiAppsV1beta2(options?: Optional<k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta2>): k8s.StatefulSetUpdateStrategyIoK8sApiAppsV1beta2;
/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export declare function boundObjectReferenceIoK8sApiAuthenticationV1(options?: Optional<k8s.BoundObjectReferenceIoK8sApiAuthenticationV1>): k8s.BoundObjectReferenceIoK8sApiAuthenticationV1;
/**
 * TokenRequest requests a token for a given service account.
 */
export declare function tokenRequestIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenRequestIoK8sApiAuthenticationV1>): k8s.TokenRequestIoK8sApiAuthenticationV1;
/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
export declare function tokenRequestSpecIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenRequestSpecIoK8sApiAuthenticationV1>): k8s.TokenRequestSpecIoK8sApiAuthenticationV1;
/**
 * TokenRequestStatus is the result of a token request.
 */
export declare function tokenRequestStatusIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenRequestStatusIoK8sApiAuthenticationV1>): k8s.TokenRequestStatusIoK8sApiAuthenticationV1;
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export declare function tokenReviewIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenReviewIoK8sApiAuthenticationV1>): k8s.TokenReviewIoK8sApiAuthenticationV1;
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export declare function tokenReviewSpecIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenReviewSpecIoK8sApiAuthenticationV1>): k8s.TokenReviewSpecIoK8sApiAuthenticationV1;
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export declare function tokenReviewStatusIoK8sApiAuthenticationV1(options?: Optional<k8s.TokenReviewStatusIoK8sApiAuthenticationV1>): k8s.TokenReviewStatusIoK8sApiAuthenticationV1;
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export declare function userInfoIoK8sApiAuthenticationV1(options?: Optional<k8s.UserInfoIoK8sApiAuthenticationV1>): k8s.UserInfoIoK8sApiAuthenticationV1;
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export declare function tokenReviewIoK8sApiAuthenticationV1beta1(options?: Optional<k8s.TokenReviewIoK8sApiAuthenticationV1beta1>): k8s.TokenReviewIoK8sApiAuthenticationV1beta1;
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export declare function tokenReviewSpecIoK8sApiAuthenticationV1beta1(options?: Optional<k8s.TokenReviewSpecIoK8sApiAuthenticationV1beta1>): k8s.TokenReviewSpecIoK8sApiAuthenticationV1beta1;
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export declare function tokenReviewStatusIoK8sApiAuthenticationV1beta1(options?: Optional<k8s.TokenReviewStatusIoK8sApiAuthenticationV1beta1>): k8s.TokenReviewStatusIoK8sApiAuthenticationV1beta1;
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export declare function userInfoIoK8sApiAuthenticationV1beta1(options?: Optional<k8s.UserInfoIoK8sApiAuthenticationV1beta1>): k8s.UserInfoIoK8sApiAuthenticationV1beta1;
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export declare function localSubjectAccessReviewIoK8sApiAuthorizationV1(options?: Optional<k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1>): k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1;
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export declare function nonResourceAttributesIoK8sApiAuthorizationV1(options?: Optional<k8s.NonResourceAttributesIoK8sApiAuthorizationV1>): k8s.NonResourceAttributesIoK8sApiAuthorizationV1;
/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export declare function nonResourceRuleIoK8sApiAuthorizationV1(options?: Optional<k8s.NonResourceRuleIoK8sApiAuthorizationV1>): k8s.NonResourceRuleIoK8sApiAuthorizationV1;
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export declare function resourceAttributesIoK8sApiAuthorizationV1(options?: Optional<k8s.ResourceAttributesIoK8sApiAuthorizationV1>): k8s.ResourceAttributesIoK8sApiAuthorizationV1;
/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export declare function resourceRuleIoK8sApiAuthorizationV1(options?: Optional<k8s.ResourceRuleIoK8sApiAuthorizationV1>): k8s.ResourceRuleIoK8sApiAuthorizationV1;
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export declare function selfSubjectAccessReviewIoK8sApiAuthorizationV1(options?: Optional<k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1>): k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1;
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export declare function selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1(options?: Optional<k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1>): k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1;
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export declare function selfSubjectRulesReviewIoK8sApiAuthorizationV1(options?: Optional<k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1>): k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1;
export declare function selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1(options?: Optional<k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1>): k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1;
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export declare function subjectAccessReviewIoK8sApiAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewIoK8sApiAuthorizationV1>): k8s.SubjectAccessReviewIoK8sApiAuthorizationV1;
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export declare function subjectAccessReviewSpecIoK8sApiAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1>): k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1;
/**
 * SubjectAccessReviewStatus
 */
export declare function subjectAccessReviewStatusIoK8sApiAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1>): k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1;
/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export declare function subjectRulesReviewStatusIoK8sApiAuthorizationV1(options?: Optional<k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1>): k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1;
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export declare function localSubjectAccessReviewIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1beta1>): k8s.LocalSubjectAccessReviewIoK8sApiAuthorizationV1beta1;
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export declare function nonResourceAttributesIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.NonResourceAttributesIoK8sApiAuthorizationV1beta1>): k8s.NonResourceAttributesIoK8sApiAuthorizationV1beta1;
/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export declare function nonResourceRuleIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.NonResourceRuleIoK8sApiAuthorizationV1beta1>): k8s.NonResourceRuleIoK8sApiAuthorizationV1beta1;
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export declare function resourceAttributesIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.ResourceAttributesIoK8sApiAuthorizationV1beta1>): k8s.ResourceAttributesIoK8sApiAuthorizationV1beta1;
/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export declare function resourceRuleIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.ResourceRuleIoK8sApiAuthorizationV1beta1>): k8s.ResourceRuleIoK8sApiAuthorizationV1beta1;
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export declare function selfSubjectAccessReviewIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1beta1>): k8s.SelfSubjectAccessReviewIoK8sApiAuthorizationV1beta1;
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export declare function selfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1>): k8s.SelfSubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1;
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export declare function selfSubjectRulesReviewIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1beta1>): k8s.SelfSubjectRulesReviewIoK8sApiAuthorizationV1beta1;
export declare function selfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1>): k8s.SelfSubjectRulesReviewSpecIoK8sApiAuthorizationV1beta1;
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export declare function subjectAccessReviewIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewIoK8sApiAuthorizationV1beta1>): k8s.SubjectAccessReviewIoK8sApiAuthorizationV1beta1;
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export declare function subjectAccessReviewSpecIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1>): k8s.SubjectAccessReviewSpecIoK8sApiAuthorizationV1beta1;
/**
 * SubjectAccessReviewStatus
 */
export declare function subjectAccessReviewStatusIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1beta1>): k8s.SubjectAccessReviewStatusIoK8sApiAuthorizationV1beta1;
/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export declare function subjectRulesReviewStatusIoK8sApiAuthorizationV1beta1(options?: Optional<k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1beta1>): k8s.SubjectRulesReviewStatusIoK8sApiAuthorizationV1beta1;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export declare function crossVersionObjectReferenceIoK8sApiAutoscalingV1(options?: Optional<k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV1>): k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV1;
/**
 * configuration of a horizontal pod autoscaler.
 */
export declare function horizontalPodAutoscalerIoK8sApiAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV1>): k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV1;
/**
 * list of horizontal pod autoscaler objects.
 */
export declare function horizontalPodAutoscalerListIoK8sApiAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV1>): k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV1;
/**
 * specification of a horizontal pod autoscaler.
 */
export declare function horizontalPodAutoscalerSpecIoK8sApiAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV1>): k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV1;
/**
 * current status of a horizontal pod autoscaler
 */
export declare function horizontalPodAutoscalerStatusIoK8sApiAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV1>): k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV1;
/**
 * Scale represents a scaling request for a resource.
 */
export declare function scaleIoK8sApiAutoscalingV1(options?: Optional<k8s.ScaleIoK8sApiAutoscalingV1>): k8s.ScaleIoK8sApiAutoscalingV1;
/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export declare function scaleSpecIoK8sApiAutoscalingV1(options?: Optional<k8s.ScaleSpecIoK8sApiAutoscalingV1>): k8s.ScaleSpecIoK8sApiAutoscalingV1;
/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export declare function scaleStatusIoK8sApiAutoscalingV1(options?: Optional<k8s.ScaleStatusIoK8sApiAutoscalingV1>): k8s.ScaleStatusIoK8sApiAutoscalingV1;
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export declare function crossVersionObjectReferenceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV2beta1>): k8s.CrossVersionObjectReferenceIoK8sApiAutoscalingV2beta1;
/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export declare function externalMetricSourceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ExternalMetricSourceIoK8sApiAutoscalingV2beta1>): k8s.ExternalMetricSourceIoK8sApiAutoscalingV2beta1;
/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export declare function externalMetricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ExternalMetricStatusIoK8sApiAutoscalingV2beta1>): k8s.ExternalMetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export declare function horizontalPodAutoscalerIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV2beta1>): k8s.HorizontalPodAutoscalerIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export declare function horizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1>): k8s.HorizontalPodAutoscalerConditionIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export declare function horizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1>): k8s.HorizontalPodAutoscalerListIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export declare function horizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1>): k8s.HorizontalPodAutoscalerSpecIoK8sApiAutoscalingV2beta1;
/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export declare function horizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1>): k8s.HorizontalPodAutoscalerStatusIoK8sApiAutoscalingV2beta1;
/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export declare function metricSpecIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.MetricSpecIoK8sApiAutoscalingV2beta1>): k8s.MetricSpecIoK8sApiAutoscalingV2beta1;
/**
 * MetricStatus describes the last-read state of a single metric.
 */
export declare function metricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.MetricStatusIoK8sApiAutoscalingV2beta1>): k8s.MetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export declare function objectMetricSourceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ObjectMetricSourceIoK8sApiAutoscalingV2beta1>): k8s.ObjectMetricSourceIoK8sApiAutoscalingV2beta1;
/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export declare function objectMetricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ObjectMetricStatusIoK8sApiAutoscalingV2beta1>): k8s.ObjectMetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export declare function podsMetricSourceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.PodsMetricSourceIoK8sApiAutoscalingV2beta1>): k8s.PodsMetricSourceIoK8sApiAutoscalingV2beta1;
/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export declare function podsMetricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.PodsMetricStatusIoK8sApiAutoscalingV2beta1>): k8s.PodsMetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export declare function resourceMetricSourceIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ResourceMetricSourceIoK8sApiAutoscalingV2beta1>): k8s.ResourceMetricSourceIoK8sApiAutoscalingV2beta1;
/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export declare function resourceMetricStatusIoK8sApiAutoscalingV2beta1(options?: Optional<k8s.ResourceMetricStatusIoK8sApiAutoscalingV2beta1>): k8s.ResourceMetricStatusIoK8sApiAutoscalingV2beta1;
/**
 * Job represents the configuration of a single job.
 */
export declare function jobIoK8sApiBatchV1(options?: Optional<k8s.JobIoK8sApiBatchV1>): k8s.JobIoK8sApiBatchV1;
/**
 * JobCondition describes current state of a job.
 */
export declare function jobConditionIoK8sApiBatchV1(options?: Optional<k8s.JobConditionIoK8sApiBatchV1>): k8s.JobConditionIoK8sApiBatchV1;
/**
 * JobList is a collection of jobs.
 */
export declare function jobListIoK8sApiBatchV1(options?: Optional<k8s.JobListIoK8sApiBatchV1>): k8s.JobListIoK8sApiBatchV1;
/**
 * JobSpec describes how the job execution will look like.
 */
export declare function jobSpecIoK8sApiBatchV1(options?: Optional<k8s.JobSpecIoK8sApiBatchV1>): k8s.JobSpecIoK8sApiBatchV1;
/**
 * JobStatus represents the current state of a Job.
 */
export declare function jobStatusIoK8sApiBatchV1(options?: Optional<k8s.JobStatusIoK8sApiBatchV1>): k8s.JobStatusIoK8sApiBatchV1;
/**
 * CronJob represents the configuration of a single cron job.
 */
export declare function cronJobIoK8sApiBatchV1beta1(options?: Optional<k8s.CronJobIoK8sApiBatchV1beta1>): k8s.CronJobIoK8sApiBatchV1beta1;
/**
 * CronJobList is a collection of cron jobs.
 */
export declare function cronJobListIoK8sApiBatchV1beta1(options?: Optional<k8s.CronJobListIoK8sApiBatchV1beta1>): k8s.CronJobListIoK8sApiBatchV1beta1;
/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 */
export declare function cronJobSpecIoK8sApiBatchV1beta1(options?: Optional<k8s.CronJobSpecIoK8sApiBatchV1beta1>): k8s.CronJobSpecIoK8sApiBatchV1beta1;
/**
 * CronJobStatus represents the current state of a cron job.
 */
export declare function cronJobStatusIoK8sApiBatchV1beta1(options?: Optional<k8s.CronJobStatusIoK8sApiBatchV1beta1>): k8s.CronJobStatusIoK8sApiBatchV1beta1;
/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export declare function jobTemplateSpecIoK8sApiBatchV1beta1(options?: Optional<k8s.JobTemplateSpecIoK8sApiBatchV1beta1>): k8s.JobTemplateSpecIoK8sApiBatchV1beta1;
/**
 * Describes a certificate signing request
 */
export declare function certificateSigningRequestIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestIoK8sApiCertificatesV1beta1>): k8s.CertificateSigningRequestIoK8sApiCertificatesV1beta1;
export declare function certificateSigningRequestConditionIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestConditionIoK8sApiCertificatesV1beta1>): k8s.CertificateSigningRequestConditionIoK8sApiCertificatesV1beta1;
export declare function certificateSigningRequestListIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestListIoK8sApiCertificatesV1beta1>): k8s.CertificateSigningRequestListIoK8sApiCertificatesV1beta1;
/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 */
export declare function certificateSigningRequestSpecIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestSpecIoK8sApiCertificatesV1beta1>): k8s.CertificateSigningRequestSpecIoK8sApiCertificatesV1beta1;
export declare function certificateSigningRequestStatusIoK8sApiCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestStatusIoK8sApiCertificatesV1beta1>): k8s.CertificateSigningRequestStatusIoK8sApiCertificatesV1beta1;
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
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export declare function daemonEndpoint(options?: Optional<k8s.DaemonEndpoint>): k8s.DaemonEndpoint;
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
export declare function glusterfsVolumeSource(options?: Optional<k8s.GlusterfsVolumeSource>): k8s.GlusterfsVolumeSource;
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
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export declare function hostAlias(options?: Optional<k8s.HostAlias>): k8s.HostAlias;
/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export declare function hostPathVolumeSource(options?: Optional<k8s.HostPathVolumeSource>): k8s.HostPathVolumeSource;
/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export declare function iSCSIPersistentVolumeSource(options?: Optional<k8s.ISCSIPersistentVolumeSource>): k8s.ISCSIPersistentVolumeSource;
/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 */
export declare function iSCSIVolumeSource(options?: Optional<k8s.ISCSIVolumeSource>): k8s.ISCSIVolumeSource;
/**
 * Maps a string key to a path within a volume.
 */
export declare function keyToPath(options?: Optional<k8s.KeyToPath>): k8s.KeyToPath;
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
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export declare function objectFieldSelector(options?: Optional<k8s.ObjectFieldSelector>): k8s.ObjectFieldSelector;
/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 */
export declare function objectReference(options?: Optional<k8s.ObjectReference>): k8s.ObjectReference;
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
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export declare function portworxVolumeSource(options?: Optional<k8s.PortworxVolumeSource>): k8s.PortworxVolumeSource;
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
 * SELinuxOptions are the labels to be applied to the container
 */
export declare function sELinuxOptions(options?: Optional<k8s.SELinuxOptions>): k8s.SELinuxOptions;
/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 */
export declare function scaleIOPersistentVolumeSource(options?: Optional<k8s.ScaleIOPersistentVolumeSource>): k8s.ScaleIOPersistentVolumeSource;
/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
export declare function scaleIOVolumeSource(options?: Optional<k8s.ScaleIOVolumeSource>): k8s.ScaleIOVolumeSource;
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
 * Represents a StorageOS persistent volume resource.
 */
export declare function storageOSPersistentVolumeSource(options?: Optional<k8s.StorageOSPersistentVolumeSource>): k8s.StorageOSPersistentVolumeSource;
/**
 * Represents a StorageOS persistent volume resource.
 */
export declare function storageOSVolumeSource(options?: Optional<k8s.StorageOSVolumeSource>): k8s.StorageOSVolumeSource;
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
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export declare function volume(options?: Optional<k8s.Volume>): k8s.Volume;
/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export declare function volumeDevice(options?: Optional<k8s.VolumeDevice>): k8s.VolumeDevice;
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
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export declare function weightedPodAffinityTerm(options?: Optional<k8s.WeightedPodAffinityTerm>): k8s.WeightedPodAffinityTerm;
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead.
 */
export declare function allowedFlexVolumeIoK8sApiExtensionsV1beta1(options?: Optional<k8s.AllowedFlexVolumeIoK8sApiExtensionsV1beta1>): k8s.AllowedFlexVolumeIoK8sApiExtensionsV1beta1;
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead.
 */
export declare function allowedHostPathIoK8sApiExtensionsV1beta1(options?: Optional<k8s.AllowedHostPathIoK8sApiExtensionsV1beta1>): k8s.AllowedHostPathIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 */
export declare function daemonSetIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetIoK8sApiExtensionsV1beta1>): k8s.DaemonSetIoK8sApiExtensionsV1beta1;
/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export declare function daemonSetConditionIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetConditionIoK8sApiExtensionsV1beta1>): k8s.DaemonSetConditionIoK8sApiExtensionsV1beta1;
/**
 * DaemonSetList is a collection of daemon sets.
 */
export declare function daemonSetListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetListIoK8sApiExtensionsV1beta1>): k8s.DaemonSetListIoK8sApiExtensionsV1beta1;
/**
 * DaemonSetSpec is the specification of a daemon set.
 */
export declare function daemonSetSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetSpecIoK8sApiExtensionsV1beta1>): k8s.DaemonSetSpecIoK8sApiExtensionsV1beta1;
/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export declare function daemonSetStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetStatusIoK8sApiExtensionsV1beta1>): k8s.DaemonSetStatusIoK8sApiExtensionsV1beta1;
export declare function daemonSetUpdateStrategyIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DaemonSetUpdateStrategyIoK8sApiExtensionsV1beta1>): k8s.DaemonSetUpdateStrategyIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 */
export declare function deploymentIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentIoK8sApiExtensionsV1beta1>): k8s.DeploymentIoK8sApiExtensionsV1beta1;
/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export declare function deploymentConditionIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentConditionIoK8sApiExtensionsV1beta1>): k8s.DeploymentConditionIoK8sApiExtensionsV1beta1;
/**
 * DeploymentList is a list of Deployments.
 */
export declare function deploymentListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentListIoK8sApiExtensionsV1beta1>): k8s.DeploymentListIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 */
export declare function deploymentRollbackIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentRollbackIoK8sApiExtensionsV1beta1>): k8s.DeploymentRollbackIoK8sApiExtensionsV1beta1;
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export declare function deploymentSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentSpecIoK8sApiExtensionsV1beta1>): k8s.DeploymentSpecIoK8sApiExtensionsV1beta1;
/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export declare function deploymentStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentStatusIoK8sApiExtensionsV1beta1>): k8s.DeploymentStatusIoK8sApiExtensionsV1beta1;
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export declare function deploymentStrategyIoK8sApiExtensionsV1beta1(options?: Optional<k8s.DeploymentStrategyIoK8sApiExtensionsV1beta1>): k8s.DeploymentStrategyIoK8sApiExtensionsV1beta1;
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 */
export declare function fSGroupStrategyOptionsIoK8sApiExtensionsV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsIoK8sApiExtensionsV1beta1>): k8s.FSGroupStrategyOptionsIoK8sApiExtensionsV1beta1;
/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 */
export declare function hTTPIngressPathIoK8sApiExtensionsV1beta1(options?: Optional<k8s.HTTPIngressPathIoK8sApiExtensionsV1beta1>): k8s.HTTPIngressPathIoK8sApiExtensionsV1beta1;
/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export declare function hTTPIngressRuleValueIoK8sApiExtensionsV1beta1(options?: Optional<k8s.HTTPIngressRuleValueIoK8sApiExtensionsV1beta1>): k8s.HTTPIngressRuleValueIoK8sApiExtensionsV1beta1;
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 */
export declare function hostPortRangeIoK8sApiExtensionsV1beta1(options?: Optional<k8s.HostPortRangeIoK8sApiExtensionsV1beta1>): k8s.HostPortRangeIoK8sApiExtensionsV1beta1;
/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 */
export declare function iDRangeIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IDRangeIoK8sApiExtensionsV1beta1>): k8s.IDRangeIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export declare function iPBlockIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IPBlockIoK8sApiExtensionsV1beta1>): k8s.IPBlockIoK8sApiExtensionsV1beta1;
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 */
export declare function ingressIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressIoK8sApiExtensionsV1beta1>): k8s.IngressIoK8sApiExtensionsV1beta1;
/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export declare function ingressBackendIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressBackendIoK8sApiExtensionsV1beta1>): k8s.IngressBackendIoK8sApiExtensionsV1beta1;
/**
 * IngressList is a collection of Ingress.
 */
export declare function ingressListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressListIoK8sApiExtensionsV1beta1>): k8s.IngressListIoK8sApiExtensionsV1beta1;
/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
export declare function ingressRuleIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressRuleIoK8sApiExtensionsV1beta1>): k8s.IngressRuleIoK8sApiExtensionsV1beta1;
/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
export declare function ingressSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressSpecIoK8sApiExtensionsV1beta1>): k8s.IngressSpecIoK8sApiExtensionsV1beta1;
/**
 * IngressStatus describe the current state of the Ingress.
 */
export declare function ingressStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressStatusIoK8sApiExtensionsV1beta1>): k8s.IngressStatusIoK8sApiExtensionsV1beta1;
/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export declare function ingressTLSIoK8sApiExtensionsV1beta1(options?: Optional<k8s.IngressTLSIoK8sApiExtensionsV1beta1>): k8s.IngressTLSIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export declare function networkPolicyIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyIoK8sApiExtensionsV1beta1>): k8s.NetworkPolicyIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export declare function networkPolicyEgressRuleIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyEgressRuleIoK8sApiExtensionsV1beta1>): k8s.NetworkPolicyEgressRuleIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 */
export declare function networkPolicyIngressRuleIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyIngressRuleIoK8sApiExtensionsV1beta1>): k8s.NetworkPolicyIngressRuleIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 */
export declare function networkPolicyListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyListIoK8sApiExtensionsV1beta1>): k8s.NetworkPolicyListIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 */
export declare function networkPolicyPeerIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyPeerIoK8sApiExtensionsV1beta1>): k8s.NetworkPolicyPeerIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 */
export declare function networkPolicyPortIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyPortIoK8sApiExtensionsV1beta1>): k8s.NetworkPolicyPortIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
 */
export declare function networkPolicySpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.NetworkPolicySpecIoK8sApiExtensionsV1beta1>): k8s.NetworkPolicySpecIoK8sApiExtensionsV1beta1;
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
 */
export declare function podSecurityPolicyIoK8sApiExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyIoK8sApiExtensionsV1beta1>): k8s.PodSecurityPolicyIoK8sApiExtensionsV1beta1;
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 */
export declare function podSecurityPolicyListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyListIoK8sApiExtensionsV1beta1>): k8s.PodSecurityPolicyListIoK8sApiExtensionsV1beta1;
/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 */
export declare function podSecurityPolicySpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicySpecIoK8sApiExtensionsV1beta1>): k8s.PodSecurityPolicySpecIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export declare function replicaSetIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetIoK8sApiExtensionsV1beta1>): k8s.ReplicaSetIoK8sApiExtensionsV1beta1;
/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export declare function replicaSetConditionIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetConditionIoK8sApiExtensionsV1beta1>): k8s.ReplicaSetConditionIoK8sApiExtensionsV1beta1;
/**
 * ReplicaSetList is a collection of ReplicaSets.
 */
export declare function replicaSetListIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetListIoK8sApiExtensionsV1beta1>): k8s.ReplicaSetListIoK8sApiExtensionsV1beta1;
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 */
export declare function replicaSetSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetSpecIoK8sApiExtensionsV1beta1>): k8s.ReplicaSetSpecIoK8sApiExtensionsV1beta1;
/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export declare function replicaSetStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ReplicaSetStatusIoK8sApiExtensionsV1beta1>): k8s.ReplicaSetStatusIoK8sApiExtensionsV1beta1;
/**
 * DEPRECATED.
 */
export declare function rollbackConfigIoK8sApiExtensionsV1beta1(options?: Optional<k8s.RollbackConfigIoK8sApiExtensionsV1beta1>): k8s.RollbackConfigIoK8sApiExtensionsV1beta1;
/**
 * Spec to control the desired behavior of daemon set rolling update.
 */
export declare function rollingUpdateDaemonSetIoK8sApiExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDaemonSetIoK8sApiExtensionsV1beta1>): k8s.RollingUpdateDaemonSetIoK8sApiExtensionsV1beta1;
/**
 * Spec to control the desired behavior of rolling update.
 */
export declare function rollingUpdateDeploymentIoK8sApiExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentIoK8sApiExtensionsV1beta1>): k8s.RollingUpdateDeploymentIoK8sApiExtensionsV1beta1;
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 */
export declare function runAsUserStrategyOptionsIoK8sApiExtensionsV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsIoK8sApiExtensionsV1beta1>): k8s.RunAsUserStrategyOptionsIoK8sApiExtensionsV1beta1;
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
export declare function sELinuxStrategyOptionsIoK8sApiExtensionsV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsIoK8sApiExtensionsV1beta1>): k8s.SELinuxStrategyOptionsIoK8sApiExtensionsV1beta1;
/**
 * represents a scaling request for a resource.
 */
export declare function scaleIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ScaleIoK8sApiExtensionsV1beta1>): k8s.ScaleIoK8sApiExtensionsV1beta1;
/**
 * describes the attributes of a scale subresource
 */
export declare function scaleSpecIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ScaleSpecIoK8sApiExtensionsV1beta1>): k8s.ScaleSpecIoK8sApiExtensionsV1beta1;
/**
 * represents the current status of a scale subresource.
 */
export declare function scaleStatusIoK8sApiExtensionsV1beta1(options?: Optional<k8s.ScaleStatusIoK8sApiExtensionsV1beta1>): k8s.ScaleStatusIoK8sApiExtensionsV1beta1;
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 */
export declare function supplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1>): k8s.SupplementalGroupsStrategyOptionsIoK8sApiExtensionsV1beta1;
/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export declare function iPBlockIoK8sApiNetworkingV1(options?: Optional<k8s.IPBlockIoK8sApiNetworkingV1>): k8s.IPBlockIoK8sApiNetworkingV1;
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export declare function networkPolicyIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyIoK8sApiNetworkingV1>): k8s.NetworkPolicyIoK8sApiNetworkingV1;
/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export declare function networkPolicyEgressRuleIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyEgressRuleIoK8sApiNetworkingV1>): k8s.NetworkPolicyEgressRuleIoK8sApiNetworkingV1;
/**
 * NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
 */
export declare function networkPolicyIngressRuleIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyIngressRuleIoK8sApiNetworkingV1>): k8s.NetworkPolicyIngressRuleIoK8sApiNetworkingV1;
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export declare function networkPolicyListIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyListIoK8sApiNetworkingV1>): k8s.NetworkPolicyListIoK8sApiNetworkingV1;
/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 */
export declare function networkPolicyPeerIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyPeerIoK8sApiNetworkingV1>): k8s.NetworkPolicyPeerIoK8sApiNetworkingV1;
/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export declare function networkPolicyPortIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicyPortIoK8sApiNetworkingV1>): k8s.NetworkPolicyPortIoK8sApiNetworkingV1;
/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 */
export declare function networkPolicySpecIoK8sApiNetworkingV1(options?: Optional<k8s.NetworkPolicySpecIoK8sApiNetworkingV1>): k8s.NetworkPolicySpecIoK8sApiNetworkingV1;
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export declare function allowedFlexVolumeIoK8sApiPolicyV1beta1(options?: Optional<k8s.AllowedFlexVolumeIoK8sApiPolicyV1beta1>): k8s.AllowedFlexVolumeIoK8sApiPolicyV1beta1;
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 */
export declare function allowedHostPathIoK8sApiPolicyV1beta1(options?: Optional<k8s.AllowedHostPathIoK8sApiPolicyV1beta1>): k8s.AllowedHostPathIoK8sApiPolicyV1beta1;
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export declare function evictionIoK8sApiPolicyV1beta1(options?: Optional<k8s.EvictionIoK8sApiPolicyV1beta1>): k8s.EvictionIoK8sApiPolicyV1beta1;
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
export declare function fSGroupStrategyOptionsIoK8sApiPolicyV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsIoK8sApiPolicyV1beta1>): k8s.FSGroupStrategyOptionsIoK8sApiPolicyV1beta1;
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export declare function hostPortRangeIoK8sApiPolicyV1beta1(options?: Optional<k8s.HostPortRangeIoK8sApiPolicyV1beta1>): k8s.HostPortRangeIoK8sApiPolicyV1beta1;
/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
export declare function iDRangeIoK8sApiPolicyV1beta1(options?: Optional<k8s.IDRangeIoK8sApiPolicyV1beta1>): k8s.IDRangeIoK8sApiPolicyV1beta1;
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export declare function podDisruptionBudgetIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetIoK8sApiPolicyV1beta1>): k8s.PodDisruptionBudgetIoK8sApiPolicyV1beta1;
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 */
export declare function podDisruptionBudgetListIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetListIoK8sApiPolicyV1beta1>): k8s.PodDisruptionBudgetListIoK8sApiPolicyV1beta1;
/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export declare function podDisruptionBudgetSpecIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetSpecIoK8sApiPolicyV1beta1>): k8s.PodDisruptionBudgetSpecIoK8sApiPolicyV1beta1;
/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
export declare function podDisruptionBudgetStatusIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetStatusIoK8sApiPolicyV1beta1>): k8s.PodDisruptionBudgetStatusIoK8sApiPolicyV1beta1;
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
export declare function podSecurityPolicyIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicyIoK8sApiPolicyV1beta1>): k8s.PodSecurityPolicyIoK8sApiPolicyV1beta1;
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
export declare function podSecurityPolicyListIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicyListIoK8sApiPolicyV1beta1>): k8s.PodSecurityPolicyListIoK8sApiPolicyV1beta1;
/**
 * PodSecurityPolicySpec defines the policy enforced.
 */
export declare function podSecurityPolicySpecIoK8sApiPolicyV1beta1(options?: Optional<k8s.PodSecurityPolicySpecIoK8sApiPolicyV1beta1>): k8s.PodSecurityPolicySpecIoK8sApiPolicyV1beta1;
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export declare function runAsUserStrategyOptionsIoK8sApiPolicyV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsIoK8sApiPolicyV1beta1>): k8s.RunAsUserStrategyOptionsIoK8sApiPolicyV1beta1;
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export declare function sELinuxStrategyOptionsIoK8sApiPolicyV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsIoK8sApiPolicyV1beta1>): k8s.SELinuxStrategyOptionsIoK8sApiPolicyV1beta1;
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export declare function supplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1>): k8s.SupplementalGroupsStrategyOptionsIoK8sApiPolicyV1beta1;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export declare function aggregationRuleIoK8sApiRbacV1(options?: Optional<k8s.AggregationRuleIoK8sApiRbacV1>): k8s.AggregationRuleIoK8sApiRbacV1;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export declare function clusterRoleIoK8sApiRbacV1(options?: Optional<k8s.ClusterRoleIoK8sApiRbacV1>): k8s.ClusterRoleIoK8sApiRbacV1;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export declare function clusterRoleBindingIoK8sApiRbacV1(options?: Optional<k8s.ClusterRoleBindingIoK8sApiRbacV1>): k8s.ClusterRoleBindingIoK8sApiRbacV1;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export declare function clusterRoleBindingListIoK8sApiRbacV1(options?: Optional<k8s.ClusterRoleBindingListIoK8sApiRbacV1>): k8s.ClusterRoleBindingListIoK8sApiRbacV1;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export declare function clusterRoleListIoK8sApiRbacV1(options?: Optional<k8s.ClusterRoleListIoK8sApiRbacV1>): k8s.ClusterRoleListIoK8sApiRbacV1;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export declare function policyRuleIoK8sApiRbacV1(options?: Optional<k8s.PolicyRuleIoK8sApiRbacV1>): k8s.PolicyRuleIoK8sApiRbacV1;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export declare function roleIoK8sApiRbacV1(options?: Optional<k8s.RoleIoK8sApiRbacV1>): k8s.RoleIoK8sApiRbacV1;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export declare function roleBindingIoK8sApiRbacV1(options?: Optional<k8s.RoleBindingIoK8sApiRbacV1>): k8s.RoleBindingIoK8sApiRbacV1;
/**
 * RoleBindingList is a collection of RoleBindings
 */
export declare function roleBindingListIoK8sApiRbacV1(options?: Optional<k8s.RoleBindingListIoK8sApiRbacV1>): k8s.RoleBindingListIoK8sApiRbacV1;
/**
 * RoleList is a collection of Roles
 */
export declare function roleListIoK8sApiRbacV1(options?: Optional<k8s.RoleListIoK8sApiRbacV1>): k8s.RoleListIoK8sApiRbacV1;
/**
 * RoleRef contains information that points to the role being used
 */
export declare function roleRefIoK8sApiRbacV1(options?: Optional<k8s.RoleRefIoK8sApiRbacV1>): k8s.RoleRefIoK8sApiRbacV1;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export declare function subjectIoK8sApiRbacV1(options?: Optional<k8s.SubjectIoK8sApiRbacV1>): k8s.SubjectIoK8sApiRbacV1;
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export declare function aggregationRuleIoK8sApiRbacV1beta1(options?: Optional<k8s.AggregationRuleIoK8sApiRbacV1beta1>): k8s.AggregationRuleIoK8sApiRbacV1beta1;
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export declare function clusterRoleIoK8sApiRbacV1beta1(options?: Optional<k8s.ClusterRoleIoK8sApiRbacV1beta1>): k8s.ClusterRoleIoK8sApiRbacV1beta1;
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export declare function clusterRoleBindingIoK8sApiRbacV1beta1(options?: Optional<k8s.ClusterRoleBindingIoK8sApiRbacV1beta1>): k8s.ClusterRoleBindingIoK8sApiRbacV1beta1;
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export declare function clusterRoleBindingListIoK8sApiRbacV1beta1(options?: Optional<k8s.ClusterRoleBindingListIoK8sApiRbacV1beta1>): k8s.ClusterRoleBindingListIoK8sApiRbacV1beta1;
/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export declare function clusterRoleListIoK8sApiRbacV1beta1(options?: Optional<k8s.ClusterRoleListIoK8sApiRbacV1beta1>): k8s.ClusterRoleListIoK8sApiRbacV1beta1;
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export declare function policyRuleIoK8sApiRbacV1beta1(options?: Optional<k8s.PolicyRuleIoK8sApiRbacV1beta1>): k8s.PolicyRuleIoK8sApiRbacV1beta1;
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 */
export declare function roleIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleIoK8sApiRbacV1beta1>): k8s.RoleIoK8sApiRbacV1beta1;
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export declare function roleBindingIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleBindingIoK8sApiRbacV1beta1>): k8s.RoleBindingIoK8sApiRbacV1beta1;
/**
 * RoleBindingList is a collection of RoleBindings
 */
export declare function roleBindingListIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleBindingListIoK8sApiRbacV1beta1>): k8s.RoleBindingListIoK8sApiRbacV1beta1;
/**
 * RoleList is a collection of Roles
 */
export declare function roleListIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleListIoK8sApiRbacV1beta1>): k8s.RoleListIoK8sApiRbacV1beta1;
/**
 * RoleRef contains information that points to the role being used
 */
export declare function roleRefIoK8sApiRbacV1beta1(options?: Optional<k8s.RoleRefIoK8sApiRbacV1beta1>): k8s.RoleRefIoK8sApiRbacV1beta1;
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export declare function subjectIoK8sApiRbacV1beta1(options?: Optional<k8s.SubjectIoK8sApiRbacV1beta1>): k8s.SubjectIoK8sApiRbacV1beta1;
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 */
export declare function priorityClassIoK8sApiSchedulingV1beta1(options?: Optional<k8s.PriorityClassIoK8sApiSchedulingV1beta1>): k8s.PriorityClassIoK8sApiSchedulingV1beta1;
/**
 * PriorityClassList is a collection of priority classes.
 */
export declare function priorityClassListIoK8sApiSchedulingV1beta1(options?: Optional<k8s.PriorityClassListIoK8sApiSchedulingV1beta1>): k8s.PriorityClassListIoK8sApiSchedulingV1beta1;
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export declare function storageClassIoK8sApiStorageV1(options?: Optional<k8s.StorageClassIoK8sApiStorageV1>): k8s.StorageClassIoK8sApiStorageV1;
/**
 * StorageClassList is a collection of storage classes.
 */
export declare function storageClassListIoK8sApiStorageV1(options?: Optional<k8s.StorageClassListIoK8sApiStorageV1>): k8s.StorageClassListIoK8sApiStorageV1;
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 *
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export declare function storageClassIoK8sApiStorageV1beta1(options?: Optional<k8s.StorageClassIoK8sApiStorageV1beta1>): k8s.StorageClassIoK8sApiStorageV1beta1;
/**
 * StorageClassList is a collection of storage classes.
 */
export declare function storageClassListIoK8sApiStorageV1beta1(options?: Optional<k8s.StorageClassListIoK8sApiStorageV1beta1>): k8s.StorageClassListIoK8sApiStorageV1beta1;
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 *
 * VolumeAttachment objects are non-namespaced.
 */
export declare function volumeAttachmentIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentIoK8sApiStorageV1beta1>): k8s.VolumeAttachmentIoK8sApiStorageV1beta1;
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export declare function volumeAttachmentListIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentListIoK8sApiStorageV1beta1>): k8s.VolumeAttachmentListIoK8sApiStorageV1beta1;
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export declare function volumeAttachmentSourceIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentSourceIoK8sApiStorageV1beta1>): k8s.VolumeAttachmentSourceIoK8sApiStorageV1beta1;
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export declare function volumeAttachmentSpecIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentSpecIoK8sApiStorageV1beta1>): k8s.VolumeAttachmentSpecIoK8sApiStorageV1beta1;
/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export declare function volumeAttachmentStatusIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeAttachmentStatusIoK8sApiStorageV1beta1>): k8s.VolumeAttachmentStatusIoK8sApiStorageV1beta1;
/**
 * VolumeError captures an error encountered during a volume operation.
 */
export declare function volumeErrorIoK8sApiStorageV1beta1(options?: Optional<k8s.VolumeErrorIoK8sApiStorageV1beta1>): k8s.VolumeErrorIoK8sApiStorageV1beta1;
/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
export declare function customResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceColumnDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 */
export declare function customResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceDefinitionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export declare function customResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceDefinitionConditionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export declare function customResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceDefinitionListIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export declare function customResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceDefinitionNamesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export declare function customResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceDefinitionSpecIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export declare function customResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceDefinitionStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
export declare function customResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceDefinitionVersionIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 */
export declare function customResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceSubresourceScaleIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
 */
export declare function customResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceSubresourceStatusIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export declare function customResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceSubresourcesIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export declare function customResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.CustomResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.CustomResourceValidationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 */
export declare function externalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.ExternalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.ExternalDocumentationIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export declare function jSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.JSONIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 */
export declare function jSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.JSONSchemaPropsIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
export declare function jSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.JSONSchemaPropsOrArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
export declare function jSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.JSONSchemaPropsOrBoolIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
/**
 * JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array.
 */
export declare function jSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1(options?: Optional<k8s.JSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1>): k8s.JSONSchemaPropsOrStringArrayIoK8sApiextensionsapiserverPkgApisApiextensionsV1beta1;
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
export declare function quantityIoK8sApimachineryPkgApiResource(options?: Optional<k8s.QuantityIoK8sApimachineryPkgApiResource>): k8s.QuantityIoK8sApimachineryPkgApiResource;
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
export declare function quantity_v2IoK8sApimachineryPkgApiResource(options?: Optional<k8s.Quantity_v2IoK8sApimachineryPkgApiResource>): k8s.Quantity_v2IoK8sApimachineryPkgApiResource;
/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
export declare function aPIGroupIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIGroupIoK8sApimachineryPkgApisMetaV1>): k8s.APIGroupIoK8sApimachineryPkgApisMetaV1;
/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 */
export declare function aPIGroupListIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIGroupListIoK8sApimachineryPkgApisMetaV1>): k8s.APIGroupListIoK8sApimachineryPkgApisMetaV1;
/**
 * APIResource specifies the name of a resource and whether it is namespaced.
 */
export declare function aPIResourceIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIResourceIoK8sApimachineryPkgApisMetaV1>): k8s.APIResourceIoK8sApimachineryPkgApisMetaV1;
/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 */
export declare function aPIResourceListIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIResourceListIoK8sApimachineryPkgApisMetaV1>): k8s.APIResourceListIoK8sApimachineryPkgApisMetaV1;
/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 */
export declare function aPIVersionsIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.APIVersionsIoK8sApimachineryPkgApisMetaV1>): k8s.APIVersionsIoK8sApimachineryPkgApisMetaV1;
/**
 * DeleteOptions may be provided when deleting an API object.
 */
export declare function deleteOptionsIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.DeleteOptionsIoK8sApimachineryPkgApisMetaV1>): k8s.DeleteOptionsIoK8sApimachineryPkgApisMetaV1;
/**
 * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
 */
export declare function durationIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.DurationIoK8sApimachineryPkgApisMetaV1>): k8s.DurationIoK8sApimachineryPkgApisMetaV1;
/**
 * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
 */
export declare function groupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.GroupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1>): k8s.GroupVersionForDiscoveryIoK8sApimachineryPkgApisMetaV1;
/**
 * Initializer is information about an initializer that has not yet completed.
 */
export declare function initializerIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.InitializerIoK8sApimachineryPkgApisMetaV1>): k8s.InitializerIoK8sApimachineryPkgApisMetaV1;
/**
 * Initializers tracks the progress of initialization.
 */
export declare function initializersIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.InitializersIoK8sApimachineryPkgApisMetaV1>): k8s.InitializersIoK8sApimachineryPkgApisMetaV1;
/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export declare function labelSelectorIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.LabelSelectorIoK8sApimachineryPkgApisMetaV1>): k8s.LabelSelectorIoK8sApimachineryPkgApisMetaV1;
/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export declare function labelSelectorRequirementIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.LabelSelectorRequirementIoK8sApimachineryPkgApisMetaV1>): k8s.LabelSelectorRequirementIoK8sApimachineryPkgApisMetaV1;
/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export declare function listMetaIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.ListMetaIoK8sApimachineryPkgApisMetaV1>): k8s.ListMetaIoK8sApimachineryPkgApisMetaV1;
/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export declare function listMeta_v2IoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.ListMeta_v2IoK8sApimachineryPkgApisMetaV1>): k8s.ListMeta_v2IoK8sApimachineryPkgApisMetaV1;
/**
 * MicroTime is version of Time with microsecond level precision.
 */
export declare function microTimeIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.MicroTimeIoK8sApimachineryPkgApisMetaV1>): k8s.MicroTimeIoK8sApimachineryPkgApisMetaV1;
/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
export declare function objectMetaIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.ObjectMetaIoK8sApimachineryPkgApisMetaV1>): k8s.ObjectMetaIoK8sApimachineryPkgApisMetaV1;
/**
 * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
 */
export declare function ownerReferenceIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.OwnerReferenceIoK8sApimachineryPkgApisMetaV1>): k8s.OwnerReferenceIoK8sApimachineryPkgApisMetaV1;
/**
 * Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
 */
export declare function patchIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.PatchIoK8sApimachineryPkgApisMetaV1>): k8s.PatchIoK8sApimachineryPkgApisMetaV1;
/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export declare function preconditionsIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.PreconditionsIoK8sApimachineryPkgApisMetaV1>): k8s.PreconditionsIoK8sApimachineryPkgApisMetaV1;
/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 */
export declare function serverAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.ServerAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1>): k8s.ServerAddressByClientCIDRIoK8sApimachineryPkgApisMetaV1;
/**
 * Status is a return value for calls that don't return other objects.
 */
export declare function statusIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.StatusIoK8sApimachineryPkgApisMetaV1>): k8s.StatusIoK8sApimachineryPkgApisMetaV1;
/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export declare function statusCauseIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.StatusCauseIoK8sApimachineryPkgApisMetaV1>): k8s.StatusCauseIoK8sApimachineryPkgApisMetaV1;
/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export declare function statusDetailsIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.StatusDetailsIoK8sApimachineryPkgApisMetaV1>): k8s.StatusDetailsIoK8sApimachineryPkgApisMetaV1;
/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 */
export declare function timeIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.TimeIoK8sApimachineryPkgApisMetaV1>): k8s.TimeIoK8sApimachineryPkgApisMetaV1;
/**
 * Event represents a single event to a watched resource.
 */
export declare function watchEventIoK8sApimachineryPkgApisMetaV1(options?: Optional<k8s.WatchEventIoK8sApimachineryPkgApisMetaV1>): k8s.WatchEventIoK8sApimachineryPkgApisMetaV1;
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
export declare function rawExtensionIoK8sApimachineryPkgRuntime(options?: Optional<k8s.RawExtensionIoK8sApimachineryPkgRuntime>): k8s.RawExtensionIoK8sApimachineryPkgRuntime;
/**
 * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
 */
export declare function intOrStringIoK8sApimachineryPkgUtilIntstr(options?: Optional<k8s.IntOrStringIoK8sApimachineryPkgUtilIntstr>): k8s.IntOrStringIoK8sApimachineryPkgUtilIntstr;
/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export declare function infoIoK8sApimachineryPkgVersion(options?: Optional<k8s.InfoIoK8sApimachineryPkgVersion>): k8s.InfoIoK8sApimachineryPkgVersion;
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export declare function aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1>): k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1;
export declare function aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1>): k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * APIServiceList is a list of APIService objects.
 */
export declare function aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1>): k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export declare function aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1>): k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * APIServiceStatus contains derived information about an API server
 */
export declare function aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1>): k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export declare function serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1(options?: Optional<k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1>): k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1;
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export declare function aPIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>): k8s.APIServiceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
export declare function aPIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>): k8s.APIServiceConditionIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * APIServiceList is a list of APIService objects.
 */
export declare function aPIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>): k8s.APIServiceListIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export declare function aPIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>): k8s.APIServiceSpecIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * APIServiceStatus contains derived information about an API server
 */
export declare function aPIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>): k8s.APIServiceStatusIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export declare function serviceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1(options?: Optional<k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1>): k8s.ServiceReferenceIoK8sKubeaggregatorPkgApisApiregistrationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource instead.
 */
export declare function aWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.AWSElasticBlockStoreVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Affinity instead.
 */
export declare function affinityIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AffinityIoK8sKubernetesPkgApiV1>): k8s.AffinityIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.AttachedVolume instead.
 */
export declare function attachedVolumeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AttachedVolumeIoK8sKubernetesPkgApiV1>): k8s.AttachedVolumeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.AzureDiskVolumeSource instead.
 */
export declare function azureDiskVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AzureDiskVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.AzureDiskVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.AzureFileVolumeSource instead.
 */
export declare function azureFileVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.AzureFileVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.AzureFileVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Binding instead.
 */
export declare function bindingIoK8sKubernetesPkgApiV1(options?: Optional<k8s.BindingIoK8sKubernetesPkgApiV1>): k8s.BindingIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Capabilities instead.
 */
export declare function capabilitiesIoK8sKubernetesPkgApiV1(options?: Optional<k8s.CapabilitiesIoK8sKubernetesPkgApiV1>): k8s.CapabilitiesIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.CephFSVolumeSource instead.
 */
export declare function cephFSVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.CephFSVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.CephFSVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.CinderVolumeSource instead.
 */
export declare function cinderVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.CinderVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.CinderVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentCondition instead.
 */
export declare function componentConditionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ComponentConditionIoK8sKubernetesPkgApiV1>): k8s.ComponentConditionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentStatus instead.
 */
export declare function componentStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ComponentStatusIoK8sKubernetesPkgApiV1>): k8s.ComponentStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ComponentStatusList instead.
 */
export declare function componentStatusListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ComponentStatusListIoK8sKubernetesPkgApiV1>): k8s.ComponentStatusListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMap instead.
 */
export declare function configMapIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapIoK8sKubernetesPkgApiV1>): k8s.ConfigMapIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapEnvSource instead.
 */
export declare function configMapEnvSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapEnvSourceIoK8sKubernetesPkgApiV1>): k8s.ConfigMapEnvSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapKeySelector instead.
 */
export declare function configMapKeySelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapKeySelectorIoK8sKubernetesPkgApiV1>): k8s.ConfigMapKeySelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapList instead.
 */
export declare function configMapListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapListIoK8sKubernetesPkgApiV1>): k8s.ConfigMapListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapProjection instead.
 */
export declare function configMapProjectionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapProjectionIoK8sKubernetesPkgApiV1>): k8s.ConfigMapProjectionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ConfigMapVolumeSource instead.
 */
export declare function configMapVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ConfigMapVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.ConfigMapVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Container instead.
 */
export declare function containerIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerIoK8sKubernetesPkgApiV1>): k8s.ContainerIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerImage instead.
 */
export declare function containerImageIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerImageIoK8sKubernetesPkgApiV1>): k8s.ContainerImageIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerPort instead.
 */
export declare function containerPortIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerPortIoK8sKubernetesPkgApiV1>): k8s.ContainerPortIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerState instead.
 */
export declare function containerStateIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStateIoK8sKubernetesPkgApiV1>): k8s.ContainerStateIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateRunning instead.
 */
export declare function containerStateRunningIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStateRunningIoK8sKubernetesPkgApiV1>): k8s.ContainerStateRunningIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateTerminated instead.
 */
export declare function containerStateTerminatedIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStateTerminatedIoK8sKubernetesPkgApiV1>): k8s.ContainerStateTerminatedIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStateWaiting instead.
 */
export declare function containerStateWaitingIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStateWaitingIoK8sKubernetesPkgApiV1>): k8s.ContainerStateWaitingIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ContainerStatus instead.
 */
export declare function containerStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ContainerStatusIoK8sKubernetesPkgApiV1>): k8s.ContainerStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.DaemonEndpoint instead.
 */
export declare function daemonEndpointIoK8sKubernetesPkgApiV1(options?: Optional<k8s.DaemonEndpointIoK8sKubernetesPkgApiV1>): k8s.DaemonEndpointIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIProjection instead.
 */
export declare function downwardAPIProjectionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.DownwardAPIProjectionIoK8sKubernetesPkgApiV1>): k8s.DownwardAPIProjectionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIVolumeFile instead.
 */
export declare function downwardAPIVolumeFileIoK8sKubernetesPkgApiV1(options?: Optional<k8s.DownwardAPIVolumeFileIoK8sKubernetesPkgApiV1>): k8s.DownwardAPIVolumeFileIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.DownwardAPIVolumeSource instead.
 */
export declare function downwardAPIVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.DownwardAPIVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.DownwardAPIVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EmptyDirVolumeSource instead.
 */
export declare function emptyDirVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EmptyDirVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.EmptyDirVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointAddress instead.
 */
export declare function endpointAddressIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointAddressIoK8sKubernetesPkgApiV1>): k8s.EndpointAddressIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointPort instead.
 */
export declare function endpointPortIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointPortIoK8sKubernetesPkgApiV1>): k8s.EndpointPortIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointSubset instead.
 */
export declare function endpointSubsetIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointSubsetIoK8sKubernetesPkgApiV1>): k8s.EndpointSubsetIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Endpoints instead.
 */
export declare function endpointsIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointsIoK8sKubernetesPkgApiV1>): k8s.EndpointsIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EndpointsList instead.
 */
export declare function endpointsListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EndpointsListIoK8sKubernetesPkgApiV1>): k8s.EndpointsListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvFromSource instead.
 */
export declare function envFromSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EnvFromSourceIoK8sKubernetesPkgApiV1>): k8s.EnvFromSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvVar instead.
 */
export declare function envVarIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EnvVarIoK8sKubernetesPkgApiV1>): k8s.EnvVarIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EnvVarSource instead.
 */
export declare function envVarSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EnvVarSourceIoK8sKubernetesPkgApiV1>): k8s.EnvVarSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Event instead.
 */
export declare function eventIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EventIoK8sKubernetesPkgApiV1>): k8s.EventIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EventList instead.
 */
export declare function eventListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EventListIoK8sKubernetesPkgApiV1>): k8s.EventListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.EventSource instead.
 */
export declare function eventSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.EventSourceIoK8sKubernetesPkgApiV1>): k8s.EventSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ExecAction instead.
 */
export declare function execActionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ExecActionIoK8sKubernetesPkgApiV1>): k8s.ExecActionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.FCVolumeSource instead.
 */
export declare function fCVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.FCVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.FCVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.FlexVolumeSource instead.
 */
export declare function flexVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.FlexVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.FlexVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.FlockerVolumeSource instead.
 */
export declare function flockerVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.FlockerVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.FlockerVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.GCEPersistentDiskVolumeSource instead.
 */
export declare function gCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.GCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.GCEPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.GitRepoVolumeSource instead.
 */
export declare function gitRepoVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.GitRepoVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.GitRepoVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.GlusterfsVolumeSource instead.
 */
export declare function glusterfsVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.GlusterfsVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.GlusterfsVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.HTTPGetAction instead.
 */
export declare function hTTPGetActionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HTTPGetActionIoK8sKubernetesPkgApiV1>): k8s.HTTPGetActionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.HTTPHeader instead.
 */
export declare function hTTPHeaderIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HTTPHeaderIoK8sKubernetesPkgApiV1>): k8s.HTTPHeaderIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Handler instead.
 */
export declare function handlerIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HandlerIoK8sKubernetesPkgApiV1>): k8s.HandlerIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.HostAlias instead.
 */
export declare function hostAliasIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HostAliasIoK8sKubernetesPkgApiV1>): k8s.HostAliasIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.HostPathVolumeSource instead.
 */
export declare function hostPathVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.HostPathVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.HostPathVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ISCSIVolumeSource instead.
 */
export declare function iSCSIVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ISCSIVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.ISCSIVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.KeyToPath instead.
 */
export declare function keyToPathIoK8sKubernetesPkgApiV1(options?: Optional<k8s.KeyToPathIoK8sKubernetesPkgApiV1>): k8s.KeyToPathIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Lifecycle instead.
 */
export declare function lifecycleIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LifecycleIoK8sKubernetesPkgApiV1>): k8s.LifecycleIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRange instead.
 */
export declare function limitRangeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LimitRangeIoK8sKubernetesPkgApiV1>): k8s.LimitRangeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeItem instead.
 */
export declare function limitRangeItemIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LimitRangeItemIoK8sKubernetesPkgApiV1>): k8s.LimitRangeItemIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeList instead.
 */
export declare function limitRangeListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LimitRangeListIoK8sKubernetesPkgApiV1>): k8s.LimitRangeListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LimitRangeSpec instead.
 */
export declare function limitRangeSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LimitRangeSpecIoK8sKubernetesPkgApiV1>): k8s.LimitRangeSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LoadBalancerIngress instead.
 */
export declare function loadBalancerIngressIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LoadBalancerIngressIoK8sKubernetesPkgApiV1>): k8s.LoadBalancerIngressIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LoadBalancerStatus instead.
 */
export declare function loadBalancerStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LoadBalancerStatusIoK8sKubernetesPkgApiV1>): k8s.LoadBalancerStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LocalObjectReference instead.
 */
export declare function localObjectReferenceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LocalObjectReferenceIoK8sKubernetesPkgApiV1>): k8s.LocalObjectReferenceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.LocalVolumeSource instead.
 */
export declare function localVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.LocalVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.LocalVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NFSVolumeSource instead.
 */
export declare function nFSVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NFSVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.NFSVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Namespace instead.
 */
export declare function namespaceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NamespaceIoK8sKubernetesPkgApiV1>): k8s.NamespaceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceList instead.
 */
export declare function namespaceListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NamespaceListIoK8sKubernetesPkgApiV1>): k8s.NamespaceListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceSpec instead.
 */
export declare function namespaceSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NamespaceSpecIoK8sKubernetesPkgApiV1>): k8s.NamespaceSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NamespaceStatus instead.
 */
export declare function namespaceStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NamespaceStatusIoK8sKubernetesPkgApiV1>): k8s.NamespaceStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Node instead.
 */
export declare function nodeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeIoK8sKubernetesPkgApiV1>): k8s.NodeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeAddress instead.
 */
export declare function nodeAddressIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeAddressIoK8sKubernetesPkgApiV1>): k8s.NodeAddressIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeAffinity instead.
 */
export declare function nodeAffinityIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeAffinityIoK8sKubernetesPkgApiV1>): k8s.NodeAffinityIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeCondition instead.
 */
export declare function nodeConditionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeConditionIoK8sKubernetesPkgApiV1>): k8s.NodeConditionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeDaemonEndpoints instead.
 */
export declare function nodeDaemonEndpointsIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeDaemonEndpointsIoK8sKubernetesPkgApiV1>): k8s.NodeDaemonEndpointsIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeList instead.
 */
export declare function nodeListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeListIoK8sKubernetesPkgApiV1>): k8s.NodeListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelector instead.
 */
export declare function nodeSelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSelectorIoK8sKubernetesPkgApiV1>): k8s.NodeSelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelectorRequirement instead.
 */
export declare function nodeSelectorRequirementIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSelectorRequirementIoK8sKubernetesPkgApiV1>): k8s.NodeSelectorRequirementIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSelectorTerm instead.
 */
export declare function nodeSelectorTermIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSelectorTermIoK8sKubernetesPkgApiV1>): k8s.NodeSelectorTermIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSpec instead.
 */
export declare function nodeSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSpecIoK8sKubernetesPkgApiV1>): k8s.NodeSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeStatus instead.
 */
export declare function nodeStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeStatusIoK8sKubernetesPkgApiV1>): k8s.NodeStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.NodeSystemInfo instead.
 */
export declare function nodeSystemInfoIoK8sKubernetesPkgApiV1(options?: Optional<k8s.NodeSystemInfoIoK8sKubernetesPkgApiV1>): k8s.NodeSystemInfoIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ObjectFieldSelector instead.
 */
export declare function objectFieldSelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ObjectFieldSelectorIoK8sKubernetesPkgApiV1>): k8s.ObjectFieldSelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ObjectReference instead.
 */
export declare function objectReferenceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ObjectReferenceIoK8sKubernetesPkgApiV1>): k8s.ObjectReferenceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolume instead.
 */
export declare function persistentVolumeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaim instead.
 */
export declare function persistentVolumeClaimIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeClaimIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimList instead.
 */
export declare function persistentVolumeClaimListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimListIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeClaimListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimSpec instead.
 */
export declare function persistentVolumeClaimSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimSpecIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeClaimSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimStatus instead.
 */
export declare function persistentVolumeClaimStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimStatusIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeClaimStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource instead.
 */
export declare function persistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeClaimVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeList instead.
 */
export declare function persistentVolumeListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeListIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeSpec instead.
 */
export declare function persistentVolumeSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeSpecIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PersistentVolumeStatus instead.
 */
export declare function persistentVolumeStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PersistentVolumeStatusIoK8sKubernetesPkgApiV1>): k8s.PersistentVolumeStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource instead.
 */
export declare function photonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PhotonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.PhotonPersistentDiskVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Pod instead.
 */
export declare function podIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodIoK8sKubernetesPkgApiV1>): k8s.PodIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAffinity instead.
 */
export declare function podAffinityIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodAffinityIoK8sKubernetesPkgApiV1>): k8s.PodAffinityIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAffinityTerm instead.
 */
export declare function podAffinityTermIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodAffinityTermIoK8sKubernetesPkgApiV1>): k8s.PodAffinityTermIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodAntiAffinity instead.
 */
export declare function podAntiAffinityIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodAntiAffinityIoK8sKubernetesPkgApiV1>): k8s.PodAntiAffinityIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodCondition instead.
 */
export declare function podConditionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodConditionIoK8sKubernetesPkgApiV1>): k8s.PodConditionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodList instead.
 */
export declare function podListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodListIoK8sKubernetesPkgApiV1>): k8s.PodListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodSecurityContext instead.
 */
export declare function podSecurityContextIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodSecurityContextIoK8sKubernetesPkgApiV1>): k8s.PodSecurityContextIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodSpec instead.
 */
export declare function podSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodSpecIoK8sKubernetesPkgApiV1>): k8s.PodSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodStatus instead.
 */
export declare function podStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodStatusIoK8sKubernetesPkgApiV1>): k8s.PodStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplate instead.
 */
export declare function podTemplateIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodTemplateIoK8sKubernetesPkgApiV1>): k8s.PodTemplateIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplateList instead.
 */
export declare function podTemplateListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodTemplateListIoK8sKubernetesPkgApiV1>): k8s.PodTemplateListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PodTemplateSpec instead.
 */
export declare function podTemplateSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PodTemplateSpecIoK8sKubernetesPkgApiV1>): k8s.PodTemplateSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PortworxVolumeSource instead.
 */
export declare function portworxVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PortworxVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.PortworxVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.PreferredSchedulingTerm instead.
 */
export declare function preferredSchedulingTermIoK8sKubernetesPkgApiV1(options?: Optional<k8s.PreferredSchedulingTermIoK8sKubernetesPkgApiV1>): k8s.PreferredSchedulingTermIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Probe instead.
 */
export declare function probeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ProbeIoK8sKubernetesPkgApiV1>): k8s.ProbeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ProjectedVolumeSource instead.
 */
export declare function projectedVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ProjectedVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.ProjectedVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.QuobyteVolumeSource instead.
 */
export declare function quobyteVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.QuobyteVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.QuobyteVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.RBDVolumeSource instead.
 */
export declare function rBDVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.RBDVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.RBDVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationController instead.
 */
export declare function replicationControllerIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerIoK8sKubernetesPkgApiV1>): k8s.ReplicationControllerIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerCondition instead.
 */
export declare function replicationControllerConditionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerConditionIoK8sKubernetesPkgApiV1>): k8s.ReplicationControllerConditionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerList instead.
 */
export declare function replicationControllerListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerListIoK8sKubernetesPkgApiV1>): k8s.ReplicationControllerListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerSpec instead.
 */
export declare function replicationControllerSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerSpecIoK8sKubernetesPkgApiV1>): k8s.ReplicationControllerSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ReplicationControllerStatus instead.
 */
export declare function replicationControllerStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ReplicationControllerStatusIoK8sKubernetesPkgApiV1>): k8s.ReplicationControllerStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceFieldSelector instead.
 */
export declare function resourceFieldSelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceFieldSelectorIoK8sKubernetesPkgApiV1>): k8s.ResourceFieldSelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuota instead.
 */
export declare function resourceQuotaIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceQuotaIoK8sKubernetesPkgApiV1>): k8s.ResourceQuotaIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaList instead.
 */
export declare function resourceQuotaListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceQuotaListIoK8sKubernetesPkgApiV1>): k8s.ResourceQuotaListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaSpec instead.
 */
export declare function resourceQuotaSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceQuotaSpecIoK8sKubernetesPkgApiV1>): k8s.ResourceQuotaSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceQuotaStatus instead.
 */
export declare function resourceQuotaStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceQuotaStatusIoK8sKubernetesPkgApiV1>): k8s.ResourceQuotaStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ResourceRequirements instead.
 */
export declare function resourceRequirementsIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ResourceRequirementsIoK8sKubernetesPkgApiV1>): k8s.ResourceRequirementsIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SELinuxOptions instead.
 */
export declare function sELinuxOptionsIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SELinuxOptionsIoK8sKubernetesPkgApiV1>): k8s.SELinuxOptionsIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ScaleIOVolumeSource instead.
 */
export declare function scaleIOVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ScaleIOVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.ScaleIOVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Secret instead.
 */
export declare function secretIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretIoK8sKubernetesPkgApiV1>): k8s.SecretIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretEnvSource instead.
 */
export declare function secretEnvSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretEnvSourceIoK8sKubernetesPkgApiV1>): k8s.SecretEnvSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretKeySelector instead.
 */
export declare function secretKeySelectorIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretKeySelectorIoK8sKubernetesPkgApiV1>): k8s.SecretKeySelectorIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretList instead.
 */
export declare function secretListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretListIoK8sKubernetesPkgApiV1>): k8s.SecretListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretProjection instead.
 */
export declare function secretProjectionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretProjectionIoK8sKubernetesPkgApiV1>): k8s.SecretProjectionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecretVolumeSource instead.
 */
export declare function secretVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecretVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.SecretVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.SecurityContext instead.
 */
export declare function securityContextIoK8sKubernetesPkgApiV1(options?: Optional<k8s.SecurityContextIoK8sKubernetesPkgApiV1>): k8s.SecurityContextIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Service instead.
 */
export declare function serviceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceIoK8sKubernetesPkgApiV1>): k8s.ServiceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceAccount instead.
 */
export declare function serviceAccountIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceAccountIoK8sKubernetesPkgApiV1>): k8s.ServiceAccountIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceAccountList instead.
 */
export declare function serviceAccountListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceAccountListIoK8sKubernetesPkgApiV1>): k8s.ServiceAccountListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceList instead.
 */
export declare function serviceListIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceListIoK8sKubernetesPkgApiV1>): k8s.ServiceListIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServicePort instead.
 */
export declare function servicePortIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServicePortIoK8sKubernetesPkgApiV1>): k8s.ServicePortIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceSpec instead.
 */
export declare function serviceSpecIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceSpecIoK8sKubernetesPkgApiV1>): k8s.ServiceSpecIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.ServiceStatus instead.
 */
export declare function serviceStatusIoK8sKubernetesPkgApiV1(options?: Optional<k8s.ServiceStatusIoK8sKubernetesPkgApiV1>): k8s.ServiceStatusIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.StorageOSPersistentVolumeSource instead.
 */
export declare function storageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.StorageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.StorageOSPersistentVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.StorageOSVolumeSource instead.
 */
export declare function storageOSVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.StorageOSVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.StorageOSVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.TCPSocketAction instead.
 */
export declare function tCPSocketActionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.TCPSocketActionIoK8sKubernetesPkgApiV1>): k8s.TCPSocketActionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Taint instead.
 */
export declare function taintIoK8sKubernetesPkgApiV1(options?: Optional<k8s.TaintIoK8sKubernetesPkgApiV1>): k8s.TaintIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Toleration instead.
 */
export declare function tolerationIoK8sKubernetesPkgApiV1(options?: Optional<k8s.TolerationIoK8sKubernetesPkgApiV1>): k8s.TolerationIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.Volume instead.
 */
export declare function volumeIoK8sKubernetesPkgApiV1(options?: Optional<k8s.VolumeIoK8sKubernetesPkgApiV1>): k8s.VolumeIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.VolumeMount instead.
 */
export declare function volumeMountIoK8sKubernetesPkgApiV1(options?: Optional<k8s.VolumeMountIoK8sKubernetesPkgApiV1>): k8s.VolumeMountIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.VolumeProjection instead.
 */
export declare function volumeProjectionIoK8sKubernetesPkgApiV1(options?: Optional<k8s.VolumeProjectionIoK8sKubernetesPkgApiV1>): k8s.VolumeProjectionIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource instead.
 */
export declare function vsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1(options?: Optional<k8s.VsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1>): k8s.VsphereVirtualDiskVolumeSourceIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.core.v1.WeightedPodAffinityTerm instead.
 */
export declare function weightedPodAffinityTermIoK8sKubernetesPkgApiV1(options?: Optional<k8s.WeightedPodAffinityTermIoK8sKubernetesPkgApiV1>): k8s.WeightedPodAffinityTermIoK8sKubernetesPkgApiV1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ControllerRevision instead.
 */
export declare function controllerRevisionIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ControllerRevisionIoK8sKubernetesPkgApisAppsV1beta1>): k8s.ControllerRevisionIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ControllerRevisionList instead.
 */
export declare function controllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ControllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1>): k8s.ControllerRevisionListIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.Deployment instead.
 */
export declare function deploymentIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentIoK8sKubernetesPkgApisAppsV1beta1>): k8s.DeploymentIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentCondition instead.
 */
export declare function deploymentConditionIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentConditionIoK8sKubernetesPkgApisAppsV1beta1>): k8s.DeploymentConditionIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentList instead.
 */
export declare function deploymentListIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentListIoK8sKubernetesPkgApisAppsV1beta1>): k8s.DeploymentListIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentRollback instead.
 */
export declare function deploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1>): k8s.DeploymentRollbackIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentSpec instead.
 */
export declare function deploymentSpecIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentSpecIoK8sKubernetesPkgApisAppsV1beta1>): k8s.DeploymentSpecIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentStatus instead.
 */
export declare function deploymentStatusIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentStatusIoK8sKubernetesPkgApisAppsV1beta1>): k8s.DeploymentStatusIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.DeploymentStrategy instead.
 */
export declare function deploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.DeploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1>): k8s.DeploymentStrategyIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollbackConfig instead.
 */
export declare function rollbackConfigIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.RollbackConfigIoK8sKubernetesPkgApisAppsV1beta1>): k8s.RollbackConfigIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollingUpdateDeployment instead.
 */
export declare function rollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1>): k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.RollingUpdateStatefulSetStrategy instead.
 */
export declare function rollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.RollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1>): k8s.RollingUpdateStatefulSetStrategyIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.Scale instead.
 */
export declare function scaleIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ScaleIoK8sKubernetesPkgApisAppsV1beta1>): k8s.ScaleIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ScaleSpec instead.
 */
export declare function scaleSpecIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ScaleSpecIoK8sKubernetesPkgApisAppsV1beta1>): k8s.ScaleSpecIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.ScaleStatus instead.
 */
export declare function scaleStatusIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.ScaleStatusIoK8sKubernetesPkgApisAppsV1beta1>): k8s.ScaleStatusIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSet instead.
 */
export declare function statefulSetIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetIoK8sKubernetesPkgApisAppsV1beta1>): k8s.StatefulSetIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetList instead.
 */
export declare function statefulSetListIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetListIoK8sKubernetesPkgApisAppsV1beta1>): k8s.StatefulSetListIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetSpec instead.
 */
export declare function statefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1>): k8s.StatefulSetSpecIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetStatus instead.
 */
export declare function statefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1>): k8s.StatefulSetStatusIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.apps.v1beta1.StatefulSetUpdateStrategy instead.
 */
export declare function statefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1(options?: Optional<k8s.StatefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1>): k8s.StatefulSetUpdateStrategyIoK8sKubernetesPkgApisAppsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReview instead.
 */
export declare function tokenReviewIoK8sKubernetesPkgApisAuthenticationV1(options?: Optional<k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1>): k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReviewSpec instead.
 */
export declare function tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1(options?: Optional<k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1>): k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1.TokenReviewStatus instead.
 */
export declare function tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1(options?: Optional<k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1>): k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1.UserInfo instead.
 */
export declare function userInfoIoK8sKubernetesPkgApisAuthenticationV1(options?: Optional<k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1>): k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReview instead.
 */
export declare function tokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1(options?: Optional<k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1>): k8s.TokenReviewIoK8sKubernetesPkgApisAuthenticationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReviewSpec instead.
 */
export declare function tokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1(options?: Optional<k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1>): k8s.TokenReviewSpecIoK8sKubernetesPkgApisAuthenticationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.TokenReviewStatus instead.
 */
export declare function tokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1(options?: Optional<k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1>): k8s.TokenReviewStatusIoK8sKubernetesPkgApisAuthenticationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authentication.v1beta1.UserInfo instead.
 */
export declare function userInfoIoK8sKubernetesPkgApisAuthenticationV1beta1(options?: Optional<k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1beta1>): k8s.UserInfoIoK8sKubernetesPkgApisAuthenticationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.LocalSubjectAccessReview instead.
 */
export declare function localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>): k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.NonResourceAttributes instead.
 */
export declare function nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1>): k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.ResourceAttributes instead.
 */
export declare function resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1>): k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SelfSubjectAccessReview instead.
 */
export declare function selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>): k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec instead.
 */
export declare function selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1>): k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReview instead.
 */
export declare function subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1>): k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReviewSpec instead.
 */
export declare function subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1>): k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1.SubjectAccessReviewStatus instead.
 */
export declare function subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1(options?: Optional<k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1>): k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview instead.
 */
export declare function localSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>): k8s.LocalSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.NonResourceAttributes instead.
 */
export declare function nonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1>): k8s.NonResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.ResourceAttributes instead.
 */
export declare function resourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1>): k8s.ResourceAttributesIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview instead.
 */
export declare function selfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>): k8s.SelfSubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SelfSubjectAccessReviewSpec instead.
 */
export declare function selfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1>): k8s.SelfSubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReview instead.
 */
export declare function subjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1>): k8s.SubjectAccessReviewIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec instead.
 */
export declare function subjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1>): k8s.SubjectAccessReviewSpecIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.authorization.v1beta1.SubjectAccessReviewStatus instead.
 */
export declare function subjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1(options?: Optional<k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1>): k8s.SubjectAccessReviewStatusIoK8sKubernetesPkgApisAuthorizationV1beta1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.CrossVersionObjectReference instead.
 */
export declare function crossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.CrossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1>): k8s.CrossVersionObjectReferenceIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler instead.
 */
export declare function horizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1>): k8s.HorizontalPodAutoscalerIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList instead.
 */
export declare function horizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1>): k8s.HorizontalPodAutoscalerListIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec instead.
 */
export declare function horizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1>): k8s.HorizontalPodAutoscalerSpecIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus instead.
 */
export declare function horizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.HorizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1>): k8s.HorizontalPodAutoscalerStatusIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.Scale instead.
 */
export declare function scaleIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.ScaleIoK8sKubernetesPkgApisAutoscalingV1>): k8s.ScaleIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.ScaleSpec instead.
 */
export declare function scaleSpecIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.ScaleSpecIoK8sKubernetesPkgApisAutoscalingV1>): k8s.ScaleSpecIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.autoscaling.v1.ScaleStatus instead.
 */
export declare function scaleStatusIoK8sKubernetesPkgApisAutoscalingV1(options?: Optional<k8s.ScaleStatusIoK8sKubernetesPkgApisAutoscalingV1>): k8s.ScaleStatusIoK8sKubernetesPkgApisAutoscalingV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.Job instead.
 */
export declare function jobIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobIoK8sKubernetesPkgApisBatchV1>): k8s.JobIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobCondition instead.
 */
export declare function jobConditionIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobConditionIoK8sKubernetesPkgApisBatchV1>): k8s.JobConditionIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobList instead.
 */
export declare function jobListIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobListIoK8sKubernetesPkgApisBatchV1>): k8s.JobListIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobSpec instead.
 */
export declare function jobSpecIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobSpecIoK8sKubernetesPkgApisBatchV1>): k8s.JobSpecIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.batch.v1.JobStatus instead.
 */
export declare function jobStatusIoK8sKubernetesPkgApisBatchV1(options?: Optional<k8s.JobStatusIoK8sKubernetesPkgApisBatchV1>): k8s.JobStatusIoK8sKubernetesPkgApisBatchV1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequest instead.
 */
export declare function certificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1>): k8s.CertificateSigningRequestIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestCondition instead.
 */
export declare function certificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1>): k8s.CertificateSigningRequestConditionIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestList instead.
 */
export declare function certificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1>): k8s.CertificateSigningRequestListIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec instead.
 */
export declare function certificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1>): k8s.CertificateSigningRequestSpecIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.certificates.v1beta1.CertificateSigningRequestStatus instead.
 */
export declare function certificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1(options?: Optional<k8s.CertificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1>): k8s.CertificateSigningRequestStatusIoK8sKubernetesPkgApisCertificatesV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSet instead.
 */
export declare function daemonSetIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetList instead.
 */
export declare function daemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DaemonSetListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetSpec instead.
 */
export declare function daemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DaemonSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetStatus instead.
 */
export declare function daemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DaemonSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSetUpdateStrategy instead.
 */
export declare function daemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DaemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DaemonSetUpdateStrategyIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Deployment instead.
 */
export declare function deploymentIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DeploymentIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentCondition instead.
 */
export declare function deploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DeploymentConditionIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentList instead.
 */
export declare function deploymentListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentListIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DeploymentListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentRollback instead.
 */
export declare function deploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DeploymentRollbackIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentSpec instead.
 */
export declare function deploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DeploymentSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentStatus instead.
 */
export declare function deploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DeploymentStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.DeploymentStrategy instead.
 */
export declare function deploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.DeploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.DeploymentStrategyIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.FSGroupStrategyOptions instead.
 */
export declare function fSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.FSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.FSGroupStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HTTPIngressPath instead.
 */
export declare function hTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.HTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.HTTPIngressPathIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HTTPIngressRuleValue instead.
 */
export declare function hTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.HTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.HTTPIngressRuleValueIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.HostPortRange instead.
 */
export declare function hostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.HostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.HostPortRangeIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IDRange instead.
 */
export declare function iDRangeIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IDRangeIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.IDRangeIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Ingress instead.
 */
export declare function ingressIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.IngressIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressBackend instead.
 */
export declare function ingressBackendIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressBackendIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.IngressBackendIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressList instead.
 */
export declare function ingressListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressListIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.IngressListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressRule instead.
 */
export declare function ingressRuleIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.IngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressSpec instead.
 */
export declare function ingressSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressSpecIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.IngressSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressStatus instead.
 */
export declare function ingressStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressStatusIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.IngressStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.IngressTLS instead.
 */
export declare function ingressTLSIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.IngressTLSIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.IngressTLSIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicy instead.
 */
export declare function networkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.NetworkPolicyIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyIngressRule instead.
 */
export declare function networkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyList instead.
 */
export declare function networkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.NetworkPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyPeer instead.
 */
export declare function networkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicyPort instead.
 */
export declare function networkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.NetworkPolicyPortIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.NetworkPolicySpec instead.
 */
export declare function networkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.NetworkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.NetworkPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicy instead.
 */
export declare function podSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.PodSecurityPolicyIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicyList instead.
 */
export declare function podSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.PodSecurityPolicyListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec instead.
 */
export declare function podSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.PodSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.PodSecurityPolicySpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSet instead.
 */
export declare function replicaSetIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.ReplicaSetIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetCondition instead.
 */
export declare function replicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.ReplicaSetConditionIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetList instead.
 */
export declare function replicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.ReplicaSetListIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetSpec instead.
 */
export declare function replicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.ReplicaSetSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ReplicaSetStatus instead.
 */
export declare function replicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ReplicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.ReplicaSetStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollbackConfig instead.
 */
export declare function rollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.RollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.RollbackConfigIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollingUpdateDaemonSet instead.
 */
export declare function rollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.RollingUpdateDaemonSetIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RollingUpdateDeployment instead.
 */
export declare function rollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.RollingUpdateDeploymentIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.RunAsUserStrategyOptions instead.
 */
export declare function runAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.RunAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.RunAsUserStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.SELinuxStrategyOptions instead.
 */
export declare function sELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.SELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.SELinuxStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.Scale instead.
 */
export declare function scaleIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ScaleIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.ScaleIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ScaleSpec instead.
 */
export declare function scaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ScaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.ScaleSpecIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.ScaleStatus instead.
 */
export declare function scaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.ScaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.ScaleStatusIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.extensions.v1beta1.SupplementalGroupsStrategyOptions instead.
 */
export declare function supplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1(options?: Optional<k8s.SupplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1>): k8s.SupplementalGroupsStrategyOptionsIoK8sKubernetesPkgApisExtensionsV1beta1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicy instead.
 */
export declare function networkPolicyIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyIoK8sKubernetesPkgApisNetworkingV1>): k8s.NetworkPolicyIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyIngressRule instead.
 */
export declare function networkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1>): k8s.NetworkPolicyIngressRuleIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyList instead.
 */
export declare function networkPolicyListIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyListIoK8sKubernetesPkgApisNetworkingV1>): k8s.NetworkPolicyListIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyPeer instead.
 */
export declare function networkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1>): k8s.NetworkPolicyPeerIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicyPort instead.
 */
export declare function networkPolicyPortIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicyPortIoK8sKubernetesPkgApisNetworkingV1>): k8s.NetworkPolicyPortIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.networking.v1.NetworkPolicySpec instead.
 */
export declare function networkPolicySpecIoK8sKubernetesPkgApisNetworkingV1(options?: Optional<k8s.NetworkPolicySpecIoK8sKubernetesPkgApisNetworkingV1>): k8s.NetworkPolicySpecIoK8sKubernetesPkgApisNetworkingV1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.Eviction instead.
 */
export declare function evictionIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.EvictionIoK8sKubernetesPkgApisPolicyV1beta1>): k8s.EvictionIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudget instead.
 */
export declare function podDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1>): k8s.PodDisruptionBudgetIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetList instead.
 */
export declare function podDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1>): k8s.PodDisruptionBudgetListIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec instead.
 */
export declare function podDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1>): k8s.PodDisruptionBudgetSpecIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.policy.v1beta1.PodDisruptionBudgetStatus instead.
 */
export declare function podDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1(options?: Optional<k8s.PodDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1>): k8s.PodDisruptionBudgetStatusIoK8sKubernetesPkgApisPolicyV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRole instead.
 */
export declare function clusterRoleIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.ClusterRoleIoK8sKubernetesPkgApisRbacV1beta1>): k8s.ClusterRoleIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleBinding instead.
 */
export declare function clusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.ClusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1>): k8s.ClusterRoleBindingIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleBindingList instead.
 */
export declare function clusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.ClusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1>): k8s.ClusterRoleBindingListIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.ClusterRoleList instead.
 */
export declare function clusterRoleListIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.ClusterRoleListIoK8sKubernetesPkgApisRbacV1beta1>): k8s.ClusterRoleListIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.PolicyRule instead.
 */
export declare function policyRuleIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.PolicyRuleIoK8sKubernetesPkgApisRbacV1beta1>): k8s.PolicyRuleIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.Role instead.
 */
export declare function roleIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleIoK8sKubernetesPkgApisRbacV1beta1>): k8s.RoleIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleBinding instead.
 */
export declare function roleBindingIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleBindingIoK8sKubernetesPkgApisRbacV1beta1>): k8s.RoleBindingIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleBindingList instead.
 */
export declare function roleBindingListIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleBindingListIoK8sKubernetesPkgApisRbacV1beta1>): k8s.RoleBindingListIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleList instead.
 */
export declare function roleListIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleListIoK8sKubernetesPkgApisRbacV1beta1>): k8s.RoleListIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.RoleRef instead.
 */
export declare function roleRefIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.RoleRefIoK8sKubernetesPkgApisRbacV1beta1>): k8s.RoleRefIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.rbac.v1beta1.Subject instead.
 */
export declare function subjectIoK8sKubernetesPkgApisRbacV1beta1(options?: Optional<k8s.SubjectIoK8sKubernetesPkgApisRbacV1beta1>): k8s.SubjectIoK8sKubernetesPkgApisRbacV1beta1;
/**
 * Deprecated. Please use io.k8s.api.storage.v1.StorageClass instead.
 */
export declare function storageClassIoK8sKubernetesPkgApisStorageV1(options?: Optional<k8s.StorageClassIoK8sKubernetesPkgApisStorageV1>): k8s.StorageClassIoK8sKubernetesPkgApisStorageV1;
/**
 * Deprecated. Please use io.k8s.api.storage.v1.StorageClassList instead.
 */
export declare function storageClassListIoK8sKubernetesPkgApisStorageV1(options?: Optional<k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1>): k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1;
/**
 * Deprecated. Please use io.k8s.api.storage.v1beta1.StorageClass instead.
 */
export declare function storageClassIoK8sKubernetesPkgApisStorageV1beta1(options?: Optional<k8s.StorageClassIoK8sKubernetesPkgApisStorageV1beta1>): k8s.StorageClassIoK8sKubernetesPkgApisStorageV1beta1;
/**
 * Deprecated. Please use io.k8s.api.storage.v1beta1.StorageClassList instead.
 */
export declare function storageClassListIoK8sKubernetesPkgApisStorageV1beta1(options?: Optional<k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1beta1>): k8s.StorageClassListIoK8sKubernetesPkgApisStorageV1beta1;
/**
 * resource usage metrics of a container.
 */
export declare function containerMetricsIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.ContainerMetricsIoK8sMetricsPkgApisMetricsV1beta1>): k8s.ContainerMetricsIoK8sMetricsPkgApisMetricsV1beta1;
/**
 * resource usage metrics of a node.
 */
export declare function nodeMetricsIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.NodeMetricsIoK8sMetricsPkgApisMetricsV1beta1>): k8s.NodeMetricsIoK8sMetricsPkgApisMetricsV1beta1;
/**
 * NodeMetricsList is a list of NodeMetrics.
 */
export declare function nodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.NodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1>): k8s.NodeMetricsListIoK8sMetricsPkgApisMetricsV1beta1;
/**
 * resource usage metrics of a pod.
 */
export declare function podMetricsIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.PodMetricsIoK8sMetricsPkgApisMetricsV1beta1>): k8s.PodMetricsIoK8sMetricsPkgApisMetricsV1beta1;
/**
 * PodMetricsList is a list of PodMetrics.
 */
export declare function podMetricsListIoK8sMetricsPkgApisMetricsV1beta1(options?: Optional<k8s.PodMetricsListIoK8sMetricsPkgApisMetricsV1beta1>): k8s.PodMetricsListIoK8sMetricsPkgApisMetricsV1beta1;
