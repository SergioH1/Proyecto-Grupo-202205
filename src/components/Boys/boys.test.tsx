import { screen, render } from '@testing-library/react';
import { Boys } from './boys';

describe('Give the component Boys', () => {
    describe('when it is called', () => {
        test('should print', () => {
            render(<Boys></Boys>);
            const display = screen.getByText(/Boys/i);
            expect(display).toBeInTheDocument();
        });
        test('should print picture', () => {
            render(<Boys></Boys>);
            const display2 = screen.getByAltText(/prision/i);
            expect(display2).toBeInTheDocument();
        });
    });
});
