import ActionBar from '../common/ActionBar.jsx';

const ICONS = {
  Psychology: '🧠',
  Science: '🔬',
  Technology: '💻',
  Business: '📈',
  History: '🏛️',
  'Human Behaviour': '👥',
  'General Knowledge': '💡',
};

export default function BiteCard({ bite }) {
  const words = bite.body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));

  return (
    <article id={bite.id} className="bite-card">
      <header className="bite-card__top">
        <span className="bite-card__tag">
          <span aria-hidden="true">{ICONS[bite.domain]}</span> {bite.domain}
        </span>
        <span className="bite-card__time">{minutes} min read</span>
      </header>

      <h2 className="bite-card__title">{bite.title}</h2>
      <p className="bite-card__body">{bite.body}</p>

      <footer className="bite-card__footer">
        <span className="bite-card__source">{bite.source}</span>
        <ActionBar id={bite.id} shareText={`${bite.title}\n\n${bite.body}`} />
      </footer>
    </article>
  );
}