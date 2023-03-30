import { RootState } from "../../../store/store";

export const photoSelector = (state: RootState) => state.photoCard.photo;
export const photoLoadingStatusSelector = (state: RootState) => state.photoCard.isLoading;