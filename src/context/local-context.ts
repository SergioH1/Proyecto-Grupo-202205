import { PrisionerModel } from '../models/prisioner-local';

let initialContext: {
    prisioners: Array<PrisionerModel>;
    addPrisioner(prisioner: PrisionerModel): void;
    deletePrisioner(prisioner: PrisionerModel): void;
};
