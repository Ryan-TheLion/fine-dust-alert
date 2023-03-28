import React from "react";
import { useOutletContext } from "react-router-dom";
import LocationSelect from "../../components/locationSelect";
import Card from "../../components/card";
import { CardList } from "../../components";
import * as Styled from "./style";

function LocationFineDustPage() {
  const { dustList, ...sizeContext } = useOutletContext();

  return (
    <Styled.LocationDustPage {...sizeContext}>
      <LocationSelect isContainStation={false} />
      {dustList && (
        <CardList {...sizeContext}>
          {dustList.map((item, index) => {
            return <Card key={index} payload={item} />;
          })}
        </CardList>
      )}
    </Styled.LocationDustPage>
  );
}

export default LocationFineDustPage;
