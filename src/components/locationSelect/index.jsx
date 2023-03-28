import React from "react";
import { useOutletContext } from "react-router-dom";
import {
  selectCity,
  selectStation,
  useAppStore,
} from "../../store/slices/appStoreSlice";
import SidoSelect from "./sidoSelect";
import StationSelect from "./stationSelect";
import * as Styled from "./style";

function LocationSelect({ isContainStation = true }) {
  const { dispatch } = useAppStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "sido":
        dispatch(selectCity(value));
        dispatch(selectStation(""));
        return;
      case "station":
        dispatch(selectStation(value));
        return;
    }
  };

  return (
    <Styled.LocationSelect onChange={handleChange}>
      <SidoSelect />
      {isContainStation && <StationSelect />}
    </Styled.LocationSelect>
  );
}

export default LocationSelect;
