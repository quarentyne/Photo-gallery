import { Link } from 'react-router-dom';
import { ROUTES_PATHS } from '../../../../shared/constants';
import {
  StyledControlBlock,
  StyledControlButton,
  StyledPhotoCardWrapper,
  StyledPhotoCard,
} from './styles';

interface IPhotoCard {
  authorUsername: string;
  authorName: string;
  photoUrl: string;
  photoDescription: string;
  onGoBackButtonClick: () => void;
}

export const PhotoCard = ({
  authorName,
  authorUsername,
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
        <Link to={`${ROUTES_PATHS.USER}${authorUsername}`}>
          <StyledControlButton>{authorName}</StyledControlButton>
        </Link>
      </StyledControlBlock>
    </StyledPhotoCardWrapper>
  );
};
