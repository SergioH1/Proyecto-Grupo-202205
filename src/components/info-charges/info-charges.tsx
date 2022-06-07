import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoCharges() {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];
    return (
        <>
            <h3>Charges</h3>
            {prisioners.length
                ? prisioner.charges.map(() => {
                      return <p key={prisioner.id}>{prisioner.charges}</p>;
                  })
                : 'loading'}
        </>
    );
}
