export const USER_CARD_SLICE_NAME = 'userCard';

interface IUser{
  name: string;
  total_likes: number;
  total_photos: number;
  profile_image: {
    large: string;
  };
  followers_count: number;
  bio: string;
};

interface IUserCardInitialState {
  user: IUser | null;
  error: string[] | null;
  isLoading: boolean;
};

export const initialState: IUserCardInitialState = {
  user: null,
  error: null,
  isLoading: false,
};

export interface IGetUserInfoDTO {
  username: string;
};

export interface IGetUserInfoResponse {
  name: string;
  total_likes: number;
  total_photos: number;
  profile_image: {
    large: string;
  };
  followers_count: number;
  bio: string;
};