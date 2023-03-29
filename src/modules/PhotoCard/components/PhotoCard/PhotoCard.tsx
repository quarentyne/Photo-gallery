import { Link } from 'react-router-dom';
import { ROUTES_PATHS } from '../../../../shared/constants';
import {
  StyledControlBlock,
  StyledControlButton,
  StyledPhotoCardWrapper,
  StyledPhotoCard,
} from './styles';

interface IPhotoCard {
  authorId: string;
  authorName: string;
  photoUrl: string;
  photoDescription: string;
  onGoBackButtonClick: () => void;
}

export const PhotoCard = ({
  authorName,
  authorId,
  photoUrl,
  photoDescription,
  onGoBackButtonClick,
}: IPhotoCard) => {
  return (
    <StyledPhotoCardWrapper>
      <StyledPhotoCard src={photoUrl} alt={photoDescription} />
      <StyledControlBlock>
        <StyledControlButton onClick={onGoBackButtonClick}>
          Go back
        </StyledControlButton>
        <Link to={`${ROUTES_PATHS.USER}${authorId}`}>
          <StyledControlButton>{authorName}</StyledControlButton>
        </Link>
      </StyledControlBlock>
    </StyledPhotoCardWrapper>
  );
};
