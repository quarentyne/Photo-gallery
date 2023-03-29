import { createAsyncThunk } from "@reduxjs/toolkit";
import { BannerPhotoAPI, IApiError, PhotosAPI } from "../../../api";
import { HOME_PAGE_SLICE_NAME, IGetBannerPhotoResponse, IGetPhotosDTO, IGetPhotosResponse } from "./models";

export const getPhotos = createAsyncThunk<IGetPhotosResponse[], IGetPhotosDTO, {serializedErrorType: IApiError}>(
  `${HOME_PAGE_SLICE_NAME}/getPhotos`,
  async function(data: IGetPhotosDTO){
    const response = await PhotosAPI.getPhotos(data);
    return response.data;
  }
);

export const getBannerPhoto = createAsyncThunk<IGetBannerPhotoResponse, void, {serializedErrorType: IApiError}>(
  `${HOME_PAGE_SLICE_NAME}/getBannerPhoto`,
  async function(){
    const response = await BannerPhotoAPI.getPhoto();
    return response.data;
  }
);