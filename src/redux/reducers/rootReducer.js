import { combineReducers } from 'redux';
import { parkReducer } from './parkReducer';
import { setApiReducer } from './setApiReducer';

const rootReducer = combineReducers({
  park: parkReducer,
  api: setApiReducer
});

export default rootReducer;
