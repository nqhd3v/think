export type TThink = {
  id: string;
  title: string;
  content: string[];
  ts: number;
  category: TThinkCategory[];
  private: boolean;
};

export type TThinkFs = Omit<TThink, "content"> & {
  content: TThink["content"] | null;
};
export type TNewThink = Omit<TThinkFs, "id">;
export type TThinkCategory = "love" | "life" | "work" | "health";
export type TThinkContext = TThinkContextState & {
  setDic: (params: TSetThinkDicParams) => void;
  setData: (params: TSetThinkDataParams) => void;
};
export type TThinkContextState = {
  dictionary: {
    think: Record<string, TThinkFs>;
  };
  thinkLastItem?: TThink["id"];
  thinkIds: Record<TThinkCategory | "~", TThink["id"][]>;
};
export type TSetThinkDicParams = {
  cmd: "think";
  payload: Record<string, TThinkFs>;
};
export type TSetThinkDataParams = {
  cmd: "think";
  payload: {
    data: TThinkFs[];
    category?: TThinkCategory;
  };
};

export type TThinkConfig = {
  pass__createThink: string;
  pass__readPrivateThink: string;
  pass__accessPrivateMode: string;
};
