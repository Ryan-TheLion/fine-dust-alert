import { API_APP_ERROR_MESSAGE, API_ERROR_TYPE } from "./constansts";

// 500 Internal Server Error
export const applicationError = {
  type: API_ERROR_TYPE,
  status: 500,
  statusText: "Internal Server Error",
  msg: API_APP_ERROR_MESSAGE,
  description: "어플리케이션 에러",
};
