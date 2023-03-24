import { createSlice } from "@reduxjs/toolkit";
import { getListPhotos } from "./actionCreators";
import { initialState, PHOTOS_LIST_SLICE_NAME } from "./models";

const listPhotosSlice = createSlice({
  name: PHOTOS_LIST_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getListPhotos.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getListPhotos.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getListPhotos.fulfilled, (state, action) => {
      state.photos = [...state.photos, ...action.payload];
      state.isLoading = false;
      state.page = state.page + 1;
    });
  },
});

export default listPhotosSlice.reducer;