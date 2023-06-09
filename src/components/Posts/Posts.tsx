import { useState, useEffect } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import { fetchPosts } from '../../store/actions/actionCreator';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './posts.scss';
import Loader from '../Loader/Loader';
import { PostsType, initialTypeLoader } from '../../types';
import Post from '../Post/Post';
import Header from '../Header/Header';
import FormSearch from './FormSearch';
import FormCheckFilter from './FormCheckFilter';

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts }: PostsType = useAppSelector((state) => state.posts);
  const { isLoadingData }: initialTypeLoader = useAppSelector((state) => state.loader);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [isSortedActive, setIsSortedActive] = useState(false);
  const postsPerPage = 12;

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoadingData) {
    return <Loader />
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredPosts = searchValue
    ? posts.filter((post) => post.title.includes(searchValue))
    : posts;
  const sortedPosts = isSortedActive
    ? filteredPosts.slice().sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
    : filteredPosts;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const createPosts = () => (currentPosts.map((post) => (
    <Post post={post} key={post.id} />
  )))
  return (
    <>
      <Header />
      <Container>
        <FormSearch setSearchValue={setSearchValue} />
        <FormCheckFilter isSortedActive={isSortedActive} setIsSortedActive={setIsSortedActive} />
        {currentPosts.length === 0
          ? <span>По вашему запросу ничего не найдено</span>
          : createPosts()}
        <Pagination>
          {Array.from({ length: Math.ceil(sortedPosts.length / postsPerPage) }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </>
  );
}

export default Posts;
