import { hasErrored, isLoading } from './shared.ts';
import { HAS_ERRORED, IS_LOADING } from '../action-types/index.ts';

describe('shared', () => {
  describe('hasErrored', () => {
    it('should return the payload if type is HAS_ERRORED', () => {
      const payload = [];

      expect(hasErrored(true, { type: HAS_ERRORED, payload })).toEqual(payload);
    });

    it('should return state (true) if type is not HAS_ERRORED', () => {
      expect(hasErrored(true, { type: 'NOT_HAS_ERRORED', payload: [] })).toBeTruthy();
    });
  });

  describe('isLoading', () => {
    it('should return the payload if type is IS_LOADING', () => {
      const payload = [];

      expect(isLoading(true, { type: IS_LOADING, payload })).toEqual(payload);
    });

    it('should return state (true) if type is not IS_LOADING', () => {
      expect(isLoading(true, { type: 'NOT_IS_LOADING', payload: [] })).toBeTruthy();
    });
  });
});
