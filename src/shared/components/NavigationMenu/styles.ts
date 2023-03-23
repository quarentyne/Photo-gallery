import styled from "styled-components";
import { COLORS } from "../../constants";

export const StyledNavigationListWrapper = styled.div`
  position: sticky;
  z-index: 5;
  top: 62px;
  background-color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;
`;