export function getPrisioners(): Promise<Object> {
    const url =
        'http://www.JailBase.com/api/1/search/?source_id=az-mcso&last_name=smith';
    return fetch(url).then((resp) => {
        console.log(resp.json());
        return resp.json();
    });
}

getPrisioners();
