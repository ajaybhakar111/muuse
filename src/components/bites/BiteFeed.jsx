import BiteCard from './BiteCard.jsx';

export default function BiteFeed({ bites }) {
  if (bites.length === 0) {
    return <p className="empty">No bites in this domain yet.</p>;
  }

  return (
    <div className="bite-feed">
      {bites.map((b) => (
        <BiteCard key={b.id} bite={b} />
      ))}
    </div>
  );
}