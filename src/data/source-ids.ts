import { iSources } from '../interface/sources-interface';

export async function getIds() {
    const ids: Array<string> = [];
    const url = 'https://www.jailbase.com/api/1/sources/';
    const response = await fetch(url);
    const data = await response.json();
    data.records.forEach((item: iSources) => {
        ids.push(item.source_id);
    });
    return ids;
}
