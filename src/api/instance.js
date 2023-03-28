import axios from "axios";
import { APIError } from "./errors";
import { errorXMLParser } from "./util/errorXMLParser";

const getInstance = () => {
  const instance = axios.create({
    baseURL: "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc",
    params: {
      serviceKey: import.meta.env.VITE_API_SERVICE_KEY,
      returnType: "json",
      numOfRows: "100",
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
