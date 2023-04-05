import { IPhoto } from "../../../models";

export const SEARCH_PAGE_SLICE_NAME = 'searchPage';

interface ISearchPhotosInitialState {
  totalPages: number;
  results: IPhoto[];
  error: string[] | null;
  isLoading: boolean;
  page: number;
  query: string;
};

export const initialState: ISearchPhotosInitialState = {
  totalPages: 0,
  results: [],
  error: null,
  isLoading: false,
  page: 1,
  query: '',
};

export interface IGetGalleryByQueryDTO {
  query: string;
  page: number;
  per_page: number;
};

export interface IGetGalleryByQueryResponse {
  total_pages: number;
  results: IPhoto[];
};