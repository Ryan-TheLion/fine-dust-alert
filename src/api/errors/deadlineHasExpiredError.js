import { API_ERROR_TYPE, API_EXPIERED_ERROR_MESSAGE } from "./constansts";

// 403 Forbidden
export const deadlineHasExpiredError = {
  type: API_ERROR_TYPE,
  status: 403,
  statusText: "Forbidden",
  msg: API_EXPIERED_ERROR_MESSAGE,
  description: "활용기간 만료",
};
