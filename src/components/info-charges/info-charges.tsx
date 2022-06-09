import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionersContext } from '../../context/prisioner-context';
import { InfoCharge } from '../info-charge/info-charge';

export function InfoCharges() {
    const { prisioners } = useContext(PrisionersContext);
    const { index } = useContext(IndexContext);
    const prisioner = prisioners[index];
    return (
        <>
            <h3>Charges</h3>
            {prisioners.length ? (
                <InfoCharge charges={prisioner.charges}></InfoCharge>
            ) : (
                'load'
            )}
        </>
    );
}
