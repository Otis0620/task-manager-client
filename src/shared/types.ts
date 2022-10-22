export type SharedNewTaskT = {
  title: string;
  description: string;
  swimlane: any;
};

export type SharedSwimLanesT = { title: string; backgroundColor: string }[];

export type SharedTasksT = {
  id: number;
  title: string;
  swimlane: string;
  description: string;
  created_at: string;
  udpated_at: string;
}[];
