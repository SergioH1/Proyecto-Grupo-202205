import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './login';

describe('Given the component login page', () => {
    describe('When is called', () => {
        test('should print', () => {
            render(
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            );
            const element = screen.getByText(/Prision Dates/i);
            expect(element).toBeInTheDocument();
        });
    });
});
