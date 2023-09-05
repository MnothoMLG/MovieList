import { AppState } from '../root.reducer';
export const getDataState = (app: AppState) => app.dataReducer;
export const getMovieList = (app: AppState) =>
  app.dataReducer?.data?.page?.['content-items'].content;
export const getCurrentPage = (app: AppState) =>
  app.dataReducer?.data?.page?.['page-num-requested'];
export const getPageTitle = (app: AppState) =>
  app.dataReducer?.data?.page?.title;
