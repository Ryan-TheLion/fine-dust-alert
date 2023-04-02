import useSWR from "swr";
import { useAppStore } from "../store/slices/appStoreSlice";
import { dustDataFetcher } from "./useDataList";

export function useFavoriteList() {
  const {
    data: { favorites },
  } = useAppStore();

  const favoriteCities = createUniqueCityNames(
    favorites.map((favoriteLocation) => favoriteLocation.sidoName)
  );

  const { data: favoriteCitiesData } = useSWR(
    ["/favorites", favoriteCities],
    () => favoriteCitiesFetcher(favoriteCities),
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      suspense: true,
    }
  );

  if (!favoriteCitiesData) return { data: null };

  const result = favorites.map((location) => {
    return favoriteCitiesData
      .get(location.sidoName)
      .find((item) => item.stationName === location.stationName);
  });

  return { data: result };
}

async function favoriteCitiesFetcher(cities) {
  if (!cities.length) return Promise.resolve(null);

  const citiesDataMap = new Map();

  const citiesPromise = await Promise.all(cities.map(dustDataFetcher));

  citiesPromise.forEach((fetchResponse, index) => {
    citiesDataMap.set(cities[index], fetchResponse.response.body.items);
  });

  return citiesDataMap;
}

function createUniqueCityNames(cities) {
  return Array.from(new Set(cities));
}
