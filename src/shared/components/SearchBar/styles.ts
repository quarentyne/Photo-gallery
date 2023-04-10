import styled from "styled-components";
import { COLORS } from "../../constants/themes";

export const StyledSearchInput = styled.input`
  min-width: 250px;
  width: 90%;
  display: flex;
  margin: 0 auto;
  padding: 5px 10px;
  border: none;
  &:focus{
    outline: none;
  };
  border: 1px solid ${COLORS.GREY};
  border-radius: 15px;
`;