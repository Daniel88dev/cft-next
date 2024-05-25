"use client";
import Button from "@/components/UI/Button/Button";
import { RxOpenInNewWindow } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ItemCell = ({ item, problemId }: { item: number; problemId: number }) => {
  const path = usePathname();

  return (
    <td className={"flex-col px-2"}>
      <p>{item}</p>
      <Button>
        <div className={"flex content-center"}>
          Open
          <RxOpenInNewWindow />
        </div>
      </Button>
      <Link href={`${path}/edit/${problemId}`}>
        <Button>Edit</Button>
      </Link>
    </td>
  );
};

export default ItemCell;
