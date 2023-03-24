import { useEffect, useState } from 'react';
import {
  Banner,
  bannerPhotoSelector,
  getBannerPhoto,
} from '../../modules/BannerPhoto';
import { getListPhotos, listPhotosSelector } from '../../modules/ListPhotos';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { photo } = useAppSelector(bannerPhotoSelector);
  const { photos, page } = useAppSelector(listPhotosSelector);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    dispatch(getBannerPhoto());
  }, [dispatch]);
  useEffect(() => {
    if (fetching) {
      dispatch(getListPhotos({ page, per_page: 15 }));
      setFetching(false);
    }
  }, [dispatch, page, fetching]);

  return (
    <>
      {photo && (
        <Banner
          imageAltText={photo.alt_description}
          imageURL={photo.urls.full}
          authorId={photo.user.id}
          authorName={photo.user.name}
        />
      )}
      {photos.map((photo) => (
        <img alt={photo.description} src={photo.urls.small} />
      ))}
      <button onClick={() => setFetching(true)} />
    </>
  );
};
