import { iPrisoner } from '../interface/prisioner-interface';
import { createContext } from 'react';
let initialContext: {
    prisioners: Array<iPrisoner>;
} = {
    prisioners: [],
};
export const PrisionersContext = createContext(initialContext);
