import { applicationError } from "./applicationError";
import { httpError } from "./httpError";
import { noOpenApiServiceError } from "./noOpenApiServiceError";
import { serviceAccessDeniedError } from "./serviceAccessDeniedError";
import { requestsExceedError } from "./requestsExceedError";
import { serviceKeyIsNotRegisteredError } from "./serviceKeyIsNotRegisterdError";
import { deadlineHasExpiredError } from "./deadlineHasExpiredError";
import { unRegisteredIpError } from "./unRegisteredIpError";
import { unknownError } from "./unknownError";

export { APIError } from "./apiError";
export const APIErrorsMap = new Map([
  ["1", applicationError],
  ["4", httpError],
  ["12", noOpenApiServiceError],
  ["20", serviceAccessDeniedError],
  ["22", requestsExceedError],
  ["30", serviceKeyIsNotRegisteredError],
  ["31", deadlineHasExpiredError],
  ["32", unRegisteredIpError],
  ["99", unknownError],
]);
