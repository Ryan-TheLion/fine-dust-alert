import axios from "axios";
import { APIError } from "./errors";
import { errorXMLParser } from "./util/errorXMLParser";

/*
  proxy가 불안정하게 동작하여서 적용하지 않음
  추후 안정화 될 경우 프록시 적용할 수 있음

  baseURL:
      import.meta.env.MODE === "development"
        ? "/api"
        : import.meta.env.VITE_API_URL,
*/

const getInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: {
      serviceKey: import.meta.env.VITE_API_SERVICE_KEY,
      returnType: "json",
      numOfRows: "150",
      pageNo: "1",
      ver: "1.0",
    },
  });

  instance.interceptors.response.use(
    (apiResponse) => {
      if (apiResponse.data?.response) return apiResponse;

      const { errorCode } = errorXMLParser(apiResponse.data);

      return Promise.reject(new APIError(errorCode));
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const fineDustAxiosInstance = getInstance();
export const getSidoParams = ({
  serviceKey = fineDustAxiosInstance.defaults.params.serviceKey,
  numOfRows = fineDustAxiosInstance.defaults.params.numOfRows,
  pageNo = fineDustAxiosInstance.defaults.params.pageNo,
  sidoName = "서울",
} = {}) => ({
  ...fineDustAxiosInstance.defaults.params,
  serviceKey,
  numOfRows,
  pageNo,
  sidoName,
});
