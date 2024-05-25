"use server";

import {
  getInitialProblemListData,
  getProblemData,
  getProblemListData,
  getStageNames,
  getUsersForProject,
} from "@/lib/problemLists";
import { verifyAuth } from "@/lib/auth";
import { getClassesForProject } from "@/lib/responsibiltyItems";
import {
  RespDataType,
  StageNamesType,
} from "@/components/ProblemList/ProblemListTypes";

export const loadInitialProblemListsData = async () => {
  return await getInitialProblemListData();
};

export const loadProblemList = async (
  projectSlug: string,
  problemList: string
) => {
  return await getProblemListData(projectSlug, problemList);
};

export const loadProblemEditData = async (
  problemId: number,
  projectSlug: string
) => {
  const resposnsibilityData = await getClassesForProject(projectSlug);

  const problemData = await getProblemData(problemId);

  const stageNames: StageNamesType = await getStageNames(projectSlug);

  const users = await getUsersForProject(projectSlug);

  const processedUsers = users.map((user) => {
    return {
      userId: user.id,
      userName: user.user_name,
    };
  });

  const processedRespData: RespDataType[] = resposnsibilityData.map(
    (single) => {
      return {
        classItemId: single.class_id,
        classItemName: single.class_list_name,
        actionId: single.action_id,
        actionName: single.action_name,
        statusId: single.status_id,
        statusName: single.status_name,
        dateRequired: single.require_date,
      };
    }
  );

  const processedProblemData = {
    problemId: problemData.id,
    problemItem: problemData.item_id,
    problemListName: problemData.problemlist_name,
    stage1: { name: stageNames.stage1, value: problemData.stage1 },
    stage2: { name: stageNames.stage2, value: problemData.stage2 },
    stage3: { name: stageNames.stage3, value: problemData.stage3 },
    stage4: { name: stageNames.stage4, value: problemData.stage4 },
    stage5: { name: stageNames.stage5, value: problemData.stage5 },
    stage6: { name: stageNames.stage6, value: problemData.stage6 },
    problemName: problemData.problem_name,
    problemDescription: problemData.problem_description,
    actionsDone: problemData.actions_done,
    counterMeasure: problemData.countermeasure,
    classItemId: problemData.class_id,
    classItemName: problemData.class_list_name,
    actionId: problemData.action_id,
    actionName: problemData.action_name,
    statusId: problemData.status_id,
    statusName: problemData.status_name,
    grade: problemData.grade,
    date: problemData.date,
    responsiblePersonId: problemData.user_id,
    responsiblePersonName: `${problemData.user_name} - ${problemData.designation_name}`,
  };

  return {
    users: processedUsers,
    respData: processedRespData,
    problemData: processedProblemData,
  };
};
