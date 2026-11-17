import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const AppContext = createContext(null);

const toggleInList = (list, id) =>
  list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

export function AppProvider({ children }) {
  // ids look like "q-1" for quotes and "b-1" for bites
  const [likes, setLikes] = useLocalStorage('muuse-likes', []);
  const [bookmarks, setBookmarks] = useLocalStorage('muuse-bookmarks', []);
  const [favDomains, setFavDomains] = useLocalStorage('muuse-fav-domains', []);
  const [quoteDomain, setQuoteDomain] = useLocalStorage('muuse-quote-domain', 'All');
  const [biteDomain, setBiteDomain] = useLocalStorage('muuse-bite-domain', 'All');

  const value = {
    likes,
    bookmarks,
    favDomains,
    quoteDomain,
    biteDomain,
    setFavDomains,
    setQuoteDomain,
    setBiteDomain,
    toggleLike: (id) => setLikes((prev) => toggleInList(prev, id)),
    toggleBookmark: (id) => setBookmarks((prev) => toggleInList(prev, id)),
    isLiked: (id) => likes.includes(id),
    isBookmarked: (id) => bookmarks.includes(id),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}