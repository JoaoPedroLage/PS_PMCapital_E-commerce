/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'tickets',
    [
      {
        id: 1,
        name: 'ingresso rock in rio 2022',
        price: 312.50,
      },
      {
        id: 2,
        name: 'ingresso show L7',
        price: 50,
      },
      {
        id: 3,
        name: 'ingresso Baile da Arena',
        price: 110,
      },
      {
        id: 4,
        name: 'ingresso os melhores do Funk',
        price: 75,
      },
      {
        id: 5,
        name: 'ingresso Planeta Brasil',
        price: 200,
      },
      {
        id: 6,
        name: 'ingresso Rave Universo Paralello',
        price: 449,
      },
      {
        id: 7,
        name: 'ingresso show Lana Del Rey',
        price: 499,
      
      },
      {
        id: 8,
        name: 'ingresso So Track Boa',
        price: 279,
      },
      {
        id: 9,
        name: 'ingresso area vip show Lady Gaga',
        price: 889,
      },
      {
        id: 10,
        name: 'ingresso area vip Festival Sertanejo',
        price: 350,
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('tickets', null, {}),
};
