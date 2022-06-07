import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Given the component Footer', () => {
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<Footer></Footer>);
            const display = screen.getByText(/Individuals/i);
            expect(display).toBeInTheDocument();
        });
    });
});
