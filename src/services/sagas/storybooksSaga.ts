import { List } from "immutable";
import { put, call } from "redux-saga/effects";
import { actionCreators as http } from "data/http/actions";
import { actionCreators as storybook } from "scenes/Home/data/storybook/actions";
import storybookApi from "services/api/storybookApi";
import { Results } from "../api";
import { StorybookProps } from "../../scenes/Home/data/storybook";
import { Action } from "redux";

export function* fetchStorybooks(action: Action) {
    yield put(http.start());

    const response: Results<List<StorybookProps>, any> = yield call(storybookApi.getAll);
    yield put(storybook.fetchComplete(response.get("data").get("data") as List<StorybookProps>));
    yield put(http.complete());
}
