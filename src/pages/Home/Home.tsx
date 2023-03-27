import { useEffect, useState } from 'react';
import {
  Banner,
  bannerPhotoSelector,
  getBannerPhoto,
} from '../../modules/BannerPhoto';
import { getListPhotos, listPhotosSelector } from '../../modules/ListPhotos';
import { PER_PAGE } from '../../shared/constants';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { photo, ...bannerParams } = useAppSelector(bannerPhotoSelector);
  const { photos, page } = useAppSelector(listPhotosSelector);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    dispatch(getBannerPhoto());
  }, [dispatch]);
  useEffect(() => {
    if (fetching) {
      dispatch(getListPhotos({ page, per_page: PER_PAGE }));
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
          isLoading={bannerParams.isLoading}
        />
      )}
      {photos.map((photo) => (
        <img key={photo.id} alt={photo.description} src={photo.urls.small} />
      ))}
      <button onClick={() => setFetching(true)} />
    </>
  );
};
