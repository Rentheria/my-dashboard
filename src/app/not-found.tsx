import { Sidebar } from '@/components';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 font-mono overflow-hidden">
      <div className="flex">
        <Sidebar />

        <div className="w-full flex flex-col justify-center items-center min-h-screen relative p-4">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png')] opacity-5 bg-repeat space-x-4 pointer-events-none"></div>
          <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl bottom-0 left-20"></div>

          {/* Main Card */}
          <div className="relative z-10 bg-slate-800/80 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl shadow-black/50 text-center max-w-2xl w-full mx-4 transform transition-all hover:scale-[1.01] duration-500">
            {/* 404 Header */}
            <div className="relative mb-8">
              <h1 className="text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-200 to-yellow-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-tighter">
                404
              </h1>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 tracking-wide uppercase">
              Horizon Unreached
            </h2>

            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              The path you are looking for has faded into the mist. It seems
              this resource has not yet been discovered or has moved to a new
              realm.
            </p>

            <div className="flex justify-center">
              <Link
                href="/dashboard/main"
                className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full shadow-lg shadow-yellow-900/20 transition-all duration-300 ease-out hover:shadow-yellow-500/40"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-br from-yellow-400 to-yellow-600 opacity-100 group-hover:opacity-90 transition-opacity"></span>
                <span className="relative flex items-center justify-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-sm">
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Return to Sanctuary
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
