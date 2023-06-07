import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { fetchPosts } from '../../store/actions/actionCreator';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './posts.scss';
import Loader from '../Loader/Loader';

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);
  const { isLoadingData } = useAppSelector((state) => state.loader);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoadingData) {
    return <Loader />
  }

  return (
    <Container>
      {posts.map((post) => (
        <div className="card p-2 mb-4" key={post.id}>
          <div className="row ">

            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">{post.title}</h4>
                <p className="card-text">
                  {post.body}
                </p>
                <p className="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
                <br />
                <a href="#" className="mt-auto btn btn-primary  ">Read More</a>
              </div>
            </div>

            <div className="col-md-5">
              <img
                className="d-block card__avatar"
                src="https://memepedia.ru/wp-content/uploads/2019/12/screenshot_22-1.png"
                alt="user avatar"
              />
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Posts;
