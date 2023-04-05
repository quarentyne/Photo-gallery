import { RootState } from "../../../store/store";

export const searchResultSelector = (state: RootState) => state.searchPage.results;
export const searchLoadingStatusSelector = (state: RootState) => state.searchPage.isLoading;
export const paginationSelector = (state: RootState) => state.searchPage.page;
export const errorSelector = (state: RootState) => state.searchPage.error;
export const totalPagesSelector = (state: RootState) => state.searchPage.totalPages;
export const querySelector = (state: RootState) => state.searchPage.query;
