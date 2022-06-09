import { iPrisoner } from '../interface/prisioner-interface';
import { createContext } from 'react';
let initialContext: {
    prisioners: Array<iPrisoner>;
    loadFiltered: (county: string) => void;
} = {
    prisioners: [],
    loadFiltered: (county: string) => {},
};
export const PrisionersContext = createContext(initialContext);
