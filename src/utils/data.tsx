// bannerData data
export const bannerData = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Banner 1',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/6690884/pexels-photo-6690884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Banner 2',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Banner 3',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Banner 4',
  },
];

// products data
export const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 10,
    image:
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Free Delivery'],
  },
  {
    id: '2',
    name: 'Product 2',
    price: 15,
    image:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Selling Fast'],
  },
  {
    id: '3',
    name: 'Product 3',
    price: 25,
    image:
      'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Selling Fast'],
  },
];

// Combine all data into a single array
export const data = [
  {type: 'header', id: 'header'}, // Header section
  {type: 'banners', id: 'banners', data: bannerData}, // Banners section
  {type: 'products', id: 'products', data: products}, // Products section
];

// dummy payment methods
export const paymentMethods = [
  {id: '1', name: 'Credit Card'},
  {id: '2', name: 'PayPal'},
  {id: '3', name: 'Razorpay'},
];
