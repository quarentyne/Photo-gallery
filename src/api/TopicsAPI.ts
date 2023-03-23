import { AxiosResponse } from "axios";
import { IGetTopicsResponse } from "../modules/Topics/features";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";

export class TopicsAPI {
  static getTopics(): Promise<AxiosResponse<IGetTopicsResponse>> {
    return httpGet<IGetTopicsResponse>(`${BASE_API_URL}${API_ENDPOINTS.TOPICS}`);
  };
};