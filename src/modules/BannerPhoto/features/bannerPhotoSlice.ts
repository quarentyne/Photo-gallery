import { createSlice } from "@reduxjs/toolkit";
import { getBannerPhoto } from "./actionCreators";
import { BANNER_PHOTO_SLICE_NAME, initialState } from "./models";

const bannerPhotoSlice = createSlice({
  name: BANNER_PHOTO_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBannerPhoto.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getBannerPhoto.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getBannerPhoto.fulfilled, (state, action) => {
      state.photo = action.payload;
      state.isLoading = false;
    });
  },
});

export default bannerPhotoSlice.reducer;