import React, { useEffect, useState } from "react";
import PassCodeInput from "./input";
import { twMerge } from "tailwind-merge";

export interface IPassCodeProps {
  length?: number;
  value?: string;
  name?: string;
  onChange?: (value: string) => void;
  onFullFilled?: (value: string) => void;
  inputElement?: React.ReactElement;
  className?: string;
  inputsClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
}

const PassCode: React.FC<IPassCodeProps> = ({
  length = 8,
  name = "nqh",
  value,
  inputElement,
  className,
  inputsClassName,
  inputClassName,
  disabled,
  onChange,
  onFullFilled,
}) => {
  const [internalValue, setInternalValue] = useState<string[]>(
    value ? value.split("") : Array(length).fill("")
  );

  const onItemChange = (index: number) => (newItemValue: string) => {
    if (disabled) return;
    setInternalValue((p) => {
      const newList = [...p];
      newList[index] = newItemValue;
      return newList;
    });
  };

  const handleFullFilled = () => {
    if (disabled) return;
    onFullFilled?.(internalValue.map((v) => v || " ").join(""));
  };

  useEffect(() => {
    if (value && value !== internalValue.join("")) {
      setInternalValue(value.split(""));
    }
  }, [value]);

  useEffect(() => {
    if (disabled) return;
    onChange?.(internalValue.map((i) => i || " ").join(""));
    if (internalValue.every((i) => i !== "")) {
      onFullFilled?.(internalValue.join(""));
    }
  }, [internalValue]);

  return (
    <div className={className}>
      <div className={twMerge("flex items-center gap-2", inputsClassName)}>
        {internalValue.map((itemValue, itemIndex) => (
          <PassCodeInput
            value={itemValue}
            onChange={onItemChange(itemIndex)}
            onRemovePrevious={() => onItemChange(itemIndex - 1)("")}
            onLastInputted={handleFullFilled}
            key={[name, "pass-code-inp", itemIndex].join("#")}
            element={inputElement}
            className={inputClassName}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default PassCode;
