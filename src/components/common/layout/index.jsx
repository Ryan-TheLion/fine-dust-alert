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
]);

function Layout() {
  const currentScreenSize = useScreenSize();
  const location = useLocation();

  console.log({ location: location.pathname });

  return (
    <Styled.Layout {...{ [currentScreenSize]: currentScreenSize }}>
      <Header {...{ [currentScreenSize]: currentScreenSize }} />
      <Title
        {...{ [currentScreenSize]: currentScreenSize }}
        metaTitle={titleMap.get(location.pathname).metaTitle}
        titleContent={titleMap.get(location.pathname).renderText}
      />
      <Outlet context={{ [currentScreenSize]: currentScreenSize }} />
    </Styled.Layout>
  );
}

export default Layout;
