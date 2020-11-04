import { swimLanes } from './swim-lanes.ts';
import { GET_SWIMLANES_DATA_SUCCESS } from '../action-types/index.ts';

describe('swim-lanes', () => {
  describe('swimLanes', () => {
    it('should return payload if type is GET_SWIMLANES_DATA_SUCCESS', () => {
      const payload = [];

      expect(
        swimLanes([], {
          type: GET_SWIMLANES_DATA_SUCCESS,
          payload,
        }),
      ).toEqual(payload);
    });

    it('should return state if type is not GET_SWIMLANES_DATA_SUCCESS', () => {
      const payload = [];

      expect(
        swimLanes([], {
          type: 'INVALID_TYPE',
          payload,
        }),
      ).toEqual(payload);
    });
  });
});
