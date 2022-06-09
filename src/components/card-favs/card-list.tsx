import { useContext } from 'react';
import { PrisionerLocalContext } from '../../context/local-context';
import { Card } from './card';

export function CardList() {
    const { prisioners } = useContext(PrisionerLocalContext);
    return (
        <ul>
            {prisioners.map((item) => {
                return (
                    <li key={item.id}>
                        <Card prisioner={item}></Card>
                    </li>
                );
            })}
        </ul>
    );
}
