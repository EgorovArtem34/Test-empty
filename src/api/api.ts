import axios from 'axios';
import {
  CommentType,
  DataType,
  UserDataType,
  UserPostType,
} from '../types';

const url = 'https://jsonplaceholder.typicode.com';
const createUrl = (baseUrl: string, resources: string, id?: number, type?: string): string => [baseUrl, resources, id, type].join('/');

const api = () => {
  const getPosts = async () => {
    const createdUrl = createUrl(url, 'posts');
    const { data }: { data: DataType } = await axios.get(createdUrl);
    return data;
  };

  const getCommentsById = async (id: number) => {
    const createdUrl = createUrl(url, 'posts', id, 'comments');
    const { data } = await axios.get<CommentType[]>(createdUrl);
    return data;
  };

  const getUserData = async (id: number) => {
    const createdUrl = createUrl(url, 'users', id);
    const { data } = await axios.get<UserDataType>(createdUrl);
    console.log(data);
    return data;
  };

  const getUserPosts = async (id: number) => {
    const createdUrl = createUrl(url, 'users', id, 'posts');
    const { data } = await axios.get<UserPostType>(createdUrl);
    return data;
  };

  return {
    getPosts, getCommentsById, getUserData, getUserPosts,
  };
};

export default api;
