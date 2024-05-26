export type ProjectDataProblemListType = {
  projectId: number;
  projectSlug: string;
  projectName: string;
  activeStage: string;
  problemLists: string[];
};

type ActionType = {
  id: number;
  name: string;
};

type ListenersType = {
  user: string;
  image: string;
  designation: string;
};

export type ProblemListDataType = {
  id: number;
  item: number;
  stages: string[];
  picture: string;
  problemName: string;
  problemDescription: string;
  actionsDone: string;
  countermeasure: string;
  grade: "A" | "B" | "C" | "D" | "S";
  classItem: ActionType;
  actionItem: ActionType;
  statusItem: ActionType;
  responsiblePerson: string;
  date: Date | null;
  listeners: ListenersType[];
};

export type RespType = {
  classItemId: number;
  classItemName: string;
  actionId: number;
  actionName: string;
  statusId: number;
  statusName: string;
  dateRequired: boolean;
};
export type RespDataType = {
  classItemId: number;
  classItemName: string;
  actionId: number;
  actionName: string;
  statusId: number;
  statusName: string;
  date: Date | null;
};

export type StageNamesType = {
  stage1: string;
  stage2: string;
  stage3: string;
  stage4: string;
  stage5: string;
  stage6: string;
};

export type RespUsers = {
  userId: number;
  userName: string;
};

export type ProblemDataForEdit = {
  problemId: number;
  problemItem: number;
  problemListName: string;
  stage1: { name: string; value: boolean };
  stage2: { name: string; value: boolean };
  stage3: { name: string; value: boolean };
  stage4: { name: string; value: boolean };
  stage5: { name: string; value: boolean };
  stage6: { name: string; value: boolean };
  problemName: string;
  problemDescription: string;
  actionsDone: string;
  counterMeasure: string;
  respDataSelection: RespDataType;
  grade: "A" | "B" | "C" | "D" | "S";
  responsiblePersonId: number;
  responsiblePersonName: string;
};

export type ClassDataType = {
  classId: number;
  classListName: string;
};
