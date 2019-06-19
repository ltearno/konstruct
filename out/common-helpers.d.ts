import * as k8s from './kubernetes-api';
declare global {
    interface Object {
        addDeploymentDefaultNameAndLabels<T>(this: T, name: string): T;
    }
}
export declare function nameMetadata(name: string): k8s.ObjectMetaIoK8sApimachineryPkgApisMetaV1;
