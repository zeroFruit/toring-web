import { Action, handleActions } from "redux-actions";
import {
    FETCH_STORYBOOKS_STARTED,
    FETCH_STORYBOOKS_COMPLETED,
    SELECT_STORYBOOK,
    READ_STORYBOOK
} from "./actions";
import { ID, StorybookProps, StorybooksState } from "./index";
import { List } from "immutable";
import mockStorybookList from "../../../../data/mock/mockStorybookList";

export const ErrStorybookNotFound = new Error("error storybook not found");

const initialState = new StorybooksState({
    storybooks: mockStorybookList
});

export default handleActions<StorybooksState, any>(
    {
        [FETCH_STORYBOOKS_STARTED]: (state): StorybooksState => {
            return state;
        },
        [FETCH_STORYBOOKS_COMPLETED]: (
            state,
            action: Action<List<StorybookProps>>
        ): StorybooksState => {
            return state.withMutations(s => {
                console.log("This is action");
                return s.set(
                    "storybooks",
                    List<StorybookProps>(action.payload as List<StorybookProps>)
                );
            }) as StorybooksState;
        },
        [SELECT_STORYBOOK]: (state, action: Action<ID>) => {
            return state.withMutations(s => {
                const selectedStorybook = findByID(s.get("storybooks"), action.payload as ID);
                console.log("selectedStorybook", selectedStorybook);
                if (selectedStorybook === undefined) {
                    return s.set("error", ErrStorybookNotFound);
                }

                return s.set("selectedStorybook", selectedStorybook);
            }) as StorybooksState;
        },
        [READ_STORYBOOK]: (state, action: Action<ID>) => {
            return state.withMutations(s => {
                const readStorybook = findByID(s.get("storybooks"), action.payload as ID);

                if (readStorybook === undefined) {
                    return s.set("error", ErrStorybookNotFound);
                }

                return s.set("readStorybook", readStorybook);
            }) as StorybooksState;
        }
    },
    initialState
);

export function findByID(storybookList: List<StorybookProps>, storybookID: ID): StorybookProps {
    const storybooks = storybookList.filter((storybook: StorybookProps) => {
        return storybook.get("storybookID") === storybookID;
    });

    return storybooks.get(0);
}
