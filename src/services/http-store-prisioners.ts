import { iPrisoner } from '../interface/prisioner-interface';

export async function getPrisioners(county = 'az-mcso'): Promise<{
    status: number;
    next_page: number;
    records: iPrisoner[];
}> {
    const url = `http://www.JailBase.com/api/1/search/?source_id=${county}&last_name=smith`;
    return fetch(url).then((resp) => {
        return resp.json();
    });
}
