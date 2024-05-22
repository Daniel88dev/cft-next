type THType = {
  children: string;
  width: "w-24" | "w-48" | "w-96" | "w-[500px]";
};

const Th = ({ children, width = "w-24" }: THType) => {
  const style = `${width} + min-${width} overflow-auto whitespace-nowrap`;
  return <th className={style}>{children}</th>;
};

export default Th;
