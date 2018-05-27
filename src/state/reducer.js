import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import puzzle from './puzzle/reducer';

export default combineReducers({
  puzzle,
  router: routerReducer,
});
