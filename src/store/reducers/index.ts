import { combineReducers } from 'redux';
import posts from './posts';
import loader from './loader';
import comments from './comments';
import user from './user';

const reducer = combineReducers({
  posts,
  loader,
  comments,
  user,
});

export default reducer;

