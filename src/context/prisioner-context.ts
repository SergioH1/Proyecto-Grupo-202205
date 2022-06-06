import { iPrisoners } from '../interface/prisioner-interface';
import { createContext } from 'react';
let initialContext: {
    prisioners: Array<iPrisoners>;
    addPrisioner(prisioner: iPrisoners): void;
    deletePrisioner(prisioner: iPrisoners): void;
    updatePrisioner(prisioner: iPrisoners): void;
} = {
    prisioners: [],
    addPrisioner: () => {},
    deletePrisioner: () => {},
    updatePrisioner: () => {},
};
export const PrisionersContext = createContext(initialContext);
