import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoName() {
    const { index } = useContext(IndexContext);
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[index];
    return (
        <>
            <h2>{prisioners.length ? prisioner.name : 'loading'}</h2>
            <p>{prisioners.length ? prisioner.details[2][1] : 'loading'}</p>
            <p>{prisioners.length ? prisioner.county_state : 'loading'}</p>
        </>
    );
}
