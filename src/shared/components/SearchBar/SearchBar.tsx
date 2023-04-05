import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { StyledSearchInput } from './styles';
import { ROUTES_PATHS } from '../../constants';

export const SearchBar = () => {
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    navigate(`${ROUTES_PATHS.SEARCH}/${e.target.value}`);
    e.target.value = '';
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleChange, 1000),
    []
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  });

  return (
    <StyledSearchInput
      onChange={debouncedChangeHandler}
      placeholder="Search photos"
    />
  );
};
