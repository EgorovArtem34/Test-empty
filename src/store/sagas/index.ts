import { delay, takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COMMENTS_BY_ID, FETCH_POSTS, FETCH_USER_DATA, SET_COMMENTS_BY_ID, SET_LOADING_COMMENTS, SET_LOADING_DATA, SET_LOADING_USER_DATA, SET_USER } from '../constants';
import useApi from '../../api/useApi';
import { setPosts, setCommentsById, setUserData } from '../actions/actionCreator';
import { ActionSagaCommentsById, ActionSagaUser, CommentsType, PostsType, UserDataType } from '../../types';

const { getPosts, getCommentsById, getUserData } = useApi();
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
    const comments: CommentsType = yield call(getCommentsById, payload);
    yield delay(delayTime);
    yield put(setCommentsById({ payload, comments }));
    yield put({ type: SET_LOADING_COMMENTS, payload: false });
  } catch (err) {
    console.log(err);
  }
};

export function* handleUser({ payload }: ActionSagaUser) {
  try {
    yield put({ type: SET_LOADING_USER_DATA, payload: true });
    console.log('!!!!');
    const userData: UserDataType = yield call(getUserData, payload);
    yield delay(delayTime);
    yield put(setUserData({ userData }));
    yield put({ type: SET_LOADING_USER_DATA, payload: false });
  } catch (err) {
    console.log(err);
  }
};

export function* watchSaga() {
  yield takeLatest(FETCH_POSTS, handlePosts);
  yield takeLatest(FETCH_COMMENTS_BY_ID, handleComments);
  yield takeLatest(FETCH_USER_DATA, handleUser);
}

export default function* rootSaga() {
  yield watchSaga();
}
