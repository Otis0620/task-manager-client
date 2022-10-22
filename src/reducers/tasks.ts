import { GET_TASKS_DATA_SUCCESS, POST_TASK_DATA_SUCCESS } from '../action-types';
import { TasksT } from './types';

export const tasks = (state = [], { type, payload }: TasksT) => {
  switch (type) {
    case GET_TASKS_DATA_SUCCESS:
      return payload;

    case POST_TASK_DATA_SUCCESS:
      return [...state, payload];

    default:
      return state;
  }
};
