import { useEffect } from 'react';
import {
  StyledListItem,
  StyledMenuList,
  StyledNavigationListWrapper,
} from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTopics } from '../../../modules/Topics/features/actionCreators';
import { TopicItem, topicsSelector } from '../../../modules/Topics';

export const NavigationMenu = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTopics({}));
  }, [dispatch]);

  const topics = useAppSelector(topicsSelector);

  return (
    <StyledNavigationListWrapper>
      <StyledMenuList>
        {topics?.map((topic) => (
          <StyledListItem key={topic.id}>
            <TopicItem title={topic.title} id={topic.id} />
          </StyledListItem>
        ))}
      </StyledMenuList>
    </StyledNavigationListWrapper>
  );
};
