const { Product } = require('../models');

const productData = [
  {
    product_name: 'Pink Sticker Pack',
    price: 10.95,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Yellow Sticker Pack',
    price: 10.95,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: 'Get What You Get Pack',
    price: 22.99,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: 'Black Sticker Pack',
    price: 12.99,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Irridescent Sticker Pack',
    price: 19.00,
    stock: 30,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
