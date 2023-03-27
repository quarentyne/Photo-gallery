import { createAsyncThunk } from "@reduxjs/toolkit";
import { BannerPhotoAPI, IApiError } from "../../../api";
import { IGetBannerPhotoResponse } from "../../BannerCommon/features/models";
import { BANNER_PHOTO_SLICE_NAME } from "./models";

export const getMainBannerPhoto = createAsyncThunk<IGetBannerPhotoResponse, void, {serializedErrorType: IApiError}>(
  `${BANNER_PHOTO_SLICE_NAME}/getBannerPhoto`,
  async function(){
    const response = await BannerPhotoAPI.getBannerPhoto();
    return response.data;
  }
);