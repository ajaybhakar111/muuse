import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import BottomNav from './components/layout/BottomNav.jsx';
import Splash from './pages/Splash.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Quotes from './pages/Quotes.jsx';
import Bites from './pages/Bites.jsx';
import Saved from './pages/Saved.jsx';
import Profile from './pages/Profile.jsx';

const BARE_ROUTES = ['/', '/onboarding'];

export default function App() {
  const { pathname } = useLocation();
  const showChrome = !BARE_ROUTES.includes(pathname);

  return (
    <div className="app-shell">
      {showChrome && <Navbar />}

      <main className={showChrome ? 'app-main' : 'app-main app-main--bare'}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/bites" element={<Bites />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/quotes" replace />} />
        </Routes>
      </main>

      {showChrome && <BottomNav />}
    </div>
  );
}