export type Trip = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

export const trips: Trip[] = [
  {
    id: '1',
    title: 'Sunny Beach Escape',
    description: 'Relax on golden sands and swim in crystal-clear waters at our exclusive beach resort.',
    image: '/images/beach.jpg',
    price: 799,
  },
  {
    id: '2',
    title: 'Mountain Adventure',
    description: 'Explore breathtaking mountain trails and enjoy cozy evenings by the fire.',
    image: '/images/mountain.jpg',
    price: 999,
  },
  {
    id: '3',
    title: 'City Lights Getaway',
    description: 'Experience the excitement of a vibrant city with guided tours and gourmet dining.',
    image: '/images/city.jpg',
    price: 899,
  },
]; 