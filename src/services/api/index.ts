import axios from "axios";
import { Record } from "immutable";
import { Error } from "data/error";

type ApiUrl = string;

export const STATUS_OK = 200;

export const URL: ApiUrl = "http://localhost:8080";

export interface IResponseParams<T, U> {
    data: T;
    headers?: U;
    status?: number;
}

const ResponseRecord = Record({
    data: {},
    headers: {},
    status: 0
});
export class Response<T, U> extends ResponseRecord {
    public data: T;
    public headers?: U;
    public status?: number;
    constructor(params: IResponseParams<T, U>) {
        super({ ...params });
    }
}

interface IResultsParams<T, U> {
    data?: Response<T, U>;
    error?: Error;
}
const ResultsRecord = Record({
    data: {},
    error: null
});
export class Results<T, U> extends ResultsRecord {
    public data?: Response<T, U>;
    public error?: Error;
    constructor(params: IResultsParams<T, U>) {
        super({ ...params });
    }
}

export function getResponse<T, U>(res: any): Response<T, U> {
    return new Response<T, U>({
        data: res.data as T,
        headers: res.header as U,
        status: res.status as number
    });
}

export const requests = {
    get: async <T, U>(rootUrl: ApiUrl, route: string, config = {}) => {
        const response = await axios.get(`${rootUrl}${route}`, config);
        return getResponse<T, U>(response);
    },
    post: async <T, U>(rootUrl: ApiUrl, route: string, body = {}, config = {}) => {
        const response = await axios.post(`${rootUrl}${route}`, body, config);
        return getResponse<T, U>(response);
    },
    put: async <T, U>(rootUrl: ApiUrl, route: string, config = {}) => {
        const response = await axios.put(`${rootUrl}${route}`, config);
        return getResponse<T, U>(response);
    },
    delete: async <T, U>(rootUrl: ApiUrl, route: string, config = {}) => {
        const response = await axios.delete(`${rootUrl}${route}`, config);
        return getResponse<T, U>(response);
    }
};
