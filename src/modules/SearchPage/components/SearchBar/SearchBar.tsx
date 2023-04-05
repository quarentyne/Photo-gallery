import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { StyledSearchForm, StyledSearchInput } from './styles';
import { getPhotosByQuery } from '../../features/actionCreators';
import { PER_PAGE, ROUTES_PATHS } from '../../../../shared/constants';
import { useAppDispatch } from '../../../../shared/hooks';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmitEvent = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getPhotosByQuery({ query, page: 1, per_page: PER_PAGE }));
    navigate(ROUTES_PATHS.SEARCH);
    setQuery('');
  };

  return (
    <StyledSearchForm onSubmit={handleSubmitEvent}>
      <StyledSearchInput
        onChange={handleChangeEvent}
        placeholder="Search photos"
        value={query}
      />
    </StyledSearchForm>
  );
};
