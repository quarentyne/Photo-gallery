import { Loader } from '../../../../shared/components/Loader/Loader';
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
  isLoading: boolean;
}

export const Banner = ({
  imageURL,
  imageAltText,
  authorId,
  authorName,
  isLoading,
}: IBanner) => {
  if (isLoading) {
    return (
      <StyledBannerWrapper>
        <StyledBannerContainer>
          <Loader />
        </StyledBannerContainer>
      </StyledBannerWrapper>
    );
  }

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
