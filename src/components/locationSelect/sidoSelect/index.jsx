import React, { useRef } from "react";
import { useAppStore } from "../../../store/slices/appStoreSlice";
import DropDown from "../../dropDown";
import seoul from "/src/assets/seoul.jpg";
import busan from "/src/assets/busan.gif";
import daegu from "/src/assets/daegu.png";
import incheon from "/src/assets/incheon.jpg";
import gwangju from "/src/assets/gwangju.jpg";
import daejeon from "/src/assets/daejeon.jpg";
import ulsan from "/src/assets/ulsan.jpg";
import gyeonggido from "/src/assets/gyeonggido.jpg";
import gangwondo from "/src/assets/gangwondo.jpg";
import chungbuk from "/src/assets/chungbuk.jpg";
import chungnam from "/src/assets/chungnam.jpg";
import jeonbuk from "/src/assets/jeonbuk.jpg";
import jeonnam from "/src/assets/jeonnam.jpg";
import gyeongbuk from "/src/assets/gyeongbuk.png";
import gyeongnam from "/src/assets/gyeongnam.gif";
import jeju from "/src/assets/jeju.jpg";
import sejong from "/src/assets/sejong.jpg";

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
