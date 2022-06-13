import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { useContext } from 'react';

import { IndexContext } from './index-context';
import { IndexContextProvider } from './index-provider';
const MockComponent = function () {
    const { forward, index } = useContext(IndexContext);

    return (
        <>
            <p>Probando index-context</p>
            <li>{String(index)}</li>
            <button
                onClick={() => {
                    forward();
                }}
            >
                forward
            </button>
        </>
    );
};

describe('Given the context', () => {
    describe('When it is used by a mock component', () => {
        beforeEach(() => {});
        test('should first', () => {
            render(
                <IndexContextProvider>
                    <MockComponent></MockComponent>
                </IndexContextProvider>
            );
            const element = screen.getByText(/probando/i);
            expect(element).toBeInTheDocument();
        });
    });
    test('should first', () => {
        render(
            <IndexContextProvider>
                <MockComponent></MockComponent>
            </IndexContextProvider>
        );
        const element2 = screen.getByText(/forward/);
        expect(element2).toBeInTheDocument();
    });
    // test('should the forward is called', () => {
    //     render(
    //         <IndexContextProvider>
    //             <MockComponent></MockComponent>
    //         </IndexContextProvider>
    //     );
    //     userEvent.click(screen.getByRole('button'));
    //     expect().toBeCalled();
    // });
    test('should index', async () => {
        render(
            <IndexContextProvider>
                <MockComponent></MockComponent>
            </IndexContextProvider>
        );
        const element2 = await screen.findByText(/0/);
        expect(element2).toBeInTheDocument();
    });
});
