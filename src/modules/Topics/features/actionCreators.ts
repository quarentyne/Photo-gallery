import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, TopicsAPI } from "../../../api";
import { IGetTopicsResponse, TOPICS_SLICE_NAME } from "./models";

export const getTopics = createAsyncThunk<IGetTopicsResponse, void, {serializedErrorType: IApiError}>(
  `${TOPICS_SLICE_NAME}/getTopics`,
  async function(){
    const response = await TopicsAPI.getTopics();
    return response.data;
  }
);