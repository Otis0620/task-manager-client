import { GET_TASKS_DATA_SUCCESS, POST_TASK_DATA_SUCCESS } from '../action-types';
import { hasErrored } from './shared';
import { requestService } from '../services';
import { SharedNewTaskT } from '../shared/types';

export const postTaskData = (newTask: SharedNewTaskT) => {
  return async (dispatch: Function) => {
    try {
      const payload = await requestService.post('/tasks', newTask);

      dispatch({
        type: POST_TASK_DATA_SUCCESS,
        payload,
      });
    } catch {
      dispatch(hasErrored(true));
    }
  };
};

export const getTaskData = (): Function => {
  return async (dispatch: Function) => {
    try {
      const tasks = await requestService.get('/tasks');

      dispatch({
        type: GET_TASKS_DATA_SUCCESS,
        payload: tasks,
      });
    } catch {
      dispatch(hasErrored(true));
    }
  };
};
