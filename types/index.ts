export type SpotCategory = 'cafe' | 'streetfood' | 'community' | 'midnight';

export interface Spot {
  id: string;
  name: string;
  category: SpotCategory;
  categoryLabel: string;
  vibe: string[];
  city: 'Jakarta' | 'Bandung' | 'Yogyakarta';
  area: string;
  address: string;
  hours: string;
  is24Hours: boolean;
  rating: number;
  reviewsCount: number;
  priceRange: 'Rp' | 'Rp Rp' | 'Rp Rp Rp';
  averageCost: string;
  description: string;
  highlightMenu: string[];
  facilities: string[];
  image: string;
  crowdPeak: string;
}

export interface NightEvent {
  id: string;
  title: string;
  category: 'Festival' | 'Indie Gigs' | 'Pasar Malam' | 'Creative Meet';
  date: string;
  time: string;
  venue: string;
  city: 'Jakarta' | 'Bandung' | 'Yogyakarta';
  lineup: string[];
  vibe: string;
  ticketStatus: 'Free Entry' | 'Ticketed' | 'RSVP Needed';
  price: string;
  description: string;
  image: string;
}

export interface FoodTrail {
  id: string;
  title: string;
  subtitle: string;
  city: 'Jakarta' | 'Bandung' | 'Yogyakarta';
  area: string;
  duration: string;
  budgetEstimate: string;
  highlight: string;
  image: string;
  stops: {
    order: number;
    name: string;
    category: string;
    mustTry: string;
    tip: string;
  }[];
}

export interface FuddyLog {
  id: string;
  spotId: string;
  spotName: string;
  spotCity: string;
  visitedDate: string;
  verdict: 'Wajib Balik!' | 'Lumayan Asyik' | 'Biasa Aja';
  vibeScore: number;
  favoriteItem: string;
  notes: string;
  tags: string[];
}
