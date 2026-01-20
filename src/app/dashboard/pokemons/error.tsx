'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400 text-white font-mono gap-6">
      <div className="text-9xl text-red-500 font-black tracking-widest animate-pulse">
        500
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <h2 className="text-3xl font-bold uppercase text-yellow-500">
          ¡Un Pokemon salvaje ha escapado!
        </h2>
        <p className="text-gray-400 text-lg">
          Algo salió mal en el laboratorio del Profesor Oak.
        </p>
      </div>

      <button
        onClick={() => reset()}
        className="px-6 py-3 border-4 border-white bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider transition-all transform hover:scale-110 active:scale-95 shadow-lg shadow-red-900/50 rounded-xl"
      >
        Intentar capturar de nuevo
      </button>
    </div>
  );
}
