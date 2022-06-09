import { User } from '@auth0/auth0-react';
import { createContext } from 'react';

let initialContext: {
    index: number;
    forward: () => void;
    user: User | undefined;
    isAuthenticated: boolean;
} = {
    index: 0,
    user: {},
    forward: () => {},
    isAuthenticated: false,
};
export const IndexContext = createContext(initialContext);
