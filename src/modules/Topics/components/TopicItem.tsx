import { API_ENDPOINTS } from '../../../shared/constants';
import { StyledNavLink } from './styles';

interface ITopicItem {
  id: string;
  title: string;
}

export const TopicItem = ({ id, title }: ITopicItem) => {
  return (
    <StyledNavLink to={`${API_ENDPOINTS.TOPICS}${id}`}>{title}</StyledNavLink>
  );
};
