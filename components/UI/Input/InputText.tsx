import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";
import { className } from "postcss-selector-parser";

interface InputText
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  className?: string;
  type?: "text" | "password";
}

const InputText = ({
  id,
  label,
  className,
  type = "text",
  ...props
}: InputText) => {
  return (
    <div className={"m-2"}>
      <label
        htmlFor={id}
        className={
          "block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
        }
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={twMerge(
          "bg-gray-50 border border-gray-300 h-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default InputText;
