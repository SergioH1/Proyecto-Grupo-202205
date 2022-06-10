import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PrisionerLocalContext } from '../../context/local-context';
import { SuperFavButton } from './superFav-button';

describe('Give the component SuperFavButton', () => {
    describe('when it is called', () => {
        test('should print icon', () => {
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

            const mockPrisioner = [
                {
                    isFav: true,
                    id: 3,
                    details: [],
                    name: 'pedro',
                    image: 'img',
                },
            ];
            render(
                <PrisionerLocalContext.Provider value={mockContext}>
                    <SuperFavButton
                        prisioner={mockPrisioner[0]}
                        updatePrisioner={mockContext.updatePrisioner}
                    ></SuperFavButton>
                </PrisionerLocalContext.Provider>
            );
            userEvent.click(screen.getByAltText(/Super/i));
            expect(mockContext.updatePrisioner).toHaveBeenCalled();
        });
    });
});
