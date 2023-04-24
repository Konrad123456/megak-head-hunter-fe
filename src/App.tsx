import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
