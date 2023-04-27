import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserPage } from './pages/UserPage/UserPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { AdminViewPage } from './pages/AdminViewPage/AdminViewPage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<LoginPage />} />
      <Route path={'/admin'} element={<AdminViewPage />} />
      <Route path='/user/:id' element={<UserPage />} />
      <Route path={'/user'} element={<UserPage />} />
      <Route path={'*'} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
