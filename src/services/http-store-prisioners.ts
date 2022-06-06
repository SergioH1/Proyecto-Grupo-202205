import { iPrisoner } from '../interface/prisioner-interface';

export function getPrisioners(): Promise<{
    status: number;
    next_page: number;
    records: iPrisoner[];
}> {
    const url =
        'http://www.JailBase.com/api/1/search/?source_id=az-mcso&last_name=smith';
    return fetch(url).then((resp) => {
        return resp.json();
    });
}
