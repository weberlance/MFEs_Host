import { combineReducers } from 'redux';
import loader from './Loader';
import token from './token';
import ReducerExample from './ReducerExample';

export default combineReducers({
  loader,
  token,
  ReducerExample,
});
