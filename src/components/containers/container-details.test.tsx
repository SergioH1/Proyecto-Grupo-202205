import { screen, render } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { ContainerDetails } from './container-details';

describe('Given the component InfoHome', () => {
    describe('when it is called', () => {
        test('should print', () => {
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
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <ContainerDetails></ContainerDetails>
                </PrisionersContext.Provider>
            );

            const display = screen.getByAltText(/pepe/i);
            expect(display).toBeInTheDocument();
        });
        test('should print loading', () => {
            const mockPrisioners: {
                prisioners: iPrisoner[];
            } = {
                prisioners: [],
            };
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <ContainerDetails></ContainerDetails>
                </PrisionersContext.Provider>
            );

            const display = screen.getByAltText(/loading/i);
            expect(display).toBeInTheDocument();
        });
    });
});
