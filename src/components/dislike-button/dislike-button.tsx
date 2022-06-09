import { SyntheticEvent, useContext } from 'react';
import { IndexContext } from '../../context/index-context';

import './dislike-button.css';
export function DislikeButton() {
    const { forward } = useContext(IndexContext);

    const handleClick = (ev: SyntheticEvent) => {
        forward();
        ev.preventDefault();
    };
    return (
        <button
            onClick={(ev) => {
                handleClick(ev);
            }}
            className="dislike-button"
        >
            <img src="./svg/dislike.svg" alt="Icon of the like button" />
        </button>
    );
}
