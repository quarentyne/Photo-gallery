import { useEffect } from 'react';
import {
  Banner,
  bannerPhotoSelector,
  getBannerPhoto,
} from '../../modules/BannerPhoto';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { photo } = useAppSelector(bannerPhotoSelector);
  useEffect(() => {
    dispatch(getBannerPhoto());
  }, [dispatch]);

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
      {/* <img src={photo?.urls.full} alt={photo?.alt_description} /> */}
    </>
  );
};
