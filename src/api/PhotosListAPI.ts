import { AxiosResponse } from "axios";
import { IGetPhotosListDTO, IGetPhotosListResponse } from "../modules/ListPhotos/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";


export class PhotosListAPI {
  static getPhotosList(data: IGetPhotosListDTO): Promise<AxiosResponse<IGetPhotosListResponse[]>> {
    return httpGet<IGetPhotosListResponse[]>(`${BASE_API_URL}${API_ENDPOINTS.PHOTOS}`, data);
  };
};