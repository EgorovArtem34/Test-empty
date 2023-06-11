import { Dispatch, SetStateAction } from 'react';

export type InitialLoaderType = {
  [key: string]: boolean;
};

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsType = {
  posts: PostType[],
};

export type ActionType = {
  type: string;
  payload: PostType[];
};

export type DataType = PostType[];

export type ActionLoader = {
  type: string;
  payload: boolean;
};

export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export type CommentsType = {
  comments: {
    [key: string]: CommentType[];
  },
  [Symbol.iterator]: () => Iterator<CommentType>;
};
export type CommentsSelectorType = {
  comments: {
    [key: string]: CommentType[];
  },
};
export type InitialCommentsType = {
  comments: {
    [key: string]: CommentType[];
  },
  [Symbol.iterator]?: Iterable<CommentType>,
};

export type ActionCommentsById = {
  type: string;
  payload: {
    payload: number;
    comments: CommentsType;
  };
};

export type ActionSaga = {
  type: string;
  payload: number;
};

export type FormSearchProps = {
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export type FormCheckFilterProps = {
  isSortedActive: boolean;
  setIsSortedActive: (isActive: boolean) => void;
};

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type UserDataType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type UserPostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type UserPayloadType = {
  type: string;
  payload: number;
};

export type ActionSagaUser = {
  payload: number;
};

export type ActionUserType = {
  type: string;
  payload: UserDataType[] | UserPostType[];
};

export type ActionErrorsType = {
  type: string;
  payload?: string;
};

export type InitialStateUserType = {
  userData: UserDataType[];
  userPosts: UserPostType[];
};

export type UserType = {
  userData: UserDataType;
  userPosts: UserPostType[];
};
