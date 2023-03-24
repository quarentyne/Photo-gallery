import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, PhotosListAPI } from "../../../api";
import { IGetPhotosListDTO, IGetPhotosListResponse, PHOTOS_LIST_SLICE_NAME } from "./models";

export const getListPhotos = createAsyncThunk<IGetPhotosListResponse[], IGetPhotosListDTO, {serializedErrorType: IApiError}>(
  `${PHOTOS_LIST_SLICE_NAME}/getList`,
  async function(data: IGetPhotosListDTO){
    const response = await PhotosListAPI.getPhotosList(data);
    return response.data;
  }
);