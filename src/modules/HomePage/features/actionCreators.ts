import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, HomePageAPI } from "../../../api";
import { HOME_PAGE_SLICE_NAME, IGetBannerPhotoResponse, IGetGalleryPhotosDTO, IGetGalleryPhotosResponse } from "./models";

export const getPhotos = createAsyncThunk<IGetGalleryPhotosResponse[], IGetGalleryPhotosDTO, {serializedErrorType: IApiError}>(
  `${HOME_PAGE_SLICE_NAME}/getPhotos`,
  async function(data: IGetGalleryPhotosDTO){
    const response = await HomePageAPI.getGalleryPhotos(data);
    return response.data;
  }
);

export const getBannerPhoto = createAsyncThunk<IGetBannerPhotoResponse, void, {serializedErrorType: IApiError}>(
  `${HOME_PAGE_SLICE_NAME}/getBannerPhoto`,
  async function(){
    const response = await HomePageAPI.getBannerPhoto();
    return response.data;
  }
);