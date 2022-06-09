import { ReactElement, useEffect, useReducer } from 'react';

import { iPrisoner } from '../interface/prisioner-interface';
import { apiReducer } from '../reducers/api-reducer';
import { getPrisioners } from '../services/http-store-prisioners';
import { PrisionersContext } from './prisioner-context';
import * as actions from '../reducers/action-creator';
export function PrisionerContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: Array<iPrisoner> = [];
    const [prisioners, dispatch] = useReducer(apiReducer, initialState);

    useEffect(() => {
        getPrisioners().then((resp) => {
            dispatch(actions.loadPrisionersAction(resp.records));
        });
    }, []);

    const loadFiltered = (county: string) => {
        getPrisioners(county).then((resp) => {
            console.log(resp.records);
            console.log('Hola');
            dispatch(actions.loadPrisionersAction(resp.records));
        });
    };

    const context = { prisioners, loadFiltered };

    return (
        <PrisionersContext.Provider value={context}>
            {children}
        </PrisionersContext.Provider>
    );
}
