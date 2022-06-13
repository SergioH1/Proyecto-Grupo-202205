import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BackButton } from './back-button';

describe('Given the component back-button', () => {
    describe('when it is called', () => {
        test('it should print the button', () => {
            render(<BackButton></BackButton>);
            const display = screen.getByRole('button');
            expect(display).toBeInTheDocument();
        });
    });
    test('it should call the function goBack', () => {
        render(<BackButton></BackButton>);
        const mockWindow = jest.spyOn(global, 'window', 'get');
        userEvent.click(screen.getByRole('button'));
        expect(mockWindow).toBeCalled();
    });
});
