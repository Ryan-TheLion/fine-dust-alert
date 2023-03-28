import React from "react";
import styled from "styled-components";
import NavLinkIcon from "./navLinkIcon";
import * as Styled from "./style";

const StyledContent = styled.div`
  font-size: inherit;
`;

function NavLinkItem({ icon, iconSize, text, ...props }) {
  return (
    <Styled.NavLinkItem {...props}>
      {icon && <NavLinkIcon element={icon} size={iconSize} />}
      <StyledContent>{text}</StyledContent>
    </Styled.NavLinkItem>
  );
}

export default NavLinkItem;
