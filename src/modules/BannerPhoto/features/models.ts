import { IBannerPhotoState } from "../../BannerCommon/features/models";

export const initialState: IBannerPhotoState = {
  isLoading: false,
  photo: null,
  error: null,
};

export const BANNER_PHOTO_SLICE_NAME = 'mainBanner';
