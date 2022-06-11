import { localReducer } from './myapp-reducer';
import * as action from './action-creator-myapp';

const mockPrisioner = {
    isFav: false,
    id: 0,
    name: '',
    image: '',
    nickname: '',
    details: [],
    mugshot: '',
};

describe('Given our reducer', () => {
    describe('When calling with load action', () => {
        test('Should add new array', () => {
            const newState = localReducer(
                [],
                action.addPrisionerAction(mockPrisioner)
            );

            expect(newState).toEqual([mockPrisioner]);
        });
        // test('Should load a diferent', () => {
        //     const newState = localReducer([],
        //         action.loadPrisionersAction(mockPrisioner)
        //     );
        //     expect(newState).toEqual(mockPrisioner);
        // });
        test('Should delete array', () => {
            const newState = localReducer(
                [],
                action.deletePrisionerAction(mockPrisioner)
            );

            expect(newState).toEqual([]);
        });
        test('Should update array', () => {
            const newState = localReducer(
                [],
                action.updatePrisionerAction(mockPrisioner)
            );

            expect(newState).toEqual([mockPrisioner]);
        });
    });
});
