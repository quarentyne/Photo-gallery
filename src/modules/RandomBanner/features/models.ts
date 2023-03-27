import { IBannerPhotoState } from "../../BannerCommon";

export const initialState: IBannerPhotoState = {
  isLoading: false,
  photo: null,
  error: null,
};

export const RANDOM_BANNER_PHOTO_SLICE_NAME = 'randomBanner';
