import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import logo from '../assets/logo/muuse-logo.png';

export default function Splash() {
  const navigate = useNavigate();
  const { favDomains } = useApp();

  useEffect(() => {
    // first-time users pick domains, returning users go straight to the feed
    const target = favDomains.length > 0 ? '/quotes' : '/onboarding';
    const timer = setTimeout(() => navigate(target, { replace: true }), 2200);
    return () => clearTimeout(timer);
  }, [navigate, favDomains]);

  return (
    <div className="splash">
      <div className="splash__glow" />
      <img className="splash__logo" src={logo} alt="MUUSE" />
      <h1 className="splash__name">MUUSE</h1>
      <p className="splash__tagline">Scroll, Think, Grow.</p>
    </div>
  );
}
