import { iSources } from '../interface/sources-interface';

export function getIds() {
    const ids = [];
    const url = 'https://www.jailbase.com/api/1/sources/';
    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            data.records.forEach((record: Array<iSources>, index: number) => {
                ids.push(record[index].source_id);
            });
        });
}
