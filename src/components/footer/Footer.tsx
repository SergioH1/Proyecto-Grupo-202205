import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function Footer() {
    const { prisioners } = useContext(PrisionersContext);
    return (
        <footer>
            <small>
                Las personas que se muestran son inocentes hasta que se
                demuestre lo contrario
            </small>
            {prisioners.length ? <p>{prisioners[0].name}</p> : <p>Loading</p>}
        </footer>
    );
}
