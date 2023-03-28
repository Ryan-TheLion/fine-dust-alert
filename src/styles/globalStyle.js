import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}
  html {
    min-width: 300px;
    font-family: 'Noto Sans KR', sans-serif
  }
`;
