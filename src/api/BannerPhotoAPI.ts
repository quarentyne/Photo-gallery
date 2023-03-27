import { AxiosResponse } from "axios";
import { IGetBannerPhotoResponse } from "../modules/BannerCommon/features/models";
import { IGetBannerPhotoDTO } from "../modules/TopicBanner/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";


export class BannerPhotoAPI {
  static getBannerPhoto(data?: IGetBannerPhotoDTO): Promise<AxiosResponse<IGetBannerPhotoResponse>> {
    return httpGet<IGetBannerPhotoResponse>(`${BASE_API_URL}${API_ENDPOINTS.RANDOM_PHOTOS}`, data);
  };
};