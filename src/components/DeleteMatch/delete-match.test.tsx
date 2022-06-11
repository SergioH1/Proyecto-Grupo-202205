import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PrisionerLocalContext } from '../../context/local-context';
import { DeleteMatchButton } from './delete-match';

describe('Give the component LikeButton', () => {
    describe('when it is called', () => {
        test('should print picture', () => {
            render(<DeleteMatchButton id={2}></DeleteMatchButton>);
            const display = screen.getByAltText(/delete/i);
            expect(display).toBeInTheDocument();
        });
        test('should function delete is called', () => {
            const mockContext = {
                prisioners: [
                    {
                        isFav: false,
                        id: 2,
                        nickname: 'pepito',
                        details: [],
                        name: 'pepito de los palotes',
                        image: 'aqui la imagen',
                        mugshot: 'url',
                    },
                ],
                addPrisioner: jest.fn(),
                deletePrisioner: jest.fn(),
                updatePrisioner: jest.fn(),
            };

            render(
                <PrisionerLocalContext.Provider value={mockContext}>
                    <DeleteMatchButton id={2}></DeleteMatchButton>
                </PrisionerLocalContext.Provider>
            );
            userEvent.click(screen.getByRole('button'));
            expect(mockContext.deletePrisioner).toBeCalled();
        });
    });
});
