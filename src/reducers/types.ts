import { SharedSwimLanesT, SharedTasksT } from '../shared/types';

export type hasErroredT = {
  type: string;
  hasErrored: boolean;
};

export type isLoadingT = {
  type: string;
  isLoading: boolean;
};

export type SwimLanesT = {
  type: string;
  swimLanes: SharedSwimLanesT;
};

export type TasksT = {
  type: string;
  tasks: SharedTasksT;
};
