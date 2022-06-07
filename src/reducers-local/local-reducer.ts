import { PrisionerModel } from '../models/prisioner-local';
import { iActionLocal } from './action-creator-local';
import { actionTypesLocal } from './action-types-local';

export function localReducer(
    initialState: Array<PrisionerModel>,
    action: iActionLocal
) {
    let state: Array<PrisionerModel> = [];
    switch (action.type) {
        case actionTypesLocal['prisioners@load']:
            state = action.payload;
            break;
        case actionTypesLocal['prisioners@add']:
            state = [...initialState, action.payload];
            break;
        case actionTypesLocal['prisioners@update']:
            state = initialState.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            break;
        case actionTypesLocal['prisioners@delete']:
            state = initialState.filter(
                (item) => item.id !== action.payload.id
            );
            break;
        default:
            state = initialState;
    }
    return state;
}
