import { useReducer } from "react";

const useStates = <T extends Record<string, any>>(initialStates: T) => {
  return useReducer(
    (a: T, b: Partial<T>): T => ({ ...a, ...b }),
    initialStates
  );
};

export default useStates;
