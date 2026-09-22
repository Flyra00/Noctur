'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { MOCK_SPOTS, MOCK_EVENTS, MOCK_TRAILS, INITIAL_USER_LOGS } from '@/data/mockData';
import { Spot, FuddyLog } from '@/types';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { SpotCard } from '@/components/SpotCard';
import { TrailCard } from '@/components/TrailCard';
import { EventCard } from '@/components/EventCard';
import { FuddyPadSection } from '@/components/FuddyPadSection';
import { SpotDetailModal } from '@/components/SpotDetailModal';
import { AddLogModal } from '@/components/AddLogModal';
import { 
  CoffeeIcon, 
  UtensilsIcon, 
  MusicIcon, 
  UsersIcon, 
  BookOpenIcon, 
  CompassIcon, 
  SparklesIcon, 
  MapPinIcon,
  ArrowRightIcon 
} from '@/components/Icons';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('Semua');
  const [selectedVibe, setSelectedVibe] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // User persistent state (saved bookmarks & fuddy logs)
  const [savedSpotIds, setSavedSpotIds] = useState<string[]>([]);
  const [userLogs, setUserLogs] = useState<FuddyLog[]>(INITIAL_USER_LOGS);

  // Modals state
  const [detailSpot, setDetailSpot] = useState<Spot | null>(null);
  const [isAddLogOpen, setIsAddLogOpen] = useState<boolean>(false);
  const [logPresetSpot, setLogPresetSpot] = useState<Spot | null>(null);

  // Load saved spots & logs from localStorage on client mount
  useEffect(() => {
    try {
      const storedSaved = localStorage.getItem('noctur_saved_spots');
      if (storedSaved) {
        setSavedSpotIds(JSON.parse(storedSaved));
      }
      const storedLogs = localStorage.getItem('noctur_fuddy_logs');
      if (storedLogs) {
        setUserLogs(JSON.parse(storedLogs));
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, []);

  const toggleSaveSpot = (spotId: string) => {
    setSavedSpotIds((prev) => {
      const updated = prev.includes(spotId) ? prev.filter((id) => id !== spotId) : [...prev, spotId];
      try {
        localStorage.setItem('noctur_saved_spots', JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
      return updated;
    });
  };

  const handleSaveLog = (newLog: FuddyLog) => {
    setUserLogs((prev) => {
      const updated = [newLog, ...prev];
      try {
        localStorage.setItem('noctur_fuddy_logs', JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
      return updated;
    });
  };

  const handleRemoveLog = (logId: string) => {
    setUserLogs((prev) => {
      const updated = prev.filter((l) => l.id !== logId);
      try {
        localStorage.setItem('noctur_fuddy_logs', JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
      return updated;
    });
  };

  const openLogModalForSpot = (spot: Spot) => {
    setLogPresetSpot(spot);
    setIsAddLogOpen(true);
  };

  // Distinct list of vibes across mock data
  const vibesList = useMemo(() => {
    const set = new Set<string>();
    MOCK_SPOTS.forEach((s) => s.vibe.forEach((v) => set.add(v)));
    return Array.from(set);
  }, []);

  // Filtered spots
  const filteredSpots = useMemo(() => {
    return MOCK_SPOTS.filter((spot) => {
      // Tab Category filter
      if (activeTab === 'cafe' && spot.category !== 'cafe') return false;
      if (activeTab === 'streetfood' && spot.category !== 'streetfood') return false;
      if (activeTab === 'nightvibe' && spot.category !== 'midnight' && spot.category !== 'community') return false;

      // City filter
      if (selectedCity !== 'Semua' && spot.city !== selectedCity) return false;

      // Vibe filter
      if (selectedVibe !== 'Semua' && !spot.vibe.includes(selectedVibe)) return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = spot.name.toLowerCase().includes(query);
        const matchesArea = spot.area.toLowerCase().includes(query);
        const matchesMenu = spot.highlightMenu.some((m) => m.toLowerCase().includes(query));
        const matchesVibe = spot.vibe.some((v) => v.toLowerCase().includes(query));
        if (!matchesName && !matchesArea && !matchesMenu && !matchesVibe) return false;
      }

      return true;
    });
  }, [activeTab, selectedCity, selectedVibe, searchQuery]);

  // Filtered Events (Fesgo)
  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((evt) => {
      if (selectedCity !== 'Semua' && evt.city !== selectedCity) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          evt.title.toLowerCase().includes(q) ||
          evt.venue.toLowerCase().includes(q) ||
          evt.lineup.some((a) => a.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedCity, searchQuery]);

  // Filtered Trails (JajanTrip)
  const filteredTrails = useMemo(() => {
    return MOCK_TRAILS.filter((trail) => {
      if (selectedCity !== 'Semua' && trail.city !== selectedCity) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return trail.title.toLowerCase().includes(q) || trail.area.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedCity, searchQuery]);

  // Saved Spots Array
  const savedSpotsList = useMemo(() => {
    return MOCK_SPOTS.filter((s) => savedSpotIds.includes(s.id));
  }, [savedSpotIds]);

  const loggedSpotIds = useMemo(() => {
    return new Set(userLogs.map((l) => l.spotId));
  }, [userLogs]);

  return (
    <div className="min-h-screen flex flex-col bg-[#090a10]">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedCount={savedSpotIds.length}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TAB: FUDDYPAD PASPOR */}
        {activeTab === 'fuddypad' ? (
          <FuddyPadSection
            logs={userLogs}
            savedSpots={savedSpotsList}
            onOpenAddLog={() => {
              setLogPresetSpot(null);
              setIsAddLogOpen(true);
            }}
            onOpenSpotDetail={(spot) => setDetailSpot(spot)}
            onRemoveLog={handleRemoveLog}
          />
        ) : activeTab === 'events' ? (
          /* TAB: FESGO MUSIC & GIGS */
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-purple-950/40 to-zinc-900 border border-violet-500/20 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-2">
                <MusicIcon size={14} />
                <span>Fesgo — Stage & Youth Music Radar</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Panggung Musik, Gigs Indie & Festival Remaja
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Jadwal pertunjukan intim, pensi festival, dan kurasi rilisan musik independen di malam hari untuk menemani perjalanan jajanmu.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredEvents.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          </div>
        ) : activeTab === 'streetfood' ? (
          /* TAB: JAJANTRIP PASAR MALAM & TRAILS */
          <div className="space-y-8">
            <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-rose-950/30 to-zinc-900 border border-rose-500/20 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-2">
                <UtensilsIcon size={14} />
                <span>JajanTrip — Wisata Kuliner & Pasar Malam</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Sentra Kaki Lima Legendaris & Rute Jajan Malam
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Dari gultik Blok M sampai ronde jahe Cibadak. Panduan terkurasi mencicipi street food terbaik lengkap dengan estimasi rute dan tips lokal.
              </p>
            </div>

            {/* Food Trails Section */}
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <CompassIcon size={18} className="text-rose-400" />
                <span>Rute Jelajah Kuliner Malam Terkurasi</span>
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {filteredTrails.map((trail) => (
                  <TrailCard key={trail.id} trail={trail} />
                ))}
              </div>
            </div>

            {/* Street Food Spots Grid */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <UtensilsIcon size={18} className="text-rose-400" />
                <span>Spot Pasar Malam & Kaki Lima Populer ({filteredSpots.length})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSpots.map((spot) => (
                  <SpotCard
                    key={spot.id}
                    spot={spot}
                    onOpenDetail={(s) => setDetailSpot(s)}
                    onQuickLog={(s) => openLogModalForSpot(s)}
                    isSaved={savedSpotIds.includes(spot.id)}
                    onToggleSave={toggleSaveSpot}
                    isLogged={loggedSpotIds.has(spot.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* TAB: ALL / CAFE (NONGKRONG PEDIA) / NIGHTVIBE */
          <div className="space-y-10">
            {/* Hero Banner */}
            <HeroBanner
              selectedVibe={selectedVibe}
              setSelectedVibe={setSelectedVibe}
              vibesList={vibesList}
              totalSpotsCount={filteredSpots.length}
            />

            {/* If 'all' tab, show curated highlights for Fesgo and JajanTrip */}
            {activeTab === 'all' && (
              <>
                {/* Highlight JajanTrip Route Preview */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
                        JajanTrip Spotlight
                      </span>
                      <h2 className="text-xl font-extrabold text-white">
                        Rute Wisata Kuliner Malam Pilihan
                      </h2>
                    </div>
                    <button
                      onClick={() => setActiveTab('streetfood')}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                    >
                      <span>Lihat Semua Rute</span>
                      <ArrowRightIcon size={14} />
                    </button>
                  </div>

                  {filteredTrails[0] && <TrailCard trail={filteredTrails[0]} />}
                </section>

                {/* Highlight Fesgo Gigs Preview */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">
                        Fesgo Music Stage
                      </span>
                      <h2 className="text-xl font-extrabold text-white">
                        Gigs & Festival Musik Pekan Ini
                      </h2>
                    </div>
                    <button
                      onClick={() => setActiveTab('events')}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                    >
                      <span>Lihat Semua Jadwal</span>
                      <ArrowRightIcon size={14} />
                    </button>
                  </div>

                  {filteredEvents[0] && <EventCard event={filteredEvents[0]} />}
                </section>
              </>
            )}

            {/* Spots Grid Section */}
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                    {activeTab === 'cafe'
                      ? 'Nongkrong Pedia: Kafe Estetik & Slow Bar'
                      : activeTab === 'nightvibe'
                      ? 'NightVibe: Spot 24 Jam & Ruang Komunitas'
                      : 'Radar Tempat Nongkrong & Kuliner Malam'}
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Menampilkan {filteredSpots.length} spot di {selectedCity === 'Semua' ? 'berbagai kota' : selectedCity}
                    {selectedVibe !== 'Semua' ? ` dengan vibe #${selectedVibe}` : ''}
                  </p>
                </div>

                {/* Reset Filters button if active */}
                {(selectedVibe !== 'Semua' || searchQuery || selectedCity !== 'Semua') && (
                  <button
                    onClick={() => {
                      setSelectedVibe('Semua');
                      setSelectedCity('Semua');
                      setSearchQuery('');
                    }}
                    className="self-start sm:self-center text-xs text-amber-400 hover:underline"
                  >
                    Reset Filter
                  </button>
                )}
              </div>

              {filteredSpots.length === 0 ? (
                <div className="text-center py-16 px-4 rounded-2xl bg-zinc-900/40 border border-dashed border-zinc-800">
                  <CompassIcon size={36} className="mx-auto text-zinc-600 mb-3" />
                  <h3 className="text-base font-bold text-zinc-300">Tidak ada spot yang cocok dengan filter</h3>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto mt-1 mb-4">
                    Coba ubah kota, hapus pencarian kata kunci, atau pilih mood vibe lainnya.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedVibe('Semua');
                      setSelectedCity('Semua');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs"
                  >
                    Tampilkan Semua Spot
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSpots.map((spot) => (
                    <SpotCard
                      key={spot.id}
                      spot={spot}
                      onOpenDetail={(s) => setDetailSpot(s)}
                      onQuickLog={(s) => openLogModalForSpot(s)}
                      isSaved={savedSpotIds.includes(spot.id)}
                      onToggleSave={toggleSaveSpot}
                      isLogged={loggedSpotIds.has(spot.id)}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 bg-[#090a10] py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-black text-lg tracking-wider bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
                NOCTUR
              </span>
              <p className="text-xs text-zinc-400">
                Peleburan 5 Pilar: Nongkrong Pedia • JajanTrip • Fesgo • NightVibe • Fuddypad.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-400">
              <button onClick={() => setActiveTab('cafe')} className="hover:text-amber-400 transition-colors">Kafe Malam</button>
              <button onClick={() => setActiveTab('streetfood')} className="hover:text-amber-400 transition-colors">Pasar Malam & Trails</button>
              <button onClick={() => setActiveTab('events')} className="hover:text-amber-400 transition-colors">Gigs Musik</button>
              <button onClick={() => setActiveTab('nightvibe')} className="hover:text-amber-400 transition-colors">Komunitas 24 Jam</button>
              <button onClick={() => setActiveTab('fuddypad')} className="hover:text-amber-400 transition-colors">Buku Jejak Paspor</button>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-900 text-center text-[11px] text-zinc-400">
            &copy; {new Date().getFullYear()} NOCTUR. Dibuat untuk penjelajah malam urban.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SpotDetailModal
        spot={detailSpot}
        onClose={() => setDetailSpot(null)}
        onQuickLog={(spot) => openLogModalForSpot(spot)}
        isSaved={detailSpot ? savedSpotIds.includes(detailSpot.id) : false}
        onToggleSave={toggleSaveSpot}
        isLogged={detailSpot ? loggedSpotIds.has(detailSpot.id) : false}
      />

      <AddLogModal
        isOpen={isAddLogOpen}
        onClose={() => setIsAddLogOpen(false)}
        presetSpot={logPresetSpot}
        allSpots={MOCK_SPOTS}
        onSaveLog={handleSaveLog}
      />
    </div>
  );
}
