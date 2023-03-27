import { createSlice } from "@reduxjs/toolkit";
import { getTopicPhotos } from "./actionCreators";
import { initialState, PHOTOS_TOPIC_SLICE_NAME } from "./models";

const topicPhotosSlice = createSlice({
  name: PHOTOS_TOPIC_SLICE_NAME,
  initialState,
  reducers: {
    clearState: (state) => {
      state.photos = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getTopicPhotos.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getTopicPhotos.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getTopicPhotos.fulfilled, (state, action) => {
      state.photos = [...state.photos, ...action.payload];
      state.isLoading = false;
      state.page = state.page + 1;
    });
  },
});

export const { clearState } = topicPhotosSlice.actions;
export default topicPhotosSlice.reducer;