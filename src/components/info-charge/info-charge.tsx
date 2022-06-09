import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoCharge({ charges }: { charges: Array<string> }) {
    return (
        <>
            {charges.map((charge) => {
                return <p key={charge}>{charge}</p>;
            })}
        </>
    );
}
