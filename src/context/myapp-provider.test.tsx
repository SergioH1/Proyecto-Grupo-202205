import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { PrisionerModel } from '../models/prisioner-local';
import { HttpStoreLocal } from '../services-local/http-store-local';
import { PrisionerLocalContext } from './local-context';
import { PrisionersLocalContextProvider } from './local-provider';

jest.mock('../services-local/http-store-local');

const mockprisioner1 = new PrisionerModel('Trevon', 'url');
const mockprisioner2 = new PrisionerModel('Marc', 'url');

HttpStoreLocal.prototype.getPrisioners = jest
    .fn()
    .mockResolvedValue([mockprisioner1]);
let TestComponent: () => JSX.Element;
TestComponent = function () {
    const { addPrisioner, deletePrisioner, updatePrisioner } = useContext(
        PrisionerLocalContext
    );

    return (
        <>
            <p>Prisioners Date</p>
            <ul>
                <li>{mockprisioner2.name}</li>
            </ul>
            <button
                onClick={() => {
                    addPrisioner(mockprisioner2);
                }}
            >
                addPrisioner
            </button>
            <button
                onClick={() => {
                    deletePrisioner(mockprisioner1);
                }}
            >
                deletePrisioner
            </button>
            <button
                onClick={() => {
                    updatePrisioner(mockprisioner2.id);
                }}
            >
                {' '}
                updatePrisioner
            </button>
        </>
    );
};
describe('Given the context local', () => {
    describe('When it is used by a test components', () => {
        test('should my app be render from a context', async () => {
            render(
                <PrisionersLocalContextProvider>
                    <TestComponent></TestComponent>
                </PrisionersLocalContextProvider>
            );
            userEvent.click(screen.getByText(/addPrisioner/i));
            expect(HttpStoreLocal.prototype.addPrisioner).toHaveBeenCalled();
            let element = await screen.findByText(/Marc/i);
            expect(element).toBeInTheDocument();
        });
    });
});
