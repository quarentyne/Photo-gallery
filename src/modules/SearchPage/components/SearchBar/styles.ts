import styled from "styled-components";
import { COLORS } from "../../../../shared/constants/themes";

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  border: 1px solid ${COLORS.WHITE};
  padding: 5px 10px;
  border-radius: 24px;
  transition: 0.15s ease;
  &:hover {
    border-color: ${COLORS.GREY};
  };
  &active {
    border-color: ${COLORS.GREY};
  };
`;