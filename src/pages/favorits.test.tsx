import { render, screen } from '@testing-library/react';
import Favorits from './favorits';

describe('Given the favorits page', () => {
    describe('When is called', () => {
        test('should print', () => {
            render(<Favorits />);
            const element = screen.getByText(/MATCHES/);
            expect(element).toBeInTheDocument();
        });
    });
});
