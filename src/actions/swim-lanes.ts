import { requestService } from '../services';
import { hasErrored, isLoading } from './shared';
import { GET_SWIMLANES_DATA_SUCCESS } from '../action-types';

export const getSwimLanesData = (): Function => {
  return async (dispatch: Function) => {
    dispatch(isLoading(true));

    try {
      const swimLanes = await requestService.get(`/swimlanes`);

      dispatch(isLoading(false));

      dispatch({
        type: GET_SWIMLANES_DATA_SUCCESS,
        payload: swimLanes,
      });
    } catch {
      dispatch(hasErrored(true));
    }
  };
};
