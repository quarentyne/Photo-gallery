import styled from "styled-components";
import { DEVICES } from "../../../../shared/constants/themes";

export const StyledGalleryWrapper = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  padding: 20px 0;
`;

export const StyledGalleryContainer = styled.div`
  display: grid;
  align-items: center;
  column-gap: 20px;
  row-gap: 24px;
  grid-template-columns: minmax(0, 1fr);
  @media screen and ${DEVICES.MOBILE_XL}{
    grid-template-columns: repeat(2, minmax(0, 1fr))
  };
  @media screen and ${DEVICES.TABLET}{
    grid-template-columns: repeat(3, minmax(0, 1fr))
  };
`;