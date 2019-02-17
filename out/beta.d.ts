/**
 * Common definitions
 *
 * There much designed to change, improve and stabilize !
 */
export declare const defaultDeployment: any;
export declare const port: (name: any, port: any, targetPort: any, protocol: any) => {
    name: any;
    port: any;
    targetPort: any;
    protocol: any;
};
export declare const tcpContainerPorts: (...ports: any[]) => {
    containerPort: any;
    protocol: string;
}[];
export declare function loadBalancer(name: any, ports: any): any;
export declare const toEnv: (spec: any) => {
    name: string;
    value: any;
}[];
export declare const deployment: (name: any) => any;
export declare const serviceAccount: (name: any) => {
    apiVersion: string;
    kind: string;
    metadata: {
        name: string;
    };
};
export declare const roleBinding: (roleBindingName: any, serviceAccountName: any, roleName: any) => {
    kind: string;
    apiVersion: string;
    metadata: {
        name: any;
    };
    subjects: {
        kind: string;
        name: any;
    }[];
    roleRef: {
        kind: string;
        name: any;
        apiGroup: string;
    };
};
