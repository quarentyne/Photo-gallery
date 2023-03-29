import { IPhoto } from '../../../../models';
import { GalleryItem } from '../GalleryItem';
import { StyledGalleryContainer, StyledGalleryWrapper } from './styles';

interface IPhotos {
  photos: IPhoto[];
}

export const GalleryList = ({ photos }: IPhotos) => {
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
    </StyledGalleryWrapper>
  );
};
