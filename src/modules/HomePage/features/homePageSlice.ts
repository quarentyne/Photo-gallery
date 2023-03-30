import { createSlice } from "@reduxjs/toolkit";
import { getBannerPhoto, getGalleryPhotos } from "./actionCreators";
import { HOME_PAGE_SLICE_NAME, initialState } from "./models";

const homePageSlice = createSlice({
  name: HOME_PAGE_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getGalleryPhotos.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getGalleryPhotos.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getGalleryPhotos.fulfilled, (state, action) => {      
      state.photos = action.meta.arg.page === 1 ? action.payload : [...state.photos, ...action.payload];
      state.isLoading = false;
      state.page = action.meta.arg.page + 1;
    });
    builder.addCase(getBannerPhoto.pending, state => {
      state.error = null;
    });
    builder.addCase(getBannerPhoto.rejected, (state, action) => {
      state.error = action.error.errors;
    });
    builder.addCase(getBannerPhoto.fulfilled, (state, action) => {
      state.bannerPhoto = action.payload;
    });
  },
});

export default homePageSlice.reducer;
