import { twMerge } from 'tailwind-merge';

export type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  register: any;
  disabled: boolean;
  className?: string;
  required?: boolean;
  options: SelectOption[];
};
const Select = ({
  name,
  register,
  disabled,
  className,
  required,
  options,
}: Props) => {
  return (
    <select
      className={twMerge('p-2 border border-grey rounded-lg', className)}
      disabled={disabled}
      {...register(name, { required: required })}
    >
      {options &&
        [...[{ label: 'Please Choose', value: '' }], ...options].map(
          (option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          )
        )}
    </select>
  );
};
export default Select;
