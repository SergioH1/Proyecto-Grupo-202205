import { screen, render } from '@testing-library/react';
import { DislikeButton } from '../dislike-button/dislike-button';
import { LikeButton } from './like-button';

describe('Give the component LikeButton', () => {
    describe('when it is called', () => {
        test('should print picture', () => {
            render(<LikeButton></LikeButton>);
            const display = screen.getByAltText(/Icon/i);
            expect(display).toBeInTheDocument();
        });
    });
});
