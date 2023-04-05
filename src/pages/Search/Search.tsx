import { useCallback } from 'react';
import {
  errorSelector,
  paginationSelector,
  querySelector,
  searchLoadingStatusSelector,
  getPhotosByQuery,
  searchResultSelector,
  totalPagesSelector,
} from '../../modules/SearchPage';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { PER_PAGE } from '../../shared/constants';
import { LoadMoreButton } from '../../shared/components';
import { GalleryList } from '../../modules/HomePage';
import { StyledErrorMessage } from './style';

export const Search = () => {
  const page = useAppSelector(paginationSelector);
  const error = useAppSelector(errorSelector);
  const isLoading = useAppSelector(searchLoadingStatusSelector);
  const photos = useAppSelector(searchResultSelector);
  const query = useAppSelector(querySelector);
  const totalPagesAmount = useAppSelector(totalPagesSelector);

  const dispatch = useAppDispatch();

  const loadMorePhotos = useCallback(() => {
    dispatch(getPhotosByQuery({ query, per_page: PER_PAGE, page }));
  }, [dispatch, query, page]);

  if (error) {
    return (
      <StyledErrorMessage>{`An error occurred. Try again later`}</StyledErrorMessage>
    );
  }

  if (!photos.length) {
    return (
      <StyledErrorMessage>
        {`We didn't find anything. Try another query`}
      </StyledErrorMessage>
    );
  }

  return (
    <>
      <GalleryList photos={photos} isLoading={isLoading} />
      {totalPagesAmount >= page ? (
        <LoadMoreButton onClick={loadMorePhotos} />
      ) : null}
    </>
  );
};
