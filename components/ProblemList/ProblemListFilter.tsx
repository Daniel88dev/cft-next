"use client";
import FilterMenu from "@/components/UI/MenuFilter/FilterMenu";
import { ProjectDataProblemListType } from "@/components/ProblemList/ProblemListTypes";
import SelectSearch from "@/components/UI/Select/SelectSearch";

const ProblemListFilter = ({
  data,
}: {
  data: ProjectDataProblemListType[];
}) => {
  const projectsArray = data.map((project) => {
    return { label: project.projectName, value: project.projectId };
  });

  //todo remove any
  const onProjectSelect = (selected: any) => {
    console.log(selected);
  };

  return (
    <>
      <FilterMenu pageName={"Problem lists"}>
        <SelectSearch
          options={projectsArray}
          onSelect={onProjectSelect}
          label={"Select Project:"}
        />
        <h1>test</h1>
      </FilterMenu>
    </>
  );
};

export default ProblemListFilter;
