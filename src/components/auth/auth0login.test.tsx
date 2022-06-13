import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';

import Auth0Login from './auth0login';

jest.mock('@auth0/auth0-react');
describe('Given the function LogOutButton', () => {
    describe('When calling it', () => {
        test('should first', () => {
            (useAuth0 as jest.Mock).mockReturnValue({
                loginWithRedirect: jest.fn(),
            });

            render(<Auth0Login />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            expect(useAuth0().loginWithRedirect).toHaveBeenCalled();
        });
    });
});
