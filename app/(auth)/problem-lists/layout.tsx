import ProblemListFilter from "@/components/ProblemList/ProblemListFilter";
import { loadInitialProblemListsData } from "@/actions/problemList-actions";
import { ReactNode } from "react";

const ProblemListLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const projectData = await loadInitialProblemListsData();

  return (
    <>
      <ProblemListFilter data={projectData} />
      {children}
    </>
  );
};

export default ProblemListLayout;
