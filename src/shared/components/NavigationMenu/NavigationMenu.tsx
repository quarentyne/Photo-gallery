import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TopicItem, topicsSelector } from '../../../modules/Topics';
import { useAppSelector } from '../../hooks';
import { StyledNavigationListWrapper } from './styles';
import 'swiper/css';
import 'swiper/css/scrollbar';

export const NavigationMenu = () => {
  const { topics } = useAppSelector(topicsSelector);

  return (
    <StyledNavigationListWrapper>
      <Swiper
        modules={[Scrollbar]}
        scrollbar={{
          draggable: true,
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
      >
        {topics?.map((topic) => (
          <SwiperSlide key={topic.id}>
            <TopicItem id={topic.id} title={topic.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledNavigationListWrapper>
  );
};
