import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Posts />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
