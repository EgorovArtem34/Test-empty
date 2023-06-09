import { useState, useEffect } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import { fetchPosts } from '../../store/actions/actionCreator';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './posts.scss';
import Loader from '../Loader/Loader';
import { PostsType, initialTypeLoader } from '../../types';
import Post from '../Post/Post';
import Header from '../Header/Header';

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts }: PostsType = useAppSelector((state) => state.posts);
  const { isLoadingData }: initialTypeLoader = useAppSelector((state) => state.loader);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoadingData) {
    return <Loader />
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <Container>
        {currentPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
        <Pagination>
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
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
