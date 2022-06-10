import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionersContext } from '../../context/prisioner-context';

export function InfoName() {
    const { index } = useContext(IndexContext);
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[index];
    return (
        <>
            <h2 className="title-prisioner">
                {prisioners.length ? prisioner.name : 'loading'}
            </h2>
            <p className="age-prisioner">
                {prisioners.length ? prisioner.details[2][1] : 'loading'}
            </p>
            <p className="pagra-prisioner">
                {prisioners.length ? prisioner.county_state : 'loading'}
            </p>
        </>
    );
}
