import { AxiosResponse } from "axios";
import { IGetBannerPhotoDTO, IGetBannerPhotoResponse } from "../modules/BannerPhoto/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";


export class BannerPhotoAPI {
  static getBannerPhoto(data?: IGetBannerPhotoDTO): Promise<AxiosResponse<IGetBannerPhotoResponse>> {
    return httpGet<IGetBannerPhotoResponse>(`${BASE_API_URL}${API_ENDPOINTS.RANDOM_PHOTOS}`, data);
  };
};