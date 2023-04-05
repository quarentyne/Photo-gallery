import { AxiosResponse } from "axios";
import { IGetUserInfoDTO, IGetUserInfoResponse } from "../modules/UserCard/features/models";
import { API_ENDPOINTS, BASE_API_URL } from "../shared/constants";
import { httpGet } from "../shared/helpers";

export class UserCardAPI {
  static getUserInfo({ username }: IGetUserInfoDTO): Promise<AxiosResponse<IGetUserInfoResponse>> {
    return httpGet<IGetUserInfoResponse>(`${BASE_API_URL}${API_ENDPOINTS.USERS}/${username}`);
  };
};