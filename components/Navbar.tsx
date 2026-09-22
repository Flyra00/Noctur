'use client';

import React from 'react';
import { MoonIcon, MapPinIcon, SearchIcon, SparklesIcon, CompassIcon, BookOpenIcon, UtensilsIcon, CoffeeIcon, MusicIcon, UsersIcon } from './Icons';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCity,
  setSelectedCity,
  searchQuery,
  setSearchQuery,
  savedCount,
}) => {
  const tabs = [
    { id: 'all', label: 'Semua Radar', icon: CompassIcon },
    { id: 'cafe', label: 'Nongkrong Pedia', icon: CoffeeIcon, subtitle: 'Kafe & Event' },
    { id: 'streetfood', label: 'JajanTrip', icon: UtensilsIcon, subtitle: 'Pasar Malam' },
    { id: 'events', label: 'Fesgo Stage', icon: MusicIcon, subtitle: 'Gigs & Musik' },
    { id: 'nightvibe', label: 'NightVibe', icon: UsersIcon, subtitle: '24 Jam & Komunitas' },
    { id: 'fuddypad', label: 'Fuddypad', icon: BookOpenIcon, subtitle: 'Jejak Paspor' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav border-b border-zinc-800/80">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div 
            onClick={() => setActiveTab('all')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-500 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
              <div className="w-full h-full bg-[#0d0f17] rounded-[10px] flex items-center justify-center">
                <MoonIcon className="text-amber-400 fill-amber-400/20 transition-transform group-hover:rotate-12" size={20} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black tracking-wider text-xl bg-gradient-to-r from-amber-300 via-rose-300 to-cyan-300 bg-clip-text text-transparent">
                  NOCTUR
                </span>
                <span className="text-[10px] font-semibold tracking-widest px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 uppercase">
                  Beta
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">Youth After-Dark & Food Guide</p>
            </div>
          </div>

          {/* Mobile City Selector */}
          <div className="md:hidden">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              aria-label="Pilih Kota"
              className="bg-zinc-900 text-xs border border-zinc-700 text-zinc-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500"
            >
              <option value="Semua">Semua Kota</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Yogyakarta">Yogyakarta</option>
            </select>
          </div>
        </div>

        {/* Search Bar & City Selector (Desktop) */}
        <div className="flex items-center gap-3 w-full md:w-auto md:max-w-xl flex-1 justify-end">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kafe, gultik, gigs musik, spot 24 jam..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/90 border border-zinc-800 rounded-full text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/30 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Desktop City Selector */}
          <div className="hidden md:flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 rounded-full px-3 py-1.5">
            <MapPinIcon size={14} className="text-amber-400" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              aria-label="Pilih Kota"
              className="bg-transparent text-xs text-zinc-200 focus:outline-none cursor-pointer pr-1"
            >
              <option value="Semua" className="bg-zinc-900">Semua Kota</option>
              <option value="Jakarta" className="bg-zinc-900">Jakarta</option>
              <option value="Bandung" className="bg-zinc-900">Bandung</option>
              <option value="Yogyakarta" className="bg-zinc-900">Yogyakarta</option>
            </select>
          </div>

          {/* Saved counter button */}
          <button
            onClick={() => setActiveTab('fuddypad')}
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-500/30 hover:border-amber-500/60 px-3 py-1.5 rounded-full text-xs font-medium text-amber-300 transition-colors"
          >
            <SparklesIcon size={13} className="text-amber-400" />
            <span>Paspor Jejak</span>
            {savedCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] rounded-full bg-amber-400 text-zinc-950 font-bold">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 overflow-x-auto no-scrollbar">
        <nav className="flex items-center gap-2 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-md border border-zinc-700 glow-amber'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-transparent'
                }`}
              >
                <Icon
                  size={15}
                  className={isActive ? 'text-amber-400' : 'text-zinc-400'}
                />
                <span>{tab.label}</span>
                {tab.subtitle && (
                  <span className={`text-[10px] ${isActive ? 'text-amber-300/80' : 'text-zinc-400'}`}>
                    • {tab.subtitle}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
