'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { useEffect } from 'react';
import { setFavoritePokemons } from '@/store/pokemons/pokemons';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const favoritePokemons = JSON.parse(
      localStorage.getItem('favorite-pokemons') ?? '{}',
    );
    store.dispatch(setFavoritePokemons(favoritePokemons));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
