import styled, { css } from "styled-components";

export const Title = styled.h2`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 300px;
  padding: 20px;
  font-size: 20px;
  background-color: #fff;
  ${({ mobile, tablet, pc }) => {
    if (mobile || tablet) {
      return css`
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;
        height: 50px;
        border-bottom: 1px solid #000;
      `;
    }
    if (pc) {
      return css`
        position: static;
      `;
    }
  }}
`;
