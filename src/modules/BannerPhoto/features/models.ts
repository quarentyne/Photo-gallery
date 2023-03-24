export const BANNER_PHOTO_SLICE_NAME = 'topics';


interface IBannerPhoto {
  id: string;
  alt_description: string;
  urls: {
    regular: string,
    full: string,
  };
  user: {
    id: string;
    name: string;
  };
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
  urls: {
    regular: string,
    full: string,
  };
  user: {
    id: string;
    name: string;
  };
};

export interface IGetBannerPhotoDTO {
  topicId?: string;
};