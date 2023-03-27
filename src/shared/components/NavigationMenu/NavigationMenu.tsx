import { useEffect } from 'react';
import { clearState } from '../../../modules/TopicPhotos';
import { TopicItem, topicsSelector } from '../../../modules/Topics';
import { getTopics } from '../../../modules/Topics/features/actionCreators';
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
  const onChangeTopic = () => {
    dispatch(clearState());
  };

  return (
    <StyledNavigationListWrapper>
      <StyledMenuList>
        {topics?.map((topic) => (
          <StyledListItem key={topic.id}>
            <TopicItem
              id={topic.id}
              title={topic.title}
              onClick={onChangeTopic}
            />
          </StyledListItem>
        ))}
      </StyledMenuList>
    </StyledNavigationListWrapper>
  );
};
