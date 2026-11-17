import { useEffect } from 'react';
import { getAuthor, getPortrait } from '../../data/authors.js';
import { quotes } from '../../data/quotes.js';

export default function AuthorSheet({ authorId, onClose }) {
  const author = getAuthor(authorId);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!author) return null;

  const portrait = getPortrait(author.file);
  const otherQuotes = quotes.filter((q) => q.authorId === author.id);

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <section className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet__handle" />

        <header className="sheet__header">
          {portrait ? (
            <img className="sheet__portrait" src={portrait} alt={author.name} />
          ) : (
            <div className="sheet__portrait sheet__portrait--empty">
              {author.name.charAt(0)}
            </div>
          )}
          <div>
            <h2 className="sheet__name">{author.name}</h2>
            <p className="sheet__profession">{author.profession}</p>
            <p className="sheet__years">{author.years}</p>
          </div>
        </header>

        <p className="sheet__bio">{author.bio}</p>

        <h3 className="sheet__subtitle">Thoughts by {author.name.split(' ')[0]}</h3>
        <ul className="sheet__quotes">
          {otherQuotes.map((q) => (
            <li key={q.id} className="sheet__quote">
              “{q.text}”
            </li>
          ))}
        </ul>

        <button className="btn btn--ghost sheet__close" onClick={onClose}>
          Close
        </button>
      </section>
    </div>
  );
}