import {
  TSetThinkDataParams,
  TSetThinkDicParams,
  TThinkContext,
  TThinkContextState,
} from "@/types/think";
import { arrayToMap } from "@/utils/array-to-map";
import { useSetState } from "ahooks";
import { last, uniq } from "lodash";
import React, { useContext } from "react";

const defaultThinkStates: TThinkContextState = {
  dictionary: {
    think: {},
  },
  thinkIds: {
    life: [],
    love: [],
    health: [],
    work: [],
    "~": [],
  },
};
const ThinkContext = React.createContext<TThinkContext>({
  ...defaultThinkStates,
  setDic() {},
  setData() {},
});

const ThinkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [states, setStates] =
    useSetState<TThinkContextState>(defaultThinkStates);

  const handleSetDic = ({ cmd, payload }: TSetThinkDicParams) => {
    setStates((p) => ({
      ...p,
      dictionary: {
        ...p.dictionary,
        [cmd]: {
          ...p.dictionary[cmd],
          ...payload,
        },
      },
    }));
  };
  const handleSetData = ({ cmd, payload }: TSetThinkDataParams) => {
    const { dic, ids } = arrayToMap(payload.data);
    if (cmd === "think") {
      setStates((p) => ({
        ...p,
        dictionary: {
          ...p.dictionary,
          think: {
            ...p.dictionary.think,
            ...dic,
          },
        },
        thinkIds: {
          ...p.thinkIds,
          [payload.category || "~"]: uniq([
            ...p.thinkIds[payload.category || "~"],
            ...ids,
          ]),
        },
        thinkLastItem: last(ids),
      }));
    }
  };

  return (
    <ThinkContext.Provider
      value={{
        ...states,
        setDic: handleSetDic,
        setData: handleSetData,
      }}
    >
      {children}
    </ThinkContext.Provider>
  );
};

export default ThinkProvider;
export const useThink = () => useContext(ThinkContext);
