import { PrisionerModel } from '../models/prisioner-local';
import { iActionMyApi } from './action-creator-myapp';
import { actionTypesLocal } from './action-types-myapp';

export function localReducer(
    initialState: Array<PrisionerModel>,
    action: iActionMyApi
) {
    let state: Array<PrisionerModel> = [];
    switch (action.type) {
        case actionTypesLocal['prisioners@get']:
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
