import React, { useRef } from "react";
import { useAppStore } from "../../../store/slices/appStoreSlice";
import DropDown from "../../dropDown";
import seoul from "../../../assets/seoul.jpg";
import busan from "../../../assets/busan.gif";
import daegu from "../../../assets/daegu.png";
import incheon from "../../../assets/incheon.jpg";
import gwangju from "../../../assets/gwangju.jpg";
import daejeon from "../../../assets/daejeon.jpg";
import ulsan from "../../../assets/ulsan.jpg";
import gyeonggido from "../../../assets/gyeonggido.jpg";
import gangwondo from "../../../assets/gangwondo.jpg";
import chungbuk from "../../../assets/chungbuk.jpg";
import chungnam from "../../../assets/chungnam.jpg";
import jeonbuk from "../../../assets/jeonbuk.jpg";
import jeonnam from "../../../assets/jeonnam.jpg";
import gyeongbuk from "../../../assets/gyeongbuk.png";
import gyeongnam from "../../../assets/gyeongnam.gif";
import jeju from "../../../assets/jeju.jpg";
import sejong from "../../../assets/sejong.jpg";
import { useDataList } from "../../../hooks/useDataList";

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
