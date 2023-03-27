import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { getListPhotos, listPhotosSelector } from '../../modules/ListPhotos';
import { PER_PAGE } from '../../shared/constants';
import {
  Banner,
  bannerPhotoSelector,
  getBannerPhoto,
} from '../../modules/BannerPhoto';
import { LoadMoreButton } from '../../shared/components';
import { GalleryList } from '../../modules/PhotosCommon';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { photo, ...bannerParams } = useAppSelector(bannerPhotoSelector);
  const { photos, page } = useAppSelector(listPhotosSelector);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    dispatch(getBannerPhoto());
  }, [dispatch]);

  useEffect(() => {
    if (!photos.length) {
      dispatch(getListPhotos({ page, per_page: PER_PAGE }));
    }
  }, [dispatch, page, photos]);

  useEffect(() => {
    if (fetching) {
      dispatch(getListPhotos({ page, per_page: PER_PAGE }));
      setFetching(false);
    }
  }, [dispatch, page, fetching]);

  const loadMorePhotos = () => setFetching(true);

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
      <GalleryList photos={photos} />
      <LoadMoreButton onClick={loadMorePhotos} />
    </>
  );
};
