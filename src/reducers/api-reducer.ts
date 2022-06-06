import { iPrisoner } from '../interface/prisioner-interface';
import { iAction } from './action-creator';
import { actionTypes } from './action-types';

export function apiReducer(initialState: Array<iPrisoner>, action: iAction) {
    let state: Array<iPrisoner> = [];
    switch (action.type) {
        case actionTypes['prisioners@load']:
            state = action.payload;

            break;

        default:
            state = initialState;
            break;
    }
    return state;
}
