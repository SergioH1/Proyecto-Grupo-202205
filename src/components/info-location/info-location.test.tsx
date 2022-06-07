import { render, screen } from '@testing-library/react';
import { InfoLocation } from './info-location';

describe('Given the component InfoLocation', () => {
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<InfoLocation></InfoLocation>);
            const display = screen.getByText(/Location/i);
            expect(display).toBeInTheDocument();
        });
    });
});
