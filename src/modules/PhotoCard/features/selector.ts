import { RootState } from "../../../store/store";

export const photoCardSelector = (state: RootState) => state.photoCard.photo;
export const loadingStatusSelector = (state: RootState) => state.photoCard.isLoading;