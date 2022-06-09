import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';

import { InfoCharges } from './info-charges';

describe('Given the component InfoCharges', () => {
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<InfoCharges></InfoCharges>);
            const display = screen.getByText(/Charges/i);
            expect(display).toBeInTheDocument();
        });
    });
    describe('When is called with mockPrisioners', () => {
        const mockPrisioners: {
            prisioners: iPrisoner[];
        } = {
            prisioners: [],
        };
        test('Then it sould print', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoCharges></InfoCharges>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/loading/i);
            expect(display).toBeInTheDocument();
        });
    });
    describe('When is called with mockPrisioners2', () => {
        const mockPrisioners2: {
            prisioners: iPrisoner[];
        } = {
            prisioners: [
                {
                    county_state: '',
                    name: 'Pepe',
                    charges: ['robar'],
                    id: 0,
                    source: 'Maricopa',
                    details: [
                        ['gender', 'male'],
                        ['3', 'brown'],
                        ['yes', 3],
                    ],
                    mugshot: ' string',
                    book_date: '',
                    source_id: '',
                    more_info_url: '',
                },
            ],
        };
        test('Then it sould print', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners2}>
                    <InfoCharges></InfoCharges>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/robar/i);
            expect(display).toBeInTheDocument();
        });
    });
});
