import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Selector from './selector';

describe('Given the component details', () => {
    describe('When is called', () => {
        test('should print', () => {
            render(
                <MemoryRouter>
                    <Selector />
                </MemoryRouter>
            );
            const element = screen.getByText(/Arizona/i);
            expect(element).toBeInTheDocument();
        });
    });
});
