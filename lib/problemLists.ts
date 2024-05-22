import pool from "@/lib/db";
import {
  ProblemListDataType,
  ProjectDataProblemListType,
} from "@/components/ProblemList/ProblemListTypes";

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

export async function getProblemListData(
  projectId: number,
  problemListName: string
) {
  //todo recheck user permission

  const problemListId = await pool.query(
    "SELECT problemlist_id FROM problem_lists WHERE project_id = $1 AND problemlist_name = $2",
    [projectId, problemListName]
  );

  const problemListData = await pool.query(
    `
SELECT p.id, p.item_id, p.stage1, p.stage2, p.stage3, p.stage4, p.stage5, p.stage6, 
       p.problem_name, p.problem_description, p.actions_done, p.countermeasure,
       cl.id AS class_id, cl.class_list_name, al.id AS action_id, al.action_name, sl.id AS status_id, sl.status_name,
       p.grade, p.date
FROM problems AS p
LEFT JOIN class_list AS cl ON p.class_id = cl.id
LEFT JOIN action_list AS al ON p.action_id = al.id
LEFT JOIN status_list AS sl on p.status_id = sl.id
WHERE p.project_id = $1 AND p.problemlist_id = $2
`,
    [projectId, problemListId.rows[0].problemlist_id]
  );
  const processesProblemListData: ProblemListDataType[] = [];
  for (let problem of problemListData.rows) {
    const listeners = await pool.query(
      `
    SELECT u.user_name, u.image, d.designation_name FROM listeners AS l
    LEFT JOIN users AS u ON l.listener = u.id
    LEFT JOIN designation AS d ON d.id = u.designation_id
    WHERE l.problem_id = $1
    `,
      [problem.id]
    );
    const processedListeners = listeners.rows.map((user) => {
      return {
        user: user.user_name,
        image: user.image,
        designation: user.designation_name,
      };
    });

    processesProblemListData.push({
      id: problem.id,
      item: problem.item_id,
      stages: {
        stage1: problem.stage1,
        stage2: problem.stage2,
        stage3: problem.stage3,
        stage4: problem.stage4,
        stage5: problem.stage5,
        stage6: problem.stage6,
      },
      picture: "",
      problemName: problem.problem_name,
      problemDescription: problem.problem_description,
      actionsDone: problem.actions_done,
      countermeasure: problem.countermeasure,
      grade: problem.grade,
      classItem: { id: +problem.class_id, name: problem.class_list_name },
      actionItem: { id: +problem.action_id, name: problem.action_name },
      statusItem: { id: +problem.status_id, name: problem.status_name },
      date: problem.date,
      listeners: processedListeners,
    });
  }
  return processesProblemListData;
}
