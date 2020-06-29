import { HAS_ERRORED, IS_LOADING } from '../action-types';
import { hasErroredT, isLoadingT } from './types';

export function hasErrored(state = false, { type, hasErrored }: hasErroredT) {
  switch (type) {
    case HAS_ERRORED:
      return hasErrored;
    default:
      return state;
  }
}

export function isLoading(state = false, { type, isLoading }: isLoadingT) {
  switch (type) {
    case IS_LOADING:
      return isLoading;
    default:
      return state;
  }
}
