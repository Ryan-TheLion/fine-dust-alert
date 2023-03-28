import useSWR from "swr";
import { fineDustAxiosInstance, getSidoParams } from "../api/instance";

export function useDataList(city) {
  const { data, isLoading, error } = useSWR(`/getCity/${city}`, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return { data: data?.response.body.items, isLoading, error };

  async function fetcher() {
    const apiResponse = await fineDustAxiosInstance.get(
      "/getCtprvnRltmMesureDnsty",
      { params: getSidoParams({ sidoName: city }) }
    );

    return apiResponse.data;
  }
}
