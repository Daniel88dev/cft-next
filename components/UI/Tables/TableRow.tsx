import { ReactNode } from "react";

type TableRowType = {
  children: ReactNode;
  height?: "h-48" | "h-24";
};

const TableRow = ({ height = "h-48", children }: TableRowType) => {
  return (
    <tr
      className={`${height} even:bg-violet-200 even:dark:bg-gray-900 hover:bg-blue-200 hover:dark:bg-blue-800`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
