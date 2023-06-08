import { useAppSelector } from "../../hooks/hooks";
import Loader from "../Loader/Loader";

const Comment = ({ comment }) => {
  const { isLoadingComments } = useAppSelector((state) => state.loader);

  if (isLoadingComments) {
    return <Loader />
  }
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{comment.email}</h5>
        <p className="card-text">{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;

