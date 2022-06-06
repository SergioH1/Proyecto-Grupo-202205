import { iSources } from '../interface/sources-interface';

export function getIds() {
    const ids: Array<string> = [];
    const url = 'https://www.jailbase.com/api/1/sources/';
    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            data.records
                .forEach((record: iSources, index: number) => {
                    ids.push(record.source_id);
                })
                .then(() => {});
        });
    return ids;
}
