import { createGlobalStyle } from "styled-components";
import { COLORS, FONT_SIZES } from "./shared/constants";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html{    
    box-sizing: border-box;
    font-family: Helvetica;
    font-weight: 400;
    font-size: ${FONT_SIZES[14]};
    color: ${COLORS.BLACK};
    line-height: 1.6;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figcaption,
  figure,
  blockquote,
  dl dd {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  .swiper-horizontal > .swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {
    bottom: -2px;
  };

  .swiper-slide{
    display: flex;
    align-self: center;
    justify-content: center;
  }
`;