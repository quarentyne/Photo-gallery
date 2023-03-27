import { IPhotoAuthorInfo, IPhotoUrls } from "../../../models";

export const RANDOM_PHOTOS_SLICE_NAME = 'RandomPhotos';

export interface IPhoto{
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

interface IRandomPhotosState {
  isLoading: boolean;
  photos: IPhoto[];
  error: string[] | null;
  page: number;
};

export const initialState: IRandomPhotosState = {
  isLoading: false,
  photos: [],
  error: null,
  page: 1,
};

export interface IGetRandomPhotosResponse { 
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

export interface IGetRandomPhotosDTO {
  page: number;
  per_page: number;
};