import styled from "styled-components";
import { COLORS, FONT_SIZES } from "../../../../shared/constants/themes";

export const StyledPhotoCardWrapper = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
`;

export const StyledPhotoCard = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledControlBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  padding: 5px;
`;

export const StyledControlButton = styled.button`
  border-radius: 10px;
  padding: 7px;
  border-color: ${COLORS.GREY};
  border-width: 1px;
  color: ${COLORS.GREY};
  font-size: ${FONT_SIZES[14]};
  background-color: transparent;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover{
    border-color: ${COLORS.BLACK};
    color: ${COLORS.BLACK};
  };
`;