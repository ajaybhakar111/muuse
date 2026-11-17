import { useApp } from '../context/AppContext.jsx';
import useFilteredContent from '../hooks/useFilteredContent.js';
import { bites } from '../data/bites.js';
import { BITE_DOMAINS } from '../data/domains.js';
import DomainChips from '../components/common/DomainChips.jsx';
import RandomButton from '../components/common/RandomButton.jsx';
import BiteFeed from '../components/bites/BiteFeed.jsx';

export default function Bites() {
  const { biteDomain, setBiteDomain, favDomains } = useApp();
  const filtered = useFilteredContent(bites, biteDomain, favDomains);

  return (
    <div className="bites-page">
      <DomainChips
        domains={BITE_DOMAINS}
        active={biteDomain}
        onChange={setBiteDomain}
      />
      <BiteFeed key={biteDomain} bites={filtered} />
      <RandomButton ids={filtered.map((b) => b.id)} label="Surprise me" />
    </div>
  );
}