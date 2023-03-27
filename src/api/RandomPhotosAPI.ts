import { AxiosResponse } from "axios";
import { IGetRandomPhotosDTO, IGetRandomPhotosResponse } from "../modules/RandomPhotos/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";


export class RandomPhotosAPI {
  static getRandomPhotosList(data: IGetRandomPhotosDTO): Promise<AxiosResponse<IGetRandomPhotosResponse[]>> {
    return httpGet<IGetRandomPhotosResponse[]>(`${BASE_API_URL}${API_ENDPOINTS.PHOTOS}`, data);
  };
};