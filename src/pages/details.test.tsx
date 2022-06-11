import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Details from './details';

describe('Given the component details', () => {
    describe('When is called', () => {
        test('should print', () => {
            render(
                <MemoryRouter>
                    <Details />
                </MemoryRouter>
            );
            const element = screen.getByText(/Personal information/i);
            expect(element).toBeInTheDocument();
        });
    });
});
