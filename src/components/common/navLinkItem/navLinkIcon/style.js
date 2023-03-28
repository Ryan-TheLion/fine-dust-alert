import styled, { css } from "styled-components";

export const NavLinkIcon = styled.div`
  ${(props) =>
    css`
      width: ${props?.size ?? "1em"};
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: ${props?.size ?? "16px"};
      }
    `}
`;
