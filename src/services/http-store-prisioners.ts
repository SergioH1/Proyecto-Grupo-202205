import { names } from '../data/names';
import { getIds } from '../data/source-ids';
import { iPrisoner } from '../interface/prisioner-interface';

export async function getPrisioners(): Promise<{
    status: number;
    next_page: number;
    records: iPrisoner[];
}> {
    const randomId: string = (await getIds())[
        Math.floor(Math.random() * names.length)
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    console.log(randomName);
    const url = `http://www.JailBase.com/api/1/search/?source_id=${randomId}&last_name=${randomName}`;
    console.log(url);
    return fetch(url).then((resp) => {
        return resp.json();
    });
}
