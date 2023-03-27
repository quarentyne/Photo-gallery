import { createSlice } from "@reduxjs/toolkit";
import { getRandomPhotos } from "./actionCreators";
import { initialState, RANDOM_PHOTOS_SLICE_NAME } from "./models";

const randomPhotosSlice = createSlice({
  name: RANDOM_PHOTOS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRandomPhotos.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getRandomPhotos.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getRandomPhotos.fulfilled, (state, action) => {
      state.photos = [...state.photos, ...action.payload];
      state.isLoading = false;
      state.page = state.page + 1;
    });
  },
});

export default randomPhotosSlice.reducer;