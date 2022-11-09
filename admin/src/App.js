import { Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserList from './pages/UserLists';
import UnderDevelopment from './pages/UnderDevelopment';
import Page404 from './pages/Page404';
import UserDetail from './pages/UserDetail';
import UserNew from './pages/UserNew';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route */}
        <Route path='/admin/v1' element={<DefaultLayout />}>
          <Route index element={<Home />} />

          {/* user Routes */}
          <Route path='users' element={<UserList />} />
          <Route path='users/new' element={<UserNew />} />
          <Route path='users/:id' element={<UserDetail />} />
          {/* Movie Routes */}



          {/* Cinenma routes */}



          <Route path='*' element={<UnderDevelopment />} />
        </Route>


        {/* Route Authen */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
