import { Spot, NightEvent, FoodTrail, FuddyLog } from '@/types';

export const MOCK_SPOTS: Spot[] = [
  // 1. Nongkrong Pedia - Aesthetic Cafes & Creative Hangouts
  {
    id: 'spot-1',
    name: 'Kroma Slow Bar & Roastery',
    category: 'cafe',
    categoryLabel: 'Aesthetic Cafe',
    vibe: ['Late Night Chitchat', 'Acoustic Ambience', 'Work From Cafe'],
    city: 'Jakarta',
    area: 'Panglima Polim, Jaksel',
    address: 'Jl. Panglima Polim V No. 25, Kebayoran Baru, Jakarta Selatan',
    hours: '10:00 - 02:00',
    is24Hours: false,
    rating: 4.8,
    reviewsCount: 342,
    priceRange: 'Rp Rp',
    averageCost: 'Rp 35.000 - 65.000 / orang',
    description: 'Slow bar kopi dengan pencahayaan hangat khas malam hari. Sering mengadakan mini pop-up vinyl listening party dan pameran zine indie.',
    highlightMenu: ['Filter Coffee Flores Bajawa', 'Earl Grey Chiffon Cake', 'Cascara Sparkling Lemon'],
    facilities: ['Colokan di Setiap Meja', 'WiFi Kencang (100Mbps)', 'Outdoor Courtyard', 'Vinyl Player Corner'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
    crowdPeak: '20:00 - 23:30'
  },
  {
    id: 'spot-2',
    name: 'Ruang Tengah Space & Coffee',
    category: 'cafe',
    categoryLabel: 'Creative Cafe & Studio',
    vibe: ['Creative Hub', 'Midnight Talk', 'Work Friendly'],
    city: 'Bandung',
    area: 'Jl. Riau, Bandung',
    address: 'Jl. LLRE Martadinata No. 78, Cihapit, Bandung',
    hours: '09:00 - 01:00',
    is24Hours: false,
    rating: 4.7,
    reviewsCount: 289,
    priceRange: 'Rp Rp',
    averageCost: 'Rp 30.000 - 55.000 / orang',
    description: 'Kafe semi-open space di bangunan kolonial heritage dengan halaman rindang berhias lampu fairy light. Langganan kumpul desainer dan musisi lokal.',
    highlightMenu: ['Es Kopi Susu Aren Heritage', 'Cireng Crispy Bumbu Rujak', 'Matcha Basque Burnt Cheesecake'],
    facilities: ['Colokan Banyak', 'Area Merokok Luas', 'Musholla', 'Pet Friendly Area'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    crowdPeak: '19:30 - 22:30'
  },

  // 2. JajanTrip - Pasar Malam & Street Food Havens
  {
    id: 'spot-3',
    name: 'Kawasan Kuliner Malam Blok M',
    category: 'streetfood',
    categoryLabel: 'Sentra Street Food',
    vibe: ['Street Food Crawl', 'Midnight Talk', 'High Energy'],
    city: 'Jakarta',
    area: 'Blok M, Jaksel',
    address: 'Kawasan Melawai & Mahakam, Blok M, Jakarta Selatan',
    hours: '17:30 - 03:30',
    is24Hours: false,
    rating: 4.9,
    reviewsCount: 1420,
    priceRange: 'Rp',
    averageCost: 'Rp 20.000 - 45.000 / orang',
    description: 'Titik temu kuliner malam paling legendaris bagi anak muda Jakarta Selatan. Dari gultik ikonik, sate taichan, hingga roti bakar arang.',
    highlightMenu: ['Gulai Tikungan Daging Sapi Campur', 'Roti Bakar Eddy Komplit', 'Sate Taichan Sambal Pedas'],
    facilities: ['Akses Dekat MRT Blok M', 'Banyak Pilihan Gerobak', 'Atmosphere Trotoar Asyik'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    crowdPeak: '21:00 - 01:00'
  },
  {
    id: 'spot-4',
    name: 'Sentra Pasar Malam Cibadak',
    category: 'streetfood',
    categoryLabel: 'Pasar Malam Kuliner',
    vibe: ['Street Food Crawl', 'Vibrant Heritage'],
    city: 'Bandung',
    area: 'Cibadak, Bandung',
    address: 'Jl. Cibadak, Astanaanyar, Kota Bandung',
    hours: '18:00 - 01:00',
    is24Hours: false,
    rating: 4.8,
    reviewsCount: 980,
    priceRange: 'Rp',
    averageCost: 'Rp 25.000 - 60.000 / orang',
    description: 'Jalanan kota tua yang bertransformasi menjadi koridor kuliner malam berderet ratusan tenda makanan halal & legendaris.',
    highlightMenu: ['Ronde Jahe Alkateri Hangat', 'Soto Bandung Pak Simon', 'Pisang Keju Crispy Simanalagi'],
    facilities: ['Lentera Malam Khas', 'Trotoar Pejalan Kaki Luas', 'Suasana Dingin Bandung'],
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop',
    crowdPeak: '19:00 - 23:00'
  },
  {
    id: 'spot-5',
    name: 'Pasar Kranggan Lantai 2',
    category: 'streetfood',
    categoryLabel: 'Pasar Modern Hip',
    vibe: ['Hidden Gem', 'Chill Acoustic', 'Street Food Crawl'],
    city: 'Yogyakarta',
    area: 'Kranggan, Jetis, Jogja',
    address: 'Jl. Pangeran Diponegoro No. 22, Gowongan, Jetis, Kota Yogyakarta',
    hours: '16:00 - 23:00',
    is24Hours: false,
    rating: 4.8,
    reviewsCount: 760,
    priceRange: 'Rp',
    averageCost: 'Rp 15.000 - 40.000 / orang',
    description: 'Revitalisasi lantai 2 pasar tradisional yang dipenuhi tenant kuliner artisan kekinian oleh anak muda Jogja. Murah, unik, dan sangat ramah kantong.',
    highlightMenu: ['Bakmi Senggol Artisanal', 'Artisan Pastry & Choux', 'Kopi Seduh Manual'],
    facilities: ['Duduk Santai Meja Bersama', 'Nuansa Urban Vintage', 'Dekat Tugu Jogja'],
    image: 'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?q=80&w=1200&auto=format&fit=crop',
    crowdPeak: '18:30 - 21:30'
  },

  // 3. NightVibe - 24 Jam & Tempat Kumpul Komunitas
  {
    id: 'spot-6',
    name: 'Lucky Cat After-Hours Coffeehouse',
    category: 'midnight',
    categoryLabel: '24-Hours Spot',
    vibe: ['Midnight Talk', '24 Jam Nonstop', 'Work Friendly'],
    city: 'Jakarta',
    area: 'Kuningan, Jaksel',
    address: 'Plaza Festival Parkir Selatan, Jl. H. R. Rasuna Said, Kuningan, Jakarta Selatan',
    hours: '24 Jam Nonstop',
    is24Hours: true,
    rating: 4.6,
    reviewsCount: 1650,
    priceRange: 'Rp Rp',
    averageCost: 'Rp 40.000 - 75.000 / orang',
    description: 'Ikon tempat nongkrong 24 jam dengan interior kayu serba putih dan pohon besar di tengah ruangan. Tempat favorit insomniac dan pekerja malam.',
    highlightMenu: ['Pan-Seared Salmon', 'Hot Cappuccino Double Shot', 'Banana Caramel Crepe'],
    facilities: ['Buka 24 Jam', 'Colokan & WiFi', 'Area Parkir Luas Plaza', 'Musholla Bersih'],
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop',
    crowdPeak: '23:00 - 03:00'
  },
  {
    id: 'spot-7',
    name: 'Underpass Creative Park & Skate Hub',
    category: 'community',
    categoryLabel: 'Komunitas & Skate',
    vibe: ['Creative Hub', 'High Energy', 'Komunitas'],
    city: 'Jakarta',
    area: 'Dukuh Atas, Sudirman',
    address: 'Taman Dukuh Atas Sudirman, Jakarta Pusat',
    hours: '17:00 - 02:00',
    is24Hours: false,
    rating: 4.7,
    reviewsCount: 890,
    priceRange: 'Rp',
    averageCost: 'Rp 15.000 - 35.000 (Jajanan)',
    description: 'Pusat kumpul malam komunitas skateboarder, fotografer jalanan, dan pegiat seni visual urban. Penuh energi muda dengan latar gedung pencakar langit Sudirman.',
    highlightMenu: ['Kopi Keliling Starling Estetik', 'Roti Bakar Keju Meleleh', 'Minuman Segar Dingin'],
    facilities: ['Mini Bowl & Rail Skate', 'Spot Foto Citylight Neon', 'Transit Terintegrasi MRT/LRT/KRL'],
    image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?q=80&w=1200&auto=format&fit=crop',
    crowdPeak: '20:00 - 00:30'
  },
  {
    id: 'spot-8',
    name: 'Garasi 66 Motovlog & Coffee Bunker',
    category: 'community',
    categoryLabel: 'Komunitas Night Ride',
    vibe: ['Komunitas', 'Late Night Chitchat', 'Midnight Talk'],
    city: 'Bandung',
    area: 'Dago Atas, Bandung',
    address: 'Jl. Ir. H. Juanda No. 340, Dago Atas, Coblong, Bandung',
    hours: '16:00 - 03:00',
    is24Hours: false,
    rating: 4.8,
    reviewsCount: 512,
    priceRange: 'Rp Rp',
    averageCost: 'Rp 30.000 - 50.000 / orang',
    description: 'Titik singgah utama anak-anak night ride Bandung. Menyediakan area bengkel mini, display motor custom, dan kopi hangat penembus udara dingin Dago.',
    highlightMenu: ['Kopi Jahe Susu Garasi', 'Burger Charcoal Beef Melt', 'Kentang Wedges BBQ'],
    facilities: ['Parkir Motor Luas & Rapi', 'Kompresor Angin & Toolkit Mini', 'Outdoor Deck Pemandangan Kota'],
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1200&auto=format&fit=crop',
    crowdPeak: '21:30 - 02:00'
  }
];

// Fesgo - Music Festivals, Youth Gigs & Community Gatherings
export const MOCK_EVENTS: NightEvent[] = [
  {
    id: 'event-1',
    title: 'Noctur Soundstage: Indie & Shoegaze Night',
    category: 'Indie Gigs',
    date: 'Sabtu, 28 September 2026',
    time: '19:00 - 23:30 WIB',
    venue: 'Kroma Rooftop Stage, Panglima Polim',
    city: 'Jakarta',
    lineup: ['The Velvet Breeze', 'Kuningan Echo Club', 'Hujan Bulan Lalu'],
    vibe: 'Dreamy & Cathartic',
    ticketStatus: 'Free Entry',
    price: 'Gratis (RSVP First Come)',
    description: 'Panggung mini intim di bawah langit malam Jakarta Selatan menghadirkan 3 unit musik dreampop dan shoegaze lokal.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'event-2',
    title: 'Festival Jajanan Remaja & Pasar Kaset Pita',
    category: 'Pasar Malam',
    date: 'Jumat - Minggu, 3 - 5 Oktober 2026',
    time: '16:00 - 00:00 WIB',
    venue: 'Kawasan Heritage Braga, Bandung',
    city: 'Bandung',
    lineup: ['DJ Vinyl Pasar Antik', 'Acoustic Duo Braga', 'Live Mural Collective'],
    vibe: 'Nostalgic & Warm',
    ticketStatus: 'Ticketed',
    price: 'Rp 25.000 (Termasuk Voucher Jajan)',
    description: 'Perpaduan 40 booth street food artisan khas priangan dan bursa rilisan fisik kaset pita musik 90an-2000an.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'event-3',
    title: 'Fesgo Youth Fest: Pensi Underground Wave',
    category: 'Festival',
    date: 'Sabtu, 12 Oktober 2026',
    time: '15:30 - 23:00 WIB',
    venue: 'Stadion Kridosono Open Air, Jogja',
    city: 'Yogyakarta',
    lineup: ['Grrrl Gang', 'The Jansen', 'Rebellion Rose', 'Lomba Sihir'],
    vibe: 'High Voltage Youth Energy',
    ticketStatus: 'Ticketed',
    price: 'Presale Rp 65.000',
    description: 'Festival musik independen tahunan skala anak muda dengan area bazar kuliner jajan pasar malam terluas di Yogyakarta.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop'
  }
];

// JajanTrip - Curated Food Trails (Rute Jelajah Kuliner Malam)
export const MOCK_TRAILS: FoodTrail[] = [
  {
    id: 'trail-1',
    title: '3 Jam Eksplorasi Malam Blok M: Dari Gulai Sampai Slow Coffee',
    subtitle: 'Rute legendaris favorit gen-z pencinta kuliner jalanan dan obrolan larut malam.',
    city: 'Jakarta',
    area: 'Blok M - Panglima Polim',
    duration: '3.5 Jam',
    budgetEstimate: 'Rp 70.000 - 110.000',
    highlight: 'Menikmati seporsi gultik hangat lalu ditutup dengan kopi seduh di bar senyap.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    stops: [
      {
        order: 1,
        name: 'Gultik Tikungan Mahakam',
        category: 'Street Food Utama',
        mustTry: 'Gultik 2 Piring + Kerupuk Kaleng + Es Teh Manis',
        tip: 'Datang pukul 20.30 saat kuah santan bumbu rempah masih panas mengepul.'
      },
      {
        order: 2,
        name: 'Roti Bakar & Pisang Coklat Keju',
        category: 'Dessert Tradisional',
        mustTry: 'Roti Bakar Cokelat Keju Susu Double',
        tip: 'Minta rotinya dibakar garing kecokelatan di pinggiran.'
      },
      {
        order: 3,
        name: 'Kroma Slow Bar Panglima Polim',
        category: 'Midnight Coffee',
        mustTry: 'Cold Brew Cascara atau Hot Flat White',
        tip: 'Pilih area outdoor belakang untuk suasana ngobrol yang tenang tanpa bising jalan raya.'
      }
    ]
  },
  {
    id: 'trail-2',
    title: 'Braga After Midnight: Jelajah Manisan Tradisional & Kopi Dingin',
    subtitle: 'Menikmati hembusan angin sejuk Bandung melewati fasad art-deco dan jajanan bersejarah.',
    city: 'Bandung',
    area: 'Braga - Tamblong - Cibadak',
    duration: '2.5 Jam',
    budgetEstimate: 'Rp 50.000 - 85.000',
    highlight: 'Kombinasi ronde jahe penghangat raga dan gelato susu segar lokal.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop',
    stops: [
      {
        order: 1,
        name: 'Ronde Jahe Alkateri',
        category: 'Minuman Tradisional Hangat',
        mustTry: 'Ronde Campur Kuah Gula Merah Pedas Jahe',
        tip: 'Kenyal bola ketannya paling pas dinikmati saat udara Bandung menyentuh 19 derajat.'
      },
      {
        order: 2,
        name: 'Toko Roti & Kopi Heritage',
        category: 'Street Snack',
        mustTry: 'Roti Canai Susu Keju & Es Kopi Mocca',
        tip: 'Cocok dinikmati sambil foto-foto di trotoar lampu antik Jalan Braga.'
      }
    ]
  }
];

// Fuddypad - User Food & Spot Logs (Jejak Kuliner Digital ala Beli / Untappd)
export const INITIAL_USER_LOGS: FuddyLog[] = [
  {
    id: 'log-1',
    spotId: 'spot-1',
    spotName: 'Kroma Slow Bar & Roastery',
    spotCity: 'Jakarta',
    visitedDate: 'Kemarin, 21:45',
    verdict: 'Wajib Balik!',
    vibeScore: 9.5,
    favoriteItem: 'Filter Coffee Flores Bajawa',
    notes: 'Playlist vinyl jazz-nya luar biasa nyaman. Barista ramah menjelaskan profil beans dengan detail. Tempat kabur terbaik kalau butuh ketenangan tengah malam.',
    tags: ['#LateNightTalk', '#SpecialtyCoffee', '#CozyAtmosphere']
  },
  {
    id: 'log-2',
    spotId: 'spot-3',
    spotName: 'Kawasan Kuliner Malam Blok M',
    spotCity: 'Jakarta',
    visitedDate: '3 hari lalu, 23:10',
    verdict: 'Wajib Balik!',
    vibeScore: 9.0,
    favoriteItem: 'Gultik Daging Campur + Sate Paru',
    notes: 'Habis nonton gigs bareng anak-anak langsung geser ke gultik. Porsi pas buat ganjel perut malam hari. Sensasi makan di bangku plastik trotoar tetap nomor satu.',
    tags: ['#StreetFoodLegend', '#MurahMeriah', '#NongkrongMalam']
  },
  {
    id: 'log-3',
    spotId: 'spot-6',
    spotName: 'Lucky Cat After-Hours Coffeehouse',
    spotCity: 'Jakarta',
    visitedDate: 'Minggu lalu, 01:30',
    verdict: 'Lumayan Asyik',
    vibeScore: 8.2,
    favoriteItem: 'Hot Cappuccino Double Shot',
    notes: 'Penyelamat pas tugas akhir harus dikirim jam 6 pagi. Jam 2 pagi masih ramai pekerja kreatif dan anak kampus.',
    tags: ['#24Jam', '#WorkFromCafe', '#InsomniacSpot']
  }
];
