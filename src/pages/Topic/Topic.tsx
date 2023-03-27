import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Banner } from '../../modules/BannerCommon';
import {
  getTopicBannerPhoto,
  topicBannerPhotoSelector,
} from '../../modules/TopicBanner';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Topic = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { photo, ...bannerParams } = useAppSelector(topicBannerPhotoSelector);
  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getTopicBannerPhoto({ topicId: id }));
  }, [dispatch, id]);

  if (!photo) {
    return <></>;
  }

  return (
    <>
      <Banner
        imageAltText={photo.alt_description}
        imageURL={photo.urls.full}
        authorId={photo.user.id}
        authorName={photo.user.name}
        isLoading={bannerParams.isLoading}
      />
    </>
  );
};
