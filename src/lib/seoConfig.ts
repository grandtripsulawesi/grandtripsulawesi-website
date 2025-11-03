import { Metadata } from 'next';

const baseUrl = 'https://www.grandtripsulawesi.com';
const siteName = 'GrandTrip Sulawesi';
const defaultImage = `${baseUrl}/images/thumbnail.webp`;

export const homepageMetadata: Metadata = {
  title:
    'Rental Mobil Murah Makassar & Maros | GrandTrip Sulawesi - Lepas Kunci & Antar Jemput Bandara',
  description:
    'Jasa rental mobil murah di Makassar & Maros. Tersedia rental lepas kunci, lepas luar kota, Hiace, dan antar jemput bandara Sultan Hasanuddin. Harga terjangkau, armada terawat, pelayanan 24/7.',
  keywords: [
    'rental mobil murah maros',
    'rental mobil murah makassar',
    'jasa rental maros',
    'jasa rental makassar',
    'rental mobil lepas kunci',
    'rental mobil lepas luar kota',
    'rental mobil hiace maros',
    'rental mobil hiace makassar',
    'jasa antar jemput bandara makassar',
    'sewa mobil makassar',
    'sewa mobil maros',
    'rental mobil sulawesi selatan',
    'sewa mobil lepas kunci makassar',
    'rental hiace makassar',
    'antar jemput bandara sultan hasanuddin',
  ],
  authors: [{ name: 'GrandTrip Sulawesi' }],
  creator: 'GrandTrip Sulawesi',
  publisher: 'GrandTrip Sulawesi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
};

export const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  name: 'GrandTrip Sulawesi',
  description:
    'Jasa rental mobil terpercaya di Makassar dan Maros dengan berbagai pilihan armada',
  url: baseUrl,
  logo: `${baseUrl}/images/thumbnail.webp`,
  image: defaultImage,
  telephone: '+62-813-3787-3707', // Add your phone number
  email: 'grandtripsulawesi@gmail.com', // Add your email
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Jl. Poros Makassar - Maros, Bontoa, Kec. Mandai, Kabupaten Maros (Basement Grand Mall Maros)',
    addressLocality: 'Makassar',
    addressRegion: 'Sulawesi Selatan',
    postalCode: '90552',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-5.049908051136802', // Add your coordinates
    longitude: '119.55422201249998',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Makassar',
    },
    {
      '@type': 'City',
      name: 'Maros',
    },
    {
      '@type': 'State',
      name: 'Sulawesi Selatan',
    },
  ],
  priceRange: '$$',
  openingHours: 'Mo-Su 07:30-22:00',
  sameAs: [
    'https://www.facebook.com/grandtripsulawesi', // Add your social media
    'https://www.instagram.com/grandtripsulawesi',
    // Add more social media links
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Rental Mobil',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rental Mobil Lepas Kunci',
          description: 'Sewa mobil tanpa supir untuk kebebasan berkendara',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rental Mobil Lepas Luar Kota',
          description: 'Layanan rental mobil untuk perjalanan antar kota',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rental Mobil Hiace',
          description: 'Sewa mobil Hiace untuk rombongan hingga 15 orang',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Antar Jemput Bandara',
          description: 'Layanan antar jemput dari/ke Bandara Sultan Hasanuddin',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '13', // Update with actual data
  },
};

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': baseUrl,
  name: 'GrandTrip Sulawesi',
  alternateName: 'GrandTrip Sulawesi Rental Mobil',
  description: 'Penyedia jasa rental mobil terpercaya di Makassar dan Maros',
  url: baseUrl,
  telephone: '+62-813-3787-3707',
  email: 'grandtripsulawesi@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Jl. Poros Makassar - Maros, Bontoa, Kec. Mandai, Kabupaten Maros (Basement Grand Mall Maros)',
    addressLocality: 'Makassar',
    addressRegion: 'Sulawesi Selatan',
    postalCode: '90552',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-5.049908051136802', // Add your coordinates
    longitude: '119.55422201249998',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '07:30',
    closes: '22:00',
  },
  priceRange: '$$',
  image: [defaultImage],
  logo: `${baseUrl}/images/thumbnail.webp`,
};
