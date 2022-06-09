import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { getPrisioners } from '../services/http-store-prisioners';
import { PrisionersContext } from './prisioner-context';
import { PrisionerContextProvider } from './prisioner-provider';

jest.mock('../services/http-store-prisioners');

const mockPrisioners: {
    status: number;
    next_page: number;
    records: Array<{
        county_state: string;
        name: string;
        charges: [string];
        id: number;
        source: string;
        details: Array<[string, string | number]>;
        mugshot: string;
        book_date: string;
        source_id: string;
        more_info_url: string;
    }>;
} = {
    status: 0,
    next_page: 0,
    records: [
        {
            county_state: 'Maricopa County',
            name: 'Trevon',
            charges: [''],
            id: 0,
            source: '',
            details: [['', 0]],
            mugshot: '',
            book_date: '',
            source_id: '',
            more_info_url: '',
        },
    ],
};

describe('first', () => {
    beforeAll(() => {});

    test('renders personajes from context', async () => {
        (getPrisioners as jest.Mock).mockResolvedValue(mockPrisioners);

        const TestComponent = function () {
            const { prisioners } = useContext(PrisionersContext);

            return (
                <>
                    <p>buscando prisioneros</p>
                    <ul>
                        {prisioners.map((item) => (
                            <li key={item.name}>{item.county_state}</li>
                        ))}
                    </ul>
                </>
            );
        };
        render(
            <PrisionerContextProvider>
                <TestComponent></TestComponent>
            </PrisionerContextProvider>
        );

        const element = screen.getByText(/buscando prisioneros/i);
        expect(element).toBeInTheDocument();
        const element2 = await screen.findByText(/Maricopa/i);
        expect(element2).toBeInTheDocument();
    });
});
