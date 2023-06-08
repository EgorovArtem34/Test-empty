import axios from 'axios';
import { Comment, DataType } from '../types';

const url = 'https://jsonplaceholder.typicode.com';
const createUrl = (url: string, resources: string, id?: number, type?: string): string => [url, resources, id, type].join('/');

const useApi = () => {
  const getPosts = async () => {
    const createdUrl = createUrl(url, 'posts');
    const { data }: { data: DataType } = await axios.get(createdUrl);
    return data;
  };

  const getCommentsById = async (id: number) => {
    const createdUrl = createUrl(url, 'posts', id, 'comments');
    const { data } = await axios.get<Comment[]>(createdUrl);
    return data;
  };
  return { getPosts, getCommentsById };
};

export default useApi;
