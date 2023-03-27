import { configureStore } from '@reduxjs/toolkit'
import topicsSlice from '../modules/Topics/features/topicsSlice';
import mainBannerPhotoSlice from '../modules/BannerPhoto/features/mainBannerPhotoSlice';
import topicBannerPhotoSlice from '../modules/TopicBanner/features/topicBannerPhotoSlice';
import listPhotosSlice from '../modules/ListPhotos/features/listPhotosSlice';
import topicPhotosSlice from '../modules/TopicPhotos/features/topicPhotosSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
    mainBannerPhoto: mainBannerPhotoSlice,
    topicBannerPhoto: topicBannerPhotoSlice,
    listPhotos: listPhotosSlice,
    topicPhotos: topicPhotosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;