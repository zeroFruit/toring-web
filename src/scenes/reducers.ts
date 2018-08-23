import { combineReducers } from "redux";
import storybookReducers from "./Home/data/storybook/reducers";
import { StorybooksState } from "./Home/data/storybook";

export interface IScenesReducersState {
    home: StorybooksState;
}

export default combineReducers({
    home: storybookReducers
});
