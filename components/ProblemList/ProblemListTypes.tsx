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
