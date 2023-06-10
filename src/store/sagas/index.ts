import { delay, takeLatest, call, put, fork } from 'redux-saga/effects';
import {
  FETCH_COMMENTS_BY_ID,
  FETCH_POSTS,
  FETCH_USER_DATA,
  SET_LOADING_COMMENTS,
  SET_LOADING_DATA,
  SET_LOADING_USER_DATA,
  SET_LOADING_USER_POSTS,
} from '../constants';
import useApi from '../../api/useApi';
import { setPosts, setCommentsById, setUserData, setUserPosts } from '../actions/actionCreator';
import { ActionSaga, ActionSagaUser, CommentsType, PostsType, UserDataType, UserPostsType } from '../../types';

const { getPosts, getCommentsById, getUserData, getUserPosts } = useApi();
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
};

export function* handleComments({ payload }: ActionSaga) {
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

export function* handleUserPosts({ payload }: ActionSagaUser) {
  try {
    yield put({ type: SET_LOADING_USER_POSTS, payload: true });
    const userPosts: UserPostsType = yield call(getUserPosts, payload);
    yield delay(delayTime);
    yield put(setUserPosts({ userPosts }));
    yield put({ type: SET_LOADING_USER_POSTS, payload: false });
  } catch (err) {
    console.log(err);
  }
};

export function* handleUserData({ payload }: ActionSagaUser) {
  try {
    yield put({ type: SET_LOADING_USER_DATA, payload: true });
    const userData: UserDataType = yield call(getUserData, payload);
    yield delay(delayTime);
    yield put(setUserData({ userData }));
    yield put({ type: SET_LOADING_USER_DATA, payload: false });
  } catch (err) {
    console.log(err);
  }
};

export function* handleUser({ payload }: ActionSaga) {
  yield fork(handleUserData, { payload });
  yield fork(handleUserPosts, { payload });
}

export function* watchSaga() {
  yield takeLatest(FETCH_POSTS, handlePosts);
  yield takeLatest(FETCH_COMMENTS_BY_ID, handleComments);
  yield takeLatest(FETCH_USER_DATA, handleUser);
};

export default function* rootSaga() {
  yield watchSaga();
};
