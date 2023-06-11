import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Collapse } from 'react-bootstrap';
import { fetchCommentsById } from '../../store/actions/actionCreator';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { CommentType, CommentsSelectorType, PostType } from '../../types';
import Comment from '../Comment/Comment';

const Post = ({ post }: { post: PostType }) => {
  const dispatch = useAppDispatch();
  const { comments }: CommentsSelectorType = useAppSelector((state) => state.comments);
  const currentComments = comments[post.id] || [];
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);

  const handleClickComment = (id: number) => {
    dispatch(fetchCommentsById(id));
    setIsOpenCollapse(!isOpenCollapse);
  };

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
                {currentComments.map((comment: CommentType) => (
                  <Comment comment={comment} key={comment.id} />
                ))}
              </div>
            </Collapse>
          </div>
        </div>

        <div className="col-md-5">
          <Link to={`/users/${post.userId}`}>
            <img
              className="d-block card__avatar"
              src="https://memepedia.ru/wp-content/uploads/2019/12/screenshot_22-1.png"
              alt="user avatar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Post;
