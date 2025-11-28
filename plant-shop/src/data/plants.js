// Import your local images from the assets folder
import monstera from '../assets/monstera.jpg';
import fiddleLeafFig from '../assets/fiddleleaf.jpg';
import pothos from '../assets/pothos.jpg';
import snakePlant from '../assets/snakeplant.jpg';
import zzPlant from '../assets/zzplant.jpg';
import peaceLily from '../assets/peacelily.jpg';

const plants = [
  {
    id: 'p1',
    name: 'Monstera Deliciosa',
    price: 24.99,
    category: 'Aroids',
    image: monstera, // Updated to use local image import
    description: 'A popular indoor plant known for its large, glossy, fenestrated leaves. Easy to care for and adds a tropical touch.',
  },
  {
    id: 'p2',
    name: 'Fiddle Leaf Fig',
    price: 39.99,
    category: 'Trees',
    image: fiddleLeafFig, // Updated to use local image import
    description: 'A stunning statement plant with large, violin-shaped leaves. Requires bright, indirect light.',
  },
  {
    id: 'p3',
    name: 'Pothos (Golden)',
    price: 12.50,
    category: 'Vining Plants',
    image: pothos, // Updated to use local image import
    description: 'Extremely forgiving and easy to grow, Pothos are perfect for beginners. They thrive in various conditions and are great for hanging baskets.',
  },
  {
    id: 'p4',
    name: 'Snake Plant (Sansevieria)',
    price: 18.00,
    category: 'Succulents & Cacti',
    image: snakePlant, // Updated to use local image import
    description: 'Tough and resilient, snake plants are known for improving air quality and requiring minimal water. Ideal for low-light conditions.',
  },
  {
    id: 'p5',
    name: 'ZZ Plant',
    price: 28.00,
    category: 'Aroids',
    image: zzPlant, // Updated to use local image import
    description: 'Almost indestructible, the ZZ plant can tolerate neglect and low light. Features waxy, dark green leaves.',
  },
  {
    id: 'p6',
    name: 'Peace Lily',
    price: 21.00,
    category: 'Flowering Plants',
    image: peaceLily, // Updated to use local image import
    description: 'Known for its elegant white "flowers" (actually modified leaves), the Peace Lily is a beautiful air-purifying plant.',
  },
];

export default plants;