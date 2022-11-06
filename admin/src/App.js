import { Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
