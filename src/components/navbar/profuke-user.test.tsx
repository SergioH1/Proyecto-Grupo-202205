import { render, screen } from '@testing-library/react';
import { ProfileUser } from './profile-user';

describe('Given the component ProfileUser', () => {
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<ProfileUser></ProfileUser>);
            const display = screen.getByAltText(/user/);
            expect(display).toBeInTheDocument();
        });
    });
});
