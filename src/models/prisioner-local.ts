export class PrisionerModel {
    isFav: boolean;
    id: number;

    constructor(public name: string, public image: string) {
        this.isFav = false;
        this.id = 0;
    }
}
