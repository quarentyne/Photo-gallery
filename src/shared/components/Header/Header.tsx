import { Link } from 'react-router-dom';
import {
  StyledHeaderLogo,
  StyledHeaderWrapper,
  StyledSearchPanel,
} from './styles';
import logo from '../../../assets/svg/logo.svg';
import { ROUTES_PATHS } from '../../constants';
import { SearchBar } from '../../../modules/SearchPage';

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Link to={ROUTES_PATHS.HOME}>
        <StyledHeaderLogo src={logo} alt="logo" />
      </Link>
      <StyledSearchPanel>
        <SearchBar />
      </StyledSearchPanel>
    </StyledHeaderWrapper>
  );
};
