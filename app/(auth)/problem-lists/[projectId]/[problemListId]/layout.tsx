import { ReactNode } from "react";

const ProblemListEditLayout = ({
  children,
  problemListModal,
}: {
  children: ReactNode;
  problemListModal: ReactNode;
}) => {
  return (
    <>
      <div>{problemListModal}</div>
      <div>{children}</div>
    </>
  );
};

export default ProblemListEditLayout;
