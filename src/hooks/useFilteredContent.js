import { useMemo } from 'react';

// domain === 'All'  -> everything, with the user's favourite domains first
// otherwise         -> only items of that domain
export default function useFilteredContent(items, domain, favDomains = []) {
  return useMemo(() => {
    if (domain && domain !== 'All') {
      return items.filter((item) => item.domain === domain);
    }
    if (favDomains.length === 0) return items;

    const favs = items.filter((item) => favDomains.includes(item.domain));
    const rest = items.filter((item) => !favDomains.includes(item.domain));
    return [...favs, ...rest];
  }, [items, domain, favDomains]);
}