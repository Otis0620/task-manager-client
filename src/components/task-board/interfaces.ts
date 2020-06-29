import { SharedSwimLanesT, SharedTasksT } from '../../shared/types';

export interface CreateTaskPropsI {
  backgroundColor: string;
  swimLane: string;
}

export interface CreateTaskStateI {
  isExpanded: boolean;
  taskTitle: string;
}

export interface DispatchI {
  getSwimLanesData: Function;
  getTaskData: Function;
}

export interface GlobalStateI {
  swimLanes: SharedSwimLanesT;
  hasErrored: boolean;
  isLoading: boolean;
  tasks: SharedTasksT;
}
export interface SwimLanePropsI {
  backgroundColor: string;
  swimLaneTitle: string;
}

export interface TaskPropsI {
  backgroundColor: string;
  description: string;
  taskNumber: number;
  taskTitle: string;
}

export interface TasksBoardPropsI extends GlobalStateI, DispatchI {}
