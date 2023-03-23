import styled from 'styled-components';
import { COLORS } from '../../constants';

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;
  height: 62px;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: ${COLORS.WHITE};
`;

export const StyledHeaderLogo = styled.img`
  width: 36px;
`;
