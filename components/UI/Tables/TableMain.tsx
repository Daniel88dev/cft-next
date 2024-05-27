import { ReactNode } from "react";

type TableType = {
  children: ReactNode;
};

const TableMain = ({ children }: TableType) => {
  return (
    <div className="flex-grow z-0">
      <table className="min-w-full">{children}</table>
    </div>
  );
};

export default TableMain;
