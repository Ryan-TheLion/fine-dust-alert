import {
  API_ERROR_TYPE,
  API_NO_OPENAPI_SERVICE_ERROR_MESSAGE,
} from "./constansts";

// 404 Not Found
export const noOpenApiServiceError = {
  type: API_ERROR_TYPE,
  status: 404,
  statusText: "Not Found",
  msg: API_NO_OPENAPI_SERVICE_ERROR_MESSAGE,
  description: "해당 오픈 API 서비스가 없거나 폐기됨",
};
