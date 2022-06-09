import { iPrisoner } from '../interface/prisioner-interface';

export class PrisionerModel implements iPrisoner {
    isFav: boolean;
    id: number;
    nickname?: string;
    details = [];
    mugshot?: string | undefined;

    constructor(public name: string, public image: string) {
        this.isFav = false;
        this.id = 0;
    }
}
