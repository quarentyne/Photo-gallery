import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPhoto, PhotoCard, photoSelector } from '../../modules/PhotoCard';
import { Loader } from '../../shared/components';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Photo = () => {
  const dispatch = useAppDispatch();
  const photo = useAppSelector(photoSelector);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getPhoto({ id }));
    }
  }, [dispatch, id]);

  if (!photo) {
    return <Loader />;
  }

  const goBackHandler = () => navigate(-1);

  return (
    <div>
      <PhotoCard
        authorName={photo.user.name}
        photoDescription={photo.description}
        photoUrl={photo.urls.regular}
        authorId={photo.user.id}
        onGoBackButtonClick={goBackHandler}
      />
    </div>
  );
};
