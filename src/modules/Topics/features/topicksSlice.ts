import { createSlice } from "@reduxjs/toolkit";
import { getTopics } from "./actionCreators";
import { TOPICS_SLICE_NAME, initialState } from "./models";

const topicsSlice = createSlice({
  name: TOPICS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopics.pending, state => {
      state.error = null;
    });
    builder.addCase(getTopics.rejected, (state, action) => {
      state.error = action.error.errors;
    });
    builder.addCase(getTopics.fulfilled, (state, action) => {
      state.topics = action.payload;
    });
  },
});

export default topicsSlice.reducer;