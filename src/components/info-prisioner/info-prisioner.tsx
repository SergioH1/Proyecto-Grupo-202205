import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoPrisioner() {
    const { prisioners } = useContext(PrisionersContext);
    const { index } = useContext(IndexContext);
    const prisioner = prisioners[index];
    return (
        <>
            <h3>Personal Information:</h3>
            <p>{prisioners.length ? prisioner.details[0] : 'loading'}</p>
            <p>{prisioners.length ? prisioner.details[1] : 'loading'}</p>
            <p>{prisioners.length ? prisioner.details[2] : 'loading'}</p>
        </>
    );
}
