import { combineReducers } from "redux";
import httpReducers from "./http/reducers";
import { HttpState } from "./http";

export interface ICommonReducersState {
    http: HttpState;
}

export default combineReducers({
    http: httpReducers
});
