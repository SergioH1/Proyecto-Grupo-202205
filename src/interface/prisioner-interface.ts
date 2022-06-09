export interface iPrisoner {
    county_state?: string;
    name?: string;
    charges?: [string];
    id?: number;
    source?: string;
    details: Array<[string, string | number]>;
    mugshot?: string;
    book_date?: string;
    source_id?: string;
    more_info_url?: string;
    nickname?: string;
    image?: string;
    isFav?: boolean;
    idApi?: number;
}
