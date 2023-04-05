import { createSlice } from "@reduxjs/toolkit";
import { SEARCH_PAGE_SLICE_NAME, initialState } from "./models";
import { getPhotosByQuery } from "./actionCreators";

const searchPageSlice = createSlice({
  name: SEARCH_PAGE_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
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
      state.results = meta.arg.page === 1 ? payload.results : [...state.results, ...payload.results];
      state.page = meta.arg.page + 1;
      state.query = meta.arg.query;
    });
  },
});

export default searchPageSlice.reducer;
