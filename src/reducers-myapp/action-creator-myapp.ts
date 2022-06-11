import { PrisionerModel } from '../models/prisioner-local';
import { actionTypesLocal } from './action-types-myapp';

export interface iActionMyApi {
    type: actionTypesLocal;
    payload?: any;
}
export const loadPrisionersAction = (
    prisioners: Array<PrisionerModel>
): iActionMyApi => ({
    type: actionTypesLocal['prisioners@get'],
    payload: prisioners,
});

export const addPrisionerAction = (
    prisioner: PrisionerModel
): iActionMyApi => ({
    type: actionTypesLocal['prisioners@add'],
    payload: prisioner,
});

export const updatePrisionerAction = (
    prisioner: PrisionerModel
): iActionMyApi => ({
    type: actionTypesLocal['prisioners@update'],
    payload: prisioner,
});

export const deletePrisionerAction = (
    prisioner: PrisionerModel
): iActionMyApi => ({
    type: actionTypesLocal['prisioners@delete'],
    payload: prisioner,
});
