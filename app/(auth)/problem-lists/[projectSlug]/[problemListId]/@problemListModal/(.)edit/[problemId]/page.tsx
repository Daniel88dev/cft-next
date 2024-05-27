import EditProblem from "@/components/ProblemList/EditProblem";
import Modal from "@/components/Modal/Modal";

export type ParamsProblemListEditProps = {
  projectSlug: string;
  problemListId: string;
  problemId: number;
};

const ProblemEditPageInter = ({
  params,
}: {
  params: ParamsProblemListEditProps;
}) => {
  console.log(params);
  return (
    <>
      <Modal
        title={"Edit Problem"}
        pathName={"edit"}
        optionalPath={params.problemId}
      >
        <EditProblem params={params} />
      </Modal>
    </>
  );
};

export default ProblemEditPageInter;
