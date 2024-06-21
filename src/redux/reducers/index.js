import { combineReducers } from 'redux';
import managerReducer from './managerReducer';
import playerReducer from './playerReducer' ;
import contestantReducer from './contestantReducer'

const rootReducer = combineReducers({
  manager: managerReducer,
  player: playerReducer,
  contestant: contestantReducer
});

export default rootReducer;
