export const TOPICS_SLICE_NAME = 'topics';

export interface ITopic {
  id: string;
  slug: string;
  title: string;
};

export interface ITopicsState {
  topics: ITopic[] | null;
  error: string[] | null;
  isLoading: boolean;
};

export const initialState: ITopicsState = {
  topics: null,
  error: null,
  isLoading: false,
};

export type TGetTopicsResponse = ITopic[];