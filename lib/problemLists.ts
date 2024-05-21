import pool from "@/lib/db";
import { ProjectDataProblemListType } from "@/components/ProblemList/ProblemListTypes";

export async function getInitialProblemListData() {
  //todo check user permission

  const { rows: projectData } = await pool.query(
    "SELECT p.project_id, p.project_name, p.active_stage FROM projects AS p ORDER BY p.project_id"
  );

  const processedProjectData: ProjectDataProblemListType[] = [];

  for (let project of projectData) {
    const problemLists = await pool.query(
      "SELECT problemlist_name FROM problem_lists ORDER BY problemlist_id"
    );
    const problemListArray = problemLists.rows.map((problemList) => {
      return problemList.problemlist_name;
    });
    processedProjectData.push({
      projectId: +project.project_id,
      projectName: project.project_name,
      activeStage: project.active_stage,
      problemLists: problemListArray,
    });
  }
  return processedProjectData;
}
