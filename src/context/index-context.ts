import { createContext } from 'react';

let initialContext: {
    index: number;
    forward: () => void;
} = {
    index: 0,
    forward: () => {},
};
export const IndexContext = createContext(initialContext);
