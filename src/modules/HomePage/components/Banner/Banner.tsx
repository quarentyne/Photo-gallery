import {
  StyledBannerBackground,
  StyledBannerContainer,
  StyledBannerImageBlock,
  StyledBannerPhoto,
  StyledBannerWrapper,
} from './styles';

interface IBanner {
  imageURL: string;
  authorId: string;
  description: string;
  authorName: string;
}

export const Banner = ({
  imageURL,
  description,
  authorId,
  authorName,
}: IBanner) => {
  return (
    <StyledBannerWrapper>
      <StyledBannerContainer>
        <StyledBannerImageBlock>
          <StyledBannerPhoto src={imageURL} alt={description} />
          <StyledBannerBackground />
        </StyledBannerImageBlock>
      </StyledBannerContainer>
    </StyledBannerWrapper>
  );
};
