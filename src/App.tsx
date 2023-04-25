import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Navigation } from './components/Navigation/Navigation';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/portfolio'
          element={
            <>
              <Navigation />
              <PortfolioPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
