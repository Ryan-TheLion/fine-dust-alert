import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoLink = styled(Link)`
  color: #000;
  font-weight: bolder;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color 0.1s;
  svg {
    font-size: 40px;
    path {
      transition: fill 0.1s;
      transform-origin: bottom;
    }
  }
`;
