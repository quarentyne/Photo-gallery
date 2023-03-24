import { useEffect } from 'react';
import { getBannerPhoto } from '../../modules/BannerPhoto/features/actionCreators';
import { bannerPhotoSelector } from '../../modules/BannerPhoto/features/selector';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { photo } = useAppSelector(bannerPhotoSelector);
  useEffect(() => {
    dispatch(getBannerPhoto());
  }, [dispatch]);

  return (
    <>
      <img src={photo?.urls.regular} alt={photo?.alt_description} />
    </>
  );
};
