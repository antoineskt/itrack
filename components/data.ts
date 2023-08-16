export type PriceDataType = {
  title: string;
  price: string;
  description: string[];
};

export const priceData: PriceDataType[] = [
  {
    title: 'Free',
    price: 'Free',
    description: [
      'First 5,000 page views',
      'No coding required',
      'Integrates with any themes',
      'Create your own tracking page',
      'Live chat support 24/7',
      'Order lookup',
    ],
  },
  {
    title: 'GROWTH PLAN',
    price: '$4.99/month',
    description: [
      '50,000 page views per month',
      'Integrates with any themes',
      'Create your own tracking page',
      'Live chat support 24/7',
      'Order lookup',
      'Custom URL',
    ],
  },
  {
    title: 'PRO PLAN',
    price: '$9.99/month',
    description: [
      'Unlimited views',
      'Integrates with any themes',
      'Create your own tracking page',
      'Live chat support 24/7',
      'Order lookup',
      'Custom URL',
    ],
  },
];
