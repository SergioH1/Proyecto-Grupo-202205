export class PrisionerModel {
    id: number;
    isFav: boolean;
    static generateId(): number {
        return Math.ceil(Math.random() * 100_000);
    }
    constructor(public name: string, public image: string) {
        this.isFav = false;
        this.id = PrisionerModel.generateId();
    }
}
