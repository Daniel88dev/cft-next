"use server";

import {
  getInitialProblemListData,
  getProblemListData,
} from "@/lib/problemLists";
import { verifyAuth } from "@/lib/auth";

export const loadInitialProblemListsData = async () => {
  return await getInitialProblemListData();
};

export const loadProblemList = async (
  projectSlug: string,
  problemList: string
) => {
  return await getProblemListData(projectSlug, problemList);
};
