import React from "react";
// import { ReactComponent as LogoSVG } from "../../../logo.svg";
import * as Styled from "./style";

function Logo() {
  return (
    <Styled.LogoLink to="/">
      <img src="/assets/logo.svg" alt="logo" />
      미세먼지 알리미
    </Styled.LogoLink>
  );
}

export default Logo;
