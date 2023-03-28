import { API_ERROR_TYPE, API_EXCEEDS_ERROR_MESSAGE } from "./constansts";

// 429 Too Many Requests
export const requestsExceedError = {
  type: API_ERROR_TYPE,
  status: 429,
  statusText: "Too Many Requests",
  msg: API_EXCEEDS_ERROR_MESSAGE,
  description: "서비스 요청제한횟수 초과에러",
};
