import {
  API_ERROR_TYPE,
  API_UNREGISTERED_IP_ERROR_MESSAGE,
} from "./constansts";

// 401 Unauthorized
export const unRegisteredIpError = {
  type: API_ERROR_TYPE,
  status: 401,
  statusText: "Unauthorized",
  msg: API_UNREGISTERED_IP_ERROR_MESSAGE,
  description: "등록되지 않은 IP",
};
