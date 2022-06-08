import { render, screen } from '@testing-library/react';
import { IconNavBar } from './icon-navbar';

describe('Given the component Footer', () => {
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<IconNavBar></IconNavBar>);
            const display = screen.getByAltText(/icon/);
            expect(display).toBeInTheDocument();
        });
    });
});
