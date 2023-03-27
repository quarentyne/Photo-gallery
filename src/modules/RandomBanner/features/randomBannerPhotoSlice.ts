import { createSlice } from "@reduxjs/toolkit";
import { getRandomBannerPhoto } from "./actionCreators";
import { RANDOM_BANNER_PHOTO_SLICE_NAME, initialState } from "./models";

const randomBannerPhotoSlice = createSlice({
  name: RANDOM_BANNER_PHOTO_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRandomBannerPhoto.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getRandomBannerPhoto.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getRandomBannerPhoto.fulfilled, (state, action) => {
      state.photo = action.payload;
      state.isLoading = false;
    });
  },
});

export default randomBannerPhotoSlice.reducer;