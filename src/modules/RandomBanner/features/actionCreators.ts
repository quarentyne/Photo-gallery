import { createAsyncThunk } from "@reduxjs/toolkit";
import { BannerPhotoAPI, IApiError } from "../../../api";
import { IGetBannerPhotoResponse } from "../../BannerCommon";
import { RANDOM_BANNER_PHOTO_SLICE_NAME } from "./models";

export const getRandomBannerPhoto = createAsyncThunk<IGetBannerPhotoResponse, void, {serializedErrorType: IApiError}>(
  `${RANDOM_BANNER_PHOTO_SLICE_NAME}/getBannerPhoto`,
  async function(){
    const response = await BannerPhotoAPI.getBannerPhoto();
    return response.data;
  }
);