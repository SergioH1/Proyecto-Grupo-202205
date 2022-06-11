import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';

import Home from './home';

describe('Given the Home page', () => {
    describe('When is called', () => {
        test('should print', () => {
            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
            const element = screen.getAllByRole('button');
            expect(element).toHaveLength(5);
        });
        test('should function navigate is called', () => {
            const mocknavigate = jest.spyOn(global, 'window', 'get');
            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
            userEvent.click(screen.getByAltText(/loading/));
            expect(mocknavigate).toBeCalled();
        });
    });
});
