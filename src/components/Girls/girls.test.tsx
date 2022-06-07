import { screen, render } from '@testing-library/react';
import { Girls } from './girls';

describe('Give the component Girls', () => {
    describe('when it is cGirlsed', () => {
        test('should print', () => {
            render(<Girls></Girls>);
            const display = screen.getByText(/Girls/i);
            expect(display).toBeInTheDocument();
        });
        test('should print picture', () => {
            render(<Girls></Girls>);
            const display2 = screen.getByAltText(/prision/i);
            expect(display2).toBeInTheDocument();
        });
    });
});
