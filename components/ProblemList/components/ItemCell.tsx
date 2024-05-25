import Button from "@/components/UI/Button/Button";
import { RxOpenInNewWindow } from "react-icons/rx";

const ItemCell = ({ item, problemId }: { item: number; problemId: number }) => {
  return (
    <td className={"flex-col px-2"}>
      <p>{item}</p>
      <Button>
        <div className={"flex content-center"}>
          Open
          <RxOpenInNewWindow />
        </div>
      </Button>
      <Button>Edit</Button>
    </td>
  );
};

export default ItemCell;
