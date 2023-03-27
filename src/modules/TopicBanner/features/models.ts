import { IBannerPhotoState } from "../../BannerCommon";

export interface IGetBannerPhotoDTO {
  topicId: string;
};

export const TOPIC_BANNER_PHOTO_SLICE_NAME = 'topicBanner';

export const initialState: IBannerPhotoState = {
  isLoading: false,
  photo: null,
  error: null,
};