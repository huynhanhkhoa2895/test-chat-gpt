import withForm from "@/HOCs/withForm";
import FormControl from "@/components/organisms/formControl/formControl";
import {useEffect} from "react";

const data = {
  name: 'msg',
  type: 'input',
  placeholder: 'Type...',
  label: ''
}


const FormChat = withForm(({control, errors, defaultValue}) => {

  return (
    <div className={"grow"}>
      <FormControl
        errors={errors[data.name]}
        type={data.type}
        label={data.label || ''}
        name={data.name}
        control={control}
        placeholder={data.placeholder}
        disabled={false}
        defaultValue={null}
      />
    </div>
  );
})
export default FormChat