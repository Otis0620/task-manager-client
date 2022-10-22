import { HAS_ERRORED, IS_LOADING } from '../action-types';

export function hasErrored(hasErrored: boolean) {
  return {
    type: HAS_ERRORED,
    payload: hasErrored,
  };
}

export function isLoading(isLoading: boolean) {
  return {
    type: IS_LOADING,
    payload: isLoading,
  };
}
