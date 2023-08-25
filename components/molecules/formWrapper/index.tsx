import {ReactNode} from "react";

const FormWrapper = ({children}: { children: ReactNode }) => {
  return (
    <div className={'flex gap-2'}>
      {children}
    </div>
  )
}
export default FormWrapper