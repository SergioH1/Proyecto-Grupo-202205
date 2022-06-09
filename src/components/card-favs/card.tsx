import { useContext } from 'react';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionerModel } from '../../models/prisioner-local';
import { DeleteMatchButton } from '../DeleteMatch/delete-match';
import { SuperFavButton } from '../superFav-button/superFav-button';

export function Card({ prisioner }: { prisioner: PrisionerModel }) {
    const { updatePrisioner } = useContext(PrisionerLocalContext);
    return (
        <>
            <img src={prisioner.mugshot} alt={prisioner.name} />
            <p>{prisioner.name}</p>
            <div className="matches-buttons">
                <SuperFavButton
                    prisioner={prisioner}
                    updatePrisioner={updatePrisioner}
                ></SuperFavButton>
                <DeleteMatchButton id={prisioner.id}></DeleteMatchButton>
            </div>
        </>
    );
}
