import {Error} from "../error";
import {Record} from "immutable";

const HttpStateRecord = Record({
    httpCallsInProgress: false,
    numberOfCalls: 0,
    error: null
});

export class HttpState extends HttpStateRecord{
    public httpCallsInProgress: boolean;
    public numberOfCalls: number;
    public error?: Error
}