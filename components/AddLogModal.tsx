'use client';

import React, { useState } from 'react';
import { Spot, FuddyLog } from '@/types';
import { StarIcon, SparklesIcon, BookOpenIcon } from './Icons';

interface AddLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetSpot?: Spot | null;
  allSpots: Spot[];
  onSaveLog: (newLog: FuddyLog) => void;
}

export const AddLogModal: React.FC<AddLogModalProps> = ({
  isOpen,
  onClose,
  presetSpot,
  allSpots,
  onSaveLog,
}) => {
  const [selectedSpotId, setSelectedSpotId] = useState<string>(presetSpot?.id || allSpots[0]?.id || '');
  const [verdict, setVerdict] = useState<FuddyLog['verdict']>('Wajib Balik!');
  const [vibeScore, setVibeScore] = useState<number>(9.0);
  const [favoriteItem, setFavoriteItem] = useState<string>(presetSpot?.highlightMenu[0] || '');
  const [notes, setNotes] = useState<string>('');
  const [customSpotName, setCustomSpotName] = useState<string>('');

  if (!isOpen) return null;

  const currentSpot = allSpots.find((s) => s.id === selectedSpotId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const spotName = currentSpot ? currentSpot.name : (customSpotName || 'Spot Eksplorasi Malam');
    const spotCity = currentSpot ? currentSpot.city : 'Jakarta';

    const newLog: FuddyLog = {
      id: `log-${Date.now()}`,
      spotId: selectedSpotId || `custom-${Date.now()}`,
      spotName,
      spotCity,
      visitedDate: 'Baru saja',
      verdict,
      vibeScore,
      favoriteItem: favoriteItem || 'Menu Andalan',
      notes: notes || 'Suasana malamnya asyik dan menenangkan.',
      tags: ['#NocturTrail', '#GenZPick', currentSpot?.vibe[0] ? `#${currentSpot.vibe[0]}` : '#MalamHari'],
    };

    onSaveLog(newLog);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#12141e] border border-zinc-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <BookOpenIcon size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Catat Jejak di Fuddypad</h3>
              <p className="text-[11px] text-zinc-400">Jurnal personal penjelajahan rasa & suasana</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center text-xs font-bold"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Spot Selector */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Pilih Tempat yang Dikunjungi
            </label>
            <select
              value={selectedSpotId}
              onChange={(e) => {
                setSelectedSpotId(e.target.value);
                const s = allSpots.find((spot) => spot.id === e.target.value);
                if (s && s.highlightMenu.length > 0) {
                  setFavoriteItem(s.highlightMenu[0]);
                }
              }}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
            >
              {allSpots.map((spot) => (
                <option key={spot.id} value={spot.id} className="bg-zinc-900">
                  {spot.name} ({spot.area}, {spot.city})
                </option>
              ))}
            </select>
          </div>

          {/* Verdict Buttons (Letterboxd/Beli style) */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Impresi & Verdict Kamu
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Wajib Balik!', 'Lumayan Asyik', 'Biasa Aja'] as const).map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setVerdict(opt)}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                    verdict === opt
                      ? opt === 'Wajib Balik!'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
                        : opt === 'Lumayan Asyik'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                        : 'bg-zinc-700 text-zinc-200 border-zinc-500'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Vibe Score Slider */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-zinc-300">
                Skor Vibe & Suasana
              </label>
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                {vibeScore.toFixed(1)} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={vibeScore}
              onChange={(e) => setVibeScore(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          {/* Favorite Item */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Menu / Minuman Paling Berkesan
            </label>
            <input
              type="text"
              value={favoriteItem}
              onChange={(e) => setFavoriteItem(e.target.value)}
              placeholder="Contoh: Es Kopi Susu Aren Heritage / Gultik Daging Campur"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          {/* Personal Review Notes */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Catatan & Cerita Singkat Malam Itu
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Bagikan impresi: musiknya gimana, pelayanannya, obrolannya sampai jam berapa..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500 resize-none"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-md shadow-amber-500/20"
            >
              Simpan ke Paspor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
