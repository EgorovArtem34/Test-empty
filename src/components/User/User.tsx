import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Container, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUserData } from '../../store/actions/actionCreator';
import { initialTypeLoader } from '../../types';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import './user.scss';

const User = () => {
  const dispatch = useAppDispatch();
  const { userData: { userData }, userPosts: { userPosts } } = useAppSelector((state) => state.user);
  const { isLoadingUserData, isLoadingUserPosts }: initialTypeLoader = useAppSelector((state) => state.loader);
  const { userPostsError, userDataError } = useAppSelector((state) => state.errors);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData(userId));

    const IntervalOf5Minutes = 300000;
    const interval = setInterval(() => {
      dispatch(fetchUserData(userId));
    }, IntervalOf5Minutes);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, userId]);


  if (isLoadingUserData || isLoadingUserPosts) {
    return <Loader />;
  }

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <>
      <Header />
      <Container>
        {userDataError && <span>{userDataError}</span>}
        {userPostsError && <span>{userPostsError}</span>}
        {!userDataError && !userPostsError && (
          <>
            <Card>
              <Card.Body>
                <Card.Title>{userData?.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{userData?.username}</Card.Subtitle>
                <Card.Text>Email: {userData?.email}</Card.Text>
                <Card.Text>Город: {userData?.address?.city}</Card.Text>
                <Card.Text>Сайт: {userData?.website}</Card.Text>
                <Card.Text>Компания: {userData?.company?.name}</Card.Text>
                <Card.Text>Количество постов: {userPosts?.length}</Card.Text>
              </Card.Body>
            </Card>
          </>
        )}
        <Button onClick={handleBack} type="button" className="ml-auto mt-2">
          Назад
        </Button>
      </Container>
    </>
  );
};
export default User;
