import { delay, takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COMMENTS_BY_ID, FETCH_POSTS, SET_COMMENTS_BY_ID, SET_LOADING_COMMENTS, SET_LOADING_DATA } from '../constants';
import useApi from '../../api/useApi';
import { setPosts, setCommentsById } from '../actions/actionCreator';
import { ActionSagaCommentsById, CommentsType, PostsType } from '../../types';

const { getPosts, getCommentsById } = useApi();
const delayTime = 500;

export function* handlePosts() {
  try {
    yield put({ type: SET_LOADING_DATA, payload: true })
    const data: PostsType = yield call(getPosts);
    yield delay(delayTime);
    yield put(setPosts(data));
    yield put({ type: SET_LOADING_DATA, payload: false })
  } catch (err) {
    console.log(err);
  }
}

export function* handleComments({ payload }: ActionSagaCommentsById) {
  try {
    yield put({ type: SET_LOADING_COMMENTS, payload: true });
    const data: CommentsType = yield call(getCommentsById, payload);
    yield delay(delayTime);
    yield put(setCommentsById(data));
    yield put({ type: SET_LOADING_COMMENTS, payload: false });
  } catch (err) {
    console.log(err);
  }
}

export function* watchSaga() {
  yield takeLatest(FETCH_POSTS, handlePosts);
  yield takeLatest(FETCH_COMMENTS_BY_ID, handleComments);
}

export default function* rootSaga() {
  yield watchSaga();
}
