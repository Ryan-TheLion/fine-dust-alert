import useSWR from "swr";
import { fineDustAxiosInstance, getSidoParams } from "../api/instance";

export function useDataList(city) {
  const { data } = useSWR(`/getCity/${city}`, () => dustDataFetcher(city), {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    suspense: true,
  });

  return { data: data?.response.body.items };
}

export async function dustDataFetcher(city) {
  const apiResponse = await fineDustAxiosInstance.get(
    "/getCtprvnRltmMesureDnsty",
    { params: getSidoParams({ sidoName: city }) }
  );

  return apiResponse.data;
}
