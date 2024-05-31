"use client";
import FilterMenu from "@/components/UI/MenuFilter/FilterMenu";
import { ProjectDataProblemListType } from "@/components/ProblemList/ProblemListTypes";
import SelectSearch, { OptionType } from "@/components/UI/Select/SelectSearch";
import { useState } from "react";
import FilledButton from "@/components/UI/Button/FilledButton";
import { useRouter } from "next/navigation";

type SelectedDataType = {
  project: OptionType | null;
  problemListOptions: OptionType[];
  problemList: OptionType | null;
};

const ProblemListFilter = ({
  data,
}: {
  data: ProjectDataProblemListType[];
}) => {
  const [selectedData, setSelectedData] = useState<SelectedDataType>({
    project: null,
    problemListOptions: [],
    problemList: null,
  });
  const router = useRouter();
  const projectsArray = data.map((project) => {
    return { label: project.projectName, value: project.projectSlug };
  });

  const onProjectSelect = (selected: OptionType | null) => {
    if (selected) {
      const findProject = data.find((project) => {
        return project.projectSlug === selected.value;
      });
      console.log(findProject);
      const lists: OptionType[] = findProject!.problemLists.map((list) => {
        return { label: list, value: list };
      });
      setSelectedData((prevState) => {
        return {
          ...prevState,
          project: selected,
          problemListOptions: lists,
        };
      });
    } else {
      setSelectedData({
        project: null,
        problemListOptions: [],
        problemList: null,
      });
    }
  };

  const onListSelect = (selected: OptionType | null) => {
    setSelectedData((prevState) => {
      return {
        ...prevState,
        problemList: selected,
      };
    });
  };

  const onLoadClick = () => {
    if (selectedData.project && selectedData.problemList) {
      router.push(
        `/problem-lists/${selectedData.project?.value}/${selectedData.problemList?.value}`
      );
    } else {
      alert("Please select a project and problem list");
    }
  };

  return (
    <>
      <FilterMenu pageName={"Problem lists"}>
        <SelectSearch
          options={projectsArray}
          onSelect={onProjectSelect}
          label={"Select Project:"}
          defaultValue={selectedData.project ? selectedData.project : undefined}
        />
        <SelectSearch
          key={`project${selectedData.project?.value}`}
          options={selectedData.problemListOptions}
          onSelect={onListSelect}
          label={"Select Problem list:"}
          disabled={!selectedData.project}
        />
        <FilledButton
          onClick={onLoadClick}
          disabled={!selectedData.problemList}
        >
          Load data
        </FilledButton>
      </FilterMenu>
    </>
  );
};

export default ProblemListFilter;
