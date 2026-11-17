import { useApp } from '../../context/AppContext.jsx';

// id: "q-1" or "b-1", shareText: text copied/shared
export default function ActionBar({ id, shareText, vertical = false }) {
  const { isLiked, isBookmarked, toggleLike, toggleBookmark } = useApp();

  const handleShare = async () => {
    const text = `${shareText}\n\n— shared from MUUSE`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'MUUSE', text });
      } else {
        await navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
      }
    } catch {
      /* user cancelled share */
    }
  };

  return (
    <div className={vertical ? 'actions actions--vertical' : 'actions'}>
      <button
        className={isLiked(id) ? 'actions__btn actions__btn--on' : 'actions__btn'}
        onClick={() => toggleLike(id)}
        aria-label="Like"
      >
        {isLiked(id) ? '♥' : '♡'}
      </button>
      <button
        className={isBookmarked(id) ? 'actions__btn actions__btn--on' : 'actions__btn'}
        onClick={() => toggleBookmark(id)}
        aria-label="Bookmark"
      >
        {isBookmarked(id) ? '★' : '☆'}
      </button>
      <button className="actions__btn" onClick={handleShare} aria-label="Share">
        ➤
      </button>
    </div>
  );
}