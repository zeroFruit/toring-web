import { takeLatest, fork, all } from "redux-saga/effects";
import { fetchStorybooks } from "./storybooksSaga";
import { FETCH_STORYBOOKS_STARTED } from "scenes/Home/data/storybook/actions";

function* watchLoadStorybooksRequest() {
    yield takeLatest(FETCH_STORYBOOKS_STARTED, fetchStorybooks);
}

export default function* rootSaga() {
    yield all([fork(watchLoadStorybooksRequest)]);
}
