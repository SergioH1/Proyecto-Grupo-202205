import { User } from '@auth0/auth0-react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IndexContext } from '../../context/index-context';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { LikeButton } from './like-button';

describe('Give the component LikeButton', () => {
    describe('when it is called', () => {
        test('should print picture', () => {
            render(<LikeButton></LikeButton>);
            const display = screen.getByAltText(/Icon/i);
            expect(display).toBeInTheDocument();
        });
    });
    describe('when the function is clicked', () => {
        test('should be call handleMatch', () => {
            const mockContext: {
                index: number;
                forward: () => void;
                user: User | undefined;
                isAuthenticated: boolean;
            } = {
                index: 1,
                forward: jest.fn(),
                user: User,
                isAuthenticated: false,
            };
            const mockContext2 = {
                prisioners: [
                    {
                        isFav: false,
                        id: 3,
                        nickname: 'sergio',
                        details: [],
                        name: 'rodrigo',
                        image: 'usr',
                        mugshot: 'url',
                    },
                ],

                addPrisioner: jest.fn(),
                deletePrisioner: jest.fn(),
                updatePrisioner: jest.fn(),
            };

            const mockContext3: {
                prisioners: iPrisoner[];
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
            };

            render(
                <IndexContext.Provider value={mockContext}>
                    <PrisionersContext.Provider value={mockContext3}>
                        <PrisionerLocalContext.Provider value={mockContext2}>
                            <LikeButton></LikeButton>
                        </PrisionerLocalContext.Provider>
                    </PrisionersContext.Provider>
                </IndexContext.Provider>
            );

            userEvent.click(screen.getByRole('button'));
            expect(mockContext.forward).not.toBeCalled();
        });
    });
});
