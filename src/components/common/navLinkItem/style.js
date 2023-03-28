import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  gap: 4px;
  color: #000;
  transition: color 0.2s;
  &.active {
    color: ${({ theme }) => theme.platte.active};
  }
`;
