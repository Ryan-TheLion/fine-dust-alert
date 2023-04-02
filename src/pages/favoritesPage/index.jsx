import React from "react";
import { useOutletContext } from "react-router-dom";
import { Card, CardList } from "../../components";
import { useFavoriteList } from "../../hooks/useFavoriteList";
import * as Styled from "./style";

function FavoritesPage() {
  const { dustList, ...sizeContext } = useOutletContext();

  const { data: favoriteCitysDustList } = useFavoriteList();

  if (!favoriteCitysDustList)
    return (
      <Styled.FarvoritesPage {...sizeContext} isEmpty>
        <Styled.EmptyContentWrapper>
          <Styled.NotiIcon />
          즐겨찾기한 데이터가 없습니다
        </Styled.EmptyContentWrapper>
      </Styled.FarvoritesPage>
    );

  return (
    <Styled.FarvoritesPage>
      <CardList {...sizeContext}>
        {favoriteCitysDustList.map((item, index) => {
          return <Card key={index} payload={item} />;
        })}
      </CardList>
    </Styled.FarvoritesPage>
  );
}

export default FavoritesPage;

/*
  {favoriteList.map((item, index) => {
          return <Card key={index} payload={item} />;
        })}
*/

/*


  if (!favoriteList.length)
    return (
      <Styled.FarvoritesPage {...sizeContext} isEmpty>
        <Styled.EmptyContentWrapper>
          <Styled.NotiIcon />
          즐겨찾기한 데이터가 없습니다
        </Styled.EmptyContentWrapper>
      </Styled.FarvoritesPage>
    );

  return (
    <Styled.FarvoritesPage>
      <CardList {...sizeContext}>
        {favoriteList.map((item, index) => {
          return <Card key={index} payload={item} />;
        })}
      </CardList>
    </Styled.FarvoritesPage>
  );

*/
