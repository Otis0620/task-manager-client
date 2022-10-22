import { combineReducers } from 'redux';
import { hasErrored, isLoading } from './shared';
import { swimLanes } from './swim-lanes';
import { tasks } from './tasks';

export default combineReducers({
  swimLanes,
  hasErrored,
  isLoading,
  tasks,
});
