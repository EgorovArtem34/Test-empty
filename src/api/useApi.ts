import axios from 'axios';
import { DataType } from '../types';

const url = 'https://jsonplaceholder.typicode.com';
const createUrl = (url: string, resources: string): string => [url, resources].join('/');

const useApi = () => {
  const getPosts = async () => {
    const createdUrl = createUrl(url, 'posts');
    const { data }: { data: DataType } = await axios.get(createdUrl);
    return data;
  };
  return { getPosts };
};

export default useApi;
