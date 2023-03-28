import {
  API_ERROR_TYPE,
  API_KEY_IS_NOT_REGISTERED_ERROR_MESSAGE,
} from "./constansts";

// 401 Unauthorized
export const serviceKeyIsNotRegisteredError = {
  type: API_ERROR_TYPE,
  status: 401,
  statusText: "Unauthorized",
  msg: API_KEY_IS_NOT_REGISTERED_ERROR_MESSAGE,
  description: "등록되지 않은 서비스키",
};
