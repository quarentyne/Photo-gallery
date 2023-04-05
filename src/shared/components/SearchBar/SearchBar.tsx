import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { StyledSearchInput } from './styles';
import { ROUTES_PATHS } from '../../constants';

export const SearchBar = () => {
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    navigate(`${ROUTES_PATHS.SEARCH}/${e.target.value}`);
    e.target.value = '';
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <StyledSearchInput
      onChange={debouncedResults}
      placeholder="Search photos"
    />
  );
};
