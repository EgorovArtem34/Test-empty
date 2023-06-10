import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import Posts from './components/Posts/Posts';
import User from './components/User/User';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Posts />} />
        <Route path={'/users/:userId'} element={<User />} />
        <Route path={'/about-me'} element={<AboutMe />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
