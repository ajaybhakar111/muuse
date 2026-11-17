import logo from '../../assets/logo/muuse-logo.png';

export default function Navbar() {
  return (
    <header className="navbar">
      <img className="navbar__logo" src={logo} alt="MUUSE logo" />
      <span className="navbar__brand">MUUSE</span>
    </header>
  );
}
