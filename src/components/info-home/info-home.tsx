import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoHome() {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];
    let template = (
        <div className="container_title">
            <h2 className="title-name">
                {prisioners.length && prisioner.name?.toLocaleLowerCase()},
                {prisioners.length && prisioner.details[2][1]}
            </h2>
            <h3 className="title-location">
                {prisioners.length && prisioner.county_state}
            </h3>
        </div>
    );
    return template;
}
