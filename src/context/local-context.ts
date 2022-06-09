import { createContext } from 'react';
import { iPrisoner } from '../interface/prisioner-interface';
import { PrisionerModel } from '../models/prisioner-local';

let initialContext: {
    prisioners: Array<PrisionerModel>;
    addPrisioner(prisioner: iPrisoner): void;
    deletePrisioner(prisioner: PrisionerModel): void;
    updatePrisioner(id: PrisionerModel['id']): void;
} = {
    prisioners: [],
    addPrisioner: () => {},
    deletePrisioner: () => {},
    updatePrisioner: () => {},
};
export const PrisionerLocalContext = createContext(initialContext);
