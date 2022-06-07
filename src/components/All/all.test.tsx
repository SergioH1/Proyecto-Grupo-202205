import { screen, render } from '@testing-library/react';
import { All } from './all';

describe('Give the component All', () => {
    describe('when it is called', () => {
        test('should print', () => {
            render(<All></All>);
            const display = screen.getByText(/All/i);
            expect(display).toBeInTheDocument();
        });
        test('should print picture', () => {
            render(<All></All>);
            const display2 = screen.getByAltText(/prision/i);
            expect(display2).toBeInTheDocument();
        });
    });
});
