import { AxiosResponse } from "axios";
import { IGetBannerPhotoResponse } from "../modules/HomePage/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";


export class BannerPhotoAPI {
  static getPhoto(): Promise<AxiosResponse<IGetBannerPhotoResponse>> {
    return httpGet<IGetBannerPhotoResponse>(`${BASE_API_URL}${API_ENDPOINTS.RANDOM_PHOTOS}`);
  };
};