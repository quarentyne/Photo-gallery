import { createAsyncThunk } from "@reduxjs/toolkit";
import { BannerPhotoAPI, IApiError } from "../../../api";
import { IGetBannerPhotoResponse } from "../../BannerCommon/features/models";
import { IGetBannerPhotoDTO, TOPIC_BANNER_PHOTO_SLICE_NAME } from "./models";

export const getTopicBannerPhoto = createAsyncThunk<IGetBannerPhotoResponse, IGetBannerPhotoDTO, {serializedErrorType: IApiError}>(
  `${TOPIC_BANNER_PHOTO_SLICE_NAME}/getBannerPhoto`,
  async function(data: IGetBannerPhotoDTO){
    const response = await BannerPhotoAPI.getBannerPhoto(data);
    return response.data;
  }
);