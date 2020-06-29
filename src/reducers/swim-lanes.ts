import { GET_SWIMLANES_DATA_SUCCESS } from '../action-types';
import { SwimLanesT } from './types';

export function swimLanes(state = [], { type, swimLanes }: SwimLanesT) {
  switch (type) {
    case GET_SWIMLANES_DATA_SUCCESS:
      return swimLanes;
    default:
      return state;
  }
}
