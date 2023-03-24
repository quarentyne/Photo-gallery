import styled from "styled-components";
import { COLORS } from "../../constants/themes";

export const StyledNavigationListWrapper = styled.div`
  position: sticky;
  z-index: 5;
  top: 62px;
  background-color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const StyledMenuList = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

export const StyledListItem = styled.div`
  display: inline-block;
  padding: 14px;
  text-align: center;
`;