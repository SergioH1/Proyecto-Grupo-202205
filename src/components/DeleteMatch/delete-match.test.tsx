<<<<<<< HEAD
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { click } from '@testing-library/user-event/dist/click';
import { Simulate } from 'react-dom/test-utils';
import { PrisionerLocalContext } from '../../context/local-context';
import { DeleteMatchButton } from './delete-match';

describe('Give the component LikeButton', () => {
    describe('when it is called', () => {
        test('should print picture', () => {
            render(<DeleteMatchButton id={2}></DeleteMatchButton>);
            const display = screen.getByAltText(/delete/i);
            expect(display).toBeInTheDocument();
        });
    });
    describe('when the button is clicked', () => {
        test('Then it should execute the mock function', () => {
            const handleclick = jest.fn();
            DeleteMatchButton.prototype.handleClick = jest.fn();

            render(
                <PrisionerLocalContext.Provider>
                    <DeleteMatchButton id={4}></DeleteMatchButton>
                </PrisionerLocalContext.Provider>
            );

            userEvent.click(screen.getByRole('button'));
            expect(handleclick).toHaveBeenCalled();
        });
    });
});
=======
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
>>>>>>> main
