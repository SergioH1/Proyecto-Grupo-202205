
import { createContext } from 'react';
import { PrisionerModel } from '../models/prisioner-local';

let initialContext: {
    prisioners: Array<PrisionerModel>;
    addPrisioner(prisioner: PrisionerModel): void;
    deletePrisioner(prisioner: PrisionerModel): void;
    updatePrisioner(prisioner: PrisionerModel): void;
} = {
    prisioners: [],
    addPrisioner: () => {},
    deletePrisioner: () => {},
    updatePrisioner: () => {},
};
export const PrisionerLocalContext = createContext(initialContext);