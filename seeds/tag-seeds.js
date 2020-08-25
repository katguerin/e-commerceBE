const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'what',
  },
  {
    tag_name: 'was i',
  },
  {
    tag_name: 'doing',
  },
  {
    tag_name: 'before',
  },
  {
    tag_name: 'this?',
  },
  {
    tag_name: 'its gonna',
  },
  {
    tag_name: 'get better',
  },
  {
    tag_name: 'right?',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
