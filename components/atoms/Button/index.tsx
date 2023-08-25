"use client";

import { twMerge } from "tailwind-merge";
import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";

type Props = {
  children: ReactNode | string;
  className?: string;
  handleClick?: any;
  type?: "button" | "submit";
  disabled?: boolean;
  round?: boolean;
  variant?: "primary" | "secondary" | "outline";
};
// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (
    {
      children,
      handleClick,
      className = "",
      type = "button",
      disabled = false,
      round = true,
      variant = "primary",
    }: Props,
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useImperativeHandle(ref, () => ({
      click() {
        if (buttonRef && buttonRef.current) {
          buttonRef.current?.click();
        }
      },
    }));

    const renderVariant = () => {
      if (variant === "primary") {
        return "bg-primary text-white";
      } else if (variant === "outline") {
        return "bg-transparent border-0 text-grey";
      } else {
        return "bg-denim border-0 text-white";
      }
    };

    return (
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={twMerge(
          "bg-primary text-white font-[500] text-[14px] lg:text-[16px] py-3 px-[22px] lg:py-4 px-6",
          round ? "rounded-lg" : "",
          disabled ? "opacity-50" : "",
          renderVariant(),
          className
        )}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
export default Button;
