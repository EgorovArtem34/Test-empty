import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Pagination, Button, Collapse } from 'react-bootstrap';
import { fetchPosts, fetchCommentsById } from '../../store/actions/actionCreator';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import './posts.scss';
// import Loader from '../Loader/Loader';
import { CommentsType, PostsType, initialTypeLoader } from '../../types';
import Comment from '../Comment/Comment';

const Post = ({ post }) => {
  const dispatch = useAppDispatch();
  const { comments }: CommentsType = useAppSelector((state) => state.comments);
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);

  const handleClickComment = (id: number) => {
    if (true) {
      dispatch(fetchCommentsById(id));
    }
    setIsOpenCollapse(!isOpenCollapse)
  }
  console.log(comments);
  return (
    <div className="card p-2 mb-4" key={post.id}>
      <div className="row ">

        <div className="col-md-7 px-3">
          <div className="card-block px-6">
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text">
              {post.body}
            </p>
            <br />
            <Button
              onClick={() => handleClickComment(post.id)}
              aria-controls="comments"
              aria-expanded={isOpenCollapse}
            >
              Комментарии
            </Button>
            <Collapse in={isOpenCollapse}>
              <div id="comments">
                {comments.map((comment) => (
                  <Comment comment={comment} key={comment.id} />
                ))}
              </div>
            </Collapse>
          </div>
        </div>

        <div className="col-md-5">
          <Link to={`/user/${post.userId}`}>
            <img
              className="d-block card__avatar"
              src="https://memepedia.ru/wp-content/uploads/2019/12/screenshot_22-1.png"
              alt="user avatar"
            />
          </Link>
        </div>
      </div>
    </div>
  )
};
export default Post;

