import { PrisionerModel } from '../../models/prisioner-local';

export function Card({ prisioner }: { prisioner: PrisionerModel }) {
    return (
        <>
            <img src={prisioner.image} alt={prisioner.name} />
            <p>{prisioner.name}</p>
            <img
                src={prisioner.isFav ? './svg/like.svg' : ''}
                alt="like icon"
            />
        </>
    );
}
