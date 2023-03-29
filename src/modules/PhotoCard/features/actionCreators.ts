import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, PhotoCardAPI } from "../../../api";
import { IGetPhotoCardDTO, IGetPhotoCardResponse, PHOTO_CARD_SLICE_NAME } from "./models";

export const getPhoto = createAsyncThunk<IGetPhotoCardResponse, IGetPhotoCardDTO, {serializedErrorType: IApiError}>(
  `${PHOTO_CARD_SLICE_NAME}/getPhoto`,
  async function(data: IGetPhotoCardDTO) {
    const response = await PhotoCardAPI.getPhoto(data);
    return response.data;
  },
);