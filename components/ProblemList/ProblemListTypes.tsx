export type ProjectDataProblemListType = {
  projectId: number;
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
  stages: {
    stage1: boolean;
    stage2: boolean;
    stage3: boolean;
    stage4: boolean;
    stage5: boolean;
    stage6: boolean;
  };
  picture: string;
  problemName: string;
  problemDescription: string;
  actionsDone: string;
  countermeasure: string;
  grade: "A" | "B" | "C" | "D" | "S";
  classItem: ActionType;
  actionItem: ActionType;
  statusItem: ActionType;
  date: Date | null;
  listeners: ListenersType[];
};
