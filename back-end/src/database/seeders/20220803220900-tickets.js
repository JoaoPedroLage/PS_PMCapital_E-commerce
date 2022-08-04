/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'tickets',
    [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: 2.20,
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.50,
      },
      {
        id: 3,
        name: 'Antarctica Pilsen 300ml',
        price: 2.49,
      },
      {
        id: 4,
        name: 'Brahma 600ml',
        price: 7.50,
      },
      {
        id: 5,
        name: 'Skol 269ml',
        price: 2.19,
      },
      {
        id: 6,
        name: 'Skol Beats Senses 313ml',
        price: 4.49,
      },
      {
        id: 7,
        name: 'Becks 330ml',
        price: 4.99,
      
      },
      {
        id: 8,
        name: 'Brahma Duplo Malte 350ml',
        price: 2.79,
      },
      {
        id: 9,
        name: 'Becks 600ml',
        price: 8.89,
      },
      {
        id: 10,
        name: 'Skol Beats Senses 269ml',
        price: 3.57,
      },
      {
        id: 11,
        name: 'Stella Artois 275ml',
        price: 3.49,
      },
    ],

    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('tickets', null, {}),
};
