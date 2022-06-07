import { screen, render } from '@testing-library/react';

import { InfoHome } from './info-home';

describe('Given the component InfoHome', () => {
    describe('when it is called', () => {
        test('should print', () => {
            render(<InfoHome></InfoHome>);
            const display = screen.getByText(/,/);
            expect(display).toBeInTheDocument();
        });
    });
});
