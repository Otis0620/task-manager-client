import { GET_TASKS_DATA_SUCCESS } from '../action-types';
import { TasksT } from './types';

export const tasks = (state = [], { type, tasks }: TasksT) => {
  switch (type) {
    case GET_TASKS_DATA_SUCCESS:
      return tasks;
    default:
      return state;
  }
};
