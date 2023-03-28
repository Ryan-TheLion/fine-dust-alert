import React from "react";
import Logo from "../logo";
import Nav from "../nav";
import * as Styled from "./style";

function Header({ ...props }) {
  return (
    <Styled.Header {...props}>
      {props?.pc ? <Logo /> : null}
      <Nav />
    </Styled.Header>
  );
}

export default Header;
