// domains: array of strings, active: currently selected string, onChange: (domain) => void
export default function DomainChips({ domains, active, onChange }) {
  const all = ['All', ...domains];

  return (
    <div className="chips" role="tablist">
      {all.map((domain) => (
        <button
          key={domain}
          role="tab"
          aria-selected={active === domain}
          className={active === domain ? 'chip chip--active' : 'chip'}
          onClick={() => onChange(domain)}
        >
          {domain}
        </button>
      ))}
    </div>
  );
}