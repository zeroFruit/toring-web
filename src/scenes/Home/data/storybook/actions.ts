import { createAction } from "redux-actions";
import { StorybookProps, ID } from "./index";
import { List } from "immutable";

export const FETCH_STORYBOOKS_STARTED = "storybook/FETCH_STORYBOOKS_STARTED";
export const FETCH_STORYBOOKS_COMPLETED = "storybook/FETCH_STORYBOOKS_COMPLETED";
export const SELECT_STORYBOOK = "storybook/SELECT_STORYBOOK";
export const READ_STORYBOOK = "storybook/READ_STORYBOOK";

export const actionCreators = {
    // fetchStart: createAction(FETCH_STORYBOOKS_STARTED),
    fetchStart: () => {
        return {
            type: FETCH_STORYBOOKS_STARTED
        };
    },
    fetchComplete: createAction<List<StorybookProps>>(FETCH_STORYBOOKS_COMPLETED),
    select: createAction<ID>(SELECT_STORYBOOK),
    read: createAction<ID>(READ_STORYBOOK)
};
