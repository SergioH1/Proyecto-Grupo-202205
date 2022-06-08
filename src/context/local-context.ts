import { createContext } from 'vm';
import { PrisionerModel } from '../models/prisioner-local';

let initialContext: {
    prisioners: Array<PrisionerModel>;
    getPrisioners(prisioners: Array<PrisionerModel>): void;
    addPrisioner(prisioner: PrisionerModel): void;
    deletePrisioner(prisioner: PrisionerModel): void;
    updatePrisioner(prisioner: PrisionerModel): void;
} = {
    prisioners: [],
    getPrisioners: () => {},
    addPrisioner: () => {},
    deletePrisioner: () => {},
    updatePrisioner: () => {},
};
export const PrisionerLocalContext = createContext(initialContext);
