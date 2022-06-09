import { PrisionerModel } from '../../models/prisioner-local';
import { DeleteMatchButton } from '../DeleteMatch/delete-match';

export function Card({ prisioner }: { prisioner: PrisionerModel }) {
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
