import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { UserPage } from './pages/UserPage/UserPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { AdminViewPage } from './pages/AdminViewPage/AdminViewPage';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage';
import { Navigation } from './components/Navigation/Navigation';
import { HumanResourcesPage } from './pages/HumanResourcesPage/HumanResourcesPage';

function App() {
  const location = useLocation();

  console.log(location);

  const displayNavigation = () => {
    if (
      location.pathname === '/portfolio' ||
      location.pathname === '/human-resources'
    )
      return <Navigation />;
  };

  return (
    <>
      {displayNavigation()}
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/portfolio'} element={<PortfolioPage />} />
        <Route path={'/human-resources'} element={<HumanResourcesPage />} />
        <Route path={'/admin'} element={<AdminViewPage />} />
        <Route path='/user/:id' element={<UserPage />} />
        <Route path={'/user'} element={<UserPage />} />
        <Route path={'*'} element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
