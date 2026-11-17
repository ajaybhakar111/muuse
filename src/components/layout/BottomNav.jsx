import { NavLink } from 'react-router-dom';

const TABS = [
  { to: '/quotes', label: 'Quotes', icon: '❝' },
  { to: '/bites', label: 'Bites', icon: '✦' },
  { to: '/saved', label: 'Saved', icon: '🔖' },
  { to: '/profile', label: 'Profile', icon: '◉' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            isActive ? 'bottom-nav__item bottom-nav__item--active' : 'bottom-nav__item'
          }
        >
          <span className="bottom-nav__icon">{tab.icon}</span>
          <span className="bottom-nav__label">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}