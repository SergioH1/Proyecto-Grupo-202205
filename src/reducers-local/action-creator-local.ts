import { PrisionerModel } from '../models/prisioner-local';
import { actionTypesLocal } from './action-types-local';

export interface iActionLocal {
    type: actionTypesLocal;
    payload?: any;
}
export const loadPrisionersAction = (
    prisioners: Array<PrisionerModel>
): iActionLocal => ({
    type: actionTypesLocal['prisioners@load'],
    payload: prisioners,
});

export const addPrisionerAction = (
    prisioner: PrisionerModel
): iActionLocal => ({
    type: actionTypesLocal['prisioners@add'],
    payload: prisioner,
});

export const updateTaskAction = (prisioner: PrisionerModel): iActionLocal => ({
    type: actionTypesLocal['prisioners@update'],
    payload: prisioner,
});

export const deleteTaskAction = (prisioner: PrisionerModel): iActionLocal => ({
    type: actionTypesLocal['prisioners@delete'],
    payload: prisioner,
});
