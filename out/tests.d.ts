import * as k8s from './kubernetes-api';
/**
 * Copy of common-helpers.ts don't know why does a runtime error on module loading if imported instead...
 */
declare global {
    interface Object {
        addDeploymentDefaultNameAndLabels<T>(this: T, name: string): T;
    }
}
export declare function nameMetadata(name: string): k8s.ObjectMetaIoK8sApimachineryPkgApisMetaV1;
declare global {
    interface Object {
        timestamp<T>(this: T): T;
    }
}
