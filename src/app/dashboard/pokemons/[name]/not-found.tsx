import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white font-mono gap-6">
      <h1 className="text-9xl text-red-500 font-black tracking-widest animate-pulse">
        404
      </h1>
      <div className="flex flex-col items-center text-center space-y-2">
        <h2 className="text-3xl font-bold uppercase text-yellow-500">
          Pokemon Escaped!
        </h2>
        <p className="text-slate-300 text-lg">
          The Pokemon you are looking for has fled the tall grass. It seems it
          doesn&apos;t exist in our Pokedex yet.
        </p>
      </div>

      <Link
        href="/dashboard/pokemons"
        className="px-6 py-3 border-4 border-white bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider transition-all transform hover:scale-110 active:scale-95 shadow-lg shadow-red-900/50 rounded-xl"
      >
        Return to Pokemon List
      </Link>
    </div>
  );
}
