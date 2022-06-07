import { ReactElement, useEffect, useReducer } from 'react';
import { localReducer } from '../reducers-local/local-reducer';
import { HttpStoreLocal } from '../services-local/http-store-local';
import { PrisionerLocalContext } from './local-context';
import * as actions from '../reducers-local/action-creator-local';
import { PrisionerModel } from '../models/prisioner-local';

export function PrisionersLocalContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const [prisioners, dispatch] = useReducer(localReducer, []);

    const api = new HttpStoreLocal();

    useEffect(() => {
        api.getPrisioners().then((resp) => {
            dispatch(actions.loadPrisionersAction(resp));
        });
    }, []);

    const addPrisioner = (prisioner: PrisionerModel) => {
        api.addPrisioner(prisioner).then((resp) =>
            dispatch(actions.addPrisionerAction(resp))
        );
    };

    const context = { prisioners, addPrisioner };
    return (
        <PrisionerLocalContext.Provider value={context}>
            {children}
        </PrisionerLocalContext.Provider>
    );
}
