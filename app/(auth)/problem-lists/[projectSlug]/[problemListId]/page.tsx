import ProblemListTable from "@/components/ProblemList/ProblemListTable";

const ProblemListContent = ({
  params,
}: {
  params: { projectSlug: string; problemListId: string };
}) => {
  return (
    <>
      <ProblemListTable params={params} />
    </>
  );
};

export default ProblemListContent;
