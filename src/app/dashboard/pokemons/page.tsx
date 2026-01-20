import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

const getPokemons = async (
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

export default async function PokemonPage() {
  const pokemons: SimplePokemon[] = await getPokemons(151);
  return (
    <div className="flex flex-col gap-8 p-4 bg-gray-400 min-h-screen">
      <div className="flex flex-col items-center justify-center py-6 md:py-10 bg-linear-to-r from-red-600 to-red-800 rounded-3xl shadow-xl border-4 border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png')] bg-repeat space-x-4"></div>
        <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] font-mono z-10 tracking-wider uppercase text-center px-4">
          Pokedex <span className="text-yellow-400 block md:inline">Kanto</span>
        </h2>
        <span className="text-white/80 font-mono mt-2 z-10 font-bold bg-black/30 px-4 py-1 rounded-full border border-white/20 text-sm md:text-base text-center mx-4">
          Listado de Pokemons estáticos
        </span>
      </div>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
