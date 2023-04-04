import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, TopicsAPI } from "../../../api";
import { TGetTopicsResponse, TOPICS_SLICE_NAME } from "./models";

export const getTopics = createAsyncThunk<TGetTopicsResponse, unknown, {serializedErrorType: IApiError}>(
  `${TOPICS_SLICE_NAME}/getTopics`,
  async function(){
    const response = await TopicsAPI.getTopics();
    return response.data;
  }
);