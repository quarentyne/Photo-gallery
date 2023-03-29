import { IPhoto, IPhotoAuthorInfo, IPhotoUrls } from "../../../models";

export const HOME_PAGE_SLICE_NAME = 'homePage';

interface IHomePageState {
  isLoading: boolean;
  photos: IPhoto[];
  bannerPhoto: IPhoto | null;
  error: string[] | null;
  page: number;
  topicId: string;
};

export const initialState: IHomePageState = {
  isLoading: false,
  photos: [],
  bannerPhoto: null,
  error: null,
  page: 1,
  topicId: '',
};

export interface IGetPhotosResponse { 
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

export interface IGetPhotosDTO {
  page: number;
  per_page: number;
  topicId?: string;
};

export interface IGetBannerPhotoResponse { 
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};