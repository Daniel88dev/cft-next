import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface InputTextAreaType
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  id: string;
  label: string;
}

const InputTextArea = ({ id, label, ...props }: InputTextAreaType) => {
  return (
    <div className={"mx-2 my-2"}>
      <label
        htmlFor={id}
        className={
          "block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
        }
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        {...props}
      />
    </div>
  );
};

export default InputTextArea;
