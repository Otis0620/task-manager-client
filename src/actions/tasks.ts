import axios from 'axios';
import { GET_TASKS_DATA_SUCCESS } from '../action-types';
import { hasErrored } from './shared';

export const getTaskData = (url: string): Function => {
  return async (dispatch: Function) => {
    try {
      const { data, status, statusText } = await axios.get(url);

      if (!(status === 200)) {
        throw Error(statusText);
      }

      dispatch({
        type: GET_TASKS_DATA_SUCCESS,
        tasks: data,
      });
    } catch {
      dispatch(hasErrored(true));
    }
  };
};
