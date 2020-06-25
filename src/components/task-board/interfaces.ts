export interface CreateTaskPropsI {
  backgroundColor: string;
  swimLane: string;
}

export interface CreateTaskStateI {
  isExpanded: boolean;
  taskTitle: string;
}

export interface SwimLanePropsI {
  backgroundColor: string;
  isFullWidth: boolean;
  swimLaneTitle: string;
}

export interface TaskPropsI {
  backgroundColor: string;
  description: string;
  taskNumber: number;
  taskTitle: string;
}

export interface TasksBoardStateI {
  isLoaded: boolean;
  swimLanes: { title: string; backgroundColor: string }[];
  tasks: {
    id: number;
    title: string;
    swimlane: string;
    description: string;
    created_at: string;
    udpated_at: string;
  }[];
}
