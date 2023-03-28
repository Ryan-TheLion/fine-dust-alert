import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${(props) => {
    const { mobile, tablet, pc } = props;
    if (mobile || tablet) {
      return css`
        padding-bottom: 70px;
        margin-bottom: 20px;
      `;
    }
    if (pc) {
      return css`
        padding-top: 70px;
      `;
    }
  }}
`;
