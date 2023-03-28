import React from "react";
import { useOutletContext } from "react-router-dom";
import { useSWRConfig } from "swr";
import { Card, CardList } from "../../components";
import { useAppStore } from "../../store/slices/appStoreSlice";
import * as Styled from "./style";

function FavoritesPage() {
  const { dustList, ...sizeContext } = useOutletContext();
  const {
    data: { favorites },
  } = useAppStore();

  const { cache } = useSWRConfig();

  const favoriteList = favorites?.length
    ? favorites.map((favoriteItem) => {
        const key = `/getCity/${favoriteItem.sidoName}`;
        const { data } = cache.get(key);

        return data.response.body.items.find(
          (item) => item.stationName === favoriteItem.stationName
        );
      })
    : null;

  console.log({ cache });
  console.log({ favorites });

  if (!favorites.length)
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
}

export default FavoritesPage;
