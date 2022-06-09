import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { InfoName } from './info-name';

describe('Given the component InfoName', () => {
    const mockPrisioners: {
        prisioners: iPrisoner[];
        loadFiltered: () => void;
    } = {
        prisioners: [
            {
                county_state: 'Miami',
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

    test('Then it sould print source', () => {
        render(
            <PrisionersContext.Provider value={mockPrisioners}>
                <InfoName></InfoName>
            </PrisionersContext.Provider>
        );

        const display = screen.getByText(/Pepe/i);
        expect(display).toBeInTheDocument();
    });
    test('Then it sould print country', () => {
        render(
            <PrisionersContext.Provider value={mockPrisioners}>
                <InfoName></InfoName>
            </PrisionersContext.Provider>
        );

        const display = screen.getByText(/Miami/i);
        expect(display).toBeInTheDocument();
    });
    test('Then it sould print loading', () => {
        const mockPrisioners2: {
            prisioners: iPrisoner[];
            loadFiltered: () => void;
        } = {
            prisioners: [],
            loadFiltered: jest.fn(),
        };

        render(
            <PrisionersContext.Provider value={mockPrisioners2}>
                <InfoName></InfoName>
            </PrisionersContext.Provider>
        );

        const display = screen.getAllByText(/loading/i);
        expect(display).toHaveLength(3);
    });
});
