import React from "react";
import { ReactComponent as LogoSVG } from "../../../logo.svg";
import * as Styled from "./style";

function Logo() {
  return (
    <Styled.LogoLink to="/">
      <LogoSVG />
      미세먼지 알리미
    </Styled.LogoLink>
  );
}

export default Logo;
