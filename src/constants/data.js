import images from './images';

const sushis = [
  {
    title: 'Samurai Roll',
    price: '$36',
    tags: 'Crab & avocado roll topped with tuna, salmon, avocado & eel sauce',
  },
  {
    title: 'White Dragon Roll',
    price: '$40',
    tags: 'Tuna & salmon wrapped in nori, tempura fried. Served with hot lava sauce',
  },
  {
    title: 'Rainbow Roll',
    price: '$32',
    tags: 'Crab & avocado roll topped with tuna, salmon, yellowtail & masago',
  },
  {
    title: 'Queen Roll',
    price: '$34',
    tags: 'Chopped hamachi, salmon, tuna & scallions wrapped in nori, cooked all the way',
  },
  {
    title: 'Kami Kaze Roll',
    price: '$36',
    tags: 'Cucumber & crab roll, topped with tuna',
  },
];

const appetizers = [
  {
    title: 'Hamachi Kama',
    price: '$13',
    tags: 'Grilled yellowtail jaw lightly seasoned, drizzled with ponzu sauce',
  },
  {
    title: 'Scallop Yakitori',
    price: '$16',
    tags: 'Large deep-sea scallops wrapped in bacon battered and fried',
  },
  {
    title: 'Filet Stacker',
    price: '$14',
    tags: 'Layer of warm sushi rice and filet mignon, topped with asparagus',
  },
  {
    title: 'Soft Shell Crab',
    price: '$15',
    tags: 'Crispy seasoned soft shell crab tossed in pepper and onion',
  },
  {
    title: 'Hamachi Carpaccio',
    price: '$26',
    tags: 'Sashimi yellowtail covered in ponzu sauce & oregano with sliced jalapenos',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { sushis, appetizers, awards };
