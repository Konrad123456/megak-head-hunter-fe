import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Navigation } from './components/Navigation/Navigation';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage';
import { AdminViewPage } from './pages/AdminViewPage/AdminViewPage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<LoginPage />} />
      <Route
        path={'/portfolio'}
        element={
          <>
            <Navigation />
            <PortfolioPage />
          </>
        }
      />
      <Route path={'/admin'} element={<AdminViewPage />} />
    </Routes>
  );
}

export default App;
