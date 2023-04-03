import styled from "styled-components";
import { DEVICES } from "../../../../shared/constants/themes";

export const StyledBannerWrapper = styled.div`
  height: 230px;
  @media screen and ${DEVICES.MOBILE_XL}{
    height: 310px;
  };
  @media screen and ${DEVICES.TABLET}{
    height: 594px;
  };
`;

export const StyledBannerContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBannerImageBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;  
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledBannerBackground = styled.div`
  position: absolute;
  background-color: rgba(10, 10, 10, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const StyledBannerPhoto = styled.img`
  width: 100%;
`;