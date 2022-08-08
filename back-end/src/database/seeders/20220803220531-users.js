module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04', // senha: md5('--adm2@21!!--')
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6', // senha: md5('fulana@123')
        role: 'seller',
      },
      {
        id: 3,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '26b8c99c1facd222294b37427c7fd8fe', // senha: md5('zebirita@123')
        role: 'customer',
      },
    
    ],

    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
