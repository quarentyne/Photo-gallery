import { AxiosResponse } from "axios";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { IGetGalleryByQueryDTO, IGetGalleryByQueryResponse } from "../modules/SearchPage/features/models";
import { httpGet } from "../shared/helpers";

export class SearchPageAPI {
  static getPhotoResults(data: IGetGalleryByQueryDTO): Promise<AxiosResponse<IGetGalleryByQueryResponse>> {
    return httpGet<IGetGalleryByQueryResponse>(`${BASE_API_URL}${API_ENDPOINTS.SEARCH_PHOTOS}`, data);
  };
};