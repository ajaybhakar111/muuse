export default function RandomButton({ ids, label = 'Random Muse' }) {
  const handleClick = () => {
    if (ids.length === 0) return;
    const pick = ids[Math.floor(Math.random() * ids.length)];
    const el = document.getElementById(pick);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button className="random-btn" onClick={handleClick}>
      <span aria-hidden="true">🎲</span> {label}
    </button>
  );
}