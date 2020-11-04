import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getTaskData, postTaskData } from './tasks.ts';
import {
  GET_TASKS_DATA_SUCCESS,
  HAS_ERRORED, POST_TASK_DATA_SUCCESS,
} from '../action-types/index.ts';
import { requestService } from '../services/index.ts';

jest.mock('../services');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('tasks', () => {
  describe('getTaskData', () => {
    it('should dispatch GET_TASKS_DATA_SUCCESS', async () => {
      const store = mockStore({});
      const payload = [];
      const expectedActions = [{ type: GET_TASKS_DATA_SUCCESS, payload }];

      requestService.get.mockReturnValue(payload);

      await store.dispatch(getTaskData());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should dispatch HAS_ERRORED if api request fails', async () => {
      const store = mockStore({});
      const expectedActions = [{ type: HAS_ERRORED, payload: true }];

      requestService.get.mockRejectedValue();

      await store.dispatch(getTaskData());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('postTaskData', () => {
    it('should dispatch POST_TASK_DATA_SUCCESS', async () => {
      const store = mockStore({});
      const payload = [];
      const expectedActions = [{ type: POST_TASK_DATA_SUCCESS, payload }];

      requestService.post.mockReturnValue(payload);

      await store.dispatch(postTaskData());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should dispatch HAS_ERRORED if api request fails', async () => {
      const store = mockStore({});
      const expectedActions = [{ type: HAS_ERRORED, payload: true }];

      requestService.post.mockRejectedValue();

      await store.dispatch(postTaskData());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
