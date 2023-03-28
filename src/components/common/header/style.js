import styled, { css } from "styled-components";
import { Nav } from "../nav/style";
import { NavLinkItem } from "../navLinkItem/style";
import { NavLinkIcon } from "../navLinkItem/navLinkIcon/style";

// Header
export const Header = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 4px 16px;
  height: 70px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 9;

  ${(props) => {
    const { mobile, tablet, pc } = props;
    if (mobile || tablet) {
      return css`
        justify-content: center;
        bottom: 0;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      `;
    }
    if (pc) {
      return css`
        top: 0;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        ${Nav} {
          flex: 1;
          max-width: 1000px;
          justify-content: flex-end;
          /* margin-left: -100px; */
        }
        ${NavLinkItem} {
          transition: border-bottom 0.1s;
          border-bottom: 0px solid transparent;
          &:hover {
            border-bottom: 4px solid ${({ theme }) => theme.platte.active};
          }
        }
        ${NavLinkIcon} {
          display: none;
        }
      `;
    }
  }}
`;
