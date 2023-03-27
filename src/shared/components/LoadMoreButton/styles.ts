import styled from "styled-components";
import { COLORS, FONT_SIZES } from "../../constants/themes";

export const StyledButton = styled.button`
  display: block;
  margin: 5px auto;
  width: calc((100% / 3) - 8px);
  padding: 16px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  border-radius: 3px;
  border: none;
  font-size: ${FONT_SIZES[14]};
  background-color: ${COLORS.PALE_YELLOW};
  color: ${COLORS.BLACK};
  &:hover{
    background-color: ${COLORS.STRONG_YELLOW};
  }
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  
`;