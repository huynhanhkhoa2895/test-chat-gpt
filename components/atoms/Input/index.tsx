import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  name: string;
  required?: boolean;
  type?: string;
  autofocus?: boolean;
  onChange: any;
  disabled?: boolean;
};

const Input = ({
  className = "",
  name,
  type = "text",
  autofocus = false,
  onChange,
  disabled,
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (autofocus && inputRef.current) {
      if ("focus" in inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, []);

  return (
    <input
      ref={inputRef}
      name={name}
      type={type}
      className={twMerge(
        "p-4 border border-grey rounded-[8px] w-full font-medium text-4 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple\n" +
          "      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none\n" +
          "      invalid:border-pink-500 invalid:text-pink-600\n" +
          "      focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
        className
      )}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
export default Input;
