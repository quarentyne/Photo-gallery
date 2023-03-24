import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Banner,
  bannerPhotoSelector,
  getTopicBannerPhoto,
} from '../../modules/BannerPhoto';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Topic = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { photo } = useAppSelector(bannerPhotoSelector);
  useEffect(() => {
    dispatch(getTopicBannerPhoto({ topicId: id }));
  }, [dispatch, id]);

  if (!photo) {
    return <></>;
  }

  return (
    <>
      <div>topic</div>
      <Banner
        imageAltText={photo.alt_description}
        imageURL={photo.urls.full}
        authorId={photo.user.id}
        authorName={photo.user.name}
      />
    </>
  );
};
