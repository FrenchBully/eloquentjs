export interface IAttributes {
    [key: string]: any;
}
export interface ICollectionMeta {
    pagination: IPagination;
}
export interface IModelRequestOptions {
    id?: number | string;
    includes?: string[];
}
export interface IModelRequestQueryParams {
    [key: string]: any;
}
export interface IPagination {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links?: any;
}
export interface ISortOptions {
    key: string;
    reverse?: boolean;
}
export interface IDispatcher {
    trigger: (eventName: string, data?: any) => any;
    dispatch: (eventName: string, data?: any) => any;
    on: (eventName: string, callback: (data?: any) => void) => any;
    off: (eventName: string, callback?: any) => any;
}
