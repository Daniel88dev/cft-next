import { twMerge } from "tailwind-merge";

type BasicSelectType = {
  id: string;
  label: string;
  defaultValue: string;
  onChange: (value: string) => void;
  valuesArray: string[] | [];
  emptyOption?: boolean;
  className?: string;
};

const BasicSelect = ({
  id,
  label,
  defaultValue,
  onChange,
  valuesArray,
  emptyOption = true,
  className,
  ...props
}: BasicSelectType) => {
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
      <select
        id={id}
        defaultValue={defaultValue}
        onChange={(event) => onChange(event.target.value)}
        className={twMerge(
          "bg-gray-50 border border-gray-300 h-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
        {...props}
      >
        {emptyOption && <option>---</option>}
        {valuesArray.length === 0 && <option>{defaultValue}</option>}
        {valuesArray.length !== 0 &&
          valuesArray.map((value) => <option key={value}>{value}</option>)}
      </select>
    </div>
  );
};

export default BasicSelect;
