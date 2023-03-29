import { configureStore } from '@reduxjs/toolkit'
import topicsSlice from '../modules/Topics/features/topicsSlice';
import homePageSlice from '../modules/HomePage/features/homePageSlice';
import photoCardSlice from '../modules/PhotoCard/features/photoCardSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
    homePage: homePageSlice,
    photoCard: photoCardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;