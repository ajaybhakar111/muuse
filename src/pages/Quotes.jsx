import { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import useFilteredContent from '../hooks/useFilteredContent.js';
import { quotes } from '../data/quotes.js';
import { QUOTE_DOMAINS } from '../data/domains.js';
import DomainChips from '../components/common/DomainChips.jsx';
import RandomButton from '../components/common/RandomButton.jsx';
import QuoteFeed from '../components/quotes/QuoteFeed.jsx';
import AuthorSheet from '../components/author/AuthorSheet.jsx';

export default function Quotes() {
  const { quoteDomain, setQuoteDomain, favDomains } = useApp();
  const filtered = useFilteredContent(quotes, quoteDomain, favDomains);
  const [openAuthor, setOpenAuthor] = useState(null);

  return (
    <div className="quotes-page">
      <DomainChips
        domains={QUOTE_DOMAINS}
        active={quoteDomain}
        onChange={setQuoteDomain}
      />

      <QuoteFeed
        key={quoteDomain}
        quotes={filtered}
        onAuthorClick={setOpenAuthor}
      />

      <RandomButton ids={filtered.map((q) => q.id)} />

      {openAuthor && (
        <AuthorSheet authorId={openAuthor} onClose={() => setOpenAuthor(null)} />
      )}
    </div>
  );
}