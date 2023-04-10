import { useSearchParams } from 'react-router-dom';
import { ChangeEvent, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { StyledSearchInput } from './styles';
import { PER_PAGE } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getPhotosByQuery } from '../../../modules/HomePage';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [, setQuery] = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(`query=${value}`);
    dispatch(getPhotosByQuery({ query: value, page: 1, per_page: PER_PAGE }));
    e.target.value = '';
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleChange, 1000),
    []
  );

  return (
    <StyledSearchInput
      onChange={debouncedChangeHandler}
      placeholder="Search photos"
    />
  );
};
