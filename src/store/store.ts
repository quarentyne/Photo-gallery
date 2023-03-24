import { configureStore } from '@reduxjs/toolkit'
import topicsSlice from '../modules/Topics/features/topicsSlice';
import bannerPhotoSlice from '../modules/BannerPhoto/features/bannerPhotoSlice';
import listPhotosSlice from '../modules/ListPhotos/features/listPhotosSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
    bannerPhoto: bannerPhotoSlice,
    listPhotos: listPhotosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;