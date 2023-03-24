import { ROUTES_PATHS } from '../../../../shared/constants';
import {
  StyledAuthorBlock,
  StyledAuthorLink,
  StyledBannerBackground,
  StyledBannerContainer,
  StyledBannerImageBlock,
  StyledBannerPhoto,
  StyledBannerTextBlock,
  StyledBannerWrapper,
} from './styles';

interface IBanner {
  imageURL: string;
  authorId: string;
  imageAltText: string;
  authorName: string;
}

export const Banner = ({
  imageURL,
  imageAltText,
  authorId,
  authorName,
}: IBanner) => {
  return (
    <StyledBannerWrapper>
      <StyledBannerContainer>
        <StyledBannerImageBlock>
          <StyledBannerPhoto src={imageURL} alt={imageAltText} />
        </StyledBannerImageBlock>
        <StyledBannerTextBlock>
          <StyledBannerBackground />
          <StyledAuthorBlock>
            <StyledAuthorLink to={`${ROUTES_PATHS.USER}${authorId}`}>
              {authorName}
            </StyledAuthorLink>
          </StyledAuthorBlock>
        </StyledBannerTextBlock>
      </StyledBannerContainer>
    </StyledBannerWrapper>
  );
};
