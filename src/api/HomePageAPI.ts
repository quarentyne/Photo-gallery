import { AxiosResponse } from "axios";
import { IGetBannerPhotoResponse, IGetGalleryPhotosDTO, IGetGalleryPhotosResponse } from "../modules/HomePage/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";

export class HomePageAPI {
  static getBannerPhoto(): Promise<AxiosResponse<IGetBannerPhotoResponse>> {
    return httpGet<IGetBannerPhotoResponse>(`${BASE_API_URL}${API_ENDPOINTS.RANDOM_PHOTOS}`);
  };
  static getGalleryPhotos(data: IGetGalleryPhotosDTO): Promise<AxiosResponse<IGetGalleryPhotosResponse[]>> {
    return httpGet<IGetGalleryPhotosResponse[]>(`${BASE_API_URL}${data.topicId ? `${API_ENDPOINTS.TOPICS}${data.topicId}` : ''}${API_ENDPOINTS.PHOTOS}`, data);
  };
};