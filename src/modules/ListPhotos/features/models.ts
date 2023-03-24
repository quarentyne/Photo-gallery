import { IPhotoAuthorInfo, IPhotoUrls } from "../../../models";

export const PHOTOS_LIST_SLICE_NAME = 'photosList';

interface IPhoto{
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

interface IPhotosListState {
  isLoading: boolean;
  photos: IPhoto[];
  error: string[] | null;
  page: number;
};

export const initialState: IPhotosListState = {
  isLoading: false,
  photos: [],
  error: null,
  page: 1,
};

export interface IGetPhotosListResponse { 
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

export interface IGetPhotosListDTO {
  page: number;
  per_page: number;
};