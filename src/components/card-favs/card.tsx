import { useContext } from 'react';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionerModel } from '../../models/prisioner-local';
import { DeleteMatchButton } from '../DeleteMatch/delete-match';

export function Card({ prisioner }: { prisioner: PrisionerModel }) {
    const { prisioners } = useContext(PrisionerLocalContext);
    return (
        <>
            <img src={prisioner.mugshot} alt={prisioner.name} />
            <p>{prisioner.name}</p>
            <img
                src={prisioner.isFav ? './svg/like.svg' : ''}
                alt="like icon"
            />
            <DeleteMatchButton id={prisioner.id}></DeleteMatchButton>
        </>
    );
}
