import {twMerge} from "tailwind-merge";
import {useEffect, useRef} from "react";

type Props = {
  type: string;
  name: string;
  disabled: boolean;
  className?: string;
  required?: boolean;
  onChange: any;
  placeholder?: string;
  errors?: any;
  defaultValue?: any;
  value?: any
};
const Input = ({
                 type,
                 name,
                 disabled,
                 className,
                 onChange,
                 placeholder,
                 errors,
                 defaultValue,
                 value
               }: Props) => {

  return (
    <input
      data-testid={"form-" + name}
      type={type}
      className={twMerge(
        "px-4 py-[0.625rem] border  rounded-lg placeholder:text-grey placeholder:font-[500] focus:ring-1 focus:outline-none",
        errors && errors.message !== ""
          ? "border-red  focus:border-red  focus:ring-red"
          : "border-grey focus:border-primary focus:ring-primary",
        className
      )}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      value={value}
    />
  );
};
export default Input;
