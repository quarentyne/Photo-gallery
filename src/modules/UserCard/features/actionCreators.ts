import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiError, UserCardAPI } from "../../../api";
import { IGetUserInfoDTO, IGetUserInfoResponse, USER_CARD_SLICE_NAME } from "./models";

export const getUserInfo = createAsyncThunk<IGetUserInfoResponse, IGetUserInfoDTO, {serializedErrorType: IApiError}>(
  `${USER_CARD_SLICE_NAME}/getUserInfo`,
  async function(data: IGetUserInfoDTO) {
    const response = await UserCardAPI.getUserInfo(data);
    return response.data;
  },
);