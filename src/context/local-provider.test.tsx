import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useContext } from 'react';
import { PrisionerModel } from '../models/prisioner-local';
import { HttpStoreLocal } from '../services-local/http-store-local';
import { PrisionerLocalContext } from './local-context';
import { PrisionerContextProvider } from './prisioner-provider';

jest.mock('../services-local/http-store-local');

const prisioner1 = new PrisionerModel('Jason', 'img3');
const prisioner2 = new PrisionerModel('Sergio', 'img1');
describe('Given the context', () => {
    describe('When it is used by a test components', () => {
        let TestComponent: () => JSX.Element;
        beforeEach(() => {
            HttpStoreLocal.prototype.getPrisioners = jest
                .fn()
                .mockResolvedValue([prisioner1]);
            let TestComponent = function () {
                const {
                    prisioners,
                    addPrisioner,
                    deletePrisioner,
                    updatePrisioner,
                } = useContext(PrisionerLocalContext);

                return (
                    <>
                        <p>Probando Testing</p>
                        <ul>
                            {prisioners.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            onClick={() => {
                                addPrisioner(new PrisionerModel('Ango', 'img'));
                            }}
                        >
                            fav Prisioner
                        </button>
                    </>
                );
            };
        });
        test('Then prison daters should be render from context', async () => {
            render;
        });
    });
});
