import styled from "styled-components";
import { COLORS } from "../../constants/themes";

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.GREY};
  transition: 0.15s ease;
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: none;
  &:focus{
    outline: none;
  };
`;

export const StyledSearchButton = styled.button`
  border: none;
  background-color: ${COLORS.GREY};
  padding: 5px 10px;
`;