import { render, screen } from '@testing-library/react';
import { InfoPrisioner } from './info-prisioner';

describe('Given the component InfoPrisioner', () => {
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<InfoPrisioner></InfoPrisioner>);
            const display = screen.getByText(/Personal/i);
            expect(display).toBeInTheDocument();
        });
    });
});
