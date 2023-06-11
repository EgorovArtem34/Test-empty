import { combineReducers } from 'redux';
import posts from './posts';
import loader from './loader';
import comments from './comments';
import user from './user';
import errors from './errors';

const reducer = combineReducers({
  posts,
  loader,
  comments,
  user,
  errors,
});

export default reducer;
