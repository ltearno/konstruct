declare global {
    interface Object {
        timestamp<T>(this: T): T;
    }
}
export {};
