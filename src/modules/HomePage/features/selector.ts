import { RootState } from "../../../store/store";

export const paginationSelector = (state: RootState) => state.homePage.page;
export const photosSelector = (state: RootState) => state.homePage.photos;
export const bannerPhotoSelector = (state: RootState) => state.homePage.bannerPhoto;
export const galleryLoadingStatusSelector = (state: RootState) => state.homePage.isLoading;
export const totalPagesSelector = (state: RootState) => state.homePage.totalPages;
export const errorSelector = (state: RootState) => state.homePage.error;