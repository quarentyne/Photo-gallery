import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledItemLink = styled(Link)`
  &:hover{
    cursor: zoom-in;
    transition: 0.2s ease;
    scale: 1.02;
  };
`;

export const StyledItemImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;