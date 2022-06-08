import { SyntheticEvent, useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionersContext } from '../../context/prisioner-context';
import { PrisionerModel } from '../../models/prisioner-local';

export function LikeButton() {
    const { addPrisioner } = useContext(PrisionerLocalContext);
    const { prisioners } = useContext(PrisionersContext);
    const { index } = useContext(IndexContext);
    const prisioner = prisioners[index];

    function handleMatch(ev: SyntheticEvent) {
        ev.preventDefault();
        console.log('Guardando');
        addPrisioner(new PrisionerModel(prisioner.name, prisioner.mugshot));
    }

    return (
        <button
            className="like-button"
            onClick={(ev) => {
                handleMatch(ev);
            }}
        >
            <img src="./svg/like.svg" alt="Icon of the dislike button" />
        </button>
    );
}
