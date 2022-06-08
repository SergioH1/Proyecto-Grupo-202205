import { createContext } from 'vm';
import { PrisionerModel } from '../models/prisioner-local';

let initialContext: {
    prisioners: Array<PrisionerModel>;
    getPrisioners(prisioners: Array<PrisionerModel>): void;
    deletePrisioner(prisioner: PrisionerModel): void;
    updatePrisioner(prisioner: PrisionerModel): void;
} = {
    prisioners: [],
    getPrisioners: () => {},
    deletePrisioner: () => {},
    updatePrisioner: () => {},
};
export const PrisionerLocalContext = createContext(initialContext);
