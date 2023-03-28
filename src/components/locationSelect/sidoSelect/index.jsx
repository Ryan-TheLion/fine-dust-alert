import React, { useRef } from "react";
import { useAppStore } from "../../../store/slices/appStoreSlice";
import DropDown from "../../dropDown";
// import seoul from "../../../seoul.jpg";
// import busan from "../../../busan.gif";
// import daegu from "../../../daegu.png";
// import incheon from "../../../incheon.jpg";
// import gwangju from "../../../gwangju.jpg";
// import daejeon from "../../../daejeon.jpg";
// import ulsan from "../../../ulsan.jpg";
// import gyeonggido from "../../../gyeonggido.jpg";
// import gangwondo from "../../../gangwondo.jpg";
// import chungbuk from "../../../chungbuk.jpg";
// import chungnam from "../../../chungnam.jpg";
// import jeonbuk from "../../../jeonbuk.jpg";
// import jeonnam from "../../../jeonnam.jpg";
// import gyeongbuk from "../../../gyeongbuk.png";
// import gyeongnam from "../../../gyeongnam.gif";
// import jeju from "../../../jeju.jpg";
// import sejong from "../../../sejong.jpg";

const sidoList = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];

const cityLogoMap = new Map([
  [
    "서울",
    <img src="/assets/seoul.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "부산",
    <img src="/assets/busan.gif" width="24" style={{ display: "block" }} />,
  ],
  [
    "대구",
    <img src="/assets/daegu.png" width="24" style={{ display: "block" }} />,
  ],
  [
    "인천",
    <img src="/assets/incheon.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "광주",
    <img src="/assets/gwangju.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "대전",
    <img src="/assets/daejeon.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "울산",
    <img src="/assets/ulsan.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "경기",
    <img
      src="/assets/gyeonggido.jpg"
      width="24"
      style={{ display: "block" }}
    />,
  ],
  [
    "강원",
    <img src="/assets/gangwodo.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "충북",
    <img src="/assets/chungbuk.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "충남",
    <img src="/assets/chungnam.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "전북",
    <img src="/assets/jeonbuk.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "전남",
    <img src="/assets/jeonnam.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "경북",
    <img src="/assets/gyeongbuk.png" width="24" style={{ display: "block" }} />,
  ],
  [
    "경남",
    <img src="/assets/gyeongnam.gif" width="24" style={{ display: "block" }} />,
  ],
  [
    "제주",
    <img src="/assets/jeju.jpg" width="24" style={{ display: "block" }} />,
  ],
  [
    "세종",
    <img src="/assets/sejong.jpg" width="24" style={{ display: "block" }} />,
  ],
]);

function SidoSelect() {
  const {
    data: { selectedCity },
  } = useAppStore();

  return (
    <>
      {cityLogoMap.get(selectedCity)}
      <DropDown name="sido" options={sidoList} defaultValue={selectedCity} />
    </>
  );
}

export default SidoSelect;
