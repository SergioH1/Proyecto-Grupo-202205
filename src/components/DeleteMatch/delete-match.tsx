import { SyntheticEvent, useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionerLocalContext } from '../../context/local-context';

export function DeleteMatchButton() {
    const { prisioners } = useContext(PrisionerLocalContext);
    const { index } = useContext(IndexContext);
    const prisioner = prisioners[index];
    const { deletePrisioner } = useContext(PrisionerLocalContext);
    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        deletePrisioner(prisioner);
    };
    return (
        <button
            onClick={(ev) => {
                handleClick(ev);
            }}
            className="delete-button"
        >
            <img src="./svg/papelera.svg" alt="Icon of the delete button" />
        </button>
    );
}

