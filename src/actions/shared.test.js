import { hasErrored, isLoading } from './shared';
import { HAS_ERRORED, IS_LOADING } from '../action-types';

describe('shared', () => {
  describe('hasErrored', () => {
    it('should return an object of HAS_ERRORED and true', () => {
      expect(hasErrored(true)).toEqual({ type: HAS_ERRORED, payload: true });
    });
  });

  describe('isLoading', () => {
    it('should return an object of IS_LOADING and true', () => {
      expect(isLoading(true)).toEqual({ type: IS_LOADING, payload: true });
    });
  });
});
