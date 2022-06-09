import { screen, render } from '@testing-library/react';
import { Card } from './card';
import { PrisionerLocalContext } from '../../context/local-context';
import { PrisionerModel } from '../../models/prisioner-local';

describe('Give the component Card', () => {
    const context: {
        prisioners: Array<PrisionerModel>;
        addPrisioner(prisioner: PrisionerModel): void;
        deletePrisioner(prisioner: PrisionerModel): void;
        updatePrisioner(prisioner: PrisionerModel): void;
    } = {
        prisioners: [{ name: 'Juan', id: 8, image: '', isFav: false }],
        addPrisioner: () => {},
        deletePrisioner: () => {},
        updatePrisioner: () => {},
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
