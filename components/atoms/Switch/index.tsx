import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

type Props = {
  onChange: (value: boolean) => void;
  value: boolean;
  className?: string;
};

const Switch = ({ onChange, value, className }: Props) => {
  const [_value, setValue] = useState<boolean>(value);

  useEffect(() => {
    onChange && onChange(_value);
  }, [_value]);
  const handleClick = () => {
    setValue((_value) => !_value);
  };
  return (
    <div
      className={twMerge(
        "w-10 h-5 bg-denim rounded-xl p-[4px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div
        className={twMerge(
          "bg-white w-3 h-3 rounded-full transition-transform duration-300",
          _value ? "translate-x-[20px]" : "translate-x-0"
        )}
      ></div>
    </div>
  );
};
export default Switch;
