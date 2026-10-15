export interface PhotoItem {
  id: string;
  title: string;
  folderCategory: 'Weddings' | 'Prenuptial Sessions' | 'Milestone Debuts' | 'Events & Cinematics' | 'Milestone Event';
  categorySlug: 'weddings' | 'prenup' | 'debuts' | 'events' | 'birthday';
  src: string;
  caption: string;
  location: string;
  year: string;
  exif: {
    camera: string;
    lens: string;
    settings: string;
  };
}

export interface PortfolioCategory {
  id: string;
  title: string;
  slug: 'weddings' | 'prenup' | 'debuts' | 'events' | 'birthday';
  folderName: string;
  subtitle: string;
  description: string;
  photos: PhotoItem[];
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: 'folder-weddings-tobby-mj',
    title: 'Weddings',
    slug: 'weddings',
    folderName: 'Portfolio / Tobby and MJ',
    subtitle: 'The Grand Celebration of Lifelong Love',
    description: 'Framing intimate glances, the exchange of sacred vows, and the euphoric celebration of your union with timeless composition.',
    photos: [
      {
        id: 'tm-1',
        title: 'Intimate Yacht Wedding',
        folderCategory: 'Weddings',
        categorySlug: 'weddings',
        src: '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/MJ&Tobby283.jpg', 
        caption: 'Surrounded by love, grounded in warmth, and completely wrapped up in you.',
        location: 'Subic Bay Freeport Zone',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2',
          lens: '75mm F2',
          settings: 'f/2 · 1/800s · ISO 640',
        },
      },
      {
        id: 'tm-2',
        title: 'Love overflowing',
        folderCategory: 'Weddings',
        categorySlug: 'weddings',
        src: '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/MJ&Tobby126.jpg', 
        caption: 'Holding your hand today, and choosing you for all of our tomorrows.',
        location: 'Subic Bay Freeport Zone',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2',
          lens: '75mm F2',
          settings: 'f/2 · 1/800s · ISO 640',
        },
      },
      {
        id: 'tm-3',
        title: 'Dream come true',
        folderCategory: 'Weddings',
        categorySlug: 'weddings',
        src: '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/TobbyAndMJAerials-2.jpg', 
        caption: 'Sailing into forever, surrounded by open waters and endless love.',
        location: 'Subic Bay Freeport Zone',
        year: '2026',
        exif: {
          camera: 'DJI Mavic 3 Pro',
          lens: 'Standard',
          settings: 'f/2.8 · 1/200s · ISO 1000',
        },
      },
      {
        id: 'tm-4',
        title: 'Warm love of a family',
        folderCategory: 'Weddings',
        categorySlug: 'weddings',
        src: '/src/assets/images/Obra Creations Assets/Weddings/01 - Tobby and MJ/MJ&Tobby299.jpg', 
        caption: 'The ultimate crew, celebrating love, laughter, and new beginnings on the open water.',
        location: 'Subic Bay Freeport Zone',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2',
          lens: '75mm F2',
          settings: 'f/5.6 · 1/160s · ISO 1000',
        },
      },
    ],
  },
  {
    id: 'folder-weddings-malachi-vashel',
    title: 'Weddings',
    slug: 'weddings',
    folderName: 'Portfolio / Malachi and Vashel',
    subtitle: 'Faith, Hope, and Forever',
    description: 'From the tender moment of veil placement to the joyful vows shared under the altar lights, Malachi and Vash’s wedding was a beautiful testament to love built on a divine foundation. Surrounded by family and covered in prayer, every smile, vow, and quiet moment reflected a journey anchored in faith.',
    photos: [
      {
        id: 'mv-1',
        title: 'Appointed in His Time',
        folderCategory: 'Weddings',
        categorySlug: 'weddings',
        src: '/src/assets/images/Obra Creations Assets/Weddings/02 - Malachi and Vash/MalachiAndVash-6.jpg', 
        caption: 'Surrounded by love, grounded in warmth, and completely wrapped up in you.',
        location: 'Bible Baptist Temple, Pasig City',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2s',
          lens: '75mm F2',
          settings: 'f/2 · 1/250s · ISO 1000',
        },
      },
      {
        id: 'mv-2',
        title: 'Love overflowing',
        folderCategory: 'Weddings',
        categorySlug: 'weddings',
        src: '/src/assets/images/Obra Creations Assets/Weddings/02 - Malachi and Vash/MalachiAndVash-4.jpg', 
        caption: 'Covered in love, prayers, and the blessing of those who cherish her most.',
        location: 'Bible Baptist Temple, Pasig City',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2s',
          lens: '75mm F2',
          settings: 'f/2 · 1/250s · ISO 1000',
        },
      },
      {
        id: 'mv-3',
        title: 'Christ at the Center',
        folderCategory: 'Weddings',
        categorySlug: 'weddings',
        src: '/src/assets/images/Obra Creations Assets/Weddings/02 - Malachi and Vash/MalachiAndVash-5.jpg', 
        caption: 'That face you make when you realize your forever is finally standing right in front of you.',
        location: 'Bible Baptist Temple, Pasig City',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2s',
          lens: '75mm F2',
          settings: 'f/2 · 1/250s · ISO 1000',
        },
      },
      {
        id: 'mv-4',
        title: 'Rooted in love, surrounded by family.',
        folderCategory: 'Weddings',
        categorySlug: 'weddings',
        src: '/src/assets/images/Obra Creations Assets/Weddings/02 - Malachi and Vash/MalachiAndVash-9.jpg', 
        caption: 'The heart of the celebration—family. Blessed beyond measure to step into this new chapter wrapped in the love of those who matter most.',
        location: 'Bible Baptist Temple, Pasig City',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2s',
          lens: '75mm F2',
          settings: 'f/2 · 1/250s · ISO 1000',
        },
      },
    ],
  },
  {
    id: 'folder-birthday-fedy',
    title: 'Milestone Event',
    slug: 'birthday',
    folderName: 'Portfolio / Nanay Fedy at 86',
    subtitle: '86 years of grace and gratitude.',
    description: 'Celebrating 86 years of grace, resilience, and enduring family love. Surrounded by children, grandchildren, and lifelong memories, Nanay Fedy’s milestone celebration was a joyful tribute to a life deeply cherished.',
    photos: [
      {
        id: 'fedy-1',
        title: 'Truely Blessed',
        folderCategory: 'Milestone Event',
        categorySlug: 'birthday',
        src: '/src/assets/images/Obra Creations Assets/Birthdays/01 - 86th/Fedy86th-9.jpg', 
        caption: 'A quiet moment of reflection before the candles are blown out. Seeing her hands clasped in gratitude, surrounded by the family and love she nurtured over a lifetime, is a beautiful reminder of what truly matters.',
        location: 'Bautista Resort - Santa Cruz, Zambales',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2s',
          lens: '75mm F2',
          settings: 'f/2 · 1/250s · ISO 1000',
        },
      },
      {
        id: 'fedy-2',
        title: 'Dance of Love and Gratitude',
        folderCategory: 'Milestone Event',
        categorySlug: 'birthday',
        src: '/src/assets/images/Obra Creations Assets/Birthdays/01 - 86th/Fedy86th-7.jpg', 
        caption: 'A special blue rose to celebrate 86 wonderful years.',
        location: 'Bautista Resort - Santa Cruz, Zambales',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2s',
          lens: '75mm F2',
          settings: 'f/2 · 1/250s · ISO 1000',
        },
      },
      {
        id: 'fedy-3',
        title: 'Special Cake for a Special Person - Nanay Fedy',
        folderCategory: 'Milestone Event',
        categorySlug: 'birthday',
        src: '/src/assets/images/Obra Creations Assets/Birthdays/01 - 86th/Fedy86th-2.jpg', 
        caption: 'Sweet details for the 86th birthday of Nanay Fedy.',
        location: 'Bautista Resort - Santa Cruz, Zambales',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2s',
          lens: '75mm F2',
          settings: 'f/2 · 1/250s · ISO 1000',
        },
      },
      {
        id: 'fedy-4',
        title: 'Surrounded by a lifetime of love and laughter.',
        folderCategory: 'Milestone Event',
        categorySlug: 'birthday',
        src: '/src/assets/images/Obra Creations Assets/Birthdays/01 - 86th/Fedy86th-10.jpg', 
        caption: 'The greatest gift isn’t found in a box, but in this room full of smiling faces.',
        location: 'Bautista Resort - Santa Cruz, Zambales',
        year: '2026',
        exif: {
          camera: 'Fujifilm X-H2s',
          lens: '75mm F2',
          settings: 'f/2 · 1/250s · ISO 1000',
        },
      },
    ],
  },
  
  
];

export const ALL_PHOTOS: PhotoItem[] = PORTFOLIO_CATEGORIES.flatMap((c) => c.photos);

export const STUDIO_CONTACT = {
  phone: '+639764585099',
  phoneDisplay: '+63 976 458 5099',
  phoneTel: 'tel:+639764585099',
  facebook: 'www.facebook.com/ObraCreations2019',
  facebookUrl: 'https://www.facebook.com/ObraCreations2019',
  email: 'obracreations2022@gmail.com',
};

export const BIO_DATA = {
  founder: 'Daniel Obra',
  studioName: 'Obra Creations',
  foundedYear: '2019',
  email: 'obracreations2022@gmail.com',
  phone: '+639764585099',
  phoneDisplay: '+63 976 458 5099',
  facebook: 'www.facebook.com/ObraCreations2019',
  facebookUrl: 'https://www.facebook.com/unity.ph.dan',
  portraitSrc: '/src/assets/images/ObraPortrait.jpg',
  exactBioTextParagraph1:
    'Since our founding in 2019, we have been driven by a singular inspiration: to capture the best memories of your special events and transform them into timeless visual pieces. Whether it is a grand wedding celebration, a milestone debut, or an intimate gathering, we specialize in both photography and videography to frame the authentic emotion and energy of your story.',
  exactBioTextParagraph2:
    "We don't just document events; we craft immersive, cinematic narratives. By blending artistic composition with modern storytelling, we ensure that every fleeting smile, joyful tear, and grand celebration is preserved, allowing you to relive your most precious milestones for generations to come.",
  credentials: [
    { label: 'Founded', value: '2019' },
    { label: 'Milestones Documented', value: '~100' },
    { label: 'Drone Certified', value: 'Conventional and FPV' },
    { label: 'Storytelling Format', value: 'Cinematic and Story Driven' },
  ],
};
