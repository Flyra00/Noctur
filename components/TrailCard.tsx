'use client';

import React, { useState } from 'react';
import { FoodTrail } from '@/types';
import { ClockIcon, MapPinIcon, CompassIcon, ArrowRightIcon, SparklesIcon } from './Icons';

interface TrailCardProps {
  trail: FoodTrail;
}

export const TrailCard: React.FC<TrailCardProps> = ({ trail }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 p-5 sm:p-6 transition-all duration-300">
      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-300 border border-rose-500/30">
              JAJANTRIP CURATED TRAIL
            </span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <MapPinIcon size={12} className="text-amber-400" />
              {trail.area}, {trail.city}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white">
            {trail.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {trail.subtitle}
          </p>
        </div>

        {/* Trail Stats pill */}
        <div className="flex items-center gap-3 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80 self-start lg:self-center">
          <div className="text-left px-2">
            <span className="text-[10px] text-zinc-400 block">Estimasi Waktu</span>
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
              <ClockIcon size={12} />
              {trail.duration}
            </span>
          </div>
          <div className="h-6 w-px bg-zinc-800" />
          <div className="text-left px-2">
            <span className="text-[10px] text-zinc-400 block">Estimasi Biaya</span>
            <span className="text-xs font-bold text-emerald-400">
              {trail.budgetEstimate}
            </span>
          </div>
        </div>
      </div>

      {/* Stops Timeline */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <CompassIcon size={14} className="text-amber-400" />
            Rute Perjalanan ({trail.stops.length} Titik Singgah):
          </span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
          >
            {expanded ? 'Tutup Rincian' : 'Buka Semua Rincian'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {trail.stops.map((stop, index) => (
            <div
              key={index}
              className="relative p-3.5 rounded-xl bg-zinc-950/50 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-black flex items-center justify-center">
                  {stop.order}
                </span>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wide">
                  {stop.category}
                </span>
              </div>

              <h3 className="font-bold text-sm text-zinc-100 mb-1">
                {stop.name}
              </h3>

              <div className="text-xs text-zinc-400 mb-1.5">
                <span className="text-zinc-500">Wajib Coba: </span>
                <span className="text-zinc-200 font-medium">{stop.mustTry}</span>
              </div>

              {(expanded || index === 0) && (
                <div className="mt-2 pt-2 border-t border-zinc-900 text-[11px] text-amber-300/80 italic">
                  💡 Tips: {stop.tip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
