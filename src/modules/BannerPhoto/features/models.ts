import { IPhotoAuthorInfo, IPhotoUrls } from "../../../models";

export const BANNER_PHOTO_SLICE_NAME = 'topics';

interface IBannerPhoto {
  id: string;
  alt_description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

interface IBannerPhotoState {
  isLoading: boolean;
  photo: IBannerPhoto | null;
  error: string[] | null;
};

export const initialState: IBannerPhotoState = {
  isLoading: false,
  photo: null,
  error: null,
};

export interface IGetBannerPhotoResponse { 
  id: string;
  alt_description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

export interface IGetBannerPhotoDTO {
  topicId: string;
};