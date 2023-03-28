import React from "react";
import NavLinkItem from "../navLinkItem";
import * as Styled from "./style";
import { BiStar } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function Nav() {
  return (
    <Styled.Nav>
      <NavLinkItem
        to=""
        activeclassname="acitve"
        icon={<MdLocationPin />}
        iconSize="24px"
        text="내 지역보기"
      />
      <NavLinkItem
        to="finedust"
        activeclassname="acitve"
        icon={<FaMapMarkedAlt />}
        iconSize="24px"
        text="전체 시도보기"
      />
      <NavLinkItem
        to="favorites"
        activeclassname="acitve"
        icon={<BiStar />}
        iconSize="24px"
        text="즐겨찾기"
      />
    </Styled.Nav>
  );
}

export default Nav;
