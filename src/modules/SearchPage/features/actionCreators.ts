import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetGalleryByQueryDTO, IGetGalleryByQueryResponse, SEARCH_PAGE_SLICE_NAME } from "./models";
import { IApiError, SearchPageAPI } from "../../../api";

export const getPhotosByQuery = createAsyncThunk<IGetGalleryByQueryResponse, IGetGalleryByQueryDTO, {serializedErrorType: IApiError}>(
  `${SEARCH_PAGE_SLICE_NAME}/searchPhotos`,
  async (data: IGetGalleryByQueryDTO) => {
    const response = await SearchPageAPI.getPhotoResults(data);
    return response.data;
  }
)