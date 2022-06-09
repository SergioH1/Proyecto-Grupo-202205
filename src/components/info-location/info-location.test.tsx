import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { InfoLocation } from './info-location';

describe('Given the component InfoLocation', () => {
    const mockPrisioners: {
        prisioners: iPrisoner[];
        loadFiltered: () => void;
    } = {
        prisioners: [
            {
                county_state: '',
                name: 'Pepe',
                charges: ['charges'],
                id: 0,
                source: 'Maricopa',
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
        loadFiltered: jest.fn(),
    };
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<InfoLocation></InfoLocation>);
            const display = screen.getByText(/Location/i);
            expect(display).toBeInTheDocument();
        });
        test('Then it sould print source', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoLocation></InfoLocation>
                </PrisionersContext.Provider>
            );

            const display = screen.getByText(/Maricopa/i);
            expect(display).toBeInTheDocument();
        });
    });
});
