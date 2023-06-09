import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getPhoto,
  PhotoCard,
  photoSelector,
  photoLoadingStatusSelector,
} from '../../modules/PhotoCard';
import { Loader } from '../../shared/components';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Photo = () => {
  const dispatch = useAppDispatch();
  const photo = useAppSelector(photoSelector);
  const isLoading = useAppSelector(photoLoadingStatusSelector);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getPhoto({ id }));
    }
  }, [dispatch, id]);

  const goBackHandler = () => navigate(-1);

  return (
    <>
      {isLoading && <Loader />}
      {photo && (
        <PhotoCard
          authorName={photo.user.name}
          photoDescription={photo.description}
          photoUrl={photo.urls.regular}
          authorUsername={photo.user.username}
          onGoBackButtonClick={goBackHandler}
        />
      )}
    </>
  );
};
