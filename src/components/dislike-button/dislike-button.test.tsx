import { screen, render } from '@testing-library/react';
import { DislikeButton } from './dislike-button';

describe('Give the component LikeButton', () => {
    describe('when it is called', () => {
        test('should print picture', () => {
            render(<DislikeButton></DislikeButton>);
            const display = screen.getByAltText(/Icon/i);
            expect(display).toBeInTheDocument();
        });
    });
});
