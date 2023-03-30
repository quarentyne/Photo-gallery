import styled from "styled-components";
import { COLORS, FONT_SIZES } from "../../../../shared/constants/themes";

export const StyledUserCardWrapper = styled.div`
  padding: 5px 15px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const StyledUserImageBlock = styled.div`
  max-width: 40%;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: start;
`;

export const StyledUserImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledUserInfoBlock = styled.div`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  max-width: 60%;
`;

export const StyledUserName = styled.div`
  font-size: ${FONT_SIZES[40]};
  font-weight: bold;
`;

export const StyledUserBio = styled.div`
  overflow-wrap: break-word;
  white-space: pre-line;
  max-width: 70%;
`;

export const StyledUserStatisticBlock = styled.ul`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
`;

export const StyledUserStatisticData = styled.span`
  color: ${COLORS.GREY};
`;