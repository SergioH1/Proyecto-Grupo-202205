import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoHome() {
    const { prisioners } = useContext(PrisionersContext);
    const { index } = useContext(IndexContext);
    const prisioner = prisioners[index];
    let template = (
        <div className="container_title">
            <h2 className="title-name">
                {prisioners.length && prisioner.name},
                {prisioners.length && prisioner.details[1][1]}
            </h2>
            <h3 className="title-location">
                {prisioners.length && prisioner.county_state}
            </h3>
        </div>
    );
    return template;
}
