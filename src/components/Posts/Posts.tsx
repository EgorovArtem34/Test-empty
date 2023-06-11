import { useState, useEffect } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import { fetchPosts } from '../../store/actions/actionCreator';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './posts.scss';
import Loader from '../Loader/Loader';
import { PostsType, InitialLoaderType } from '../../types';
import Post from '../Post/Post';
import Header from '../Header/Header';
import FormSearch from './FormSearch';
import FormCheckFilter from './FormCheckFilter';
import { compareTitles, createPageNumbers } from '../../utils/utils';

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts }: PostsType = useAppSelector((state) => state.posts);
  const { isLoadingData }: InitialLoaderType = useAppSelector((state) => state.loader);
  const { postsError } = useAppSelector((state) => state.errors);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [isSortedActive, setIsSortedActive] = useState(false);
  const postsPerPage = 12;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (postsError) {
    return <span>{postsError}</span>;
  }
  if (isLoadingData) {
    return <Loader />;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredPosts = searchValue
    ? posts.filter((post) => post.title.includes(searchValue))
    : posts;

  let sortedPosts = filteredPosts;

  if (isSortedActive) {
    sortedPosts = isSortedActive ? filteredPosts.slice().sort(compareTitles) : filteredPosts;
  }
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const createPosts = () => (currentPosts.map((post) => (
    <Post post={post} key={post.id} />
  )));
  const pageNumbers = createPageNumbers(sortedPosts.length, postsPerPage);
  return (
    <>
      <Header />
      <Container>
        {postsError ? (
          <span>{postsError}</span>
        ) : (
          <>
            <FormSearch setSearchValue={setSearchValue} />
            <FormCheckFilter
              isSortedActive={isSortedActive}
              setIsSortedActive={setIsSortedActive}
            />
            {currentPosts.length === 0 ? (
              <span>По вашему запросу ничего не найдено</span>
            ) : (
              createPosts()
            )}
            <Pagination>
              {pageNumbers.map(
                (pageNumber) => (
                  <Pagination.Item
                    key={pageNumber}
                    active={pageNumber === currentPage}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </Pagination.Item>
                ),
              )}
            </Pagination>
          </>
        )}
      </Container>
    </>
  );
};

export default Posts;
