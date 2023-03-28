import styled, { css } from "styled-components";
import { CardList } from "../../components/card/cardList/style";
import { LocationSelect } from "../../components/locationSelect/style";

// Page Wrapper
export const LocationDustPage = styled.div`
  ${LocationSelect} {
    position: sticky;
    z-index: 4;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    ${({ mobile, tablet, pc }) => {
      if (mobile || tablet) {
        return css`
          top: 50px;
          margin-bottom: 70px;
        `;
      }
      if (pc) {
        return css`
          top: 70px;
        `;
      }
    }}
  }
`;
