import React, { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { selectStation, useAppStore } from "../../store/slices/appStoreSlice";
import LocationSelect from "../../components/locationSelect";
import Card from "../../components/card";
import * as Styled from "./style";

function MyLocationFineDustPage() {
  const { dustList, ...sizeContext } = useOutletContext();

  const {
    data: { selectedCity, selectedStation },
    dispatch,
  } = useAppStore();

  useEffect(() => {
    if (!dustList) return;
    if (
      !selectedStation ||
      !dustList.find((item) => item.stationName === selectedStation)
    ) {
      dispatch(selectStation(dustList[0].stationName));
    }
  }, [dustList, selectedCity]);

  console.log("mypage: ", { dustList, selectedCity, selectedStation });

  return (
    <Styled.MyLocationPage {...sizeContext}>
      <LocationSelect />
      <Styled.CardWrapper>
        {selectedStation && dustList && (
          <Card
            payload={dustList?.find(
              (item) => item.stationName === selectedStation
            )}
          />
        )}
      </Styled.CardWrapper>
    </Styled.MyLocationPage>
  );
}

export default MyLocationFineDustPage;
