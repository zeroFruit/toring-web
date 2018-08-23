import {handleActions} from "redux-actions";
import {
    HTTP_CALL_STARTED,
    HTTP_CALL_COMPLETED,
} from "./actions";
import {Error} from "../error";
import {
    HttpState
} from "./index";

export const ErrNumOfCalls = new Error('Error number of calls');

const initialState = new HttpState();

export default handleActions<HttpState, any>({
    [HTTP_CALL_STARTED]: (state): HttpState => {
        return state.withMutations(s => {
            const numOfCalls = s.get('numberOfCalls') + 1;

            s.set('numberOfCalls', numOfCalls)
            s.set('httpCallsInProgress', true);
        }) as HttpState;
    },
    [HTTP_CALL_COMPLETED]: (state): HttpState => {
        return state.withMutations(s => {
            let numOfCalls = s.get('numberOfCalls') - 1;
            if (numOfCalls < 0) {
                s.set('error', ErrNumOfCalls)
                numOfCalls = 0;
            }

            const callInProgress = numOfCalls > 0;

            s.set('numberOfCalls', numOfCalls)
            s.set('httpCallsInProgress', callInProgress)
        }) as HttpState;
    },
}, initialState);
