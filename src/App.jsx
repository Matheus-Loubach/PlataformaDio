import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global';

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Feed from './pages/Feed'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
