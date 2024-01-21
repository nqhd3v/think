import { get, uniq } from "lodash";

export const arrayToMap = <T = any>(
  array: T[],
  key = "id"
): { dic: Record<string, T>; ids: string[] } => {
  const dic: Record<string, T> = {};
  const ids = array.map((arrItem) => {
    const id = get(arrItem, key);
    dic[id] = arrItem;
    return id;
  });

  return {
    dic,
    ids: uniq(ids),
  };
};
