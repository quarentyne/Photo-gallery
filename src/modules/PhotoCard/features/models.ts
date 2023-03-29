import { IPhoto, IPhotoAuthorInfo, IPhotoUrls } from "../../../models";

export const PHOTO_CARD_SLICE_NAME = 'photoCard';

export interface IGetPhotoCardDTO {
  id: string;
};

export interface IGetPhotoCardResponse {
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

interface IPhotoCardInitialState {
  photo: IPhoto | null;
  isLoading: boolean;
  error: string[] | null;
};

export const initialState: IPhotoCardInitialState = {
  photo: null,
  error: null,
  isLoading: false,
};