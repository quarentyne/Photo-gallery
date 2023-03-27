import { configureStore } from '@reduxjs/toolkit'
import topicsSlice from '../modules/Topics/features/topicsSlice';
import topicBannerPhotoSlice from '../modules/TopicBanner/features/topicBannerPhotoSlice';
import topicPhotosSlice from '../modules/TopicPhotos/features/topicPhotosSlice';
import randomPhotosSlice from '../modules/RandomPhotos/features/randomPhotosSlice';
import randomBannerPhotoSlice from '../modules/RandomBanner/features/randomBannerPhotoSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
    randomBannerPhoto: randomBannerPhotoSlice,
    topicBannerPhoto: topicBannerPhotoSlice,
    randomPhotos: randomPhotosSlice,
    topicPhotos: topicPhotosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;