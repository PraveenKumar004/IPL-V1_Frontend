import { combineReducers } from 'redux';
import managerReducer from './managerReducer';
import playerReducer from './playerReducer' ;
import contestantReducer from './contestantReducer'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
  manager: managerReducer,
  player: playerReducer,
  contestant: contestantReducer,
  admin:adminReducer
});

export default rootReducer;
