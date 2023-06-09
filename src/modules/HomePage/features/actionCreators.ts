import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, HomePageAPI } from "../../../api";
import { HOME_PAGE_SLICE_NAME, IGetBannerPhotoResponse, IGetGalleryByQueryDTO, IGetGalleryByQueryResponse, IGetGalleryPhotosDTO, TGetGalleryPhotosResponse } from "./models";

export const getGalleryPhotos = createAsyncThunk<TGetGalleryPhotosResponse, IGetGalleryPhotosDTO, {serializedErrorType: IApiError}>(
  `${HOME_PAGE_SLICE_NAME}/getGalleryPhotos`,
  async function(data: IGetGalleryPhotosDTO){
    const response = await HomePageAPI.getGalleryPhotos(data);
    return response.data;
  }
);

export const getBannerPhoto = createAsyncThunk<IGetBannerPhotoResponse, unknown, {serializedErrorType: IApiError}>(
  `${HOME_PAGE_SLICE_NAME}/getBannerPhoto`,
  async function(){
    const response = await HomePageAPI.getBannerPhoto();
    return response.data;
  }
);

export const getPhotosByQuery = createAsyncThunk<IGetGalleryByQueryResponse, IGetGalleryByQueryDTO, {serializedErrorType: IApiError}>(
  `${HOME_PAGE_SLICE_NAME}/getGalleryByQuery`,
  async (data: IGetGalleryByQueryDTO) => {
    const response = await HomePageAPI.getGalleryByQuery(data);
    return response.data;
  }
);