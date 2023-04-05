import { ROUTES_PATHS } from '../../../../shared/constants';
import { StyledNavLink } from './styles';

interface ITopicItem {
  id: string;
  title: string;
}

export const TopicItem = ({ id, title }: ITopicItem) => {
  return (
    <StyledNavLink to={`${ROUTES_PATHS.TOPIC}/${id}`}>{title}</StyledNavLink>
  );
};
