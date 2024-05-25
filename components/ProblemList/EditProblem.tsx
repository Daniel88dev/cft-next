import InputText from "@/components/UI/Input/InputText";
import { loadProblemEditData } from "@/actions/problemList-actions";

const EditProblem = async () => {
  const data = await loadProblemEditData(1, "sx2e");

  return (
    <form>
      <InputText id={"problemName"} label={"Problem Name:"} />
    </form>
  );
};

export default EditProblem;
