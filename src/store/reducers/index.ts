import { combineReducers } from 'redux';
import posts from './posts';
import loader from './loader';
import comments from './comments';

const reducer = combineReducers({
  posts,
  loader,
  comments,
});

export default reducer;

