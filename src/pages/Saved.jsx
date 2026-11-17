import { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { quotes } from '../data/quotes.js';
import { bites } from '../data/bites.js';
import { getAuthor, getPortrait } from '../data/authors.js';
import DomainChips from '../components/common/DomainChips.jsx';
import ActionBar from '../components/common/ActionBar.jsx';
import BiteCard from '../components/bites/BiteCard.jsx';

function SavedQuote({ quote }) {
  const author = getAuthor(quote.authorId);
  const portrait = author ? getPortrait(author.file) : null;

  return (
    <article className="saved-quote">
      {portrait ? (
        <img className="saved-quote__img" src={portrait} alt={author.name} />
      ) : (
        <div className="saved-quote__img saved-quote__img--empty">
          {author?.name.charAt(0)}
        </div>
      )}
      <div className="saved-quote__content">
        <p className="saved-quote__text">“{quote.text}”</p>
        <p className="saved-quote__author">— {author?.name}</p>
      </div>
      <ActionBar id={quote.id} shareText={`“${quote.text}” — ${author?.name}`} />
    </article>
  );
}

export default function Saved() {
  const { bookmarks } = useApp();
  const [tab, setTab] = useState('All');

  // newest saved first
  const ordered = [...bookmarks].reverse();
  const savedQuotes = ordered
    .map((id) => quotes.find((q) => q.id === id))
    .filter(Boolean);
  const savedBites = ordered
    .map((id) => bites.find((b) => b.id === id))
    .filter(Boolean);

  const showQuotes = tab === 'All' || tab === 'Quotes';
  const showBites = tab === 'All' || tab === 'Bites';
  const nothing =
    (!showQuotes || savedQuotes.length === 0) &&
    (!showBites || savedBites.length === 0);

  return (
    <div className="saved-page">
      <h1 className="page-title">Your Library</h1>
      <DomainChips domains={['Quotes', 'Bites']} active={tab} onChange={setTab} />

      <div className="saved-list">
        {nothing && (
          <p className="empty">
            Nothing saved here yet. Tap ☆ on a quote or bite to keep it.
          </p>
        )}
        {showQuotes && savedQuotes.map((q) => <SavedQuote key={q.id} quote={q} />)}
        {showBites && savedBites.map((b) => <BiteCard key={b.id} bite={b} />)}
      </div>
    </div>
  );
}