'use client';

import React from 'react';
import { Spot } from '@/types';
import { StarIcon, ClockIcon, MapPinIcon, HeartIcon, PlusIcon, SparklesIcon, CheckCircleIcon } from './Icons';

interface SpotCardProps {
  spot: Spot;
  onOpenDetail: (spot: Spot) => void;
  onQuickLog: (spot: Spot) => void;
  isSaved?: boolean;
  onToggleSave?: (spotId: string) => void;
  isLogged?: boolean;
}

export const SpotCard: React.FC<SpotCardProps> = ({
  spot,
  onOpenDetail,
  onQuickLog,
  isSaved = false,
  onToggleSave,
  isLogged = false,
}) => {
  const getCategoryBadgeClass = (category: Spot['category']) => {
    switch (category) {
      case 'cafe':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'streetfood':
        return 'bg-rose-500/10 text-rose-300 border-rose-500/30';
      case 'midnight':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'community':
        return 'bg-violet-500/10 text-violet-300 border-violet-500/30';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 overflow-hidden">
      {/* Image & Overlay Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-800">
        <img
          src={spot.image}
          alt={spot.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide border backdrop-blur-md ${getCategoryBadgeClass(spot.category)}`}>
            {spot.categoryLabel}
          </span>

          <div className="flex items-center gap-1.5 pointer-events-auto">
            {spot.is24Hours && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/90 text-zinc-950">
                24 JAM
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave?.(spot.id);
              }}
              className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                isSaved
                  ? 'bg-rose-500 text-white border-rose-400'
                  : 'bg-zinc-900/70 text-zinc-300 hover:text-white border-white/10 hover:bg-zinc-900'
              }`}
              title={isSaved ? 'Hapus Simpanan' : 'Simpan Spot'}
            >
              <HeartIcon size={14} fill={isSaved ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>

        {/* Bottom Image Info: Price & Peak Hour */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
          <span className="font-semibold text-amber-300 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
            {spot.priceRange} • {spot.averageCost}
          </span>
          <span className="text-[11px] text-zinc-400 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800 flex items-center gap-1">
            <ClockIcon size={12} className="text-amber-400" />
            Ramai: {spot.crowdPeak}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h2
            onClick={() => onOpenDetail(spot)}
            className="font-bold text-base text-zinc-100 group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
          >
            {spot.name}
          </h2>
          <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded text-xs font-bold text-amber-400 flex-shrink-0">
            <StarIcon size={12} />
            <span>{spot.rating}</span>
          </div>
        </div>

        {/* Location & Operating Hours */}
        <div className="flex flex-col gap-1 text-xs text-zinc-400 mb-3">
          <div className="flex items-center gap-1.5">
            <MapPinIcon size={13} className="text-zinc-500 flex-shrink-0" />
            <span className="truncate">{spot.area}</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <ClockIcon size={13} className="text-zinc-500 flex-shrink-0" />
            <span>{spot.hours}</span>
          </div>
        </div>

        {/* Vibe Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {spot.vibe.slice(0, 2).map((v, i) => (
            <span
              key={i}
              className="text-[10px] font-medium text-zinc-400 bg-zinc-800/80 border border-zinc-700/50 px-2 py-0.5 rounded"
            >
              #{v}
            </span>
          ))}
        </div>

        {/* Highlight Menu */}
        <div className="text-xs text-zinc-400 mb-4 bg-zinc-950/40 p-2.5 rounded-xl border border-zinc-800/50">
          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
            Menu Andalan Malam:
          </span>
          <p className="text-zinc-300 text-xs font-medium line-clamp-1">
            {spot.highlightMenu.join(' • ')}
          </p>
        </div>

        {/* Card Actions */}
        <div className="mt-auto pt-3 border-t border-zinc-800/80 flex items-center gap-2">
          <button
            onClick={() => onOpenDetail(spot)}
            className="flex-1 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors text-center"
          >
            Lihat Detail
          </button>

          <button
            onClick={() => onQuickLog(spot)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isLogged
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}
            title="Catat Jejak Kunjungan di Fuddypad"
          >
            {isLogged ? (
              <>
                <CheckCircleIcon size={14} className="text-emerald-400" />
                <span>Sudah di-Log</span>
              </>
            ) : (
              <>
                <PlusIcon size={14} />
                <span>Catat Jejak</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
