import { SyntheticEvent, useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionersContext } from '../../context/prisioner-context';

export function LikeButton() {
    const { addPrisioner } = useContext(PrisionerLocalContext);
    const { prisioners } = useContext(PrisionersContext);
    const { forward, index, user } = useContext(IndexContext);
    const prisioner = prisioners[index];

    function handleMatch(ev: SyntheticEvent) {
        ev.preventDefault();

        const { name, mugshot, id, details } = prisioner;
        const nickname = user?.nickname;
        addPrisioner({
            name,
            mugshot,
            isFav: false,
            nickname,
            idApi: id,
            details,
        });

        forward();
    }

    return (
        <button
            className="like-button"
            onClick={(ev) => {
                handleMatch(ev);
            }}
        >
            <img
                className="like-button-img"
                src="./svg/like.svg"
                alt="Icon of the dislike button"
            />
        </button>
    );
}
