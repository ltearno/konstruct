export declare function copyObject<T>(o: any): T;
export declare function mergeObjects<T, U>(a: T, b: U): T | U;
export declare function setObjectProperty<T>(o: T, path: string, value: any): T;
declare type Optional<T> = {
    [P in keyof T]?: T[P] extends boolean ? boolean : T[P] extends string ? string : T[P] extends number ? number : T[P] extends (infer I)[] ? Optional<I>[] : Optional<T[P]>;
};
declare global {
    interface Object {
        copy<T>(this: T): T;
        set<T>(this: T, path: string, value: any): T;
        merge<T, U extends Optional<T>>(this: T, other: U): T;
        mergeAt<T>(this: T, path: string, value: any): T;
    }
}
export declare function installPlugin(func: any, name?: string): void;
export declare function preparseYaml(input: any): any;
export declare function yamlParse(input: any): any;
export declare const yamlify: (input: any) => any;
export declare const yamlifyAll: (docs: any[]) => string;
export declare const yamlParseAll: (input: any) => any;
export declare const command: (cmd: any) => string;
export declare const run: (cmd: any) => void;
export declare const env: (name: any) => string;
export {};
