import styled, { css } from "styled-components";
import { LocationSelect } from "../../components/locationSelect/style";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MyLocationPage = styled.div`
  ${LocationSelect} {
    position: sticky;
    z-index: 4;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    ${({ mobile, tablet, pc }) => {
      if (mobile || tablet) {
        return css`
          top: 50px;
        `;
      }
      if (pc) {
        return css`
          top: 70px;
        `;
      }
    }}
  }
  ${CardWrapper} {
    ${({ mobile, tablet, pc }) => {
      if (mobile || tablet) {
        return css`
          margin-top: 230px;
        `;
      }
      if (pc) {
        return css`
          margin-top: 100px;
        `;
      }
    }}
  }
`;
