const TableStages = ({ stages }: { stages: string[] }) => {
  return (
    <td>
      {stages.map((stage) => (
        <p key={stage}>{stage}</p>
      ))}
    </td>
  );
};

export default TableStages;
