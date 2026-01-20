import Link from 'next/link';
import Image from 'next/image';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg border-4 border-gray-800">
        <div className="flex flex-col items-center text-center p-6 bg-linear-to-br from-red-500 to-red-600 border-b-4 border-gray-800">
          <div className="relative bg-white/10 rounded-full p-4 mb-2 border-2 border-white/20">
            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width={100}
              height={100}
              alt={name}
              priority={false}
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          <p className="pt-2 text-lg font-bold text-white capitalize drop-shadow-md font-mono">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${id}`}
              className="border-2 border-white rounded-full py-2 px-4 text-xs font-semibold text-white hover:bg-white hover:text-red-500 transition-colors uppercase font-mono"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <div className="text-red-600">
              <IoHeartOutline className="w-5 h-5" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none font-mono">
                No es favorito
              </p>
              <p className="text-xs text-gray-500 font-mono">
                Click para cambiar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
