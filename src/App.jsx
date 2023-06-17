import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NewPost from './pages/NewPost';
function App() {

  return (
    <div className='app'>
      <div className='container'>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<NewPost />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
