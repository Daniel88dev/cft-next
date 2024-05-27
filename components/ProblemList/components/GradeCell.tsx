type GradeCellType = {
  value: "A" | "B" | "C" | "D" | "S" | "";
};

const GradeCell = ({ value }: GradeCellType) => {
  let style = "py-2";
  if (value === "S") {
    style += " text-red-500";
  } else if (value === "A") {
    style += " text-yellow-500";
  }

  return <td className={style}>{value}</td>;
};

export default GradeCell;
