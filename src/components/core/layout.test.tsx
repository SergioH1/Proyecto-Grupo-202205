import { render, screen } from '@testing-library/react';
import { Layout } from './layout';

describe('Given the component Layout', () => {
    describe('when it is called', () => {
        test('should have render its children', () => {});
        let MockChildren: () => JSX.Element;
        MockChildren = function () {
            return (
                <>
                    <p>Hola</p>
                </>
            );
        };
        render(
            <Layout>
                <MockChildren></MockChildren>
            </Layout>
        );
        screen.getByText(/Hola/i);
    });
});
