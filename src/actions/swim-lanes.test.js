import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getSwimLanesData } from './swim-lanes';
import { GET_SWIMLANES_DATA_SUCCESS, HAS_ERRORED, IS_LOADING } from '../action-types';
import { requestService } from '../services';

jest.mock('../services');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('swimlanes', () => {
  describe('getSwimLanesData', () => {
    it('should dispatch IS_LOADING and GET_SWIMLANES_DATA_SUCCESS', async () => {
      const store = mockStore({});
      const payload = [];
      const expectedActions = [
        { type: IS_LOADING, payload: true },
        { type: IS_LOADING, payload: false },
        { type: GET_SWIMLANES_DATA_SUCCESS, payload },
      ];

      requestService.get.mockReturnValue(payload);

      await store.dispatch(getSwimLanesData());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should dispatch IS_LOADING and HAS_ERRORED if api request fails', async () => {
      const store = mockStore({});
      const expectedActions = [
        { type: IS_LOADING, payload: true },
        { type: HAS_ERRORED, payload: true },
      ];

      requestService.get.mockRejectedValue();

      await store.dispatch(getSwimLanesData());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
