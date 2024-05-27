import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

interface InputCheckboxType
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  defaultChecked: boolean;
}

const InputCheckbox = ({
  id,
  label,
  defaultChecked,
  ...props
}: InputCheckboxType) => {
  return (
    <div className={"mx-2 my-2 flex"}>
      <label htmlFor={id} className={"px-2 py-2"}>
        {label}
      </label>
      <input
        type={"checkbox"}
        id={id}
        name={id}
        defaultChecked={defaultChecked}
        className={"px-2 py-2"}
        {...props}
      />
    </div>
  );
};

export default InputCheckbox;
