import { useContext } from 'react';
import { PrisionerLocalContext } from '../../context/local-context';
import { Card } from './card';

export function CardList() {
    const { prisioners } = useContext(PrisionerLocalContext);
    return (
        <ul className="list-matcher">
            {prisioners.map((item) => {
                return (
                    <li className="list-matches" key={item.id}>
                        <Card prisioner={item}></Card>
                    </li>
                );
            })}
        </ul>
    );
}
