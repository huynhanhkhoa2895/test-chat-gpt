import { Icons } from "@/types";
import data from "@/data/svgs.json";
import { twMerge } from "tailwind-merge";

type Props = {
  icon: Icons;
  className?: string;
};
const Svg = ({ icon, className }: Props) => {
  return (
    <div
      className={twMerge(className)}
      dangerouslySetInnerHTML={{ __html: (data as any)[icon] }}
    ></div>
  );
};
export default Svg;
