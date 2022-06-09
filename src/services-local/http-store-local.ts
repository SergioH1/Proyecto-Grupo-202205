import { PrisionerModel } from '../models/prisioner-local';

export class HttpStoreLocal {
    url: string;
    constructor() {
        this.url = 'http://localhost:4500/localFavorites';
    }
    getPrisioners(nickname: string): Promise<Array<PrisionerModel>> {
        return fetch(
            'http://localhost:4500/localFavorites?nickname=' + nickname
        ).then((resp) => {
            return resp.json();
        });
    }
    addPrisioner(prisioner: PrisionerModel): Promise<PrisionerModel> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(prisioner),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    updatePrisioner(
        prisioner: PrisionerModel
    ): Promise<Partial<PrisionerModel>> {
        return fetch(this.url + `/${prisioner.id}`, {
            method: 'PATCH',
            body: JSON.stringify(prisioner),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    deletePrisioner(id: string): Promise<number> {
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((resp) => resp.status);
    }
}
