import { screen, render } from '@testing-library/react';
import { DeleteMatchButton } from './delete-match';

describe('Give the component LikeButton', () => {
    describe('when it is called', () => {
        test('should print picture', () => {
            render(<DeleteMatchButton id={2}></DeleteMatchButton>);
            const display = screen.getByAltText(/delete/i);
            expect(display).toBeInTheDocument();
        });
    });
});
