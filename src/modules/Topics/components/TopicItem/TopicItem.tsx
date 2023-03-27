import { ROUTES_PATHS } from '../../../../shared/constants';
import { StyledNavLink } from './styles';

interface ITopicItem {
  id: string;
  title: string;
  onClick: () => void;
}

export const TopicItem = ({ id, title, onClick }: ITopicItem) => {
  return (
    <StyledNavLink onClick={onClick} to={`${ROUTES_PATHS.TOPIC}${id}`}>
      {title}
    </StyledNavLink>
  );
};
