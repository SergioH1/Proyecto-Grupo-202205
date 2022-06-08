import { SyntheticEvent, useContext } from 'react';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionerModel } from '../../models/prisioner-local';

export function DeleteMatchButton() {
    const { prisioners } = useContext(PrisionerLocalContext);
    const prisioner = prisioners[0];
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
