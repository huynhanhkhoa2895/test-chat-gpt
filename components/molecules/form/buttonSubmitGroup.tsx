import Button from "@/components/atoms/Button";
import {twMerge} from "tailwind-merge";
import React, {ReactNode} from "react";

const ButtonSubmitGroup = ({
                             submitText,
                           }: {
  submitText: string | ReactNode;
}) => {
  return (
    <div
    >
      <div className={"flex justify-between lg:w-[450px] lg:mx-auto "}>

        <Button
          type={"submit"}
          className={twMerge("flex gap-1 items-center")}
          variant={'primary'}
        >
          {submitText}
        </Button>
      </div>
    </div>
  );
};
export default ButtonSubmitGroup;
