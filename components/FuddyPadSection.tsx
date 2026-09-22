'use client';

import React, { useState } from 'react';
import { FuddyLog, Spot } from '@/types';
import { BookOpenIcon, StarIcon, SparklesIcon, PlusIcon, HeartIcon, MapPinIcon, CheckCircleIcon } from './Icons';

interface FuddyPadSectionProps {
  logs: FuddyLog[];
  savedSpots: Spot[];
  onOpenAddLog: () => void;
  onOpenSpotDetail: (spot: Spot) => void;
  onRemoveLog: (logId: string) => void;
}

export const FuddyPadSection: React.FC<FuddyPadSectionProps> = ({
  logs,
  savedSpots,
  onOpenAddLog,
  onOpenSpotDetail,
  onRemoveLog,
}) => {
  const [subTab, setSubTab] = useState<'logs' | 'saved'>('logs');

  const getVerdictStyle = (verdict: FuddyLog['verdict']) => {
    switch (verdict) {
      case 'Wajib Balik!':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Lumayan Asyik':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Biasa Aja':
        return 'bg-zinc-800 text-zinc-400 border-zinc-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Paspor Header / Identity Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-amber-950/30 border border-amber-500/20 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <BookOpenIcon size={14} />
              <span>Fuddypad — Paspor Jejak Kuliner Malam</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Buku Harian & Jejak Nongkrong Kamu
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Catat impresi jujurmu di setiap kafe, tenda gultik, dan gigs malam layaknya <em>Letterboxd</em> untuk kuliner. Kumpulkan badge penjelajah malam.
            </p>
          </div>

          <button
            onClick={onOpenAddLog}
            className="self-start md:self-center px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-zinc-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
          >
            <PlusIcon size={16} />
            <span>Tulis Jejak Baru</span>
          </button>
        </div>

        {/* Gamified Badges / Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-zinc-800/80">
          <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">Total Jejak Dicatat</span>
            <span className="text-xl font-extrabold text-white">{logs.length} Spot</span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">Disimpan (Wishlist)</span>
            <span className="text-xl font-extrabold text-amber-400">{savedSpots.length} Tempat</span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">Lencana Utama</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <SparklesIcon size={12} />
              Nocturnal Seeker
            </span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-0.5">Vibe Favorit</span>
            <span className="text-xs font-bold text-violet-400">#MidnightTalk</span>
          </div>
        </div>
      </div>

      {/* Toggle Subtabs (Jejak / Disimpan) */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
        <button
          onClick={() => setSubTab('logs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            subTab === 'logs'
              ? 'bg-zinc-800 text-white border border-zinc-700 shadow-md'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Jejak Kunjungan ({logs.length})
        </button>
        <button
          onClick={() => setSubTab('saved')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            subTab === 'saved'
              ? 'bg-zinc-800 text-white border border-zinc-700 shadow-md'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Daftar Ingin Dikunjungi ({savedSpots.length})
        </button>
      </div>

      {/* Subtab Content */}
      {subTab === 'logs' ? (
        <div className="space-y-4">
          {logs.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-2xl bg-zinc-900/40 border border-dashed border-zinc-800">
              <BookOpenIcon size={32} className="mx-auto text-zinc-600 mb-2" />
              <h3 className="text-sm font-bold text-zinc-300">Belum ada jejak yang dicatat</h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-1 mb-4">
                Klik tombol "Tulis Jejak Baru" atau tombol "Catat Jejak" pada kartu spot untuk mulai mengoleksi riwayat nongkrongmu.
              </p>
              <button
                onClick={onOpenAddLog}
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-zinc-950 font-bold text-xs"
              >
                Mulai Catat
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="rounded-2xl bg-zinc-900/80 border border-zinc-800/80 p-5 hover:border-zinc-700 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getVerdictStyle(log.verdict)}`}>
                          {log.verdict}
                        </span>
                        <span className="text-[11px] text-zinc-400">{log.visitedDate}</span>
                      </div>
                      <h3 className="font-bold text-base text-zinc-100">{log.spotName}</h3>
                      <span className="text-xs text-zinc-400">{log.spotCity}</span>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded text-xs font-bold text-amber-400">
                        <StarIcon size={12} />
                        <span>{log.vibeScore} / 10</span>
                      </div>
                      <button
                        onClick={() => onRemoveLog(log.id)}
                        className="text-[10px] text-zinc-400 hover:text-rose-400 mt-2"
                        title="Hapus Catatan"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>

                  <div className="text-xs bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/60">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Menu Paling Berkesan:
                    </span>
                    <span className="text-zinc-200 font-medium">{log.favoriteItem}</span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed italic">
                    "{log.notes}"
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {log.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {savedSpots.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-2xl bg-zinc-900/40 border border-dashed border-zinc-800">
              <HeartIcon size={32} className="mx-auto text-zinc-600 mb-2" />
              <h3 className="text-sm font-bold text-zinc-300">Belum ada spot yang disimpan</h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-1">
                Jelajahi radar kafe dan pasar malam, lalu klik ikon hati untuk memasukkannya ke daftar impian nongkrongmu.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {savedSpots.map((spot) => (
                <div
                  key={spot.id}
                  onClick={() => onOpenSpotDetail(spot)}
                  className="group rounded-xl bg-zinc-900/80 border border-zinc-800 p-3.5 hover:border-zinc-700 cursor-pointer transition-all flex gap-3 items-center"
                >
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="overflow-hidden flex-1">
                    <h4 className="text-xs font-bold text-white group-hover:text-amber-300 truncate">
                      {spot.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400 truncate">{spot.area}</p>
                    <div className="flex items-center gap-1 mt-1 text-[10px] text-amber-400 font-semibold">
                      <StarIcon size={10} />
                      <span>{spot.rating}</span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-400">{spot.categoryLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
