const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Black Pink Stickers',
  },
  {
    category_name: 'IKON Stickers',
  },
  {
    category_name: 'BTS Stickers',
  },
  {
    category_name: 'Red Velvet Stickers',
  },
  {
    category_name: 'Astro Stickers',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
