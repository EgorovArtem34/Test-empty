import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Container, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchUserData } from '../../store/actions/actionCreator';
import './user.scss';
import { initialTypeLoader } from '../../types';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

const User = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.user.userData);
  const { isLoadingUserData }: initialTypeLoader = useAppSelector((state) => state.loader);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData(userId));
  }, []);

  if (isLoadingUserData) {
    return <Loader />;
  }

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>{userData?.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{userData?.username}</Card.Subtitle>
            <Card.Text>Email: {userData?.email}</Card.Text>
            <Card.Text>City: {userData?.address?.city}</Card.Text>
            <Card.Text>Website: {userData?.website}</Card.Text>
            <Card.Text>Company: {userData?.company?.name}</Card.Text>
          </Card.Body>
        </Card>
        <Button onClick={handleBack} type="button" className="ml-auto mt-2">Назад</Button>
      </Container>
    </>
  );
};
export default User;
