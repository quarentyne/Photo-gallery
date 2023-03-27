import { IPhotoAuthorInfo, IPhotoUrls } from "../../../models";

export const PHOTOS_TOPIC_SLICE_NAME = 'photosTopic';

export interface IPhoto{
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

interface IPhotosTopicState {
  isLoading: boolean;
  photos: IPhoto[];
  error: string[] | null;
  page: number;
};

export const initialState: IPhotosTopicState = {
  isLoading: false,
  photos: [],
  error: null,
  page: 1,
};

export interface IGetPhotosTopicResponse { 
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};

export interface IGetPhotosTopicDTO {
  page: number;
  per_page: number;
  topicId: string;
};