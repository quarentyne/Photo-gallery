import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "./actionCreators";
import { initialState, USER_CARD_SLICE_NAME } from "./models";

const userCardSlice = createSlice({
  name: USER_CARD_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserInfo.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.user = null;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.error = action.error.errors;
      state.isLoading = false;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
  },
});

export default userCardSlice.reducer;