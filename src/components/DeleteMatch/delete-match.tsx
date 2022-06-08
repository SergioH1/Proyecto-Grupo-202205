import { SyntheticEvent, useContext } from 'react';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionerModel } from '../../models/prisioner-local';

export function DeleteMatchButton({ id }: { id: number }) {
    const { prisioners, deletePrisioner } = useContext(PrisionerLocalContext);
    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const deletedPrisioner = prisioners.find(
            (prisioner) => prisioner.id === id
        ) as PrisionerModel;
        deletePrisioner(deletedPrisioner);
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
