import { getPokemon, getPokemons } from '@/pokemons';
import { PokemonDetail } from '@/pokemons/components/PokemonDetail';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const pokemons = await getPokemons(151);
  return pokemons.map((pokemon) => ({
    name: pokemon.name,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { name } = await params;
    const pokemon = await getPokemon(name);

    return {
      title: `Pokemon #${pokemon.id} - ${pokemon.name}`,
      description: `Página del pokémon ${pokemon.name}`,
    };
  } catch {
    return {
      title: 'Pokemon Not Found',
      description: 'Pokemon not found',
    };
  }
}

export default async function PokemonPage({ params }: Props) {
  const { name } = await params;
  const pokemon = await getPokemon(name);

  return <PokemonDetail pokemon={pokemon} />;
}
