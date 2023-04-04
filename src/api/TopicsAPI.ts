import { AxiosResponse } from "axios";
import { TGetTopicsResponse } from "../modules/Topics/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";

export class TopicsAPI {
  static getTopics(): Promise<AxiosResponse<TGetTopicsResponse>> {
    return httpGet<TGetTopicsResponse>(`${BASE_API_URL}${API_ENDPOINTS.TOPICS}`);
  };
};