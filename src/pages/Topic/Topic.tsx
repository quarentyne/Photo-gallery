import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Banner } from '../../modules/BannerCommon';
import { GalleryList } from '../../modules/PhotosCommon';
import {
  getTopicBannerPhoto,
  topicBannerPhotoSelector,
} from '../../modules/TopicBanner';
import { getTopicPhotos, topicPhotosSelector } from '../../modules/TopicPhotos';
import { LoadMoreButton } from '../../shared/components';
import { PER_PAGE } from '../../shared/constants';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Topic = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [fetching, setFetching] = useState(false);
  const { photo, ...bannerParams } = useAppSelector(topicBannerPhotoSelector);
  const { photos, page } = useAppSelector(topicPhotosSelector);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getTopicBannerPhoto({ topicId: id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (!id) {
      return;
    }
    if (!photos.length) {
      dispatch(getTopicPhotos({ page, per_page: PER_PAGE, topicId: id }));
    }
  }, [dispatch, photos, id, page]);

  useEffect(() => {
    if (!id) {
      return;
    }
    if (fetching) {
      dispatch(getTopicPhotos({ page, per_page: PER_PAGE, topicId: id }));
      setFetching(false);
    }
  }, [id, fetching, dispatch, page]);

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
      <LoadMoreButton onClick={loadMorePhotos} />
    </>
  );
};
