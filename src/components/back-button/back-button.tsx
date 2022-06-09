import { SyntheticEvent } from 'react';

export function BackButton() {
    function goBack(ev: SyntheticEvent) {
        ev.preventDefault();
        window.history.back();
    }
    return (
        <button onClick={goBack}>
            <img src="./svg/flecha-back.svg" alt="" />
        </button>
    );
}
