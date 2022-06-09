import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';

import { InfoCharges } from './info-charges';

describe('Given the component InfoCharges', () => {
    const context: {
        prisioners: Array<iPrisoner>;
        loadFiltered: () => void;
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
        loadFiltered: jest.fn(),
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
    describe('When is called with mockPrisioners', () => {
        const mockPrisioners: {
            prisioners: iPrisoner[];
            loadFiltered: () => void;
        } = {
            prisioners: [],
            loadFiltered: jest.fn(),
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
            loadFiltered: () => void;
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
            loadFiltered: jest.fn(),
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
