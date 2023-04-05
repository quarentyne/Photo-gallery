import { AxiosResponse } from "axios";
import { IGetPhotoCardDTO, IGetPhotoCardResponse } from "../modules/PhotoCard/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";

export class PhotoCardAPI {
  static getPhoto(data: IGetPhotoCardDTO): Promise<AxiosResponse<IGetPhotoCardResponse>> {
    return httpGet<IGetPhotoCardResponse>(`${BASE_API_URL}${API_ENDPOINTS.PHOTOS}/${data.id}`);
  };
};