import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, PhotosTopicAPI } from "../../../api";
import { IGetPhotosTopicDTO, IGetPhotosTopicResponse, PHOTOS_TOPIC_SLICE_NAME } from "./models";

export const getTopicPhotos = createAsyncThunk<IGetPhotosTopicResponse[], IGetPhotosTopicDTO, {serializedErrorType: IApiError}>(
  `${PHOTOS_TOPIC_SLICE_NAME}/getList`,
  async function(data: IGetPhotosTopicDTO){
    const response = await PhotosTopicAPI.getTopicPhotos(data);
    return response.data;
  }
);