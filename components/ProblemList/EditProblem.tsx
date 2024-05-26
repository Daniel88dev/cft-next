import InputText from "@/components/UI/Input/InputText";
import { loadProblemEditData } from "@/actions/problemList-actions";
import { ParamsProblemListEditProps } from "@/app/(auth)/problem-lists/[projectSlug]/[problemListId]/@problemListModal/(.)edit/[problemId]/page";
import InputTextArea from "@/components/UI/Input/InputTextArea";
import InputCheckbox from "@/components/UI/Input/InputCheckbox";
import ResponsiblePerson from "@/components/ProblemList/components/ResponsiblePerson";
import FilledButton from "@/components/UI/Button/FilledButton";
import ActionsSelects from "@/components/ProblemList/components/ActionsSelects";

const EditProblem = async ({
  params,
}: {
  params: ParamsProblemListEditProps;
}) => {
  const loadedData = await loadProblemEditData(
    params.problemId,
    params.projectSlug
  );

  return (
    <form>
      <InputText
        id={"problemName"}
        label={"Problem Name:"}
        defaultValue={loadedData.problemData.problemName}
      />
      {/*//todo add img component*/}
      <InputTextArea
        id={"problemDescription"}
        label={"Problem Description:"}
        defaultValue={loadedData.problemData.problemDescription}
      />
      <InputTextArea
        id={"actionsDone"}
        label={"Actions Done:"}
        defaultValue={loadedData.problemData.actionsDone}
      />
      <h4 className={"m-2 text-sm text-left"}>Stages:</h4>
      <div className={"flex"}>
        <InputCheckbox
          id={"stage1"}
          label={loadedData.problemData.stage1.name}
          defaultChecked={loadedData.problemData.stage1.value}
        />
        <InputCheckbox
          id={"stage2"}
          label={loadedData.problemData.stage2.name}
          defaultChecked={loadedData.problemData.stage2.value}
        />
        <InputCheckbox
          id={"stage3"}
          label={loadedData.problemData.stage3.name}
          defaultChecked={loadedData.problemData.stage3.value}
        />
        <InputCheckbox
          id={"stage4"}
          label={loadedData.problemData.stage4.name}
          defaultChecked={loadedData.problemData.stage4.value}
        />
        <InputCheckbox
          id={"stage5"}
          label={loadedData.problemData.stage5.name}
          defaultChecked={loadedData.problemData.stage5.value}
        />
        <InputCheckbox
          id={"stage6"}
          label={loadedData.problemData.stage6.name}
          defaultChecked={loadedData.problemData.stage6.value}
        />
      </div>
      <InputTextArea
        id={"countermeasure"}
        label={"Counter Measure:"}
        defaultValue={loadedData.problemData.counterMeasure}
      />
      <ResponsiblePerson
        users={loadedData.users}
        userId={loadedData.problemData.responsiblePersonId}
        userName={loadedData.problemData.responsiblePersonName}
      />
      <ActionsSelects
        currentActionData={loadedData.problemData.respDataSelection}
        classData={loadedData.classData}
        loadedRespData={loadedData.respData}
      />
      <FilledButton>Submit</FilledButton>
    </form>
  );
};

export default EditProblem;
