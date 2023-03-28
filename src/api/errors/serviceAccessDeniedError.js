import { API_ACCESS_DENIED_ERROR_MESSAGE, API_ERROR_TYPE } from "./constansts";

// 403 Forbidden
export const serviceAccessDeniedError = {
  type: API_ERROR_TYPE,
  status: 403,
  statusText: "Forbidden",
  msg: API_ACCESS_DENIED_ERROR_MESSAGE,
  description: "서비스 접근거부",
};
