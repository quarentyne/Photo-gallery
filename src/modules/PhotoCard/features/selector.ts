import { RootState } from "../../../store/store";

export const photoSelector = (state: RootState) => state.photoCard.photo;