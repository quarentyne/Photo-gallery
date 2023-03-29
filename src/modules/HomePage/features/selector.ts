import { RootState } from "../../../store/store";

export const paginationSelector = (state: RootState) => state.homePage.page;
export const photosSelector = (state: RootState) => state.homePage.photos;
export const bannerPhotoSelector = (state: RootState) => state.homePage.bannerPhoto;
