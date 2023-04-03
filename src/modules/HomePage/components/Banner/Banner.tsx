import {
  StyledBannerBackground,
  StyledBannerContainer,
  StyledBannerImageBlock,
  StyledBannerPhoto,
  StyledBannerWrapper,
} from './styles';

interface IBanner {
  imageURL: string;
  description: string;
}

export const Banner = ({ imageURL, description }: IBanner) => {
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
