import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionersContext } from '../../context/prisioner-context';

export function PrisionerImage() {
    const { index } = useContext(IndexContext);
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[index];
    console.log(prisioners);
    console.log(index);
    return (
        <img
            src={prisioners.length ? prisioner.mugshot : 'loading'}
            alt={prisioners.length ? prisioner.name : 'loading'}
        />
    );
}
