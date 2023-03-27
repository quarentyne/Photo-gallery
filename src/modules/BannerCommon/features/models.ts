import { IPhotoAuthorInfo, IPhotoUrls } from "../../../models";

interface IBannerPhoto {
  id: string;
  alt_description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

export interface IBannerPhotoState {
  isLoading: boolean;
  photo: IBannerPhoto | null;
  error: string[] | null;
};

export interface IGetBannerPhotoResponse { 
  id: string;
  alt_description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};