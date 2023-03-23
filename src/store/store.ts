import { configureStore } from '@reduxjs/toolkit'
import { topicsSlice } from '../modules/Topics';

export const store = configureStore({
  reducer: {
    topics: topicsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;