import axios from 'axios';
import { GET_TASKS_DATA_SUCCESS, POST_TASK_DATA_SUCCESS } from '../action-types';
import { hasErrored } from './shared';
import { SharedNewTaskT } from '../shared/types';

export const addTaskData = (url: string, newTask: SharedNewTaskT) => {
  return async (dispatch: Function) => {
    try {
      const {
        data: { id },
      } = await axios.post(url, newTask);

      const newTaskWithID = {
        ...newTask,
        id,
      };

      dispatch({
        type: POST_TASK_DATA_SUCCESS,
        payload: newTaskWithID,
      });
    } catch {
      dispatch(hasErrored(true));
    }
  };
};

export const getTaskData = (url: string): Function => {
  return async (dispatch: Function) => {
    try {
      const { data, status, statusText } = await axios.get(url);

      if (!(status === 200)) {
        throw Error(statusText);
      }

      dispatch({
        type: GET_TASKS_DATA_SUCCESS,
        payload: data,
      });
    } catch {
      dispatch(hasErrored(true));
    }
  };
};
