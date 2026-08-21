import { useEffect, useState } from 'react';
import App from './App';
import SeguidoresPanel from './pages/SeguidoresPanel';

// Enrutamiento simple por hash: funciona en cualquier hosting estático
// (incluido GitHub Pages) porque el fragmento nunca llega al servidor.
type Route = 'home' | 'seguidores';

function resolveRoute(): Route {
  return window.location.hash.startsWith('#/seguidores') ? 'seguidores' : 'home';
}

export default function AppRouter() {
  const [route, setRoute] = useState<Route>(resolveRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(resolveRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route === 'seguidores' ? <SeguidoresPanel /> : <App />;
}
