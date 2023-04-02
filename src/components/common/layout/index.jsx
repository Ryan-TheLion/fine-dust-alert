import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header";
import * as Styled from "./style";
import { useScreenSize } from "../../../hooks/useScreenSize";
import Title from "../header/title";

const titleMap = new Map([
  [
    "/",
    {
      metaTitle: "미세먼지 알리미 | 내 지역",
      renderText: "내 지역 미세먼지",
    },
  ],
  [
    "/finedust",
    {
      metaTitle: "미세먼지 알리미 | 전체 시,도",
      renderText: "전체 시,도 미세먼지",
    },
  ],
  [
    "/favorites",
    {
      metaTitle: "미세먼지 알리미 | 즐겨찾기",
      renderText: "즐겨찾기 지역 미세먼지",
    },
  ],
  [
    "404page",
    {
      metaTitle: "404 Not Found",
      renderText: "404 Not Found",
    },
  ],
]);

function Layout() {
  const currentScreenSize = useScreenSize();
  const location = useLocation();

  const titleInfo = titleMap.get(location.pathname) ?? titleMap.get("404page");

  return (
    <Styled.Layout {...{ [currentScreenSize]: currentScreenSize }}>
      <Header {...{ [currentScreenSize]: currentScreenSize }} />
      <Title
        {...{ [currentScreenSize]: currentScreenSize }}
        metaTitle={titleInfo.metaTitle}
        titleContent={titleInfo.renderText}
      />
      <Outlet context={{ [currentScreenSize]: currentScreenSize }} />
    </Styled.Layout>
  );
}

export default Layout;
