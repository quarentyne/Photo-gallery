import { AxiosResponse } from "axios";
import { IGetPhotosTopicDTO, IGetPhotosTopicResponse } from "../modules/TopicPhotos/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";

export class PhotosTopicAPI {
  static getTopicPhotos(data: IGetPhotosTopicDTO): Promise<AxiosResponse<IGetPhotosTopicResponse[]>> {
    return httpGet<IGetPhotosTopicResponse[]>(`${BASE_API_URL}${API_ENDPOINTS.TOPICS}${data.topicId}/${API_ENDPOINTS.PHOTOS}`, data);
  };
};