'use client';

import React from 'react';
import { Spot } from '@/types';
import { StarIcon, ClockIcon, MapPinIcon, HeartIcon, PlusIcon, CheckCircleIcon, SparklesIcon } from './Icons';

interface SpotDetailModalProps {
  spot: Spot | null;
  onClose: () => void;
  onQuickLog: (spot: Spot) => void;
  isSaved?: boolean;
  onToggleSave?: (spotId: string) => void;
  isLogged?: boolean;
}

export const SpotDetailModal: React.FC<SpotDetailModalProps> = ({
  spot,
  onClose,
  onQuickLog,
  isSaved = false,
  onToggleSave,
  isLogged = false,
}) => {
  if (!spot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#11131c] border border-zinc-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-zinc-900/80 border border-white/20 text-zinc-300 hover:text-white flex items-center justify-center text-sm font-bold transition-colors"
        >
          ✕
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-zinc-900 overflow-hidden">
          <img
            src={spot.image}
            alt={spot.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-[#11131c]/40 to-transparent" />

          {/* Floating Category Pill */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-zinc-950">
              {spot.categoryLabel}
            </span>
            {spot.is24Hours && (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-zinc-950">
                24 Jam Nonstop
              </span>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Title & Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {spot.name}
              </h2>
              <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                <MapPinIcon size={14} className="text-amber-400" />
                <span>{spot.area}, {spot.city}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm">
                <StarIcon size={14} />
                <span>{spot.rating}</span>
                <span className="text-zinc-500 font-normal">({spot.reviewsCount} review)</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 leading-relaxed">
            {spot.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">Jam Operasional</span>
              <span className="text-xs font-semibold text-zinc-200 flex items-center gap-1">
                <ClockIcon size={12} className="text-amber-400" />
                {spot.hours}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">Kisaran Harga</span>
              <span className="text-xs font-semibold text-emerald-400">
                {spot.priceRange} ({spot.averageCost})
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">Waktu Ramai (Peak)</span>
              <span className="text-xs font-semibold text-rose-400">
                {spot.crowdPeak}
              </span>
            </div>
          </div>

          {/* Highlight Menu */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
              <SparklesIcon size={14} className="text-amber-400" />
              Menu & Pesanan Andalan Malam
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {spot.highlightMenu.map((menu, i) => (
                <div key={i} className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 font-medium">
                  ✨ {menu}
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Fasilitas & Karakteristik
            </h4>
            <div className="flex flex-wrap gap-2">
              {spot.facilities.map((fac, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-zinc-850 bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-300">
                  ✓ {fac}
                </span>
              ))}
            </div>
          </div>

          {/* Full Address */}
          <div className="p-3.5 rounded-xl bg-zinc-950/50 border border-zinc-800 text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300 block mb-1">Alamat Lengkap:</span>
            {spot.address}
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
            <button
              onClick={() => onToggleSave?.(spot.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                isSaved
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-zinc-800 text-zinc-300 hover:text-white border-zinc-700'
              }`}
            >
              <HeartIcon size={14} fill={isSaved ? 'currentColor' : 'none'} />
              <span>{isSaved ? 'Tersimpan di Wishlist' : 'Simpan Spot'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onQuickLog(spot);
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-zinc-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <PlusIcon size={16} />
              <span>{isLogged ? 'Perbarui Log Jejak' : 'Catat Kunjungan di Fuddypad'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
