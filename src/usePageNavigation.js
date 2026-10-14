import { useEffect, useState } from 'react';

const routes = new Set(['/', '/about', '/contact']);
export function internalDestination(anchor, event, currentHref) {
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  if (anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self') || anchor.relList.contains('external')) return null;
  const current = new URL(currentHref);
  const destination = new URL(anchor.href, current);
  if (destination.origin !== current.origin || !routes.has(destination.pathname.replace(/\/$/, '') || '/')) return null;
  return destination;
}

export function usePageNavigation(initialPath) {
  const [location, setLocation] = useState(() => ({ pathname: initialPath, hash: typeof window === 'undefined' ? '' : window.location.hash, revision: 0 }));
  useEffect(() => {
    const sync = () => setLocation(previous => ({ pathname: window.location.pathname, hash: window.location.hash, revision: previous.revision + 1 }));
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  function navigate(event) {
    const anchor = event.target.closest?.('a[href]');
    const destination = internalDestination(anchor, event, window.location.href);
    if (!destination) return;
    event.preventDefault();
    if (destination.href !== window.location.href) window.history.pushState(null, '', destination.href);
    setLocation(previous => ({ pathname: destination.pathname, hash: destination.hash, revision: previous.revision + 1 }));
  }
  return { location, navigate };
}
