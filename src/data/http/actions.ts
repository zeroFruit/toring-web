import {createAction} from 'redux-actions';

export const HTTP_CALL_STARTED = 'http/HTTP_CALL_STARTED';
export const HTTP_CALL_COMPLETED ='http/HTTP_CALL_COMPLETED';

export const actionCreators = {
    start: createAction(HTTP_CALL_STARTED),
    complete: createAction(HTTP_CALL_COMPLETED),
};