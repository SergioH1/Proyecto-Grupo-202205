import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { InfoHome } from './info-home';

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
        test('should print', () => {
            render(
                <PrisionersContext.Provider value={context}>
                    <InfoHome></InfoHome>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/pepe/i);
            expect(display).toBeInTheDocument();
        });
    });
});
