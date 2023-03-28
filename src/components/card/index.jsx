import React from "react";
import { PM_GRADE } from "../../constants";
import * as Styled from "./style";
import { useState } from "react";
import {
  addFavoriteLocation,
  deleteFavoriteLocation,
  useAppStore,
} from "../../store/slices/appStoreSlice";

function Card({ payload }) {
  const { sidoName, stationName, pm10Grade, pm10Value, dataTime } = payload;
  const {
    data: { favorites },
    dispatch,
  } = useAppStore();

  const isFavorite = favorites.find((item) => item.stationName === stationName)
    ? "true"
    : "false";

  if (!payload) return <>데이터 없음</>;

  return (
    <Styled.Card grade={pm10Grade}>
      <Styled.FavoriteIcon
        favorite={isFavorite}
        onClick={(e) => {
          isFavorite === "true"
            ? dispatch(deleteFavoriteLocation(stationName))
            : dispatch(addFavoriteLocation({ sidoName, stationName }));
        }}
      />
      <Styled.Location>
        <Styled.Station>{stationName}</Styled.Station>
        <Styled.City>{sidoName}</Styled.City>
      </Styled.Location>
      <Styled.Grade>{PM_GRADE.get(pm10Grade).text}</Styled.Grade>
      <Styled.Value>
        미세먼지 수치: {Number(pm10Value) || "알 수 없음"}
      </Styled.Value>
      <Styled.Time>({dataTime} 기준)</Styled.Time>
    </Styled.Card>
  );
}

export default Card;
