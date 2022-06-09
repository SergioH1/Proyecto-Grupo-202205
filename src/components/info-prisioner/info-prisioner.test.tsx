import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { InfoPrisioner } from './info-prisioner';

describe('Given the component InfoPrisioner', () => {
    const mockPrisioners: {
        prisioners: iPrisoner[];
    } = {
        prisioners: [
            {
                county_state: '',
                name: 'Pepe',
                charges: ['charges'],
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
    describe('When is called', () => {
        test('Then it sould details[0]', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoPrisioner></InfoPrisioner>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/male/i);
            expect(display).toBeInTheDocument();
        });
        test('Then it sould print details[1]', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoPrisioner></InfoPrisioner>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/brown/);
            expect(display).toBeInTheDocument();
        });
        test('Then it sould print details[2]', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoPrisioner></InfoPrisioner>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/yes/i);
            expect(display).toBeInTheDocument();
        });
    });
});
