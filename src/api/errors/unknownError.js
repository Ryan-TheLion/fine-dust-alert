import { API_ERROR_TYPE, API_UNKNOWN_ERROR_MESSAGE } from "./constansts";

// 500 Internal Server Error
export const unknownError = {
  type: API_ERROR_TYPE,
  status: 500,
  statusText: "Internal Server Error",
  msg: API_UNKNOWN_ERROR_MESSAGE,
  description: "기타에러",
};
