import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getUserInfo,
  UserCard,
  userLoadingStatusSelector,
  userSelector,
} from '../../modules/UserCard';
import { Spinner } from '../../shared/components';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const User = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const isLoading = useAppSelector(userLoadingStatusSelector);
  const { username } = useParams();

  useEffect(() => {
    if (username) {
      dispatch(getUserInfo({ username }));
    }
  }, [dispatch, username]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {user && (
        <UserCard
          name={user.name}
          totalLikes={user.total_likes}
          totalPhotos={user.total_photos}
          followersCount={user.followers_count}
          profileImageURL={user.profile_image.large}
          bio={user.bio}
        />
      )}
    </>
  );
};
