export interface CreateTaskPropsI {
  addTask: Function;
  backgroundColor: string;
  swimLane: string;
}

export interface CreateTaskStateI {
  isExpanded: boolean;
  taskTitle: string;
}

export interface SwimLanePropsI {
  backgroundColor: string;
  swimLaneTitle: string;
}

export interface TaskPropsI {
  backgroundColor: string;
  taskNumber: string;
  taskTitle: string;
}

export interface TasksBoardStateI {
  tasks: { taskNumber: string; taskTitle: string; swimLane: string }[];
}
