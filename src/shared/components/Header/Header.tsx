import { Link } from 'react-router-dom';
import {
  StyledHeaderLogo,
  StyledHeaderWrapper,
  StyledSearchPanel,
} from './styles';
import logo from '../../../assets/svg/logo.svg';
import { ROUTES_PATHS } from '../../constants';
import { SearchBar } from '../SearchBar/SearchBar';

interface IHeader {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header = ({ searchQuery, setSearchQuery }: IHeader) => {
  return (
    <StyledHeaderWrapper>
      <Link to={ROUTES_PATHS.HOME}>
        <StyledHeaderLogo src={logo} alt="logo" />
      </Link>
      <StyledSearchPanel>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      </StyledSearchPanel>
    </StyledHeaderWrapper>
  );
};
