import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import logo from '../assets/logo/muuse-logo.png';

export default function Profile() {
  const navigate = useNavigate();
  const { likes, bookmarks, favDomains } = useApp();

  const resetDemo = () => {
    if (!window.confirm('Reset all demo data (likes, saves, topics)?')) return;
    ['muuse-likes', 'muuse-bookmarks', 'muuse-fav-domains', 'muuse-quote-domain', 'muuse-bite-domain']
      .forEach((key) => localStorage.removeItem(key));
    window.location.href = '/';
  };

  return (
    <div className="profile-page">
      <h1 className="page-title">Profile</h1>

      <section className="profile__hero">
        <img className="profile__avatar" src={logo} alt="" />
        <div>
          <h2 className="profile__name">Curious Mind</h2>
          <p className="profile__tag">Demo user</p>
        </div>
      </section>

      <section className="profile__stats">
        <div className="card profile__stat">
          <span className="profile__stat-num">{likes.length}</span>
          <span className="profile__stat-label">Liked</span>
        </div>
        <div className="card profile__stat">
          <span className="profile__stat-num">{bookmarks.length}</span>
          <span className="profile__stat-label">Saved</span>
        </div>
        <div className="card profile__stat">
          <span className="profile__stat-num">{favDomains.length}</span>
          <span className="profile__stat-label">Topics</span>
        </div>
      </section>

      <section className="profile__section">
        <h3 className="profile__heading">Your topics</h3>
        {favDomains.length > 0 ? (
          <div className="profile__topics">
            {favDomains.map((d) => (
              <span key={d} className="chip chip--active">{d}</span>
            ))}
          </div>
        ) : (
          <p className="profile__muted">No topics picked yet.</p>
        )}
        <button className="btn btn--ghost profile__btn" onClick={() => navigate('/onboarding')}>
          Edit topics
        </button>
      </section>

      <section className="profile__section">
        <h3 className="profile__heading">About this demo</h3>
        <p className="profile__muted">
          MUUSE is a prototype. Content is sample data stored in the app and your
          activity is saved only in this browser.
        </p>
        <p className="profile__muted">
          Photo credits: add each portrait's source and licence here before sharing
          beyond the team (Wikimedia Commons lists them on every file page).
        </p>
      </section>

      <button className="btn btn--ghost profile__btn profile__btn--danger" onClick={resetDemo}>
        Reset demo data
      </button>
    </div>
  );
}
