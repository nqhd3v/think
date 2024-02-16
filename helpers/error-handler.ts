import { AxiosError } from "axios";

export type TErrorHandlerResponse = {
  root: string;
  error?: string[] | string;
};
export const errorHandler = (error: AxiosError): TErrorHandlerResponse => {
  if (error.response) {
    if (error.response.status >= 500) {
      return {
        root: "exception.request.client",
        error: "exception.server.unknown",
      };
    }
    return {
      root: "exception.request.client",
      error: (error.response.data as any)?.error,
    };
  }
  if (error.request) {
    return {
      root: "exception.request.network",
    };
  }
  console.log(error);
  return {
    root: "exception.request.unknown",
  };
};
