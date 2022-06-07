import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoLocation() {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];
    return (
        <>
            <h3>Location:</h3>
            <p>{prisioners.length ? prisioner.source : 'loading'}</p>
        </>
    );
}
