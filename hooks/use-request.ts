import { TErrorHandlerResponse, errorHandler } from "@/helpers/error-handler";
import { useRequest } from "ahooks";
import { Service } from "ahooks/lib/useRequest/src/types";
import { AxiosError, AxiosResponse } from "axios";

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
