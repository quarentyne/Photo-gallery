import { IPhotoAuthorInfo } from "./photoAuthorInfo.model";
import { IPhotoUrls } from "./photoUrls.model";

export interface IPhoto {
  id: string;
  description: string;
  urls: IPhotoUrls;
  user: IPhotoAuthorInfo;
};