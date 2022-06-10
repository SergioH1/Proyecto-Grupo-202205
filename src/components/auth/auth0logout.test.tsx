import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './auth0logout';

jest.mock('@auth0/auth0-react');
describe('Given the function LogOutButton', () => {
    describe('When calling it', () => {
        test('should first', () => {
            const user1 = {};

            (useAuth0 as jest.Mock).mockReturnValue({
                user1,
                logout: jest.fn(),
                isAuthenticated: Boolean,
                loginWithRedirect: jest.fn(),
            });

            render(<LogoutButton />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            expect(useAuth0().logout).toHaveBeenCalled();
        });
    });
});
