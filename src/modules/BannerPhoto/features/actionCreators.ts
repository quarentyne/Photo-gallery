import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError } from "../../../api";
import { BannerPhotoAPI } from "../../../api/BannerPhotoAPI";
import { BANNER_PHOTO_SLICE_NAME, IGetBannerPhotoDTO, IGetBannerPhotoResponse } from "./models";

export const getTopicBannerPhoto = createAsyncThunk<IGetBannerPhotoResponse, IGetBannerPhotoDTO, {serializedErrorType: IApiError}>(
  `${BANNER_PHOTO_SLICE_NAME}/getBannerPhoto`,
  async function(data: IGetBannerPhotoDTO){
    const response = await BannerPhotoAPI.getBannerPhoto(data);
    return response.data;
  }
);

export const getBannerPhoto = createAsyncThunk<IGetBannerPhotoResponse, void, {serializedErrorType: IApiError}>(
  `${BANNER_PHOTO_SLICE_NAME}/getBannerPhoto`,
  async function(){
    const response = await BannerPhotoAPI.getBannerPhoto();
    return response.data;
  }
);