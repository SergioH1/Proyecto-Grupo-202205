import { screen, render } from '@testing-library/react';
import { Card } from './card';
import { PrisionerLocalContext } from '../../context/local-context';

describe('Give the component Card', () => {
    const context = {
        prisioners: [{ name: 'Juan', id: 8, image: '', isFav: false }],
        addPrisioner: jest.fn(),
        deletePrisioner: jest.fn(),
        updatePrisioner: jest.fn(),
    };

    describe('when it is called', () => {
        test('should print', () => {
            render(
                <PrisionerLocalContext.Provider value={context}>
                    <Card prisioner={context.prisioners[0]}></Card>
                </PrisionerLocalContext.Provider>
            );
            const display = screen.getByText(/Juan/i);
            expect(display).toBeInTheDocument();
        });
    });
});
