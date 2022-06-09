import { screen, render } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { InfoHome } from './info-home';

describe('Given the component InfoHome', () => {
    const mockPrisioners: {
        prisioners: iPrisoner[];
    } = {
        prisioners: [
            {
                county_state: '',
                name: 'Pepe',
                charges: ['charges'],
                id: 0,
                source: '',
                details: [
                    ['s', 0],
                    ['3', 1],
                    ['3', 0],
                ],
                mugshot: ' string',
                book_date: '',
                source_id: '',
                more_info_url: '',
            },
        ],
    };

    describe('when it is called', () => {
        test('should print', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoHome></InfoHome>
                </PrisionersContext.Provider>
            );

            const display = screen.getByText(/Pepe/i);
            expect(display).toBeInTheDocument();
        });
    });
});
