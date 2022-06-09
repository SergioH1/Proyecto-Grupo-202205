import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { InfoLocation } from './info-location';

describe('Given the component InfoLocation', () => {
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
            render(<InfoLocation></InfoLocation>);
            const display = screen.getByText(/Location/i);
            expect(display).toBeInTheDocument();
        });
        test('should print', () => {
            render(
                <PrisionersContext.Provider value={context}>
                    <InfoLocation></InfoLocation>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/alabama/i);
            expect(display).toBeInTheDocument();
        });
    });
});
