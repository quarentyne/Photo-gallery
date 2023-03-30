import { RootState } from "../../../store/store";

export const userSelector = (state: RootState) => state.userCard.user;
export const userLoadingStatusSelector = (state: RootState) => state.userCard.isLoading;