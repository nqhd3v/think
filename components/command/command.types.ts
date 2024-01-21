import { TThinkCategory } from "@/types/think";

export type TCommandInput = string;
export interface ICommandProps {
  cmd: TCommandInput;
  params?: string[] | { key: string; content: React.ReactNode }[];
  className?: string;
}
export interface ICommandOptsProps {
  options: TCommandOpt[];
  onSelect?: (value: TCommandOpt["value"]) => void;
  clearAfterSelect?: boolean;
}
export type TCommandOpt = {
  label: string;
  value: string;
  description?: string;
};
