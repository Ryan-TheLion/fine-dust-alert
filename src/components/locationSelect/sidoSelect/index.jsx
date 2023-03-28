import React, { useRef } from "react";
import { useAppStore } from "../../../store/slices/appStoreSlice";
import DropDown from "../../dropDown";
import seoul from "../../../seoul.jpg";
import busan from "../../../busan.gif";
import daegu from "../../../daegu.png";
import incheon from "../../../incheon.jpg";
import gwangju from "../../../gwangju.jpg";
import daejeon from "../../../daejeon.jpg";
import ulsan from "../../../ulsan.jpg";
import gyeonggido from "../../../gyeonggido.jpg";
import gangwondo from "../../../gangwondo.jpg";
import chungbuk from "../../../chungbuk.jpg";
import chungnam from "../../../chungnam.jpg";
import jeonbuk from "../../../jeonbuk.jpg";
import jeonnam from "../../../jeonnam.jpg";
import gyeongbuk from "../../../gyeongbuk.png";
import gyeongnam from "../../../gyeongnam.gif";
import jeju from "../../../jeju.jpg";
import sejong from "../../../sejong.jpg";

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
  ["서울", seoul],
  ["부산", busan],
  ["대구", daegu],
  ["인천", incheon],
  ["광주", gwangju],
  ["대전", daejeon],
  ["울산", ulsan],
  ["경기", gyeonggido],
  ["강원", gangwondo],
  ["충북", chungbuk],
  ["충남", chungnam],
  ["전북", jeonbuk],
  ["전남", jeonnam],
  ["경북", gyeongbuk],
  ["경남", gyeongnam],
  ["제주", jeju],
  ["세종", sejong],
]);

function SidoSelect() {
  const {
    data: { selectedCity },
  } = useAppStore();

  return (
    <>
      <img
        src={cityLogoMap.get(selectedCity)}
        width="24"
        style={{ display: "block" }}
      />
      <DropDown name="sido" options={sidoList} defaultValue={selectedCity} />
    </>
  );
}

export default SidoSelect;
