import { combineReducers } from 'redux';
import posts from './posts';
import loader from './loader';

const reducer = combineReducers({
  posts,
  loader,
});

export default reducer;

