import { getAuthor, getPortrait } from '../../data/authors.js';
import ActionBar from '../common/ActionBar.jsx';

export default function QuoteCard({ quote, onAuthorClick }) {
  const author = getAuthor(quote.authorId);
  const portrait = author ? getPortrait(author.file) : null;

  const style = portrait ? { backgroundImage: `url(${portrait})` } : undefined;
  const cls = portrait ? 'quote-card' : 'quote-card quote-card--no-image';

  return (
   <article id={quote.id} className={cls} style={style}>
      <div className="quote-card__overlay" />

      <span className="quote-card__domain">{quote.domain}</span>

      <div className="quote-card__body">
        <p className="quote-card__text">“{quote.text}”</p>

        <button
          className="quote-card__author"
          onClick={() => onAuthorClick(quote.authorId)}
        >
          — {author?.name}
          <span className="quote-card__author-hint">Discover the person ›</span>
        </button>
      </div>

      <div className="quote-card__actions">
        <ActionBar
          id={quote.id}
          vertical
          shareText={`“${quote.text}” — ${author?.name}`}
        />
      </div>
    </article>
  );
}