import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTopicBannerPhoto } from '../../modules/BannerPhoto/features/actionCreators';
import { bannerPhotoSelector } from '../../modules/BannerPhoto/features/selector';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';

export const Topic = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { photo } = useAppSelector(bannerPhotoSelector);
  useEffect(() => {
    dispatch(getTopicBannerPhoto({ topicId: id }));
  }, [dispatch, id]);

  return (
    <>
      <div>topic</div>
      <img src={photo?.urls.regular} alt={photo?.alt_description} />
    </>
  );
};
