import { HAS_ERRORED, IS_LOADING } from '../action-types';
import { hasErroredT, isLoadingT } from './types';

export function hasErrored(state = false, { type, payload }: hasErroredT) {
  switch (type) {
    case HAS_ERRORED:
      return payload;

    default:
      return state;
  }
}

export function isLoading(state = false, { type, payload }: isLoadingT) {
  switch (type) {
    case IS_LOADING:
      return payload;

    default:
      return state;
  }
}
