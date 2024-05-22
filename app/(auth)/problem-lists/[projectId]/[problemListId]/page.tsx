import ProblemListTable from "@/components/ProblemList/ProblemListTable";

const ProblemListContent = ({
  params,
}: {
  params: { projectId: string; problemListId: string };
}) => {
  return (
    <>
      <ProblemListTable params={params} />
    </>
  );
};

export default ProblemListContent;
