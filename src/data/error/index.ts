import {Record} from 'immutable';

const ErrorRecord = Record({
    message: ''
});

export class Error extends ErrorRecord {
    public message: string;

    constructor(message?: string) {
        if (message) {
            super({message})
        }
    }
}