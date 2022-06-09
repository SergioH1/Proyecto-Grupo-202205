import { getPrisioners } from './http-store-prisioners';

const mockPrisioner = { name: 'pepe', crime: 'murder' };

describe('Given getPrisioners', () => {
    describe('When we call', () => {
        test('Then it should return', async () => {
            // arrange
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([mockPrisioner]),
            });
            // act
            const result = await getPrisioners('s');
            //
            // assert
            expect(fetch).toBeCalled();
            expect(result).toEqual([mockPrisioner]);
        });
    });
});
