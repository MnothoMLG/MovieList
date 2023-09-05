export interface DataState {
  data: Partial<DataResult>;
}

export type Movie = {
  name: string;
  'poster-image': string;
};

type Page = {
  'content-items': {
    content: Array<Movie>;
  };
  'page-num-requested': number;
  'page-size-requested': number;
  'page-size-returned': number;
  title: string;
  'total-content-items': number;
};

export interface DataResult {
  page: Page;
}
