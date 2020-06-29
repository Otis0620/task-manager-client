import axios from 'axios';
import { hasErrored, isLoading } from './shared';
import { GET_SWIMLANES_DATA_SUCCESS } from '../action-types';

export const getSwimLanesData = (url: string): Function => {
  return async (dispatch: Function) => {
    dispatch(isLoading(true));

    try {
      const { data, status, statusText } = await axios.get(url);

      if (!(status === 200)) {
        throw Error(statusText);
      }

      dispatch(isLoading(false));

      dispatch({
        type: GET_SWIMLANES_DATA_SUCCESS,
        swimLanes: data,
      });
    } catch {
      dispatch(hasErrored(true));
    }
  };
};
