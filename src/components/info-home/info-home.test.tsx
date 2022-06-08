import { screen, render } from '@testing-library/react';
import { useContext } from 'react';
import { PrisionersContext } from '../../context/prisioner-context';
import { PrisionerContextProvider } from '../../context/prisioner-provider';
import { InfoHome } from './info-home';

describe('Given the component InfoHome', () => {
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[0];
    describe('when it is called', () => {
        test('should print', () => {
            render(
                <PrisionerContextProvider>
                    <InfoHome></InfoHome>
                </PrisionerContextProvider>
            );
            const display = screen.getByText(prisioner.name);
            expect(display).toBeInTheDocument();
        });
    });
});
