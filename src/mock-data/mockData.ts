type Product = {
  id: number;
  name: string;
  price: number;
  unit: 'kg';
  image: string;
};

type MockData = {
  fruit: Product[];
  vegetables: Product[];
};

export const mockData: MockData = {
  fruit: [
    { id: 1, name: 'Apple', price: 1.99, unit: 'kg', image: 'https://picsum.photos/seed/1/300/300' },
    { id: 2, name: 'Banana', price: 0.99, unit: 'kg', image: 'https://picsum.photos/seed/2/300/300' },
    { id: 3, name: 'Orange', price: 2.49, unit: 'kg', image: 'https://picsum.photos/seed/3/300/300' },
    { id: 4, name: 'Strawberry', price: 3.99, unit: 'kg', image: 'https://picsum.photos/seed/4/300/300' },
    { id: 5, name: 'Mango', price: 2.99, unit: 'kg', image: 'https://picsum.photos/seed/5/300/300' },
    { id: 6, name: 'Pineapple', price: 3.49, unit: 'kg', image: 'https://picsum.photos/seed/6/300/300' },
    { id: 7, name: 'Grapes', price: 4.99, unit: 'kg', image: 'https://picsum.photos/seed/7/300/300' },
    { id: 8, name: 'Blueberry', price: 6.99, unit: 'kg', image: 'https://picsum.photos/seed/8/300/300' },
    { id: 9, name: 'Peach', price: 2.79, unit: 'kg', image: 'https://picsum.photos/seed/9300/300' },
    { id: 10, name: 'Pear', price: 2.29, unit: 'kg', image: 'https://picsum.photos/seed/10/300/300' },
    { id: 11, name: 'Kiwi', price: 0.79, unit: 'kg', image: 'https://picsum.photos/seed/11/300/300' },
    { id: 12, name: 'Watermelon', price: 5.99, unit: 'kg', image: 'https://picsum.photos/seed/12/300/300' },
    { id: 13, name: 'Plum', price: 3.29, unit: 'kg', image: 'https://picsum.photos/seed/13/300/300' },
    { id: 14, name: 'Cherry', price: 7.99, unit: 'kg', image: 'https://picsum.photos/seed/14/300/300' },
    { id: 15, name: 'Lemon', price: 0.69, unit: 'kg', image: 'https://picsum.photos/seed/15/300/300' },
  ],
  vegetables: [
    { id: 1, name: 'Carrot', price: 1.49, unit: 'kg', image: 'https://example.com/images/carrot.jpg' },
    { id: 2, name: 'Broccoli', price: 2.99, unit: 'kg', image: 'https://example.com/images/broccoli.jpg' },
    { id: 3, name: 'Tomato', price: 2.79, unit: 'kg', image: 'https://example.com/images/tomato.jpg' },
    { id: 4, name: 'Cucumber', price: 1.99, unit: 'kg', image: 'https://example.com/images/cucumber.jpg' },
    { id: 5, name: 'Lettuce', price: 1.79, unit: 'kg', image: 'https://example.com/images/lettuce.jpg' },
    { id: 6, name: 'Spinach', price: 2.49, unit: 'kg', image: 'https://example.com/images/spinach.jpg' },
    { id: 7, name: 'Bell Pepper', price: 1.29, unit: 'kg', image: 'https://example.com/images/bell-pepper.jpg' },
    { id: 8, name: 'Onion', price: 1.19, unit: 'kg', image: 'https://example.com/images/onion.jpg' },
    { id: 9, name: 'Potato', price: 0.99, unit: 'kg', image: 'https://example.com/images/potato.jpg' },
    { id: 10, name: 'Zucchini', price: 2.29, unit: 'kg', image: 'https://example.com/images/zucchini.jpg' },
    { id: 11, name: 'Eggplant', price: 2.79, unit: 'kg', image: 'https://example.com/images/eggplant.jpg' },
    { id: 12, name: 'Cauliflower', price: 3.49, unit: 'kg', image: 'https://example.com/images/cauliflower.jpg' },
    { id: 13, name: 'Green Beans', price: 3.99, unit: 'kg', image: 'https://example.com/images/green-beans.jpg' },
    { id: 14, name: 'Asparagus', price: 4.99, unit: 'kg', image: 'https://example.com/images/asparagus.jpg' },
    { id: 15, name: 'Mushroom', price: 3.79, unit: 'kg', image: 'https://example.com/images/mushroom.jpg' },
  ],
};
