'use client';

import { PokemonGrid } from './PokemonGrid';
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemon = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites),
  );

  return (
    <>
      {favoritePokemons.length === 0 ? (
        <NoFavoritePokemon />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </>
  );
};

export const NoFavoritePokemon = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span className="text-2xl text-slate-400 font-bold my-2">
        No hay favoritos
      </span>
    </div>
  );
};
