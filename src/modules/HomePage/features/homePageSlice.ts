import { createSlice } from "@reduxjs/toolkit";
import { getBannerPhoto, getGalleryPhotos, getPhotosByQuery } from "./actionCreators";
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
      const { meta, payload } = action; 
      state.photos = meta.arg.page === 1 ? payload : [...state.photos, ...payload];
      state.isLoading = false;
      state.page = meta.arg.page + 1;
      state.totalPages = null;
    });
    builder.addCase(getBannerPhoto.fulfilled, (state, action) => {
      state.bannerPhoto = action.payload;
    });
    builder.addCase(getPhotosByQuery.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getPhotosByQuery.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getPhotosByQuery.fulfilled, (state, action) => {
      const { meta, payload } = action;
      state.isLoading = false;
      state.totalPages = payload.total_pages;
      state.photos = meta.arg.page === 1 ? payload.results : [...state.photos, ...payload.results];
      state.page = meta.arg.page + 1;
    });
  },
});

export default homePageSlice.reducer;
