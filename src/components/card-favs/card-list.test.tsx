import { screen, render } from '@testing-library/react';

import { PrisionerLocalContext } from '../../context/local-context';
import { CardList } from './card-list';

describe('Give the component Card', () => {
    const context = {
        prisioners: [
            { name: 'Juan', id: 8, image: '', isFav: false, details: [] },
        ],
        addPrisioner: jest.fn(),
        deletePrisioner: jest.fn(),
        updatePrisioner: jest.fn(),
    };

    describe('when it is called', () => {
        test('should print', () => {
            render(
                <PrisionerLocalContext.Provider value={context}>
                    <CardList></CardList>
                </PrisionerLocalContext.Provider>
            );
            const display = screen.getByText(/Juan/i);
            expect(display).toBeInTheDocument();
        });
    });
});
