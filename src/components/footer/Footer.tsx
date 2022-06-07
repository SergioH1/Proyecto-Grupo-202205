import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function Footer() {
    const { prisioners } = useContext(PrisionersContext);
    return (
        <footer>
            <small>
                Individuals are innocent until proven guilty in a court of law.
                Data is believed to be reliable but is provided. Contact the
                appropriate governmental agency to verify.
            </small>
        </footer>
    );
}
