import { createSlice } from "@reduxjs/toolkit";
import { getTopicBannerPhoto } from "./actionCreators";
import { initialState, TOPIC_BANNER_PHOTO_SLICE_NAME } from "./models";

const topicBannerPhotoSlice = createSlice({
  name: TOPIC_BANNER_PHOTO_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopicBannerPhoto.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getTopicBannerPhoto.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getTopicBannerPhoto.fulfilled, (state, action) => {
      state.photo = action.payload;
      state.isLoading = false;
    });
  },
});

export default topicBannerPhotoSlice.reducer;