import { useContext } from 'react';
import { PrisionerLocalContext } from '../../context/local-context';
import { DeleteMatchButton } from '../DeleteMatch/delete-match';

export function Card() {
    const { prisioners } = useContext(PrisionerLocalContext);
    const prisioner = prisioners[0];
    return (
        <>
            <img src={prisioner.image} alt={prisioner.name} />
            <p>{prisioner.name}</p>
            <img
                src={prisioner.isFav ? './svg/like.svg' : ''}
                alt="like icon"
            />
            <DeleteMatchButton id={prisioner.id}></DeleteMatchButton>
        </>
    );
}
