import pool from "@/lib/db";
import {
  ProblemListDataType,
  ProjectDataProblemListType,
} from "@/components/ProblemList/ProblemListTypes";

export async function getInitialProblemListData() {
  //todo check user permission

  const { rows: projectData } = await pool.query(
    "SELECT p.project_id, p.project_name, p.project_slug, p.active_stage FROM projects AS p ORDER BY p.project_id"
  );

  const processedProjectData: ProjectDataProblemListType[] = [];

  for (let project of projectData) {
    const problemLists = await pool.query(
      "SELECT problemlist_name FROM problem_lists WHERE project_id = $1 ORDER BY problemlist_id",
      [project.project_id]
    );
    const problemListArray = problemLists.rows.map((problemList) => {
      return problemList.problemlist_name;
    });
    processedProjectData.push({
      projectId: +project.project_id,
      projectName: project.project_name,
      projectSlug: project.project_slug,
      activeStage: project.active_stage,
      problemLists: problemListArray,
    });
  }
  return processedProjectData;
}

export async function getProblemListData(
  projectSlug: string,
  problemListName: string
) {
  //todo recheck user permission

  const projectId = await pool.query(
    "SELECT project_id FROM projects WHERE project_slug = $1",
    [projectSlug]
  );

  const problemListId = await pool.query(
    "SELECT problemlist_id FROM problem_lists WHERE project_id = $1 AND problemlist_name = $2",
    [projectId.rows[0].project_id, problemListName]
  );

  const projectStages = await pool.query(
    "SELECT stage_name FROM stages WHERE project_id = $1 ORDER BY stage_order",
    [projectId.rows[0].project_id]
  );

  const problemListData = await pool.query(
    `
SELECT p.id, p.item_id, p.stage1, p.stage2, p.stage3, p.stage4, p.stage5, p.stage6, 
       p.problem_name, p.problem_description, p.actions_done, p.countermeasure,
       cl.id AS class_id, cl.class_list_name, al.id AS action_id, al.action_name, sl.id AS status_id, sl.status_name,
       p.grade, p.date, u.user_name, d.designation_name
FROM problems AS p
LEFT JOIN class_list AS cl ON p.class_id = cl.id
LEFT JOIN action_list AS al ON p.action_id = al.id
LEFT JOIN status_list AS sl on p.status_id = sl.id
LEFT JOIN users AS u ON p.responsible_person = u.id
LEFT JOIN designation AS d ON d.id = u.designation_id
WHERE p.project_id = $1 AND p.problemlist_id = $2
`,
    [projectId.rows[0].project_id, problemListId.rows[0].problemlist_id]
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

    const stages: string[] = [];
    const arrayName = projectStages.rows;
    if (problem.stage1) stages.push(arrayName[0].stage_name);
    if (problem.stage2) stages.push(arrayName[1].stage_name);
    if (problem.stage3) stages.push(arrayName[2].stage_name);
    if (problem.stage4) stages.push(arrayName[3].stage_name);
    if (problem.stage5) stages.push(arrayName[4].stage_name);
    if (problem.stage6) stages.push(arrayName[5].stage_name);

    processesProblemListData.push({
      id: problem.id,
      item: problem.item_id,
      stages: stages,
      picture: "",
      problemName: problem.problem_name,
      problemDescription: problem.problem_description,
      actionsDone: problem.actions_done,
      countermeasure: problem.countermeasure,
      grade: problem.grade,
      classItem: { id: +problem.class_id, name: problem.class_list_name },
      actionItem: { id: +problem.action_id, name: problem.action_name },
      statusItem: { id: +problem.status_id, name: problem.status_name },
      responsiblePerson: `${problem.user_name} - ${problem.designation_name}`,
      date: problem.date,
      listeners: processedListeners,
    });
  }
  return processesProblemListData;
}

export async function getProblemData(problemId: number) {
  //todo recheck user permission

  const problemData = await pool.query(
    `
SELECT p.id, p.item_id, p.stage1, p.stage2, p.stage3, p.stage4, p.stage5, p.stage6, p.problem_name,
       p.problem_description, p.actions_done, p.countermeasure, p.class_id, p.action_id, p.status_id,
       p.grade, p.date, u.user_name, d.designation_name
FROM problems AS p
LEFT JOIN users AS u ON p.responsible_person = u.id
LEFT JOIN designation AS d ON d.id = u.designation_id
WHERE p.id = $1
  `,
    [problemId]
  );

  return { problemData: problemData.rows };
}
