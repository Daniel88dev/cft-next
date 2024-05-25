import TableMain from "@/components/UI/Tables/TableMain";
import TableHeading from "@/components/UI/Tables/TableHeading";
import Th from "@/components/UI/Tables/Th";
import { loadProblemList } from "@/actions/problemList-actions";
import { ProblemListDataType } from "@/components/ProblemList/ProblemListTypes";
import TableRow from "@/components/UI/Tables/TableRow";
import TableStages from "@/components/ProblemList/components/TableStages";
import GradeCell from "@/components/ProblemList/components/GradeCell";
import ItemCell from "@/components/ProblemList/components/ItemCell";

const ProblemListTable = async ({
  params,
}: {
  params: { projectSlug: string; problemListId: string };
}) => {
  const { projectSlug, problemListId } = params;

  const problemListData: ProblemListDataType[] = await loadProblemList(
    projectSlug,
    problemListId
  );

  if (problemListData.length === 0) {
    return <div>No problem list data found</div>;
  }

  //todo add pictures to problems

  return (
    <TableMain>
      <TableHeading>
        <Th width={"w-24"}>Item</Th>
        <Th width={"w-24"}>Stages</Th>
        <Th width={"w-48"}>Picture</Th>
        <Th width={"w-24"}>Problem Name</Th>
        <Th width={"w-96"}>Problem Description</Th>
        <Th width={"w-96"}>Actions Done</Th>
        <Th width={"w-96"}>Counter Measure</Th>
        <Th width={"w-24"}>Grade</Th>
        <Th width={"w-24"}>Class</Th>
        <Th width={"w-24"}>Action</Th>
        <Th width={"w-24"}>Status</Th>
        <Th width={"w-24"}>Responsibility</Th>
        <Th width={"w-24"}>Date</Th>
        <Th width={"w-[500px]"}>Listeners</Th>
        <Th width={"w-24"}>Subscribe</Th>
      </TableHeading>
      <tbody>
        {problemListData.map((problem) => (
          <TableRow key={problem.id} height={"h-48"}>
            <ItemCell item={problem.item} problemId={problem.id} />
            <TableStages stages={problem.stages} />
            <td>{problem.picture}</td>
            <td>{problem.problemName}</td>
            <td>{problem.problemDescription}</td>
            <td>{problem.actionsDone}</td>
            <td>{problem.countermeasure}</td>
            <GradeCell value={problem.grade} />
            <td>{problem.classItem.name}</td>
            <td>{problem.actionItem.name}</td>
            <td>{problem.statusItem.name}</td>
            <td>{problem.responsiblePerson}</td>
            <td>{problem.date?.getDate()}</td>
            <td>listeners</td>
            <td>subscribe</td>
          </TableRow>
        ))}
      </tbody>
    </TableMain>
  );
};

export default ProblemListTable;
