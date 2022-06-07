import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function PrisionerImage() {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];

    // return <img src={prisioners[0].mugshot} alt={prisioners[0].name} />;
    return <p>{prisioners.length ? prisioner.name : 'loading'}</p>;
}
