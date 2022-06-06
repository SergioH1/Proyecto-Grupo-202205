import { iPrisoner } from '../interface/prisioner-interface';
import { actionTypes } from './action-types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}
export const loadPrisionersAction = (
    prisioners: Array<iPrisoner>
): iAction => ({
    type: actionTypes['prisioners@load'],
    payload: prisioners,
});
