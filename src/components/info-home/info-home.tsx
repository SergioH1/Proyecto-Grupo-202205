import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoHome() {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];
    let template = (
        <>
            <h2 className="title">
                {prisioners.length && prisioner.name},
                {prisioners.length && prisioner.details[1][1]}?
            </h2>
        </>
    );

    return template;
}
