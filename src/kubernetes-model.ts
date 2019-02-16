export interface ServiceReferenceAdmissionregistrationV1beta1 {
  name: string
  namespace: string
  path?: string
}

export interface WebhookClientConfigAdmissionregistrationV1beta1 {
  caBundle?: string
  service?: ServiceReferenceAdmissionregistrationV1beta1
  url?: string
}

export interface ServiceReferenceApiextensionsV1beta1 {
  name: string
  namespace: string
  path?: string
}

export interface WebhookClientConfigApiextensionsV1beta1 {
  caBundle?: string
  service?: ServiceReferenceApiextensionsV1beta1
  url?: string
}

export interface ServiceReferenceApiregistrationV1beta1 {
  name?: string
  namespace?: string
}

export interface DeploymentAppsV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: DeploymentSpecAppsV1beta1
  status?: DeploymentStatusAppsV1beta1
}

export interface DeploymentConditionAppsV1beta1 {
  lastTransitionTime?: string
  lastUpdateTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface DeploymentListAppsV1beta1 {
  apiVersion?: string
  items: DeploymentAppsV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface DeploymentRollbackAppsV1beta1 {
  apiVersion?: string
  kind?: string
  name: string
  rollbackTo: RollbackConfigAppsV1beta1
  updatedAnnotations?: Object
}

export interface DeploymentSpecAppsV1beta1 {
  minReadySeconds?: number
  paused?: boolean
  progressDeadlineSeconds?: number
  replicas?: number
  revisionHistoryLimit?: number
  rollbackTo?: RollbackConfigAppsV1beta1
  selector?: LabelSelectorV1
  strategy?: DeploymentStrategyAppsV1beta1
  template: PodTemplateSpecV1
}

export interface DeploymentStatusAppsV1beta1 {
  availableReplicas?: number
  collisionCount?: number
  conditions?: DeploymentConditionAppsV1beta1[]
  observedGeneration?: number
  readyReplicas?: number
  replicas?: number
  unavailableReplicas?: number
  updatedReplicas?: number
}

export interface DeploymentStrategyAppsV1beta1 {
  rollingUpdate?: RollingUpdateDeploymentAppsV1beta1
  type?: string
}

export interface RollbackConfigAppsV1beta1 {
  revision?: number
}

export interface RollingUpdateDeploymentAppsV1beta1 {
  maxSurge?: Object
  maxUnavailable?: Object
}

export interface ScaleAppsV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ScaleSpecAppsV1beta1
  status?: ScaleStatusAppsV1beta1
}

export interface ScaleSpecAppsV1beta1 {
  replicas?: number
}

export interface ScaleStatusAppsV1beta1 {
  replicas: number
  selector?: Object
  targetSelector?: string
}

export interface AllowedFlexVolumeExtensionsV1beta1 {
  driver: string
}

export interface AllowedHostPathExtensionsV1beta1 {
  pathPrefix?: string
  readOnly?: boolean
}

export interface DeploymentExtensionsV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: DeploymentSpecExtensionsV1beta1
  status?: DeploymentStatusExtensionsV1beta1
}

export interface DeploymentConditionExtensionsV1beta1 {
  lastTransitionTime?: string
  lastUpdateTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface DeploymentListExtensionsV1beta1 {
  apiVersion?: string
  items: DeploymentExtensionsV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface DeploymentRollbackExtensionsV1beta1 {
  apiVersion?: string
  kind?: string
  name: string
  rollbackTo: RollbackConfigExtensionsV1beta1
  updatedAnnotations?: Object
}

export interface DeploymentSpecExtensionsV1beta1 {
  minReadySeconds?: number
  paused?: boolean
  progressDeadlineSeconds?: number
  replicas?: number
  revisionHistoryLimit?: number
  rollbackTo?: RollbackConfigExtensionsV1beta1
  selector?: LabelSelectorV1
  strategy?: DeploymentStrategyExtensionsV1beta1
  template: PodTemplateSpecV1
}

export interface DeploymentStatusExtensionsV1beta1 {
  availableReplicas?: number
  collisionCount?: number
  conditions?: DeploymentConditionExtensionsV1beta1[]
  observedGeneration?: number
  readyReplicas?: number
  replicas?: number
  unavailableReplicas?: number
  updatedReplicas?: number
}

export interface DeploymentStrategyExtensionsV1beta1 {
  rollingUpdate?: RollingUpdateDeploymentExtensionsV1beta1
  type?: string
}

export interface FSGroupStrategyOptionsExtensionsV1beta1 {
  ranges?: IDRangeExtensionsV1beta1[]
  rule?: string
}

export interface HostPortRangeExtensionsV1beta1 {
  max: number
  min: number
}

export interface IDRangeExtensionsV1beta1 {
  max: number
  min: number
}

export interface PodSecurityPolicyExtensionsV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: PodSecurityPolicySpecExtensionsV1beta1
}

export interface PodSecurityPolicyListExtensionsV1beta1 {
  apiVersion?: string
  items: PodSecurityPolicyExtensionsV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PodSecurityPolicySpecExtensionsV1beta1 {
  allowPrivilegeEscalation?: boolean
  allowedCapabilities?: string[]
  allowedFlexVolumes?: AllowedFlexVolumeExtensionsV1beta1[]
  allowedHostPaths?: AllowedHostPathExtensionsV1beta1[]
  allowedProcMountTypes?: string[]
  allowedUnsafeSysctls?: string[]
  defaultAddCapabilities?: string[]
  defaultAllowPrivilegeEscalation?: boolean
  forbiddenSysctls?: string[]
  fsGroup: FSGroupStrategyOptionsExtensionsV1beta1
  hostIPC?: boolean
  hostNetwork?: boolean
  hostPID?: boolean
  hostPorts?: HostPortRangeExtensionsV1beta1[]
  privileged?: boolean
  readOnlyRootFilesystem?: boolean
  requiredDropCapabilities?: string[]
  runAsGroup?: RunAsGroupStrategyOptionsExtensionsV1beta1
  runAsUser: RunAsUserStrategyOptionsExtensionsV1beta1
  seLinux: SELinuxStrategyOptionsExtensionsV1beta1
  supplementalGroups: SupplementalGroupsStrategyOptionsExtensionsV1beta1
  volumes?: string[]
}

export interface RollbackConfigExtensionsV1beta1 {
  revision?: number
}

export interface RollingUpdateDeploymentExtensionsV1beta1 {
  maxSurge?: Object
  maxUnavailable?: Object
}

export interface RunAsGroupStrategyOptionsExtensionsV1beta1 {
  ranges?: IDRangeExtensionsV1beta1[]
  rule: string
}

export interface RunAsUserStrategyOptionsExtensionsV1beta1 {
  ranges?: IDRangeExtensionsV1beta1[]
  rule: string
}

export interface SELinuxStrategyOptionsExtensionsV1beta1 {
  rule: string
  seLinuxOptions?: SELinuxOptionsV1
}

export interface ScaleExtensionsV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ScaleSpecExtensionsV1beta1
  status?: ScaleStatusExtensionsV1beta1
}

export interface ScaleSpecExtensionsV1beta1 {
  replicas?: number
}

export interface ScaleStatusExtensionsV1beta1 {
  replicas: number
  selector?: Object
  targetSelector?: string
}

export interface SupplementalGroupsStrategyOptionsExtensionsV1beta1 {
  ranges?: IDRangeExtensionsV1beta1[]
  rule?: string
}

export interface AllowedFlexVolumePolicyV1beta1 {
  driver: string
}

export interface AllowedHostPathPolicyV1beta1 {
  pathPrefix?: string
  readOnly?: boolean
}

export interface FSGroupStrategyOptionsPolicyV1beta1 {
  ranges?: IDRangePolicyV1beta1[]
  rule?: string
}

export interface HostPortRangePolicyV1beta1 {
  max: number
  min: number
}

export interface IDRangePolicyV1beta1 {
  max: number
  min: number
}

export interface PodSecurityPolicyPolicyV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: PodSecurityPolicySpecPolicyV1beta1
}

export interface PodSecurityPolicyListPolicyV1beta1 {
  apiVersion?: string
  items: PodSecurityPolicyPolicyV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PodSecurityPolicySpecPolicyV1beta1 {
  allowPrivilegeEscalation?: boolean
  allowedCapabilities?: string[]
  allowedFlexVolumes?: AllowedFlexVolumePolicyV1beta1[]
  allowedHostPaths?: AllowedHostPathPolicyV1beta1[]
  allowedProcMountTypes?: string[]
  allowedUnsafeSysctls?: string[]
  defaultAddCapabilities?: string[]
  defaultAllowPrivilegeEscalation?: boolean
  forbiddenSysctls?: string[]
  fsGroup: FSGroupStrategyOptionsPolicyV1beta1
  hostIPC?: boolean
  hostNetwork?: boolean
  hostPID?: boolean
  hostPorts?: HostPortRangePolicyV1beta1[]
  privileged?: boolean
  readOnlyRootFilesystem?: boolean
  requiredDropCapabilities?: string[]
  runAsGroup?: RunAsGroupStrategyOptionsPolicyV1beta1
  runAsUser: RunAsUserStrategyOptionsPolicyV1beta1
  seLinux: SELinuxStrategyOptionsPolicyV1beta1
  supplementalGroups: SupplementalGroupsStrategyOptionsPolicyV1beta1
  volumes?: string[]
}

export interface RunAsGroupStrategyOptionsPolicyV1beta1 {
  ranges?: IDRangePolicyV1beta1[]
  rule: string
}

export interface RunAsUserStrategyOptionsPolicyV1beta1 {
  ranges?: IDRangePolicyV1beta1[]
  rule: string
}

export interface SELinuxStrategyOptionsPolicyV1beta1 {
  rule: string
  seLinuxOptions?: SELinuxOptionsV1
}

export interface SupplementalGroupsStrategyOptionsPolicyV1beta1 {
  ranges?: IDRangePolicyV1beta1[]
  rule?: string
}

export interface RawExtensionRuntime {
  Raw: string
}

export interface APIGroupV1 {
  apiVersion?: string
  kind?: string
  name: string
  preferredVersion?: GroupVersionForDiscoveryV1
  serverAddressByClientCIDRs?: ServerAddressByClientCIDRV1[]
  versions: GroupVersionForDiscoveryV1[]
}

export interface APIGroupListV1 {
  apiVersion?: string
  groups: APIGroupV1[]
  kind?: string
}

export interface APIResourceV1 {
  categories?: string[]
  group?: string
  kind: string
  name: string
  namespaced: boolean
  shortNames?: string[]
  singularName: string
  verbs: string[]
  version?: string
}

export interface APIResourceListV1 {
  apiVersion?: string
  groupVersion: string
  kind?: string
  resources: APIResourceV1[]
}

export interface APIServiceV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: APIServiceSpecV1
  status?: APIServiceStatusV1
}

export interface APIServiceConditionV1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface APIServiceListV1 {
  apiVersion?: string
  items: APIServiceV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface APIServiceSpecV1 {
  caBundle?: string
  group?: string
  groupPriorityMinimum: number
  insecureSkipTLSVerify?: boolean
  service: ServiceReferenceV1
  version?: string
  versionPriority: number
}

export interface APIServiceStatusV1 {
  conditions?: APIServiceConditionV1[]
}

export interface APIVersionsV1 {
  apiVersion?: string
  kind?: string
  serverAddressByClientCIDRs: ServerAddressByClientCIDRV1[]
  versions: string[]
}

export interface AWSElasticBlockStoreVolumeSourceV1 {
  fsType?: string
  partition?: number
  readOnly?: boolean
  volumeID: string
}

export interface AffinityV1 {
  nodeAffinity?: NodeAffinityV1
  podAffinity?: PodAffinityV1
  podAntiAffinity?: PodAntiAffinityV1
}

export interface AggregationRuleV1 {
  clusterRoleSelectors?: LabelSelectorV1[]
}

export interface AttachedVolumeV1 {
  devicePath: string
  name: string
}

export interface AzureDiskVolumeSourceV1 {
  cachingMode?: string
  diskName: string
  diskURI: string
  fsType?: string
  kind?: string
  readOnly?: boolean
}

export interface AzureFilePersistentVolumeSourceV1 {
  readOnly?: boolean
  secretName: string
  secretNamespace?: string
  shareName: string
}

export interface AzureFileVolumeSourceV1 {
  readOnly?: boolean
  secretName: string
  shareName: string
}

export interface BindingV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  target: ObjectReferenceV1
}

export interface CSIPersistentVolumeSourceV1 {
  controllerPublishSecretRef?: SecretReferenceV1
  driver: string
  fsType?: string
  nodePublishSecretRef?: SecretReferenceV1
  nodeStageSecretRef?: SecretReferenceV1
  readOnly?: boolean
  volumeAttributes?: Object
  volumeHandle: string
}

export interface CapabilitiesV1 {
  add?: string[]
  drop?: string[]
}

export interface CephFSPersistentVolumeSourceV1 {
  monitors: string[]
  path?: string
  readOnly?: boolean
  secretFile?: string
  secretRef?: SecretReferenceV1
  user?: string
}

export interface CephFSVolumeSourceV1 {
  monitors: string[]
  path?: string
  readOnly?: boolean
  secretFile?: string
  secretRef?: LocalObjectReferenceV1
  user?: string
}

export interface CinderPersistentVolumeSourceV1 {
  fsType?: string
  readOnly?: boolean
  secretRef?: SecretReferenceV1
  volumeID: string
}

export interface CinderVolumeSourceV1 {
  fsType?: string
  readOnly?: boolean
  secretRef?: LocalObjectReferenceV1
  volumeID: string
}

export interface ClientIPConfigV1 {
  timeoutSeconds?: number
}

export interface ClusterRoleV1 {
  aggregationRule?: AggregationRuleV1
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  rules: PolicyRuleV1[]
}

export interface ClusterRoleBindingV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  roleRef: RoleRefV1
  subjects?: SubjectV1[]
}

export interface ClusterRoleBindingListV1 {
  apiVersion?: string
  items: ClusterRoleBindingV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ClusterRoleListV1 {
  apiVersion?: string
  items: ClusterRoleV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ComponentConditionV1 {
  error?: string
  message?: string
  status: string
  type: string
}

export interface ComponentStatusV1 {
  apiVersion?: string
  conditions?: ComponentConditionV1[]
  kind?: string
  metadata?: ObjectMetaV1
}

export interface ComponentStatusListV1 {
  apiVersion?: string
  items: ComponentStatusV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ConfigMapV1 {
  apiVersion?: string
  binaryData?: Object
  data?: Object
  kind?: string
  metadata?: ObjectMetaV1
}

export interface ConfigMapEnvSourceV1 {
  name?: string
  optional?: boolean
}

export interface ConfigMapKeySelectorV1 {
  key: string
  name?: string
  optional?: boolean
}

export interface ConfigMapListV1 {
  apiVersion?: string
  items: ConfigMapV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ConfigMapNodeConfigSourceV1 {
  kubeletConfigKey: string
  name: string
  namespace: string
  resourceVersion?: string
  uid?: string
}

export interface ConfigMapProjectionV1 {
  items?: KeyToPathV1[]
  name?: string
  optional?: boolean
}

export interface ConfigMapVolumeSourceV1 {
  defaultMode?: number
  items?: KeyToPathV1[]
  name?: string
  optional?: boolean
}

export interface ContainerV1 {
  args?: string[]
  command?: string[]
  env?: EnvVarV1[]
  envFrom?: EnvFromSourceV1[]
  image?: string
  imagePullPolicy?: string
  lifecycle?: LifecycleV1
  livenessProbe?: ProbeV1
  name: string
  ports?: ContainerPortV1[]
  readinessProbe?: ProbeV1
  resources?: ResourceRequirementsV1
  securityContext?: SecurityContextV1
  stdin?: boolean
  stdinOnce?: boolean
  terminationMessagePath?: string
  terminationMessagePolicy?: string
  tty?: boolean
  volumeDevices?: VolumeDeviceV1[]
  volumeMounts?: VolumeMountV1[]
  workingDir?: string
}

export interface ContainerImageV1 {
  names: string[]
  sizeBytes?: number
}

export interface ContainerPortV1 {
  containerPort: number
  hostIP?: string
  hostPort?: number
  name?: string
  protocol?: string
}

export interface ContainerStateV1 {
  running?: ContainerStateRunningV1
  terminated?: ContainerStateTerminatedV1
  waiting?: ContainerStateWaitingV1
}

export interface ContainerStateRunningV1 {
  startedAt?: string
}

export interface ContainerStateTerminatedV1 {
  containerID?: string
  exitCode: number
  finishedAt?: string
  message?: string
  reason?: string
  signal?: number
  startedAt?: string
}

export interface ContainerStateWaitingV1 {
  message?: string
  reason?: string
}

export interface ContainerStatusV1 {
  containerID?: string
  image: string
  imageID: string
  lastState?: ContainerStateV1
  name: string
  ready: boolean
  restartCount: number
  state?: ContainerStateV1
}

export interface ControllerRevisionV1 {
  apiVersion?: string
  data?: RawExtensionRuntime
  kind?: string
  metadata?: ObjectMetaV1
  revision: number
}

export interface ControllerRevisionListV1 {
  apiVersion?: string
  items: ControllerRevisionV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface CrossVersionObjectReferenceV1 {
  apiVersion?: string
  kind: string
  name: string
}

export interface DaemonEndpointV1 {
  Port: number
}

export interface DaemonSetV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: DaemonSetSpecV1
  status?: DaemonSetStatusV1
}

export interface DaemonSetConditionV1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface DaemonSetListV1 {
  apiVersion?: string
  items: DaemonSetV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface DaemonSetSpecV1 {
  minReadySeconds?: number
  revisionHistoryLimit?: number
  selector: LabelSelectorV1
  template: PodTemplateSpecV1
  updateStrategy?: DaemonSetUpdateStrategyV1
}

export interface DaemonSetStatusV1 {
  collisionCount?: number
  conditions?: DaemonSetConditionV1[]
  currentNumberScheduled: number
  desiredNumberScheduled: number
  numberAvailable?: number
  numberMisscheduled: number
  numberReady: number
  numberUnavailable?: number
  observedGeneration?: number
  updatedNumberScheduled?: number
}

export interface DaemonSetUpdateStrategyV1 {
  rollingUpdate?: RollingUpdateDaemonSetV1
  type?: string
}

export interface DeleteOptionsV1 {
  apiVersion?: string
  dryRun?: string[]
  gracePeriodSeconds?: number
  kind?: string
  orphanDependents?: boolean
  preconditions?: PreconditionsV1
  propagationPolicy?: string
}

export interface DeploymentV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: DeploymentSpecV1
  status?: DeploymentStatusV1
}

export interface DeploymentConditionV1 {
  lastTransitionTime?: string
  lastUpdateTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface DeploymentListV1 {
  apiVersion?: string
  items: DeploymentV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface DeploymentSpecV1 {
  minReadySeconds?: number
  paused?: boolean
  progressDeadlineSeconds?: number
  replicas?: number
  revisionHistoryLimit?: number
  selector: LabelSelectorV1
  strategy?: DeploymentStrategyV1
  template: PodTemplateSpecV1
}

export interface DeploymentStatusV1 {
  availableReplicas?: number
  collisionCount?: number
  conditions?: DeploymentConditionV1[]
  observedGeneration?: number
  readyReplicas?: number
  replicas?: number
  unavailableReplicas?: number
  updatedReplicas?: number
}

export interface DeploymentStrategyV1 {
  rollingUpdate?: RollingUpdateDeploymentV1
  type?: string
}

export interface DownwardAPIProjectionV1 {
  items?: DownwardAPIVolumeFileV1[]
}

export interface DownwardAPIVolumeFileV1 {
  fieldRef?: ObjectFieldSelectorV1
  mode?: number
  path: string
  resourceFieldRef?: ResourceFieldSelectorV1
}

export interface DownwardAPIVolumeSourceV1 {
  defaultMode?: number
  items?: DownwardAPIVolumeFileV1[]
}

export interface EmptyDirVolumeSourceV1 {
  medium?: string
  sizeLimit?: string
}

export interface EndpointAddressV1 {
  hostname?: string
  ip: string
  nodeName?: string
  targetRef?: ObjectReferenceV1
}

export interface EndpointPortV1 {
  name?: string
  port: number
  protocol?: string
}

export interface EndpointSubsetV1 {
  addresses?: EndpointAddressV1[]
  notReadyAddresses?: EndpointAddressV1[]
  ports?: EndpointPortV1[]
}

export interface EndpointsV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  subsets?: EndpointSubsetV1[]
}

export interface EndpointsListV1 {
  apiVersion?: string
  items: EndpointsV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface EnvFromSourceV1 {
  configMapRef?: ConfigMapEnvSourceV1
  prefix?: string
  secretRef?: SecretEnvSourceV1
}

export interface EnvVarV1 {
  name: string
  value?: string
  valueFrom?: EnvVarSourceV1
}

export interface EnvVarSourceV1 {
  configMapKeyRef?: ConfigMapKeySelectorV1
  fieldRef?: ObjectFieldSelectorV1
  resourceFieldRef?: ResourceFieldSelectorV1
  secretKeyRef?: SecretKeySelectorV1
}

export interface EventV1 {
  action?: string
  apiVersion?: string
  count?: number
  eventTime?: string
  firstTimestamp?: string
  involvedObject: ObjectReferenceV1
  kind?: string
  lastTimestamp?: string
  message?: string
  metadata: ObjectMetaV1
  reason?: string
  related?: ObjectReferenceV1
  reportingComponent?: string
  reportingInstance?: string
  series?: EventSeriesV1
  source?: EventSourceV1
  type?: string
}

export interface EventListV1 {
  apiVersion?: string
  items: EventV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface EventSeriesV1 {
  count?: number
  lastObservedTime?: string
  state?: string
}

export interface EventSourceV1 {
  component?: string
  host?: string
}

export interface ExecActionV1 {
  command?: string[]
}

export interface FCVolumeSourceV1 {
  fsType?: string
  lun?: number
  readOnly?: boolean
  targetWWNs?: string[]
  wwids?: string[]
}

export interface FlexPersistentVolumeSourceV1 {
  driver: string
  fsType?: string
  options?: Object
  readOnly?: boolean
  secretRef?: SecretReferenceV1
}

export interface FlexVolumeSourceV1 {
  driver: string
  fsType?: string
  options?: Object
  readOnly?: boolean
  secretRef?: LocalObjectReferenceV1
}

export interface FlockerVolumeSourceV1 {
  datasetName?: string
  datasetUUID?: string
}

export interface GCEPersistentDiskVolumeSourceV1 {
  fsType?: string
  partition?: number
  pdName: string
  readOnly?: boolean
}

export interface GitRepoVolumeSourceV1 {
  directory?: string
  repository: string
  revision?: string
}

export interface GlusterfsPersistentVolumeSourceV1 {
  endpoints: string
  endpointsNamespace?: string
  path: string
  readOnly?: boolean
}

export interface GlusterfsVolumeSourceV1 {
  endpoints: string
  path: string
  readOnly?: boolean
}

export interface GroupVersionForDiscoveryV1 {
  groupVersion: string
  version: string
}

export interface HTTPGetActionV1 {
  host?: string
  httpHeaders?: HTTPHeaderV1[]
  path?: string
  port: Object
  scheme?: string
}

export interface HTTPHeaderV1 {
  name: string
  value: string
}

export interface HandlerV1 {
  exec?: ExecActionV1
  httpGet?: HTTPGetActionV1
  tcpSocket?: TCPSocketActionV1
}

export interface HorizontalPodAutoscalerV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: HorizontalPodAutoscalerSpecV1
  status?: HorizontalPodAutoscalerStatusV1
}

export interface HorizontalPodAutoscalerListV1 {
  apiVersion?: string
  items: HorizontalPodAutoscalerV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface HorizontalPodAutoscalerSpecV1 {
  maxReplicas: number
  minReplicas?: number
  scaleTargetRef: CrossVersionObjectReferenceV1
  targetCPUUtilizationPercentage?: number
}

export interface HorizontalPodAutoscalerStatusV1 {
  currentCPUUtilizationPercentage?: number
  currentReplicas: number
  desiredReplicas: number
  lastScaleTime?: string
  observedGeneration?: number
}

export interface HostAliasV1 {
  hostnames?: string[]
  ip?: string
}

export interface HostPathVolumeSourceV1 {
  path: string
  type?: string
}

export interface IPBlockV1 {
  cidr: string
  except?: string[]
}

export interface ISCSIPersistentVolumeSourceV1 {
  chapAuthDiscovery?: boolean
  chapAuthSession?: boolean
  fsType?: string
  initiatorName?: string
  iqn: string
  iscsiInterface?: string
  lun: number
  portals?: string[]
  readOnly?: boolean
  secretRef?: SecretReferenceV1
  targetPortal: string
}

export interface ISCSIVolumeSourceV1 {
  chapAuthDiscovery?: boolean
  chapAuthSession?: boolean
  fsType?: string
  initiatorName?: string
  iqn: string
  iscsiInterface?: string
  lun: number
  portals?: string[]
  readOnly?: boolean
  secretRef?: LocalObjectReferenceV1
  targetPortal: string
}

export interface InitializerV1 {
  name: string
}

export interface InitializersV1 {
  pending: InitializerV1[]
  result?: StatusV1
}

export interface JobV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: JobSpecV1
  status?: JobStatusV1
}

export interface JobConditionV1 {
  lastProbeTime?: string
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface JobListV1 {
  apiVersion?: string
  items: JobV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface JobSpecV1 {
  activeDeadlineSeconds?: number
  backoffLimit?: number
  completions?: number
  manualSelector?: boolean
  parallelism?: number
  selector?: LabelSelectorV1
  template: PodTemplateSpecV1
  ttlSecondsAfterFinished?: number
}

export interface JobStatusV1 {
  active?: number
  completionTime?: string
  conditions?: JobConditionV1[]
  failed?: number
  startTime?: string
  succeeded?: number
}

export interface KeyToPathV1 {
  key: string
  mode?: number
  path: string
}

export interface LabelSelectorV1 {
  matchExpressions?: LabelSelectorRequirementV1[]
  matchLabels?: Object
}

export interface LabelSelectorRequirementV1 {
  key: string
  operator: string
  values?: string[]
}

export interface LifecycleV1 {
  postStart?: HandlerV1
  preStop?: HandlerV1
}

export interface LimitRangeV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: LimitRangeSpecV1
}

export interface LimitRangeItemV1 {
  default?: Object
  defaultRequest?: Object
  max?: Object
  maxLimitRequestRatio?: Object
  min?: Object
  type?: string
}

export interface LimitRangeListV1 {
  apiVersion?: string
  items: LimitRangeV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface LimitRangeSpecV1 {
  limits: LimitRangeItemV1[]
}

export interface ListMetaV1 {
  continue?: string
  resourceVersion?: string
  selfLink?: string
}

export interface LoadBalancerIngressV1 {
  hostname?: string
  ip?: string
}

export interface LoadBalancerStatusV1 {
  ingress?: LoadBalancerIngressV1[]
}

export interface LocalObjectReferenceV1 {
  name?: string
}

export interface LocalSubjectAccessReviewV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: SubjectAccessReviewSpecV1
  status?: SubjectAccessReviewStatusV1
}

export interface LocalVolumeSourceV1 {
  fsType?: string
  path: string
}

export interface NFSVolumeSourceV1 {
  path: string
  readOnly?: boolean
  server: string
}

export interface NamespaceV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: NamespaceSpecV1
  status?: NamespaceStatusV1
}

export interface NamespaceListV1 {
  apiVersion?: string
  items: NamespaceV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface NamespaceSpecV1 {
  finalizers?: string[]
}

export interface NamespaceStatusV1 {
  phase?: string
}

export interface NetworkPolicyV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: NetworkPolicySpecV1
}

export interface NetworkPolicyEgressRuleV1 {
  ports?: NetworkPolicyPortV1[]
  to?: NetworkPolicyPeerV1[]
}

export interface NetworkPolicyIngressRuleV1 {
  from?: NetworkPolicyPeerV1[]
  ports?: NetworkPolicyPortV1[]
}

export interface NetworkPolicyListV1 {
  apiVersion?: string
  items: NetworkPolicyV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface NetworkPolicyPeerV1 {
  ipBlock?: IPBlockV1
  namespaceSelector?: LabelSelectorV1
  podSelector?: LabelSelectorV1
}

export interface NetworkPolicyPortV1 {
  port?: Object
  protocol?: string
}

export interface NetworkPolicySpecV1 {
  egress?: NetworkPolicyEgressRuleV1[]
  ingress?: NetworkPolicyIngressRuleV1[]
  podSelector: LabelSelectorV1
  policyTypes?: string[]
}

export interface NodeV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: NodeSpecV1
  status?: NodeStatusV1
}

export interface NodeAddressV1 {
  address: string
  type: string
}

export interface NodeAffinityV1 {
  preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTermV1[]
  requiredDuringSchedulingIgnoredDuringExecution?: NodeSelectorV1
}

export interface NodeConditionV1 {
  lastHeartbeatTime?: string
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface NodeConfigSourceV1 {
  configMap?: ConfigMapNodeConfigSourceV1
}

export interface NodeConfigStatusV1 {
  active?: NodeConfigSourceV1
  assigned?: NodeConfigSourceV1
  error?: string
  lastKnownGood?: NodeConfigSourceV1
}

export interface NodeDaemonEndpointsV1 {
  kubeletEndpoint?: DaemonEndpointV1
}

export interface NodeListV1 {
  apiVersion?: string
  items: NodeV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface NodeSelectorV1 {
  nodeSelectorTerms: NodeSelectorTermV1[]
}

export interface NodeSelectorRequirementV1 {
  key: string
  operator: string
  values?: string[]
}

export interface NodeSelectorTermV1 {
  matchExpressions?: NodeSelectorRequirementV1[]
  matchFields?: NodeSelectorRequirementV1[]
}

export interface NodeSpecV1 {
  configSource?: NodeConfigSourceV1
  externalID?: string
  podCIDR?: string
  providerID?: string
  taints?: TaintV1[]
  unschedulable?: boolean
}

export interface NodeStatusV1 {
  addresses?: NodeAddressV1[]
  allocatable?: Object
  capacity?: Object
  conditions?: NodeConditionV1[]
  config?: NodeConfigStatusV1
  daemonEndpoints?: NodeDaemonEndpointsV1
  images?: ContainerImageV1[]
  nodeInfo?: NodeSystemInfoV1
  phase?: string
  volumesAttached?: AttachedVolumeV1[]
  volumesInUse?: string[]
}

export interface NodeSystemInfoV1 {
  architecture: string
  bootID: string
  containerRuntimeVersion: string
  kernelVersion: string
  kubeProxyVersion: string
  kubeletVersion: string
  machineID: string
  operatingSystem: string
  osImage: string
  systemUUID: string
}

export interface NonResourceAttributesV1 {
  path?: string
  verb?: string
}

export interface NonResourceRuleV1 {
  nonResourceURLs?: string[]
  verbs: string[]
}

export interface ObjectFieldSelectorV1 {
  apiVersion?: string
  fieldPath: string
}

export interface ObjectMetaV1 {
  annotations?: Object
  clusterName?: string
  creationTimestamp?: string
  deletionGracePeriodSeconds?: number
  deletionTimestamp?: string
  finalizers?: string[]
  generateName?: string
  generation?: number
  initializers?: InitializersV1
  labels?: Object
  name?: string
  namespace?: string
  ownerReferences?: OwnerReferenceV1[]
  resourceVersion?: string
  selfLink?: string
  uid?: string
}

export interface ObjectReferenceV1 {
  apiVersion?: string
  fieldPath?: string
  kind?: string
  name?: string
  namespace?: string
  resourceVersion?: string
  uid?: string
}

export interface OwnerReferenceV1 {
  apiVersion: string
  blockOwnerDeletion?: boolean
  controller?: boolean
  kind: string
  name: string
  uid: string
}

export interface PersistentVolumeV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: PersistentVolumeSpecV1
  status?: PersistentVolumeStatusV1
}

export interface PersistentVolumeClaimV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: PersistentVolumeClaimSpecV1
  status?: PersistentVolumeClaimStatusV1
}

export interface PersistentVolumeClaimConditionV1 {
  lastProbeTime?: string
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface PersistentVolumeClaimListV1 {
  apiVersion?: string
  items: PersistentVolumeClaimV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PersistentVolumeClaimSpecV1 {
  accessModes?: string[]
  dataSource?: TypedLocalObjectReferenceV1
  resources?: ResourceRequirementsV1
  selector?: LabelSelectorV1
  storageClassName?: string
  volumeMode?: string
  volumeName?: string
}

export interface PersistentVolumeClaimStatusV1 {
  accessModes?: string[]
  capacity?: Object
  conditions?: PersistentVolumeClaimConditionV1[]
  phase?: string
}

export interface PersistentVolumeClaimVolumeSourceV1 {
  claimName: string
  readOnly?: boolean
}

export interface PersistentVolumeListV1 {
  apiVersion?: string
  items: PersistentVolumeV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PersistentVolumeSpecV1 {
  accessModes?: string[]
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSourceV1
  azureDisk?: AzureDiskVolumeSourceV1
  azureFile?: AzureFilePersistentVolumeSourceV1
  capacity?: Object
  cephfs?: CephFSPersistentVolumeSourceV1
  cinder?: CinderPersistentVolumeSourceV1
  claimRef?: ObjectReferenceV1
  csi?: CSIPersistentVolumeSourceV1
  fc?: FCVolumeSourceV1
  flexVolume?: FlexPersistentVolumeSourceV1
  flocker?: FlockerVolumeSourceV1
  gcePersistentDisk?: GCEPersistentDiskVolumeSourceV1
  glusterfs?: GlusterfsPersistentVolumeSourceV1
  hostPath?: HostPathVolumeSourceV1
  iscsi?: ISCSIPersistentVolumeSourceV1
  local?: LocalVolumeSourceV1
  mountOptions?: string[]
  nfs?: NFSVolumeSourceV1
  nodeAffinity?: VolumeNodeAffinityV1
  persistentVolumeReclaimPolicy?: string
  photonPersistentDisk?: PhotonPersistentDiskVolumeSourceV1
  portworxVolume?: PortworxVolumeSourceV1
  quobyte?: QuobyteVolumeSourceV1
  rbd?: RBDPersistentVolumeSourceV1
  scaleIO?: ScaleIOPersistentVolumeSourceV1
  storageClassName?: string
  storageos?: StorageOSPersistentVolumeSourceV1
  volumeMode?: string
  vsphereVolume?: VsphereVirtualDiskVolumeSourceV1
}

export interface PersistentVolumeStatusV1 {
  message?: string
  phase?: string
  reason?: string
}

export interface PhotonPersistentDiskVolumeSourceV1 {
  fsType?: string
  pdID: string
}

export interface PodV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: PodSpecV1
  status?: PodStatusV1
}

export interface PodAffinityV1 {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTermV1[]
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTermV1[]
}

export interface PodAffinityTermV1 {
  labelSelector?: LabelSelectorV1
  namespaces?: string[]
  topologyKey: string
}

export interface PodAntiAffinityV1 {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTermV1[]
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTermV1[]
}

export interface PodConditionV1 {
  lastProbeTime?: string
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface PodDNSConfigV1 {
  nameservers?: string[]
  options?: PodDNSConfigOptionV1[]
  searches?: string[]
}

export interface PodDNSConfigOptionV1 {
  name?: string
  value?: string
}

export interface PodListV1 {
  apiVersion?: string
  items: PodV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PodReadinessGateV1 {
  conditionType: string
}

export interface PodSecurityContextV1 {
  fsGroup?: number
  runAsGroup?: number
  runAsNonRoot?: boolean
  runAsUser?: number
  seLinuxOptions?: SELinuxOptionsV1
  supplementalGroups?: number[]
  sysctls?: SysctlV1[]
}

export interface PodSpecV1 {
  activeDeadlineSeconds?: number
  affinity?: AffinityV1
  automountServiceAccountToken?: boolean
  containers: ContainerV1[]
  dnsConfig?: PodDNSConfigV1
  dnsPolicy?: string
  enableServiceLinks?: boolean
  hostAliases?: HostAliasV1[]
  hostIPC?: boolean
  hostNetwork?: boolean
  hostPID?: boolean
  hostname?: string
  imagePullSecrets?: LocalObjectReferenceV1[]
  initContainers?: ContainerV1[]
  nodeName?: string
  nodeSelector?: Object
  priority?: number
  priorityClassName?: string
  readinessGates?: PodReadinessGateV1[]
  restartPolicy?: string
  runtimeClassName?: string
  schedulerName?: string
  securityContext?: PodSecurityContextV1
  serviceAccount?: string
  serviceAccountName?: string
  shareProcessNamespace?: boolean
  subdomain?: string
  terminationGracePeriodSeconds?: number
  tolerations?: TolerationV1[]
  volumes?: VolumeV1[]
}

export interface PodStatusV1 {
  conditions?: PodConditionV1[]
  containerStatuses?: ContainerStatusV1[]
  hostIP?: string
  initContainerStatuses?: ContainerStatusV1[]
  message?: string
  nominatedNodeName?: string
  phase?: string
  podIP?: string
  qosClass?: string
  reason?: string
  startTime?: string
}

export interface PodTemplateV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  template?: PodTemplateSpecV1
}

export interface PodTemplateListV1 {
  apiVersion?: string
  items: PodTemplateV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PodTemplateSpecV1 {
  metadata?: ObjectMetaV1
  spec?: PodSpecV1
}

export interface PolicyRuleV1 {
  apiGroups?: string[]
  nonResourceURLs?: string[]
  resourceNames?: string[]
  resources?: string[]
  verbs: string[]
}

export interface PortworxVolumeSourceV1 {
  fsType?: string
  readOnly?: boolean
  volumeID: string
}

export interface PreconditionsV1 {
  uid?: string
}

export interface PreferredSchedulingTermV1 {
  preference: NodeSelectorTermV1
  weight: number
}

export interface ProbeV1 {
  exec?: ExecActionV1
  failureThreshold?: number
  httpGet?: HTTPGetActionV1
  initialDelaySeconds?: number
  periodSeconds?: number
  successThreshold?: number
  tcpSocket?: TCPSocketActionV1
  timeoutSeconds?: number
}

export interface ProjectedVolumeSourceV1 {
  defaultMode?: number
  sources: VolumeProjectionV1[]
}

export interface QuobyteVolumeSourceV1 {
  group?: string
  readOnly?: boolean
  registry: string
  user?: string
  volume: string
}

export interface RBDPersistentVolumeSourceV1 {
  fsType?: string
  image: string
  keyring?: string
  monitors: string[]
  pool?: string
  readOnly?: boolean
  secretRef?: SecretReferenceV1
  user?: string
}

export interface RBDVolumeSourceV1 {
  fsType?: string
  image: string
  keyring?: string
  monitors: string[]
  pool?: string
  readOnly?: boolean
  secretRef?: LocalObjectReferenceV1
  user?: string
}

export interface ReplicaSetV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ReplicaSetSpecV1
  status?: ReplicaSetStatusV1
}

export interface ReplicaSetConditionV1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface ReplicaSetListV1 {
  apiVersion?: string
  items: ReplicaSetV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ReplicaSetSpecV1 {
  minReadySeconds?: number
  replicas?: number
  selector: LabelSelectorV1
  template?: PodTemplateSpecV1
}

export interface ReplicaSetStatusV1 {
  availableReplicas?: number
  conditions?: ReplicaSetConditionV1[]
  fullyLabeledReplicas?: number
  observedGeneration?: number
  readyReplicas?: number
  replicas: number
}

export interface ReplicationControllerV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ReplicationControllerSpecV1
  status?: ReplicationControllerStatusV1
}

export interface ReplicationControllerConditionV1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface ReplicationControllerListV1 {
  apiVersion?: string
  items: ReplicationControllerV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ReplicationControllerSpecV1 {
  minReadySeconds?: number
  replicas?: number
  selector?: Object
  template?: PodTemplateSpecV1
}

export interface ReplicationControllerStatusV1 {
  availableReplicas?: number
  conditions?: ReplicationControllerConditionV1[]
  fullyLabeledReplicas?: number
  observedGeneration?: number
  readyReplicas?: number
  replicas: number
}

export interface ResourceAttributesV1 {
  group?: string
  name?: string
  namespace?: string
  resource?: string
  subresource?: string
  verb?: string
  version?: string
}

export interface ResourceFieldSelectorV1 {
  containerName?: string
  divisor?: string
  resource: string
}

export interface ResourceQuotaV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ResourceQuotaSpecV1
  status?: ResourceQuotaStatusV1
}

export interface ResourceQuotaListV1 {
  apiVersion?: string
  items: ResourceQuotaV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ResourceQuotaSpecV1 {
  hard?: Object
  scopeSelector?: ScopeSelectorV1
  scopes?: string[]
}

export interface ResourceQuotaStatusV1 {
  hard?: Object
  used?: Object
}

export interface ResourceRequirementsV1 {
  limits?: Object
  requests?: Object
}

export interface ResourceRuleV1 {
  apiGroups?: string[]
  resourceNames?: string[]
  resources?: string[]
  verbs: string[]
}

export interface RoleV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  rules: PolicyRuleV1[]
}

export interface RoleBindingV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  roleRef: RoleRefV1
  subjects?: SubjectV1[]
}

export interface RoleBindingListV1 {
  apiVersion?: string
  items: RoleBindingV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface RoleListV1 {
  apiVersion?: string
  items: RoleV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface RoleRefV1 {
  apiGroup: string
  kind: string
  name: string
}

export interface RollingUpdateDaemonSetV1 {
  maxUnavailable?: Object
}

export interface RollingUpdateDeploymentV1 {
  maxSurge?: Object
  maxUnavailable?: Object
}

export interface RollingUpdateStatefulSetStrategyV1 {
  partition?: number
}

export interface SELinuxOptionsV1 {
  level?: string
  role?: string
  type?: string
  user?: string
}

export interface ScaleV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ScaleSpecV1
  status?: ScaleStatusV1
}

export interface ScaleIOPersistentVolumeSourceV1 {
  fsType?: string
  gateway: string
  protectionDomain?: string
  readOnly?: boolean
  secretRef: SecretReferenceV1
  sslEnabled?: boolean
  storageMode?: string
  storagePool?: string
  system: string
  volumeName?: string
}

export interface ScaleIOVolumeSourceV1 {
  fsType?: string
  gateway: string
  protectionDomain?: string
  readOnly?: boolean
  secretRef: LocalObjectReferenceV1
  sslEnabled?: boolean
  storageMode?: string
  storagePool?: string
  system: string
  volumeName?: string
}

export interface ScaleSpecV1 {
  replicas?: number
}

export interface ScaleStatusV1 {
  replicas: number
  selector?: string
}

export interface ScopeSelectorV1 {
  matchExpressions?: ScopedResourceSelectorRequirementV1[]
}

export interface ScopedResourceSelectorRequirementV1 {
  operator: string
  scopeName: string
  values?: string[]
}

export interface SecretV1 {
  apiVersion?: string
  data?: Object
  kind?: string
  metadata?: ObjectMetaV1
  stringData?: Object
  type?: string
}

export interface SecretEnvSourceV1 {
  name?: string
  optional?: boolean
}

export interface SecretKeySelectorV1 {
  key: string
  name?: string
  optional?: boolean
}

export interface SecretListV1 {
  apiVersion?: string
  items: SecretV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface SecretProjectionV1 {
  items?: KeyToPathV1[]
  name?: string
  optional?: boolean
}

export interface SecretReferenceV1 {
  name?: string
  namespace?: string
}

export interface SecretVolumeSourceV1 {
  defaultMode?: number
  items?: KeyToPathV1[]
  optional?: boolean
  secretName?: string
}

export interface SecurityContextV1 {
  allowPrivilegeEscalation?: boolean
  capabilities?: CapabilitiesV1
  privileged?: boolean
  procMount?: string
  readOnlyRootFilesystem?: boolean
  runAsGroup?: number
  runAsNonRoot?: boolean
  runAsUser?: number
  seLinuxOptions?: SELinuxOptionsV1
}

export interface SelfSubjectAccessReviewV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: SelfSubjectAccessReviewSpecV1
  status?: SubjectAccessReviewStatusV1
}

export interface SelfSubjectAccessReviewSpecV1 {
  nonResourceAttributes?: NonResourceAttributesV1
  resourceAttributes?: ResourceAttributesV1
}

export interface SelfSubjectRulesReviewV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: SelfSubjectRulesReviewSpecV1
  status?: SubjectRulesReviewStatusV1
}

export interface SelfSubjectRulesReviewSpecV1 {
  namespace?: string
}

export interface ServerAddressByClientCIDRV1 {
  clientCIDR: string
  serverAddress: string
}

export interface ServiceV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ServiceSpecV1
  status?: ServiceStatusV1
}

export interface ServiceAccountV1 {
  apiVersion?: string
  automountServiceAccountToken?: boolean
  imagePullSecrets?: LocalObjectReferenceV1[]
  kind?: string
  metadata?: ObjectMetaV1
  secrets?: ObjectReferenceV1[]
}

export interface ServiceAccountListV1 {
  apiVersion?: string
  items: ServiceAccountV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ServiceAccountTokenProjectionV1 {
  audience?: string
  expirationSeconds?: number
  path: string
}

export interface ServiceListV1 {
  apiVersion?: string
  items: ServiceV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ServicePortV1 {
  name?: string
  nodePort?: number
  port: number
  protocol?: string
  targetPort?: Object
}

export interface ServiceReferenceV1 {
  name?: string
  namespace?: string
}

export interface ServiceSpecV1 {
  clusterIP?: string
  externalIPs?: string[]
  externalName?: string
  externalTrafficPolicy?: string
  healthCheckNodePort?: number
  loadBalancerIP?: string
  loadBalancerSourceRanges?: string[]
  ports?: ServicePortV1[]
  publishNotReadyAddresses?: boolean
  selector?: Object
  sessionAffinity?: string
  sessionAffinityConfig?: SessionAffinityConfigV1
  type?: string
}

export interface ServiceStatusV1 {
  loadBalancer?: LoadBalancerStatusV1
}

export interface SessionAffinityConfigV1 {
  clientIP?: ClientIPConfigV1
}

export interface StatefulSetV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: StatefulSetSpecV1
  status?: StatefulSetStatusV1
}

export interface StatefulSetConditionV1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface StatefulSetListV1 {
  apiVersion?: string
  items: StatefulSetV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface StatefulSetSpecV1 {
  podManagementPolicy?: string
  replicas?: number
  revisionHistoryLimit?: number
  selector: LabelSelectorV1
  serviceName: string
  template: PodTemplateSpecV1
  updateStrategy?: StatefulSetUpdateStrategyV1
  volumeClaimTemplates?: PersistentVolumeClaimV1[]
}

export interface StatefulSetStatusV1 {
  collisionCount?: number
  conditions?: StatefulSetConditionV1[]
  currentReplicas?: number
  currentRevision?: string
  observedGeneration?: number
  readyReplicas?: number
  replicas: number
  updateRevision?: string
  updatedReplicas?: number
}

export interface StatefulSetUpdateStrategyV1 {
  rollingUpdate?: RollingUpdateStatefulSetStrategyV1
  type?: string
}

export interface StatusV1 {
  apiVersion?: string
  code?: number
  details?: StatusDetailsV1
  kind?: string
  message?: string
  metadata?: ListMetaV1
  reason?: string
  status?: string
}

export interface StatusCauseV1 {
  field?: string
  message?: string
  reason?: string
}

export interface StatusDetailsV1 {
  causes?: StatusCauseV1[]
  group?: string
  kind?: string
  name?: string
  retryAfterSeconds?: number
  uid?: string
}

export interface StorageClassV1 {
  allowVolumeExpansion?: boolean
  allowedTopologies?: TopologySelectorTermV1[]
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  mountOptions?: string[]
  parameters?: Object
  provisioner: string
  reclaimPolicy?: string
  volumeBindingMode?: string
}

export interface StorageClassListV1 {
  apiVersion?: string
  items: StorageClassV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface StorageOSPersistentVolumeSourceV1 {
  fsType?: string
  readOnly?: boolean
  secretRef?: ObjectReferenceV1
  volumeName?: string
  volumeNamespace?: string
}

export interface StorageOSVolumeSourceV1 {
  fsType?: string
  readOnly?: boolean
  secretRef?: LocalObjectReferenceV1
  volumeName?: string
  volumeNamespace?: string
}

export interface SubjectV1 {
  apiGroup?: string
  kind: string
  name: string
  namespace?: string
}

export interface SubjectAccessReviewV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: SubjectAccessReviewSpecV1
  status?: SubjectAccessReviewStatusV1
}

export interface SubjectAccessReviewSpecV1 {
  extra?: Object
  groups?: string[]
  nonResourceAttributes?: NonResourceAttributesV1
  resourceAttributes?: ResourceAttributesV1
  uid?: string
  user?: string
}

export interface SubjectAccessReviewStatusV1 {
  allowed: boolean
  denied?: boolean
  evaluationError?: string
  reason?: string
}

export interface SubjectRulesReviewStatusV1 {
  evaluationError?: string
  incomplete: boolean
  nonResourceRules: NonResourceRuleV1[]
  resourceRules: ResourceRuleV1[]
}

export interface SysctlV1 {
  name: string
  value: string
}

export interface TCPSocketActionV1 {
  host?: string
  port: Object
}

export interface TaintV1 {
  effect: string
  key: string
  timeAdded?: string
  value?: string
}

export interface TokenReviewV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: TokenReviewSpecV1
  status?: TokenReviewStatusV1
}

export interface TokenReviewSpecV1 {
  audiences?: string[]
  token?: string
}

export interface TokenReviewStatusV1 {
  audiences?: string[]
  authenticated?: boolean
  error?: string
  user?: UserInfoV1
}

export interface TolerationV1 {
  effect?: string
  key?: string
  operator?: string
  tolerationSeconds?: number
  value?: string
}

export interface TopologySelectorLabelRequirementV1 {
  key: string
  values: string[]
}

export interface TopologySelectorTermV1 {
  matchLabelExpressions?: TopologySelectorLabelRequirementV1[]
}

export interface TypedLocalObjectReferenceV1 {
  apiGroup?: string
  kind: string
  name: string
}

export interface UserInfoV1 {
  extra?: Object
  groups?: string[]
  uid?: string
  username?: string
}

export interface VolumeV1 {
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSourceV1
  azureDisk?: AzureDiskVolumeSourceV1
  azureFile?: AzureFileVolumeSourceV1
  cephfs?: CephFSVolumeSourceV1
  cinder?: CinderVolumeSourceV1
  configMap?: ConfigMapVolumeSourceV1
  downwardAPI?: DownwardAPIVolumeSourceV1
  emptyDir?: EmptyDirVolumeSourceV1
  fc?: FCVolumeSourceV1
  flexVolume?: FlexVolumeSourceV1
  flocker?: FlockerVolumeSourceV1
  gcePersistentDisk?: GCEPersistentDiskVolumeSourceV1
  gitRepo?: GitRepoVolumeSourceV1
  glusterfs?: GlusterfsVolumeSourceV1
  hostPath?: HostPathVolumeSourceV1
  iscsi?: ISCSIVolumeSourceV1
  name: string
  nfs?: NFSVolumeSourceV1
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSourceV1
  photonPersistentDisk?: PhotonPersistentDiskVolumeSourceV1
  portworxVolume?: PortworxVolumeSourceV1
  projected?: ProjectedVolumeSourceV1
  quobyte?: QuobyteVolumeSourceV1
  rbd?: RBDVolumeSourceV1
  scaleIO?: ScaleIOVolumeSourceV1
  secret?: SecretVolumeSourceV1
  storageos?: StorageOSVolumeSourceV1
  vsphereVolume?: VsphereVirtualDiskVolumeSourceV1
}

export interface VolumeAttachmentV1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: VolumeAttachmentSpecV1
  status?: VolumeAttachmentStatusV1
}

export interface VolumeAttachmentListV1 {
  apiVersion?: string
  items: VolumeAttachmentV1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface VolumeAttachmentSourceV1 {
  persistentVolumeName?: string
}

export interface VolumeAttachmentSpecV1 {
  attacher: string
  nodeName: string
  source: VolumeAttachmentSourceV1
}

export interface VolumeAttachmentStatusV1 {
  attachError?: VolumeErrorV1
  attached: boolean
  attachmentMetadata?: Object
  detachError?: VolumeErrorV1
}

export interface VolumeDeviceV1 {
  devicePath: string
  name: string
}

export interface VolumeErrorV1 {
  message?: string
  time?: string
}

export interface VolumeMountV1 {
  mountPath: string
  mountPropagation?: string
  name: string
  readOnly?: boolean
  subPath?: string
}

export interface VolumeNodeAffinityV1 {
  required?: NodeSelectorV1
}

export interface VolumeProjectionV1 {
  configMap?: ConfigMapProjectionV1
  downwardAPI?: DownwardAPIProjectionV1
  secret?: SecretProjectionV1
  serviceAccountToken?: ServiceAccountTokenProjectionV1
}

export interface VsphereVirtualDiskVolumeSourceV1 {
  fsType?: string
  storagePolicyID?: string
  storagePolicyName?: string
  volumePath: string
}

export interface WatchEventV1 {
  object: RawExtensionRuntime
  type: string
}

export interface WeightedPodAffinityTermV1 {
  podAffinityTerm: PodAffinityTermV1
  weight: number
}

export interface AggregationRuleV1alpha1 {
  clusterRoleSelectors?: LabelSelectorV1[]
}

export interface AuditSinkV1alpha1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: AuditSinkSpecV1alpha1
}

export interface AuditSinkListV1alpha1 {
  apiVersion?: string
  items: AuditSinkV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface AuditSinkSpecV1alpha1 {
  policy: PolicyV1alpha1
  webhook: WebhookV1alpha1
}

export interface ClusterRoleV1alpha1 {
  aggregationRule?: AggregationRuleV1alpha1
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  rules: PolicyRuleV1alpha1[]
}

export interface ClusterRoleBindingV1alpha1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  roleRef: RoleRefV1alpha1
  subjects?: SubjectV1alpha1[]
}

export interface ClusterRoleBindingListV1alpha1 {
  apiVersion?: string
  items: ClusterRoleBindingV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ClusterRoleListV1alpha1 {
  apiVersion?: string
  items: ClusterRoleV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface InitializerV1alpha1 {
  name: string
  rules?: RuleV1alpha1[]
}

export interface InitializerConfigurationV1alpha1 {
  apiVersion?: string
  initializers?: InitializerV1alpha1[]
  kind?: string
  metadata?: ObjectMetaV1
}

export interface InitializerConfigurationListV1alpha1 {
  apiVersion?: string
  items: InitializerConfigurationV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PodPresetV1alpha1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: PodPresetSpecV1alpha1
}

export interface PodPresetListV1alpha1 {
  apiVersion?: string
  items: PodPresetV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PodPresetSpecV1alpha1 {
  env?: EnvVarV1[]
  envFrom?: EnvFromSourceV1[]
  selector?: LabelSelectorV1
  volumeMounts?: VolumeMountV1[]
  volumes?: VolumeV1[]
}

export interface PolicyV1alpha1 {
  level: string
  stages?: string[]
}

export interface PolicyRuleV1alpha1 {
  apiGroups?: string[]
  nonResourceURLs?: string[]
  resourceNames?: string[]
  resources?: string[]
  verbs: string[]
}

export interface PriorityClassV1alpha1 {
  apiVersion?: string
  description?: string
  globalDefault?: boolean
  kind?: string
  metadata?: ObjectMetaV1
  value: number
}

export interface PriorityClassListV1alpha1 {
  apiVersion?: string
  items: PriorityClassV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface RoleV1alpha1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  rules: PolicyRuleV1alpha1[]
}

export interface RoleBindingV1alpha1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  roleRef: RoleRefV1alpha1
  subjects?: SubjectV1alpha1[]
}

export interface RoleBindingListV1alpha1 {
  apiVersion?: string
  items: RoleBindingV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface RoleListV1alpha1 {
  apiVersion?: string
  items: RoleV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface RoleRefV1alpha1 {
  apiGroup: string
  kind: string
  name: string
}

export interface RuleV1alpha1 {
  apiGroups?: string[]
  apiVersions?: string[]
  resources?: string[]
}

export interface ServiceReferenceV1alpha1 {
  name: string
  namespace: string
  path?: string
}

export interface SubjectV1alpha1 {
  apiVersion?: string
  kind: string
  name: string
  namespace?: string
}

export interface VolumeAttachmentV1alpha1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: VolumeAttachmentSpecV1alpha1
  status?: VolumeAttachmentStatusV1alpha1
}

export interface VolumeAttachmentListV1alpha1 {
  apiVersion?: string
  items: VolumeAttachmentV1alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface VolumeAttachmentSourceV1alpha1 {
  persistentVolumeName?: string
}

export interface VolumeAttachmentSpecV1alpha1 {
  attacher: string
  nodeName: string
  source: VolumeAttachmentSourceV1alpha1
}

export interface VolumeAttachmentStatusV1alpha1 {
  attachError?: VolumeErrorV1alpha1
  attached: boolean
  attachmentMetadata?: Object
  detachError?: VolumeErrorV1alpha1
}

export interface VolumeErrorV1alpha1 {
  message?: string
  time?: string
}

export interface WebhookV1alpha1 {
  clientConfig: WebhookClientConfigV1alpha1
  throttle?: WebhookThrottleConfigV1alpha1
}

export interface WebhookClientConfigV1alpha1 {
  caBundle?: string
  service?: ServiceReferenceV1alpha1
  url?: string
}

export interface WebhookThrottleConfigV1alpha1 {
  burst?: number
  qps?: number
}

export interface APIServiceV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: APIServiceSpecV1beta1
  status?: APIServiceStatusV1beta1
}

export interface APIServiceConditionV1beta1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface APIServiceListV1beta1 {
  apiVersion?: string
  items: APIServiceV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface APIServiceSpecV1beta1 {
  caBundle?: string
  group?: string
  groupPriorityMinimum: number
  insecureSkipTLSVerify?: boolean
  service: ServiceReferenceApiregistrationV1beta1
  version?: string
  versionPriority: number
}

export interface APIServiceStatusV1beta1 {
  conditions?: APIServiceConditionV1beta1[]
}

export interface AggregationRuleV1beta1 {
  clusterRoleSelectors?: LabelSelectorV1[]
}

export interface CertificateSigningRequestV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: CertificateSigningRequestSpecV1beta1
  status?: CertificateSigningRequestStatusV1beta1
}

export interface CertificateSigningRequestConditionV1beta1 {
  lastUpdateTime?: string
  message?: string
  reason?: string
  type: string
}

export interface CertificateSigningRequestListV1beta1 {
  apiVersion?: string
  items: CertificateSigningRequestV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface CertificateSigningRequestSpecV1beta1 {
  extra?: Object
  groups?: string[]
  request: string
  uid?: string
  usages?: string[]
  username?: string
}

export interface CertificateSigningRequestStatusV1beta1 {
  certificate?: string
  conditions?: CertificateSigningRequestConditionV1beta1[]
}

export interface ClusterRoleV1beta1 {
  aggregationRule?: AggregationRuleV1beta1
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  rules: PolicyRuleV1beta1[]
}

export interface ClusterRoleBindingV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  roleRef: RoleRefV1beta1
  subjects?: SubjectV1beta1[]
}

export interface ClusterRoleBindingListV1beta1 {
  apiVersion?: string
  items: ClusterRoleBindingV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ClusterRoleListV1beta1 {
  apiVersion?: string
  items: ClusterRoleV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ControllerRevisionV1beta1 {
  apiVersion?: string
  data?: RawExtensionRuntime
  kind?: string
  metadata?: ObjectMetaV1
  revision: number
}

export interface ControllerRevisionListV1beta1 {
  apiVersion?: string
  items: ControllerRevisionV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface CronJobV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: CronJobSpecV1beta1
  status?: CronJobStatusV1beta1
}

export interface CronJobListV1beta1 {
  apiVersion?: string
  items: CronJobV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface CronJobSpecV1beta1 {
  concurrencyPolicy?: string
  failedJobsHistoryLimit?: number
  jobTemplate: JobTemplateSpecV1beta1
  schedule: string
  startingDeadlineSeconds?: number
  successfulJobsHistoryLimit?: number
  suspend?: boolean
}

export interface CronJobStatusV1beta1 {
  active?: ObjectReferenceV1[]
  lastScheduleTime?: string
}

export interface CustomResourceColumnDefinitionV1beta1 {
  JSONPath: string
  description?: string
  format?: string
  name: string
  priority?: number
  type: string
}

export interface CustomResourceConversionV1beta1 {
  strategy: string
  webhookClientConfig?: WebhookClientConfigApiextensionsV1beta1
}

export interface CustomResourceDefinitionV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: CustomResourceDefinitionSpecV1beta1
  status?: CustomResourceDefinitionStatusV1beta1
}

export interface CustomResourceDefinitionConditionV1beta1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface CustomResourceDefinitionListV1beta1 {
  apiVersion?: string
  items: CustomResourceDefinitionV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface CustomResourceDefinitionNamesV1beta1 {
  categories?: string[]
  kind: string
  listKind?: string
  plural: string
  shortNames?: string[]
  singular?: string
}

export interface CustomResourceDefinitionSpecV1beta1 {
  additionalPrinterColumns?: CustomResourceColumnDefinitionV1beta1[]
  conversion?: CustomResourceConversionV1beta1
  group: string
  names: CustomResourceDefinitionNamesV1beta1
  scope: string
  subresources?: CustomResourceSubresourcesV1beta1
  validation?: CustomResourceValidationV1beta1
  version?: string
  versions?: CustomResourceDefinitionVersionV1beta1[]
}

export interface CustomResourceDefinitionStatusV1beta1 {
  acceptedNames: CustomResourceDefinitionNamesV1beta1
  conditions: CustomResourceDefinitionConditionV1beta1[]
  storedVersions: string[]
}

export interface CustomResourceDefinitionVersionV1beta1 {
  additionalPrinterColumns?: CustomResourceColumnDefinitionV1beta1[]
  name: string
  schema?: CustomResourceValidationV1beta1
  served: boolean
  storage: boolean
  subresources?: CustomResourceSubresourcesV1beta1
}

export interface CustomResourceSubresourceScaleV1beta1 {
  labelSelectorPath?: string
  specReplicasPath: string
  statusReplicasPath: string
}

export interface CustomResourceSubresourcesV1beta1 {
  scale?: CustomResourceSubresourceScaleV1beta1
  status?: Object
}

export interface CustomResourceValidationV1beta1 {
  openAPIV3Schema?: JSONSchemaPropsV1beta1
}

export interface DaemonSetV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: DaemonSetSpecV1beta1
  status?: DaemonSetStatusV1beta1
}

export interface DaemonSetConditionV1beta1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface DaemonSetListV1beta1 {
  apiVersion?: string
  items: DaemonSetV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface DaemonSetSpecV1beta1 {
  minReadySeconds?: number
  revisionHistoryLimit?: number
  selector?: LabelSelectorV1
  template: PodTemplateSpecV1
  templateGeneration?: number
  updateStrategy?: DaemonSetUpdateStrategyV1beta1
}

export interface DaemonSetStatusV1beta1 {
  collisionCount?: number
  conditions?: DaemonSetConditionV1beta1[]
  currentNumberScheduled: number
  desiredNumberScheduled: number
  numberAvailable?: number
  numberMisscheduled: number
  numberReady: number
  numberUnavailable?: number
  observedGeneration?: number
  updatedNumberScheduled?: number
}

export interface DaemonSetUpdateStrategyV1beta1 {
  rollingUpdate?: RollingUpdateDaemonSetV1beta1
  type?: string
}

export interface EventV1beta1 {
  action?: string
  apiVersion?: string
  deprecatedCount?: number
  deprecatedFirstTimestamp?: string
  deprecatedLastTimestamp?: string
  deprecatedSource?: EventSourceV1
  eventTime: string
  kind?: string
  metadata?: ObjectMetaV1
  note?: string
  reason?: string
  regarding?: ObjectReferenceV1
  related?: ObjectReferenceV1
  reportingController?: string
  reportingInstance?: string
  series?: EventSeriesV1beta1
  type?: string
}

export interface EventListV1beta1 {
  apiVersion?: string
  items: EventV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface EventSeriesV1beta1 {
  count: number
  lastObservedTime: string
  state: string
}

export interface EvictionV1beta1 {
  apiVersion?: string
  deleteOptions?: DeleteOptionsV1
  kind?: string
  metadata?: ObjectMetaV1
}

export interface ExternalDocumentationV1beta1 {
  description?: string
  url?: string
}

export interface HTTPIngressPathV1beta1 {
  backend: IngressBackendV1beta1
  path?: string
}

export interface HTTPIngressRuleValueV1beta1 {
  paths: HTTPIngressPathV1beta1[]
}

export interface IPBlockV1beta1 {
  cidr: string
  except?: string[]
}

export interface IngressV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: IngressSpecV1beta1
  status?: IngressStatusV1beta1
}

export interface IngressBackendV1beta1 {
  serviceName: string
  servicePort: Object
}

export interface IngressListV1beta1 {
  apiVersion?: string
  items: IngressV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface IngressRuleV1beta1 {
  host?: string
  http?: HTTPIngressRuleValueV1beta1
}

export interface IngressSpecV1beta1 {
  backend?: IngressBackendV1beta1
  rules?: IngressRuleV1beta1[]
  tls?: IngressTLSV1beta1[]
}

export interface IngressStatusV1beta1 {
  loadBalancer?: LoadBalancerStatusV1
}

export interface IngressTLSV1beta1 {
  hosts?: string[]
  secretName?: string
}

export interface JSONSchemaPropsV1beta1 {
  $ref?: string
  $schema?: string
  additionalItems?: Object
  additionalProperties?: Object
  allOf?: JSONSchemaPropsV1beta1[]
  anyOf?: JSONSchemaPropsV1beta1[]
  default?: Object
  definitions?: Object
  dependencies?: Object
  description?: string
  enum?: Object[]
  example?: Object
  exclusiveMaximum?: boolean
  exclusiveMinimum?: boolean
  externalDocs?: ExternalDocumentationV1beta1
  format?: string
  id?: string
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

export interface JobTemplateSpecV1beta1 {
  metadata?: ObjectMetaV1
  spec?: JobSpecV1
}

export interface LeaseV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: LeaseSpecV1beta1
}

export interface LeaseListV1beta1 {
  apiVersion?: string
  items: LeaseV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface LeaseSpecV1beta1 {
  acquireTime?: string
  holderIdentity?: string
  leaseDurationSeconds?: number
  leaseTransitions?: number
  renewTime?: string
}

export interface LocalSubjectAccessReviewV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: SubjectAccessReviewSpecV1beta1
  status?: SubjectAccessReviewStatusV1beta1
}

export interface MutatingWebhookConfigurationV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  webhooks?: WebhookV1beta1[]
}

export interface MutatingWebhookConfigurationListV1beta1 {
  apiVersion?: string
  items: MutatingWebhookConfigurationV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface NetworkPolicyV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: NetworkPolicySpecV1beta1
}

export interface NetworkPolicyEgressRuleV1beta1 {
  ports?: NetworkPolicyPortV1beta1[]
  to?: NetworkPolicyPeerV1beta1[]
}

export interface NetworkPolicyIngressRuleV1beta1 {
  from?: NetworkPolicyPeerV1beta1[]
  ports?: NetworkPolicyPortV1beta1[]
}

export interface NetworkPolicyListV1beta1 {
  apiVersion?: string
  items: NetworkPolicyV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface NetworkPolicyPeerV1beta1 {
  ipBlock?: IPBlockV1beta1
  namespaceSelector?: LabelSelectorV1
  podSelector?: LabelSelectorV1
}

export interface NetworkPolicyPortV1beta1 {
  port?: Object
  protocol?: string
}

export interface NetworkPolicySpecV1beta1 {
  egress?: NetworkPolicyEgressRuleV1beta1[]
  ingress?: NetworkPolicyIngressRuleV1beta1[]
  podSelector: LabelSelectorV1
  policyTypes?: string[]
}

export interface NonResourceAttributesV1beta1 {
  path?: string
  verb?: string
}

export interface NonResourceRuleV1beta1 {
  nonResourceURLs?: string[]
  verbs: string[]
}

export interface PodDisruptionBudgetV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: PodDisruptionBudgetSpecV1beta1
  status?: PodDisruptionBudgetStatusV1beta1
}

export interface PodDisruptionBudgetListV1beta1 {
  apiVersion?: string
  items: PodDisruptionBudgetV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface PodDisruptionBudgetSpecV1beta1 {
  maxUnavailable?: Object
  minAvailable?: Object
  selector?: LabelSelectorV1
}

export interface PodDisruptionBudgetStatusV1beta1 {
  currentHealthy: number
  desiredHealthy: number
  disruptedPods?: Object
  disruptionsAllowed: number
  expectedPods: number
  observedGeneration?: number
}

export interface PolicyRuleV1beta1 {
  apiGroups?: string[]
  nonResourceURLs?: string[]
  resourceNames?: string[]
  resources?: string[]
  verbs: string[]
}

export interface PriorityClassV1beta1 {
  apiVersion?: string
  description?: string
  globalDefault?: boolean
  kind?: string
  metadata?: ObjectMetaV1
  value: number
}

export interface PriorityClassListV1beta1 {
  apiVersion?: string
  items: PriorityClassV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ReplicaSetV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ReplicaSetSpecV1beta1
  status?: ReplicaSetStatusV1beta1
}

export interface ReplicaSetConditionV1beta1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface ReplicaSetListV1beta1 {
  apiVersion?: string
  items: ReplicaSetV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ReplicaSetSpecV1beta1 {
  minReadySeconds?: number
  replicas?: number
  selector?: LabelSelectorV1
  template?: PodTemplateSpecV1
}

export interface ReplicaSetStatusV1beta1 {
  availableReplicas?: number
  conditions?: ReplicaSetConditionV1beta1[]
  fullyLabeledReplicas?: number
  observedGeneration?: number
  readyReplicas?: number
  replicas: number
}

export interface ResourceAttributesV1beta1 {
  group?: string
  name?: string
  namespace?: string
  resource?: string
  subresource?: string
  verb?: string
  version?: string
}

export interface ResourceRuleV1beta1 {
  apiGroups?: string[]
  resourceNames?: string[]
  resources?: string[]
  verbs: string[]
}

export interface RoleV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  rules: PolicyRuleV1beta1[]
}

export interface RoleBindingV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  roleRef: RoleRefV1beta1
  subjects?: SubjectV1beta1[]
}

export interface RoleBindingListV1beta1 {
  apiVersion?: string
  items: RoleBindingV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface RoleListV1beta1 {
  apiVersion?: string
  items: RoleV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface RoleRefV1beta1 {
  apiGroup: string
  kind: string
  name: string
}

export interface RollingUpdateDaemonSetV1beta1 {
  maxUnavailable?: Object
}

export interface RollingUpdateStatefulSetStrategyV1beta1 {
  partition?: number
}

export interface RuleWithOperationsV1beta1 {
  apiGroups?: string[]
  apiVersions?: string[]
  operations?: string[]
  resources?: string[]
}

export interface SelfSubjectAccessReviewV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: SelfSubjectAccessReviewSpecV1beta1
  status?: SubjectAccessReviewStatusV1beta1
}

export interface SelfSubjectAccessReviewSpecV1beta1 {
  nonResourceAttributes?: NonResourceAttributesV1beta1
  resourceAttributes?: ResourceAttributesV1beta1
}

export interface SelfSubjectRulesReviewV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: SelfSubjectRulesReviewSpecV1beta1
  status?: SubjectRulesReviewStatusV1beta1
}

export interface SelfSubjectRulesReviewSpecV1beta1 {
  namespace?: string
}

export interface StatefulSetV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: StatefulSetSpecV1beta1
  status?: StatefulSetStatusV1beta1
}

export interface StatefulSetConditionV1beta1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface StatefulSetListV1beta1 {
  apiVersion?: string
  items: StatefulSetV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface StatefulSetSpecV1beta1 {
  podManagementPolicy?: string
  replicas?: number
  revisionHistoryLimit?: number
  selector?: LabelSelectorV1
  serviceName: string
  template: PodTemplateSpecV1
  updateStrategy?: StatefulSetUpdateStrategyV1beta1
  volumeClaimTemplates?: PersistentVolumeClaimV1[]
}

export interface StatefulSetStatusV1beta1 {
  collisionCount?: number
  conditions?: StatefulSetConditionV1beta1[]
  currentReplicas?: number
  currentRevision?: string
  observedGeneration?: number
  readyReplicas?: number
  replicas: number
  updateRevision?: string
  updatedReplicas?: number
}

export interface StatefulSetUpdateStrategyV1beta1 {
  rollingUpdate?: RollingUpdateStatefulSetStrategyV1beta1
  type?: string
}

export interface StorageClassV1beta1 {
  allowVolumeExpansion?: boolean
  allowedTopologies?: TopologySelectorTermV1[]
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  mountOptions?: string[]
  parameters?: Object
  provisioner: string
  reclaimPolicy?: string
  volumeBindingMode?: string
}

export interface StorageClassListV1beta1 {
  apiVersion?: string
  items: StorageClassV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface SubjectV1beta1 {
  apiGroup?: string
  kind: string
  name: string
  namespace?: string
}

export interface SubjectAccessReviewV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: SubjectAccessReviewSpecV1beta1
  status?: SubjectAccessReviewStatusV1beta1
}

export interface SubjectAccessReviewSpecV1beta1 {
  extra?: Object
  group?: string[]
  nonResourceAttributes?: NonResourceAttributesV1beta1
  resourceAttributes?: ResourceAttributesV1beta1
  uid?: string
  user?: string
}

export interface SubjectAccessReviewStatusV1beta1 {
  allowed: boolean
  denied?: boolean
  evaluationError?: string
  reason?: string
}

export interface SubjectRulesReviewStatusV1beta1 {
  evaluationError?: string
  incomplete: boolean
  nonResourceRules: NonResourceRuleV1beta1[]
  resourceRules: ResourceRuleV1beta1[]
}

export interface TokenReviewV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: TokenReviewSpecV1beta1
  status?: TokenReviewStatusV1beta1
}

export interface TokenReviewSpecV1beta1 {
  audiences?: string[]
  token?: string
}

export interface TokenReviewStatusV1beta1 {
  audiences?: string[]
  authenticated?: boolean
  error?: string
  user?: UserInfoV1beta1
}

export interface UserInfoV1beta1 {
  extra?: Object
  groups?: string[]
  uid?: string
  username?: string
}

export interface ValidatingWebhookConfigurationV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  webhooks?: WebhookV1beta1[]
}

export interface ValidatingWebhookConfigurationListV1beta1 {
  apiVersion?: string
  items: ValidatingWebhookConfigurationV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface VolumeAttachmentV1beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec: VolumeAttachmentSpecV1beta1
  status?: VolumeAttachmentStatusV1beta1
}

export interface VolumeAttachmentListV1beta1 {
  apiVersion?: string
  items: VolumeAttachmentV1beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface VolumeAttachmentSourceV1beta1 {
  persistentVolumeName?: string
}

export interface VolumeAttachmentSpecV1beta1 {
  attacher: string
  nodeName: string
  source: VolumeAttachmentSourceV1beta1
}

export interface VolumeAttachmentStatusV1beta1 {
  attachError?: VolumeErrorV1beta1
  attached: boolean
  attachmentMetadata?: Object
  detachError?: VolumeErrorV1beta1
}

export interface VolumeErrorV1beta1 {
  message?: string
  time?: string
}

export interface WebhookV1beta1 {
  clientConfig: WebhookClientConfigAdmissionregistrationV1beta1
  failurePolicy?: string
  name: string
  namespaceSelector?: LabelSelectorV1
  rules?: RuleWithOperationsV1beta1[]
  sideEffects?: string
}

export interface ControllerRevisionV1beta2 {
  apiVersion?: string
  data?: RawExtensionRuntime
  kind?: string
  metadata?: ObjectMetaV1
  revision: number
}

export interface ControllerRevisionListV1beta2 {
  apiVersion?: string
  items: ControllerRevisionV1beta2[]
  kind?: string
  metadata?: ListMetaV1
}

export interface DaemonSetV1beta2 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: DaemonSetSpecV1beta2
  status?: DaemonSetStatusV1beta2
}

export interface DaemonSetConditionV1beta2 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface DaemonSetListV1beta2 {
  apiVersion?: string
  items: DaemonSetV1beta2[]
  kind?: string
  metadata?: ListMetaV1
}

export interface DaemonSetSpecV1beta2 {
  minReadySeconds?: number
  revisionHistoryLimit?: number
  selector: LabelSelectorV1
  template: PodTemplateSpecV1
  updateStrategy?: DaemonSetUpdateStrategyV1beta2
}

export interface DaemonSetStatusV1beta2 {
  collisionCount?: number
  conditions?: DaemonSetConditionV1beta2[]
  currentNumberScheduled: number
  desiredNumberScheduled: number
  numberAvailable?: number
  numberMisscheduled: number
  numberReady: number
  numberUnavailable?: number
  observedGeneration?: number
  updatedNumberScheduled?: number
}

export interface DaemonSetUpdateStrategyV1beta2 {
  rollingUpdate?: RollingUpdateDaemonSetV1beta2
  type?: string
}

export interface DeploymentV1beta2 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: DeploymentSpecV1beta2
  status?: DeploymentStatusV1beta2
}

export interface DeploymentConditionV1beta2 {
  lastTransitionTime?: string
  lastUpdateTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface DeploymentListV1beta2 {
  apiVersion?: string
  items: DeploymentV1beta2[]
  kind?: string
  metadata?: ListMetaV1
}

export interface DeploymentSpecV1beta2 {
  minReadySeconds?: number
  paused?: boolean
  progressDeadlineSeconds?: number
  replicas?: number
  revisionHistoryLimit?: number
  selector: LabelSelectorV1
  strategy?: DeploymentStrategyV1beta2
  template: PodTemplateSpecV1
}

export interface DeploymentStatusV1beta2 {
  availableReplicas?: number
  collisionCount?: number
  conditions?: DeploymentConditionV1beta2[]
  observedGeneration?: number
  readyReplicas?: number
  replicas?: number
  unavailableReplicas?: number
  updatedReplicas?: number
}

export interface DeploymentStrategyV1beta2 {
  rollingUpdate?: RollingUpdateDeploymentV1beta2
  type?: string
}

export interface ReplicaSetV1beta2 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ReplicaSetSpecV1beta2
  status?: ReplicaSetStatusV1beta2
}

export interface ReplicaSetConditionV1beta2 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface ReplicaSetListV1beta2 {
  apiVersion?: string
  items: ReplicaSetV1beta2[]
  kind?: string
  metadata?: ListMetaV1
}

export interface ReplicaSetSpecV1beta2 {
  minReadySeconds?: number
  replicas?: number
  selector: LabelSelectorV1
  template?: PodTemplateSpecV1
}

export interface ReplicaSetStatusV1beta2 {
  availableReplicas?: number
  conditions?: ReplicaSetConditionV1beta2[]
  fullyLabeledReplicas?: number
  observedGeneration?: number
  readyReplicas?: number
  replicas: number
}

export interface RollingUpdateDaemonSetV1beta2 {
  maxUnavailable?: Object
}

export interface RollingUpdateDeploymentV1beta2 {
  maxSurge?: Object
  maxUnavailable?: Object
}

export interface RollingUpdateStatefulSetStrategyV1beta2 {
  partition?: number
}

export interface ScaleV1beta2 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: ScaleSpecV1beta2
  status?: ScaleStatusV1beta2
}

export interface ScaleSpecV1beta2 {
  replicas?: number
}

export interface ScaleStatusV1beta2 {
  replicas: number
  selector?: Object
  targetSelector?: string
}

export interface StatefulSetV1beta2 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: StatefulSetSpecV1beta2
  status?: StatefulSetStatusV1beta2
}

export interface StatefulSetConditionV1beta2 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface StatefulSetListV1beta2 {
  apiVersion?: string
  items: StatefulSetV1beta2[]
  kind?: string
  metadata?: ListMetaV1
}

export interface StatefulSetSpecV1beta2 {
  podManagementPolicy?: string
  replicas?: number
  revisionHistoryLimit?: number
  selector: LabelSelectorV1
  serviceName: string
  template: PodTemplateSpecV1
  updateStrategy?: StatefulSetUpdateStrategyV1beta2
  volumeClaimTemplates?: PersistentVolumeClaimV1[]
}

export interface StatefulSetStatusV1beta2 {
  collisionCount?: number
  conditions?: StatefulSetConditionV1beta2[]
  currentReplicas?: number
  currentRevision?: string
  observedGeneration?: number
  readyReplicas?: number
  replicas: number
  updateRevision?: string
  updatedReplicas?: number
}

export interface StatefulSetUpdateStrategyV1beta2 {
  rollingUpdate?: RollingUpdateStatefulSetStrategyV1beta2
  type?: string
}

export interface CronJobV2alpha1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: CronJobSpecV2alpha1
  status?: CronJobStatusV2alpha1
}

export interface CronJobListV2alpha1 {
  apiVersion?: string
  items: CronJobV2alpha1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface CronJobSpecV2alpha1 {
  concurrencyPolicy?: string
  failedJobsHistoryLimit?: number
  jobTemplate: JobTemplateSpecV2alpha1
  schedule: string
  startingDeadlineSeconds?: number
  successfulJobsHistoryLimit?: number
  suspend?: boolean
}

export interface CronJobStatusV2alpha1 {
  active?: ObjectReferenceV1[]
  lastScheduleTime?: string
}

export interface JobTemplateSpecV2alpha1 {
  metadata?: ObjectMetaV1
  spec?: JobSpecV1
}

export interface CrossVersionObjectReferenceV2beta1 {
  apiVersion?: string
  kind: string
  name: string
}

export interface ExternalMetricSourceV2beta1 {
  metricName: string
  metricSelector?: LabelSelectorV1
  targetAverageValue?: string
  targetValue?: string
}

export interface ExternalMetricStatusV2beta1 {
  currentAverageValue?: string
  currentValue: string
  metricName: string
  metricSelector?: LabelSelectorV1
}

export interface HorizontalPodAutoscalerV2beta1 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: HorizontalPodAutoscalerSpecV2beta1
  status?: HorizontalPodAutoscalerStatusV2beta1
}

export interface HorizontalPodAutoscalerConditionV2beta1 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface HorizontalPodAutoscalerListV2beta1 {
  apiVersion?: string
  items: HorizontalPodAutoscalerV2beta1[]
  kind?: string
  metadata?: ListMetaV1
}

export interface HorizontalPodAutoscalerSpecV2beta1 {
  maxReplicas: number
  metrics?: MetricSpecV2beta1[]
  minReplicas?: number
  scaleTargetRef: CrossVersionObjectReferenceV2beta1
}

export interface HorizontalPodAutoscalerStatusV2beta1 {
  conditions: HorizontalPodAutoscalerConditionV2beta1[]
  currentMetrics?: MetricStatusV2beta1[]
  currentReplicas: number
  desiredReplicas: number
  lastScaleTime?: string
  observedGeneration?: number
}

export interface MetricSpecV2beta1 {
  external?: ExternalMetricSourceV2beta1
  object?: ObjectMetricSourceV2beta1
  pods?: PodsMetricSourceV2beta1
  resource?: ResourceMetricSourceV2beta1
  type: string
}

export interface MetricStatusV2beta1 {
  external?: ExternalMetricStatusV2beta1
  object?: ObjectMetricStatusV2beta1
  pods?: PodsMetricStatusV2beta1
  resource?: ResourceMetricStatusV2beta1
  type: string
}

export interface ObjectMetricSourceV2beta1 {
  averageValue?: string
  metricName: string
  selector?: LabelSelectorV1
  target: CrossVersionObjectReferenceV2beta1
  targetValue: string
}

export interface ObjectMetricStatusV2beta1 {
  averageValue?: string
  currentValue: string
  metricName: string
  selector?: LabelSelectorV1
  target: CrossVersionObjectReferenceV2beta1
}

export interface PodsMetricSourceV2beta1 {
  metricName: string
  selector?: LabelSelectorV1
  targetAverageValue: string
}

export interface PodsMetricStatusV2beta1 {
  currentAverageValue: string
  metricName: string
  selector?: LabelSelectorV1
}

export interface ResourceMetricSourceV2beta1 {
  name: string
  targetAverageUtilization?: number
  targetAverageValue?: string
}

export interface ResourceMetricStatusV2beta1 {
  currentAverageUtilization?: number
  currentAverageValue: string
  name: string
}

export interface CrossVersionObjectReferenceV2beta2 {
  apiVersion?: string
  kind: string
  name: string
}

export interface ExternalMetricSourceV2beta2 {
  metric: MetricIdentifierV2beta2
  target: MetricTargetV2beta2
}

export interface ExternalMetricStatusV2beta2 {
  current: MetricValueStatusV2beta2
  metric: MetricIdentifierV2beta2
}

export interface HorizontalPodAutoscalerV2beta2 {
  apiVersion?: string
  kind?: string
  metadata?: ObjectMetaV1
  spec?: HorizontalPodAutoscalerSpecV2beta2
  status?: HorizontalPodAutoscalerStatusV2beta2
}

export interface HorizontalPodAutoscalerConditionV2beta2 {
  lastTransitionTime?: string
  message?: string
  reason?: string
  status: string
  type: string
}

export interface HorizontalPodAutoscalerListV2beta2 {
  apiVersion?: string
  items: HorizontalPodAutoscalerV2beta2[]
  kind?: string
  metadata?: ListMetaV1
}

export interface HorizontalPodAutoscalerSpecV2beta2 {
  maxReplicas: number
  metrics?: MetricSpecV2beta2[]
  minReplicas?: number
  scaleTargetRef: CrossVersionObjectReferenceV2beta2
}

export interface HorizontalPodAutoscalerStatusV2beta2 {
  conditions: HorizontalPodAutoscalerConditionV2beta2[]
  currentMetrics?: MetricStatusV2beta2[]
  currentReplicas: number
  desiredReplicas: number
  lastScaleTime?: string
  observedGeneration?: number
}

export interface MetricIdentifierV2beta2 {
  name: string
  selector?: LabelSelectorV1
}

export interface MetricSpecV2beta2 {
  external?: ExternalMetricSourceV2beta2
  object?: ObjectMetricSourceV2beta2
  pods?: PodsMetricSourceV2beta2
  resource?: ResourceMetricSourceV2beta2
  type: string
}

export interface MetricStatusV2beta2 {
  external?: ExternalMetricStatusV2beta2
  object?: ObjectMetricStatusV2beta2
  pods?: PodsMetricStatusV2beta2
  resource?: ResourceMetricStatusV2beta2
  type: string
}

export interface MetricTargetV2beta2 {
  averageUtilization?: number
  averageValue?: string
  type: string
  value?: string
}

export interface MetricValueStatusV2beta2 {
  averageUtilization?: number
  averageValue?: string
  value?: string
}

export interface ObjectMetricSourceV2beta2 {
  describedObject: CrossVersionObjectReferenceV2beta2
  metric: MetricIdentifierV2beta2
  target: MetricTargetV2beta2
}

export interface ObjectMetricStatusV2beta2 {
  current: MetricValueStatusV2beta2
  describedObject: CrossVersionObjectReferenceV2beta2
  metric: MetricIdentifierV2beta2
}

export interface PodsMetricSourceV2beta2 {
  metric: MetricIdentifierV2beta2
  target: MetricTargetV2beta2
}

export interface PodsMetricStatusV2beta2 {
  current: MetricValueStatusV2beta2
  metric: MetricIdentifierV2beta2
}

export interface ResourceMetricSourceV2beta2 {
  name: string
  target: MetricTargetV2beta2
}

export interface ResourceMetricStatusV2beta2 {
  current: MetricValueStatusV2beta2
  name: string
}

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

