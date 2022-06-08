import { SyntheticEvent, useContext } from 'react';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionersContext } from '../../context/prisioner-context';
import { PrisionerModel } from '../../models/prisioner-local';
import './dislike-button.css';
export function DislikeButton() {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];
    const { deletePrisioner } = useContext(PrisionerLocalContext);
    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        deletePrisioner(new PrisionerModel(prisioner.name, prisioner.mugshot));
    };
    return (
        <button onClick={handleClick} className="dislike-button">
            <img src="./svg/dislike.svg" alt="Icon of the like button" />
        </button>
    );
}
