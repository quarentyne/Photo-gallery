import { configureStore } from '@reduxjs/toolkit'
import topicsSlice from '../modules/Topics/features/topicsSlice';
import homePageSlice from '../modules/HomePage/features/homePageSlice';
import photoCardSlice from '../modules/PhotoCard/features/photoCardSlice';
import userCardSlice from '../modules/UserCard/features/userCardSlice';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
    homePage: homePageSlice,
    photoCard: photoCardSlice,
    userCard: userCardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;