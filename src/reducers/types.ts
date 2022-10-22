import { SharedSwimLanesT, SharedTasksT } from '../shared/types';

export type hasErroredT = {
  type: string;
  payload: boolean;
};

export type isLoadingT = {
  type: string;
  payload: boolean;
};

export type SwimLanesT = {
  type: string;
  payload: SharedSwimLanesT;
};

export type TasksT = {
  type: string;
  payload: SharedTasksT;
};
