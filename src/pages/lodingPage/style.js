import styled, { css } from "styled-components";

export const LoadingPage = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ mobile, tablet, pc }) => {
    if ((mobile, tablet)) {
      return css`
        height: 100vh;
      `;
    }
    if (pc) {
      return css`
        height: calc(100vh - 130px);
      `;
    }
  }}
`;
