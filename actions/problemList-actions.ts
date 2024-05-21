"use server";

import { getInitialProblemListData } from "@/lib/problemLists";

export const loadInitialProblemListsData = async () => {
  return await getInitialProblemListData();
};
