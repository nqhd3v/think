import { useRequest } from "ahooks";
import { Service } from "ahooks/lib/useRequest/src/types";
import { AxiosError, AxiosResponse } from "axios";

type TErrorHandlerResponse = {
  root: string;
  error?: string[] | string;
};
const errorHandler = (error: AxiosError): TErrorHandlerResponse => {
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

export const useRequestData = <T>(
  service: Service<AxiosResponse<T, any>, any>,
  options?: {
    manual?: boolean;
    debounce?: number;
    onData?: (data: T, params: any) => void;
    onError?: (err: TErrorHandlerResponse) => void;
  }
) => {
  const { data, ...requestData } = useRequest(service, {
    manual: options?.manual,
    debounceWait: options?.debounce,
    onSuccess: (res, params) => options?.onData?.(res.data, params),
    onError: (err) => options?.onError?.(errorHandler(err as AxiosError)),
  });

  return {
    data: data?.data,
    ...requestData,
  };
};
