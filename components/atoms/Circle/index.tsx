import { twMerge } from "tailwind-merge";
import Typo from "@/components/atoms/Typo";

type Props = {
  content: string | number;
  className?: string;
};
const Circle = ({ content, className }: Props) => {
  return (
    <div
      className={twMerge(
        "w-8 h-8 rounded-full flex items-center justify-center border uppercase transition-colors duration-300",
        className
      )}
    >
      <Typo className={"text-[14px]"}>{content}</Typo>
    </div>
  );
};
export default Circle;
