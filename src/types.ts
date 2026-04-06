export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  price: number;
  stock: number;
  category: string;
  icon: string;
  features?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'ChatGPT Plus',
    description: 'Shared / Private access accounts',
    longDescription: 'Get access to GPT-4, DALL-E, and more with our premium shared or private accounts. Guaranteed uptime and fast support.',
    price: 29.00,
    stock: 42,
    category: 'AI Tools',
    icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=chatgpt',
    features: ['GPT-4 Access', 'DALL-E 3', 'Fast Response', '24/7 Support'],
  },
  {
    id: '2',
    title: 'Shadowrocket',
    description: 'Global Apple ID with shadowrocket',
    longDescription: 'A fully verified Apple ID with Shadowrocket pre-purchased. Ready to use globally for your networking needs.',
    price: 3.00,
    stock: 156,
    category: 'Social Media',
    icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=rocket',
    features: ['Pre-purchased App', 'Global Access', 'One-time Payment'],
  },
  {
    id: '3',
    title: 'US Apple ID',
    description: 'Fully verified US region account',
    longDescription: 'A clean, verified US region Apple ID. Perfect for accessing US-only apps and services.',
    price: 15.00,
    stock: 28,
    category: 'Apple ID',
    icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=apple',
    features: ['US Region', 'Verified Email', 'Security Questions Included'],
  },
  {
    id: '4',
    title: 'Telegram Account',
    description: 'Established global numbers',
    longDescription: 'High-quality, aged Telegram accounts with global numbers. Ideal for marketing or personal use.',
    price: 12.00,
    stock: 312,
    category: 'Social Media',
    icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=telegram',
    features: ['Aged Account', 'Global Number', 'Instant Delivery'],
  },
  {
    id: '5',
    title: 'TikTok Account',
    description: 'US / Global target regions',
    longDescription: 'TikTok accounts optimized for US or global reach. Perfect for creators and marketers.',
    price: 8.00,
    stock: 88,
    category: 'Social Media',
    icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=tiktok',
    features: ['Targeted Region', 'New Account', 'Email Verified'],
  },
  {
    id: '6',
    title: 'Google Workspace',
    description: 'Fully aged Gmail accounts',
    longDescription: 'Aged Gmail accounts with high trust scores. Suitable for professional use and bulk mailing.',
    price: 20.00,
    stock: 41,
    category: 'Google Workspace',
    icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=google',
    features: ['Aged 1+ Year', 'Recovery Email Included', 'High Trust'],
  },
  {
    id: '7',
    title: 'HK Apple ID',
    description: 'Hong Kong region verified',
    longDescription: 'Verified Hong Kong region Apple ID. Access HK-specific content and apps easily.',
    price: 10.00,
    stock: 64,
    category: 'Apple ID',
    icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=hkapple',
    features: ['HK Region', 'Verified', 'Instant Access'],
  },
  {
    id: '8',
    title: 'X Premium',
    description: 'Twitter accounts with longevity',
    longDescription: 'Premium X (Twitter) accounts with established history. Less likely to be flagged or banned.',
    price: 45.00,
    stock: 19,
    category: 'Entertainment',
    icon: 'https://api.dicebear.com/7.x/shapes/svg?seed=x',
    features: ['Established History', 'Premium Features', 'Safe to Use'],
  },
];

export const CATEGORIES = [
  'All Products',
  'Social Media',
  'AI Tools',
  'Apple ID',
  'Google Workspace',
  'Entertainment',
];
