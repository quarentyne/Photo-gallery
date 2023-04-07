import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useMemo, useEffect, FormEvent } from 'react';
import debounce from 'lodash.debounce';
import {
  StyledSearchInput,
  StyledSearchForm,
  StyledSearchButton,
} from './styles';
import { PER_PAGE, ROUTES_PATHS } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getPhotosByQuery } from '../../../modules/HomePage';

interface ISearchBar {
  query: string;
  setQuery: (query: string) => void;
}

export const SearchBar = ({ query, setQuery }: ISearchBar) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigate(`${ROUTES_PATHS.SEARCH}/${query}`);
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
