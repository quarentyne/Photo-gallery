import { useEffect } from 'react';
import { getTopics, TopicItem, topicsSelector } from '../../../modules/Topics';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  StyledListItem,
  StyledMenuList,
  StyledNavigationListWrapper,
} from './styles';

export const NavigationMenu = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch]);

  const { topics } = useAppSelector(topicsSelector);

  return (
    <StyledNavigationListWrapper>
      <StyledMenuList>
        {topics?.map((topic) => (
          <StyledListItem key={topic.id}>
            <TopicItem id={topic.id} title={topic.title} />
          </StyledListItem>
        ))}
      </StyledMenuList>
    </StyledNavigationListWrapper>
  );
};
