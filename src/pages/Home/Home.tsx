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
  getPhotosByQuery,
  totalPagesSelector,
  errorSelector,
} from '../../modules/HomePage';
import { StyledErrorMessage } from './style';

export const Home = () => {
  const dispatch = useAppDispatch();
  const bannerPhoto = useAppSelector(bannerPhotoSelector);
  const page = useAppSelector(paginationSelector);
  const photos = useAppSelector(photosSelector);
  const isGalleryLoading = useAppSelector(galleryLoadingStatusSelector);
  const totalPages = useAppSelector(totalPagesSelector);
  const error = useAppSelector(errorSelector);
  const { topicId, query } = useParams();

  useEffect(() => {
    dispatch(getBannerPhoto({}));
  }, [dispatch]);

  useEffect(() => {
    if (query) {
      dispatch(getPhotosByQuery({ query, per_page: PER_PAGE, page: 1 }));
    } else {
      dispatch(getGalleryPhotos({ page: 1, per_page: PER_PAGE, topicId }));
    }
  }, [dispatch, topicId, query]);

  const loadMorePhotos = useCallback(() => {
    if (query) {
      dispatch(getPhotosByQuery({ query, per_page: PER_PAGE, page }));
    } else {
      dispatch(getGalleryPhotos({ page, per_page: PER_PAGE, topicId }));
    }
  }, [dispatch, page, topicId, query]);

  if (!photos.length) {
    return (
      <StyledErrorMessage>
        We didn't find anything. Try another query
      </StyledErrorMessage>
    );
  }

  if (error) {
    return (
      <StyledErrorMessage>
        An error occurred. Try again later
      </StyledErrorMessage>
    );
  }

  return (
    <>
      {bannerPhoto && (
        <Banner
          description={bannerPhoto.description}
          imageURL={bannerPhoto.urls.regular}
        />
      )}
      <GalleryList photos={photos} isLoading={isGalleryLoading} />
      {totalPages >= page ? <LoadMoreButton onClick={loadMorePhotos} /> : null}
    </>
  );
};
