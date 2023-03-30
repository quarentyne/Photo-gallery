import { IPhoto } from '../../../../models';
import { Loader } from '../../../../shared/components';
import { GalleryItem } from '../GalleryItem';
import { StyledGalleryContainer, StyledGalleryWrapper } from './styles';

interface IGallery {
  photos: IPhoto[];
  isLoading: boolean;
}

export const GalleryList = ({ photos, isLoading }: IGallery) => {
  return (
    <StyledGalleryWrapper>
      <StyledGalleryContainer>
        {photos.map((photo) => (
          <GalleryItem
            url={photo.urls.small}
            id={photo.id}
            description={photo.description}
            key={photo.id}
          />
        ))}
      </StyledGalleryContainer>
      {isLoading && <Loader />}
    </StyledGalleryWrapper>
  );
};
