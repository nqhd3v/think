import { twMerge } from "tailwind-merge";
import { ICommandProps } from "./command.types";
import React from "react";

const InternalCommand: React.FC<ICommandProps> = ({
  cmd,
  params,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "py-2 flex flex-wrap items-baseline font-ubuntu gap-2 text-sm leading-4",
        className
      )}
    >
      <span className="font-bold text-dark-100/80">/{cmd}</span>
      {Array.isArray(params) &&
        params.length > 0 &&
        params.map((p) => {
          if (typeof p === "string") {
            return (
              <span key={p} className="text-dark-100/60">
                {p}
              </span>
            );
          }
          return <React.Fragment key={p.key}>{p.content}</React.Fragment>;
        })}
    </div>
  );
};

const Command = InternalCommand as typeof InternalCommand & {};

export default Command;
