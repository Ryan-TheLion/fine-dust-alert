import styled, { css } from "styled-components";

export const CardList = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  place-items: center;
  box-sizing: border-box;
  padding: 0 12px;
  ${({ mobile, tablet, pc }) => {
    if (mobile)
      return css`
        margin-top: 100px;
        grid-template-columns: repeat(1, 1fr);
      `;
    if (tablet)
      return css`
        margin-top: 100px;
        grid-template-columns: repeat(2, 0.4fr);
      `;
    if (pc)
      return css`
        margin-top: 20px;
        grid-template-columns: repeat(3, 0.25fr);
      `;
  }};
`;
