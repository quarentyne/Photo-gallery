import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { PER_PAGE } from '../../shared/constants';
import { LoadMoreButton } from '../../shared/components';
import {
  Banner,
  bannerPhotoSelector,
  GalleryList,
  getBannerPhoto,
  getGalleryPhotos,
  paginationSelector,
  galleryLoadingStatusSelector,
  photosSelector,
} from '../../modules/HomePage';

export const Home = () => {
  const dispatch = useAppDispatch();
  const bannerPhoto = useAppSelector(bannerPhotoSelector);
  const page = useAppSelector(paginationSelector);
  const photos = useAppSelector(photosSelector);
  const isGalleryLoading = useAppSelector(galleryLoadingStatusSelector);
  const { topicId } = useParams();

  useEffect(() => {
    dispatch(getBannerPhoto({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGalleryPhotos({ page: 1, per_page: PER_PAGE, topicId }));
  }, [dispatch, topicId]);

  const loadMorePhotos = useCallback(() => {
    dispatch(getGalleryPhotos({ page, per_page: PER_PAGE, topicId }));
  }, [dispatch, page, topicId]);

  return (
    <>
      {bannerPhoto && (
        <Banner
          description={bannerPhoto.description}
          imageURL={bannerPhoto.urls.regular}
        />
      )}
      <GalleryList photos={photos} isLoading={isGalleryLoading} />
      <LoadMoreButton onClick={loadMorePhotos} />
    </>
  );
};
