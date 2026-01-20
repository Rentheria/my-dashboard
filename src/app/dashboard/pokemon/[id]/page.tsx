import { Pokemon } from '@/pokemons';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
  })
    .then((res) => res.json())
    .catch((error) => {
      notFound();
    });
  return pokemon;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;
    const pokemon = await getPokemon(id);

    return {
      title: `Pokemon #${id} - ${pokemon.name}`,
      description: `Página del pokémon ${pokemon.name}`,
    };
  } catch (error) {
    return {
      title: 'Pokemon Not Found',
      description: 'Pokemon not found',
    };
  }
}

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  const pokemon = await getPokemon(id);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-300 font-mono pb-10">
      {/* Hero Section */}
      <div className="relative w-full h-75 md:h-100 bg-linear-to-b from-slate-800 to-slate-900 overflow-hidden border-b-4 border-yellow-500/50">
        <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png')] opacity-5 bg-repeat space-x-4"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-900 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-200 to-yellow-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] uppercase tracking-widest pixelated-text">
            #{pokemon.id} {pokemon.name}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Card - Image */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-black/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg
                  className="w-32 h-32 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
                </svg>
              </div>

              <div className="relative z-10 flex justify-center py-6">
                <Image
                  src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                  width={250}
                  height={250}
                  alt={`Imagen del pokemon ${pokemon.name}`}
                  className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  priority
                />
              </div>

              <div className="flex justify-center gap-4 mt-6">
                {pokemon.types.map((type) => (
                  <span
                    key={type.slot}
                    className="px-6 py-2 rounded-lg bg-slate-700/50 border border-white/10 text-white font-bold uppercase tracking-wider hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all cursor-default"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Sprites Gallery */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-slate-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Visual Registry
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  pokemon.sprites.front_default,
                  pokemon.sprites.back_default,
                  pokemon.sprites.front_shiny,
                  pokemon.sprites.back_shiny,
                ]
                  .filter(Boolean)
                  .map((sprite, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/50 rounded-xl p-2 border border-white/5 hover:border-yellow-500/30 transition-colors flex justify-center items-center"
                    >
                      <Image
                        src={sprite!}
                        width={80}
                        height={80}
                        alt="sprite"
                        className="pixelated"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Stats & Info */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {/* Base Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:bg-slate-800/80 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 uppercase text-xs tracking-wider">
                    Height
                  </span>
                  <span className="text-yellow-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-3xl font-black text-white">
                  {pokemon.height * 10}{' '}
                  <span className="text-lg font-normal text-slate-500">cm</span>
                </p>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:bg-slate-800/80 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 uppercase text-xs tracking-wider">
                    Weight
                  </span>
                  <span className="text-yellow-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-3xl font-black text-white">
                  {pokemon.weight / 10}{' '}
                  <span className="text-lg font-normal text-slate-500">kg</span>
                </p>
              </div>
            </div>

            {/* Abilities/Moves Block */}
            <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-8 border border-white/5 grow">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                Combat Capabilities
              </h3>

              <div className="mb-8">
                <h4 className="text-sm text-slate-500 uppercase tracking-widest mb-4 font-bold">
                  Abilities
                </h4>
                <div className="flex flex-wrap gap-3">
                  {pokemon.abilities.map((a) => (
                    <span
                      key={a.slot}
                      className="px-4 py-2 bg-slate-900 rounded-lg text-slate-300 border border-slate-700 capitalize flex items-center gap-2"
                    >
                      {a.is_hidden && (
                        <span
                          className="w-2 h-2 rounded-full bg-red-500"
                          title="Hidden Ability"
                        ></span>
                      )}
                      {a.ability?.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm text-slate-500 uppercase tracking-widest mb-4 font-bold">
                  Move Set{' '}
                  <span className="text-xs font-normal opacity-50">
                    (First 20)
                  </span>
                </h4>
                <div className="flex flex-wrap gap-2 max-h-75 overflow-y-auto custom-scrollbar pr-2">
                  {pokemon.moves.slice(0, 20).map((move) => (
                    <span
                      key={move.move.name}
                      className="px-3 py-1 bg-slate-700/30 rounded text-sm text-slate-400 hover:text-white hover:bg-slate-700 transition-colors capitalize cursor-help border border-transparent hover:border-slate-600"
                    >
                      {move.move.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
