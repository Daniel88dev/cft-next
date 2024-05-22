"use server";

import {
  getInitialProblemListData,
  getProblemListData,
} from "@/lib/problemLists";

export const loadInitialProblemListsData = async () => {
  return await getInitialProblemListData();
};

export const loadProblemList = async (
  projectId: number,
  problemList: string
) => {
  return await getProblemListData(projectId, problemList);
};
