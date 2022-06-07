import { ReactElement, useEffect, useReducer } from 'react';
import { localReducer } from '../reducers-local/local-reducer';
import { HttpStoreLocal } from '../services-local/http-store-local';
import { PrisionerLocalContext } from './local-context';
import * as actions from '../reducers-local/action-creator-local';

export function PrisionersLocalContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const [prisioners, dispatch] = useReducer(localReducer, []);

    const favPrisioners = new HttpStoreLocal();
    useEffect(() => {
        favPrisioners.getPrisioners().then((resp) => {
            dispatch(actions.loadPrisionersAction(resp));
        });
    }, []);

    const addPrisioner = 

    const context = { prisioners };
    return (
        <PrisionerLocalContext.Provider value={context}>
            {children}
        </PrisionerLocalContext.Provider>
    );
}
