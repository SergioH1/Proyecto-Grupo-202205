import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function PrisionerImage() {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];

    return (
        <img
            src={prisioners.length ? prisioner.mugshot : 'loading'}
            alt={prisioners.length ? prisioner.name : 'loading'}
        />
    );
}
