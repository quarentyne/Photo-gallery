import { AxiosResponse } from "axios";
import { IGetPhotosResponse, IGetPhotosDTO } from "../modules/HomePage/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";

export class PhotosAPI {
  static getPhotos(data: IGetPhotosDTO): Promise<AxiosResponse<IGetPhotosResponse[]>> {
    return httpGet<IGetPhotosResponse[]>(`${BASE_API_URL}${data.topicId ? `${API_ENDPOINTS.TOPICS}${data.topicId}` : ''}${API_ENDPOINTS.PHOTOS}`, data);
  };
};