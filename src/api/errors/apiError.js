import { APIErrorsMap } from ".";

export class APIError extends Error {
  constructor(code) {
    const { type, status, statusText, msg, description } =
      APIErrorsMap.get(code);

    super(msg);

    this.name = type;
    this.code = code;
    this.status = status;
    this.statusText = statusText;
    this.description = description;
  }
}
