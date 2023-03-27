import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { PER_PAGE } from '../../shared/constants';
import { Loader, LoadMoreButton } from '../../shared/components';
import { GalleryList } from '../../modules/PhotosCommon';
import { Banner } from '../../modules/BannerCommon';
import {
  getRandomPhotos,
  randomPhotosSelector,
} from '../../modules/RandomPhotos';
import {
  getRandomBannerPhoto,
  randomBannerPhotoSelector,
} from '../../modules/RandomBanner';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { photo, ...bannerParams } = useAppSelector(randomBannerPhotoSelector);
  const { photos, page } = useAppSelector(randomPhotosSelector);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    dispatch(getRandomBannerPhoto());
  }, [dispatch]);

  useEffect(() => {
    if (!photos.length) {
      dispatch(getRandomPhotos({ page, per_page: PER_PAGE }));
    }
  }, [dispatch, page, photos]);

  useEffect(() => {
    if (fetching) {
      dispatch(getRandomPhotos({ page, per_page: PER_PAGE }));
      setFetching(false);
    }
  }, [dispatch, page, fetching]);

  const loadMorePhotos = () => setFetching(true);

  return (
    <>
      {photo && (
        <Banner
          imageAltText={photo.alt_description}
          imageURL={photo.urls.regular}
          authorId={photo.user.id}
          authorName={photo.user.name}
          isLoading={bannerParams.isLoading}
        />
      )}
      <GalleryList photos={photos} />
      {fetching ? <Loader /> : <LoadMoreButton onClick={loadMorePhotos} />}
    </>
  );
};
