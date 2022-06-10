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
            const mockUser = {
                nickname: 'sergio',
            };
            const mockContext: {
                index: number;
                forward: () => void;
                user: {};
                isAuthenticated: boolean;
            } = {
                index: 0,
                forward: jest.fn(),
                user: mockUser,
                isAuthenticated: false,
            };
            const mockContext2 = {
                prisioners: [],

                addPrisioner: jest.fn(),
                deletePrisioner: jest.fn(),
                updatePrisioner: jest.fn(),
            };

            const mockContext3: {
                prisioners: iPrisoner[];
                loadFiltered: () => void;
            } = {
                prisioners: [
                    {
                        name: 'Pepe',
                        details: [],
                    },
                ],
                loadFiltered: jest.fn(),
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

            expect(mockContext.forward).toBeCalled();
            expect(mockContext2.addPrisioner).toBeCalled();
        });
    });
});
