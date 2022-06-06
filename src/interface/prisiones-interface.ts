export interface iPrisoners {
  records: Array<
    [
      {
        county_state: string;
        name: string;
        id: number;
        source: string;
        details: Array<[string, string | number]>;
        mugshot: string;
        book_date: string;
        source_id: string;
        more_info_url: string;
      }
    ]
  >;
}
//
