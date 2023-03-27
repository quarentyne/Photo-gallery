import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, RandomPhotosAPI,  } from "../../../api";
import { IGetRandomPhotosDTO, IGetRandomPhotosResponse, RANDOM_PHOTOS_SLICE_NAME } from "./models";

export const getRandomPhotos = createAsyncThunk<IGetRandomPhotosResponse[], IGetRandomPhotosDTO, {serializedErrorType: IApiError}>(
  `${RANDOM_PHOTOS_SLICE_NAME}/getList`,
  async function(data: IGetRandomPhotosDTO){
    const response = await RandomPhotosAPI.getRandomPhotosList(data);
    return response.data;
  }
);