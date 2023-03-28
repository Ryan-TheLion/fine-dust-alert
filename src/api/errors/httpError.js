import { API_ERROR_TYPE, API_HTTP_ERROR_MESSAGE } from "./constansts";

// 505 HTTP Version Not Supported
export const httpError = {
  type: API_ERROR_TYPE,
  status: 505,
  statusText: "HTTP Version Not Supported",
  msg: API_HTTP_ERROR_MESSAGE,
  description: "HTTP 에러",
};
