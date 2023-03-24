import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT_SIZES } from "../../../../shared/constants";

export const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: ${FONT_SIZES[16]};
  font-weight: 500;
  color: ${COLORS.GREY};
  transition: 0.1s ease-in-out;
  &:hover{
    color: ${COLORS.BLACK};
  };
  &.active{
    color: ${COLORS.BLACK};
    &:after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${COLORS.BLACK};
      bottom: 0;
    };
  };
`;