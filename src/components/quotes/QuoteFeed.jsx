import QuoteCard from './QuoteCard.jsx';

export default function QuoteFeed({ quotes, onAuthorClick }) {
  if (quotes.length === 0) {
    return <p className="empty">No quotes in this domain yet.</p>;
  }

  return (
    <div className="quote-feed">
      {quotes.map((q) => (
        <QuoteCard key={q.id} quote={q} onAuthorClick={onAuthorClick} />
      ))}
    </div>
  );
}