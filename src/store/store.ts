import { configureStore } from '@reduxjs/toolkit'
import topicsSlice from '../modules/Topics/features/topicsSlice';
import bannerPhotoSlice from '../modules/BannerPhoto/features/bannerPhotoSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
    bannerPhoto: bannerPhotoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;