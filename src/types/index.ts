import { SET_POSTS } from "../store/constants";


export type initialTypeLoader = {
  isLoadingData: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostsType = {
  posts: Post[],
}
export type ActionType = {
  type: typeof SET_POSTS;
  payload: Post[];
};

export type DataType = Post[];

export type ActionLoader = {
  type: string;
  payload: boolean;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type CommentsType = {
  comments: Comment[],
}
export type initialCommentsType = {
  comments: CommentsType
}

export type ActionCommentsById = {
  type: string;
  payload: CommentsType;
}

export type ActionSagaCommentsById = {
  type: string;
  payload: number;
}
