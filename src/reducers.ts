import { combineReducers } from "redux";
import commonReducers, { ICommonReducersState } from "./data/reducers";
import scenesReducers, { IScenesReducersState } from "./scenes/reducers";

export interface IRootReducersState {
    common: ICommonReducersState;
    scenes: IScenesReducersState;
}

export default combineReducers({
    common: commonReducers,
    scenes: scenesReducers
});
