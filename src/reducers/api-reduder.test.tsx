import { apiReducer } from './api-reducer';
import * as action from './action-creator';
import { iPrisoner } from '../interface/prisioner-interface';

const mockPrisioner: iPrisoner = {
    name: 'ser',
    details: [],
    mugshot: 's',
};

const mockPrisioner2: iPrisoner = {
    name: 'jhon',
    details: [],
    mugshot: 'url',
};

describe('Given our reducer', () => {
    describe('When calling with load action', () => {
        test('Should load an array of mockPrisioner', () => {
            const newState = apiReducer(
                [],
                action.loadPrisionersAction([mockPrisioner])
            );

            expect(newState).toEqual([mockPrisioner]);
        });
        test('Should load a same array', () => {
            const newState = apiReducer(
                [mockPrisioner],
                action.loadPrisionersAction([mockPrisioner2])
            );

            expect(newState).toEqual([mockPrisioner2]);
        });
    });
});
