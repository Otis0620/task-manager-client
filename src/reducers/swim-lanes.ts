import { GET_SWIMLANES_DATA_SUCCESS } from '../action-types';
import { SwimLanesT } from './types';

export function swimLanes(state = [], { type, payload }: SwimLanesT) {
  switch (type) {
    case GET_SWIMLANES_DATA_SUCCESS:
      return payload;
    default:
      return state;
  }
}
