import { ChangeEvent, useMemo, useEffect, FormEvent } from 'react';
import debounce from 'lodash.debounce';
import {
  StyledSearchInput,
  StyledSearchForm,
  StyledSearchButton,
} from './styles';
import { PER_PAGE } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getPhotosByQuery } from '../../../modules/HomePage';

interface ISearchBar {
  query: string;
  setQuery: (query: string) => void;
}

export const SearchBar = ({ query, setQuery }: ISearchBar) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setQuery(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    dispatch(getPhotosByQuery({ query, page: 1, per_page: PER_PAGE }));
  };

  const debouncedChangeHandler = useMemo(() => debounce(handleChange, 100), []);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  });

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledSearchInput
        onChange={debouncedChangeHandler}
        placeholder="Search photos"
      />
      <StyledSearchButton type="submit">Search</StyledSearchButton>
    </StyledSearchForm>
  );
};
