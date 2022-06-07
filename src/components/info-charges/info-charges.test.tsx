import { render, screen } from '@testing-library/react';

import { InfoCharges } from './info-charges';

describe('Given the component InfoCharges', () => {
    describe('When is called', () => {
        test('Then it sould print', () => {
            render(<InfoCharges></InfoCharges>);
            const display = screen.getByText(/Charges/i);
            expect(display).toBeInTheDocument();
        });
    });
});
