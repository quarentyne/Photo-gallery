import { AxiosResponse } from "axios";
import { IGetBannerPhotoResponse, IGetGalleryByQueryDTO, IGetGalleryByQueryResponse, IGetGalleryPhotosDTO, TGetGalleryPhotosResponse } from "../modules/HomePage/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";

export class HomePageAPI {
  static getBannerPhoto(): Promise<AxiosResponse<IGetBannerPhotoResponse>> {
    return httpGet<IGetBannerPhotoResponse>(`${BASE_API_URL}${API_ENDPOINTS.RANDOM_PHOTOS}`);
  };
  static getGalleryPhotos(data: IGetGalleryPhotosDTO): Promise<AxiosResponse<TGetGalleryPhotosResponse>> {
    return httpGet<TGetGalleryPhotosResponse>(`${BASE_API_URL}${data.topicId ? `${API_ENDPOINTS.TOPICS}/${data.topicId}` : ''}${API_ENDPOINTS.PHOTOS}`, data);
  };
  static getGalleryByQuery(data: IGetGalleryByQueryDTO): Promise<AxiosResponse<IGetGalleryByQueryResponse>> {
    return httpGet<IGetGalleryByQueryResponse>(`${BASE_API_URL}${API_ENDPOINTS.SEARCH_PHOTOS}`, data);
  };
};