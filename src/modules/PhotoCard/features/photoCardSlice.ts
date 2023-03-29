import { createSlice } from "@reduxjs/toolkit";
import { getPhoto } from "./actionCreators";
import { initialState, PHOTO_CARD_SLICE_NAME } from "./models";

const photoCardSlice = createSlice({
  name: PHOTO_CARD_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPhoto.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.photo = null;
    });
    builder.addCase(getPhoto.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getPhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      state.photo = action.payload;
    });
  },
});

export default photoCardSlice.reducer;