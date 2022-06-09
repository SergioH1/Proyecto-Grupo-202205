import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';

import Auth0Login from './auth0login';

jest.mock('@auth0/auth0-react');
describe('Given the function LogOutButton', () => {
    describe('When calling it', () => {
        test('should first', () => {
            const user1 = {
                email: 'j@gmail.com',
                email_verified: true,
                family_name: 'R',
                given_name: 'sergio',
                locale: 'es',
                name: 'sergio H ',
                nickname: 'Seh',
                picture: '',
                sub: '',
                updated_at: '2022-02-19T14:40:50.296Z',
            };

            (useAuth0 as jest.Mock).mockReturnValue({
                user1,
                logout: jest.fn(),
                isAuthenticated: Boolean,
                loginWithRedirect: jest.fn(),
            });

            render(<Auth0Login />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            expect(useAuth0().loginWithRedirect).toHaveBeenCalled();
        });
    });
});
