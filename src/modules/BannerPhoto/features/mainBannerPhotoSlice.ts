import { createSlice } from "@reduxjs/toolkit";
import { getMainBannerPhoto } from "./actionCreators";
import { BANNER_PHOTO_SLICE_NAME, initialState } from "./models";

const mainBannerPhotoSlice = createSlice({
  name: BANNER_PHOTO_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMainBannerPhoto.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getMainBannerPhoto.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getMainBannerPhoto.fulfilled, (state, action) => {
      state.photo = action.payload;
      state.isLoading = false;
    });
  },
});

export default mainBannerPhotoSlice.reducer;