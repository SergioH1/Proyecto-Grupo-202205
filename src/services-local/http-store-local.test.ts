import { PrisionerModel } from '../models/prisioner-local';
import { HttpStoreLocal } from './http-store-local';

describe('Given HttpStoreLocal', () => {
    describe('When we instantiate', () => {
        describe('And we use method getprisioners', () => {
            test('Then it should return a array of two prisioners', async () => {
                // arrange
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue([
                            new PrisionerModel('prisioner1', 'Pepe'),
                            new PrisionerModel('prisioner2', 'Luisa'),
                        ]),
                });
                // act
                const result = await new HttpStoreLocal().getPrisioners(
                    'nickname'
                );
                //
                // assert
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
        describe('And we use method updatePrisioner', () => {
            test('Then it should return the updated prisioner', async () => {
                // arrange
                const prisioner = new PrisionerModel('prisioner1', 'Pepe');
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue(
                            new PrisionerModel('prisioner1', 'Pepe')
                        ),
                });
                // act
                const result = await new HttpStoreLocal().updatePrisioner(
                    prisioner
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.name).toBe('prisioner1');
            });
        });
        describe('And we use method deleteprisioner', () => {
            test('Then it should return a status ok', async () => {
                // arrange
                const deleteId = '1';
                global.fetch = jest.fn().mockResolvedValue({
                    status: 200,
                });
                // act
                const result = await new HttpStoreLocal().deletePrisioner(
                    deleteId
                );
                expect(fetch).toBeCalled();
                expect(result).toBe(200);
            });
        });
        describe('And we use method AddPrisioner', () => {
            test('Then it should return the add favorite prisioner', async () => {
                // arrange
                const prisioner = new PrisionerModel('prisioner1', 'Pepe');
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue(
                            new PrisionerModel('prisioner1', 'Pepe')
                        ),
                });
                // act
                const result = await new HttpStoreLocal().addPrisioner(
                    prisioner
                );
                // assert
                expect(fetch).toBeCalled();
                expect(result.name).toBe('prisioner1');
            });
        });
    });
});
