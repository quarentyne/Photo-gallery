import { ROUTES_PATHS } from '../../../../shared/constants';
import { StyledItemImage, StyledItemLink } from './styles';

interface IGalleryItem {
  id: string;
  description: string;
  url: string;
}

export const GalleryItem = ({ id, description, url }: IGalleryItem) => {
  return (
    <StyledItemLink to={`${ROUTES_PATHS.PHOTO}${id}`}>
      <StyledItemImage src={url} alt={description} />
    </StyledItemLink>
  );
};
