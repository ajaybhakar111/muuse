import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { QUOTE_DOMAINS, BITE_DOMAINS } from '../data/domains.js';

export default function Onboarding() {
  const navigate = useNavigate();
  const { favDomains, setFavDomains } = useApp();
  const [picked, setPicked] = useState(favDomains);

  const toggle = (domain) =>
    setPicked((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    );

  const renderGroup = (title, domains) => (
    <section className="onboarding__group">
      <h2 className="onboarding__group-title">{title}</h2>
      <div className="onboarding__chips">
        {domains.map((d) => (
          <button
            key={d}
            className={picked.includes(d) ? 'chip chip--active' : 'chip'}
            onClick={() => toggle(d)}
          >
            {d}
          </button>
        ))}
      </div>
    </section>
  );

  const finish = () => {
    setFavDomains(picked);
    navigate('/quotes', { replace: true });
  };

  return (
    <div className="onboarding">
      <header className="onboarding__header">
        <h1 className="onboarding__title">What sparks your curiosity?</h1>
        <p className="onboarding__sub">
          Pick a few topics. You can change them anytime from your profile.
        </p>
      </header>

      {renderGroup('Thoughts & Ideas', QUOTE_DOMAINS)}
      {renderGroup('Knowledge Bites', BITE_DOMAINS)}

      <footer className="onboarding__footer">
        <button className="btn" disabled={picked.length === 0} onClick={finish}>
          Continue{picked.length > 0 ? ` (${picked.length})` : ''}
        </button>
        <button
          className="onboarding__skip"
          onClick={() => navigate('/quotes', { replace: true })}
        >
          Skip for now
        </button>
      </footer>
    </div>
  );
}