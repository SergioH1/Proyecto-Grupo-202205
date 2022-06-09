import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';

import { InfoCharges } from './info-charges';

describe('Given the component InfoCharges', () => {
    const context: {
        prisioners: Array<iPrisoner>;
    } = {
        prisioners: [
            {
                county_state: 'Alabama',
                name: 'pepe',
                charges: ['Robar un banco'],
                id: 3423,
                source: 'Alabama CS',
                details: [
                    ['age', 35],
                    ['wheight', '500kg'],
                    ['wheight', '500kg'],
                ],
                mugshot: 'img/234234',
                book_date: 'Enero',
                source_id: '2344234',
                more_info_url: 'asdasd',
            },
        ],
    };
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<InfoCharges></InfoCharges>);
            const display = screen.getByText(/Charges/i);
            expect(display).toBeInTheDocument();
        });
        test('should print', () => {
            render(
                <PrisionersContext.Provider value={context}>
                    <InfoCharges></InfoCharges>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/Robar/i);
            expect(display).toBeInTheDocument();
        });
    });
});
