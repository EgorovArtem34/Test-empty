import { PostType } from '../types';

export const compareTitles = (a: PostType, b: PostType) => {
  if (a.title < b.title) {
    return -1;
  } if (a.title > b.title) {
    return 1;
  }
  return 0;
};

export const createPageNumbers = (posts: number, postsPerPage: number) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};
