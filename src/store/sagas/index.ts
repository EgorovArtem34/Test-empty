import { delay, takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_POSTS, SET_LOADING_DATA } from '../constants';
import useApi from '../../api/useApi';
import { setPosts } from '../actions/actionCreator';

export function* handlePosts() {
  const { getPosts } = useApi();
  const delayTime = 500;
  try {
    yield put({ type: SET_LOADING_DATA, payload: true })
    yield delay(delayTime);
    const data = yield call(getPosts);
    yield put(setPosts(data));
    yield put({ type: SET_LOADING_DATA, payload: false })
  } catch (err) {
    console.log(err);
  }
}

export function* watchSaga() {
  yield takeLatest(FETCH_POSTS, handlePosts);
}

export default function* rootSaga() {
  yield watchSaga();
}
