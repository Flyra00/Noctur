'use client';

import React from 'react';
import { FlameIcon, SparklesIcon, MoonIcon } from './Icons';

interface HeroBannerProps {
  selectedVibe: string;
  setSelectedVibe: (vibe: string) => void;
  vibesList: string[];
  totalSpotsCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  selectedVibe,
  setSelectedVibe,
  vibesList,
  totalSpotsCount,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 via-[#0e111a] to-[#090a10] p-6 sm:p-10 mb-10 shadow-2xl">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {/* Status indicator badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-emerald-400">Night Radar Live</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">{totalSpotsCount} Spot Nongkrong, Gigs & Pasar Malam Aktif</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Panduan Kuliner Malam,{' '}
          <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 bg-clip-text text-transparent">
            Gigs Musik & Komunitas
          </span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-400 mb-6 leading-relaxed">
          Temukan kafe ber-vibe obrolan larut malam, pasar malam legendaris, jadwal panggung musik indie, dan catat jejak jajanmu dalam satu paspor digital.
        </p>

        {/* Vibe Tag Cloud */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 tracking-wider uppercase">
            <FlameIcon size={14} className="text-amber-400" />
            <span>Filter Berdasarkan Mood & Vibe:</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => setSelectedVibe('Semua')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedVibe === 'Semua'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-md shadow-amber-500/30'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700/80 border border-zinc-700/60'
              }`}
            >
              Semua Mood
            </button>
            {vibesList.map((vibe) => (
              <button
                key={vibe}
                onClick={() => setSelectedVibe(vibe)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedVibe === vibe
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-zinc-950 font-bold shadow-md shadow-amber-500/30'
                    : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700/80 border border-zinc-700/60'
                }`}
              >
                #{vibe}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
