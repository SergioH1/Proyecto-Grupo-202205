export class PrisionerModel {
    isFav: boolean;
    id: number;

    constructor(
        public name: string,
        public image: string,
        public nickname: string
    ) {
        this.isFav = false;
        this.id = 0;
    }
}
