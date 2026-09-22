'use client';

import React from 'react';
import { NightEvent } from '@/types';
import { MusicIcon, ClockIcon, MapPinIcon, TicketIcon, SparklesIcon } from './Icons';

interface EventCardProps {
  event: NightEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex flex-col sm:flex-row rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 overflow-hidden">
      {/* Event Image Banner */}
      <div className="relative sm:w-64 h-48 sm:h-auto flex-shrink-0 bg-zinc-800">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-zinc-900 sm:to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-violet-500/90 text-white backdrop-blur-md border border-violet-400/30">
            {event.category}
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold text-violet-400 flex items-center gap-1.5">
            <SparklesIcon size={13} />
            Vibe: {event.vibe}
          </span>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
            {event.ticketStatus} • {event.price}
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-white mb-2 hover:text-violet-300 transition-colors">
          {event.title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400 mb-3">
          <div className="flex items-center gap-1.5">
            <ClockIcon size={13} className="text-zinc-500" />
            <span>{event.date} • {event.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPinIcon size={13} className="text-zinc-500" />
            <span className="truncate">{event.venue}, {event.city}</span>
          </div>
        </div>

        <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Lineup pills */}
        <div className="mt-auto pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
              Lineup:
            </span>
            {event.lineup.map((artist, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium bg-zinc-800/90 border border-zinc-700 px-2 py-0.5 rounded text-zinc-200"
              >
                {artist}
              </span>
            ))}
          </div>

          <button className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white flex items-center gap-1.5 transition-colors shadow-md shadow-violet-600/20">
            <TicketIcon size={13} />
            <span>Info & Akses</span>
          </button>
        </div>
      </div>
    </div>
  );
};
