import { notFound } from 'next/navigation';
import { Pokemon } from '../interfaces/pokemon';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonsResponse } from '../interfaces/pokemon-response';

export const getPokemon = async (param: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`, {
    next: {
      revalidate: 60 * 60 * 30 * 6,
    },
  })
    .then((res) => res.json())
    .catch(() => {
      notFound();
    });
  return pokemon;
};

export const getPokemons = async (
  limit: number = 20,
  offset: number = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

  const pokemon = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
    image: pokemon.url,
  }));

  return pokemon;
};
