import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoName() {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];
    return (
        <>
            <h2>{prisioners.length ? prisioner.name : 'loading'}</h2>
            <p>{prisioners.length ? prisioner.details[2][1] : 'loading'}</p>
            <p>{prisioners.length ? prisioner.county_state : 'loading'}</p>
        </>
    );
}
