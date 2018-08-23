import {actionCreators} from "./actions";
import httpReducers, {ErrNumOfCalls} from './reducers';
import {HttpState} from "./index";
import {Action} from "redux-actions";

describe('http', () => {
    describe('reducers', () => {
        let state: any;

        beforeEach(() => {
            state = httpReducers(new HttpState(), {} as Action<any>);
        });

        describe('initialState', () => {
            it('should return inital state', () => {
                expect(state.numberOfCalls).toEqual(0);
                expect(state.error).toBeNull();
                expect(state.httpCallsInProgress).toBeFalsy();
            });
        });
        describe('HTTP_CALL_STARTED', () => {
            it('should successfully update http state', () => {
                state = httpReducers(state, actionCreators.start());

                expect(state.numberOfCalls).toEqual(1);
                expect(state.error).toBeNull();
                expect(state.httpCallsInProgress).toBeTruthy();
            });
        });

        describe('HTTP_CALL_COMPLETED', () => {
            it('should set error when number of calls is minus', () => {
                state = httpReducers(state, actionCreators.complete());

                expect(state.numberOfCalls).toEqual(0);
                expect(state.error).toEqual(ErrNumOfCalls);
                expect(state.httpCallsInProgress).toBeFalsy();
            });

            it('should successfully update http state', () => {
                state = httpReducers(state, actionCreators.start());
                state = httpReducers(state, actionCreators.complete());

                expect(state.numberOfCalls).toEqual(0);
                expect(state.error).toBeNull();
                expect(state.httpCallsInProgress).toBeFalsy();
            });
        });
    });
});