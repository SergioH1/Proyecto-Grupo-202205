import { render, screen } from '@testing-library/react';
import { NavBar } from './navbar';

describe('Given the component Footer', () => {
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<NavBar></NavBar>);
            const display = screen.getByRole(/button/);
            expect(display).toBeInTheDocument();
        });
    });
});
